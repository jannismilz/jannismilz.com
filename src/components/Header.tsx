'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { ThemeToggle } from '@/components/ThemeToggle'

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
  return (
    <header>
      {/* Newspaper double rule */}
      <div className="h-1.5 border-y border-ink" aria-hidden="true" />
      <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <Link
            href="/"
            className="font-serif text-[26px] tracking-[0.08em] text-ink uppercase"
          >
            Jannis Milz
          </Link>
          <p className="mt-1 text-[11px] tracking-[0.12em] text-ink-muted uppercase">
            Zürich, Switzerland · Programming since age 12
          </p>
        </div>
        <nav className="flex items-center gap-5">
          <NavLink href="/">Front page</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <ThemeToggle />
        </nav>
      </div>
      <div className="border-t border-hairline" aria-hidden="true" />
    </header>
  )
}
