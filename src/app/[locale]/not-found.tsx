import { useTranslations } from 'next-intl'

import { Eyebrow } from '@/components/Eyebrow'
import { Link } from '@/i18n/navigation'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <section className="pt-16 sm:pt-24">
      <Eyebrow>{t('eyebrow')}</Eyebrow>
      <h1 className="mt-5 font-serif text-[38px] leading-[1.1] sm:text-[48px]">
        {t('headline')}
      </h1>
      <p className="mt-5 max-w-[52ch] text-ink-muted">{t('body')}</p>
      <Link
        href="/"
        className="group mt-6 inline-block text-[15px] text-accent"
      >
        {t('back')}
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
