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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-green-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,193,7,0.15),transparent)]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-amber-500 mb-6 shadow-2xl">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-white">Ready to </span>
            <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Dominate
            </span>
            <br />
            <span className="text-white">Your Market?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Join <span className="font-bold text-amber-400">500+ companies</span> already crushing their competition 
            with our <span className="font-bold text-red-400">proven digital marketing strategies</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 text-sm">
            <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 font-medium">48h Setup Guaranteed</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 font-medium">90-Day ROI Guarantee</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-300 font-medium">No Long-term Contracts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={handleCallClick}
              className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Start Your Transformation
            </button>
            <button 
              onClick={handleDemoClick}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5" />
              View Case Studies
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-red-500 mb-2">48h</div>
              <div className="text-gray-300 font-medium text-lg">Ultra-Fast Setup</div>
              <div className="text-gray-500 text-sm mt-2">Immediate momentum guaranteed</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-500 mb-2">90D</div>
              <div className="text-gray-300 font-medium text-lg">ROI Guarantee</div>
              <div className="text-gray-500 text-sm mt-2">Results or money back</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-300 font-medium text-lg">Expert Support</div>
              <div className="text-gray-500 text-sm mt-2">Always here to help</div>
            </div>
          </div>
          
          {/* Additional Trust Line */}
          <div className="pt-8 border-t border-white/10 text-center mb-8">
            <p className="text-gray-400 text-lg">
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