import { expect, test } from 'bun:test'
import { cn } from './utils'

test('cn merges and dedupes tailwind classes', () => {
  expect(cn('px-2', 'px-4')).toBe('px-4')
  expect(cn('text-black', false && 'hidden', 'font-bold')).toBe(
    'text-black font-bold'
  )
})
