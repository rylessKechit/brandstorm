'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How quickly can you start working on our project?",
    answer: "We can typically start within 48 hours of contract signing. Our onboarding process is streamlined to get you results as quickly as possible. We'll have your first campaigns live and your automation systems running within the first week."
  },
  {
    question: "What makes VIZIONAIRE different from other agencies?",
    answer: "We specialize exclusively in the MENA market, use cutting-edge AI technology, and guarantee ROI within 90 days. Plus, we handle everything from strategy to execution in-house with our dedicated team of specialists."
  },
  {
    question: "Do you work with businesses outside the Middle East?",
    answer: "While we specialize in MENA, we work with international businesses looking to enter or expand in the Middle East market. Our expertise helps global brands understand and succeed in this unique region."
  },
  {
    question: "What's included in your pricing?",
    answer: "Our pricing includes strategy development, campaign implementation, ongoing optimization, regular reporting, and dedicated support. No hidden fees, no surprise charges. Everything you need is included in your monthly plan."
  },
  {
    question: "How do you measure and guarantee ROI?",
    answer: "We use advanced analytics to track every metric that matters to your business. We guarantee positive ROI within 90 days or we'll continue working for free until you see the results we promised."
  },
  {
    question: "Can we scale up or down our services?",
    answer: "Absolutely! Our services are flexible and can be adjusted based on your growth, budget, and changing needs. You can upgrade, downgrade, or modify your plan at any time with just 30 days notice."
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes, we include team training as part of our Professional and Enterprise plans to ensure your team can maximize the value of our systems and understand how to maintain growth after our engagement."
  },
  {
    question: "What happens if we want to cancel?",
    answer: "We offer month-to-month contracts with no long-term commitments. You can cancel anytime with 30 days notice, and we'll provide complete handover documentation and training to ensure a smooth transition."
  }
]

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-amber-500 rounded-full mb-6">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Everything you need to know about working with VIZIONAIRE
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openIndex === i ? (
                        <ChevronUp className="w-5 h-5 text-red-600 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-red-600 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? 'max-h-96 mt-3' : 'max-h-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-3">
                      <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 border border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Our team is here to help. Get personalized answers and a custom strategy for your business.
            </p>
            <button 
              onClick={() => {
                const message = encodeURIComponent('Hello! I have some questions about VIZIONAIRE services. Can we schedule a consultation?')
                window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-sm"
            >
              Contact Our Team
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}