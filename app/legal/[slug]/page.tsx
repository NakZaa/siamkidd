import fs from 'node:fs/promises'
import path from 'node:path'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const VALID_SLUGS = ['terms', 'privacy'] as const
type Slug = (typeof VALID_SLUGS)[number]

function isValidSlug(slug: string): slug is Slug {
  return (VALID_SLUGS as readonly string[]).includes(slug)
}

/** Strip leading YAML/TOML frontmatter block (between --- lines). */
function stripFrontmatter(raw: string): string {
  if (!raw.startsWith('---')) return raw
  const end = raw.indexOf('\n---', 3)
  if (end === -1) return raw
  return raw.slice(end + 4).trimStart()
}

export function generateStaticParams() {
  return [{ slug: 'terms' }, { slug: 'privacy' }]
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const title =
    slug === 'terms'
      ? 'Terms of Use'
      : slug === 'privacy'
        ? 'Privacy Policy'
        : slug.charAt(0).toUpperCase() + slug.slice(1)
  return { title, alternates: { canonical: `/legal/${slug}` } }
}

export default async function LegalPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!isValidSlug(slug)) notFound()

  const filePath = path.join(process.cwd(), 'content', 'legal', `${slug}.md`)
  const raw = await fs.readFile(filePath, 'utf8')
  // Strip HTML comment TODO line and frontmatter if present
  const stripped = stripFrontmatter(raw)

  return (
    <div className="mx-auto max-w-screen-sm px-5 pt-[calc(env(safe-area-inset-top)+5rem)] pb-16 md:pt-[calc(env(safe-area-inset-top)+6rem)]">
      <article className="prose prose-neutral max-w-none prose-headings:text-brand prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{stripped}</ReactMarkdown>
      </article>
    </div>
  )
}
