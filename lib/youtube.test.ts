import { expect, test } from 'bun:test'
import { youtubeId } from './youtube'

test('parses various youtube url forms', () => {
  expect(youtubeId('https://youtu.be/VJrZXDt-tgE?si=x')).toBe('VJrZXDt-tgE')
  expect(youtubeId('https://www.youtube.com/watch?v=YEAPMbVVoeY')).toBe(
    'YEAPMbVVoeY'
  )
  expect(youtubeId('https://youtu.be/HDtZTA_qGrA')).toBe('HDtZTA_qGrA')
  expect(youtubeId('nY-PUgFL56c')).toBe('nY-PUgFL56c')
})
