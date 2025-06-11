'use client'

import { useState, useEffect } from 'react'
import { Target, TrendingUp, Globe, Zap, Shield, Lightbulb, Users, Award } from 'lucide-react'

const features = [
  { 
    icon: Target, 
    title: "Stratégie Sur-Mesure", 
    description: "Chaque stratégie est conçue spécifiquement pour votre marché, vos objectifs et votre audience cible dans la région MENA",
    color: "bg-red-50 text-red-600 border-red-200"
  },
  { 
    icon: Globe, 
    title: "Expertise MENA", 
    description: "Connaissance approfondie des marchés du Moyen-Orient, des comportements locaux et des tendances culturelles",
    color: "bg-amber-50 text-amber-600 border-amber-200"
  },
  { 
    icon: Zap, 
    title: "IA & Automation", 
    description: "Technologies de pointe et intelligence artificielle pour optimiser vos campagnes en temps réel et maximiser les résultats",
    color: "bg-green-50 text-green-600 border-green-200"
  },
  { 
    icon: Shield, 
    title: "Résultats Garantis", 
    description: "ROI positif garanti en 90 jours ou nous travaillons gratuitement jusqu'à l'atteinte de vos objectifs",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  { 
    icon: Lightbulb, 
    title: "Innovation Continue", 
    description: "Veille technologique permanente et adoption des dernières innovations pour maintenir votre avantage concurrentiel",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  { 
    icon: Users, 
    title: "Équipe Dédiée", 
    description: "Une équipe d'experts dédiée à votre compte avec un account manager personnel pour un suivi optimal",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200"
  },
  { 
    icon: TrendingUp, 
    title: "Croissance Mesurable", 
    description: "Reporting transparent avec KPIs clairs et analyses détaillées pour mesurer précisément votre retour sur investissement",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200"
  },
  { 
    icon: Award, 
    title: "Excellence Reconnue", 
    description: "Certifications officielles et reconnaissance en tant qu'agence leader dans le marketing digital au Moyen-Orient",
    color: "bg-orange-50 text-orange-600 border-orange-200"
  }
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Pourquoi Choisir <span className="text-red-600">VIZIONAIRE</span> ?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Une approche unique qui combine <span className="font-semibold text-amber-600">expertise locale</span> et 
            <span className="font-semibold text-red-600"> innovation technologique</span> pour des résultats exceptionnels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div 
                key={i}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} border-2 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">2024</div>
                <div className="text-gray-600 font-medium">Fondée à Dubaï</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">48h</div>
                <div className="text-gray-600 font-medium">Setup Garanti</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">90J</div>
                <div className="text-gray-600 font-medium">ROI Garanti</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-700 font-medium">
                🇦🇪 <span className="text-red-600 font-bold">Agence certifiée</span> et reconnue comme leader du marketing digital au Moyen-Orient
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}