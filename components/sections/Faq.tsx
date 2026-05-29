'use client'
import { IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Accessible FAQ accordion. Items expand/collapse with a smooth
 * grid-template-rows animation (the same reliable, cross-browser technique the
 * nav dropdown uses) instead of a native <details>, which can't be animated.
 * Multiple items may be open at once. All answer text stays in the DOM so it
 * keeps matching the FAQPage JSON-LD. Motion is disabled under reduced-motion.
 */
export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set())
  const toggle = (i: number) =>
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <div className="mt-6 flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        const panelId = `faq-panel-${i}`
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-primary-200 bg-white"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand"
            >
              <span>{item.q}</span>
              <IconPlus
                size={20}
                aria-hidden
                className={cn(
                  'shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none',
                  isOpen && 'rotate-45'
                )}
              />
            </button>
            <div
              id={panelId}
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-relaxed text-foreground/80">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
