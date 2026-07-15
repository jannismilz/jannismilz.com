import Link from 'next/link'
import { useTranslations } from 'next-intl'

function FooterLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      className="text-ink-muted transition hover:text-accent"
      target="_blank"
      {...props}
    />
  )
}

export function Footer() {
  let t = useTranslations('footer')

  return (
    <footer className="mt-20 pb-10">
      <div className="border-t border-hairline" aria-hidden="true" />
      <div className="mt-6 flex flex-col gap-2 text-[13px] sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-ink-muted">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
        <div className="flex gap-4">
          <FooterLink href="https://github.com/jannismilz">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/jannis-milz-700031207/">
            LinkedIn
          </FooterLink>
          <FooterLink href="mailto:hi@jannismilz.com" target="_self">
            hi@jannismilz.com
          </FooterLink>
        </div>
      </div>
      <p className="mt-4 font-serif text-[14px] text-ink-muted/80 italic">
        {t('joke')}
      </p>
    </footer>
  )
}
