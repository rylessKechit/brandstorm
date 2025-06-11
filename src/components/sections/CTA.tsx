'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, ArrowRight, Phone, CheckCircle, Star } from 'lucide-react'

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCallClick = () => {
    const message = encodeURIComponent('Bonjour ! Je suis prêt à transformer mon business avec VIZIONAIRE. Pouvons-nous planifier une consultation ?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm30 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-amber-500 mb-6 shadow-2xl">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-serif">
            <span className="text-white">Prêt à </span>
            <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">Dominer</span>
            <br />
            <span className="text-white">Votre Marché ?</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Rejoignez <span className="font-bold text-amber-400">500+ entreprises</span> qui écrasent déjà leur concurrence 
            avec nos stratégies de marketing digital <span className="font-bold text-red-400">éprouvées</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300">Setup en 48 heures</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300">ROI Garanti</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-gray-300">#1 Classé MENA</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={handleCallClick}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-500 rounded-xl text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Démarrer Votre Transformation
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <Link
              href="/demo"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              Voir Nos Études de Cas 🎯
            </Link>
          </div>

          {/* Bottom Features */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">48h</div>
                <div className="text-gray-300 font-medium">Setup Ultra-Rapide</div>
                <div className="text-gray-500 text-sm mt-1">Démarrage immédiat garanti</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">90J</div>
                <div className="text-gray-300 font-medium">Garantie ROI</div>
                <div className="text-gray-500 text-sm mt-1">Résultats ou remboursé</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
                <div className="text-gray-300 font-medium">Support Expert</div>
                <div className="text-gray-500 text-sm mt-1">Assistance permanente</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-lg">
                💡 <span className="text-white font-semibold">Consultation gratuite</span> • 
                <span className="text-white font-semibold"> Stratégie personnalisée</span> • 
                <span className="text-white font-semibold"> Résultats garantis</span>
              </p>
            </div>
          </div>

          {/* Final Trust Line */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              🇦🇪 Fait avec ❤️ à Dubaï par l'équipe VIZIONAIRE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}