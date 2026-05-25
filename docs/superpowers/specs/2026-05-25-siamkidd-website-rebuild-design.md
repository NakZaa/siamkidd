# Siam Kid D — Website Rebuild Design Spec

**Date:** 2026-05-25
**Status:** Approved (design), pending spec review → implementation plan
**Old site:** Astro (astro-sphere template) at https://siamkiddschool.com — source: github.com/NakZaa/siamkidd

---

## 1. Goal & context

Rebuild the Siam Kid D (Thai: **สยามคิดดี**) kindergarten/nursery website in the
latest **Next.js**. It is a **fully static, hardcoded brochure site** (no database,
no CMS, no auth). The single most important constraint:

> **Mobile-first.** The overwhelming majority of visitors are Thai parents on
> phones. The mobile experience must be both **fast** and **beautiful**. Desktop
> is a graceful enhancement, not the primary target.

### The school (verified facts)
- Kindergarten/nursery in **Buriram, Thailand** — 43/8-9 Thani Road, Nai Mueang, Buriram 31000
- **10+ years** operating
- Phone: **+66 (0)44 602 070** · Facebook: **facebook.com/SiamKidDSchool**
- Bilingual Thai/English with **native English teachers**
- Follows the **UK EYFS** (Early Years Foundation Stage) curriculum
- Parents value **safety/security** highly (cited in testimonials)

### Mission / voice
> "We believe that early education should be fun and engaging, building
> self-confidence and independence to form the foundations for the future.
> The results speak for themselves."

Tagline: *"Memories of childhood stay with us forever, so let's make those
memories count!"*

### Brand identity (preserve & refine)
- Egg-shaped baby-bird **mascots** (white body, yellow beak, dark feet)
- Hand-drawn, childlike **doodles** (cat-caterpillar, candy, narwhal-fish, bee,
  rainbow, bunny, lightbulb, stars) — authentic, warm, NOT generic clip-art
- Warm **green** palette + soft **yellow** accent on a **paper-textured** off-white
- Playful, joyful, trustworthy. The hand-crafted charm is the differentiator and
  must survive the rebuild.

---

## 2. Decisions (locked with the owner)

| Decision | Choice |
|---|---|
| Framework | Next.js (latest) App Router + React + TypeScript |
| Runtime / pkg mgr | **Bun** |
| Rendering | Static generation (SSG), deployed on **Vercel** |
| Styling | Tailwind CSS + **shadcn/ui** |
| UI icons | **Tabler Icons** (`@tabler/icons-react`) — not Lucide/Heroicons |
| Doodle/mascot art | Existing PNGs + transparent mascot videos (personality layer) |
| Formatting/lint | **Biome** (existing config; enable recommended lint rules) |
| i18n | **Bilingual, English default** + Thai toggle, via `next-intl` |
| Locale routing | EN unprefixed (`/about`), Thai prefixed (`/th/about`) |
| Pages | Home, **About (new)**, Activities, Contact (+ legal: terms/privacy) |
| Contact channels | Tap-to-call, Facebook Messenger, Email, Google Maps |
| Visual ambition | Preserve & refine the playful identity |
| Monorepo / Turbo | **No** — single app (site is static; complexity not warranted) |
| Database (Drizzle/Postgres) | **Dropped** — not needed for a static site |

Thai translations: **drafted by Claude from the English copy, reviewed/corrected
by the owner** (not a machine dump).

---

## 3. Information architecture

Global chrome on every page:
- **Header** (sticky, transparent→solid on scroll): logo, nav, EN/TH toggle,
  Facebook link. Mobile = hamburger → slide-in drawer (shadcn `Sheet`).
- **Footer**: logo, contact summary (phone/address/email), nav, Facebook,
  Terms/Privacy links, copyright.

### Home (`/`) — one mobile-first scroll
1. **Hero** — looping transparent **egg mascot animation** as centerpiece, bilingual
   headline, tagline, primary CTAs (Contact + Facebook). Paper-texture backdrop,
   soft floating motion.
2. **Mission strip** — the mission statement, visually distinct.
3. **Why Siam Kid D?** — "why us" YouTube video (lazy facade).
4. **Our expertise** — 4 cards (Priorities, Importance of Education, English
   Proficiency, Curriculum/EYFS), each with its doodle (cat/candy/fish/bee).
5. **Trust strip** — 10+ years · native English teachers · EYFS · safe & secure
   (Tabler icons + short labels).
