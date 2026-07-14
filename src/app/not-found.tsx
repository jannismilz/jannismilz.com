import Link from 'next/link'

import { Eyebrow } from '@/components/Eyebrow'

export default function NotFound() {
  return (
    <section className="pt-16 sm:pt-24">
      <Eyebrow>Correction</Eyebrow>
      <h1 className="mt-5 font-serif text-[38px] leading-[1.1] sm:text-[48px]">
        This page never went to print.
      </h1>
      <p className="mt-5 max-w-[52ch] text-ink-muted">
        In an earlier edition we may have implied this page exists. We regret
        the error.
      </p>
      <Link
        href="/"
        className="group mt-6 inline-block text-[15px] text-accent"
      >
        Return to the front page
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
