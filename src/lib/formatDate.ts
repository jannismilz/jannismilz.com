export function formatDate(dateString: string) {
  const splittedDateString = dateString.split('.').map(Number)
  const date = new Date(
    splittedDateString[2],
    splittedDateString[1] - 1,
    splittedDateString[0],
  )

  return date.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
