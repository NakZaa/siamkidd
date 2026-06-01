'use client'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

// Three tiers of section heading give the page a hierarchy instead of one flat
// size: `lg` for the page's peak section (testimonials), `default` for most,
// `sm` for quieter labels (a video title, "a peek at..."). `text-balance` keeps
// multi-word headings even.
const sizes = {
  sm: 'text-xl font-semibold sm:text-2xl',
  default: 'text-2xl font-semibold sm:text-3xl',
  lg: 'text-3xl font-bold sm:text-4xl'
} as const

export function SectionHeading({
  children,
  className,
  size = 'default',
  // The hand-drawn underline is reserved for the page's peak heading, not
  // stamped on every section, so it reads as emphasis rather than a reflex.
  underline = size === 'lg'
}: {
  children: React.ReactNode
  className?: string
  size?: keyof typeof sizes
  underline?: boolean
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>()
  return (
    <h2
      ref={ref}
      className={cn('text-balance text-brand', sizes[size], className)}
    >
      {underline ? (
        <span className="relative inline-block">
          {children}
          {/* Hand-drawn underline that draws on (left to right) when in view. */}
          <svg
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-2.5 w-full overflow-visible"
          >
            <path
              d="M2 8 C 45 2, 85 11, 130 6 S 185 3, 198 7"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="3.5"
              strokeLinecap="round"
              pathLength={1}
              className="transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none"
              style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0 : 1 }}
            />
          </svg>
        </span>
      ) : (
        children
      )}
    </h2>
  )
}
