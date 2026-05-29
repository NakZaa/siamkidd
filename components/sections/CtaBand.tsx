import { TrackedLink } from '@/components/analytics/TrackedLink'
import { Confetti } from '@/components/media/Confetti'
import { DrawOnDoodle } from '@/components/media/DrawOnDoodle'
import { MascotVideo } from '@/components/media/MascotVideo'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { buttonVariants } from '@/components/ui/button'
import { copy } from '@/lib/copy'
import { cn } from '@/lib/utils'

export function CtaBand() {
  return (
    <section className="px-5 pt-2 pb-12">
      <ScrollReveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          {/* Mascot sits on the solid cream page background (not on the tinted
              panel) so its opaque cream-composited video blends seamlessly. */}
          <MascotVideo name="egg-pops-up" className="mb-1 h-28" />
          <div className="relative w-full overflow-hidden rounded-3xl bg-primary-500/10 px-6 pt-10 pb-12 text-center md:p-12 md:pt-12">
            <Confetti />
            <DrawOnDoodle
              variant="sparkle"
              className="absolute right-5 top-4 h-7 w-7 md:right-8 md:top-7 md:h-9 md:w-9"
            />
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              {copy.cta.heading}
            </h2>
            <p className="mt-2 text-foreground/75">{copy.cta.body}</p>
            <TrackedLink
              href="/contact"
              event="cta_band_clicked"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-6 min-h-11 rounded-full bg-brand px-6 text-white hover:bg-brand/90'
              )}
            >
              {copy.cta.button}
            </TrackedLink>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
