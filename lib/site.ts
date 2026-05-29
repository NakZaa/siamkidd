export const SITE = {
  nameEn: 'Siam Kid D School',
  nameTh: 'สยามคิดดี',
  phone: { tel: '+6644602070', display: '+66 (0)44 602 070' },
  facebook: 'https://www.facebook.com/SiamKidDSchool',
  mapUrl: 'https://maps.app.goo.gl/nK9X814XjuFv1iGf7',
  mapEmbed:
    'https://www.google.com/maps?q=Siam+Kid+D+School+Buriram&output=embed',
  address: {
    line1: '43/8-9 Thani Road, Nai Mueang',
    line2: 'Buriram 31000 Thailand',
    full: '43/8-9 Thani Road, Nai Mueang, Buriram 31000 Thailand'
  },
  // Structured (schema.org PostalAddress) form, used for SEO / JSON-LD.
  postal: {
    streetAddress: '43/8-9 Thani Road, Nai Mueang',
    addressLocality: 'Buriram',
    addressRegion: 'Buriram',
    postalCode: '31000',
    addressCountry: 'TH'
  },
  // Decimal coordinates of the school's pin, used for LocalBusiness geo JSON-LD.
  geo: { latitude: 14.9971681, longitude: 103.0984342 },
  // Opening hours, used for `openingHoursSpecification` JSON-LD. Weekdays only.
  hours: { weekdays: { opens: '08:00', closes: '18:00' } },
  founded: 2011, // school established 2011
  url: 'https://siamkiddschool.com',
  locale: 'en_US',
  // Keyword-rich default meta description (the hero tagline is brand copy, not
  // a good search snippet).
  description:
    'Siam Kid D School is a nursery and kindergarten in Buriram, Thailand, with native English teachers and a UK Early Years (EYFS) curriculum.',
  ogImageAlt: 'Welcome to Siam Kid D, a nursery and kindergarten in Buriram'
} as const
