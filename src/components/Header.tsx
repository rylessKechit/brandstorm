'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Results', href: '/demo' },
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
    const message = encodeURIComponent('Hello! I would like to schedule a free consultation to discuss my digital marketing needs. When would you be available?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to learn more about your digital marketing services.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' 
            : 'bg-black/90 backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <img 
                  src="/logo.png" 
                  alt="VIZIONAIRE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-2xl font-medium bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">
                VIZIONAIRE
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-medium text-sm group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/5"
                title="Call WhatsApp"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+971 56 566 3377</span>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>

              <button
                onClick={handleCallClick}
                className="px-6 py-2 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-105 text-sm"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white hover:text-red-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
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
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div className="relative z-60 h-full max-w-sm ml-auto bg-black/95 backdrop-blur-xl border-l border-white/10">
          <div className="flex justify-between items-center h-16 px-6 border-b border-white/10">
            <div className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
              <div className="w-8 h-8 relative">
                <img 
                  src="/logo.png" 
                  alt="VIZIONAIRE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl font-medium bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">
                VIZIONAIRE
              </div>
            </div>
            
            <button
              type="button"
              className="p-2 text-white hover:text-red-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-8">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
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
                className="flex items-center gap-3 w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-base transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Request Call
              </button>

              <button
                onClick={() => {
                  handleWhatsAppClick()
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 w-full py-3 px-4 border-2 border-white/20 text-white rounded-lg font-medium text-base hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </button>

              <button
                onClick={() => {
                  handleCallClick()
                  setIsOpen(false)
                }}
                className="w-full py-3 px-4 bg-white text-black rounded-lg font-bold text-base hover:bg-gray-200 transition-all duration-300"
              >
                Free Consultation
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-center text-white/60 text-sm">
                <p>📞 +971 56 566 3377</p>
                <p className="mt-1">🇦🇪 Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}