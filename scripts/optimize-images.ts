import { mkdirSync } from 'node:fs'
import sharp from 'sharp'

mkdirSync('public/img', { recursive: true })
mkdirSync('app', { recursive: true })

const OLD = '/tmp/siamkidd-old/src/assets'
const INB = 'assets-inbox/SKD assets'

// Helper: resize fit inside, no enlargement
function inside(src: string, dest: string, maxW: number, maxH?: number) {
  return sharp(src)
    .resize(maxW, maxH ?? maxW, { fit: 'inside', withoutEnlargement: true })
    .webp({ lossless: false, quality: 85 })
    .toFile(dest)
}

// Helper: resize fit inside → png (preserve alpha)
function insidePng(src: string, dest: string, maxW: number) {
  return sharp(src)
    .resize(maxW, maxW, { fit: 'inside', withoutEnlargement: true })
    .png()
    .toFile(dest)
}

async function run() {
  const jobs: Promise<sharp.OutputInfo>[] = []

  // Logo webp + png (max 512)
  jobs.push(inside(`${INB}/IMG_2402.PNG`, 'public/img/logo.webp', 512))
  jobs.push(insidePng(`${INB}/IMG_2402.PNG`, 'public/img/logo.png', 512))

  // Mascot reading (max 600)
  jobs.push(
    inside(`${INB}/IMG_6884.PNG`, 'public/img/mascot-reading.webp', 600)
  )

  // Doodles from old repo
  jobs.push(
    inside(`${OLD}/light_bulb.png`, 'public/img/doodle-lightbulb.webp', 400)
  )
  jobs.push(
    inside(`${OLD}/services/card1.png`, 'public/img/doodle-cat.webp', 400)
  )
  jobs.push(
    inside(`${OLD}/services/card2.png`, 'public/img/doodle-candy.webp', 400)
  )
  jobs.push(
    inside(`${OLD}/services/card3.png`, 'public/img/doodle-fish.webp', 400)
  )
  jobs.push(
    inside(`${OLD}/services/card4.png`, 'public/img/doodle-bee.webp', 400)
  )
  jobs.push(inside(`${OLD}/happy.png`, 'public/img/doodle-bunny.webp', 400))
  jobs.push(inside(`${OLD}/rainbow.png`, 'public/img/doodle-rainbow.webp', 400))

  // Stars
  jobs.push(
    inside(`${OLD}/testimonials/star1.png`, 'public/img/star1.webp', 200)
  )
  jobs.push(
    inside(`${OLD}/testimonials/star2.png`, 'public/img/star2.webp', 200)
  )
  jobs.push(
    inside(`${OLD}/testimonials/star3.png`, 'public/img/star3.webp', 200)
  )

  // OG image: 1200x630 cover, jpeg 82
  jobs.push(
    sharp(`${INB}/IMG_1208.JPG`)
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 82 })
      .toFile('public/og.jpg') as Promise<sharp.OutputInfo>
  )

  // Favicon icons (fit contain, transparent bg)
  jobs.push(
    sharp(`${INB}/IMG_2402.PNG`)
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('app/icon.png') as Promise<sharp.OutputInfo>
  )
  jobs.push(
    sharp(`${INB}/IMG_2402.PNG`)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('app/apple-icon.png') as Promise<sharp.OutputInfo>
  )

  const results = await Promise.allSettled(jobs)
  let ok = 0
  let fail = 0
  for (const r of results) {
    if (r.status === 'fulfilled') {
      ok++
    } else {
      fail++
      console.error('FAIL:', r.reason)
    }
  }
  console.log(`optimize-images: ${ok} ok, ${fail} failed`)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
