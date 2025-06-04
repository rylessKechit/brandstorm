import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight, Check, Star, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services - Complete Digital Marketing Solutions',
  description: 'Comprehensive digital marketing services including web development, social media, SEO, automation, and paid advertising.',
}

const services = [
  {
    id: 'web-development',
    icon: '🌐',
    title: 'Website Development',
    subtitle: 'High-Converting Websites & Landing Pages',
    description: 'Custom websites designed to convert visitors into customers with stunning design and optimized performance.',
    features: [
      'Custom responsive design',
      'E-commerce platforms (Shopify, WooCommerce)',
      'Landing page optimization',
      'Speed & SEO optimization',
      'Mobile-first approach',
      'Analytics & CRM integration'
    ],
    results: [
      '300% increase in conversions',
      '50% faster loading speeds',
      '95+ PageSpeed scores'
    ],
    startingPrice: '11,000 AED',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'social-media',
    icon: '📱',
    title: 'Social Media Management',
    subtitle: 'Dominate Every Platform',
    description: 'Complete social media strategy and management to build your brand and engage your audience across all platforms.',
    features: [
      'Content creation & scheduling',
      'Instagram, LinkedIn, TikTok, Facebook',
      'Influencer partnerships',
      'Community management',
      'Social media advertising',
      'Performance analytics & reporting'
    ],
    results: [
      '500% increase in engagement',
      '10x follower growth',
      '200% boost in reach'
    ],
    startingPrice: '5,500 AED',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'automation',
    icon: '🤖',
    title: 'Marketing Automation',
    subtitle: 'Scale Without Limits',
    description: 'Automated workflows that nurture leads and convert prospects into customers while you focus on growing your business.',
    features: [
      'Email marketing sequences',
      'Lead nurturing workflows',
      'CRM integration & setup',
      'Chatbot development',
      'Sales funnel automation',
      'Behavioral trigger campaigns'
    ],
    results: [
      '400% increase in qualified leads',
      '80% reduction in manual work',
      '250% boost in sales efficiency'
    ],
    startingPrice: '7,350 AED',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'seo',
    icon: '🔍',
    title: 'SEO & Content Marketing',
    subtitle: 'Rank #1 on Google',
    description: 'Comprehensive SEO strategy and content marketing to increase your organic visibility and drive qualified traffic.',
    features: [
      'Keyword research & strategy',
      'On-page & technical SEO',
      'Content creation & blogging',
      'Link building campaigns',
      'Local SEO optimization',
      'Monthly ranking reports'
    ],
    results: [
      '300% increase in organic traffic',
      '150% more qualified leads',
      'Page 1 rankings guaranteed'
    ],
    startingPrice: '4,770 AED',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'paid-advertising',
    icon: '💰',
    title: 'Paid Advertising',
    subtitle: 'Maximum ROI on Every Dollar',
    description: 'Strategic paid advertising campaigns across Google, Facebook, and other platforms to maximize your return on investment.',
    features: [
      'Google Ads & Shopping campaigns',
      'Facebook & Instagram Ads',
      'LinkedIn & TikTok advertising',
      'Retargeting & remarketing',
      'Conversion optimization',
      'Real-time budget management'
    ],
    results: [
      '500% return on ad spend',
      '70% lower cost per acquisition',
      '300% increase in conversions'
    ],
    startingPrice: '3,670 AED',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Analytics & Reporting',
    subtitle: 'Data-Driven Decisions',
    description: 'Comprehensive analytics setup and reporting to track performance and make informed decisions for your business.',
    features: [
      'Custom dashboard setup',
      'Google Analytics 4 implementation',
      'Conversion tracking',
      'ROI & performance metrics',
      'Monthly strategy sessions',
      'Competitor analysis reports'
    ],
    results: [
      '100% visibility into ROI',
      '50% better decision making',
      '200% improvement in targeting'
    ],
    startingPrice: '2,930 AED',
    color: 'from-cyan-500 to-blue-600'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your business, goals, and competition to create the perfect strategy.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Custom action plan tailored to your industry and target audience.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Expert execution of campaigns with continuous monitoring and optimization.'
  },
  {
    step: '04',
    title: 'Results',
    description: 'Measurable growth and ROI with detailed reporting and insights.'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-cyan-900/20" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Complete Digital
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              From strategy to execution, we handle every aspect of your digital presence. 
              Get the complete package that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="#services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to dominate your market and achieve explosive growth
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <div 
                  key={i}
                  className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                        <p className="text-gray-400">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-white font-bold mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, j) => (
                            <li key={j} className="text-gray-300 flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-pink-400 text-sm">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-bold mb-3">Typical Results:</h4>
                        <ul className="space-y-2">
                          {service.results.map((result, j) => (
                            <li key={j} className="text-gray-300 flex items-center gap-2 text-sm">
                              <TrendingUp className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Starting at</div>
                        <div className="text-2xl font-black text-white">{service.startingPrice}</div>
                        <div className="text-gray-500 text-xs">per month</div>
                      </div>
                      
                      <Link
                        href="/contact"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} rounded-xl text-white font-bold transform hover:scale-105 transition-all duration-300`}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Our Process
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 4-step process that delivers consistent results for every client
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  Why Choose BrandStorm?
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Star className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">500+ successful campaigns with an average 300% ROI increase for our clients.</p>
              </div>
              
              <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">MENA Expertise</h3>
                <p className="text-gray-300">Deep understanding of Middle Eastern markets and consumer behavior.</p>
              </div>
              
              <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Check className="w-12 h-12 text-pink-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">ROI Guarantee</h3>
                <p className="text-gray-300">We guarantee positive ROI within 90 days or we work for free until you see results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our services can skyrocket your growth
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="mt-8 text-sm text-gray-400">
              💡 Free strategy session • No obligation • Results guaranteed
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}