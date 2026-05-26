import { Suspense } from 'react'
import { getCourses } from '@/lib/supabase'
import BentoGrid from '@/components/BentoGrid'
import SkeletonLoader from '@/components/SkeletonLoader'

/**
 * Server Component: Fetches course data on the server.
 * Data arrives with the HTML — no client-side fetch waterfalls.
 */
async function DashboardContent() {
  const courses = await getCourses()
  return <BentoGrid courses={courses} />
}

/**
 * Dashboard Home Page
 * Uses Next.js Server Components for data fetching
 * and Suspense for loading states.
 */
export default function DashboardPage() {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <DashboardContent />
    </Suspense>
  )
}
