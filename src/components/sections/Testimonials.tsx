// src/components/sections/Testimonials.tsx
'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Ahmed Al-Mansouri",
    company: "CEO, TechVenture Dubai",
    avatar: "👨‍💼",
    rating: 5,
    text: "BrandStorm transformed our digital presence completely. Our online sales increased by 400% in just 6 months!"
  },
  {
    name: "Sarah Hassan", 
    company: "Founder, Wellness Spa",
    avatar: "👩‍💼",
    rating: 5,
    text: "The automation they set up for us is incredible. We're now getting qualified leads 24/7 without any manual work."
  },
  {
    name: "Omar Khalil",
    company: "Marketing Director, Real Estate Group",
    avatar: "👨‍💻",
    rating: 5,
    text: "Finally, a team that understands the MENA market. Our property sales doubled after working with BrandStorm."
  },
  {
    name: "Fatima Al-Zahra",
    company: "E-commerce Store Owner", 
    avatar: "👩‍🦱",
    rating: 5,
    text: "ROI of 500%+ in the first quarter. Their social media campaigns are pure magic!"
  },
  {
    name: "Khalid Bin Rashid",
    company: "Restaurant Chain Owner",
    avatar: "👨‍🍳",
    rating: 5,
    text: "Our online orders increased by 300%. The team's creativity and execution are top-notch."
  },
  {
    name: "Layla Mohammed",
    company: "Fashion Brand Founder",
    avatar: "👗",
    rating: 5,
    text: "From 0 to 100K followers in 8 months. BrandStorm made our brand a regional sensation!"
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
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
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
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-pink-400 mb-4" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
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