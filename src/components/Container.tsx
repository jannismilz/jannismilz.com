import clsx from 'clsx'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx('mx-auto w-full max-w-2xl px-5 sm:px-6', className)}>
      {children}
    </div>
  )
}
