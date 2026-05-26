#!/usr/bin/env bash
set -euo pipefail
SRC="assets-inbox/SKD assets"
OUT="public/media"; IMG="public/img"
mkdir -p "$OUT" "$IMG"

# Mascot clips -> small, hardware-decoded H.264 MP4s + JPG posters.
#
# DECODE: the sources are Apple HEVC with a separate alpha layer. ffmpeg's software
# HEVC decoder cannot reconstruct the early frames of these clips (it emits
# "Could not find ref with POC" and returns transparent frames), which silently
# dropped the entire ENTRANCE animation -- the egg only "appeared", already settled,
# ~2.5s in, so the drop / roll / pop motion never showed. Apple's AVFoundation
# decodes every frame, so scripts/eggdecode.swift reads each .mov via AVFoundation,
# composites the egg over the brand cream, and writes an opaque PNG sequence (12fps,
# the source rate) that we encode from.
#
# PLAYBACK (set per clip in the UI, see MascotVideo):
#   loop -> clip loops forever. A plain loop snaps the last pose back to the first,
#           so we BOOMERANG (forward + reverse): last frame == first frame, seamless.
#   once -> clip plays once and the player freezes on its last frame. The window must
#           therefore END on a frame with the egg present so the freeze is never blank.
#
# Verified motion windows (seconds, frame-stepped via AVFoundation @ 12fps):
#   egg drop           0   -> 1.7  egg falls in, squashes on landing, settles  [once]
#   egg roll and bag   0   -> 2.6  egg stands by its bag, then rolls onto its side [once]
#   egg fork and spoon 0.5 -> 2.7  egg looks around with fork & spoon           [loop]
#   egg pops up        1.5 -> 3.5  egg idles/bobs (pop-in + walk-off trimmed)   [loop]
command -v swiftc >/dev/null || { echo "swiftc required (macOS) to decode the alpha HEVC sources" >&2; exit 1; }
TOOL="$(mktemp -t eggdecode)"
swiftc -O scripts/eggdecode.swift -o "$TOOL"

# The egg/content sits in the LOWER part of the 2560x1440 frame with a tall empty
# "sky" above it. A full-height crop bakes that sky in as whitespace above the egg.
# So each clip gets its OWN tight crop (crop=w:h:x:y, measured per clip) around just
# the content, then is scaled to a common HEIGHT (600). The cards render the video
# height-driven (see MascotVideo / DayAtSchool), so widths differ but heights match
# and there is no baked-in top whitespace.
# Entry: name | START | END | MODE | CROP(w:h:x:y on the 2560x1440 source)
for entry in \
  "egg drop|0|1.7|once|592:740:990:700" \
  "egg roll and bag|0|2.6|once|1360:660:660:760" \
  "egg fork and spoon|0.5|2.7|loop|840:720:840:720" \
  "egg pops up|1.5|3.5|loop|592:700:990:740"; do
  IFS='|' read -r name ss to mode crop <<< "$entry"
  slug="$(echo "$name" | tr ' ' '-')"
  tmp="$(mktemp -d)"
  "$TOOL" "$SRC/eggs hevc/$name.mov" "$tmp" >/dev/null
  # PNG sequence is 12fps; trim by time, tight-crop, scale to height 600 (even
  # width), then boomerang if looping.
  base="[0:v]trim=${ss}:${to},setpts=PTS-STARTPTS,crop=${crop},scale=-2:600,format=yuv420p"
  if [ "$mode" = "loop" ]; then
    vf="${base}[b];[b]split[a][c];[c]reverse[r];[a][r]concat=n=2:v=1,format=yuv420p[out]"
  else
    vf="${base}[out]"
  fi
  ffmpeg -v error -y -framerate 12 -i "$tmp/f_%05d.png" \
    -filter_complex "$vf" -map "[out]" \
    -c:v libx264 -profile:v high -crf 18 -movflags +faststart -an "$OUT/$slug.mp4"
  # Poster: once -> last frame (the frozen resting state); loop -> a mid frame.
  if [ "$mode" = "once" ]; then
    ffmpeg -v error -y -sseof -0.1 -i "$OUT/$slug.mp4" -frames:v 1 -pix_fmt yuvj420p -q:v 3 "$OUT/$slug-poster.jpg"
  else
    ffmpeg -v error -y -ss 0.6 -i "$OUT/$slug.mp4" -frames:v 1 -pix_fmt yuvj420p -q:v 3 "$OUT/$slug-poster.jpg"
  fi
  rm -rf "$tmp"
done
rm -f "$TOOL"
echo "mascot videos done"
