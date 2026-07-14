'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'

const emptySubscribe = () => () => {}

// True after hydration — safe way to avoid a server/client theme mismatch.
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )
}

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
  )
}

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let mounted = useMounted()

  return (
    <button
      type="button"
      aria-label={
        mounted && resolvedTheme === 'dark'
          ? 'Switch to the morning edition'
          : 'Switch to the evening edition'
      }
      title={
        mounted && resolvedTheme === 'dark'
          ? 'Morning edition'
          : 'Evening edition'
      }
      className="-m-1 p-1 text-ink-muted transition hover:text-accent"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && resolvedTheme === 'dark' ? (
        <SunIcon className="h-4.5 w-4.5" />
      ) : (
        <MoonIcon className="h-4.5 w-4.5" />
      )}
    </button>
  )
}
