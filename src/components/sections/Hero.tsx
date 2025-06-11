'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Play, Phone } from 'lucide-react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Subtle Background Effects - Very Clean */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-black to-green-900/5" />
        
        {/* Subtle floating orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #16a34a 0%, transparent 70%)',
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-1 pt-24 min-h-0">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              🇦🇪 Now serving Dubai & MENA region
            </div>
          </div>

          {/* Hero Title - Clean Apple Style */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="block bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent mb-2">
                DIGITAL
              </span>
              <span className="block text-white">
                REVOLUTION
              </span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
              The agency revolutionizing digital marketing in the <span className="text-green-500 font-medium">Middle East</span>.
              <br />
              AI Analytics + Automation + <span className="text-red-500 font-medium">GUARANTEED ROI</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Get Free Consultation
                </span>
              </Link>
              
              <Link
                href="/demo"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Our Work
                </span>
              </Link>
            </div>

            {/* Trust indicators - Clean */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Setup in 48 hours
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                90-Day ROI Guarantee
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">🏆</span>
                MENA Specialists
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Minimal */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `translateY(${Math.sin(Date.now() * 0.001) * 3}px)`,
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}