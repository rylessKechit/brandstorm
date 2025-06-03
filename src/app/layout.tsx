import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BrandStorm - Premium Digital Marketing SaaS',
  description: 'The SaaS platform revolutionizing digital marketing in the Middle East. AI Analytics + Automation + Guaranteed ROI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-black font-sans antialiased text-white">
        {children}
      </body>
    </html>
  )
}