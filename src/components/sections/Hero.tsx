'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Play, Phone, Award, CheckCircle, TrendingUp, Users, BarChart3 } from 'lucide-react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCallClick = () => {
    const message = encodeURIComponent('Bonjour ! Je souhaite planifier une consultation gratuite pour discuter de mes besoins en marketing digital. Quand seriez-vous disponible ?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <section className="bg-white pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></span>
              🇦🇪 Agence #1 à Dubaï & région MENA
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-serif">
              Révolutionnez votre
              <span className="block text-red-600 mt-2">Marketing Digital</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              L'agence qui transforme les entreprises du <span className="font-semibold text-amber-600">Moyen-Orient</span> avec 
              des stratégies digitales sur-mesure et des <span className="font-semibold text-red-600">résultats garantis</span> en 90 jours.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleCallClick}
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Consultation Gratuite
              </button>
              
              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Voir nos résultats
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Setup en 48 heures</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">ROI Garanti 90 jours</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Spécialistes MENA</span>
              </div>
            </div>
          </div>
          
          {/* Visual Dashboard */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            {/* Main Dashboard Card */}
            <div className="bg-gradient-to-br from-red-600 via-red-500 to-amber-500 rounded-3xl p-8 text-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Analytics Dashboard</h3>
                  <p className="text-red-100">Performance en temps réel</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 mb-4" />
                  <div className="text-3xl font-bold mb-1">+300%</div>
                  <div className="text-red-100 text-sm">ROI Moyen</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300">
                  <Users className="w-8 h-8 mb-4" />
                  <div className="text-3xl font-bold mb-1">48h</div>
                  <div className="text-red-100 text-sm">Setup Rapide</div>
                </div>
              </div>
              
              {/* Revenue Chart */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6" />
                    <span className="font-bold text-lg">Croissance Revenue</span>
                  </div>
                  <span className="text-green-300 text-sm font-bold bg-green-500/20 px-3 py-1 rounded-full">
                    +250%
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-100">Jan - Mars</span>
                    <span className="font-semibold">125,000 AED</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-300 h-3 rounded-full w-3/4 transition-all duration-1000"></div>
                  </div>
                  <div className="text-xs text-red-100">
                    Objectif dépassé de 75%
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              <div className="text-center">
                <div className="text-lg font-black">2024</div>
                <div className="text-xs">Fondée</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <div className="text-sm font-bold">24/7</div>
                <div className="text-xs">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="text-center pb-8">
        <ChevronDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
      </div>
    </section>
  )
}