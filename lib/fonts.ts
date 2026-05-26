import { Fredoka, Nunito } from 'next/font/google'

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
