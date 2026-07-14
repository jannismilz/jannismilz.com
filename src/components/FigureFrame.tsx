import clsx from 'clsx'

/**
 * A captioned photo slot. Until a real photo is dropped in, it renders a
 * paper-raised frame with a dashed inner border and a placeholder line.
 */
export function FigureFrame({
  placeholder,
  caption,
  captionLead,
  aspect = '4/3',
  className,
}: {
  placeholder: string
  caption: string
  captionLead: string
  aspect?: '4/3' | '3/4'
  className?: string
}) {
  return (
    <figure className={className}>
      <div
        className={clsx(
          'border border-hairline bg-paper-raised p-2',
          aspect === '4/3' ? 'aspect-4/3' : 'aspect-3/4',
        )}
      >
        <div className="flex h-full items-center justify-center border border-dashed border-hairline px-6">
          <p className="text-center font-serif text-[15px] text-ink-muted italic">
            {placeholder}
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-[13px] text-ink-muted">
        <span className="font-serif italic">{captionLead}</span> {caption}
      </figcaption>
    </figure>
  )
}
