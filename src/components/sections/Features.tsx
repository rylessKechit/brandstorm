'use client'

import { useState, useEffect } from 'react'
import { Target, TrendingUp, Globe, Zap } from 'lucide-react'

const features = [
  { 
    icon: Target, 
    title: "AI Analytics", 
    desc: "Artificial intelligence to optimize your campaigns", 
    color: "from-pink-500 to-rose-600" 
  },
  { 
    icon: TrendingUp, 
    title: "Automation", 
    desc: "Automated workflows that convert", 
    color: "from-purple-500 to-indigo-600" 
  },
  { 
    icon: Globe, 
    title: "Multi-Channel", 
    desc: "Omnichannel campaign management", 
    color: "from-cyan-500 to-blue-600" 
  },
  { 
    icon: Zap, 
    title: "Real-Time", 
    desc: "Live analytics and real-time optimization", 
    color: "from-yellow-500 to-orange-600" 
  }
]

export function Features() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-5xl font-black text-center mb-16"
          style={{
            transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg)`,
          }}
        >
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            PREMIUM FEATURES
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div 
                key={i}
                className={`group relative transition-all duration-700 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{
                  transitionDelay: `${i * 200}ms`,
                  perspective: '1000px'
                }}
              >
                <div 
                  className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                  style={{
                    transform: `rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    style={{transform: 'translateZ(-10px)'}}
                  ></div>
                  
                  <div className="relative z-10" style={{transform: 'translateZ(20px)'}}>
                    <div className="text-pink-400 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}