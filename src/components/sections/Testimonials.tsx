// TESTIMONIALS COMPONENT - Updated UAE Colors
'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Ahmed K.",
    company: "Tech Startup Founder",
    avatar: "👨‍💼",
    rating: 5,
    text: "VIZIONAIRE's AI-powered approach and MENA expertise is exactly what we needed. Professional team with genuine results."
  },
  {
    name: "Sarah M.", 
    company: "E-commerce Business Owner",
    avatar: "👩‍💼",
    rating: 5,
    text: "Finally found a team that understands the Middle East market. Their 90-day guarantee shows real confidence in their work."
  },
  {
    name: "Omar H.",
    company: "Restaurant Chain Manager",
    avatar: "👨‍💻",
    rating: 5,
    text: "Setup was incredibly fast and the team is always available. Love the no-contract approach - shows they earn our business daily."
  },
  {
    name: "Layla A.",
    company: "Fashion Brand Owner", 
    avatar: "👩‍🦱",
    rating: 5,
    text: "Their AI technology and automation approach is impressive. Great to work with a team that's built specifically for our region."
  },
  {
    name: "Hassan R.",
    company: "Real Estate Developer",
    avatar: "👨‍🏢",
    rating: 5,
    text: "Professional service with genuine expertise in MENA markets. The 48-hour setup promise was actually delivered."
  },
  {
    name: "Nour S.",
    company: "Healthcare Clinic Owner",
    avatar: "👩‍⚕️",
    rating: 5,
    text: "VIZIONAIRE combines global best practices with local market knowledge. Exactly what growing businesses in Dubai need."
  }
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-green-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-red-500 mb-6" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed font-light">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}