6. **Our students** — students YouTube video (lazy facade).
7. **Testimonials** — 4 parent quotes (mixed EN/TH preserved), hand-drawn stars,
   carousel on mobile.
8. **CTA band** — "Join us today" → Contact + Facebook. Optional mascot accent
   ("roll and bag").

### About (`/about`) — NEW
School story (10+ years in Buriram), mission/philosophy, the pillars (learning
through play, EYFS, bilingual + native English teachers, safety). Uses the
reading egg-bird mascot. Claude drafts copy from verified facts; **clearly-marked
placeholders** for any history/milestones the owner wants to add later.

### Activities (`/activities`)
Intro copy + 4 event videos (City Pillar Shrine of Buriram, 10th Anniversary,
Annual Christmas Party, Children's Day) as titled cards with doodle accents.
Layout leaves room to add a **photo gallery** later.

### Contact (`/contact`)
Friendly "arrange a tour" intro + contact cards:
- **Phone** — `tel:+6644602070` tap-to-call
- **Facebook Messenger** — m.me / page link
- **Email** — placeholder `hello@siamkiddschool.com` until owner confirms real address
- **Address** — with **embedded Google Map** to the Buriram location

### Legal (`/legal/terms`, `/legal/privacy`)
Carried over from the old site, de-templated (remove astro-sphere author
references). Owner to review wording.

---

## 4. Bilingual implementation (`next-intl`)

- Locales `['en', 'th']`, `defaultLocale: 'en'`, `localePrefix: 'as-needed'`
  → EN URLs unprefixed, Thai under `/th/...`.
- App Router structure: `app/[locale]/...` with `next-intl` middleware.
- Static export of both locales via `generateStaticParams` + `setRequestLocale`.
- All copy in `messages/en.json` and `messages/th.json` (typed message keys).
- `<html lang>` set per locale; per-locale heading font (see §5).
- SEO: `hreflang` alternates + localized `<title>`/`<meta>` per page/locale.
- Language toggle in header swaps to the equivalent route in the other locale and
  persists preference (cookie, read by middleware) so return visits keep choice.

---

## 5. Visual design system

### Color (from existing brand)
- `brand` `#3C643D`, `primary` `#4F834D` (+ existing 50–950 green scale)
- `accent` (soft yellow) `#F1DF8D`
- `background` `#fbfbfe`, ink text `black/75`
- Encoded as CSS variables + Tailwind theme tokens + shadcn token mapping.
- Light mode only (`color-scheme: light`). No dark mode.

### Typography (proposed — tunable during build)
- **English headings:** a rounded, friendly display face (Baloo 2 / Fredoka)
- **Thai headings:** playful Thai face (**Itim** or **Mali**) to echo the doodles
- **Body (both):** **Noto Sans Thai** (covers Latin + Thai cleanly)
- Loaded via `next/font` (self-hosted, subset, `display: swap`, preloaded).
  Heading font switches by `lang` so each language reads naturally.

### Texture & shape
- Subtle paper-grain background (lightweight tiling texture or CSS), echoing the
  "Welcome to Siam Kid D" banner.
- Generous rounding (rounded-3xl), soft shadows, airy spacing — gentle, childlike.

### Components
- **shadcn/ui:** Button, Sheet (mobile nav), Card, Carousel (Embla), Accordion,
  AspectRatio, Separator, Badge.
- **Custom:**
  - `MascotVideo` — transparent looping mascot (see §6)
  - `YouTubeFacade` — thumbnail + play button; loads iframe only on tap
  - `Doodle` — wraps a hand-drawn PNG with consistent sizing/alt
  - `ScrollReveal` — IntersectionObserver fade-up (replaces old `.animate` JS)
  - `SectionHeading`, `LanguageToggle`, `PaperBackground`, `ContactCard`,
    `ExpertiseCard`, `TestimonialCarousel`, `Header`, `Footer`, `MobileNav`

### Motion
- CSS-first: scroll-reveal fade-ups, gentle mascot float, soft tap feedback.
- **All motion respects `prefers-reduced-motion`** (videos pause, animations off).
- Framer Motion only if a specific interaction needs it; default to CSS for perf.

---

## 6. Media handling (performance-critical)

### Transparent mascot videos (`assets-inbox/SKD assets/eggs hevc/*.mov`)
Confirmed by owner: **transparent background (alpha)**.
- Serve transparent video cross-platform via `<video autoplay muted loop playsinline>`:
  - **WebM / VP9 with alpha** (`yuva420p`) → Chrome, Firefox, Android
  - **HEVC / MP4 with alpha** (`hvc1`) → Safari, iOS
- Provide a **static poster** (first frame PNG) for instant paint; lazy-init
  playback via IntersectionObserver; pause when offscreen or reduced-motion.
- **Build risk:** ffmpeg may not read Apple HEVC alpha directly (decode warnings
  observed). Mitigation: use macOS `avconvert`/native export or a re-encode that
  preserves alpha; verify alpha visually before wiring in. Fallback: composite the
  mascot onto the paper background if a clean alpha pipeline isn't achievable.
- Keep originals untouched in `assets-inbox/`; generated web assets live in `public/`.

### YouTube videos (Home + Activities)
Replace eager iframes with a **facade**: render thumbnail + play button; inject the
iframe only on user tap. Major mobile-speed win vs. the current site.

### Images
- All raster art via `next/image` (AVIF/WebP, responsive `sizes`, `priority` only on
  hero/above-the-fold). Logo `IMG_2402.PNG`, reading mascot `IMG_6884.PNG`,
  doodles, etc. Favicon + OG image (`IMG_1208.JPG` welcome banner).

---

## 7. Project structure (single app)

```
.
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx            # html lang, fonts, header/footer, intl provider
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx
│   │   ├── activities/page.tsx
│   │   ├── contact/page.tsx
│   │   └── legal/[slug]/page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
├── components/
│   ├── ui/                       # shadcn components
│   ├── layout/                   # Header, Footer, MobileNav, LanguageToggle
│   └── sections/                 # Hero, Mission, Expertise, Trust, Testimonials, CTA, ContactCards
│   └── media/                    # MascotVideo, YouTubeFacade, Doodle, ScrollReveal
├── messages/
│   ├── en.json
│   └── th.json
├── i18n/
│   ├── routing.ts                # next-intl routing config
│   └── request.ts
├── lib/
│   ├── utils.ts                  # cn()
│   └── site.ts                   # phone, address, email, socials, map URL (single source of truth)
├── public/                       # optimized assets (logo, mascots, doodles, videos, og, favicon)
├── content/legal/                # terms.md, privacy.md
├── middleware.ts                 # next-intl locale middleware
├── next.config.ts
├── biome.json                    # existing
├── components.json               # shadcn config
├── tsconfig.json
└── package.json
```

Conventions (from `.agent/rules/web-stack.md`): ES6 arrow-function components,
`cn()` for class merging, Tabler Icons only, `bun`/`bunx`.
> Note: the rules file's example "blue→teal gradient / gray text" palette is a
> generic template default and is **overridden** by the real Siam Kid D green +
> yellow brand for this project.

---

## 8. Tooling, quality, deployment

- **Biome**: keep existing formatter config; enable recommended lint rules. Scripts:
  `format`, `lint`.
- **Husky** (existing): pre-commit `lint-staged` (Biome), pre-push `typecheck` +
  block direct push to `main`. Add a matching `lint-staged` config + `typecheck`
  script (`tsc --noEmit`).
- **GitHub Actions CI**: on PR — `bun install`, Biome check, `typecheck`, `build`.
  (The pre-push hook already references "CI checks on GitHub.")
- **Git**: working dir is not yet a git repo; initialize as first build step with a
  proper Next.js `.gitignore`. Feature branch (never commit straight to `main`).
- **Deploy**: Vercel (keeps automatic image optimization; existing domain points here).

### Performance / accessibility targets
- Lighthouse mobile **≥ 95** (Performance, Accessibility, Best Practices, SEO).
- Near-zero CLS (sized media, font preloading), fast LCP (static hero + poster).
- Semantic HTML, alt text on every image/doodle, visible focus states,
  tap targets ≥ 44px, AA contrast (verify green-on-yellow combos),
  `prefers-reduced-motion` honored.

---

## 9. Assumptions & open items (non-blocking)

- **Thai translations**: Claude drafts → owner reviews/corrects before launch.
- **School email**: placeholder until owner provides the real address.
- **Optional sections** (omitted unless owner provides): opening hours, age ranges,
  tuition/admissions. Easy to add later.
- **LINE**: not included now (owner didn't select it); trivial to add later.
- **About-page history specifics**: drafted from known facts + placeholders.
- **Legal pages**: owner to review wording.
- **Photo gallery**: deferred; Activities layout reserves space for it.

---

## 10. Out of scope (YAGNI)

No CMS, database, auth, blog, online enrollment/payments, search, dark mode,
monorepo, or Turbo. If any become needed, they are separate future projects.
