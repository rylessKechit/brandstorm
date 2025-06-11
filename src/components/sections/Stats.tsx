'use client'

import { useState, useEffect } from 'react'

const stats = [
  { 
    number: "2024", 
    label: "Fondée à Dubaï", 
    icon: "🏢", 
    description: "Nouvelle agence avec une vision moderne",
    color: "from-red-600 to-red-500" 
  },
  { 
    number: "48h", 
    label: "Temps de Setup", 
    icon: "⚡", 
    description: "Démarrage ultra-rapide garanti",
    color: "from-amber-600 to-amber-500" 
  },
  { 
    number: "90 Jours", 
    label: "Garantie ROI", 
    icon: "💰", 
    description: "Résultats garantis ou remboursé",
    color: "from-green-600 to-green-500" 
  },
  { 
    number: "24/7", 
    label: "Support Disponible", 
    icon: "🚀", 
    description: "Assistance permanente incluse",
    color: "from-blue-600 to-blue-500" 
  },
  { 
    number: "MENA", 
    label: "Spécialistes Région", 
    icon: "🌍", 
    description: "Expertise des marchés locaux",
    color: "from-purple-600 to-purple-500" 
  },
  { 
    number: "IA", 
    label: "Technologie Avancée", 
    icon: "🤖", 
    description: "Intelligence artificielle intégrée",
    color: "from-indigo-600 to-indigo-500" 
  }
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background with Dubai colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-amber-500 to-red-700"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 to-transparent"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
            Pourquoi Faire Confiance à <span className="text-amber-200">VIZIONAIRE</span>
          </h2>
          <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
            Fondée en 2024 avec une technologie de pointe et une expertise MENA inégalée
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`text-center p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-6xl mb-6">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 font-serif">{stat.number}</div>
              <div className="text-amber-200 font-semibold text-lg mb-3">{stat.label}</div>
              <div className="text-red-100 text-sm leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4 font-serif">
              Prêt à Transformer Votre Business ?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui font déjà confiance à notre expertise pour dominer leurs marchés
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Consultation Gratuite
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Voir Nos Résultats
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-red-100">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Consultation gratuite sans engagement
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                Stratégie personnalisée incluse
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Résultats garantis en 90 jours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}