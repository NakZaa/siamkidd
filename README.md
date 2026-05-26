# Siam Kid D (สยามคิดดี)

Mobile-first marketing website for **Siam Kid D School**, a bilingual
kindergarten in Buriram, Thailand. Built with Next.js and deployed on Vercel.

The website itself is **English-only** (an earlier bilingual/`next-intl` setup
was removed).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui (Base UI), Tabler Icons |
| Fonts | Nunito (body) + Fredoka (display), self-hosted via `next/font` |
| Linter / formatter | Biome |
| Runtime / package manager | Bun |
| Testing | Bun test (unit), Playwright (e2e + axe a11y, mobile) |
| CI | GitHub Actions |
| Hosting | Vercel (Node 22) |

---

## Getting started

```bash
bun install
bun run dev      # http://localhost:3000
```

Requires Node 20.9+ (Next 16) and Bun.

---

## Scripts

| Command | What it does |
|---|---|
| `dev` | Next.js dev server (Turbopack) |
| `build` | Production build |
| `start` | Serve the production build locally |
| `typecheck` | TypeScript type-check (no emit) |
| `format` | Biome format (auto-fix) |
| `lint` | Biome lint |
| `check` | Biome format + lint + import sort (auto-fix). Run before pushing — CI runs `biome check`, which is stricter than `lint`. |
| `test` | Bun unit tests |
| `test:e2e` | Playwright e2e (mobile viewport + a11y) |

---

## Content and copy

- **All user-facing text** lives in `lib/copy.ts` (a typed `copy` object). Edit a key to change any string on the site.
- **School facts** (phone, address, Facebook / Messenger, Google Maps, founding year) live once in `lib/site.ts`, the single source of truth. The site intentionally has **no email channel** — contact is phone, Facebook Messenger, and the map.
- **Legal pages** are markdown in `content/legal/` (`terms.md`, `privacy.md`). Have them reviewed by someone qualified in Thai law before launch.

Look for `TODO(owner)` comments for anything still worth confirming (for example, geo coordinates and opening hours in `lib/seo.ts` for richer local SEO).

---

## SEO

- Per-page metadata and canonical URLs (`app/layout.tsx`, each `page.tsx`).
- Open Graph + Twitter cards; the social image is `public/og.jpg`.
- JSON-LD structured data (`lib/seo.ts` + `components/seo/JsonLd.tsx`): a Preschool / LocalBusiness organization, a WebSite, and per-page breadcrumbs.
- `app/sitemap.ts` and `app/robots.ts`.

All absolute URLs derive from `SITE.url` in `lib/site.ts`. Update it if the production domain changes.

---

## Mascot animations (egg clips)

The "A day at Siam Kid D" section and the CTA use short egg clips. The sources
are **Apple HEVC with an alpha layer**, which ffmpeg's software decoder cannot
fully decode (it drops the entrance frames), so the build script decodes them
with **Apple AVFoundation**:

```bash
./scripts/build-media.sh    # macOS only (uses swiftc + AVFoundation + ffmpeg)
```

`scripts/eggdecode.swift` decodes each clip and composites it over the brand
cream (`#fbfbfe`); `build-media.sh` then crops, scales, and encodes small H.264
MP4s plus poster JPGs into `public/media`. Looping clips are boomeranged
(forward + reverse) for a seamless loop; the "arrive" and "home time" clips play
once and freeze on their last frame.

The generated MP4s and posters are committed, so the Vercel build needs no
ffmpeg or Swift. Because clips are composited onto cream, mascot videos must sit
on cream / `bg-background` areas, not over coloured or dark sections.

---

## Project structure

```
app/                 # routes: /, /about, /activities, /contact, /legal/[slug]
  layout.tsx         # root metadata + site-wide JSON-LD
  globals.css        # Tailwind v4 theme + utilities
  manifest.ts · robots.ts · sitemap.ts · icon.png · apple-icon.png
components/
  ui/                # shadcn (Base UI) primitives
  layout/            # Header (liquid-glass nav), Footer
  media/             # MascotVideo, YouTubeFacade, Doodle, ScrollReveal
  sections/          # Hero, Trust, Mission, Expertise, DayAtSchool, Testimonials, …
  seo/               # JsonLd
hooks/               # client hooks (useScrolled, useReducedMotion, useInView)
lib/
  site.ts            # school facts (single source of truth)
  copy.ts            # all UI copy
  seo.ts             # JSON-LD builders
  fonts.ts · utils.ts · youtube.ts
content/legal/       # terms.md, privacy.md
public/              # images, generated media, og.jpg, icons
scripts/             # build-media.sh, eggdecode.swift, optimize-images.ts
.github/workflows/   # ci.yml
```

---

## Deployment (Vercel)

1. Import the repo; Vercel auto-detects **Next.js** and **Bun** (`bun.lock`).
2. Set **Node.js Version = 22.x**.
3. Leave build / output / install commands on the framework defaults. **No environment variables are needed.**
4. Attach the **siamkiddschool.com** domain (canonical / OG / sitemap URLs all point there).

This is a Next.js **server** build (image optimization is enabled), not a static
export, so it needs a Node host like Vercel. `ci.yml` reports a Vercel
deployment check (`Vercel - siamkidd: ci`) so production promotion waits on CI.

---

## Quality gates

| Gate | When | Checks |
|---|---|---|
| Husky pre-commit | every commit | Biome via `lint-staged` |
| Husky pre-push | every push | TypeScript typecheck; blocks direct pushes to `main` |
| GitHub Actions CI | PRs + pushes to `main` | `biome check`, typecheck, build, unit tests |

Playwright e2e (`bun run test:e2e`) runs locally (it uses the WebKit mobile
device) but is not part of CI.

The pre-push hook blocks direct pushes to `main` to encourage a PR-based flow
(so CI runs on GitHub before merge). Use `git push --no-verify` only when you
deliberately need to bypass it.
