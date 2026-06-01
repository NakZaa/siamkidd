# Product

## Register

brand

## Users

Parents (and grandparents) of children roughly 2–6 years old in Buriram,
Thailand and the surrounding province, weighing where to send their child for
kindergarten. Many are Thai and read English to varying degrees, so plain copy
and visual reinforcement matter as much as the words. They almost always arrive
on a phone, often one-handed and in spare moments, and they are comparing a few
local schools.

**Job to be done:** decide whether Siam Kid D is the safe, caring,
English-capable place for their child, and then reach out. This is an emotional,
high-stakes decision made by an anxious parent, not a casual browse.

## Product Purpose

The marketing website for **Siam Kid D School** (สยามคิดดี), a bilingual
kindergarten in Buriram founded in 2011. It introduces the school to
prospective families, conveys its warmth, safety, and UK Early Years (EYFS)
curriculum with native English teachers, and moves parents to get in touch.

The site has a single conversion: **make contact** — call, message on Facebook,
or arrange a visit (there is no email channel and no enrollment form by design).
Success is a parent reaching out or coming to see the school. Every section
exists to build enough trust and warmth that contacting feels easy and obvious.

## Brand Personality

**Warm · joyful · trustworthy.** The voice speaks parent-to-parent: plain,
human, reassuring, never corporate or jargon-laden. It leans **balanced and
credible** — genuinely playful (mascot, doodles, bright accents, gentle motion)
while staying visibly polished so parents trust the quality of the education.
Joy and credibility are not a trade-off here; the warmth is the feeling and the
craft is the proof.

A visitor should leave feeling welcomed, reassured, and a little delighted.

## Anti-references

- **Corporate / clinical.** Cold, sterile, stocky daycare-chain or
  hospital-adjacent design. The school is a second home, not a facility.
- **Generic template.** Looks like every other school site or AI-generated
  landing page — eyebrow above every section, identical icon-card grids,
  interchangeable stock-and-bullet layouts with no point of view.
- **Cheap / amateur.** Clip-art, default system fonts, broken spacing, anything
  that reads as low-budget or untrustworthy to a discerning parent.

Note: cartoonish playfulness is **not** an anti-reference. Doodles, confetti,
the egg mascot, and bright color are part of the identity. The line is polish,
not restraint — keep it fun, execute it well.

## Design Principles

1. **Every path leads to hello.** The whole site funnels toward making contact.
   The contact action is never more than a tap away; it's a constant, not a
   single destination at the bottom of the page.
2. **Warm, but it earns trust.** Playfulness carries the feeling; craft and
   polish are what make a parent believe the school is good. Sloppiness, not
   seriousness, is what reads as untrustworthy. Never sacrifice one for the
   other.
3. **Show the school, don't describe it.** Real faces, real moments, video, and
   parent voices decide the choice. A parent commits to an atmosphere they can
   see, not to adjectives.
4. **Reassure the anxious parent.** Safety, qualifications, and care are stated
   plainly and surfaced early, never buried under marketing language. Answer the
   fear before the feature.
5. **Phone-first, thumb-first.** The mobile layout is the design; desktop is the
   adaptation. Tap targets, reading length, and pacing are tuned for a parent
   browsing one-handed.

## Accessibility & Inclusion

Target **WCAG 2.1 AA**, already partly enforced (Playwright + axe on a mobile
viewport, `prefers-reduced-motion` honored via `useReducedMotion` and CSS
fallbacks, ≥44px tap targets).

- Body text ≥4.5:1 contrast against its background; large/bold text ≥3:1. Watch
  the green-on-tint and muted-foreground combinations specifically.
- Full keyboard operability and a logical focus order; semantic landmarks and
  headings.
- Alt text is part of the voice — descriptive, never "image".
- Assume some visitors read English as a second language: favor plain wording
  and let imagery, icons, and layout reinforce meaning.
- Every animation needs a reduced-motion alternative (crossfade or instant).
