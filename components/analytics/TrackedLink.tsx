'use client'
import Link from 'next/link'
import posthog from 'posthog-js'
import type { ComponentProps } from 'react'

/**
 * A next/link that fires a PostHog event on click. Works for both internal
 * routes and external URLs (pass `target`/`rel` as usual). Keeping the tracking
 * in this small client leaf lets the surrounding section stay a Server
 * Component -- this is the only client boundary.
 */
export function TrackedLink({
  event,
  eventProps,
  onClick,
  ...props
}: ComponentProps<typeof Link> & {
  /** PostHog event name to capture on click. */
  event: string
  /** Optional properties to attach to the event. */
  eventProps?: Record<string, unknown>
}) {
  return (
    <Link
      {...props}
      onClick={e => {
        posthog.capture(event, eventProps)
        onClick?.(e)
      }}
    />
  )
}
