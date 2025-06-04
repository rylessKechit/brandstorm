import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - How We Protect Your Data',
  description: 'Learn how BrandStorm protects your personal information and respects your privacy.',
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
              <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
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

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              
              {/* Information We Collect */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="w-8 h-8 text-blue-400" />
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
                  <FileText className="w-8 h-8 text-pink-400" />
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
                  <Lock className="w-8 h-8 text-green-400" />
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

              {/* Information Sharing */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Information Sharing</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in these limited circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> Trusted partners who assist in delivering our services</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Your Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request copies of your personal data</li>
                    <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, contact us at privacy@vizionaire.com</p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Provide personalized content and ads</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                  <p className="mt-4">You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
                </div>
              </div>

              {/* International Transfers */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">International Data Transfers</h2>
                <div className="text-gray-300">
                  <p>Your information may be processed and stored in countries outside your jurisdiction. We ensure appropriate safeguards are in place to protect your data during international transfers, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                    <li>Adequacy decisions by relevant authorities</li>
                    <li>Standard contractual clauses</li>
                    <li>Binding corporate rules</li>
                    <li>Certification schemes and codes of conduct</li>
                  </ul>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Children's Privacy</h2>
                <div className="text-gray-300">
                  <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
                </div>
              </div>

              {/* Changes to Policy */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Changes to This Policy</h2>
                <div className="text-gray-300">
                  <p>We may update this privacy policy periodically. We will notify you of significant changes by:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Providing notice through our services</li>
                  </ul>
                  <p className="mt-4">Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
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