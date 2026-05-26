'use client'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function MascotVideo({
  name,
  className,
  loop = true
}: {
  name: string
  className?: string
  // loop: keep looping while in view. false: play once and freeze on the last
  // frame (replays if scrolled back into view). Built so the last frame always
  // shows the egg, so a frozen clip never goes blank.
  loop?: boolean
}) {
  const reduced = useReducedMotion()
  const vref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = vref.current
    if (!v || reduced) return
    // Play while in view, pause when scrolled away (saves battery/CPU). Looping
    // clips loop; play-once clips run through and freeze on their last frame.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.25 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [reduced])
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Height-driven: clips are tightly cropped to their content at varying
          widths, so we size by height and let width follow the aspect ratio. */}
      <video
        ref={vref}
        muted
        loop={loop}
        playsInline
        preload="auto"
        disablePictureInPicture
        poster={`/media/${name}-poster.jpg`}
        className="h-full w-auto max-w-full object-contain"
      >
        <source src={`/media/${name}.mp4`} type="video/mp4" />
      </video>
    </div>
  )
}
