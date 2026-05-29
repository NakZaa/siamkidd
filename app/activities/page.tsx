import type { Metadata } from 'next'
import { Doodle } from '@/components/media/Doodle'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { YouTubeFacade } from '@/components/media/YouTubeFacade'
import { JsonLd } from '@/components/seo/JsonLd'
import { copy } from '@/lib/copy'
import { breadcrumbLd, pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  heading: copy.activities.heading,
  description:
    'Events, performances, and seasonal activities for children at Siam Kid D School, a nursery and kindergarten in Buriram, all year round.',
  path: '/activities'
})

const events = [
  { key: 'cityPillar', url: 'https://youtu.be/HDtZTA_qGrA' },
  { key: 'anniversary', url: 'https://youtu.be/UxuSFlipUHs' },
  { key: 'christmas', url: 'https://youtu.be/PUMKXerAOek' },
  { key: 'childrensDay', url: 'https://youtu.be/nY-PUgFL56c' }
] as const

export default function ActivitiesPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: copy.activities.heading, path: '/activities' }
        ])}
      />
      {/* Hero / glow header */}
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
              />
            </div>

            {/* Eyebrow */}
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {copy.activities.eyebrow}
            </p>

            {/* Heading */}
            <h1 className="mt-1 text-3xl font-bold text-brand sm:text-4xl">
              {copy.activities.heading}
            </h1>

            {/* Intro */}
            <p className="mt-2 text-foreground/75">{copy.activities.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Event videos */}
      <div className="mx-auto max-w-screen-sm px-5 py-8 flex flex-col gap-8">
        {events.map(({ key, url }) => (
          <ScrollReveal key={key}>
            <h2 className="text-lg font-semibold text-brand mb-3">
              {copy.activities[key]}
            </h2>
            <YouTubeFacade url={url} title={copy.activities[key]} />
          </ScrollReveal>
        ))}

        {/* TODO(owner): optional photo gallery */}
      </div>
    </div>
  )
}
