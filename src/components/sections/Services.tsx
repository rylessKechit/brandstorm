'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Smartphone, Bot } from 'lucide-react'

interface Service {
  icon: JSX.Element
  title: string
  subtitle: string
  features: string[]
  startingPrice: string
  popular?: boolean
  color: string
}

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      subtitle: "High-Converting Websites & E-commerce",
      features: [
        "Custom responsive design",
        "E-commerce platforms (Shopify, WooCommerce)",
        "Integrated SEO optimization",
        "Performance & speed optimized",
        "Mobile-first approach",
        "Analytics & CRM integration"
      ],
      startingPrice: "From 11,000 AED",
      color: "from-red-600 to-red-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media",
      subtitle: "Dominate Every Platform",
      features: [
        "Complete content strategy",
        "Instagram, LinkedIn, TikTok, Facebook management",
        "Influencer partnerships",
        "Community management",
        "Social media advertising",
        "Detailed analytics & reporting"
      ],
      startingPrice: "From 5,500 AED",
      popular: true,
      color: "from-green-600 to-green-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Marketing Automation",
      subtitle: "Scale Without Limits",
      features: [
        "Automated email sequences",
        "Advanced lead nurturing",
        "CRM integration & setup",
        "Chatbot development",
        "Sales funnel automation",
        "Behavioral campaigns"
      ],
      startingPrice: "From 7,350 AED",
      color: "from-amber-600 to-amber-500"
    }
  ]

  return (
    <section className="bg-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Take a closer look.
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Complete solutions to transform your digital presence and
              <span className="text-white font-medium"> generate measurable growth</span>
            </p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service: Service, i: number) => (
            <div 
              key={i}
              className={`relative group cursor-pointer transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 ${
                hoveredCard === i ? 'bg-white/10 border-white/20 scale-105' : ''
              }`}>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-base text-gray-400 mb-4 font-medium">{service.subtitle}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-white mb-1">{service.startingPrice}</div>
                    <div className="text-xs text-gray-500">Setup included • No contracts</div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-base text-gray-400 mb-6 max-w-2xl mx-auto">
              Need something custom? We create personalized packages for unique business needs.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}