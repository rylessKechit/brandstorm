'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
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
    const message = encodeURIComponent('Hello! I would like to schedule a call to discuss your digital marketing services. When would be a good time?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about your digital marketing services.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 relative z-60"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
                {/* Remplacez 'logo-placeholder.png' par le chemin vers votre logo */}
                <img 
                  src="/logo.png" 
                  alt="VIZIONAIRE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-red-600 via-green-600 to-amber-500 bg-clip-text text-transparent">
                VIZIONAIRE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-green-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                title="WhatsApp Call"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call</span>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </button>

              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300 relative z-60"
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
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        
        <div className="relative z-60 h-full">
          <div className="flex justify-between items-center h-16 px-6 border-b border-white/10">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-xl font-black bg-gradient-to-r from-red-600 via-green-600 to-amber-500 bg-clip-text text-transparent"
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
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-8">
            <nav className="space-y-6">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-2xl font-bold text-white hover:text-red-400 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-12 space-y-4">
              <button
                onClick={() => {
                  handleCallClick()
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Request Call via WhatsApp
              </button>

              <button
                onClick={() => {
                  handleWhatsAppClick()
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Message
              </button>

              <Link
                href="/contact"
                className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Free Consultation
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-gray-400 mb-2">🇦🇪 Founded 2024 in Dubai & MENA region</p>
                <p className="text-gray-500 text-sm">AI Analytics + 90-Day ROI Guarantee + 48h Setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}