// src/components/sections/Industries.tsx
'use client'

import { useState, useEffect } from 'react'

const industries = [
  {
    icon: "🏪",
    title: "E-commerce & Retail",
    description: "Boost online sales with optimized funnels and targeted campaigns",
    clients: "50+ brands",
    growth: "+300% ROI"
  },
  {
    icon: "🏥",
    title: "Healthcare & Wellness",
    description: "Patient acquisition and reputation management for medical practices",
    clients: "25+ clinics",
    growth: "+250% leads"
  },
  {
    icon: "🏠",
    title: "Real Estate",
    description: "Generate quality leads and accelerate property sales",
    clients: "30+ agencies",
    growth: "+200% sales"
  },
  {
    icon: "📚",
    title: "Education & Training",
    description: "Student enrollment and course promotion strategies",
    clients: "20+ schools",
    growth: "+180% enrollment"
  },
  {
    icon: "💰",
    title: "Financial Services",
    description: "Build trust and generate leads for financial products",
    clients: "15+ firms",
    growth: "+220% conversions"
  },
  {
    icon: "🍔",
    title: "Food & Beverage",
    description: "Drive foot traffic and online orders for restaurants",
    clients: "40+ restaurants",
    growth: "+160% orders"
  }
]

export function Industries() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Industries We Dominate
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized expertise across multiple industries with proven track records
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <div 
              key={i}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-5xl mb-6">{industry.icon}</div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  <div className="font-bold text-pink-400">{industry.clients}</div>
                  <div>Happy Clients</div>
                </div>
                <div className="text-sm text-gray-400 text-right">
                  <div className="font-bold text-green-400">{industry.growth}</div>
                  <div>Avg. Growth</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}