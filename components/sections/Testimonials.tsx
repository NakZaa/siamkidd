'use client'
import { Doodle } from '@/components/media/Doodle'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { copy } from '@/lib/copy'

const QUOTES = [
  {
    name: 'Philip Crabb',
    quote:
      'As a qualified teacher trainer, I checked the curriculum thoroughly before enrolling my daughter, and it was the best decision I could have made. The teachers are wonderfully competent and caring, and the Thai staff always go the extra mile. My two-year-old loves going every single day. Her personality has blossomed, and the staff feel like an extended family.'
  },
  {
    name: 'Andrew Harrison',
    quote:
      "Since my son Arran started pre-kindergarten, he has come on in leaps and bounds. At just 2.5, his English and Thai are developing very well, and he's far more confident and learning to share. The security was a big reason we chose Siam Kid D, with keycard-access doors and CCTV throughout, and the native English teachers were a real plus. Every morning, he's happy to head off for another great day."
  },
  {
    name: 'David Schroko',
    quote:
      "We're very happy to have our three-year-old, Danny, in Pre-K at Siam Kid D. It's a bright, clean and modern school with an age-appropriate curriculum and good exposure to English, and the teachers are kind and caring. We're excited for him to begin Kindergarten 1 next year!"
  },
  {
    // Faithful translation of a Thai testimonial (school is now English-only).
    name: 'Pennapha Jenthaworn',
    quote:
      'Whenever she talks about school, she does so with such a bright, cheerful spirit. From Pre-K to K.3, what I felt above all was warmth and safety. Every teacher has gentle manners and kind words, so we never worried. My only regret is that Siam Kid D goes only up to K.3, but these four years have been the most beautiful and memorable. Thank you for caring for her so well.'
  }
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <ScrollReveal>
        <SectionHeading className="text-center">
          {copy.testimonials.heading}
        </SectionHeading>
        <div className="mt-6 grid gap-4 md:grid-cols-2 md:auto-rows-[1fr]">
          {QUOTES.map(({ name, quote }) => (
            <div
              key={name}
              className="flex h-full flex-col rounded-3xl border border-primary-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-1">
                {['star1', 'star2', 'star3', 'star2', 'star1'].map((s, idx) => (
                  <Doodle
                    // biome-ignore lint/suspicious/noArrayIndexKey: fixed 5-star row
                    key={idx}
                    src={`/img/${s}.webp`}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                ))}
              </div>
              <p className="mt-3 italic leading-relaxed text-foreground/80">
                {quote}
              </p>
              <div className="mt-auto pt-4">
                <p className="font-semibold text-brand">{name}</p>
                <p className="text-sm text-foreground/60">
                  {copy.testimonials.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
