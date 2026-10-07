import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Eyebrow } from '@/components/Eyebrow'
import { Link } from '@/i18n/navigation'
import { formatDate, toIsoDate } from '@/lib/formatDate'
import { alternatesFor } from '@/lib/seo'
import { getOwnArticle, loadArticleContent, ownArticles } from '@/lib/writing'

const author = { name: 'Jannis Milz', url: 'https://jannismilz.com' }

export function generateStaticParams() {
  return ownArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = getOwnArticle(slug)
  if (!article) return {}

  const alternates = alternatesFor(locale, `/writing/${slug}`)

  // The share image comes from opengraph-image.tsx next to this file.
  return {
    title: article.title,
    description: article.description,
    authors: [{ name: author.name, url: author.url }],
    alternates,
    openGraph: {
      type: 'article',
      siteName: author.name,
      url: alternates?.canonical as string,
      locale: article.lang === 'de' ? 'de_CH' : 'en_US',
      title: article.title,
      description: article.description,
      publishedTime: toIsoDate(article.date),
      authors: [author.url],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: 'de' | 'en'; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const article = getOwnArticle(slug)
  if (!article) notFound()

  const t = await getTranslations('writing')
  const Content = await loadArticleContent(slug)

  // Structured data, so search engines can show the piece as an article.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: toIsoDate(article.date),
    inLanguage: article.lang,
    author: { '@type': 'Person', ...author },
  }

  return (
    <article className="pt-12 sm:pt-16" lang={article.lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <header>
        <Eyebrow>{t('eyebrow')}</Eyebrow>
        <h1 className="mt-4 font-serif text-[38px] leading-[1.1] sm:text-[48px]">
          {article.title}
        </h1>
        <p className="mt-4 text-[13px] tracking-[0.08em] text-ink-muted uppercase">
          {formatDate(article.date, locale)}
          <span aria-hidden="true"> · </span>
          <Link
            href={`/writing/${slug}/print`}
            className="underline decoration-1 underline-offset-3 transition hover:text-accent"
          >
            {t('printEdition')}
          </Link>
        </p>
      </header>
      <div className="mt-8 space-y-5">
        <Content />
      </div>
      <Link
        href="/writing"
        className="group mt-10 inline-block text-[14px] text-accent"
      >
        <span
          className="inline-block transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
        >
          ←{' '}
        </span>
        {t('backToWriting')}
      </Link>
    </article>
  )
}
