import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    // Disallow the PostHog analytics reverse-proxy paths (see next.config.ts);
    // they are non-content endpoints, not pages to crawl or index.
    rules: { userAgent: '*', allow: '/', disallow: '/ingest/' },
    sitemap: `${SITE.url}/sitemap.xml`
  }
}
