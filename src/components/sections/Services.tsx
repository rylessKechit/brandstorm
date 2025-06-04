'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceFeature {
  feature: string
}

interface Service {
  icon: string
  title: string
  subtitle: string
  features: ServiceFeature[]
  color: string
}

const services: Service[] = [
  {
    icon: "🌐",
    title: "Website Development",
    subtitle: "High-Converting Websites & Landing Pages",
    features: [
      { feature: "Custom responsive design" },
      { feature: "E-commerce platforms (Shopify, WooCommerce)" },
      { feature: "Landing page optimization" },
      { feature: "Speed & SEO optimization" },
      { feature: "Mobile-first approach" },
      { feature: "Integration with analytics & CRM" }
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: "📱",
    title: "Social Media Management",
    subtitle: "Dominate Every Platform",
    features: [
      { feature: "Content creation & scheduling" },
      { feature: "Instagram, LinkedIn, TikTok, Facebook" },
      { feature: "Influencer partnerships" },
      { feature: "Community management" },
      { feature: "Social media advertising" },
      { feature: "Performance analytics & reporting" }
    ],
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: "🤖",
    title: "Marketing Automation",
    subtitle: "Scale Without Limits",
    features: [
      { feature: "Email marketing sequences" },
      { feature: "Lead nurturing workflows" },
      { feature: "CRM integration & setup" },
      { feature: "Chatbot development" },
      { feature: "Sales funnel automation" },
      { feature: "Behavioral trigger campaigns" }
    ],
    color: "from-purple-500 to-indigo-600"
  }
]

export function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-8">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Our Core Services
          </span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          The essential services every growing business needs to succeed online
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service: Service, i: number) => (
            <div 
              key={i}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-gray-400">{service.subtitle}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((item: ServiceFeature, j: number) => (
                    <li key={j} className="text-gray-300 flex items-center gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      {item.feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${service.color} rounded-xl text-white font-bold transform hover:scale-105 transition-all duration-300`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Link to full services page */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Looking for SEO, Paid Advertising, or Analytics services?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}