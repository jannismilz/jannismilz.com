import { type MDXComponents } from 'mdx/types'

import { BarChart, Chart, ColumnChart, Flow } from '@/components/ArticleFigures'
import { FigureFrame } from '@/components/FigureFrame'
import { MarginNote } from '@/components/MarginNote'

/**
 * Maps MDX elements onto the site's newspaper styles so articles read
 * like the rest of the paper. Custom components (MarginNote,
 * FigureFrame, and the charts from ArticleFigures) are available in
 * every article without importing.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="mt-10 font-serif text-[26px] leading-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 font-serif text-[21px] leading-tight" {...props} />
    ),
    p: (props) => <p className="relative" {...props} />,
    a: (props) => (
      <a
        className="text-accent underline decoration-1 underline-offset-3 hover:decoration-2"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-accent pl-5 font-serif text-[19px] text-ink-muted italic"
        {...props}
      />
    ),
    ul: (props) => <ul className="list-disc space-y-1.5 pl-5" {...props} />,
    ol: (props) => <ol className="list-decimal space-y-1.5 pl-5" {...props} />,
    hr: () => <hr className="my-8 border-hairline" />,
    code: (props) => (
      <code className="bg-paper-raised px-1.5 py-0.5 text-[14px]" {...props} />
    ),
    pre: (props) => (
      <pre
        className="overflow-x-auto border border-hairline bg-paper-raised p-4 text-[13px] leading-relaxed [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[13px]"
        {...props}
      />
    ),
    MarginNote,
    FigureFrame,
    Chart,
    BarChart,
    ColumnChart,
    Flow,
    ...components,
  }
}
