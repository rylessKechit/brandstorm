'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Zap } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["Request call via WhatsApp", "+971 56 566 3377"],
    color: "text-green-400",
    action: "call"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["Instant messaging", "24/7 Support"],
    color: "text-green-500",
    action: "whatsapp"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@brandstorm.com", "support@brandstorm.com"],
    color: "text-blue-400",
    action: "email"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Sun-Thu: 9AM-6PM", "24/7 Emergency Support"],
    color: "text-purple-400",
    action: "none"
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

const quickActions = [
  {
    icon: Phone,
    title: "Schedule Call",
    subtitle: "Request call via WhatsApp",
    color: "from-green-600 to-green-700",
    action: "call"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    subtitle: "Instant messaging 24/7",
    color: "from-green-500 to-green-600",
    action: "whatsapp"
  },
  {
    icon: Send,
    title: "Quick Email",
    subtitle: "Response within 2h",
    color: "from-blue-600 to-blue-700",
    action: "email"
  }
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

  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I would like to schedule a call to discuss your digital marketing services. When would be a good time?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about your digital marketing services. Can you contact me?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:hello@brandstorm.com?subject=Free consultation request&body=Hello, I would like to schedule a free consultation to discuss my digital marketing needs.', '_self')
  }

  const handleQuickAction = (action: string) => {
    switch(action) {
      case 'call':
        handleCallClick()
        break
      case 'whatsapp':
        handleWhatsAppClick()
        break
      case 'email':
        handleEmailClick()
        break
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center p-8">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-black text-white mb-4">Message Sent!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Send Another Message
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp for Faster Response
            </button>
          </div>
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

        {/* Quick Actions */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Quick Contact
                </span>
              </h2>
              <p className="text-gray-300">Choose your preferred contact method</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {quickActions.map((action, i) => {
                const Icon = action.icon
                return (
                  <button
                    key={i}
                    onClick={() => handleQuickAction(action.action)}
                    className={`group p-6 rounded-2xl bg-gradient-to-br ${action.color} text-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-white/80">{action.subtitle}</p>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div 
                    key={i} 
                    className={`text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ${
                      info.action !== 'none' ? 'cursor-pointer transform hover:scale-105' : ''
                    }`}
                    onClick={() => info.action !== 'none' && handleQuickAction(info.action)}
                  >
                    <Icon className={`w-12 h-12 ${info.color} mx-auto mb-6`} />
                    <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-gray-300 mb-1">{detail}</p>
                    ))}
                    {info.action !== 'none' && (
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1 text-sm text-pink-400 font-medium">
                          Click to {info.action === 'call' ? 'request call' : info.action === 'whatsapp' ? 'WhatsApp' : 'email'}
                          <Zap className="w-3 h-3" />
                        </span>
                      </div>
                    )}
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
                        placeholder="+971 56 566 3377"
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

                {/* WhatsApp CTA in sidebar */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Get instant answers to your questions via WhatsApp. Our team is standing by to help you.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start WhatsApp Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
              <div className="text-center">
                <h2 className="text-2xl font-black text-white mb-4">🚨 Emergency Support</h2>
                <p className="text-gray-300 mb-6">
                  Business emergency? Technical issues? We're here 24/7 to help when you need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleCallClick}
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Request Emergency Call
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    24/7 WhatsApp Support
                  </button>
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