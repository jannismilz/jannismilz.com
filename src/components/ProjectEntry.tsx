import Link from 'next/link'

import { type Project } from '@/lib/projects'

export function ProjectEntry({
  project,
  description,
}: {
  project: Project
  description: string
}) {
  return (
    <article className="group relative py-5">
      <h3 className="font-serif text-[22px]">
        <Link href={project.link.href} target="_blank">
          {/* Stretch the click target over the whole row */}
          <span className="absolute inset-0" aria-hidden="true" />
          <span className="underline decoration-transparent decoration-2 underline-offset-4 transition group-hover:decoration-accent">
            {project.name}
          </span>
        </Link>
      </h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
        {description}
      </p>
      <p className="mt-2 text-[13px] text-accent">
        {project.link.label}
        <span
          className="inline-block transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          {' '}
          →
        </span>
      </p>
    </article>
  )
}
