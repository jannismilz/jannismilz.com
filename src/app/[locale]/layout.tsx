import { type Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { routing } from '@/i18n/routing'
import { alternatesFor } from '@/lib/seo'

import '@/styles/tailwind.css'

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const sans = Instrument_Sans({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jannismilz.com',
    ),
    title: {
      template: '%s · Jannis Milz',
      default: t('title'),
    },
    description: t('description'),
    alternates: alternatesFor(locale, '/'),
    openGraph: {
      type: 'website',
      siteName: 'Jannis Milz',
      locale: locale === 'de' ? 'de_CH' : 'en_US',
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary',
      title: t('title'),
      description: t('description'),
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full bg-paper font-sans text-[17px] leading-[1.65] text-ink">
        <NextIntlClientProvider>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
