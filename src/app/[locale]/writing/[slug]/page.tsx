import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Eyebrow } from '@/components/Eyebrow'
import { Link } from '@/i18n/navigation'
import { formatDate } from '@/lib/formatDate'
import { alternatesFor } from '@/lib/seo'
import { getOwnArticle, ownArticles } from '@/lib/writing'

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

  return {
    title: article.title,
    description: article.description,
    alternates: alternatesFor(locale, `/writing/${slug}`),
    openGraph: {
      type: 'article',
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
  const { default: Content } = await import(
    `../../../../content/writing/${slug}.mdx`
  )

  return (
    <article className="pt-12 sm:pt-16" lang={article.lang}>
      <header>
        <Eyebrow>{t('eyebrow')}</Eyebrow>
        <h1 className="mt-4 font-serif text-[38px] leading-[1.1] sm:text-[48px]">
          {article.title}
        </h1>
        <p className="mt-4 text-[13px] tracking-[0.08em] text-ink-muted uppercase">
          {formatDate(article.date, locale)}
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
