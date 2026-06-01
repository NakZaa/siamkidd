import { ScrollReveal } from '@/components/media/ScrollReveal'
import { YouTubeFacade } from '@/components/media/YouTubeFacade'
import { SectionHeading } from '@/components/sections/SectionHeading'

export function VideoFeature({
  title,
  url,
  poster
}: {
  title: string
  url: string
  poster?: string
}) {
  return (
    <section className="mx-auto max-w-screen-sm px-5 py-10 md:max-w-2xl">
      <ScrollReveal>
        <SectionHeading size="sm" className="mb-5 text-center">
          {title}
        </SectionHeading>
        <YouTubeFacade url={url} title={title} poster={poster} />
      </ScrollReveal>
    </section>
  )
}
