import AVFoundation
import AppKit
import CoreImage

// Decode an Apple HEVC+alpha .mov via AVFoundation (which, unlike ffmpeg's
// software decoder, handles every frame), composite each frame over the brand
// cream colour, and write an opaque PNG sequence. Args: <input.mov> <outdir>
let args = CommandLine.arguments
guard args.count >= 3 else { FileHandle.standardError.write("usage: input outdir\n".data(using: .utf8)!); exit(1) }
let input = args[1]
let outdir = args[2]
try? FileManager.default.createDirectory(atPath: outdir, withIntermediateDirectories: true)

let cream = CIImage(color: CIColor(red: 0xFB/255.0, green: 0xFB/255.0, blue: 0xFE/255.0))

let asset = AVURLAsset(url: URL(fileURLWithPath: input))
let sema = DispatchSemaphore(value: 0)
var track: AVAssetTrack?
asset.loadTracks(withMediaType: .video) { tracks, _ in track = tracks?.first; sema.signal() }
sema.wait()
guard let vtrack = track else { FileHandle.standardError.write("no video track\n".data(using: .utf8)!); exit(2) }

let reader = try AVAssetReader(asset: asset)
let settings: [String: Any] = [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA]
let output = AVAssetReaderTrackOutput(track: vtrack, outputSettings: settings)
output.alwaysCopiesSampleData = false
reader.add(output)
reader.startReading()

let ctx = CIContext(options: [.workingColorSpace: NSNull()])
var i = 0
while reader.status == .reading {
  guard let sb = output.copyNextSampleBuffer() else { break }
  guard let px = CMSampleBufferGetImageBuffer(sb) else { continue }
  let egg = CIImage(cvPixelBuffer: px)
  let extent = egg.extent
  let bg = cream.cropped(to: extent)
  let composite = egg.composited(over: bg)
  guard let cg = ctx.createCGImage(composite, from: extent) else { continue }
  let rep = NSBitmapImageRep(cgImage: cg)
  guard let data = rep.representation(using: .png, properties: [:]) else { continue }
  let url = URL(fileURLWithPath: outdir).appendingPathComponent(String(format: "f_%05d.png", i))
  try data.write(to: url)
  i += 1
}
if reader.status == .failed { FileHandle.standardError.write("reader failed: \(reader.error?.localizedDescription ?? "?")\n".data(using: .utf8)!); exit(3) }
print(i)
