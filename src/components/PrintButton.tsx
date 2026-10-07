'use client'

/** Opens the browser's print dialog, which also offers "Save as PDF". */
export function PrintButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-ink px-3 py-1.5 text-[12px] tracking-[0.08em] uppercase transition hover:bg-ink hover:text-paper"
    >
      {children}
    </button>
  )
}
