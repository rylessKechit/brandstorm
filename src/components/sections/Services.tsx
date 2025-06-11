'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

interface ServiceFeature {
  feature: string
}

interface Service {
  icon: string
  title: string
  subtitle: string
  features: ServiceFeature[]
  startingPrice: string
  popular?: boolean
}

const services: Service[] = [
  {
    icon: "🌐",
    title: "Développement Web",
    subtitle: "Sites & E-commerce Performants",
    features: [
      { feature: "Design responsive sur-mesure" },
      { feature: "Plateformes E-commerce (Shopify, WooCommerce)" },
      { feature: "Optimisation SEO intégrée" },
      { feature: "Performance & vitesse optimisées" },
      { feature: "Approche mobile-first" },
      { feature: "Intégration analytics & CRM" }
    ],
    startingPrice: "À partir de 11,000 AED"
  },
  {
    icon: "📱",
    title: "Réseaux Sociaux",
    subtitle: "Dominez Chaque Plateforme",
    features: [
      { feature: "Stratégie de contenu complète" },
      { feature: "Gestion Instagram, LinkedIn, TikTok, Facebook" },
      { feature: "Partenariats influenceurs" },
      { feature: "Gestion de communauté" },
      { feature: "Publicités sur réseaux sociaux" },
      { feature: "Analytics & reporting détaillé" }
    ],
    startingPrice: "À partir de 5,500 AED",
    popular: true
  },
  {
    icon: "🤖",
    title: "Marketing Automation",
    subtitle: "Scalez Sans Limites",
    features: [
      { feature: "Séquences email automatisées" },
      { feature: "Nurturing de leads avancé" },
      { feature: "Intégration & setup CRM" },
      { feature: "Développement de chatbots" },
      { feature: "Automatisation des tunnels de vente" },
      { feature: "Campagnes comportementales" }
    ],
    startingPrice: "À partir de 7,350 AED"
  }
]

export function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Nos Services <span className="text-red-600">Essentiels</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Des solutions complètes pour transformer votre présence digitale et 
            <span className="font-semibold text-red-600"> générer une croissance mesurable</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service: Service, i: number) => (
            <div 
              key={i}
              className={`relative bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${service.popular ? 'ring-2 ring-red-600 bg-gradient-to-br from-red-50 to-amber-50' : ''}`}
              style={{
                transitionDelay: `${i * 200}ms`,
              }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    Le plus populaire
                  </div>
                </div>
              )}
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 font-serif">{service.title}</h3>
                    <p className="text-gray-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((item: ServiceFeature, j: number) => (
                    <li key={j} className="text-gray-700 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item.feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm text-gray-500 mb-2 font-medium">Tarif de départ</div>
                  <div className="text-2xl font-bold text-gray-900 mb-6">{service.startingPrice}</div>
                  
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 ${
                      service.popular 
                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Link to full services page */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg font-medium">
            Vous cherchez du SEO, de la Publicité Payante ou des Analytics ?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-105"
          >
            Voir Tous Nos Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}