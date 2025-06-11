'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: "Ahmed K.",
    company: "Fondateur Startup Tech",
    avatar: "👨‍💼",
    rating: 5,
    text: "L'approche IA de VIZIONAIRE et leur expertise MENA est exactement ce dont nous avions besoin. Équipe professionnelle avec de vrais résultats.",
    result: "+250% leads qualifiés"
  },
  {
    name: "Sarah M.", 
    company: "Propriétaire E-commerce",
    avatar: "👩‍💼",
    rating: 5,
    text: "Enfin une équipe qui comprend le marché du Moyen-Orient. Leur garantie 90 jours montre une vraie confiance dans leur travail.",
    result: "+180% revenus en ligne"
  },
  {
    name: "Omar H.",
    company: "Manager Chaîne Restaurants",
    avatar: "👨‍💻",
    rating: 5,
    text: "Le setup était incroyablement rapide et l'équipe est toujours disponible. J'adore l'approche sans contrat long terme.",
    result: "+320% commandes online"
  }
]

export function TestimonialsMini() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Ce Que Disent Nos <span className="text-red-600">Clients</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La confiance de centaines d'entreprises à travers la région MENA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-red-600 mb-6" />
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed font-medium italic">
                "{testimonial.text}"
              </p>
              
              {/* Result Badge */}
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                {testimonial.result}
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-3xl p-8 lg:p-12 border border-red-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
                  Plus de <span className="text-red-600">500+ Entreprises</span> Nous Font Confiance
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  De la startup à la grande entreprise, découvrez comment nous avons transformé 
                  leur présence digitale avec des résultats mesurables et durables.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold transition-colors duration-300"
                >
                  Voir Plus de Témoignages
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm font-medium">Clients Satisfaits</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
                  <div className="text-gray-600 text-sm font-medium">Note Moyenne</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                  <div className="text-gray-600 text-sm font-medium">ROI Moyen</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                  <div className="text-gray-600 text-sm font-medium">Fondée</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}