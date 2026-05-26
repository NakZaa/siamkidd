import { MascotVideo } from '@/components/media/MascotVideo'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { copy } from '@/lib/copy'

const rows = [
  // arrive + home play once and freeze on their last frame; meals loops.
  { slug: 'egg-drop', key: 'arrive', loop: false },
  { slug: 'egg-fork-and-spoon', key: 'meals', loop: true },
  { slug: 'egg-roll-and-bag', key: 'home', loop: false }
] as const

export function DayAtSchool() {
  return (
    <section className="bg-primary-50 py-12">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading className="text-center">
          {copy.day.heading}
        </SectionHeading>
        <p className="mt-2 text-center text-foreground/70">{copy.day.lead}</p>
        <ScrollReveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {rows.map(({ slug, key, loop }) => (
              <div
                key={slug}
                className="flex flex-col items-center rounded-3xl border border-primary-200 bg-background p-4 text-center"
              >
                <MascotVideo
                  name={slug}
                  loop={loop}
                  className="h-40 w-full md:h-44"
                />
                <div className="mt-3">
                  <h3 className="text-base font-semibold text-brand">
                    {copy.day[key].title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-foreground/70">
                    {copy.day[key].body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
