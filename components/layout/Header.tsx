'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import { copy } from '@/lib/copy'
import { cn } from '@/lib/utils'

// "Home" and "Contact" are intentionally omitted: the logo already links home,
// and the "Contact us" CTA already links to /contact, so listing either as a
// nav link would be redundant.
const LINKS = [
  { href: '/about', key: 'about' },
  { href: '/activities', key: 'activities' }
] as const

const displayFont = {
  fontFamily: 'var(--font-display), var(--font-sans), sans-serif'
}

export function Header() {
  const scrolled = useScrolled(8)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change intentionally triggers close
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <header
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 0.6rem)' }}
      >
        <div
          className={cn(
            // Full-width bar on mobile (bevel-style), content-hugging pill on desktop.
            // Mobile keeps a CONSTANT rounded-rectangle radius so the panel expands
            // cleanly; morphing rounded-full -> a smaller radius made the growing box
            // balloon into an oval. Desktop pill stays fully rounded.
            'glass w-full rounded-3xl transition-[background,border-color,box-shadow] duration-300 md:w-auto md:rounded-full',
            (scrolled || open) && 'glass--solid'
          )}
        >
          {/* Bar row */}
          <div className="flex items-center justify-between gap-2 px-3 py-2">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-1.5"
              aria-label={`${copy.hero.title}, home`}
            >
              <Image
                src="/img/nav-mascot.webp"
                alt=""
                width={35}
                height={32}
                priority
                className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-110"
              />
              <span
                className="text-[16px] font-bold text-brand transition-colors duration-200 group-hover:text-brand/80"
                style={displayFont}
              >
                Siam Kid D
              </span>
            </Link>

            {/* Desktop inline nav */}
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Main"
            >
              {LINKS.map(l => {
                const active = pathname.startsWith(l.href)
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      'rounded-full px-3 py-1.5 text-sm font-semibold text-brand/80',
                      'transition hover:bg-primary-100 hover:text-brand',
                      active && 'bg-primary-100 text-brand'
                    )}
                    style={displayFont}
                  >
                    {copy.nav[l.key]}
                  </Link>
                )
              })}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="hidden rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white transition hover:bg-brand/90 md:inline-flex"
                style={displayFont}
              >
                {copy.hero.contact}
              </Link>

              {/* Animated hamburger -- mobile only */}
              <button
                type="button"
                aria-label={copy.nav.menu}
                aria-expanded={open}
                aria-controls="main-menu"
                onClick={() => setOpen(v => !v)}
                className="relative grid h-11 w-11 place-items-center rounded-lg outline-none md:hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="sr-only">{copy.nav.menu}</span>
                <span aria-hidden className="relative block h-4 w-5">
                  <span
                    className={cn(
                      'absolute left-0 top-0 h-0.5 w-5 rounded bg-brand transition-all duration-300',
                      open && 'top-1/2 -translate-y-1/2 rotate-45'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded bg-brand transition-all duration-300',
                      open && 'opacity-0'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-0.5 w-5 rounded bg-brand transition-all duration-300',
                      open && 'bottom-1/2 translate-y-1/2 -rotate-45'
                    )}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile connected dropdown -- always mounted, animates open/close */}
          <div
            id="main-menu"
            aria-hidden={!open}
            className={cn(
              'grid transition-[grid-template-rows] duration-300 ease-out md:hidden',
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            )}
          >
            <div
              className={cn(
                'overflow-hidden transition-opacity duration-300',
                open ? 'opacity-100' : 'opacity-0'
              )}
            >
              <nav aria-label="Main" className="px-3 pb-3">
                <div className="flex flex-col items-center">
                  {LINKS.map(l => {
                    const active = pathname.startsWith(l.href)
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        tabIndex={open ? undefined : -1}
                        className={cn(
                          'w-full rounded-xl py-3 text-center text-lg font-semibold',
                          'text-brand transition hover:bg-primary-100',
                          active && 'bg-primary-100'
                        )}
                        style={displayFont}
                      >
                        {copy.nav[l.key]}
                      </Link>
                    )
                  })}
                </div>
                <Link
                  href="/contact"
                  tabIndex={open ? undefined : -1}
                  className="mt-2 block rounded-full bg-brand px-5 py-3 text-center text-sm font-bold text-white"
                  style={displayFont}
                >
                  {copy.hero.contact}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
