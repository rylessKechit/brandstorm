'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react'

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [countUp, setCountUp] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Start count up animation after component is visible
    const timer = setTimeout(() => {
      setCountUp(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Companies Transformed",
      description: "Across MENA region",
      color: "from-red-500 to-red-600",
      delay: 0
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "347%",
      label: "Average ROI Increase",
      description: "Within first 90 days",
      color: "from-green-500 to-green-600",
      delay: 200
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "48h",
      label: "Average Setup Time",
      description: "From start to launch",
      color: "from-amber-500 to-amber-600",
      delay: 400
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on reviews",
      color: "from-blue-500 to-blue-600",
      delay: 600
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "95%",
      label: "ROI Guarantee Success",
      description: "Clients achieving targets",
      color: "from-purple-500 to-purple-600",
      delay: 800
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "24/7",
      label: "Expert Support",
      description: "Always available",
      color: "from-teal-500 to-teal-600",
      delay: 1000
    }
  ]

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background with UAE-inspired gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-amber-600" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.2),transparent)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Numbers that matter.
            </h2>
            <p className="text-lg lg:text-xl text-red-100 max-w-2xl mx-auto leading-relaxed font-light">
              Real results from real businesses across the Middle East
            </p>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`group transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 hover:border-white/30 transition-all duration-500 h-full">
                
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className={`text-2xl lg:text-3xl font-bold mb-2 transition-all duration-1000 ${
                    countUp ? 'text-white' : 'text-white/50'
                  }`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-white font-semibold text-sm mb-1">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-red-100 text-xs">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                🇦🇪 Built for the Middle East
              </h3>
              <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto leading-relaxed">
                We understand the unique challenges and opportunities in the MENA market. 
                Our proven strategies are specifically designed for regional success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-amber-400 mb-1">Dubai-Based</div>
                  <div className="text-red-100 text-sm">Local expertise & support</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400 mb-1">Multi-Lingual</div>
                  <div className="text-red-100 text-sm">Arabic & English campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400 mb-1">Cultural Aware</div>
                  <div className="text-red-100 text-sm">Respectful & effective messaging</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}