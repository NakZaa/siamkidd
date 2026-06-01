import { ScrollReveal } from '@/components/media/ScrollReveal'
import { copy } from '@/lib/copy'

export function Mission() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-12">
      <ScrollReveal>
        <div className="rounded-3xl bg-primary-50 p-8 text-center md:p-10">
          {/* A quiet sentence-case label, not a tracked-caps eyebrow. The belief
              statement itself stays the focal text. */}
          <h2 className="text-base font-bold text-brand">
            {copy.mission.heading}
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-pretty text-foreground/85 sm:text-2xl">
            {copy.mission.statement}
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
