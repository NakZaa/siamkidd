import { Doodle } from '@/components/media/Doodle'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { copy } from '@/lib/copy'
import { cn } from '@/lib/utils'

// "Our approach" reads as a doodle-led list, not a card grid: each approach is a
// row with a big sticker-style doodle beside the text, the doodle alternating
// sides on desktop for a gentle zigzag. Doodles keep their real aspect ratio
// (the source art is not square), so widths are set via class and height auto.
const rows = [
  { key: 'play', doodle: '/img/doodle-cat.webp', w: 92, h: 56 },
  { key: 'early', doodle: '/img/doodle-candy.webp', w: 92, h: 58 },
  { key: 'english', doodle: '/img/doodle-fish.webp', w: 84, h: 70 },
  { key: 'curriculum', doodle: '/img/doodle-bee.webp', w: 72, h: 85 }
] as const

export function Expertise() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-14 md:py-20">
      <SectionHeading className="mb-10 md:mb-12">
        {copy.approach.heading}
      </SectionHeading>
      <div className="flex flex-col gap-9 md:gap-12">
        {rows.map(({ key, doodle, w, h }, i) => (
          <ScrollReveal key={key} delay={i * 90}>
            <div
              className={cn(
                'flex items-start gap-5 sm:items-center sm:gap-8',
                i % 2 === 1 && 'sm:flex-row-reverse'
              )}
            >
              {/* Sticker-style doodle anchors each row; no card box. */}
              <Doodle
                src={doodle}
                alt=""
                width={w}
                height={h}
                className={cn(
                  'mt-1 h-auto w-16 shrink-0 sm:mt-0 sm:w-24',
                  i % 2 === 0 ? '-rotate-6' : 'rotate-6'
                )}
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand sm:text-xl">
                  {copy.approach[key].title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-foreground/75">
                  {copy.approach[key].body}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
