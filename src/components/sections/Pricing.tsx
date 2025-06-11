'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, Star, Zap, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "299",
    period: "mois",
    description: "Parfait pour les petites entreprises qui débutent",
    features: [
      "Gestion Réseaux Sociaux (2 plateformes)",
      "Développement Site Web Basique", 
      "Configuration Email Marketing",
      "Rapport Analytics Mensuel",
      "Support Chat en Direct"
    ],
    popular: false,
    badge: "Idéal pour démarrer",
    color: "border-gray-200 hover:border-gray-300"
  },
  {
    name: "Professional", 
    price: "699",
    period: "mois",
    description: "Pour les entreprises en croissance qui veulent plus",
    features: [
      "Tout du plan Starter",
      "Gestion Réseaux Sociaux (5 plateformes)",
      "Site Web Avancé + E-commerce",
      "Automatisation Marketing",
      "Optimisation SEO",
      "Gestion Publicité Payante",
      "Appels Stratégie Hebdomadaires",
      "Support Prioritaire"
    ],
    popular: true,
    badge: "Le plus populaire",
    color: "border-red-600 ring-2 ring-red-600"
  },
  {
    name: "Enterprise",
    price: "1499", 
    period: "mois",
    description: "Pour les entreprises établies prêtes à scaler",
    features: [
      "Tout du plan Professional",
      "Gestion Plateformes Illimitées",
      "Développement Sur-Mesure",
      "Analytics IA Avancés",
      "Account Manager Dédié",
      "Support Téléphone 24/7",
      "Intégrations Personnalisées",
      "Solutions White-label"
    ],
    popular: false,
    badge: "Maximum ROI",
    color: "border-amber-200 hover:border-amber-300"
  }
]

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="pricing" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Plans d'<span className="text-red-600">Investissement</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choisissez le plan parfait pour votre croissance. Tous les plans incluent setup, 
            stratégie et optimisation continue. <span className="font-semibold text-amber-600">Prix en AED</span>.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Mensuel</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-8 bg-red-600' : 'translate-x-0'}`} />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annuel <span className="text-green-600 font-bold">(Économisez 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-700 transform hover:-translate-y-2 border-2 ${plan.color} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${plan.popular ? 'lg:-mt-8 shadow-2xl' : ''}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {isAnnual ? Math.round(parseInt(plan.price) * 0.8 * 3.67) : Math.round(parseInt(plan.price) * 3.67)} AED
                    </span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    ${isAnnual ? Math.round(parseInt(plan.price) * 0.8) : plan.price} USD
                  </div>
                  {isAnnual && (
                    <div className="text-green-600 text-sm mt-2 font-semibold">
                      Économisez {Math.round(parseInt(plan.price) * 0.2 * 12 * 3.67)} AED annuellement
                    </div>
                  )}
                </div>
                
                {!plan.popular && (
                  <div className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                    {plan.badge}
                  </div>
                )}
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Link
                href="/contact"
                className={`block w-full py-4 px-6 text-center font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Commencer Maintenant
                  {plan.popular && <Zap className="w-4 h-4" />}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
              Besoin d'une Solution Sur-Mesure ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nous créons des packages personnalisés pour les besoins uniques. 
              Contactez-nous pour un devis entreprise et une stratégie adaptée.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Devis Personnalisé
              </Link>
              <Link 
                href="/demo"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                Voir Nos Résultats
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                Consultation gratuite incluse
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                Stratégie sur-mesure
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                Aucun contrat long terme
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}