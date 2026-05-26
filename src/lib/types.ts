export type Course = {
  id: string
  title: string
  progress: number
  icon_name: string
  created_at: string
}

export type DashboardData = {
  courses: Course[]
  userName: string
  streakDays: number
}

export type NavItem = {
  label: string
  icon: string
  href: string
  active?: boolean
}
