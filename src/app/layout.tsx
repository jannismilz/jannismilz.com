import { type Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jannismilz.com',
  ),
  title: {
    template: '%s — Jannis Milz',
    default: 'Jannis Milz — Software developer, curious by nature',
  },
  description:
    'Jannis Milz is a software developer from Switzerland — building eintrittli, coaching gymnastics, and poking at new technologies until they break.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full bg-paper font-sans text-[17px] leading-[1.65] text-ink">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
