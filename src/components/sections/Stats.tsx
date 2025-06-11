// src/components/sections/Stats.tsx
'use client'

import { useState, useEffect } from 'react'

const stats = [
  { number: "2024", label: "Founded in Dubai", icon: "🏢", color: "from-red-600 to-red-500" },
  { number: "48h", label: "Setup Time", icon: "⚡", color: "from-amber-600 to-amber-500" },
  { number: "90-Day", label: "ROI Guarantee", icon: "💰", color: "from-green-600 to-green-500" },
  { number: "24/7", label: "Support Available", icon: "🚀", color: "from-red-600 to-green-600" },
  { number: "MENA", label: "Market Specialists", icon: "🌍", color: "from-green-600 to-amber-500" },
  { number: "AI-Powered", label: "Technology Stack", icon: "🤖", color: "from-amber-600 to-red-500" }
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              Why Choose VIZIONAIRE
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Founded in 2024 with cutting-edge AI technology and MENA expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`group text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}