'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Target, Award, Clock, Shield, Zap, Globe } from 'lucide-react'

interface Feature {
  icon: any
  title: string
  description: string
  color: string
}

export function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features: Feature[] = [
    {
      icon: TrendingUp,
      title: "Guaranteed Results",
      description: "90-day ROI guarantee with measurable results or your money back. We're that confident in our proven strategies.",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "48h Ultra-Fast Setup",
      description: "From consultation to campaign launch in just 48 hours. Get immediate momentum with our rapid deployment process.",
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: Globe,
      title: "MENA Market Expertise",
      description: "Deep understanding of Middle Eastern markets, culture, and consumer behavior for maximum local impact.",
      color: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Cutting-edge AI and machine learning tools to optimize campaigns and maximize your marketing efficiency.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your own dedicated team of specialists working as an extension of your business to achieve your goals.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Data-Driven Strategy",
      description: "Every decision backed by comprehensive analytics and real-time data for optimal performance and transparency.",
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience segmentation and behavioral targeting to reach the right customers at the perfect moment.",
      color: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning agency recognized as the leading digital marketing experts in the MENA region.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Get the highlights.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              A unique approach that combines <span className="font-semibold text-amber-600">local expertise</span> and 
              <span className="font-semibold text-red-600"> technological innovation</span> for exceptional results
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div 
                key={i}
                className={`group cursor-pointer transition-all duration-700 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 items-center text-center">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">2024</div>
                  <div className="text-gray-600 font-medium">Founded in Dubai</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-amber-600 mb-2">48h</div>
                  <div className="text-gray-600 font-medium">Guaranteed Setup</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">90D</div>
                  <div className="text-gray-600 font-medium">ROI Guarantee</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-lg text-gray-700 font-medium">
                  🇦🇪 <span className="text-red-600 font-bold">Certified agency</span> and recognized leader in digital marketing across the Middle East
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}