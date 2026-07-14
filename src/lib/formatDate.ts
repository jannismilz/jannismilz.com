import { parseDate } from '@/lib/articles'

export function formatDate(dateString: string) {
  return parseDate(dateString).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  })
}
