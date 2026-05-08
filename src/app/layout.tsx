// app/layouy
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Template Consultant - Medium Style',
  description: 'Mid tange consultant template with a medium style, featuring a boxed photo and slogan in the hero section, followed by an about & mission section, a proven track record grid, and a contact form.',
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