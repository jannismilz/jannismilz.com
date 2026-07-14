export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-[12px] font-medium tracking-[0.12em] text-ink-muted uppercase">
        {children}
      </h2>
      <div className="grow border-t border-hairline" aria-hidden="true" />
    </div>
  )
}
