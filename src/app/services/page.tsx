'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight, Check, Star, TrendingUp, Zap, Globe, Users, Target, BarChart3, Smartphone } from 'lucide-react'

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Website Development',
    subtitle: 'High-Converting Websites & Landing Pages',
    description: 'Custom websites designed to convert visitors into customers with stunning design and optimized performance that drives real business results.',
    features: [
      'Custom responsive design with Apple-inspired aesthetics',
      'E-commerce platforms (Shopify, WooCommerce, Magento)',
      'Landing page optimization with A/B testing',
      'Speed & SEO optimization (95+ PageSpeed scores)',
      'Mobile-first approach with perfect responsiveness',
      'Analytics & CRM integration for data-driven insights'
    ],
    results: [
      '300% increase in conversions',
      '50% faster loading speeds',
      '95+ PageSpeed scores',
      '40% reduction in bounce rate'
    ],
    startingPrice: '11,000',
    color: 'from-red-600 to-red-500',
    bgGradient: 'from-red-50 to-orange-50'
  },
  {
    id: 'social-media',
    icon: Smartphone,
    title: 'Social Media Management',
    subtitle: 'Dominate Every Platform',
    description: 'Complete social media strategy and management to build your brand and engage your audience across all platforms with viral content.',
    features: [
      'Content creation & strategic scheduling',
      'Instagram, LinkedIn, TikTok, Facebook management',
      'Influencer partnerships and collaborations',
      'Community management and engagement',
      'Social media advertising campaigns',
      'Performance analytics & detailed reporting'
    ],
    results: [
      '500% increase in engagement',
      '10x follower growth',
      '200% boost in reach',
      '150% more qualified leads'
    ],
    startingPrice: '5,500',
    color: 'from-green-600 to-green-500',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Marketing Automation',
    subtitle: 'Scale Without Limits',
    description: 'Automated workflows that nurture leads and convert prospects into customers while you focus on growing your business strategically.',
    features: [
      'Email marketing sequences and drip campaigns',
      'Lead nurturing workflows with smart triggers',
      'CRM integration & complete setup',
      'Chatbot development for 24/7 support',
      'Sales funnel automation and optimization',
      'Behavioral trigger campaigns for personalization'
    ],
    results: [
      '400% increase in qualified leads',
      '80% reduction in manual work',
      '250% boost in sales efficiency',
      '60% improvement in lead quality'
    ],
    startingPrice: '7,350',
    color: 'from-amber-600 to-amber-500',
    bgGradient: 'from-amber-50 to-yellow-50'
  },
  {
    id: 'seo',
    icon: Target,
    title: 'SEO & Content Marketing',
    subtitle: 'Rank #1 on Google',
    description: 'Comprehensive SEO strategy and content marketing to increase your organic visibility and drive qualified traffic that converts.',
    features: [
      'Complete technical SEO audits and fixes',
      'Keyword research and competitive analysis',
      'Content strategy and creation',
      'Link building with high-authority sites',
      'Local SEO for UAE market dominance',
      'Monthly reporting and strategy adjustments'
    ],
    results: [
      '400% increase in organic traffic',
      'Top 3 rankings for target keywords',
      '200% more qualified leads',
      '150% improvement in domain authority'
    ],
    startingPrice: '6,500',
    color: 'from-blue-600 to-blue-500',
    bgGradient: 'from-blue-50 to-indigo-50'
  },
  {
    id: 'paid-ads',
    icon: BarChart3,
    title: 'Paid Advertising',
    subtitle: 'Maximize Your ROI',
    description: 'Strategic paid advertising campaigns across Google, Meta, and LinkedIn that deliver measurable results and exceptional ROI.',
    features: [
      'Google Ads campaigns and optimization',
      'Facebook & Instagram advertising',
      'LinkedIn B2B campaign management',
      'Advanced audience targeting and retargeting',
      'Creative development and A/B testing',
      'Real-time optimization and reporting'
    ],
    results: [
      '300% ROAS on average',
      '50% lower cost per acquisition',
      '200% increase in qualified leads',
      '90% improvement in conversion rates'
    ],
    startingPrice: '8,500',
    color: 'from-purple-600 to-purple-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Strategic Consulting',
    subtitle: 'Expert Guidance & Strategy',
    description: 'High-level strategic consulting to optimize your entire digital marketing ecosystem and scale your business effectively.',
    features: [
      'Complete digital marketing audits',
      'Strategic planning and roadmap creation',
      'Team training and workshops',
      'Performance optimization consulting',
      'Technology stack recommendations',
      'Ongoing strategic support and guidance'
    ],
    results: [
      '250% improvement in overall performance',
      '40% reduction in marketing costs',
      '300% increase in team efficiency',
      '200% better strategic alignment'
    ],
    startingPrice: '12,500',
    color: 'from-indigo-600 to-indigo-500',
    bgGradient: 'from-indigo-50 to-blue-50'
  }
]

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    company: "Dubai Tech Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "VIZIONAIRE transformed our digital presence completely. Our website now converts 5x better and our social media engagement is through the roof.",
    rating: 5,
    result: "500% increase in conversions"
  },
  {
    name: "Sarah Al-Mansoori",
    company: "Luxury Real Estate",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b108?w=100&h=100&fit=crop&crop=face",
    text: "The automation workflows they built save us 20 hours per week while generating more qualified leads than we've ever had.",
    rating: 5,
    result: "20 hours saved weekly"
  },
  {
    name: "Omar Al-Zaabi",
    company: "E-commerce Fashion",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "ROI increased 400% in just 3 months. Their paid advertising strategies are absolutely game-changing for our business.",
    rating: 5,
    result: "400% ROI increase"
  }
]

