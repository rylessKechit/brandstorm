'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, Star, ArrowRight, Zap, Crown, Rocket } from 'lucide-react'

const pricingPlans = [
  {
    icon: <Zap className="w-8 h-8" />,
    name: "Starter",
    subtitle: "Perfect for small businesses",
    price: "5,500",
    period: "AED/month",
    description: "Essential digital marketing to get you started",
    features: [
      "Social media management (2 platforms)",
      "Basic content creation (8 posts/month)",
      "Monthly analytics report",
      "Email support",
      "Basic SEO optimization",
      "Setup & onboarding included"
    ],
    buttonText: "Start Growing",
    color: "from-green-600 to-green-500",
    popular: false
  },
  {
    icon: <Crown className="w-8 h-8" />,
    name: "Professional",
    subtitle: "Most popular for growing companies",
    price: "11,000",
    period: "AED/month",
    description: "Complete marketing solution with automation",
    features: [
      "Everything in Starter",
      "Multi-platform management (4 platforms)",
      "Advanced content creation (20 posts/month)",
      "Marketing automation setup",
      "Weekly performance reports",
      "Priority support",
      "Lead generation campaigns",
      "Competitor analysis",
      "Custom landing pages"
    ],
    buttonText: "Go Professional",
    color: "from-red-600 to-amber-500",
    popular: true
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    name: "Enterprise",
    subtitle: "For companies ready to dominate",
    price: "22,000",
    period: "AED/month",
    description: "Full-scale digital transformation",
    features: [
      "Everything in Professional",
      "Unlimited platform management",
      "Daily content creation (60+ posts/month)",
      "Advanced AI automation",
      "Real-time dashboard & reporting",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom integrations",
      "Influencer partnerships",
      "Video content production",
      "Advanced analytics & insights"
    ],
    buttonText: "Dominate Now",
    color: "from-purple-600 to-blue-500",
    popular: false
  }
]

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I am interested in VIZIONAIRE pricing plans. Can we schedule a consultation to discuss my needs?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Choose your <span className="text-red-600">plan</span>.
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Transparent pricing with no hidden fees. Get results or your money back.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  !isAnnual 
                    ? 'bg-red-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  isAnnual 
                    ? 'bg-red-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, i) => (
            <div 
              key={i}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${plan.popular ? 'scale-105 lg:scale-110' : ''}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 border-2 ${
                plan.popular 
                  ? 'border-red-200 hover:border-red-300' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110`}>
                    {plan.icon}
                  </div>
                  
                  {/* Plan Info */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{plan.subtitle}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">
                        {isAnnual ? Math.round(parseInt(plan.price) * 0.8).toLocaleString() : parseInt(plan.price).toLocaleString()}
                      </span>
                      <span className="text-base text-gray-600">{plan.period}</span>
                    </div>
                    {isAnnual && (
                      <div className="text-xs text-green-600 font-medium mt-1">
                        Save {parseInt(plan.price) * 12 * 0.2} AED annually
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 6).map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button
                    onClick={handleCallClick}
                    className={`w-full py-3 px-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                  
                  <div className="text-center mt-3">
                    <p className="text-xs text-gray-500">No setup fees • Cancel anytime</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
                We create personalized packages for unique business needs. 
                Contact us for a custom quote and tailored strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={handleCallClick}
                  className="px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  Get Custom Quote
                </button>
                <Link 
                  href="/demo"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm"
                >
                  View Results
                </Link>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3 h-3 text-green-600" />
                  Free consultation included
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3 h-3 text-green-600" />
                  Custom strategy
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3 h-3 text-green-600" />
                  No long-term contracts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}