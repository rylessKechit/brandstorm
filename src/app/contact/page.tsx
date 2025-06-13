'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users, Star, CheckCircle, Send, Zap } from 'lucide-react'
import { useState } from 'react'

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Speak with our experts",
    value: "+971 56 566 3377",
    action: "tel:+971565663377",
    color: "from-green-600 to-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Quick chat & instant response",
    value: "Chat Now",
    action: "https://wa.me/971565663377",
    color: "from-green-600 to-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Detailed inquiries",
    value: "hello@vizionaire.com",
    action: "mailto:hello@vizionaire.com",
    color: "from-blue-600 to-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    subtitle: "Dubai, United Arab Emirates",
    value: "DIFC, Dubai",
    action: "https://maps.google.com/?q=DIFC+Dubai",
    color: "from-red-600 to-amber-600",
    bgColor: "bg-red-50"
  }
]

const services = [
  "Website Development",
  "Social Media Management", 
  "SEO & Content Marketing",
  "Marketing Automation",
  "Paid Advertising",
  "Strategic Consulting",
  "E-commerce Development",
  "Custom Solution"
]

const budgetRanges = [
  "Under 5,000 AED",
  "5,000 - 15,000 AED",
  "15,000 - 50,000 AED", 
  "50,000+ AED",
  "Let's discuss"
]

const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "We typically start new projects within 1-2 weeks after the initial consultation and contract signing. Rush projects can be accommodated with priority scheduling."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We provide a comprehensive 60-minute strategy consultation completely free. This includes business analysis, competitor research, and a custom growth roadmap."
  },
  {
    question: "What makes VIZIONAIRE different?",
    answer: "We combine UAE market expertise with global best practices, offer guaranteed results with our 90-day money-back promise, and provide dedicated account management for all clients."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Absolutely! We seamlessly integrate with your internal teams, existing agencies, and current workflows. Collaboration and knowledge transfer are part of our process."
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
    message: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Send WhatsApp message with form data
      const message = encodeURIComponent(
        `Hi! I'm interested in VIZIONAIRE services.\n\n` +
        `Name: ${formData.name}\n` +
        `Company: ${formData.company}\n` +
        `Service: ${formData.service}\n` +
        `Budget: ${formData.budget}\n` +
        `Timeline: ${formData.timeline}\n` +
        `Message: ${formData.message}\n\n` +
        `Please contact me to discuss my project.`
      )
      window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
    }, 1000)
  }

  const handleContactMethod = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank')
    } else {
      window.location.href = action
    }
  }

  const handleScheduleCall = () => {
    const message = encodeURIComponent('Hi! I would like to schedule a free strategy consultation with VIZIONAIRE. When is your next available slot?')
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
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">24/7 Support Available</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                  Let's Grow Your
                </span>
                <br />
                <span className="text-white">Business Together</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Ready to transform your digital presence? Get a free strategy consultation and discover how we can 3x your business growth.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-green-400 mb-2">Free</div>
                  <div className="text-sm text-gray-400">Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-amber-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleScheduleCall}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-2xl transition-all duration-300 hover:bg-white/20"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Multiple Ways to</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Reach Us
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose your preferred way to connect. We're here to help you succeed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <div 
                    key={index}
                    className={`group cursor-pointer ${method.bgColor} rounded-2xl p-6 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
                    onClick={() => handleContactMethod(method.action)}
                  >
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{method.subtitle}</p>
                      <div className={`text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                        {method.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Emergency Contact */}
            <div className="text-center">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200 max-w-md mx-auto">
                <Zap className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Urgent Project?</h3>
                <p className="text-gray-600 text-sm mb-4">Need immediate assistance? Call our priority line.</p>
                <button
                  onClick={() => window.location.href = 'tel:+971565663377'}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Call Now: +971 56 566 3377
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Tell Us About</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Your Project
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Share your vision with us and get a customized strategy plan within 24 hours.
              </p>
            </div>
            
            {!isSubmitted ? (
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                        placeholder="Ahmed Al-Rashid"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                        placeholder="ahmed@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Project Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="e.g., ASAP, 1-3 months, 3-6 months"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your business goals, target audience, current challenges, and what success looks like for you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message & Get Free Quote
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      We'll respond within 24 hours with a custom strategy plan
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-green-50 rounded-3xl p-8 lg:p-12 border border-green-200 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Thank you for contacting VIZIONAIRE. We've received your message and will get back to you within 24 hours with a customized strategy plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleScheduleCall}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    Schedule Follow-up Call
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', timeline: ''
                      })
                    }}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Frequently</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Asked Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Quick answers to common questions about our services and process.
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
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
              <button
                onClick={handleScheduleCall}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-amber-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                Ready to Start
              </span>
              <br />
              <span className="text-white">Your Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 500+ businesses that trust VIZIONAIRE to scale their digital presence and drive real growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button
                onClick={handleScheduleCall}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
              >
                <Calendar className="w-5 h-5" />
                Book Free Strategy Call
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
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free consultation & quote
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                24-hour response guarantee
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                90-day money-back guarantee
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}