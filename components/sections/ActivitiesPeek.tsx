import { IconArrowRight, IconPlayerPlayFilled } from '@tabler/icons-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { copy } from '@/lib/copy'

const ACTIVITY_KEYS = [
  { key: 'cityPillar', videoId: 'HDtZTA_qGrA' },
  { key: 'anniversary', videoId: 'UxuSFlipUHs' },
  { key: 'christmas', videoId: 'PUMKXerAOek' },
  { key: 'childrensDay', videoId: 'nY-PUgFL56c' }
] as const

export function ActivitiesPeek() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <ScrollReveal>
        <SectionHeading size="sm" className="text-center">
          {copy.home.activitiesPeek}
        </SectionHeading>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {ACTIVITY_KEYS.map(({ key, videoId }) => (
            <Link
              key={key}
              href="/activities"
              className="group relative block aspect-4/3 overflow-hidden rounded-2xl bg-primary-100"
            >
              {/* biome-ignore lint/performance/noImgElement: remote YouTube thumbnail should not go through next/image optimisation */}
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/40" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-10 w-10 rounded-full bg-white/90 text-brand grid place-items-center">
                  <IconPlayerPlayFilled size={18} />
                </div>
              </div>
              <span className="absolute bottom-0 left-0 right-0 p-2.5">
                <span className="relative z-1 rounded-md bg-black/65 px-2 py-1 text-xs font-medium text-white">
                  {copy.activities[key]}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/activities"
            className="group inline-flex min-h-11 items-center gap-1 rounded-full px-3 font-bold text-brand transition-colors hover:text-brand/80"
          >
            {copy.home.seeAll}
            <IconArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