export default function ServicesPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I am interested in VIZIONAIRE services. Can we schedule a consultation to discuss my digital marketing needs?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-amber-900">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Trusted by 500+ UAE Businesses</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                  Complete Digital
                </span>
                <br />
                <span className="text-white">Marketing Solutions</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                From stunning websites to viral social media campaigns. We deliver measurable results that scale your business in the UAE market.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-green-400 mb-2">300%</div>
                  <div className="text-sm text-gray-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-amber-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetQuote}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
                >
                  Get Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-2xl transition-all duration-300 hover:bg-white/20"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end digital marketing solutions designed to scale your business in the competitive UAE market.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div 
                    key={service.id}
                    className={`group relative overflow-hidden rounded-2xl bg-white p-6 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon & Price */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500 mb-1">Starting at</div>
                          <div className="text-lg font-black text-gray-900">{service.startingPrice} <span className="text-xs font-normal">AED</span></div>
                        </div>
                      </div>
                      
                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-black text-gray-900 mb-1">{service.title}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3`}>
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      
                      {/* Key Features (Top 3) */}
                      <div className="mb-4">
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className={`w-4 h-4 mt-0.5 text-green-600 flex-shrink-0`} />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-gray-500 mt-2">
                              +{service.features.length - 3} more features included
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Top Result */}
                      <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-700">{service.results[0]}</span>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <button
                        onClick={handleGetQuote}
                        className={`group w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${service.color} text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm`}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Our Proven</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  4-Step Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From strategy to execution, we follow a proven methodology that delivers exceptional results every time.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Strategy & Analysis",
                  description: "Deep dive into your business, market analysis, competitor research, and strategic planning.",
                  color: "from-red-600 to-red-500"
                },
                {
                  step: "02", 
                  title: "Design & Development",
                  description: "Create stunning designs and develop high-performing solutions tailored to your needs.",
                  color: "from-amber-600 to-amber-500"
                },
                {
                  step: "03",
                  title: "Launch & Optimize",
                  description: "Strategic launch with continuous monitoring, testing, and optimization for maximum performance.",
                  color: "from-green-600 to-green-500"
                },
                {
                  step: "04",
                  title: "Scale & Grow",
                  description: "Scale successful campaigns and strategies to drive sustainable business growth.",
                  color: "from-blue-600 to-blue-500"
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${process.color} text-white text-2xl font-black mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">What Our</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm font-semibold text-green-600">{testimonial.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-amber-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a free strategy call and discover how we can 3x your business growth in the next 90 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button
                onClick={handleGetQuote}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
              >
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-2xl transition-all duration-300 hover:bg-white/20"
              >
                View Pricing Plans
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