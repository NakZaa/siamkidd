'use client'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export function ScrollReveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0',
        inView ? 'opacity-100 translate-y-0' : 'translate-y-6 opacity-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
