import { parseDate } from '@/lib/formatDate'

/**
 * Everything listed on the writing page lives in this file, in three
 * easy-to-edit lists:
 *
 * - `ownArticles` — my own posts, published on this site. Write the
 *   content as `src/content/writing/<slug>.mdx`, then add an entry here.
 * - `highlights` — press features, interviews, mentions elsewhere.
 * - `mediumArticles` — the external archive. To add one, append an
 *   entry with title, date (DD.MM.YYYY), and link.
 *
 * `lang` marks the language a piece is written in; readers get a small
 * tag whenever it differs from the page language (defaults to English).
 */

export interface OwnArticle {
  slug: string
  title: string
  description: string
  date: string
  lang: 'de' | 'en'
}

export interface Highlight {
  title: string
  description: string
  /** Publication or site it appeared on, e.g. 'plattformJ'. */
  source: string
  date: string
  link: string
  lang?: 'de' | 'en'
}

export interface MediumArticle {
  title: string
  date: string
  link: string
  lang?: 'de' | 'en'
}

export const ownArticles: OwnArticle[] = [
  {
    slug: 'warum-diese-seite-aussieht-wie-eine-zeitung',
    title: 'Warum diese Seite aussieht wie eine Zeitung',
    description:
      'Über den Neuanfang dieser Website: weniger Template, mehr Brief. Und warum Papier das bessere Vorbild ist als ein Dashboard.',
    date: '14.07.2026',
    lang: 'de',
  },
]

export const highlights: Highlight[] = [
  {
    title: '«Die Zukunft hängt von meiner Entwicklung ab – nicht von der KI»',
    description:
      'SwissSkills 2025: Interview als Teilnehmer in Web Technologies.',
    source: 'plattformJ',
    date: '22.09.2025',
    link: 'https://www.plattformj.ch/artikel/236098/?utm_source=jannismilz.com&utm_medium=referral',
    lang: 'de',
  },
]

export const mediumArticles: MediumArticle[] = [
  {
    date: '11.05.2024',
    link: 'https://medium.com/@jannismilz/these-browser-keyboard-shortcuts-are-pure-productivity-f665c0f850b7',
    title: 'These Browser Keyboard Shortcuts Are Pure Productivity',
  },
  {
    date: '09.03.2024',
    link: 'https://medium.com/@jannismilz/sending-emails-in-python-3-is-actually-easy-5ad1c5eb3f9d',
    title: 'Sending Emails in Python 3 Is Actually Easy',
  },
  {
    date: '04.03.2024',
    link: 'https://medium.com/@jannismilz/how-i-automated-medium-posting-using-notion-and-make-com-219d1ea36dfc',
    title: 'Top 1 Automation For Medium Posting Using Notion And Make.com',
  },
  {
    date: '26.02.2024',
    link: 'https://medium.com/better-than-yesterdays-me/sleeping-on-the-floor-for-14-days-has-changed-how-i-sleep-0302038f76ce',
    title: 'Sleeping On The Floor For 14 Days Has Changed How I Sleep',
  },
  {
    date: '21.02.2024',
    link: 'https://medium.com/million-words-of-wisdom/dotcom-secrets-the-4-secrets-to-a-successful-online-business-1750de928561',
    title: 'DotCom Secrets — The 4 Secrets to a Successful Online Business',
  },
  {
    date: '14.01.2024',
    link: 'https://medium.com/@jannismilz/why-chatgpt-and-ai-is-bad-for-new-programmers-efb4d9127494',
    title: 'Why ChatGPT and AI is bad for new programmers',
  },
  {
    date: '14.01.2024',
    link: 'https://medium.com/@jannismilz/manage-your-containers-with-portainer-640d510c6150',
    title: 'Manage your containers with Portainer',
  },
  {
    date: '14.01.2024',
    link: 'https://medium.com/@jannismilz/expressjs-like-api-in-nextjs-def1a1caf1fe',
    title: 'ExpressJS like API in NextJS',
  },
  {
    date: '14.01.2024',
    link: 'https://medium.com/@jannismilz/create-a-devcontainer-9191a2d5ff7b',
    title: 'Create a Devcontainer',
  },
]

function byDateDesc(a: { date: string }, z: { date: string }) {
  return +parseDate(z.date) - +parseDate(a.date)
}

export function getOwnArticles() {
  return [...ownArticles].sort(byDateDesc)
}

export function getOwnArticle(slug: string) {
  return ownArticles.find((article) => article.slug === slug)
}

export function getHighlights() {
  return [...highlights].sort(byDateDesc)
}

export function getMediumArticles() {
  return [...mediumArticles].sort(byDateDesc)
}
