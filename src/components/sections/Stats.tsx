// src/components/sections/Stats.tsx
'use client'

import { useState, useEffect } from 'react'

const stats = [
  { number: "2024", label: "Founded in Dubai", icon: "🏢" },
  { number: "48h", label: "Setup Time", icon: "⚡" },
  { number: "90-Day", label: "ROI Guarantee", icon: "💰" },
  { number: "24/7", label: "Support Available", icon: "🚀" },
  { number: "MENA", label: "Market Specialists", icon: "🌍" },
  { number: "AI-Powered", label: "Technology Stack", icon: "🤖" }
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Why Choose VIZIONAIRE
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2024 with cutting-edge AI technology and MENA expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}