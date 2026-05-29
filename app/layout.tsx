import type { Metadata, Viewport } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { JsonLd } from '@/components/seo/JsonLd'
import { body, display, thai } from '@/lib/fonts'
import { organizationLd, websiteLd } from '@/lib/seo'
import { SITE } from '@/lib/site'
import './globals.css'

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: '#4f834d'
}

// Comma form (not a middot) so the home og:title/twitter:title — which inherit
// this default — match the home page's own comma-form <title> (app/page.tsx).
const titleDefault = `${SITE.nameEn}, Nursery & Kindergarten in Buriram`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: titleDefault,
    template: `%s · ${SITE.nameEn}`
  },
  description: SITE.description,
  applicationName: SITE.nameEn,
  authors: [{ name: SITE.nameEn, url: SITE.url }],
  creator: SITE.nameEn,
  publisher: SITE.nameEn,
  category: 'education',
  keywords: [
    'Siam Kid D',
    'สยามคิดดี',
    'kindergarten Buriram',
    'bilingual kindergarten',
    'nursery and kindergarten Buriram',
    'preschool Buriram',
    'nursery Buriram',
    'English kindergarten Thailand',
    'EYFS curriculum'
  ],
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, email: false, address: false },
  openGraph: {
    type: 'website',
    siteName: SITE.nameEn,
    title: titleDefault,
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: SITE.ogImageAlt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: titleDefault,
    description: SITE.description,
    images: [{ url: '/og.jpg', alt: SITE.ogImageAlt }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  appleWebApp: { capable: true, title: 'Siam Kid D', statusBarStyle: 'default' }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${thai.variable} h-full antialiased`}
    >
      <body className="bg-background min-h-dvh">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <Header />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
