export function youtubeId(input: string): string {
  if (/^[\w-]{11}$/.test(input)) return input
  const url = new URL(input)
  if (url.hostname === 'youtu.be') return url.pathname.slice(1)
  return url.searchParams.get('v') ?? url.pathname.split('/').pop() ?? ''
}
