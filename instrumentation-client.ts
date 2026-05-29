import posthog from 'posthog-js'

// Only initialise when a token is configured. Without this guard, a missing
// NEXT_PUBLIC_POSTHOG_TOKEN (e.g. on Vercel before the env var is set) would
// init PostHog with an empty key and fire rejected requests; instead we no-op.
const token = process.env.NEXT_PUBLIC_POSTHOG_TOKEN

if (token) {
  posthog.init(token, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-01-30',
    capture_exceptions: true,
    // Events-only site: we never read feature flags, so skip that request
    // entirely. Removes the "older feature flags endpoint" warning and the
    // related AbortError noise, and saves a network round-trip per load.
    advanced_disable_feature_flags: true,
    debug: process.env.NODE_ENV === 'development'
  })
}
