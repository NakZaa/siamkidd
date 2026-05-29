'use client'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import posthog from 'posthog-js'
import { useState } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { youtubeId } from '@/lib/youtube'

export function YouTubeFacade({
  url,
  title,
  poster
}: {
  url: string
  title: string
  // Optional custom preview image; defaults to the YouTube thumbnail.
  poster?: string
}) {
  const id = youtubeId(url)
  const [active, setActive] = useState(false)
  return (
    <AspectRatio
      ratio={16 / 9}
      className="overflow-hidden rounded-2xl bg-primary-100 shadow-sm"
    >
      {active ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setActive(true)
            posthog.capture('video_played', { title, url })
          }}
          aria-label={`Play video: ${title}`}
          className="group relative h-full w-full"
        >
          {/* biome-ignore lint/performance/noImgElement: thumbnail (remote YouTube image or a pre-sized local poster) should not go through next/image optimisation */}
          <img
            src={poster ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-brand shadow-lg">
              <IconPlayerPlayFilled className="h-8 w-8" />
            </span>
          </span>
        </button>
      )}
    </AspectRatio>
  )
}
