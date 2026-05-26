import { expect, test } from '@playwright/test'

const ROUTES = [
  '/',
  '/about',
  '/activities',
  '/contact',
  '/legal/terms',
  '/legal/privacy'
]

// Known benign third-party console errors that can't be suppressed from our code
const KNOWN_THIRD_PARTY_ERRORS = [
  // Google Maps iframe may log errors about cookies/permissions in headless mode
  /google/i,
  /maps/i,
  /gstatic/i,
  /googleapis/i
]

function isBenignThirdPartyError(msg: string): boolean {
  return KNOWN_THIRD_PARTY_ERRORS.some(pattern => pattern.test(msg))
}

for (const path of ROUTES) {
  test(`loads ${path} with header, footer, one h1, no console errors`, async ({
    page
  }) => {
    const errors: string[] = []
    page.on('console', m => {
      if (m.type() === 'error' && !isBenignThirdPartyError(m.text())) {
        errors.push(m.text())
      }
    })
    await page.goto(path)
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await expect(page.locator('h1')).toHaveCount(1)
    expect(errors).toEqual([])
  })
}
