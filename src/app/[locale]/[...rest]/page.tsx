import { notFound } from 'next/navigation'

/**
 * Catch-all for unknown paths within a locale, so the localized
 * not-found page renders instead of Next's bare default.
 */
export default function CatchAll() {
  notFound()
}
