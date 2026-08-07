// Availability window shown in the "Now accepting new projects for ..." badge.
// ------------
// Rolling two-month window starting next month. Used both at build time (for the
// static fallback) and in the browser (so the badge stays correct without a redeploy).

const monthName = (date: Date) =>
  date.toLocaleString("en-US", { month: "long" })

export function getAvailabilityRange(now: Date = new Date()): string {
  const start = new Date(now.getFullYear(), now.getMonth() + 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 2)

  // Only happens in November, when the window straddles the new year.
  if (start.getFullYear() !== end.getFullYear()) {
    return `${monthName(start)} ${start.getFullYear()}-${monthName(end)} ${end.getFullYear()}`
  }

  return `${monthName(start)}-${monthName(end)} ${end.getFullYear()}`
}
