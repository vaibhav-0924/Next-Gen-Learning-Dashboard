import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'LearnHub | Next-Gen Learning Dashboard',
  description:
    'A high-fidelity, dark-mode student dashboard with animated course tiles, real-time progress tracking, and a buttery smooth Bento grid layout.',
  keywords: [
    'learning dashboard',
    'online courses',
    'education',
    'student portal',
    'course progress',
  ],
  authors: [{ name: 'LearnHub' }],
  openGraph: {
    title: 'LearnHub | Next-Gen Learning Dashboard',
    description:
      'The future of education — buttery smooth, beautifully animated.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
