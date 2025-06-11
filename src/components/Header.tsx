'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'À propos', href: '/about' },
  { name: 'Tarifs', href: '/pricing' },
  { name: 'Réalisations', href: '/demo' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleCallClick = () => {
    const message = encodeURIComponent('Bonjour ! Je souhaite planifier un appel pour discuter de vos services de marketing digital. Quand seriez-vous disponible ?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Bonjour ! J\'aimerais en savoir plus sur vos services de marketing digital.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-sm'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 relative z-60"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <img 
                  src="/logo.png" 
                  alt="VIZIONAIRE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
                VIZIONAIRE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 hover:text-red-600 transition-all duration-300 font-medium text-[15px] group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-red-600 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50"
                title="Appel WhatsApp"
              >
                <Phone className="w-4 h-4" />
                <span className="text-[14px] font-semibold">+971 56 566 3377</span>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-[14px]"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>

              <Link
                href="/contact"
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg hover:shadow-xl text-[14px]"
              >
                Consultation Gratuite
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-300 relative z-60 rounded-lg hover:bg-gray-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out',
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div 
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        <div className="relative z-60 h-full max-w-sm ml-auto bg-white shadow-2xl">
          <div className="flex justify-between items-center h-18 px-6 border-b border-gray-100">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-xl font-bold text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 relative">
                <img 
                  src="/logo.png" 
                  alt="VIZIONAIRE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              VIZIONAIRE
            </Link>
            
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-red-600 transition-colors duration-300 rounded-lg hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-8">
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 space-y-3">
              <button
                onClick={() => {
                  handleCallClick()
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-base transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Demander un Appel
              </button>

              <button
                onClick={() => {
                  handleWhatsAppClick()
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-base transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Message WhatsApp
              </button>

              <Link
                href="/contact"
                className="block w-full text-center py-3 bg-red-600 text-white rounded-lg font-semibold text-base transition-all duration-300 hover:bg-red-700"
                onClick={() => setIsOpen(false)}
              >
                Consultation Gratuite
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-2 font-medium">🇦🇪 Fondée en 2024 à Dubaï</p>
                <p className="text-gray-500 text-sm">IA & Analytics • ROI Garanti 90 jours • Setup 48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}