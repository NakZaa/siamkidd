'use client'
import { Doodle } from '@/components/media/Doodle'
import { ScrollReveal } from '@/components/media/ScrollReveal'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { copy } from '@/lib/copy'

const QUOTES = [
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
  },
  // Verbatim excerpts (kept in Thai, not translated) from parents' public
  // Facebook posts. The Thai font stack is set in globals.css / lib/fonts.ts.
  {
    name: 'Dr. Saivaree Vongraviopap',
    lang: 'th',
    quote:
      'สกายเป็นเด็กที่เข้ามากลางคัน เรากังวลมาก\u00A0ๆ ว่าเค้าจะปรับตัวได้ไหม จะมีเพื่อนไหม แต่ไม่น่าเชื่อว่าเค้าสามารถเข้ากับเพื่อน\u00A0ๆ ได้ดี และมีความสุขกับการไปโรงเรียน การเลือกโรงเรียนเป็นสิ่งสำคัญ ไม่ใช่เรื่องสถานที่ แต่เป็นเรื่องความเข้าใจเด็ก บอกเลยว่าเลือกไม่ผิดจริง\u00A0ๆ ขอบคุณโรงเรียนสยามคิดดีที่ทำให้สกายมีความสุขในทุก\u00A0ๆ วันที่มาโรงเรียน'
  },
  {
    name: 'Dr. Phakaon Unlamarn',
    lang: 'th',
    quote:
      'โรงเรียนสยามคิดดีเป็นเหมือนบ้านหลังเล็ก\u00A0ๆ ที่ปลอดภัยและอบอุ่น โรงเรียนไม่ได้แค่ให้ความรู้ แต่สอนทักษะการปรับตัว การอยู่ร่วมกับคนอื่นอย่างมีความสุข พุทธมาเรียนแล้วมีความสุขมาก สนุกทุกกิจกรรมที่ได้ทำ มีเรื่องเล่าทุกคืนก่อนนอน แม่รู้สึกภูมิใจเสมอที่เลือกให้ลูกเรียนที่นี่'
  },
  {
    name: 'Siraprapa Wanmanee',
    lang: 'th',
    quote:
      '3 ปีที่น้องพลอยสวยเรียนที่โรงเรียนสยามคิดดี น้องไม่เคยไม่อยากไปโรงเรียนเลยค่ะ และไม่เคยงอแง น้องสนุกในทุก\u00A0ๆ วันที่ได้ไปโรงเรียน พ่อแม่รู้สึกไม่ผิดหวังเลยที่เลือกโรงเรียนแรกของลูก ก้าวแรกของลูก ให้ทางโรงเรียนสยามคิดดีดูแลน้องค่ะ'
  }
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <ScrollReveal>
        <SectionHeading size="lg" className="text-center">
          {copy.testimonials.heading}
        </SectionHeading>
        <div className="mt-6 grid gap-4 md:grid-cols-2 md:auto-rows-[1fr]">
          {QUOTES.map(({ name, quote, lang }) => (
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
              <p
                lang={lang}
                className={`mt-3 text-pretty leading-relaxed text-foreground/80 ${lang ? '' : 'italic'}`}
              >
                {quote}
              </p>
              <div className="mt-auto pt-4">
                <p className="font-semibold text-brand">{name}</p>
                <p className="text-sm text-foreground/75">
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
