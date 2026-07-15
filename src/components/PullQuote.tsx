/**
 * A newspaper pull quote: a short line lifted out of the text, set
 * large in serif italic between two hairlines, with an optional small
 * caps caption underneath.
 */
export function PullQuote({
  children,
  caption,
}: {
  children: React.ReactNode
  caption?: string
}) {
  return (
    <figure className="clear-both border-y border-hairline py-6">
      <blockquote className="font-serif text-[26px] leading-snug italic sm:text-[30px]">
        {children}
      </blockquote>
      {caption && (
        <figcaption className="mt-3 text-[12px] tracking-[0.08em] text-ink-muted uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
