import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Legal Terms & Conditions',
  description: 'Read VIZIONAIRE\'s terms of service and understand our legal terms and conditions.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                <Scale className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By using VIZIONAIRE, you agree to these terms.
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
              
              {/* Acceptance of Terms */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h2 className="text-3xl font-black text-white">Acceptance of Terms</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>By accessing and using VIZIONAIRE's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                  <p>If you do not agree to abide by the above, please do not use this service.</p>
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-blue-300"><strong>Important:</strong> These terms apply to all users, including browsers, vendors, customers, merchants, and contributors of content.</p>
                  </div>
                </div>
              </div>

              {/* Services Description */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-8 h-8 text-pink-400" />
                  <h2 className="text-3xl font-black text-white">Services Description</h2>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Digital Marketing Services</h3>
                    <p className="mb-4">VIZIONAIRE provides comprehensive digital marketing services including but not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Website development and optimization</li>
                      <li>Social media management and advertising</li>
                      <li>Search engine optimization (SEO)</li>
                      <li>Pay-per-click (PPC) advertising</li>
                      <li>Content creation and marketing</li>
                      <li>Marketing automation and analytics</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Service Availability</h3>
                    <p>We strive to provide uninterrupted service, but we cannot guarantee 100% uptime. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.</p>
                  </div>
                </div>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Client Responsibilities</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Content and Materials</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and up-to-date information</li>
                      <li>Ensure you have rights to all content provided</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Respond promptly to requests for information or approvals</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Prohibited Uses</h3>
                    <p className="mb-4">You agree not to use our services for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Any unlawful purpose or activity</li>
                      <li>Distributing harmful or malicious content</li>
                      <li>Infringing on intellectual property rights</li>
                      <li>Spamming or sending unsolicited communications</li>
                      <li>Competing directly with our business</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Payment Terms</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Pricing and Billing</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All prices are in USD unless otherwise specified</li>
                      <li>Monthly services are billed in advance</li>
                      <li>Project-based work requires 50% upfront payment</li>
                      <li>Late payments may incur additional fees</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Refund Policy</h3>
                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <ul className="list-disc list-inside space-y-2 ml-4 text-yellow-300">
                        <li>Monthly services: 7-day refund window</li>
                        <li>Custom projects: Refunds based on work completed</li>
                        <li>Ad spend: Non-refundable third-party costs</li>
                        <li>Setup fees: Non-refundable after work begins</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Intellectual Property</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Our Rights</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>VIZIONAIRE retains rights to our methodologies and processes</li>
                      <li>Our tools, software, and proprietary systems remain our property</li>
                      <li>We may use anonymized client data for case studies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Client Rights</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You retain ownership of your brand, content, and materials</li>
                      <li>Work product created specifically for you becomes your property</li>
                      <li>You grant us license to use your materials for service delivery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-black text-white">Limitation of Liability</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-bold text-red-300 mb-3">Important Disclaimers</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-red-300">
                      <li>Services are provided "as is" without warranties</li>
                      <li>We cannot guarantee specific marketing results or ROI</li>
                      <li>External platform changes may affect campaign performance</li>
                      <li>Maximum liability limited to fees paid in preceding 12 months</li>
                    </ul>
                  </div>
                  
                  <p>VIZIONAIRE shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.</p>
                </div>
              </div>

              {/* Performance and Results */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Performance and Results</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Our Commitment</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>We apply industry best practices and proven methodologies</li>
                      <li>Continuous monitoring and optimization of campaigns</li>
                      <li>Regular reporting and transparent communication</li>
                      <li>Dedicated support and strategic guidance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">External Factors</h3>
                    <p className="mb-4">Results may be influenced by factors beyond our control:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Market conditions and competition</li>
                      <li>Platform algorithm changes</li>
                      <li>Seasonal trends and economic factors</li>
                      <li>Client industry and target audience behavior</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Termination</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">By Client</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>30 days written notice for monthly services</li>
                      <li>Immediate termination with cause</li>
                      <li>Payment due for work completed</li>
                      <li>Data export assistance provided</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">By VIZIONAIRE</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>30 days notice for convenience</li>
                      <li>Immediate termination for breach of terms</li>
                      <li>Refund of unused prepaid fees</li>
                      <li>Transfer of work product and data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Confidentiality</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Mutual Protection</h3>
                    <p className="mb-4">Both parties agree to protect confidential information including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Business strategies and proprietary information</li>
                      <li>Customer data and analytics</li>
                      <li>Financial information and pricing</li>
                      <li>Technical processes and methodologies</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-purple-300">Confidentiality obligations survive termination of services for a period of 3 years.</p>
                  </div>
                </div>
              </div>

              {/* Force Majeure */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Force Majeure</h2>
                <div className="text-gray-300">
                  <p className="mb-4">Neither party shall be liable for any failure or delay in performance due to circumstances beyond reasonable control, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Natural disasters or extreme weather</li>
                    <li>Government actions or regulatory changes</li>
                    <li>Internet outages or platform disruptions</li>
                    <li>Pandemics or public health emergencies</li>
                    <li>War, terrorism, or civil unrest</li>
                  </ul>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Governing Law</h2>
                <div className="text-gray-300">
                  <p className="mb-4">These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be resolved through:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Good faith negotiation between parties</li>
                    <li>Mediation by an agreed neutral third party</li>
                    <li>Arbitration under UAE arbitration rules</li>
                    <li>Courts of Dubai as final resort</li>
                  </ol>
                </div>
              </div>

              {/* Modifications */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Modifications to Terms</h2>
                <div className="text-gray-300">
                  <p className="mb-4">We reserve the right to modify these terms at any time. Changes will be communicated through:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email notification to registered users</li>
                    <li>Website announcement and updated posting</li>
                    <li>In-service notifications for active clients</li>
                  </ul>
                  <p className="mt-4">Continued use of services after modifications constitutes acceptance of updated terms.</p>
                </div>
              </div>

              {/* Severability */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Severability</h2>
                <div className="text-gray-300">
                  <p>If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect. The unenforceable provision will be replaced with a valid provision that most closely matches the intent of the original.</p>
                </div>
              </div>

              {/* Entire Agreement */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Entire Agreement</h2>
                <div className="text-gray-300">
                  <p>These terms, together with any signed service agreements and privacy policy, constitute the entire agreement between you and VIZIONAIRE. They supersede all prior communications, proposals, and agreements relating to the subject matter.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Contact Information</h2>
                <div className="text-gray-300">
                  <p className="mb-4">For questions about these terms of service, contact us:</p>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="space-y-2">
                      <p><strong>Legal Department:</strong> legal@vizionaire.com</p>
                      <p><strong>Phone:</strong> +971 4 123 4567</p>
                      <p><strong>Address:</strong> DIFC, Dubai, UAE</p>
                      <p><strong>Business Hours:</strong> Sunday - Thursday, 9AM - 6PM GST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="mb-16">
                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Acknowledgment</h3>
                  <p className="text-gray-300">By using VIZIONAIRE's services, you acknowledge that you have read, understood, and agree to be bound by these terms of service. You also acknowledge that you have the authority to enter into this agreement on behalf of your organization.</p>
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