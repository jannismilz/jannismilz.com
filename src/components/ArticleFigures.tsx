import clsx from 'clsx'

/**
 * Charts and diagrams for articles. Everything is plain HTML and CSS
 * built from the theme tokens, so figures follow the morning and
 * evening editions and reflow on narrow screens without any scripts.
 */

/** The paper frame around a chart or diagram, with an optional caption. */
export function Chart({
  title,
  caption,
  children,
}: {
  title?: string
  caption?: string
  children: React.ReactNode
}) {
  return (
    <figure className="py-2">
      <div className="border border-hairline bg-paper-raised p-4 sm:p-5">
        {title && (
          <p className="mb-4 text-[12px] tracking-[0.08em] text-ink-muted uppercase">
            {title}
          </p>
        )}
        {children}
      </div>
      {caption && (
        <figcaption className="mt-2 text-[13px] text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export interface BarRow {
  label: string
  value: number
  /** The value as it should be printed, e.g. '6.22 billion'. */
  display: string
  note?: string
  muted?: boolean
}

/** Horizontal bars on a shared zero-based scale. */
export function BarChart({ rows, max }: { rows: BarRow[]; max?: number }) {
  const top = max ?? Math.max(...rows.map((row) => row.value))

  return (
    <div className="space-y-3.5">
      {rows.map((row) => (
        <div key={row.label}>
          <div className="flex items-baseline justify-between gap-4 text-[13px]">
            <span>{row.label}</span>
            <span className="font-serif text-[17px] whitespace-nowrap tabular-nums">
              {row.display}
            </span>
          </div>
          <div className="mt-1 h-2.5 bg-hairline">
            <div
              className={clsx(
                'h-full',
                row.muted ? 'bg-ink-muted' : 'bg-accent',
              )}
              style={{ width: `${Math.max((row.value / top) * 100, 0.5)}%` }}
            />
          </div>
          {row.note && (
            <p className="mt-1 text-[12px] text-ink-muted">{row.note}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export interface Column {
  label: string
  value: number
  display: string
  muted?: boolean
}

const COLUMN_HEIGHT = 140

/** Vertical bars for a short series, e.g. one value per year. */
export function ColumnChart({ columns }: { columns: Column[] }) {
  const top = Math.max(...columns.map((column) => column.value))

  return (
    <div className="flex items-end gap-1 sm:gap-1.5">
      {columns.map((column) => (
        <div
          key={column.label}
          className="flex min-w-0 flex-1 flex-col items-center"
          title={`${column.label}: ${column.display}`}
        >
          <span className="mb-1 hidden text-[10px] text-ink-muted tabular-nums sm:block">
            {column.display}
          </span>
          <div
            className={clsx(
              'w-full',
              column.muted ? 'bg-ink-muted' : 'bg-accent',
            )}
            style={{
              height: Math.max((column.value / top) * COLUMN_HEIGHT, 1),
            }}
          />
          <span className="mt-1.5 text-[11px] text-ink-muted tabular-nums">
            {column.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export interface FlowStep {
  /** Small caps tag above the title, e.g. the tool doing the work. */
  tag?: string
  title: string
  detail?: string
}

/**
 * Boxes joined by arrows. `vertical` stacks them as a pipeline;
 * `horizontal` lays them side by side from the `sm` breakpoint up.
 */
export function Flow({
  steps,
  direction = 'vertical',
}: {
  steps: FlowStep[]
  direction?: 'vertical' | 'horizontal'
}) {
  const horizontal = direction === 'horizontal'

  return (
    <ol
      className={clsx(
        'flex flex-col items-stretch',
        horizontal && 'sm:flex-row',
      )}
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={clsx(
            'flex flex-col',
            horizontal && 'sm:flex-1 sm:flex-row',
          )}
        >
          {index > 0 && (
            <span
              className="flex items-center justify-center py-1 text-accent sm:px-2"
              aria-hidden="true"
            >
              <span className={clsx(horizontal && 'sm:hidden')}>↓</span>
              {horizontal && <span className="hidden sm:inline">→</span>}
            </span>
          )}
          <div className="flex-1 border border-hairline bg-paper px-3.5 py-3">
            {step.tag && (
              <p className="text-[11px] tracking-[0.08em] text-accent uppercase">
                {step.tag}
              </p>
            )}
            <p className="font-serif text-[18px] leading-snug">{step.title}</p>
            {step.detail && (
              <p className="mt-1 text-[13px] leading-snug text-ink-muted">
                {step.detail}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
