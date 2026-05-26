import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// priority/changeFrequency hint relative importance + freshness to crawlers.
const entries: {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}[] = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/activities', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/legal/terms', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/legal/privacy', changeFrequency: 'yearly', priority: 0.2 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority
  }))
}
