import { Fredoka, Noto_Sans_Thai_Looped, Nunito } from 'next/font/google'

export const body = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

export const display = Fredoka({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
})

// Thai glyph coverage for Thai-language content (e.g. parent testimonials).
// The Latin fonts above carry no Thai glyphs, so Thai characters fall through
// to this in the font-family stack (see globals.css).
export const thai = Noto_Sans_Thai_Looped({
  subsets: ['thai'],
  variable: '--font-thai',
  display: 'swap'
})
