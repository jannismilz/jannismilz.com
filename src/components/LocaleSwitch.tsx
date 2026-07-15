'use client'

import { useLocale, useTranslations } from 'next-intl'

import { Link, usePathname } from '@/i18n/navigation'

/**
 * Tiny, tucked-away language switch: shows the language you would
 * switch TO, keeps you on the page you are reading.
 */
export function LocaleSwitch() {
  let t = useTranslations('header')
  let locale = useLocale()
  let pathname = usePathname()
  let other = locale === 'de' ? 'en' : 'de'

  return (
    <Link
      href={pathname}
      locale={other}
      aria-label={t('localeSwitch')}
      title={t('localeSwitch')}
      className="text-[11px] tracking-[0.12em] text-ink-muted uppercase transition hover:text-accent"
    >
      {other}
    </Link>
  )
}
