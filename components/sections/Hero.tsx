import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { Doodle } from '@/components/media/Doodle'
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

          {/* Confetti dots */}
          <span
            className="absolute top-4 right-2 h-3 w-3 rounded-full md:h-4 md:w-4"
            style={{ background: '#f1df8d' }}
            aria-hidden="true"
          />
          <span
            className="absolute bottom-6 left-1 h-2.5 w-2.5 rounded-full bg-primary-200 md:h-3.5 md:w-3.5"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-10 right-4 h-2 w-2 rounded-full md:h-3 md:w-3"
            style={{ background: '#f6b8c8' }}
            aria-hidden="true"
          />

          {/* Doodles */}
          <span className="absolute top-8 -left-4 rotate-6 pointer-events-none md:top-10 md:-left-6">
            <Doodle
              src="/img/star1.webp"
              alt=""
              width={20}
              height={20}
              className="md:h-7 md:w-7"
            />
          </span>

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
          <h1 className="relative mt-1 inline-block text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
            {copy.hero.title}
            <span className="pointer-events-none absolute -right-9 -top-5 rotate-6 md:-right-14 md:-top-7">
              <Doodle
                src="/img/doodle-lightbulb.webp"
                alt=""
                width={48}
                height={48}
                className="h-9 w-9 md:h-12 md:w-12"
              />
            </span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-2 max-w-[280px] text-base text-foreground/75 sm:text-lg md:max-w-lg md:text-xl">
            {copy.hero.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              prefetch={false}
              className="min-h-[44px] rounded-full bg-brand px-6 py-3 font-bold text-white"
            >
              {copy.hero.contact}
            </Link>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] rounded-full border border-primary-200 bg-white px-6 py-3 font-bold text-brand"
            >
              {copy.hero.facebook}
            </a>
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
