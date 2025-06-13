'use client'

import { useState, useEffect } from 'react'
import { Rocket, CheckCircle, Phone, ArrowRight, Sparkles } from 'lucide-react'

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I am ready to dominate my market with VIZIONAIRE. When can we schedule our strategy session?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleDemoClick = () => {
    const message = encodeURIComponent('Hi! I would like to see VIZIONAIRE case studies and results. Can you share some examples?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-green-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,193,7,0.15),transparent)]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-amber-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-amber-500 mb-4 shadow-2xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-white">Ready to </span>
            <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Dominate
            </span>
            <br />
            <span className="text-white">Your Market?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Join <span className="font-bold text-amber-400">500+ companies</span> already crushing their competition 
            with our <span className="font-bold text-red-400">proven digital marketing strategies</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300 font-medium">48h Setup Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300 font-medium">90-Day ROI Guarantee</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300 font-medium">No Long-term Contracts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={handleCallClick}
              className="group px-7 py-3 bg-white text-black rounded-full font-bold text-base hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              Start Your Transformation
            </button>
            <button 
              onClick={handleDemoClick}
              className="px-7 py-3 border-2 border-white/30 text-white rounded-full font-bold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              View Case Studies
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-red-500 mb-1">48h</div>
              <div className="text-gray-300 font-medium text-base">Ultra-Fast Setup</div>
              <div className="text-gray-500 text-xs mt-1">Immediate momentum guaranteed</div>
            </div>
            
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-amber-500 mb-1">90D</div>
              <div className="text-gray-300 font-medium text-base">ROI Guarantee</div>
              <div className="text-gray-500 text-xs mt-1">Results or money back</div>
            </div>
            
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-green-500 mb-1">24/7</div>
              <div className="text-gray-300 font-medium text-base">Expert Support</div>
              <div className="text-gray-500 text-xs mt-1">Always here to help</div>
            </div>
          </div>
          
          {/* Additional Trust Line */}
          <div className="pt-6 border-t border-white/10 text-center mb-6">
            <p className="text-gray-400 text-base">
              💡 <span className="text-white font-semibold">Free consultation</span> • 
              <span className="text-white font-semibold"> Personalized strategy</span> • 
              <span className="text-white font-semibold"> Guaranteed results</span>
            </p>
          </div>

          {/* Final Trust Message */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              🇦🇪 Made with ❤️ in Dubai by the VIZIONAIRE team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}