// src/components/sections/Dashboard.tsx
'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react'

const metrics = [
  { icon: TrendingUp, label: "Setup Time", value: "48h", change: "Fast Launch" },
  { icon: Users, label: "ROI Guarantee", value: "90 Days", change: "Guaranteed" },
  { icon: DollarSign, label: "Contract Type", value: "Flexible", change: "No Lock-in" },
  { icon: Target, label: "Support", value: "24/7", change: "Always Available" }
]

export function Dashboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Powerful Analytics Dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights and data-driven decisions at your fingertips
          </p>
        </div>

        <div className="relative">
          {/* Dashboard Preview */}
          <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, i) => {
                const Icon = metric.icon
                return (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8 text-pink-400" />
                      <span className="text-green-400 text-sm font-bold">{metric.change}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Chart Placeholder */}
            <div className="h-64 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <div className="text-white font-bold text-xl">Revenue Growth Chart</div>
                <div className="text-gray-400">Interactive analytics coming soon</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse" />
        </div>
      </div>
    </section>
  )
}