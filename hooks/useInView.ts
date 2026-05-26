'use client'
import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(
  opts: IntersectionObserverInit = {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  }
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  // biome-ignore lint/correctness/useExhaustiveDependencies: opts fires once on mount; adding it would cause infinite re-runs for inline default objects
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, opts)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, inView }
}
