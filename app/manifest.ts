import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.nameEn,
    short_name: 'Siam Kid D',
    description: 'Nursery & kindergarten in Buriram, Thailand',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbfbfe',
    theme_color: '#4f834d',
    icons: [
      { src: '/icon.png', sizes: '256x256', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
}
