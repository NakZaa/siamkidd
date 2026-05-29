'use client'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

// Hand-drawn line doodles as SVG paths. Each is normalised with pathLength={1}
// so a single dashoffset transition draws any of them on cleanly.
const DOODLES = {
  // four-point sparkle / twinkle
  sparkle:
    'M24 5 C 26 18, 30 22, 43 24 C 30 26, 26 30, 24 43 C 22 30, 18 26, 5 24 C 18 22, 22 18, 24 5 Z',
  // loose underline swoosh
  swoosh: 'M4 18 C 16 8, 34 8, 44 16 S 70 26, 92 14'
} as const

/**
 * A small line doodle whose stroke "draws on" once it scrolls into view, like
 * it's being sketched by hand. Decorative only (aria-hidden), reduced-motion
 * safe (the stroke just appears instantly).
 */
export function DrawOnDoodle({
  variant = 'sparkle',
  className
}: {
  variant?: keyof typeof DOODLES
  className?: string
}) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const viewBox = variant === 'sparkle' ? '0 0 48 48' : '0 0 96 32'
  return (
    <span ref={ref} aria-hidden className={cn('inline-block', className)}>
      <svg
        aria-hidden="true"
        role="presentation"
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full overflow-visible"
      >
        <path
          d={DOODLES[variant]}
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className="transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none"
          style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0 : 1 }}
        />
      </svg>
    </span>
  )
}
