'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, Star, Zap, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "299",
    period: "month",
    description: "Perfect for small businesses getting started",
    features: [
      "Social Media Management (2 platforms)",
      "Basic Website Development", 
      "Email Marketing Setup",
      "Monthly Analytics Report",
      "Live Chat Support"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional", 
    price: "699",
    period: "month",
    description: "For growing businesses that want more",
    features: [
      "Everything in Starter",
      "Social Media Management (5 platforms)",
      "Advanced Website + E-commerce",
      "Marketing Automation",
      "SEO Optimization",
      "Paid Advertising Management",
      "Weekly Strategy Calls",
      "Priority Support"
    ],
    popular: true,
    color: "from-pink-500 to-purple-500"
  },
  {
    name: "Enterprise",
    price: "1499", 
    period: "month",
    description: "For established businesses ready to scale",
    features: [
      "Everything in Professional",
      "Unlimited Platform Management",
      "Custom Development",
      "Advanced AI Analytics",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Custom Integrations",
      "White-label Solutions"
    ],
    popular: false,
    color: "from-orange-500 to-red-500"
  }
]

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="pricing" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Investment Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business growth. All plans include setup, strategy, and ongoing optimization.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-gray-700 rounded-full p-1 transition-colors duration-300"
            >
              <div className={`w-5 h-5 bg-pink-500 rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-green-400">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative group transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${plan.popular ? 'lg:-mt-8' : ''}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border transition-all duration-500 h-full ${
                plan.popular ? 'border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-purple-500/10' : 'border-white/10 hover:border-white/20'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-8">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">
                        ${isAnnual ? Math.round(parseInt(plan.price) * 0.8) : plan.price}
                      </span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    {isAnnual && (
                      <div className="text-green-400 text-sm mt-2">
                        Save ${Math.round(parseInt(plan.price) * 0.2 * 12)} annually
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full py-4 px-6 text-center font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 group ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-pink-500/30'
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started 
                      {plan.popular && <Zap className="w-4 h-4" />}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <Link 
            href="/contact"
            className="text-pink-400 hover:text-pink-300 font-bold transition-colors duration-300"
          >
            Contact us for enterprise pricing →
          </Link>
        </div>
      </div>
    </section>
  )
}