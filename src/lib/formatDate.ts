/** Parses the site's `DD.MM.YYYY` date strings. */
export function parseDate(dateString: string) {
  const [day, month, year] = dateString.split('.').map(Number)
  return new Date(year, month - 1, day)
}

const dateLocales = { de: 'de-CH', en: 'en-GB' } as const

export function formatDate(dateString: string, locale: 'de' | 'en' = 'en') {
  return parseDate(dateString).toLocaleDateString(dateLocales[locale], {
    month: 'short',
    year: 'numeric',
  })
}
