// src/components/sections/Industries.tsx
'use client'

import { useState, useEffect } from 'react'

const industries = [
  {
    icon: "🏪",
    title: "E-commerce & Retail",
    description: "AI-powered solutions for online stores and retail businesses",
    clients: "Growing fast",
    growth: "High potential"
  },
  {
    icon: "🏥",
    title: "Healthcare & Wellness",
    description: "Digital marketing strategies for medical practices and wellness brands",
    clients: "Specialized approach",
    growth: "Trusted results"
  },
  {
    icon: "🏠",
    title: "Real Estate",
    description: "Lead generation and digital presence for property developers",
    clients: "MENA focused",
    growth: "Market expertise"
  },
  {
    icon: "📚",
    title: "Education & Training",
    description: "Student acquisition and online course promotion strategies",
    clients: "Growth oriented",
    growth: "Modern approach"
  },
  {
    icon: "💰",
    title: "Financial Services",
    description: "Compliance-focused marketing for financial products and services",
    clients: "Regulated expertise",
    growth: "Trust building"
  },
  {
    icon: "🍔",
    title: "Food & Beverage",
    description: "Local marketing strategies for restaurants and food brands",
    clients: "Community focused",
    growth: "Local expertise"
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