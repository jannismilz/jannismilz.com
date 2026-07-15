import { type MetadataRoute } from 'next'

import { getOwnArticles } from '@/lib/writing'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jannismilz.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/projects',
    '/writing',
    ...getOwnArticles().map((article) => `/writing/${article.slug}`),
  ]

  return paths.flatMap((path) => {
    const de = path === '/' ? baseUrl : `${baseUrl}${path}`
    const en = path === '/' ? `${baseUrl}/en` : `${baseUrl}/en${path}`
    const alternates = { languages: { de, en } }

    return [
      { url: de, alternates },
      { url: en, alternates },
    ]
  })
}
