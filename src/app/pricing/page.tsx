import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Pricing } from '@/components/sections/Pricing'
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
    price: "11,000",
    period: "one-time"
  },
  {
    name: "E-commerce Store",
    description: "Full online store setup",
    price: "18,350",
    period: "one-time"
  },
  {
    name: "Brand Identity",
    description: "Logo, colors, brand guidelines",
    price: "5,500",
    period: "one-time"
  },
  {
    name: "Video Production",
    description: "Professional video content",
    price: "3,670",
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

        {/* Pricing Section */}
        <Pricing />

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
                    <span className="text-2xl font-black text-white">{addon.price} AED</span>
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