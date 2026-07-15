import { type Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Eyebrow } from '@/components/Eyebrow'
import { FigureFrame } from '@/components/FigureFrame'
import { ProjectEntry } from '@/components/ProjectEntry'
import { projectCategories, projects } from '@/lib/projects'
import { alternatesFor } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects.meta' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: alternatesFor(locale, '/projects'),
  }
}

function SwissSkillsHighlight() {
  const t = useTranslations('projects.swissskills')
  const locale = useLocale()

  return (
    <section className="mt-14 border border-hairline bg-paper-raised p-6 sm:p-8">
      <p className="text-[11px] font-medium tracking-[0.12em] text-accent uppercase">
        {t('highlight')}
      </p>
      <h2 className="mt-2 font-serif text-[28px] leading-tight">
        {t('title')}
      </h2>
      <div className="mt-4 gap-8 sm:flex">
        <div className="text-[15px] leading-relaxed">
          <p>{t('body')}</p>
          <a
            href="https://www.plattformj.ch/artikel/236098/?utm_source=jannismilz.com&utm_medium=referral"
            target="_blank"
            className="group mt-4 inline-block text-[14px] text-accent"
          >
            {t('readInterview')}
            {locale !== 'de' && (
              <span className="ml-2 text-[11px] tracking-[0.08em] text-ink-muted uppercase">
                German
              </span>
            )}
            <span
              className="inline-block transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              {' '}
              →
            </span>
          </a>
        </div>
        <FigureFrame
          className="mt-6 shrink-0 sm:mt-0 sm:w-56"
          placeholder={t('figurePlaceholder')}
          captionLead={t('figureCaptionLead')}
          caption={t('figureCaption')}
        />
      </div>
    </section>
  )
}

function ProjectGroups() {
  const t = useTranslations('projects')

  return (
    <>
      {projectCategories.map((category) => {
        const entries = projects.filter(
          (project) => project.category === category,
        )
        if (entries.length === 0) return null

        return (
          <section key={category} className="mt-12">
            <Eyebrow>{t(`categories.${category}`)}</Eyebrow>
            <div className="divide-y divide-hairline">
              {entries.map((project) => (
                <ProjectEntry
                  key={project.slug}
                  project={project}
                  description={t(`items.${project.slug}.description`)}
                />
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('projects')

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
      <ProjectGroups />
      <SwissSkillsHighlight />
    </>
  )
}
