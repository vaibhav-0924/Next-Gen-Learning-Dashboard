/**
 * Clamp a number between min and max values
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

/**
 * Get a greeting message based on the current time of day
 */
export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

/**
 * Format a date string to a human-readable format
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Get progress color based on percentage
 */
export function getProgressColor(progress: number): string {
  if (progress >= 80) return '#34D399' // emerald
  if (progress >= 50) return '#60A5FA' // blue
  if (progress >= 25) return '#FBBF24' // amber
  return '#FB7185' // rose
}

/**
 * Get course status label based on progress
 */
export function getCourseStatus(progress: number): { label: string; color: string } {
  if (progress >= 90) return { label: 'Almost Done', color: '#34D399' }
  if (progress >= 50) return { label: 'In Progress', color: '#60A5FA' }
  if (progress >= 25) return { label: 'Getting Started', color: '#FBBF24' }
  return { label: 'Just Started', color: '#FB923C' }
}

/**
 * Generate mock activity data for the contribution graph
 */
export function generateActivityData(weeks: number = 7, daysPerWeek: number = 7): number[][] {
  return Array.from({ length: weeks }, () =>
    Array.from({ length: daysPerWeek }, () => Math.floor(Math.random() * 5))
  )
}
