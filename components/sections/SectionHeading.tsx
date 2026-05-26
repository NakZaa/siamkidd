import { cn } from '@/lib/utils'

export function SectionHeading({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn('text-2xl font-semibold text-brand sm:text-3xl', className)}
    >
      {children}
    </h2>
  )
}
