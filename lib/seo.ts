import { SITE } from '@/lib/site'

// schema.org JSON-LD builders. The organization is typed as both Preschool
// (accurate education category) and LocalBusiness (so Google emits local
// business signals: name, address, phone). It is referenced by @id from the
// WebSite and page graphs.
//
// TODO(owner): add `geo` (GeoCoordinates) and `openingHoursSpecification` once
// exact coordinates and opening hours are confirmed -- both strengthen local SEO.

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
    areaServed: { '@type': 'City', name: 'Buriram' },
    sameAs: [SITE.facebook]
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
