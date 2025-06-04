'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+971 4 123 4567", "+966 11 234 5678"],
    color: "text-green-400"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@brandstorm.com", "support@brandstorm.com"],
    color: "text-blue-400"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Dubai Marina", "DIFC, Dubai, UAE"],
    color: "text-pink-400"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Sun-Thu: 9AM-6PM", "24/7 Emergency Support"],
    color: "text-purple-400"
  }
]

const services = [
  "Website Development",
  "Social Media Management", 
  "SEO & Content Marketing",
  "Paid Advertising",
  "Marketing Automation",
  "Brand Strategy",
  "E-commerce Solutions",
  "Analytics & Reporting"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center p-8">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-black text-white mb-4">Message Sent!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-cyan-900/20" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Let's Talk
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your digital presence? Get in touch for a free consultation 
              and discover how we can boost your ROI.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div key={i} className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                    <Icon className={`w-12 h-12 ${info.color} mx-auto mb-6`} />
                    <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-gray-300 mb-1">{detail}</p>
                    ))}
                  </div>
                )
              })}
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-black mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Get Free Consultation
                  </span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="select-field"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, i) => (
                          <option key={i} value={service} className="bg-gray-900 text-white">{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Monthly Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="select-field"
                      >
                        <option value="">Select budget range</option>
                        <option value="<$500" className="bg-gray-900 text-white">Less than $500</option>
                        <option value="$500-$1000" className="bg-gray-900 text-white">$500 - $1,000</option>
                        <option value="$1000-$2500" className="bg-gray-900 text-white">$1,000 - $2,500</option>
                        <option value="$2500-$5000" className="bg-gray-900 text-white">$2,500 - $5,000</option>
                        <option value="$5000+" className="bg-gray-900 text-white">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-3xl font-black mb-8">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    What Happens Next?
                  </span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
                      <p className="text-gray-300">We'll get back to you within 2 hours during business hours with a personalized response.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
                      <p className="text-gray-300">Schedule a 30-minute strategy call to discuss your goals and challenges in detail.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Custom Proposal</h3>
                      <p className="text-gray-300">Receive a detailed proposal with strategy, timeline, and investment options tailored to your needs.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Launch & Grow</h3>
                      <p className="text-gray-300">Start seeing results within 30 days as we implement and optimize your campaigns.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">🚀 Free Bonus</h3>
                  <p className="text-gray-300 mb-4">
                    Book a consultation this week and receive a complimentary competitor analysis 
                    and digital audit (valued at $500).
                  </p>
                  <p className="text-sm text-gray-400">
                    Limited time offer • No strings attached
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}