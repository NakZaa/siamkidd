import {
  IconBook2,
  IconMessageCircle2,
  IconShieldCheck
} from '@tabler/icons-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { Mission } from '@/components/sections/Mission'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { JsonLd } from '@/components/seo/JsonLd'
import { copy } from '@/lib/copy'
import { breadcrumbLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: copy.about.heading,
  description: copy.about.lead,
  alternates: { canonical: '/about' }
}

const offerItems = [
  {
    key: 'offerBilingual' as const,
    Icon: IconMessageCircle2
  },
  {
    key: 'offerCurriculum' as const,
    Icon: IconBook2
  },
  {
    key: 'offerSafe' as const,
    Icon: IconShieldCheck
  }
]

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: copy.about.heading, path: '/about' }
        ])}
      />
      {/* Hero / glow header */}
      <section className="bg-glow">
        <div className="mx-auto max-w-screen-sm px-5 pt-[calc(env(safe-area-inset-top)+5rem)] pb-8 text-center md:pt-[calc(env(safe-area-inset-top)+6rem)]">
          <ScrollReveal>
            {/* Mascot */}
            <div className="flex justify-center">
              <Image
                src="/img/mascot-reading.webp"
                alt=""
                width={96}
                height={96}
                className="drop-shadow-sm"
              />
            </div>

            {/* Eyebrow */}
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {copy.about.eyebrow}
            </p>

            {/* Heading */}
            <h1 className="mt-1 text-3xl font-bold text-brand sm:text-4xl">
              {copy.about.heading}
            </h1>

            {/* Lead */}
            <p className="mx-auto mt-2 max-w-[300px] text-lg text-foreground/80">
              {copy.about.lead}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Where it began */}
      <ScrollReveal>
        <div className="mx-auto max-w-screen-sm px-5 py-6">
          <SectionHeading>{copy.about.storyTitle}</SectionHeading>
          <p className="mt-3 leading-relaxed text-foreground/70">
            {copy.about.story}
          </p>
          {/* Optional: add milestones / awards over the years */}
        </div>
      </ScrollReveal>

      {/* Belief panel */}
      <Mission />

      {/* What we offer */}
      <ScrollReveal>
        <div className="mx-auto max-w-screen-sm px-5 pb-12">
          <SectionHeading>{copy.about.offerTitle}</SectionHeading>
          <div className="mt-5 flex flex-col gap-3">
            {offerItems.map(({ key, Icon }) => (
              <div key={key} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-100 text-brand">
                  <Icon size={20} aria-hidden />
                </span>
                <div>
                  <b className="text-brand">{copy.about[key].t}</b>
                  <span className="ml-1 text-sm text-foreground/65">
                    {copy.about[key].d}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
