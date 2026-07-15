import { type Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Eyebrow } from '@/components/Eyebrow'
import { FigureFrame } from '@/components/FigureFrame'
import { Link } from '@/i18n/navigation'
import { formatDate } from '@/lib/formatDate'
import { alternatesFor } from '@/lib/seo'
import { getHighlights, getMediumArticles, getOwnArticles } from '@/lib/writing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'writing.meta' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: alternatesFor(locale, '/writing'),
  }
}

function LangTag({ lang }: { lang: 'de' | 'en' }) {
  const t = useTranslations('writing')
  const locale = useLocale()

  if (lang === locale) return null
  return (
    <span className="ml-2 text-[11px] tracking-[0.08em] text-ink-muted uppercase">
      {t(`langTag.${lang}`)}
    </span>
  )
}

function OwnArticles() {
  const t = useTranslations('writing')
  const locale = useLocale() as 'de' | 'en'

  return (
    <section className="mt-12">
      <Eyebrow>{t('ownTitle')}</Eyebrow>
      <div className="divide-y divide-hairline">
        {getOwnArticles().map((article) => (
          <article key={article.slug} className="group relative py-5">
            <p className="text-[13px] text-ink-muted">
              {formatDate(article.date, locale)}
            </p>
            <h3 className="mt-1 font-serif text-[24px] leading-snug">
              <Link href={`/writing/${article.slug}`}>
                {/* Stretch the click target over the whole row */}
                <span className="absolute inset-0" aria-hidden="true" />
                <span className="underline decoration-transparent decoration-2 underline-offset-4 transition group-hover:decoration-accent">
                  {article.title}
                </span>
              </Link>
              <LangTag lang={article.lang} />
            </h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
              {article.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Highlights() {
  const t = useTranslations('writing')
  const locale = useLocale() as 'de' | 'en'

  return (
    <section className="mt-16">
      <Eyebrow>{t('highlightsTitle')}</Eyebrow>
      <div className="divide-y divide-hairline">
        {getHighlights().map((highlight) => (
          <article key={highlight.link} className="group relative py-5">
            <p className="text-[13px] text-ink-muted">
              {formatDate(highlight.date, locale)} · {highlight.source}
            </p>
            <h3 className="mt-1 font-serif text-[20px] leading-snug">
              <a href={highlight.link} target="_blank">
                {/* Stretch the click target over the whole row */}
                <span className="absolute inset-0" aria-hidden="true" />
                <span className="underline decoration-transparent decoration-2 underline-offset-4 transition group-hover:decoration-accent">
                  {highlight.title}
                </span>
              </a>
              <LangTag lang={highlight.lang ?? 'en'} />
              <span
                className="inline-block text-ink-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                {' '}
                ↗
              </span>
            </h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
              {highlight.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Archive() {
  const t = useTranslations('writing')
  const locale = useLocale() as 'de' | 'en'

  return (
    <section className="mt-16">
      <Eyebrow>{t('archiveTitle')}</Eyebrow>
      <p className="mt-3 font-serif text-[15px] text-ink-muted italic">
        {t('archiveNote')}
      </p>
      <ul className="mt-2 divide-y divide-hairline">
        {getMediumArticles().map((article) => (
          <li key={article.link}>
            <a
              href={article.link}
              target="_blank"
              className="group flex items-baseline gap-4 py-2.5"
            >
              <time className="w-18 shrink-0 text-[13px] text-ink-muted">
                {formatDate(article.date, locale)}
              </time>
              <span className="text-[15px] font-medium transition group-hover:text-accent">
                {article.title}
                <LangTag lang={article.lang ?? 'en'} />
                <span
                  className="inline-block text-ink-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  {' '}
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default async function Writing({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('writing')

  return (
    <>
      <header className="gap-8 pt-12 sm:flex sm:items-start sm:justify-between sm:pt-16">
        <div>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h1 className="mt-4 font-serif text-[38px] leading-[1.1] sm:text-[48px]">
            {t('headline')}
          </h1>
          <p className="mt-4 max-w-[52ch] text-[16px] text-ink-muted">
            {t('intro')}
          </p>
        </div>
        <FigureFrame
          className="mt-6 shrink-0 sm:mt-2 sm:w-44"
          placeholder={t('figurePlaceholder')}
          captionLead={t('figureCaptionLead')}
          caption={t('figureCaption')}
        />
      </header>
      <OwnArticles />
      <Highlights />
      <Archive />
    </>
  )
}
