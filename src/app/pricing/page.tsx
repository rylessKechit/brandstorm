import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Check, Star, Zap, ArrowRight, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - Investment Plans for Your Growth',
  description: 'Transparent pricing for our digital marketing services. Choose the perfect plan for your business growth with guaranteed ROI.',
}

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
    color: "from-blue-500 to-cyan-500",
    savings: "Best for testing the waters"
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
    color: "from-pink-500 to-purple-500",
    savings: "Most popular choice"
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
    color: "from-orange-500 to-red-500",
    savings: "Maximum ROI potential"
  }
]

const addOns = [
  {
    name: "Website Development",
    description: "Custom website from scratch",
    price: "2,999",
    period: "one-time"
  },
  {
    name: "E-commerce Store",
    description: "Full online store setup",
    price: "4,999",
    period: "one-time"
  },
  {
    name: "Brand Identity",
    description: "Logo, colors, brand guidelines",
    price: "1,499",
    period: "one-time"
  },
  {
    name: "Video Production",
    description: "Professional video content",
    price: "999",
    period: "per video"
  }
]

const faqs = [
  {
    question: "What's included in the setup?",
    answer: "Complete account setup, strategy development, content calendar creation, and integration with your existing systems."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan with 30 days notice. We'll help you transition smoothly."
  },
  {
    question: "Do you guarantee results?",
    answer: "We guarantee positive ROI within 90 days or we'll work for free until you see measurable results."
  },
  {
    question: "What if I need custom services?",
    answer: "We create custom packages for unique needs. Contact us for a personalized quote and strategy."
  }
]

export default function PricingPage() {
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
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Investment Plans
              </span>
              <br />
              <span className="text-white">For Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Transparent pricing with guaranteed ROI. Choose the perfect plan for your business growth 
              and start seeing results within 30 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Custom Quote
              </Link>
              <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
                See Our Results
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Choose Your Plan
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                All plans include setup, strategy, and ongoing optimization. No hidden fees, no surprises.
              </p>
              
              {/* Annual Toggle */}
              <div className="inline-flex items-center gap-4 p-2 rounded-full bg-white/5 border border-white/10">
                <span className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold">Monthly</span>
                <span className="px-4 py-2 text-gray-400">Annual (Save 20%)</span>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <div 
                  key={i}
                  className={`relative group transition-all duration-700 transform hover:scale-105 ${
                    plan.popular ? 'lg:-mt-8' : ''
                  }`}
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
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 mb-6">{plan.description}</p>
                        
                        <div className="mb-4">
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="text-5xl font-black text-white">
                              ${plan.price}
                            </span>
                            <span className="text-gray-400">/{plan.period}</span>
                          </div>
                          <div className="text-green-400 text-sm mt-2">
                            {plan.savings}
                          </div>
                        </div>
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
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Optional Add-ons
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with these additional services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white mb-3">{addon.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{addon.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">${addon.price}</span>
                    <span className="text-gray-400 text-sm">{addon.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Guarantee */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20">
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-white mb-6">ROI Guarantee</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We guarantee positive ROI within 90 days or we'll work for free until you see measurable results. 
                That's how confident we are in our proven strategies.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">90 Days</div>
                  <div className="text-gray-300">ROI Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">500+</div>
                  <div className="text-gray-300">Success Stories</div>
                </div>
              </div>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Claim Your Guarantee
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Pricing FAQs
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Ready to Grow
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a custom strategy and pricing tailored to your specific goals and budget
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/services"
                className="btn-secondary text-lg px-8 py-4"
              >
                View All Services
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Free consultation
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Custom strategy
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
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