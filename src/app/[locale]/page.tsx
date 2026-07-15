import { type Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { Eyebrow } from '@/components/Eyebrow'
import { FigureFrame } from '@/components/FigureFrame'
import { MarginNote } from '@/components/MarginNote'
import { PullQuote } from '@/components/PullQuote'
import { Link } from '@/i18n/navigation'
import { formatDate, parseDate } from '@/lib/formatDate'
import { projects } from '@/lib/projects'
import { alternatesFor } from '@/lib/seo'
import { getHighlights, getOwnArticles } from '@/lib/writing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return { alternates: alternatesFor(locale, '/') }
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jannis Milz',
  url: 'https://jannismilz.com',
  jobTitle: 'Software Developer',
  sameAs: [
    'https://github.com/jannismilz',
    'https://www.linkedin.com/in/jannis-milz-700031207/',
    'https://medium.com/@jannismilz',
  ],
}

const accentLink =
  'text-accent underline decoration-1 underline-offset-3 hover:decoration-2'

/** The short opening: motto, two paragraphs, one figure, one pull quote. */
function LetterOpening() {
  const t = useTranslations('home.letter')
  const tHome = useTranslations('home')

  return (
    <section className="pt-12 sm:pt-16">
      <h1 className="font-serif text-[42px] leading-[1.05] sm:text-[56px]">
        {tHome.rich('headline', {
          br: () => <br />,
          gradient: (chunks) => (
            <span className="bg-gradient-to-r from-accent to-accent-amber bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
      </h1>
      <div className="mt-8 space-y-5">
        <FigureFrame
          className="sm:float-right sm:mt-1 sm:mb-2 sm:ml-8 sm:w-48"
          aspect="3/4"
          placeholder={t('figureAPlaceholder')}
          captionLead={t('figureACaptionLead')}
          caption={t('figureACaption')}
        />
        <p className="relative drop-cap">
          {t('p1')}
          <MarginNote>{t('p1Note')}</MarginNote>
        </p>
        <p>{t('p2')}</p>
      </div>
      <div className="clear-both pt-6">
        <PullQuote caption={t('pullQuoteCaption')}>{t('pullQuote')}</PullQuote>
      </div>
    </section>
  )
}

function Now() {
  const t = useTranslations('home.now')

  const items = [
    t.rich('item1', {
      link: (chunks) => (
        <a href="https://eintrittli.ch" target="_blank" className={accentLink}>
          {chunks}
        </a>
      ),
    }),
    t('item2'),
    t('item3'),
  ]

  return (
    <section className="mt-16">
      <Eyebrow>{t('title')}</Eyebrow>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[16px]">
            <span className="text-accent select-none" aria-hidden="true">
              ▪
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** The latest pieces from the writing page, own posts and highlights mixed. */
function FreshOffThePress() {
  const t = useTranslations('home.fresh')
  const tWriting = useTranslations('writing')
  const locale = useLocale() as 'de' | 'en'

  const items = [
    ...getOwnArticles().map((article) => ({
      date: article.date,
      title: article.title,
      href: `/writing/${article.slug}`,
      external: false,
      lang: article.lang,
    })),
    ...getHighlights().map((highlight) => ({
      date: highlight.date,
      title: highlight.title,
      href: highlight.link,
      external: true,
      lang: highlight.lang ?? ('en' as const),
    })),
  ]
    .sort((a, z) => +parseDate(z.date) - +parseDate(a.date))
    .slice(0, 3)

  return (
    <section className="mt-16">
      <Eyebrow>{t('title')}</Eyebrow>
      <ul className="mt-2 divide-y divide-hairline">
        {items.map((item) => {
          const row = (
            <>
              <time className="w-18 shrink-0 text-[13px] text-ink-muted">
                {formatDate(item.date, locale)}
              </time>
              <span className="text-[15px] font-medium transition group-hover:text-accent">
                {item.title}
                {item.lang !== locale && (
                  <span className="ml-2 text-[11px] tracking-[0.08em] text-ink-muted uppercase">
                    {tWriting(`langTag.${item.lang}`)}
                  </span>
                )}
                {item.external && (
                  <span
                    className="inline-block text-ink-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    {' '}
                    ↗
                  </span>
                )}
              </span>
            </>
          )

          return (
            <li key={item.href}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  className="group flex items-baseline gap-4 py-2.5"
                >
                  {row}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-4 py-2.5"
                >
                  {row}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
      <Link
        href="/writing"
        className="group mt-2 inline-block text-[14px] text-accent"
      >
        {t('all')}
        <span
          className="inline-block transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          {' '}
          →
        </span>
      </Link>
    </section>
  )
}

/** A compact pointer to the two flagship projects. */
function ProjectsTeaser() {
  const t = useTranslations('home.projects')
  const teased = projects.filter((project) =>
    ['eintrittli', 'weborb'].includes(project.slug),
  )

  return (
    <section className="mt-16">
      <Eyebrow>{t('title')}</Eyebrow>
      <ul className="mt-2 divide-y divide-hairline">
        {teased.map((project) => (
          <li key={project.slug}>
            <a
              href={project.link.href}
              target="_blank"
              className="group flex flex-col gap-x-4 py-3.5 sm:flex-row sm:items-baseline"
            >
              <span className="shrink-0 font-serif text-[19px] transition group-hover:text-accent">
                {project.name}
              </span>
              <span className="text-[14px] text-ink-muted">
                {t(project.slug)}
                <span
                  className="inline-block transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
      <Link
        href="/projects"
        className="group mt-2 inline-block text-[14px] text-accent"
      >
        {t('all')}
        <span
          className="inline-block transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          {' '}
          →
        </span>
      </Link>
    </section>
  )
}

/** The short sign-off: coaching, curiosity, contact, signature. */
function LetterClosing() {
  const t = useTranslations('home.closing')

  return (
    <section className="mt-16">
      <Eyebrow>{t('eyebrow')}</Eyebrow>
      <div className="mt-6 space-y-5">
        <FigureFrame
          className="sm:float-right sm:mt-1 sm:mb-2 sm:ml-8 sm:w-48"
          aspect="3/4"
          placeholder={t('figureBPlaceholder')}
          captionLead={t('figureBCaptionLead')}
          caption={t('figureBCaption')}
        />
        <p>{t('p1')}</p>
        <p className="relative">
          {t('p2')}
          <MarginNote>{t('p2Note')}</MarginNote>
        </p>
        <p>
          {t.rich('p3', {
            mail: (chunks) => (
              <a href="mailto:hi@jannismilz.com" className={accentLink}>
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
      <p className="clear-both mt-8 font-serif text-[28px] italic">
        {t('signoff')}
      </p>
    </section>
  )
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <LetterOpening />
      <Now />
      <FreshOffThePress />
      <ProjectsTeaser />
      <LetterClosing />
    </>
  )
}
