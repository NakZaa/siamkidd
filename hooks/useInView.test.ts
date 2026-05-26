import { expect, test } from 'bun:test'
import { renderHook } from '@testing-library/react'
import { useInView } from './useInView'

test('returns ref and initial inView=false', () => {
  // minimal IntersectionObserver mock for happy-dom
  // @ts-expect-error minimal mock
  globalThis.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  }
  const { result } = renderHook(() => useInView<HTMLDivElement>())
  expect(result.current.inView).toBe(false)
  expect(result.current.ref).toBeDefined()
})
