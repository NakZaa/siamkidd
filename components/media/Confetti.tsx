'use client'
import type { CSSProperties } from 'react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

// Fixed (not random, so it's deterministic for SSR/resume) burst trajectories:
// each piece flies from the origin out to (x, y) while rotating, then fades.
const PIECES = [
  { x: -132, y: 150, r: -50, d: 0, c: '#f1df8d', round: false },
  { x: -96, y: 205, r: 40, d: 40, c: '#9fc6a0', round: true },
  { x: -64, y: 128, r: -20, d: 90, c: '#f6b8c8', round: false },
  { x: -34, y: 210, r: 60, d: 20, c: '#4f834d', round: true },
  { x: -8, y: 162, r: -35, d: 110, c: '#f1df8d', round: false },
  { x: 24, y: 198, r: 25, d: 55, c: '#9fc6a0', round: true },
  { x: 58, y: 138, r: -45, d: 12, c: '#f6b8c8', round: false },
  { x: 92, y: 196, r: 35, d: 95, c: '#f1df8d', round: true },
  { x: 130, y: 150, r: -25, d: 32, c: '#4f834d', round: false },
  { x: -116, y: 108, r: 50, d: 130, c: '#f6b8c8', round: true },
  { x: 112, y: 112, r: -55, d: 70, c: '#9fc6a0', round: false },
  { x: -16, y: 118, r: 20, d: 150, c: '#f1df8d', round: true }
] as const

/**
 * One-shot confetti burst. Renders nothing until it scrolls into view, then
 * each piece animates once. Reduced-motion users get nothing. pointer-events
 * are off and pieces are aria-hidden, so it's purely decorative.
 */
export function Confetti({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const reduced = useReducedMotion()
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'pointer-events-none absolute left-1/2 top-2 h-0 w-0',
        className
      )}
    >
      {inView &&
        !reduced &&
        PIECES.map((p, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed, static piece list
            key={i}
            className={cn(
              'absolute block h-2 w-2',
              p.round ? 'rounded-full' : 'rounded-[1px]'
            )}
            style={
              {
                background: p.c,
                '--cx': `${p.x}px`,
                '--cy': `${p.y}px`,
                '--cr': `${p.r}deg`,
                animation: `confetti-fall 1.1s ease-out ${p.d}ms both`
              } as CSSProperties
            }
          />
        ))}
    </div>
  )
}
