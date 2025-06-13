'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react'

export function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to learn more about VIZIONAIRE services.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I would like to schedule a consultation call.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent mb-6">
              VIZIONAIRE
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              The leading digital marketing agency in the Middle East, transforming businesses 
              with AI-powered strategies and guaranteed results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>DIFC, Dubai, UAE 🇦🇪</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+971 56 566 3377</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>hello@vizionaire.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </button>
              <button
                onClick={handleCallClick}
                className="flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white rounded-lg font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Schedule Call
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#web-development" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Web Development
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Social Media
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Marketing Automation
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  SEO & Content
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services#paid-advertising" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Paid Advertising
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  About Us
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Pricing
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Case Studies
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Contact
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Careers
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Privacy Policy
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Terms of Service
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Cookie Policy
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
            
            {/* Business Hours */}
            <div>
              <h4 className="text-white font-semibold mb-3">Business Hours</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Sunday - Thursday</p>
                <p className="text-white font-medium">9:00 AM - 6:00 PM GST</p>
                <p className="text-xs mt-2">🕐 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get the latest insights
              </h3>
              <p className="text-gray-300 text-lg">
                Subscribe to our newsletter for digital marketing tips, industry trends, and exclusive offers.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-lg font-medium hover:from-red-700 hover:to-amber-700 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 VIZIONAIRE. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com/company/vizionaire-dubai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com/vizionaire.dubai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://twitter.com/vizionaireuae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                WhatsApp
              </button>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                🏆 Google Partner
              </span>
              <span className="flex items-center gap-1">
                ⭐ Meta Certified
              </span>
              <span className="flex items-center gap-1">
                🇦🇪 UAE Licensed
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}