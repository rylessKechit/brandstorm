// PRIVACY PAGE - Updated UAE Colors
import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - How We Protect Your Data',
  description: 'Learn how VIZIONAIRE protects your personal information and respects your privacy.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-r from-red-600 to-green-600">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: January 1, 2025
            </div>
          </div>
        </section>

        {/* Content Sections with UAE Colors */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              
              {/* Information We Collect */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="w-8 h-8 text-red-500" />
                  <h2 className="text-3xl font-black text-white">Information We Collect</h2>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Personal Information</h3>
                    <p className="mb-4">When you contact us or use our services, we may collect:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Company name and business information</li>
                      <li>Project requirements and preferences</li>
                      <li>Communication history and correspondence</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Technical Information</h3>
                    <p className="mb-4">We automatically collect certain technical information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP address and browser information</li>
                      <li>Device type and operating system</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-8 h-8 text-green-500" />
                  <h2 className="text-3xl font-black text-white">How We Use Your Information</h2>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Service Delivery</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide and improve our marketing services</li>
                      <li>Communicate about projects and campaigns</li>
                      <li>Process payments and manage accounts</li>
                      <li>Offer customer support and assistance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Business Operations</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Analyze website performance and user behavior</li>
                      <li>Send relevant marketing communications (with consent)</li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Protect against fraud and security threats</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Lock className="w-8 h-8 text-amber-500" />
                  <h2 className="text-3xl font-black text-white">How We Protect Your Data</h2>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Security Measures</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>SSL encryption for all data transmission</li>
                      <li>Secure servers and regular security updates</li>
                      <li>Access controls and employee training</li>
                      <li>Regular security audits and monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Data Retention</h3>
                    <p className="mb-4">We retain your information only as long as necessary to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide our services and support</li>
                      <li>Comply with legal obligations</li>
                      <li>Resolve disputes and enforce agreements</li>
                      <li>Improve our services and user experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Contact Us</h2>
                <div className="text-gray-300">
                  <p className="mb-4">If you have questions about this privacy policy or our data practices, contact us:</p>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@vizionaire.com</p>
                      <p><strong>Phone:</strong> +971 4 123 4567</p>
                      <p><strong>Address:</strong> DIFC, Dubai, UAE</p>
                      <p><strong>Response Time:</strong> Within 30 days</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

// TERMS PAGE - Updated UAE Colors  
// [Contenu similaire avec les mêmes couleurs UAE appliquées]

// COOKIES PAGE - Updated UAE Colors
// [Contenu similaire avec les mêmes couleurs UAE appliquées]