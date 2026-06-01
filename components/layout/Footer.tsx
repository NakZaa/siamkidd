import Image from 'next/image'
import Link from 'next/link'
import { copy } from '@/lib/copy'
import { SITE } from '@/lib/site'

const NAV_LINKS = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/activities', key: 'activities' },
  { href: '/contact', key: 'contact' }
] as const

const displayFont = {
  fontFamily: 'var(--font-display), var(--font-sans), sans-serif'
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Mobile: brand centered on top, link groups in a tidy 2-col grid.
            Desktop: brand left, link groups spread to the right. */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Brand */}
          <Link
            href="/"
            aria-label={SITE.nameEn}
            className="flex items-center gap-2.5 md:shrink-0"
          >
            <Image
              src="/img/nav-mascot.webp"
              alt=""
              width={44}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-brand" style={displayFont}>
              Siam Kid D
            </span>
          </Link>

          {/* Link groups */}
          <div className="mx-auto grid w-full max-w-xs grid-cols-2 gap-x-6 gap-y-8 text-left md:mx-0 md:flex md:w-auto md:max-w-none md:gap-14">
            {/* Explore */}
            <nav aria-label="Footer navigation">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">
                Explore
              </p>
              <ul className="flex flex-col text-sm">
                {NAV_LINKS.map(l => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      prefetch={false}
                      className="flex min-h-11 items-center text-muted-foreground transition hover:text-brand"
                    >
                      {copy.nav[l.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Visit */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">
                Visit
              </p>
              <address className="flex flex-col gap-2 text-sm text-muted-foreground not-italic">
                <a
                  href={`tel:${SITE.phone.tel}`}
                  className="flex min-h-11 items-center transition hover:text-brand"
                >
                  {SITE.phone.display}
                </a>
                <p>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </p>
              </address>
            </div>

            {/* Legal */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">
                Legal
              </p>
              <ul className="flex flex-col text-sm">
                <li>
                  <Link
                    href="/legal/terms"
                    prefetch={false}
                    className="flex min-h-11 items-center text-muted-foreground transition hover:text-brand"
                  >
                    {copy.footer.terms}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/privacy"
                    prefetch={false}
                    className="flex min-h-11 items-center text-muted-foreground transition hover:text-brand"
                  >
                    {copy.footer.privacy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-center text-xs text-muted-foreground md:mt-16 md:text-left">
          &copy; {year} {SITE.nameEn}
        </p>
      </div>
    </footer>
  )
}
