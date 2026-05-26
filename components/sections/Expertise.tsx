import { Doodle } from '@/components/media/Doodle'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { copy } from '@/lib/copy'

// Each doodle keeps its real aspect ratio (the source images are not square),
// so forcing a square box squished them. Sizes below are aspect-correct.
const cards = [
  { key: 'play', doodle: '/img/doodle-cat.webp', w: 56, h: 34 },
  { key: 'early', doodle: '/img/doodle-candy.webp', w: 56, h: 35 },
  { key: 'english', doodle: '/img/doodle-fish.webp', w: 54, h: 45 },
  { key: 'curriculum', doodle: '/img/doodle-bee.webp', w: 44, h: 52 }
] as const

export function Expertise() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <SectionHeading className="mb-6 text-center">
        {copy.approach.heading}
      </SectionHeading>
      <ScrollReveal>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5 sm:[grid-auto-rows:1fr] lg:grid-cols-4">
          {cards.map(({ key, doodle, w, h }) => (
            <div
              key={key}
              className="relative h-full rounded-3xl border border-primary-200 bg-white p-5 shadow-sm [overflow:visible] md:p-6"
            >
              <Doodle
                src={doodle}
                alt=""
                width={w}
                height={h}
                className="absolute -right-2 -top-4 h-auto rotate-[8deg]"
              />
              <h3 className="pr-8 text-lg font-semibold leading-snug text-brand sm:text-[15px] md:text-base">
                {copy.approach[key].title}
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-foreground/70 sm:text-xs md:text-sm">
                {copy.approach[key].body}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
