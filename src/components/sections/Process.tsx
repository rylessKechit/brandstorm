// PROCESS COMPONENT - Updated UAE Colors
'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, competitors, and target audience to create a winning strategy",
    features: ["Market Research", "Competitor Analysis", "Goal Setting", "Strategy Blueprint"],
    color: "from-red-600 to-red-500"
  },
  {
    step: "02", 
    title: "Setup & Implementation",
    description: "We set up all your marketing systems, campaigns, and automation workflows",
    features: ["Platform Setup", "Campaign Creation", "Automation Build", "Integration"],
    color: "from-green-600 to-green-500"
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description: "We launch your campaigns and continuously optimize for maximum ROI",
    features: ["Campaign Launch", "Performance Monitoring", "A/B Testing", "ROI Optimization"],
    color: "from-amber-600 to-amber-500"
  },
  {
    step: "04",
    title: "Scale & Grow",
    description: "We scale successful campaigns and expand to new channels for explosive growth",
    features: ["Campaign Scaling", "New Channel Expansion", "Advanced Automation", "Growth Acceleration"],
    color: "from-red-600 to-green-600"
  }
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              Our Proven Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From strategy to execution, we follow a proven 4-step process that delivers results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div 
              key={i}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-sm mb-6`}>
                    Step {step.step}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Arrow connector */}
              {i < processSteps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-red-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}