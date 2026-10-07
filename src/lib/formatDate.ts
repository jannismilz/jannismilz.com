/** Parses the site's `DD.MM.YYYY` date strings. */
export function parseDate(dateString: string) {
  const [day, month, year] = dateString.split('.').map(Number)
  return new Date(year, month - 1, day)
}

const dateLocales = { de: 'de-CH', en: 'en-GB' } as const

/** `YYYY-MM-DD`, for metadata such as `article:published_time`. */
export function toIsoDate(dateString: string) {
  const [day, month, year] = dateString.split('.')
  return `${year}-${month}-${day}`
}

/** A full date for datelines, e.g. '6 October 2026'. */
export function formatLongDate(dateString: string, locale: 'de' | 'en' = 'en') {
  return parseDate(dateString).toLocaleDateString(dateLocales[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatDate(dateString: string, locale: 'de' | 'en' = 'en') {
  return parseDate(dateString).toLocaleDateString(dateLocales[locale], {
    month: 'short',
    year: 'numeric',
  })
}
