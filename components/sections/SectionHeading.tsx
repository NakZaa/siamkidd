'use client'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export function SectionHeading({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>()
  return (
    <h2
      ref={ref}
      className={cn('text-2xl font-semibold text-brand sm:text-3xl', className)}
    >
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
    </h2>
  )
}
