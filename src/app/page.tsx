import Link from 'next/link'

import { Eyebrow } from '@/components/Eyebrow'
import { FigureFrame } from '@/components/FigureFrame'
import { MarginNote } from '@/components/MarginNote'
import { ProjectEntry } from '@/components/ProjectEntry'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { getSelectedProjects } from '@/lib/projects'

function Letter() {
  return (
    <section className="pt-12 sm:pt-16">
      <h1 className="font-serif text-[42px] leading-[1.05] sm:text-[56px]">
        Either I find a way,
        <br />
        or I{' '}
        <span className="bg-gradient-to-r from-accent to-accent-amber bg-clip-text text-transparent">
          create one
        </span>
        .
      </h1>
      <div className="mt-8 space-y-5">
        <p className="relative drop-cap">
          Hallo — I&rsquo;m Jannis, a software developer from Switzerland. The
          sentence up there has been my life motto for years: I simply refuse to
          believe something can&rsquo;t work before I&rsquo;ve set my mind to
          finding a way.
          <MarginNote>
            Also known as stubbornness, but &ldquo;motto&rdquo; reads better on
            a website.
          </MarginNote>
        </p>
        <p className="relative">
          I grew up surrounded by all kinds of technology, so this path was more
          or less destined. I started programming at twelve and never really
          stopped — today I do it professionally as an apprentice software
          developer at BSI, after two years at the University of Zurich. I still
          learn new technologies the same way as back then: experiment until it
          breaks, then figure out why.
          <MarginNote>
            The breaking part comes naturally. The fixing part is the skill.
          </MarginNote>
        </p>
        <FigureFrame
          className="sm:float-right sm:mt-1 sm:mb-2 sm:ml-8 sm:w-48"
          aspect="3/4"
          placeholder="photo of me mid-somersault, eventually"
          captionLead="Exhibit A."
          caption="Gymnastics, the analog kind of deployment."
        />
        <p>
          Away from the keyboard I do gymnastics and athletics — more than ten
          years at my local club by now. These days I also coach the younger
          kids, the way someone once coached me. It keeps me honest: no code
          review is as tough a crowd as a group of ten-year-olds.
        </p>
        <p>
          The rest of my head is occupied by whatever last caught my curiosity:
          self-improvement, biographies, design, psychology, and the occasional
          unsolvable math problem. (Haven&rsquo;t solved one yet. The name
          checks out.)
        </p>
        <p>
          This site is the paper edition of all that — what I&rsquo;m building,
          where I&rsquo;ve worked, what I&rsquo;ve written. Have a look around,
          and if something sparks a thought, write me:{' '}
          <a
            href="mailto:hi@jannismilz.com"
            className="text-accent underline decoration-1 underline-offset-3 hover:decoration-2"
          >
            hi@jannismilz.com
          </a>
          .
        </p>
      </div>
      <p className="clear-both mt-8 font-serif text-[28px] italic">— Jannis</p>
    </section>
  )
}

function Now() {
  const items = [
    <>
      Building{' '}
      <a
        href="https://eintrittli.ch"
        target="_blank"
        className="text-accent underline decoration-1 underline-offset-3 hover:decoration-2"
      >
        eintrittli.ch
      </a>{' '}
      with Weborb — a door check-in system so simple it makes clipboards
      nervous.
    </>,
    <>Apprentice software developer at BSI.</>,
    <>Competed at SwissSkills 2025 in Web Technologies.</>,
  ]

  return (
    <section className="mt-16">
      <Eyebrow>Now</Eyebrow>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[16px]">
            <span className="text-accent select-none" aria-hidden="true">
              ▪
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function SelectedProjects() {
  return (
    <section className="mt-16">
      <Eyebrow>Selected projects</Eyebrow>
      <div className="divide-y divide-hairline">
        {getSelectedProjects().map((project) => (
          <ProjectEntry key={project.name} project={project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="group mt-2 inline-block text-[14px] text-accent"
      >
        All projects
        <span
          className="inline-block transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          {' '}
          →
        </span>
      </Link>
    </section>
  )
}

function Work() {
  const roles = [
    {
      company: 'BSI',
      title: 'Apprentice Software Developer',
      period: '2024 — present',
    },
    {
      company: 'University of Zurich',
      title: 'Apprentice Software Developer',
      period: '2022 — 2024',
    },
  ]

  return (
    <section className="mt-16">
      <Eyebrow>Work</Eyebrow>
      <ul className="divide-y divide-hairline">
        {roles.map((role) => (
          <li
            key={role.company}
            className="flex items-baseline justify-between gap-4 py-4"
          >
            <div>
              <p className="text-[16px] font-medium">{role.company}</p>
              <p className="text-[14px] text-ink-muted">{role.title}</p>
            </div>
            <p className="shrink-0 text-[12px] tracking-[0.08em] text-ink-muted uppercase">
              {role.period}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Writing() {
  const articles = getAllArticles()

  return (
    <section className="mt-16">
      <Eyebrow>Writing</Eyebrow>
      <p className="mt-3 font-serif text-[15px] text-ink-muted italic">
        Mostly from my 2024 Medium era — preserved here like old newspapers.
      </p>
      <ul className="mt-2 divide-y divide-hairline">
        {articles.map((article) => (
          <li key={article.link}>
            <a
              href={article.link}
              target="_blank"
              className="group flex items-baseline gap-4 py-2.5"
            >
              <time className="w-18 shrink-0 text-[13px] text-ink-muted">
                {formatDate(article.date)}
              </time>
              <span className="text-[15px] font-medium transition group-hover:text-accent">
                {article.title}
                {article.lang === 'de' && (
                  <span className="ml-2 text-[11px] tracking-[0.08em] text-ink-muted uppercase">
                    German
                  </span>
                )}
                <span
                  className="inline-block text-ink-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  {' '}
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Letter />
      <Now />
      <SelectedProjects />
      <Work />
      <Writing />
    </>
  )
}
