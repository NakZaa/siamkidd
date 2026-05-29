import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// priority/changeFrequency hint relative importance + freshness to crawlers.
// lastModified is a STABLE per-route date (bump a route's date only when that
// page's content actually changes). Stamping every URL with the build time
// trains crawlers to distrust the lastmod signal, so we avoid `new Date()`.
const entries: {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  lastModified: string
}[] = [
  {
    path: '/',
    changeFrequency: 'monthly',
    priority: 1,
    lastModified: '2026-05-29'
  },
  {
    path: '/about',
    changeFrequency: 'yearly',
    priority: 0.8,
    lastModified: '2026-05-29'
  },
  {
    path: '/activities',
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: '2026-05-29'
  },
  {
    path: '/contact',
    changeFrequency: 'yearly',
    priority: 0.7,
    lastModified: '2026-05-29'
  },
  {
    path: '/legal/terms',
    changeFrequency: 'yearly',
    priority: 0.2,
    lastModified: '2026-05-29'
  },
  {
    path: '/legal/privacy',
    changeFrequency: 'yearly',
    priority: 0.2,
    lastModified: '2026-05-29'
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority
  }))
}
