import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Doodle({
  src,
  alt,
  width,
  height,
  className
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('pointer-events-none select-none', className)}
    />
  )
}
