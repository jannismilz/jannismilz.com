import { type Metadata } from 'next'

/**
 * hreflang alternates for a route. German lives at the root, English
 * under /en; `path` is the locale-less pathname ('/', '/projects', ...).
 */
export function alternatesFor(
  locale: string,
  path: string,
): Metadata['alternates'] {
  const dePath = path === '/' ? '/' : path
  const enPath = path === '/' ? '/en' : `/en${path}`

  return {
    canonical: locale === 'de' ? dePath : enPath,
    languages: {
      de: dePath,
      en: enPath,
      'x-default': dePath,
    },
  }
}
