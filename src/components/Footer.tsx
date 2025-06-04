'use client'

import Link from 'next/link'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'

export function Footer(): JSX.Element {
  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I would like to schedule a call to discuss your digital marketing services. When would be a good time?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about your digital marketing services.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:hello@brandstorm.com?subject=Inquiry&body=Hello, I would like to learn more about your services.', '_self')
  }

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black text-gradient">
              BRANDSTORM
            </Link>
            <p className="text-gray-400 mt-2 mb-6">
              Revolutionizing digital marketing in the Middle East
            </p>
            
            {/* Contact Actions */}
            <div className="space-y-3">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-3 w-full sm:w-auto px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Request Call (+971 56 566 3377)
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 w-full sm:w-auto px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Direct
              </button>
              
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 w-full sm:w-auto px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                hello@brandstorm.com
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services#web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services#social-media" className="hover:text-white transition-colors">Social Media</Link></li>
              <li><Link href="/services#automation" className="hover:text-white transition-colors">Automation</Link></li>
              <li><Link href="/services#seo" className="hover:text-white transition-colors">SEO</Link></li>
              <li><Link href="/services#paid-advertising" className="hover:text-white transition-colors">Paid Advertising</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
            
            {/* Location */}
            <div className="mt-6">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">DIFC, Dubai, UAE</span>
              </div>
              <p className="text-xs text-gray-500">Hours: Sun-Thu 9AM-6PM GST</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-gray-400 text-center md:text-left">
            <p className="mb-2">🌟 Made with ❤️ in Dubai</p>
            <p>© 2025 BRANDSTORM - All rights reserved</p>
            <p className="text-xs mt-2 opacity-70">Powered by ITI SERVICES</p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="text-center">
            <p className="text-green-300 font-medium mb-2">🚨 24/7 Emergency Support Available</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleCallClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                Request Emergency Call
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-300 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp 24/7
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}