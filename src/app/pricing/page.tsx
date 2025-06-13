'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight, Check, Star, Zap, Crown, Rocket, Shield, Users, TrendingUp, Clock } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Perfect for Small Businesses",
    icon: Zap,
    monthlyPrice: 2500,
    annualPrice: 2000,
    color: "from-green-600 to-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    popular: false,
    features: [
      "Professional website design",
      "Basic SEO optimization", 
      "Social media setup (3 platforms)",
      "Monthly performance reports",
      "Email support",
      "1 revision round"
    ],
    results: [
      "2-3x website traffic increase",
      "50% better search rankings",
      "Professional online presence"
    ]
  },
  {
    name: "Professional",
    subtitle: "Most Popular Choice",
    icon: Crown,
    monthlyPrice: 5500,
    annualPrice: 4400,
    color: "from-red-600 to-amber-600",
    bgColor: "bg-gradient-to-br from-red-50 to-amber-50",
    borderColor: "border-red-300",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced SEO & content marketing",
      "Social media management (All platforms)",
      "Email marketing automation",
      "Google Ads management",
      "Weekly performance calls",
      "Priority support",
      "Unlimited revisions"
    ],
    results: [
      "5-10x lead generation increase",
      "300% ROI on average",
      "Top 3 Google rankings"
    ]
  },
  {
    name: "Enterprise",
    subtitle: "For Growing Companies",
    icon: Rocket,
    monthlyPrice: 12500,
    annualPrice: 10000,
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    popular: false,
    features: [
      "Everything in Professional",
      "Custom development & integrations",
      "Advanced automation workflows",
      "Multi-language campaigns",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom reporting dashboard",
      "Strategy consulting included"
    ],
    results: [
      "10-20x business growth",
      "500% marketing efficiency",
      "Market leadership position"
    ]
  }
]

const addOns = [
  {
    name: "E-commerce Development",
    price: "8,500",
    description: "Full Shopify/WooCommerce store setup"
  },
  {
    name: "Mobile App Development", 
    price: "15,000",
    description: "Native iOS & Android apps"
  },
  {
    name: "Video Production",
    price: "3,500",
    description: "Professional marketing videos"
  },
  {
    name: "Influencer Campaigns",
    price: "5,000",
    description: "Managed influencer partnerships"
  }
]

const faqs = [
  {
    question: "What's included in the setup fee?",
    answer: "Setup includes complete strategy development, account creation, initial content creation, and technical implementation. It's a one-time investment for long-term success."
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect from your next billing cycle with pro-rated adjustments."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes! We create tailored solutions for unique business needs. Contact us for a custom quote based on your specific requirements and goals."
  },
  {
    question: "What's your money-back guarantee?",
    answer: "We offer a 90-day money-back guarantee. If you don't see measurable results within 90 days, we'll refund your investment completely."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients see initial improvements within 30 days, with significant results by 90 days. Timeline varies based on industry, competition, and starting point."
  },
  {
    question: "Do you work with businesses outside UAE?",
    answer: "While we specialize in the UAE market, we work with businesses globally. Our strategies are adapted to local markets and cultural preferences."
  }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleGetStarted = (planName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${planName} plan. Can we schedule a consultation to discuss my needs?`)
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleCustomQuote = () => {
    const message = encodeURIComponent('Hi! I need a custom pricing solution for my business. Can we schedule a strategy call?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-amber-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">90-Day Money-Back Guarantee</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                  Simple, Transparent
                </span>
                <br />
                <span className="text-white">Pricing</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Choose the perfect plan to scale your business. No hidden fees, no long-term contracts, guaranteed results.
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1 mb-12">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    !isAnnual 
                      ? 'bg-white text-gray-900 shadow-lg' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isAnnual 
                      ? 'bg-white text-gray-900 shadow-lg' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  Annual
                  <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">500+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-green-400 mb-2">300%</div>
                  <div className="text-sm text-gray-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-amber-400 mb-2">90</div>
                  <div className="text-sm text-gray-400">Day Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
              {pricingPlans.map((plan, index) => {
                const IconComponent = plan.icon
                const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
                const savings = plan.monthlyPrice - plan.annualPrice
                
                return (
                  <div 
                    key={index}
                    className={`relative group ${plan.popular ? 'md:scale-105 z-20' : 'z-10'}`}
                    style={{ zIndex: plan.popular ? 20 : 10 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                        <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className={`relative overflow-hidden rounded-2xl ${plan.bgColor} ${plan.borderColor} border-2 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${plan.popular ? 'shadow-xl' : 'shadow-lg'}`}>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} text-white shadow-lg`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-gray-900">{plan.name}</h3>
                          <p className="text-sm text-gray-600">{plan.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-gray-900">{price.toLocaleString()}</span>
                          <span className="text-gray-600">AED/month</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-green-600 font-semibold mt-1">
                            Save {savings.toLocaleString()} AED/month
                          </div>
                        )}
                      </div>
                      
                      {/* Features */}
                      <div className="mb-8">
                        <div className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Results */}
                      <div className="mb-8 p-4 bg-white/50 rounded-xl border border-white/50">
                        <h4 className="text-sm font-bold text-gray-900 mb-3">Expected Results:</h4>
                        <div className="space-y-2">
                          {plan.results.map((result, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <button
                        onClick={() => handleGetStarted(plan.name)}
                        className={`group w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                      >
                        Get Started Today
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Custom Solution */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  Need a Custom Solution?
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We create personalized packages for unique business needs. 
                  Get a custom quote tailored to your specific goals and budget.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleCustomQuote}
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Get Custom Quote
                  </button>
                  <Link 
                    href="/services"
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  >
                    View All Services
                  </Link>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Free consultation included
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Custom strategy development
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    No long-term contracts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Popular</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Add-ons
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Enhance your plan with specialized services to maximize your business growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                    <div className="text-2xl font-black text-gray-900 mb-4">
                      {addon.price} <span className="text-sm font-normal text-gray-600">AED</span>
                    </div>
                    <button
                      onClick={handleCustomQuote}
                      className="w-full px-4 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300"
                    >
                      Add to Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-24 bg-gradient-to-br from-green-600 to-green-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <Shield className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                90-Day Money-Back Guarantee
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                We're so confident in our results that we offer a full refund if you don't see measurable improvements within 90 days. 
                That's how confident we are in our proven strategies.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-2">90 Days</div>
                  <div className="text-green-200">ROI Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-2">300%</div>
                  <div className="text-green-200">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-2">500+</div>
                  <div className="text-green-200">Success Stories</div>
                </div>
              </div>
              <button
                onClick={handleCustomQuote}
                className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Claim Your Guarantee
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Pricing FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to know about our pricing and services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-amber-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                Ready to Scale
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a free strategy call and discover how we can 3x your business growth in the next 90 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button
                onClick={handleCustomQuote}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
              >
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-2xl transition-all duration-300 hover:bg-white/20"
              >
                View All Services
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Free consultation included
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                90-day money-back guarantee
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No long-term contracts
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}