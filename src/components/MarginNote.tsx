/**
 * A small aside carrying the jokes. Sits in the right margin on wide
 * screens; collapses to an indented footnote-style block below that.
 * Rendered with <span>s so it stays valid inside a <p> — the parent
 * paragraph must be `relative`. No marker glyph; the serif-italic
 * styling and placement do the signalling.
 */
export function MarginNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="my-3 block border-l border-hairline pl-4 font-serif text-[15px] leading-snug text-ink-muted italic xl:absolute xl:top-1 xl:left-full xl:my-0 xl:ml-12 xl:w-52 xl:border-0 xl:pl-0">
      {children}
    </span>
  )
}
