import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { PrintButton } from '@/components/PrintButton'
import { Link } from '@/i18n/navigation'
import { formatLongDate } from '@/lib/formatDate'
import { alternatesFor } from '@/lib/seo'
import { getOwnArticle, loadArticleContent, ownArticles } from '@/lib/writing'

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
    // The print edition is a second rendering of the article, not a page of its own.
    alternates: alternatesFor(locale, `/writing/${slug}`),
    robots: { index: false },
  }
}

/**
 * The print edition: one article set as a newspaper page, in columns and
 * always in the morning palette, for printing or saving as a PDF. The
 * layout itself lives in tailwind.css under `.print-edition`.
 */
export default async function PrintEditionPage({
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

  return (
    <div className="print-edition min-h-full bg-paper text-ink">
      <div className="mx-auto flex max-w-[60rem] items-center justify-between gap-4 px-5 py-4 text-[13px] sm:px-8 print:hidden">
        <Link
          href={`/writing/${slug}`}
          className="text-ink-muted transition hover:text-ink"
        >
          <span aria-hidden="true">← </span>
          {t('print.back')}
        </Link>
        <PrintButton>{t('print.print')}</PrintButton>
      </div>

      <article
        lang={article.lang}
        className="mx-auto max-w-[60rem] px-5 pb-16 sm:px-8 print:max-w-none print:p-0"
      >
        <header className="text-center">
          {/* Newspaper double rule */}
          <div className="h-1.5 border-y border-ink" aria-hidden="true" />
          <p className="py-3 font-serif text-[40px] leading-none tracking-[0.08em] uppercase sm:text-[56px]">
            Jannis Milz
          </p>
          <div className="flex items-center justify-between gap-4 border-y border-ink py-1.5 text-[11px] tracking-[0.12em] uppercase">
            <span>{t('printEdition')}</span>
            <span>{formatLongDate(article.date, locale)}</span>
            <span>jannismilz.com</span>
          </div>
          <h1 className="mt-8 font-serif text-[36px] leading-[1.05] sm:text-[54px]">
            {article.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[46rem] font-serif text-[20px] leading-snug text-ink-muted italic">
            {article.description}
          </p>
          <p className="mt-4 text-[11px] tracking-[0.12em] uppercase">
            {t('print.byline')}
          </p>
          <div className="mt-6 border-t border-ink" aria-hidden="true" />
        </header>

        <div className="print-columns mt-6">
          <Content />
        </div>

        <footer className="mt-8 border-t border-ink pt-3 text-center text-[11px] tracking-[0.12em] text-ink-muted uppercase">
          jannismilz.com
        </footer>
      </article>
    </div>
  )
}
