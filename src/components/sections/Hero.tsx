'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Play, ArrowRight, Phone } from 'lucide-react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)`,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        
        {/* Floating 3D orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'linear-gradient(135deg, #ff0080, #7928ca)',
            transform: `translate3d(${mousePosition.x * 2}px, ${mousePosition.y * 2}px, 0) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full opacity-10"
          style={{
            background: 'linear-gradient(135deg, #00dfd8, #0070f3)',
            transform: `translate3d(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px, 0) rotateX(${-mousePosition.y}deg) rotateY(${-mousePosition.x}deg)`,
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Main Content */}
      <div 
        ref={heroRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              🚀 Now serving Dubai & MENA region
            </div>
          </div>

          {/* 3D Title with depth */}
          <div className="relative mb-8">
            <h1 
              className="text-6xl md:text-8xl font-black leading-tight relative z-10"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <span 
                className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
                style={{
                  transform: 'translateZ(30px)',
                  textShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
                }}
              >
                DIGITAL
              </span>
              <span 
                className="block text-white mt-2"
                style={{
                  transform: 'translateZ(60px)',
                  textShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                }}
              >
                REVOLUTION
              </span>
            </h1>
            
            {/* 3D shadow layer */}
            <h1 
              className="absolute inset-0 text-6xl md:text-8xl font-black leading-tight opacity-20 blur-sm"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) translateZ(-50px)`,
                color: '#333'
              }}
            >
              <span className="block">DIGITAL</span>
              <span className="block mt-2">REVOLUTION</span>
            </h1>
          </div>
          
          <div 
            className="relative z-10 max-w-4xl mx-auto"
            style={{transform: `translateZ(20px)`}}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              🚀 The agency revolutionizing digital marketing in the <span className="text-yellow-400 font-bold">Middle East</span>
              <br />
              AI Analytics + Automation + <span className="text-pink-400 font-bold">GUARANTEED ROI</span>!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white font-bold text-lg transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-pink-500/30"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
                  boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Get Free Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              
              <Link
                href="/demo"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Our Work
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                ROI Guaranteed
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                #1 in MENA region
              </div>
            </div>
          </div>
        </div>

        {/* 3D scroll indicator */}
        <div 
          className={`absolute bottom-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `translateY(${Math.sin(Date.now() * 0.002) * 10}px)`,
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          <ChevronDown className="w-8 h-8 text-pink-400" />
        </div>
      </div>
    </section>
  )
}