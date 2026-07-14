export interface Project {
  name: string
  status: string
  description: string
  link: { href: string; label: string }
  selected?: boolean
}

export const projects: Project[] = [
  {
    name: 'eintrittli',
    status: 'Live product',
    description:
      'A simple entry check-in system for events and clubs: configurable forms, data export, and deliberately nothing else — no payments, no login, no fuss. Built and run with Weborb.',
    link: { href: 'https://eintrittli.ch', label: 'eintrittli.ch' },
    selected: true,
  },
  {
    name: 'weborb.ch',
    status: 'Web studio',
    description:
      'The small Swiss web studio where my projects grow up and ship — home of eintrittli, and of whatever comes next.',
    link: { href: 'https://weborb.ch', label: 'weborb.ch' },
    selected: true,
  },
  {
    name: 'typst-payqr-swiss',
    status: 'Open source',
    description:
      'A Swiss QR bill generator for the Typst typesetting system — because invoices deserve nice typography too.',
    link: {
      href: 'https://github.com/jannismilz/typst-payqr-swiss',
      label: 'github.com/jannismilz/typst-payqr-swiss',
    },
    selected: true,
  },
  {
    name: 'BBW Heroes',
    status: 'School project',
    description:
      'A platform where BBW students share their work with others and grow together.',
    link: { href: 'https://bbwheroes.ch', label: 'bbwheroes.ch' },
  },
  {
    name: 'Linux Cookbook',
    status: 'School project',
    description:
      'A guide to the basics of Linux and how to actually use it, written while learning them myself.',
    link: {
      href: 'https://bbw-linux-cookbook.gitbook.io',
      label: 'bbw-linux-cookbook.gitbook.io',
    },
  },
]

export function getSelectedProjects() {
  return projects.filter((project) => project.selected)
}
