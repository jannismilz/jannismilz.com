import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['de', 'en'],
  // German is the native, more personal default; English lives under /en.
  defaultLocale: 'de',
  localePrefix: 'as-needed',
  // Everyone lands on German at `/` — no Accept-Language or cookie
  // redirects. English is opt-in via the header switch or /en URLs.
  localeDetection: false,
})

export type Locale = (typeof routing.locales)[number]
