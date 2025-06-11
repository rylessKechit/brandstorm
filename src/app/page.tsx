import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Pricing } from '@/components/sections/Pricing'
import { TestimonialsMini } from '@/components/sections/TestimonialsMini'
import { CTA } from '@/components/sections/CTA'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Fond blanc */}
        <Hero />
        
        {/* Features Section - Fond gris clair */}
        <Features />
        
        {/* Services Section - Fond blanc */}
        <Services />
        
        {/* Stats Section - Fond rouge/or Dubai */}
        <Stats />
        
        {/* Testimonials Section - Fond blanc */}
        <TestimonialsMini />
        
        {/* Pricing Section - Fond gris clair */}
        <Pricing />
        
        {/* Final CTA - Fond sombre */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}