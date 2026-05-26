import { createClient } from '@supabase/supabase-js'
import { Course } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * Create a Supabase client only if credentials are available.
 * In development/demo mode, we use mock data.
 */
const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

/** Mock course data for development and demo purposes */
const MOCK_COURSES: Course[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    title: 'Advanced React Patterns',
    progress: 75,
    icon_name: 'Code',
    created_at: '2025-05-20T10:30:00Z',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    title: 'UI/UX Design Fundamentals',
    progress: 45,
    icon_name: 'Palette',
    created_at: '2025-05-18T14:22:00Z',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    title: 'System Design at Scale',
    progress: 60,
    icon_name: 'BarChart3',
    created_at: '2025-05-15T09:15:00Z',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    title: 'Web Performance Optimization',
    progress: 82,
    icon_name: 'Zap',
    created_at: '2025-05-12T16:45:00Z',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    title: 'TypeScript Mastery',
    progress: 38,
    icon_name: 'FileCode',
    created_at: '2025-05-10T11:00:00Z',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    title: 'Full-Stack Development',
    progress: 92,
    icon_name: 'Layers',
    created_at: '2025-05-08T13:30:00Z',
  },
]

/**
 * Fetch courses from Supabase if available, otherwise use mock data.
 * Clamps progress values to [0, 100] range.
 */
export async function getCourses(): Promise<Course[]> {
  if (!supabase) {
    // Use mock data in development
    return MOCK_COURSES.map((course) => ({
      ...course,
      progress: Math.max(0, Math.min(100, course.progress)),
    }))
  }

  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Supabase fetch error:', error.message)
      // Fallback to mock data
      return MOCK_COURSES
    }

    return (data || []).map((course: Course) => ({
      ...course,
      progress: Math.max(0, Math.min(100, course.progress)),
    }))
  } catch (err) {
    console.error('Failed to fetch courses:', err)
    return MOCK_COURSES
  }
}
