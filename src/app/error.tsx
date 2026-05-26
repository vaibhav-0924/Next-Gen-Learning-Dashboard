'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main
      className="main-content"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          textAlign: 'center',
          maxWidth: 440,
          padding: '3rem',
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 15 }}
          style={{
            width: 64,
            height: 64,
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(251, 113, 133, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <AlertTriangle size={28} color="var(--color-rose)" />
        </motion.div>

        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'var(--color-white)',
            marginBottom: '0.75rem',
          }}
        >
          Something went wrong
        </h1>

        <p
          style={{
            color: 'var(--color-slate-400)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          Unable to load the dashboard. This might be a temporary issue with the
          data connection. Please try again.
        </p>

        <motion.button
          onClick={reset}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, var(--color-blue-600), var(--color-blue-500))',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <RefreshCw size={16} />
          Try Again
        </motion.button>
      </motion.div>
    </main>
  )
}
