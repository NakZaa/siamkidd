'use client'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

/**
 * Decorative wrapper that combines a soft continuous float (CSS `.float` on the
 * inner span) with a light scroll parallax (JS translate on the outer span).
 * Transform-only and gated behind prefers-reduced-motion, so it stays cheap on
 * mobile and disappears for users who opt out of motion.
 *
 * Two transform layers (outer = parallax, inner = float) so they never fight,
 * which also frees the child to carry its own `rotate-*`.
 */
export function Parallax({
  speed = 0.15,
  delay = 0,
  className,
  children
}: {
  /** Fraction of scroll distance the element lags behind by (0.1–0.3 is subtle). */
  speed?: number
  /** Float offset in ms; use negative values to desync neighbouring elements. */
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // reduced motion, or speed 0 => float only, no scroll parallax.
    if (reduced || !speed) {
      el.style.transform = ''
      return
    }
    let raf = 0
    const apply = () => {
      // Negative => elements drift upward as you scroll down.
      el.style.transform = `translate3d(0, ${-window.scrollY * speed}px, 0)`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(apply)
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [reduced, speed])

  return (
    <span
      ref={ref}
      aria-hidden
      className={cn('pointer-events-none absolute', className)}
    >
      <span
        className="float inline-block"
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  )
}
