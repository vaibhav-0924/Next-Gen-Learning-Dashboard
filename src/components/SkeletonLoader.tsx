'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function SkeletonLoader() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <main className="main-content" aria-busy="true" aria-label="Loading dashboard">
      <div className="page-header">
        <div className="skeleton" style={{ width: 120, height: 14, marginBottom: 8 }} />
      </div>

      <div className="bento-grid">
        {/* Hero Skeleton */}
        <motion.div
          className="tile hero-tile"
          animate={
            prefersReducedMotion
              ? {}
              : { opacity: [0.4, 0.7, 0.4] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ minHeight: 180 }}
        >
          <div className="skeleton" style={{ width: '60%', height: 28, marginBottom: 12 }} />
          <div className="skeleton" style={{ width: '80%', height: 14, marginBottom: 8 }} />
          <div className="skeleton" style={{ width: '40%', height: 14, marginBottom: 20 }} />
          <div className="skeleton" style={{ width: 140, height: 36, borderRadius: 9999 }} />
        </motion.div>

        {/* Stats Skeleton */}
        <motion.div
          className="tile"
          animate={
            prefersReducedMotion
              ? {}
              : { opacity: [0.4, 0.7, 0.4] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          <div className="skeleton" style={{ width: 100, height: 14, marginBottom: 20 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="skeleton" style={{ width: 60, height: 10, marginBottom: 8 }} />
                <div className="skeleton" style={{ width: 50, height: 28, marginBottom: 6 }} />
                <div className="skeleton" style={{ width: 70, height: 10 }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Course Card Skeletons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="tile"
            animate={
              prefersReducedMotion
                ? {}
                : { opacity: [0.4, 0.7, 0.4] }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.1 * i,
            }}
          >
            <div className="skeleton" style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 12 }} />
            <div className="skeleton" style={{ width: '80%', height: 16, marginBottom: 12 }} />
            <div className="skeleton" style={{ width: '100%', height: 6, borderRadius: 9999, marginBottom: 10 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="skeleton" style={{ width: 40, height: 12 }} />
              <div className="skeleton" style={{ width: 80, height: 20, borderRadius: 9999 }} />
            </div>
          </motion.div>
        ))}

        {/* Activity Skeleton */}
        <motion.div
          className="tile"
          animate={
            prefersReducedMotion
              ? {}
              : { opacity: [0.4, 0.7, 0.4] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <div className="skeleton" style={{ width: 100, height: 14, marginBottom: 16 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[...Array(5)].map((_, row) => (
              <div key={row} style={{ display: 'flex', gap: 3 }}>
                {[...Array(7)].map((_, col) => (
                  <div
                    key={col}
                    className="skeleton"
                    style={{ width: 12, height: 12, borderRadius: 3 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
