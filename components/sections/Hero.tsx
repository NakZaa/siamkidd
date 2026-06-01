import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'
import { TrackedLink } from '@/components/analytics/TrackedLink'
import { Doodle } from '@/components/media/Doodle'
import { Parallax } from '@/components/media/Parallax'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { copy } from '@/lib/copy'
import { SITE } from '@/lib/site'

export function Hero() {
  return (
    <section className="bg-glow pt-[calc(env(safe-area-inset-top)+5rem)] pb-16 md:pt-[calc(env(safe-area-inset-top)+6rem)] md:pb-24">
      <div className="mx-auto max-w-screen-sm px-5 text-center">
        {/* Logo + spotlight - outside ScrollReveal so it paints immediately */}
        <div className="relative mx-auto mb-6 flex h-64 w-64 items-center justify-center md:h-72 md:w-72 lg:h-80 lg:w-80">
          {/* Spotlight glow behind logo */}
          <div className="spotlight absolute inset-0 rounded-full" />

          {/* Confetti dots - soft float + light scroll parallax */}
          <Parallax className="top-4 right-2" speed={0.18}>
            <span
              className="block h-3 w-3 rounded-full bg-accent md:h-4 md:w-4"
              aria-hidden="true"
            />
          </Parallax>
          <Parallax className="bottom-6 left-1" speed={0.1} delay={-2200}>
            <span
              className="block h-2.5 w-2.5 rounded-full bg-primary-200 md:h-3.5 md:w-3.5"
              aria-hidden="true"
            />
          </Parallax>
          <Parallax className="bottom-10 right-4" speed={0.24} delay={-3500}>
            <span
              className="block h-2 w-2 rounded-full md:h-3 md:w-3"
              style={{ background: '#f6b8c8' }}
              aria-hidden="true"
            />
          </Parallax>

          {/* Doodles */}
          <Parallax
            className="top-8 -left-4 md:top-10 md:-left-6"
            speed={0.3}
            delay={-1200}
          >
            <Doodle
              src="/img/star1.webp"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 rotate-6 md:h-7 md:w-7"
            />
          </Parallax>

          {/* Logo */}
          <Image
            src="/img/logo.webp"
            alt="Siam Kid D School"
            width={512}
            height={512}
            priority
            className="relative z-10 h-52 w-52 rounded-full md:h-56 md:w-56 lg:h-64 lg:w-64"
          />
        </div>

        {/* Text content - revealed on scroll */}
        <ScrollReveal>
          {/* Eyebrow */}
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
            {copy.hero.welcomeLead}
          </p>

          {/* Heading with a little lightbulb doodle beside it */}
          <h1 className="relative mt-1 inline-block text-balance text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
            {copy.hero.title}
            {/* Keeps the visible h1 brand-forward while giving search engines and
                screen readers the category + location keywords. */}
            <span className="sr-only">
              , nursery and kindergarten in Buriram
            </span>
            <Parallax
              className="-right-9 -top-5 md:-right-14 md:-top-7"
              speed={0}
              delay={-2600}
            >
              <Doodle
                src="/img/doodle-lightbulb.webp"
                alt=""
                width={48}
                height={48}
                className="rotate-6 h-9 w-9 md:h-12 md:w-12"
              />
            </Parallax>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-2 max-w-[280px] text-balance text-base text-foreground/75 sm:text-lg md:max-w-lg md:text-xl">
            {copy.hero.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <TrackedLink
              href="/contact"
              prefetch={false}
              event="contact_cta_clicked"
              eventProps={{ location: 'hero' }}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-6 py-3 font-bold text-white transition hover:bg-brand/90 active:translate-y-px"
            >
              {copy.hero.contact}
            </TrackedLink>
            <TrackedLink
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              event="facebook_link_clicked"
              eventProps={{ location: 'hero' }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary-200 bg-white px-6 py-3 font-bold text-brand transition hover:bg-primary-50 active:translate-y-px"
            >
              {copy.hero.facebook}
            </TrackedLink>
          </div>

          {/* Scroll cue - a clear bobbing down-chevron */}
          <div className="scroll-cue mx-auto mt-6 w-fit text-primary-300">
            <IconChevronDown size={28} stroke={2.5} aria-hidden />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
