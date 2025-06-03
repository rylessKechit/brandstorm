import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Industries } from '@/components/sections/Industries'
import { Dashboard } from '@/components/sections/Dashboard'
import { Stats } from '@/components/sections/Stats'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BrandStorm - Premium Digital Marketing SaaS Platform',
  description: 'The SaaS platform revolutionizing digital marketing in the Middle East. AI Analytics + Automation + Guaranteed ROI. Start your free trial today.',
  openGraph: {
    title: 'BrandStorm - Premium Digital Marketing SaaS Platform',
    description: 'The SaaS platform revolutionizing digital marketing in the Middle East. AI Analytics + Automation + Guaranteed ROI.',
    images: ['/og-home.png'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/5 to-cyan-900/10" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Detailed Services */}
        <Services />
        
        {/* Process Section */}
        <Process />
        
        {/* Industries Section */}
        <Industries />
        
        {/* Dashboard Preview */}
        <Dashboard />
        
        {/* Stats Section */}
        <Stats />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Final CTA */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}