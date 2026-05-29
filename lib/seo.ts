import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

// schema.org JSON-LD builders. The organization is typed as both Preschool
// (accurate education category) and LocalBusiness (so Google emits local
// business signals: name, address, phone, geo, opening hours). It is
// referenced by @id from the WebSite and page graphs.

const ORG_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Preschool', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.nameEn,
    alternateName: SITE.nameTh,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/icon.png`,
    image: `${SITE.url}/og.jpg`,
    telephone: SITE.phone.tel,
    foundingDate: String(SITE.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.postal.streetAddress,
      addressLocality: SITE.postal.addressLocality,
      addressRegion: SITE.postal.addressRegion,
      postalCode: SITE.postal.postalCode,
      addressCountry: SITE.postal.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: SITE.hours.weekdays.opens,
        closes: SITE.hours.weekdays.closes
      }
    ],
    areaServed: { '@type': 'City', name: 'Buriram' },
    sameAs: [SITE.facebook],
    hasMap: SITE.mapUrl,
    // Coarse price tier (a Google-recommended LocalBusiness signal). Placeholder
    // mid-range value; the owner can refine once tuition tiers are confirmed.
    priceRange: '$$'
  }
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.nameEn,
    url: SITE.url,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID }
  }
}

/**
 * FAQPage schema. Visible Q&A on the page must match these strings exactly
 * (Google policy) -- both are sourced from the same `copy.about.faq` array.
 */
export function faqPageLd(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  }
}

/**
 * Per-page metadata with COMPLETE openGraph/twitter blocks. Next.js does NOT
 * deep-merge nested metadata objects, so a page that sets only part of
 * `openGraph` would silently drop the inherited image/siteName/locale. Building
 * the full block here gives each page its own og:title / og:description /
 * og:url while keeping the shared OG image. `heading` is templated into the
 * visible <title> by the root layout; we mirror that into the social title.
 */
export function pageMeta({
  heading,
  description,
  path
}: {
  heading: string
  description: string
  path: string
}): Metadata {
  const socialTitle = `${heading} · ${SITE.nameEn}`
  const url = `${SITE.url}${path}`
  return {
    title: heading,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.nameEn,
      title: socialTitle,
      description,
      url,
      locale: SITE.locale,
      images: [
        { url: '/og.jpg', width: 1200, height: 630, alt: SITE.ogImageAlt }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [{ url: '/og.jpg', alt: SITE.ogImageAlt }]
    }
  }
}

/** BreadcrumbList for SERP breadcrumbs. Pass crumbs from Home to current page. */
export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`
    }))
  }
}
