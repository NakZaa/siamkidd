# Siam Kid D (สยามคิดดี)

Bilingual, mobile-first kindergarten website for Siam Kid D School in Buriram,
Thailand. Built with Next.js and deployed on Vercel.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui, Tabler Icons |
| i18n | next-intl 4 — EN (default) + Thai |
| Linter/formatter | Biome |
| Runtime/package manager | Bun |
| Testing | Bun test (unit), Playwright (e2e, mobile) |
| CI | GitHub Actions |
| Hosting | Vercel |

---

## Getting started

```bash
bun install
bun run dev      # http://localhost:3000
```

---

## Scripts

| Command | What it does |
|---|---|
| `dev` | Next.js dev server with Turbopack |
| `build` | Production build (static export) |
| `start` | Serve the production build locally |
| `typecheck` | TypeScript type-check (no emit) |
| `format` | Biome format with auto-fix |
| `lint` | Biome lint only |
| `check` | Biome format + lint with auto-fix |
| `test` | Bun unit tests |
| `test:e2e` | Playwright e2e tests (mobile viewport) |

---

## Editing content and copy

All user-facing text lives in two JSON files:

- `messages/en.json` — English (default, production-ready)
- `messages/th.json` — Thai (draft; pending review by the school owner)

The files are structured by page/section. Edit the relevant key to change any
string on the site.

School facts — phone number, email, address, Facebook URL, Google Maps links,
and founding year — are defined once in `lib/site.ts`. This is the single
source of truth; all components import from there.

Look for `TODO(owner)` comments in the codebase for items that need the
school's confirmation before going live:

- `hello@siamkiddschool.com` — confirm this is the real contact address
- `founded: 2014` — confirm the exact founding year
- Legal page copy — have the owner review before publishing

---

## Adding and updating assets

Drop new source files in `assets-inbox/`, then run the appropriate script:

**Videos (mascot animations)**

```bash
./scripts/build-media.sh
```

This composites the Apple HEVC source clips onto a cream background (`#fbfbfe`)
and produces opaque H.264 MP4s plus poster images. Transparent web video was
not feasible from the HEVC sources, so mascot videos must always sit on cream
or `bg-background` areas — do not place them over coloured or dark sections.

**Images**

```bash
bun run scripts/optimize-images.ts
```

This converts images to WebP with appropriate sizing. Outputs land in `public/`.

---

## Internationalization

This project uses [next-intl](https://next-intl.dev). English is the default
locale and URLs are unprefixed (`/about`, `/contact`). Thai uses the `/th/`
prefix (`/th/about`, `/th/contact`).

To add a new locale:

1. Edit `i18n/routing.ts` — add the locale code to the `locales` array.
2. Create `messages/<locale>.json` with translations for all keys present in
   `messages/en.json`.

---

## Project structure

```
app/
  [locale]/          # All routes (about, activities, contact, legal)
  globals.css
  manifest.ts / robots.ts / sitemap.ts
components/
  ui/                # Base UI primitives (shadcn/ui)
  layout/            # Header, Footer, MobileNav, LanguageToggle
  media/             # MascotVideo, YouTubeFacade, Doodle, ScrollReveal
  sections/          # Hero, Mission, Expertise, Trust, Testimonials, …
hooks/               # Client-side React hooks
lib/
  site.ts            # School facts (single source of truth)
  utils.ts / youtube.ts
i18n/
  routing.ts         # Locale config
  request.ts / navigation.ts
messages/
  en.json            # English copy
  th.json            # Thai copy (draft)
content/
  legal/             # Terms and privacy markdown
public/              # Static assets (images, videos, fonts)
scripts/             # build-media.sh, optimize-images.ts
.github/
  workflows/ci.yml   # GitHub Actions CI
```

---

## Deployment

The site deploys to [Vercel](https://vercel.com):

1. Import the repository in the Vercel dashboard.
2. Framework is auto-detected as Next.js.
3. Set the build command to `bun run build` if Vercel does not pick it up
   automatically.
4. No environment variables are needed — the site is fully static (SSG).

The production domain `siamkiddschool.com` points to the Vercel project.

The `main` branch is protected. Husky blocks direct pushes to `main`. Open a
pull request; CI runs automatically and must pass before merging.

---

## Quality gates

| Gate | When it runs | What it checks |
|---|---|---|
| Husky pre-commit | Every commit | Biome format + lint (via lint-staged) |
| Husky pre-push | Every push | TypeScript typecheck; blocks direct push to `main` |
| GitHub Actions CI | PRs + pushes to `main` | Biome, typecheck, build, unit tests, e2e tests |
