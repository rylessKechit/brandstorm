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
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              What Our <span className="text-red-600">Clients</span> Say
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              The trust of hundreds of companies across the MENA region
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-red-600 mb-6" />
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed font-medium italic">
                "{testimonial.text}"
              </p>
              
              {/* Result Badge */}
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                {testimonial.result}
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-3xl p-8 lg:p-12 border border-red-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Over <span className="text-red-600">500+ Companies</span> Trust Us
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    From startups to large enterprises, discover how we've transformed 
                    their digital presence with measurable and lasting results.
                  </p>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold transition-colors duration-300"
                  >
                    View More Testimonials
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                    <div className="text-gray-600 text-sm font-medium">Satisfied Clients</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
                    <div className="text-gray-600 text-sm font-medium">Average Rating</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                    <div className="text-gray-600 text-sm font-medium">Average ROI</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                    <div className="text-gray-600 text-sm font-medium">Founded</div>
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