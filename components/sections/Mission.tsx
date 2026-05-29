import { ScrollReveal } from '@/components/media/ScrollReveal'
import { copy } from '@/lib/copy'

export function Mission() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-12">
      <ScrollReveal>
        <div className="rounded-3xl bg-primary-50 p-8 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
            {copy.mission.heading}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/85 sm:text-xl md:text-2xl">
            {copy.mission.statement}
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
