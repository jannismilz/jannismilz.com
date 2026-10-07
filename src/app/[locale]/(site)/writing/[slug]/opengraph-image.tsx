import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

import { formatLongDate } from '@/lib/formatDate'
import { getOwnArticle, ownArticles } from '@/lib/writing'

export const alt = 'Jannis Milz'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return ownArticles.map((article) => ({ slug: article.slug }))
}

// The morning palette from tailwind.css; share images are always light.
const paper = '#faf6ef'
const ink = '#1a1815'
const inkMuted = '#6e6558'
const accent = '#c8371e'

/**
 * The share image for an article: a clipping from the paper, with the
 * masthead on top and the headline set large in the serif.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ locale: 'de' | 'en'; slug: string }>
}) {
  const { locale, slug } = await params
  const article = getOwnArticle(slug)
  const serif = await readFile(
    join(process.cwd(), 'src/fonts/InstrumentSerif-Regular.ttf'),
  )

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: paper,
        color: ink,
        padding: '56px 72px',
        fontFamily: 'Instrument Serif',
      }}
    >
      {/* Newspaper double rule */}
      <div
        style={{
          height: 10,
          borderTop: `2px solid ${ink}`,
          borderBottom: `2px solid ${ink}`,
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: '22px 0 20px',
          borderBottom: `1px solid ${ink}`,
        }}
      >
        <div style={{ fontSize: 40, letterSpacing: 4 }}>JANNIS MILZ</div>
        <div style={{ fontSize: 26, color: inkMuted }}>
          {article ? formatLongDate(article.date, locale) : ''}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          fontSize: 92,
          lineHeight: 1.04,
        }}
      >
        {article?.title ?? 'Jannis Milz'}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 28,
          color: inkMuted,
        }}
      >
        <div>jannismilz.com</div>
        <div style={{ color: accent }}>→</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: 'Instrument Serif', data: serif, weight: 400 }],
    },
  )
}
