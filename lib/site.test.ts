import { expect, test } from 'bun:test'
import { SITE } from './site'

test('phone has tel: link and display form', () => {
  expect(SITE.phone.tel).toBe('+6644602070')
  expect(SITE.phone.display).toBe('+66 (0)44 602 070')
})
test('facebook + map urls are absolute https', () => {
  for (const u of [SITE.facebook, SITE.mapUrl, SITE.mapEmbed]) {
    expect(u.startsWith('https://')).toBe(true)
  }
})
test('address has all parts', () => {
  expect(SITE.address.full).toContain('Buriram')
  expect(SITE.address.full).toContain('31000')
})
