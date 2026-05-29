<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Siam Kid D School website. PostHog is initialised via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+) with a reverse proxy configured in `next.config.ts` so events route through `/ingest` rather than directly to PostHog, reducing interception by ad-blockers. Environment variables are stored in `.env.local` and never hardcoded. Seven business-critical events are now tracked across five files, with special focus on the contact-conversion funnel that matters most for a school marketing site.

| Event | Description | File |
|---|---|---|
| `contact_cta_clicked` | User clicks the primary "Contact Us" button in the hero section | `components/sections/Hero.tsx` |
| `facebook_link_clicked` | User clicks the Facebook link in the hero section | `components/sections/Hero.tsx` |
| `cta_band_clicked` | User clicks the "Contact Us" button in the bottom CTA band | `components/sections/CtaBand.tsx` |
| `call_link_clicked` | User clicks the phone number on the contact page to call the school | `components/contact/ContactLinks.tsx` |
| `facebook_message_clicked` | User clicks the Facebook message link on the contact page | `components/contact/ContactLinks.tsx` |
| `directions_clicked` | User clicks the Google Maps directions link on the contact page | `components/contact/ContactLinks.tsx` |
| `video_played` | User plays a YouTube video (title and URL recorded as properties) | `components/media/YouTubeFacade.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1640785)
- [Contact Conversion Funnel](/insights/BKhUGVgd) — tracks how many users who click a CTA follow through to call, message, or get directions
- [Contact Actions Over Time](/insights/iFWOkdhE) — shows the breakdown of contact methods parents choose
- [CTA Performance: Hero vs Bottom](/insights/TOlGJE3Z) — compares which call-to-action button drives more traffic to the contact page
- [Video Engagement](/insights/YMhusF60) — tracks how often visitors watch the embedded YouTube videos
- [Total Engagement (Last 30 Days)](/insights/A4OgJcLv) — a bold-number summary of all tracked interactions

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
