import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Pricing } from '@/components/sections/Pricing'
import { TestimonialsMini } from '@/components/sections/TestimonialsMini'
import { CTA } from '@/components/sections/CTA'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Video } from 'lucide-react'
import { VideoHero } from '@/components/sections/VideoHero'

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
        <VideoHero />
        
        {/* Features Section */}
        <Features />
        
        {/* Services Section (Condensed) */}
        <Services />
        
        {/* Stats Section */}
        <Stats />
        
        {/* Mini Testimonials (Optional) */}
        <TestimonialsMini />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* Final CTA */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}