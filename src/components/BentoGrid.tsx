'use client'

import { Course } from '@/lib/types'
import HeroTile from './HeroTile'
import CourseTile from './CourseTile'
import ActivityTile from './ActivityTile'
import StatsTile from './StatsTile'

interface BentoGridProps {
  courses: Course[]
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <main className="main-content" role="main">
      <div className="page-header">
        <p className="page-title">Dashboard Overview</p>
      </div>

      <div className="bento-grid">
        {/* Hero Tile - spans 2 columns */}
        <HeroTile name="Samantha" streak={7} />

        {/* Stats Tile */}
        <StatsTile />

        {/* Course Tiles */}
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseTile key={course.id} course={course} index={index} />
          ))
        ) : (
          <div
            className="tile"
            style={{
              gridColumn: 'span 3',
              textAlign: 'center',
              padding: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-slate-400)',
                marginBottom: '0.5rem',
              }}
            >
              No courses yet
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)' }}>
              Your enrolled courses will appear here.
            </p>
          </div>
        )}

        {/* Activity Tile */}
        <ActivityTile />
      </div>
    </main>
  )
}
