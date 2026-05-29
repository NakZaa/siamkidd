import type { Metadata } from 'next'
import { ContactLinks } from '@/components/contact/ContactLinks'
import { Doodle } from '@/components/media/Doodle'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { copy } from '@/lib/copy'
import { breadcrumbLd, pageMeta } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  heading: copy.contact.heading,
  description: `Contact Siam Kid D School in Buriram, Thailand. Call ${SITE.phone.display} or message us on Facebook to ask a question or arrange a school tour.`,
  path: '/contact'
})

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
        <ContactLinks />
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
