import type { Metadata } from 'next'
import { ActivitiesPeek } from '@/components/sections/ActivitiesPeek'
import { CtaBand } from '@/components/sections/CtaBand'
import { DayAtSchool } from '@/components/sections/DayAtSchool'
import { Expertise } from '@/components/sections/Expertise'
import { Hero } from '@/components/sections/Hero'
import { Mission } from '@/components/sections/Mission'
import { Testimonials } from '@/components/sections/Testimonials'
import { Trust } from '@/components/sections/Trust'
import { VideoFeature } from '@/components/sections/VideoFeature'
import { copy } from '@/lib/copy'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    absolute: `${SITE.nameEn}, Nursery & Kindergarten in Buriram`
  },
  description: SITE.description,
  alternates: { canonical: '/' }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Mission />
      <Expertise />
      <DayAtSchool />
      <VideoFeature
        title={copy.home.whyUs}
        url="https://youtu.be/VJrZXDt-tgE"
        poster="/img/why-us-poster.webp"
      />
      <VideoFeature
        title={copy.home.students}
        url="https://youtu.be/YEAPMbVVoeY"
      />
      <Testimonials />
      <ActivitiesPeek />
      <CtaBand />
    </>
  )
}
