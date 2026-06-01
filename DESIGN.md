---
name: Siam Kid D School
description: Warm, sunlit brand system for a bilingual kindergarten, egg-chick mascots, nest greens, hand-drawn motion, and pillowy rounded surfaces.
colors:
  nest-green: "#3c643d"
  leaf-green: "#4f834d"
  ink-deep: "#264027"
  sunbeam: "#f1df8d"
  honey-glow: "#f6e08e"
  blush: "#f6b8c8"
  eggshell: "#fbfbfe"
  card-white: "#ffffff"
  sprout-50: "#eff5ef"
  sprout-100: "#dfecdf"
  sprout-200: "#bfd9c0"
  sprout-300: "#9fc6a0"
  ink: "#262626"
typography:
  display:
    fontFamily: "Fredoka, var(--font-thai), var(--font-sans), sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Fredoka, var(--font-thai), var(--font-sans), sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Fredoka, var(--font-thai), var(--font-sans), sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Nunito, var(--font-thai), system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  thai:
    fontFamily: "Noto Sans Thai Looped, Nunito, sans-serif"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "18px"
  3xl: "22px"
  4xl: "26px"
  full: "9999px"
spacing:
  gutter: "20px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  card: "20px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.nest-green}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.nest-green}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card-soft:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.3xl}"
    padding: "20px"
  trust-chip:
    backgroundColor: "{colors.sprout-100}"
    textColor: "{colors.nest-green}"
    rounded: "{rounded.full}"
    size: "64px"
  contact-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.nest-green}"
    rounded: "{rounded.3xl}"
    padding: "16px"
    height: "80px"
  faq-item:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.nest-green}"
    rounded: "{rounded.2xl}"
    padding: "16px 20px"
  badge:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.4xl}"
    padding: "2px 8px"
---

# Design System: Siam Kid D School

## 1. Overview

**Creative North Star: "The Sunny Second Home"**

Siam Kid D is a bilingual kindergarten, and the brand reads like the place a
parent hopes it is: a warm, light-filled second home where small children are
safe, happy, and growing. The whole system is built from the logo outward, three
round-bodied egg-chick mascots nesting on a deep green roundel, golden hand-drawn
lettering, a tiny lightbulb. So the surface is full of eggshell whites, growing
greens, and a buttery shaft of sunlight. Nothing is sharp, nothing is cold.

The feel is soft, rounded, and tactile. Buttons are full pills, cards have
pillowy 22px corners, and hand-drawn doodles peek from the edges of things. The
motion language is "sketched by hand and gently alive": line accents (the section
underline, sparkle/swoosh doodles) **draw themselves on** as they scroll into
view; decorative dots **float and parallax** softly against the scroll; a
**one-shot confetti burst** celebrates a moment, then settles. Every animation is
transform/opacity only and fully disabled under `prefers-reduced-motion`, so it
stays cheap on phones and respectful of the opt-out.

Depth is gentle. The page is flat and calm at rest, lifted only by soft glow
gradients behind the hero and a single frosted-glass nav floating over
everything; the only other elevation is a hover response, where an interactive
contact card rises a few pixels. Content is English-led; Thai appears in parents'
own words (testimonials), set in a looped Thai face that matches the brand's
roundness.

This system explicitly rejects three things, carried straight from the product
strategy. It is never **corporate / clinical**, never a **generic template**, and
never **cheap / amateur**. Playfulness is the whole point; the discipline is that
the playfulness is executed with real craft.

**Key Characteristics:**
- Egg-chick mascots and hand-drawn doodles as the signature decorative voice
- A "nest green + sunbeam + eggshell" palette pulled directly from the logo
- Hand-drawn motion: draw-on SVG strokes, soft float + scroll parallax, one-shot confetti
- Full-pill buttons and large soft radii everywhere; nothing sharp
- Flat at rest; elevation is a hover/state response, plus one floating glass nav
- A three-tier section-heading scale, not one flat size
- English-led, with Thai parent voices in a looped Thai face
- Reduced motion fully respected; mobile-first and thumb-first

