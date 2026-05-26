import { IconBrandMessenger, IconMapPin, IconPhone } from '@tabler/icons-react'
import type { Metadata } from 'next'
import { Doodle } from '@/components/media/Doodle'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { copy } from '@/lib/copy'
import { breadcrumbLd } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: copy.contact.heading,
  description: copy.contact.lead,
  alternates: { canonical: '/contact' }
}

export default function ContactPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: copy.contact.heading, path: '/contact' }
        ])}
      />
      {/* Glow header */}
      <section className="bg-glow">
        <div className="mx-auto max-w-screen-sm px-5 pt-[calc(env(safe-area-inset-top)+5rem)] pb-8 text-center md:pt-[calc(env(safe-area-inset-top)+6rem)]">
          <ScrollReveal>
            {/* Doodle accent */}
            <div className="flex justify-center">
              <Doodle
                src="/img/doodle-rainbow.webp"
                alt=""
                width={60}
                height={60}
                className="drop-shadow-sm"
              />
            </div>

            {/* Eyebrow */}
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {copy.contact.eyebrow}
            </p>

            {/* Heading */}
            <h1 className="mt-1 text-3xl font-bold text-brand sm:text-4xl">
              {copy.contact.heading}
            </h1>

            {/* Lead */}
            <p className="mx-auto mt-2 max-w-[340px] text-lg text-foreground/80">
              {copy.contact.lead}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact cards */}
      <ScrollReveal>
        <div className="mx-auto max-w-screen-sm px-5 pb-10 flex flex-col gap-3">
          {/* Call */}
          <a
            href={`tel:${SITE.phone.tel}`}
            className="group flex items-center gap-3.5 min-h-[80px] rounded-3xl border border-primary-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-100 text-brand transition-transform duration-200 group-hover:scale-110">
              <IconPhone size={22} aria-hidden />
            </span>
            <div>
              <b className="text-brand block">{copy.contact.call}</b>
              <span className="text-sm text-foreground/65">
                {SITE.phone.display}
              </span>
            </div>
          </a>

          {/* Message */}
          <a
            href={SITE.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 min-h-[80px] rounded-3xl border border-primary-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-100 text-brand transition-transform duration-200 group-hover:scale-110">
              <IconBrandMessenger size={22} aria-hidden />
            </span>
            <div>
              <b className="text-brand block">{copy.contact.message}</b>
              <span className="text-sm text-foreground/65">
                {copy.contact.messageSub}
              </span>
            </div>
          </a>

          {/* Visit */}
          <a
            href={SITE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 min-h-[80px] rounded-3xl border border-primary-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-100 text-brand transition-transform duration-200 group-hover:scale-110">
              <IconMapPin size={22} aria-hidden />
            </span>
            <div>
              <b className="text-brand block">{copy.contact.visit}</b>
              <span className="text-sm text-foreground/65">
                {SITE.address.line1}, {SITE.address.line2}
              </span>
            </div>
          </a>
        </div>
      </ScrollReveal>

      {/* Embedded map */}
      <ScrollReveal>
        <div className="mx-auto max-w-screen-sm px-5 pb-12">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-3xl border border-primary-200"
          >
            <iframe
              src={SITE.mapEmbed}
              title={copy.contact.mapLabel}
              loading="lazy"
              className="h-full w-full"
            />
          </AspectRatio>
        </div>
      </ScrollReveal>
    </div>
  )
}
