'use client'
import { IconBrandFacebook, IconMapPin, IconPhone } from '@tabler/icons-react'
import posthog from 'posthog-js'
import { copy } from '@/lib/copy'
import { SITE } from '@/lib/site'

function trackPhoneClick() {
  posthog.capture('call_link_clicked')
}

function trackFacebookMessageClick() {
  posthog.capture('facebook_message_clicked')
}

function trackDirectionsClick() {
  posthog.capture('directions_clicked')
}

export function ContactLinks() {
  return (
    <div className="mx-auto max-w-screen-sm px-5 pb-10 flex flex-col gap-3">
      {/* Call */}
      <a
        href={`tel:${SITE.phone.tel}`}
        onClick={trackPhoneClick}
        className="group flex items-center gap-3.5 min-h-[80px] rounded-3xl border border-primary-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-100 text-brand transition-transform duration-200 group-hover:scale-110">
          <IconPhone size={22} aria-hidden />
        </span>
        <div>
          <b className="text-brand block">{copy.contact.call}</b>
          <span className="text-sm text-foreground/65">
            {SITE.phone.display}
          </span>
        </div>
      </a>

      {/* Message */}
      <a
        href={SITE.facebook}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackFacebookMessageClick}
        className="group flex items-center gap-3.5 min-h-[80px] rounded-3xl border border-primary-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-100 text-brand transition-transform duration-200 group-hover:scale-110">
          <IconBrandFacebook size={22} aria-hidden />
        </span>
        <div>
          <b className="text-brand block">{copy.contact.message}</b>
          <span className="text-sm text-foreground/65">
            {copy.contact.messageSub}
          </span>
        </div>
      </a>

      {/* Visit */}
      <a
        href={SITE.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackDirectionsClick}
        className="group flex items-center gap-3.5 min-h-[80px] rounded-3xl border border-primary-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-100 text-brand transition-transform duration-200 group-hover:scale-110">
          <IconMapPin size={22} aria-hidden />
        </span>
        <div>
          <b className="text-brand block">{copy.contact.visit}</b>
          <span className="text-sm text-foreground/65">
            {SITE.address.line1}, {SITE.address.line2}
          </span>
        </div>
      </a>
    </div>
  )
}
