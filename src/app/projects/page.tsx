import { type Metadata } from 'next'

import { Eyebrow } from '@/components/Eyebrow'
import { FigureFrame } from '@/components/FigureFrame'
import { ProjectEntry } from '@/components/ProjectEntry'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Things Jannis Milz has shipped, broken, and shipped again — eintrittli, Weborb, and other projects.',
}

function SwissSkillsHighlight() {
  return (
    <section className="mt-12 border border-hairline bg-paper-raised p-6 sm:p-8">
      <p className="text-[11px] font-medium tracking-[0.12em] text-accent uppercase">
        Highlight
      </p>
      <h2 className="mt-2 font-serif text-[28px] leading-tight">
        SwissSkills 2025 — Web Technologies
      </h2>
      <div className="mt-4 gap-8 sm:flex">
        <div className="text-[15px] leading-relaxed">
          <p>
            In 2025 I competed among Switzerland&rsquo;s best young web
            developers at SwissSkills. A newspaper even interviewed me about AI;
            the short version of my answer made it into the headline: my future
            depends on my development — not on it.
          </p>
          <a
            href="https://www.plattformj.ch/artikel/236098/?utm_source=jannismilz.com&utm_medium=referral"
            target="_blank"
            className="group mt-4 inline-block text-[14px] text-accent"
          >
            Read the interview{' '}
            <span className="text-[11px] tracking-[0.08em] text-ink-muted uppercase">
              German
            </span>
            <span
              className="inline-block transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              {' '}
              →
            </span>
          </a>
        </div>
        <FigureFrame
          className="mt-6 shrink-0 sm:mt-0 sm:w-56"
          placeholder="photo from the competition floor, eventually"
          captionLead="On assignment."
          caption="SwissSkills 2025, Bern."
        />
      </div>
    </section>
  )
}

export default function Projects() {
  return (
    <>
      <header className="pt-12 sm:pt-16">
        <Eyebrow>The portfolio</Eyebrow>
        <h1 className="mt-4 font-serif text-[38px] leading-[1.1] sm:text-[48px]">
          Shipped, broken, and shipped again.
        </h1>
        <p className="mt-4 max-w-[52ch] text-[16px] text-ink-muted">
          The projects I&rsquo;m most proud of — from a live product to school
          projects that taught me why the live product works. More to come.
        </p>
      </header>
      <div className="mt-8 divide-y divide-hairline">
        {projects.map((project) => (
          <ProjectEntry key={project.name} project={project} />
        ))}
      </div>
      <SwissSkillsHighlight />
    </>
  )
}
