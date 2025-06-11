'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, ArrowRight, Phone } from 'lucide-react'

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black">
      {/* Clean Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-green-900/10" />
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.02] bg-gradient-to-br from-red-600 to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.02] bg-gradient-to-br from-green-600 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-green-600 mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              Ready to Dominate
            </span>
            <br />
            <span className="text-white">Your Market?</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            Join 500+ businesses already crushing their competition with our proven digital marketing strategies
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-500">⚡</span>
              Setup in 48 hours
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              ROI Guaranteed
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">🏆</span>
              #1 Rated in MENA
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/30 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link
              href="/demo"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              View Case Studies 🎯
            </Link>
          </div>

          {/* Final Trust Line */}
          <p className="text-gray-500 text-sm">
            💡 Free consultation • Custom strategy • Results guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}