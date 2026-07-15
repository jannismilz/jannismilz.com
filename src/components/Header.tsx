'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { LocaleSwitch } from '@/components/LocaleSwitch'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Link, usePathname } from '@/i18n/navigation'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let pathname = usePathname()
  let active = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={clsx(
        'text-[13px] tracking-[0.02em] transition',
        active
          ? 'text-accent underline decoration-2 underline-offset-4'
          : 'text-ink-muted hover:text-ink',
      )}
    >
      {children}
    </Link>
  )
}

export function Header() {
  let t = useTranslations('header')

  return (
    <header>
      {/* Newspaper double rule */}
      <div className="h-1.5 border-y border-ink" aria-hidden="true" />
      <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="font-serif text-[26px] tracking-[0.08em] text-ink uppercase"
          >
            Jannis Milz
          </Link>
          <p className="mt-1 text-[11px] tracking-[0.12em] text-ink-muted uppercase">
            {t('dateline')}
          </p>
        </div>
        <nav className="flex items-center gap-5">
          <NavLink href="/">{t('nav.letter')}</NavLink>
          <NavLink href="/projects">{t('nav.projects')}</NavLink>
          <NavLink href="/writing">{t('nav.writing')}</NavLink>
          <ThemeToggle />
          <LocaleSwitch />
        </nav>
      </div>
      <div className="border-t border-hairline" aria-hidden="true" />
    </header>
  )
}
