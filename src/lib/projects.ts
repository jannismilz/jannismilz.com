export type ProjectCategory = 'product' | 'studio' | 'openSource' | 'school'

export interface Project {
  /** Key into the `projects.items` messages namespace. */
  slug: string
  name: string
  category: ProjectCategory
  link: { href: string; label: string }
}

export const projectCategories: ProjectCategory[] = [
  'product',
  'studio',
  'openSource',
  'school',
]

export const projects: Project[] = [
  {
    slug: 'eintrittli',
    name: 'eintrittli',
    category: 'product',
    link: { href: 'https://eintrittli.ch', label: 'eintrittli.ch' },
  },
  {
    slug: 'weborb',
    name: 'weborb.ch',
    category: 'studio',
    link: { href: 'https://weborb.ch', label: 'weborb.ch' },
  },
  {
    slug: 'typst-payqr-swiss',
    name: 'typst-payqr-swiss',
    category: 'openSource',
    link: {
      href: 'https://github.com/jannismilz/typst-payqr-swiss',
      label: 'github.com/jannismilz/typst-payqr-swiss',
    },
  },
  {
    slug: 'bbw-heroes',
    name: 'BBW Heroes',
    category: 'school',
    link: { href: 'https://bbwheroes.ch', label: 'bbwheroes.ch' },
  },
  {
    slug: 'linux-cookbook',
    name: 'Linux Cookbook',
    category: 'school',
    link: {
      href: 'https://bbw-linux-cookbook.gitbook.io',
      label: 'bbw-linux-cookbook.gitbook.io',
    },
  },
]
