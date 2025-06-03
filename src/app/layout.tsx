import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'

import './globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/Providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Fonction utilitaire pour les URLs
function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

const baseUrl = getBaseUrl()

export const metadata: Metadata = {
  title: {
    default: 'BrandStorm - Premium Digital Marketing SaaS',
    template: '%s | BrandStorm'
  },
  description: 'The SaaS platform revolutionizing digital marketing in the Middle East. AI Analytics + Automation + Guaranteed ROI.',
  keywords: [
    'digital marketing',
    'saas',
    'marketing automation',
    'ai analytics',
    'dubai',
    'middle east',
    'social media management',
    'seo',
    'paid advertising'
  ],
  authors: [
    {
      name: 'BrandStorm Team',
      url: 'https://brandstorm.com',
    }
  ],
  creator: 'BrandStorm',
  publisher: 'BrandStorm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'BrandStorm - Premium Digital Marketing SaaS',
    description: 'The SaaS platform revolutionizing digital marketing in the Middle East. AI Analytics + Automation + Guaranteed ROI.',
    siteName: 'BrandStorm',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BrandStorm - Digital Marketing SaaS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandStorm - Premium Digital Marketing SaaS',
    description: 'The SaaS platform revolutionizing digital marketing in the Middle East.',
    images: ['/og-image.png'],
    creator: '@brandstorm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#ec4899',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn(inter.variable, 'scroll-smooth')}>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        
        {/* Prevent zoom on mobile */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'BrandStorm',
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              description: 'Premium SaaS platform for digital marketing in the Middle East',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                category: 'SaaS',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: '99',
                  priceCurrency: 'USD',
                  unitText: 'MONTH'
                }
              },
              creator: {
                '@type': 'Organization',
                name: 'BrandStorm',
                url: baseUrl,
              },
            }),
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-black font-sans antialiased',
          'selection:bg-primary-500/20 selection:text-primary-300'
        )}
      >
        <Providers>
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary-500 text-white rounded-md"
          >
            Skip to main content
          </a>
          
          {/* Main content */}
          <main id="main-content">
            {children}
          </main>
          
          {/* Toast notifications */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'bg-glass border border-white/10 text-white',
              duration: 4000,
              style: {
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
              },
            }}
          />
          
          {/* Analytics */}
          <Analytics />
          
          {/* Development helpers */}
          {process.env.NODE_ENV === 'development' && (
            <div className="fixed bottom-4 left-4 z-50 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-mono">
              DEV
            </div>
          )}
        </Providers>
      </body>
    </html>
  )
}