'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: "Ahmed K.",
    company: "Tech Startup Founder",
    avatar: "👨‍💼",
    rating: 5,
    text: "VIZIONAIRE's AI approach and MENA expertise is exactly what we needed. Professional team with real results.",
    result: "+250% qualified leads"
  },
  {
    name: "Sarah M.", 
    company: "E-commerce Owner",
    avatar: "👩‍💼",
    rating: 5,
    text: "Finally a team that understands the Middle East market. Their 90-day guarantee shows real confidence in their work.",
    result: "+180% online revenue"
  },
  {
    name: "Omar H.",
    company: "Restaurant Chain Manager",
    avatar: "👨‍💻",
    rating: 5,
    text: "The setup was incredibly fast and the team is always available. I love the no long-term contract approach.",
    result: "+320% online orders"
  }
]

export function TestimonialsMini() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              What Our <span className="text-red-600">Clients</span> Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              The trust of hundreds of companies across the MENA region
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-700 transform hover:-translate-y-1 border-2 border-transparent hover:border-red-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed font-medium italic text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Result Badge */}
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                {testimonial.result}
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 lg:p-8 border border-red-100">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="text-left">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    Over <span className="text-red-600">500+ Companies</span> Trust Us
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    From startups to large enterprises, discover how we've transformed 
                    their digital presence with measurable and lasting results.
                  </p>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold transition-colors duration-300 text-sm"
                  >
                    View More Testimonials
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-red-600 mb-1">95%</div>
                    <div className="text-gray-600 text-xs font-medium">Satisfied Clients</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-amber-600 mb-1">4.9/5</div>
                    <div className="text-gray-600 text-xs font-medium">Average Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">300%</div>
                    <div className="text-gray-600 text-xs font-medium">Average ROI</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">2024</div>
                    <div className="text-gray-600 text-xs font-medium">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}