## 2. Colors: The Nest & Sunbeam Palette

A warm-natured green system, deep botanical greens for structure and voice, soft
green tints for surfaces, and a single shaft of golden sunlight for joy. Color,
not shadow, is what gives the page life.

### Primary
- **Nest Green** (#3c643d): The brand's voice color, taken from the green roundel
  the mascots nest on. Every heading, the logo wordmark, nav links, and the
  primary pill button. When text reads as "the brand speaking," it is this green,
  not black.
- **Leaf Green** (#4f834d): A brighter mid-green for interactive surfaces, the
  shadcn `primary`, focus rings, and default badges.

### Secondary
- **Sunbeam Yellow** (#f1df8d): The logo's golden lettering, reborn as light.
  Used sparingly, confetti, the spotlight behind the hero logo, the draw-on
  stroke color, small highlights. An accent of light, never a text background.
- **Honey Glow** (#f6e08e / lighter #fce6a0): The warmer golds inside the hero's
  radial `bg-glow`, where sunlight pools at the top of the page.

### Tertiary
- **Blush Pink** (#f6b8c8): The celebration accent. A confetti dot near the hero
  logo and one of the colors in the confetti burst. Decorative sparkle only.

### Neutral
- **Eggshell White** (#fbfbfe): The page background, the off-white of the
  mascots' egg bodies. Cool and calm, the canvas everything sits on.
- **Card White** (#ffffff): Raised cards, the glass nav, FAQ and contact cards, a
  half step brighter than the eggshell page.
- **Sprout 50 / 100 / 200 / 300** (#eff5ef / #dfecdf / #bfd9c0 / #9fc6a0): The
  tinted-green surface family, panel fills, borders/dividers, nav and chip
  backgrounds. Sprout-300 also appears as a confetti color. This is how surfaces
  gain depth without a shadow.
- **Soft Charcoal Ink** (#262626): Body text, never at full strength, rendered at
  65–85% opacity over white/eggshell so prose stays gentle while holding ≥4.5:1.

### Named Rules
**The Green-Voice Rule.** Headings, labels, nav, and the wordmark are **Nest
Green (#3c643d)**, not black. Body prose is Soft Charcoal at 65–85%. The page
should feel green-spoken.

**The Sunbeam-as-Light Rule.** Sunbeam Yellow is light, not a surface, glow,
spotlight, draw-on strokes, confetti, small highlights. **Never** set text on a
Sunbeam fill or Sunbeam text on white; the yellow is too light to hold contrast.

**The Tint-Not-Shadow Rule.** Surfaces separate by sitting Card White or a Sprout
tint against Eggshell, not by casting shadows. Reach for a tint before a shadow.

## 3. Typography

**Display Font:** Fredoka (rounded geometric sans) — every heading (h1–h4), the
logo wordmark, nav.
**Body Font:** Nunito (soft humanist sans) — all prose, labels, UI text.
**Thai Font:** Noto Sans Thai Looped — Thai-language content only (parent
testimonials). The Latin faces carry no Thai glyphs, so Thai falls through to this
looped face, whose rounded loops match the brand's softness. It sits in the
font-family stack after the Latin fonts on body and headings, and `lang="th"` is
set on Thai text.

**Character:** Two rounded Latin sans chosen for warmth, plus a rounded Thai
companion, three families, at the cap, each with a clear job. Fredoka is the
plumper voice for headings; Nunito the lighter voice for reading. Hierarchy is
carried by **weight and size**, not a serif/sans clash.

### Hierarchy
- **Display** (Fredoka, 700, clamp(1.875rem → 3rem), lh 1.1): The hero headline.
- **Headline** (Fredoka, 600–700): Section titles via `SectionHeading`, in three
  tiers, `lg` (clamp 1.875→2.25rem, bold) for the page's peak section
  (testimonials), `default` (1.5→1.875rem) for most, `sm` (1.25→1.5rem) for
  quieter labels (a video title, "a peek at..."). Each draws a hand-drawn accent
  underline as it enters view.
- **Title** (Fredoka, 600, 1.125rem): Card/feature titles.
- **Body** (Nunito, 400, 1rem, lh 1.6): Prose. Soft Charcoal at 65–85%. Cap
  measure at 65–75ch. Floor at 14px even for secondary captions.
- **Thai body** (Noto Sans Thai Looped, lh ~1.7): Thai testimonials; not
  italicized (Thai has no true italic), and given extra line-height.
- **Label** (Nunito, 700, 0.75rem, uppercase, letter-spacing ~0.1em): Footer
  group labels only.

### Named Rules
**The Weight-Carries-Hierarchy Rule.** Both Latin faces are rounded sans, so never
rely on a font swap to signal importance, use weight (400 → 600/700) and a ≥1.25
size jump between steps.

**The Sparing-Caps Rule.** Uppercase is for short labels only (≤4 words: footer
titles, the single "Welcome to" hero lead). Section labels that used to be
tracked-caps eyebrows (e.g. "Our belief") are now **sentence-case** Fredoka green.
Never a tracked uppercase eyebrow above every section.

## 4. Elevation

Flat at rest; **elevation is a response to state, not decoration.** Surfaces rest
on Eggshell and separate through Card White / Sprout tints and thin Sprout
borders. There is exactly one always-lifted element, the floating frosted-glass
nav. Cards and chips wear a barely-there `shadow-sm`. The only other depth is
interactive: a contact card rises (`-translate-y-1` + `shadow-md`) on hover.
"Light," the hero glow and spotlight gradients, does the rest.

### Shadow Vocabulary
- **Hairline lift** (`shadow-sm`, `0 1px 2px rgba(0,0,0,0.05)`): The resting
  shadow on soft cards, FAQ items, and round trust chips.
- **Hover lift** (`shadow-md` + `-translate-y-1`, 200ms): Interactive cards only
  (contact links). Communicates "this is tappable," never decorative.
- **Glass float** (`0 8px 26px rgba(60,100,61,0.14), inset 0 1px 0 rgba(255,255,255,0.95)`):
  Reserved exclusively for the nav. Green-tinted ambient shadow + glassy inset rim.

### Named Rules
**The One-Glass Rule.** Frosted glass (`backdrop-filter: blur(16px) saturate(125%)`)
is the navigation's signature and **only** the navigation's. No glass cards, no
decorative blur elsewhere.

**The Flat-At-Rest Rule.** Surfaces are flat until the user acts. Shadows are a
hover/focus response; for a focal lift at rest, add warmth (glow/tint), not a
heavier drop shadow.

## 5. Components

### Buttons
- **Shape:** Full pill (`rounded-full`). Always.
- **Primary:** Nest Green fill, white text, bold, `padding: 12px 24px`, min-height
  44px. Hover darkens to ~90% Nest Green; `active:translate-y-px` for a tactile
  press. The site's key affordance, "Contact us." Wrapped in `TrackedLink` for
  analytics on marketing CTAs.
- **Secondary:** White fill, Nest Green text, 1px Sprout-200 border, same pill +
  press; hover fills Sprout-50.
- **Focus:** Links get a 2px Leaf-Green `:focus-visible` outline (offset 2px) from
  a global rule; shadcn primitives carry their own ring. Never remove it.

### Cards / Containers
- **Corner Style:** Pillowy 22px (`rounded-3xl`) for section/feature/contact
  cards; FAQ items 18px (`rounded-2xl`); shadcn `Card` 14px.
- **Background:** Card White on Eggshell; tinted panels use Sprout-50 or a
  10%-Leaf wash (CTA band).
- **Border:** 1px Sprout-200. Full borders only, never a colored side-stripe.
- **Shadow:** `shadow-sm` at rest (see Elevation).
- **Signature move:** a hand-drawn doodle peeks from a corner, rotated, like a
  sticker.

### Section Heading (signature)
An `h2` in Fredoka Nest Green, in three size tiers (`sm`/`default`/`lg`). The text
sits in a relative span with a **hand-drawn accent underline** (an SVG path,
`pathLength=1`) that draws on left-to-right over 700ms when the heading scrolls
into view; instant under reduced motion. `text-balance` keeps multi-word headings
even.

### Trust Strip (signature)
No boxes. Each item is a 64px Sprout-100 round chip holding a Nest-Green icon,
with a bold Nest-Green label beneath, on the page. The chip grows ~5% on hover.

### Expertise / "Our approach" (signature)
**Not a card grid.** A doodle-led list: each approach is a row with a big
sticker-style doodle beside the text, the doodle alternating sides on desktop for
a gentle zigzag, left-aligned, stacking on mobile. This is the page's deliberate
break from card monotony.

### FAQ Accordion
Rounded-2xl Card-White items with a Sprout-200 border. The question is a full-width
Nest-Green button with an `IconPlus` that rotates to a × when open; the panel
animates via `grid-template-rows: 0fr → 1fr` (the same reliable technique as the
nav dropdown, not `<details>`). Multiple may be open; answer text stays in the DOM
for the FAQ JSON-LD; motion off under reduced motion.

### Contact Links (signature)
Three large tap targets (call / message / visit), each a `min-h-[80px]`
rounded-3xl Card-White card with a Sprout-100 round icon chip, title, and detail.
On hover the whole card lifts (`-translate-y-1` + `shadow-md` + Sprout-300 border)
and the icon scales. The clearest expression of "every path leads to hello."

### Navigation (signature)
A floating frosted-glass bar, fixed top, centered, safe-area aware. Full-width
`rounded-3xl` on mobile expanding into a connected dropdown (`grid-rows 0fr→1fr`);
content-hugging `rounded-full` pill on desktop. Solidifies (`glass--solid`) once
scrolled/opened. Links are Fredoka Nest-Green/80 with a Sprout-100 hover pill; a
Nest-Green "Contact us" pill lives in the bar. Hamburger (44px) animates to an X.

## 6. Do's and Don'ts

### Do:
- **Do** speak in Nest Green (#3c643d): headings, labels, nav, wordmark; body is
  Soft Charcoal at 65–85%.
- **Do** make every button a full pill with a ≥44px tap target and keep the
  Nest-Green "Contact us" CTA reachable on every screen.
- **Do** use the egg-chick mascots and hand-drawn doodles as the decorative voice.
- **Do** keep motion hand-drawn and gentle: draw-on strokes for line accents,
  soft float + parallax for dots, a one-shot confetti burst for a moment. All
  transform/opacity, all `prefers-reduced-motion` safe.
- **Do** separate surfaces with Card White and Sprout tints, not shadows; let
  elevation be a hover/state response.
- **Do** keep Sunbeam Yellow as light: glow, spotlight, stroke, confetti.
- **Do** set `lang="th"` on Thai text and let it fall through to Noto Sans Thai
  Looped; don't italicize Thai.
- **Do** hold WCAG 2.1 AA: body ≥4.5:1, large/bold ≥3:1. Re-check green-on-tint.

### Don't:
- **Don't** go **corporate / clinical**, sterile, cold, stock-photo daycare-chain.
- **Don't** ship a **generic template**: no tiny uppercase tracked eyebrow above
  every section, no identical icon-card grid repeated down the page.
- **Don't** look **cheap / amateur**: no clip-art, no default system fonts, no
  broken spacing or overflowing headings.
- **Don't** put text on a Sunbeam Yellow fill, or Sunbeam text on white.
- **Don't** use glassmorphism anywhere but the one floating nav.
- **Don't** use a `border-left`/`border-right` colored stripe as an accent.
- **Don't** use gradient text; emphasize with weight, size, or Nest Green.
- **Don't** rely on a font swap for hierarchy; lean on weight and size.
- **Don't** add a fourth font family; three (Fredoka + Nunito + Noto Sans Thai
  Looped) is the cap, each with a distinct job.
- **Don't** stack resting shadows to fake depth; elevation responds to state.
