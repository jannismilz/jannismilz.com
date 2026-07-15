import { type Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { Eyebrow } from '@/components/Eyebrow'
import { FigureFrame } from '@/components/FigureFrame'
import { MarginNote } from '@/components/MarginNote'
import { PullQuote } from '@/components/PullQuote'
import { alternatesFor } from '@/lib/seo'

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

function Letter() {
  const t = useTranslations('home')

  return (
    <section className="pt-12 sm:pt-16">
      <h1 className="font-serif text-[42px] leading-[1.05] sm:text-[56px]">
        {t.rich('headline', {
          br: () => <br />,
          gradient: (chunks) => (
            <span className="bg-gradient-to-r from-accent to-accent-amber bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
      </h1>
      <div className="mt-8 space-y-5">
        <p className="relative drop-cap">
          {t('letter.p1')}
          <MarginNote>{t('letter.p1Note')}</MarginNote>
        </p>
        <p>{t('letter.p2')}</p>
        <PullQuote caption={t('letter.pullQuoteCaption')}>
          {t('letter.pullQuote')}
        </PullQuote>
        <FigureFrame
          className="sm:float-right sm:mt-1 sm:mb-2 sm:ml-8 sm:w-48"
          aspect="3/4"
          placeholder={t('letter.figureAPlaceholder')}
          captionLead={t('letter.figureACaptionLead')}
          caption={t('letter.figureACaption')}
        />
        <p>{t('letter.p3')}</p>
        <p>{t('letter.p4')}</p>
        <FigureFrame
          className="sm:float-left sm:clear-right sm:mt-1 sm:mr-8 sm:mb-2 sm:w-52"
          placeholder={t('letter.figureBPlaceholder')}
          captionLead={t('letter.figureBCaptionLead')}
          caption={t('letter.figureBCaption')}
        />
        <p className="relative">
          {t('letter.p5')}
          <MarginNote>{t('letter.p5Note')}</MarginNote>
        </p>
        <p>
          {t.rich('letter.p6', {
            mail: (chunks) => (
              <a
                href="mailto:hi@jannismilz.com"
                className="text-accent underline decoration-1 underline-offset-3 hover:decoration-2"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
      <p className="clear-both mt-8 font-serif text-[28px] italic">
        {t('letter.signoff')}
      </p>
      <aside className="mt-10 border border-hairline bg-paper-raised p-5 text-[15px] leading-relaxed text-ink-muted">
        {t('letter.ps')}
      </aside>
    </section>
  )
}

function Now() {
  const t = useTranslations('home.now')

  const items = [
    t.rich('item1', {
      link: (chunks) => (
        <a
          href="https://eintrittli.ch"
          target="_blank"
          className="text-accent underline decoration-1 underline-offset-3 hover:decoration-2"
        >
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
      <Letter />
      <Now />
    </>
  )
}
