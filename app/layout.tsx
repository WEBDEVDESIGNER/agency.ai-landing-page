import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agency.AI',
  description: 'Turning imagination into digital impact.',
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
