import {
  IconBook2,
  IconHeart,
  IconMessageCircle2,
  IconShieldCheck
} from '@tabler/icons-react'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { copy } from '@/lib/copy'

// Airy trust strip: just a soft icon + label per item, no card boxes, sitting
// directly on the page background. Light and distinct from the tinted panels.
const badges = [
  { key: 'years', Icon: IconHeart },
  { key: 'teachers', Icon: IconMessageCircle2 },
  { key: 'curriculum', Icon: IconBook2 },
  { key: 'safe', Icon: IconShieldCheck }
] as const

export function Trust() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <ScrollReveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {badges.map(({ key, Icon }) => (
            <div
              key={key}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-primary-100 text-brand shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Icon size={28} aria-hidden />
              </span>
              <p className="text-sm font-semibold leading-snug text-brand md:text-[15px]">
                {copy.trust[key]}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
