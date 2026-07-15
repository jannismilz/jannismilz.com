import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'

/**
 * A captioned photo in a paper frame. With an `image` it renders the
 * photo (cover-cropped to the frame's aspect); without one it falls
 * back to a dashed placeholder frame with a note — used until a real
 * photo exists for a slot.
 */
export function FigureFrame({
  image,
  alt,
  placeholder,
  caption,
  captionLead,
  aspect = '4/3',
  sizes = '(min-width: 640px) 14rem, 100vw',
  className,
}: {
  image?: StaticImageData
  alt?: string
  placeholder?: string
  caption: string
  captionLead: string
  aspect?: '4/3' | '3/4' | '1/1'
  sizes?: string
  className?: string
}) {
  const aspectClass = {
    '4/3': 'aspect-4/3',
    '3/4': 'aspect-3/4',
    '1/1': 'aspect-square',
  }[aspect]

  return (
    <figure className={className}>
      <div
        className={clsx(
          'border border-hairline bg-paper-raised p-2',
          aspectClass,
        )}
      >
        {image ? (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image}
              alt={alt ?? caption}
              fill
              sizes={sizes}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center border border-dashed border-hairline px-6">
            <p className="text-center font-serif text-[15px] text-ink-muted italic">
              {placeholder}
            </p>
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-[13px] text-ink-muted">
        <span className="font-serif italic">{captionLead}</span> {caption}
      </figcaption>
    </figure>
  )
}
