import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Gaylon Alcaraz, PhD | Executive Consultant',
  description: 'Clearing the Chaos, Bringing the Clarity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}