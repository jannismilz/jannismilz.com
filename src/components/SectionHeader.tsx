/**
 * A newspaper section opener: thin double rule, serif section title,
 * optional serif-italic tagline beside it. Used to separate the bigger
 * content sections on the projects and writing pages.
 */
export function SectionHeader({
  title,
  tagline,
}: {
  title: string
  tagline?: string
}) {
  return (
    <>
      <div className="h-1 border-y border-ink" aria-hidden="true" />
      <div className="mt-5 flex flex-col gap-x-4 sm:flex-row sm:items-baseline">
        <h2 className="font-serif text-[26px]">{title}</h2>
        {tagline && (
          <p className="font-serif text-[15px] text-ink-muted italic">
            {tagline}
          </p>
        )}
      </div>
    </>
  )
}
