'use client'

import { useState, useEffect } from 'react'
import { Target, TrendingUp, Globe, Zap } from 'lucide-react'

const features = [
  { 
    icon: Target, 
    title: "AI Analytics", 
    desc: "Artificial intelligence to optimize your campaigns", 
    color: "from-red-600 to-red-500" 
  },
  { 
    icon: TrendingUp, 
    title: "Automation", 
    desc: "Automated workflows that convert", 
    color: "from-green-600 to-green-500" 
  },
  { 
    icon: Globe, 
    title: "Multi-Channel", 
    desc: "Omnichannel campaign management", 
    color: "from-amber-600 to-amber-500" 
  },
  { 
    icon: Zap, 
    title: "Real-Time", 
    desc: "Live analytics and real-time optimization", 
    color: "from-red-600 to-green-600" 
  }
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              Premium Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Advanced technology meets regional expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div 
                key={i}
                className={`group relative transition-all duration-700 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}