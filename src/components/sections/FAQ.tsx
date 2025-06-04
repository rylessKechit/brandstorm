// src/components/sections/FAQ.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How quickly can you start working on our project?",
    answer: "We can typically start within 48 hours of contract signing. Our onboarding process is streamlined to get you results as quickly as possible."
  },
  {
    question: "What makes VIZIONAIRE different from other agencies?",
    answer: "We specialize in the MENA market, use cutting-edge AI technology, and guarantee ROI. Plus, we handle everything from strategy to execution in-house."
  },
  {
    question: "Do you work with businesses outside the Middle East?",
    answer: "While we specialize in MENA, we work with international businesses looking to enter or expand in the Middle East market."
  },
  {
    question: "What's included in your pricing?",
    answer: "Our pricing includes strategy, implementation, ongoing optimization, regular reporting, and dedicated support. No hidden fees or surprise charges."
  },
  {
    question: "How do you measure and guarantee ROI?",
    answer: "We use advanced analytics to track every metric that matters. We guarantee positive ROI within 90 days or we'll work for free until you see results."
  },
  {
    question: "Can we scale up or down our services?",
    answer: "Absolutely! Our services are flexible and can be adjusted based on your growth, budget, and changing needs."
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes, we include team training as part of our Professional and Enterprise plans to ensure your team can maximize the value of our systems."
  },
  {
    question: "What happens if we want to cancel?",
    answer: "We offer month-to-month contracts with no long-term commitments. You can cancel anytime with 30 days notice, and we'll provide full handover documentation."
  }
]

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about working with VIZIONAIRE
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  )}
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 mt-4' : 'max-h-0'
                }`}>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="/contact"
            className="text-pink-400 hover:text-pink-300 font-bold transition-colors duration-300"
          >
            Contact our team for personalized answers →
          </a>
        </div>
      </div>
    </section>
  )
}