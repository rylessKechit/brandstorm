'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Play, Phone, Award, CheckCircle, TrendingUp, Users, BarChart3 } from 'lucide-react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate highlights
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const highlights = [
    {
      title: "We make your Vision your Reality.",
      subtitle: "Built for Middle East Excellence"
    },
    {
      title: "Guaranteed Results in 90 Days.",
      subtitle: "Measurable ROI or money back"
    },
    {
      title: "Ultra-Fast Setup in 48h.",
      subtitle: "From idea to first results"
    }
  ]

  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I would like to schedule a free consultation to discuss my digital marketing needs. When would you be available?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <section className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      {/* Background gradients - Dubai inspired */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-orange-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.1),transparent)] animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-3 animate-pulse"></span>
            🇦🇪 #1 Agency in Dubai & MENA Region
          </div>
          
          {/* Main Title */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight tracking-tight">
              We make your <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Vision
              </span>
              {" "}our{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 bg-clip-text text-transparent">
                Reality
              </span>
              .
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Built for <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent font-medium">Middle East Excellence</span>.
            </p>
          </div>

          {/* Rotating Highlights */}
          <div className={`mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative h-24 overflow-hidden">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide 
                      ? 'translate-y-0 opacity-100' 
                      : index < currentSlide 
                        ? '-translate-y-full opacity-0' 
                        : 'translate-y-full opacity-0'
                  }`}
                >
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {index === 0 ? (
                        <>
                          We make your{" "}
                          <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            Vision
                          </span>
                          {" "}your{" "}
                          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 bg-clip-text text-transparent">
                            Reality
                          </span>
                          .
                        </>
                      ) : index === 1 ? (
                        <>
                          <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                            Guaranteed Results
                          </span>
                          {" "}in 90 Days.
                        </>
                      ) : (
                        <>
                          <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                            Ultra-Fast Setup
                          </span>
                          {" "}in 48h.
                        </>
                      )}
                    </h2>
                    <p className="text-lg text-gray-400">
                      {highlight.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button
              onClick={handleCallClick}
              className="px-7 py-3 bg-white text-black rounded-full font-semibold text-base hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Free Consultation
            </button>
            
            <Link
              href="/demo"
              className="px-7 py-3 border-2 border-white/30 text-white rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="w-4 h-4 inline mr-2" />
              See Results
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-300 font-medium text-sm">48h Setup Guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-gray-300 font-medium text-sm">90-Day ROI Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-gray-300 font-medium text-sm">MENA Specialists</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <ChevronDown className="w-5 h-5 text-white/50 mx-auto animate-bounce" />
        <p className="text-xs text-white/50 mt-1">Scroll to explore</p>
      </div>
    </section>
  )
}