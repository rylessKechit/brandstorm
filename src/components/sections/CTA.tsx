'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, ArrowRight, Zap, Phone } from 'lucide-react'

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)`,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #ff0080, #7928ca)',
            transform: `translate3d(${mousePosition.x * 2}px, ${mousePosition.y * 2}px, 0)`,
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #00dfd8, #0070f3)',
            transform: `translate3d(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px, 0)`,
            filter: 'blur(30px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Ready to Dominate
            </span>
            <br />
            <span className="text-white">Your Market?</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join 500+ businesses already crushing their competition with our proven digital marketing strategies
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Setup in 48 hours
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              ROI Guaranteed
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🏆</span>
              #1 Rated in MENA
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white font-bold text-lg transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-pink-500/30"
              style={{
                boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            
            <Link
              href="/demo"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
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