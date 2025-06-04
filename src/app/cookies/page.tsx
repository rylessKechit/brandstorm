import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Cookie, Settings, BarChart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy - How We Use Cookies',
  description: 'Learn about how VIZIONAIRE uses cookies and similar technologies to improve your browsing experience.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
                <Cookie className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Cookie Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn how we use cookies and similar technologies to enhance your browsing experience and improve our services.
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
              
              {/* What Are Cookies */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Cookie className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-black text-white">What Are Cookies?</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.</p>
                  
                  <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-orange-300 mb-3">Key Points:</h3>
                    <ul className="list-disc list-inside space-y-2 text-orange-300">
                      <li>Cookies are safe and cannot access your personal files</li>
                      <li>They help improve website functionality and user experience</li>
                      <li>You can control and delete cookies through your browser settings</li>
                      <li>Some features may not work properly without certain cookies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Types of Cookies We Use */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Settings className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl font-black text-white">Types of Cookies We Use</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3">🔧 Essential Cookies</h3>
                    <p className="text-gray-300 mb-3">These cookies are necessary for the website to function properly and cannot be switched off.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 text-sm">
                      <li>Session management and security</li>
                      <li>Load balancing and performance</li>
                      <li>GDPR consent preferences</li>
                      <li>Basic website functionality</li>
                    </ul>
                    <div className="mt-3 text-xs text-gray-400">
                      <strong>Duration:</strong> Session or up to 1 year
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3">📊 Analytics Cookies</h3>
                    <p className="text-gray-300 mb-3">Help us understand how visitors interact with our website by collecting anonymous information.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 text-sm">
                      <li>Google Analytics (traffic analysis)</li>
                      <li>Page views and bounce rates</li>
                      <li>User journey tracking</li>
                      <li>Performance monitoring</li>
                    </ul>
                    <div className="mt-3 text-xs text-gray-400">
                      <strong>Duration:</strong> Up to 2 years
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3">🎯 Marketing Cookies</h3>
                    <p className="text-gray-300 mb-3">Used to deliver personalized advertisements and track campaign effectiveness.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 text-sm">
                      <li>Facebook Pixel and Google Ads</li>
                      <li>Retargeting and remarketing</li>
                      <li>Campaign performance tracking</li>
                      <li>Social media integration</li>
                    </ul>
                    <div className="mt-3 text-xs text-gray-400">
                      <strong>Duration:</strong> Up to 1 year
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3">⚙️ Functional Cookies</h3>
                    <p className="text-gray-300 mb-3">Enable enhanced functionality and personalization features.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 text-sm">
                      <li>Language and region preferences</li>
                      <li>Theme and display settings</li>
                      <li>Form auto-fill data</li>
                      <li>Live chat functionality</li>
                    </ul>
                    <div className="mt-3 text-xs text-gray-400">
                      <strong>Duration:</strong> Up to 1 year
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Third-Party Services</h2>
                <div className="space-y-6 text-gray-300">
                  <p>We use several third-party services that may set their own cookies:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <h4 className="font-bold text-blue-300 mb-2">Google Services</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Google Ads</li>
                        <li>• Google Tag Manager</li>
                        <li>• reCAPTCHA</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <h4 className="font-bold text-purple-300 mb-2">Social Media</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Facebook Pixel</li>
                        <li>• LinkedIn Insight Tag</li>
                        <li>• Twitter Analytics</li>
                        <li>• Instagram Tracking</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <h4 className="font-bold text-green-300 mb-2">Communication</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Live Chat Widget</li>
                        <li>• Email Tracking</li>
                        <li>• Call Tracking</li>
                        <li>• Support System</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                      <h4 className="font-bold text-orange-300 mb-2">Performance</h4>
                      <ul className="text-sm space-y-1">
                        <li>• CDN Services</li>
                        <li>• Speed Monitoring</li>
                        <li>• Error Tracking</li>
                        <li>• A/B Testing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Managing Your Cookies */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Settings className="w-8 h-8 text-green-400" />
                  <h2 className="text-3xl font-black text-white">Managing Your Cookie Preferences</h2>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Browser Settings</h3>
                    <p className="mb-4">You can control cookies through your browser settings. Here's how:</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="font-bold text-white mb-2">Chrome</h4>
                        <ol className="text-sm space-y-1 list-decimal list-inside">
                          <li>Settings → Privacy and Security</li>
                          <li>Cookies and other site data</li>
                          <li>Choose your preferences</li>
                        </ol>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="font-bold text-white mb-2">Firefox</h4>
                        <ol className="text-sm space-y-1 list-decimal list-inside">
                          <li>Options → Privacy & Security</li>
                          <li>Cookies and Site Data</li>
                          <li>Manage preferences</li>
                        </ol>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="font-bold text-white mb-2">Safari</h4>
                        <ol className="text-sm space-y-1 list-decimal list-inside">
                          <li>Preferences → Privacy</li>
                          <li>Cookies and website data</li>
                          <li>Adjust settings</li>
                        </ol>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="font-bold text-white mb-2">Edge</h4>
                        <ol className="text-sm space-y-1 list-decimal list-inside">
                          <li>Settings → Cookies and site permissions</li>
                          <li>Cookies and site data</li>
                          <li>Configure options</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                    <h4 className="text-xl font-bold text-yellow-300 mb-3">⚠️ Important Note</h4>
                    <p className="text-yellow-300">Disabling certain cookies may affect website functionality. Some features like contact forms, live chat, and personalized content may not work properly without cookies.</p>
                  </div>
                </div>
              </div>

              {/* Opt-Out Options */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Opt-Out Options</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Analytics Opt-Out</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a></li>
                      <li><a href="https://www.google.com/settings/ads" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener">Google Ads Settings</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Advertising Opt-Out</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><a href="https://www.facebook.com/ads/preferences" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener">Facebook Ad Preferences</a></li>
                      <li><a href="http://optout.aboutads.info/" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener">Digital Advertising Alliance Opt-out</a></li>
                      <li><a href="https://www.youronlinechoices.com/" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener">Your Online Choices (EU)</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile Devices */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Mobile Devices</h2>
                <div className="space-y-4 text-gray-300">
                  <p>On mobile devices, you can manage tracking preferences through your device settings:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-3">📱 iOS (iPhone/iPad)</h4>
                      <ol className="text-sm space-y-2 list-decimal list-inside">
                        <li>Settings → Privacy & Security</li>
                        <li>Tracking → Allow Apps to Request to Track</li>
                        <li>Apple Advertising → Personalized Ads</li>
                        <li>Manage per-app tracking permissions</li>
                      </ol>
                    </div>
                    
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-3">🤖 Android</h4>
                      <ol className="text-sm space-y-2 list-decimal list-inside">
                        <li>Settings → Privacy</li>
                        <li>Ads → Opt out of Ads Personalization</li>
                        <li>Google → Ads</li>
                        <li>Reset advertising ID if needed</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl font-black text-white">Data Protection & Security</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>We take the security of your data seriously and implement several measures to protect cookie data:</p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Encryption:</strong> All data transmission is encrypted using SSL/TLS</li>
                    <li><strong>Secure Storage:</strong> Cookies are stored securely with appropriate access controls</li>
                    <li><strong>Data Minimization:</strong> We only collect necessary data for legitimate purposes</li>
                    <li><strong>Regular Audits:</strong> Periodic review of cookie usage and data practices</li>
                    <li><strong>Vendor Management:</strong> Third-party services are vetted for security compliance</li>
                  </ul>
                </div>
              </div>

              {/* Legal Compliance */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Legal Compliance</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">GDPR Compliance</h3>
                    <p className="mb-4">We comply with the EU General Data Protection Regulation (GDPR) by:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Obtaining explicit consent for non-essential cookies</li>
                      <li>Providing clear information about cookie usage</li>
                      <li>Allowing easy withdrawal of consent</li>
                      <li>Implementing data protection by design</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Other Regulations</h3>
                    <p className="mb-4">We also comply with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>CCPA:</strong> California Consumer Privacy Act</li>
                      <li><strong>ePrivacy:</strong> EU ePrivacy Directive</li>
                      <li><strong>UAE Data Protection:</strong> Local data protection laws</li>
                      <li><strong>PIPEDA:</strong> Canadian privacy legislation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Updates to Policy */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Updates to This Policy</h2>
                <div className="text-gray-300">
                  <p className="mb-4">We may update this cookie policy from time to time to reflect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Changes in our cookie usage</li>
                    <li>New legal requirements</li>
                    <li>Updates to third-party services</li>
                    <li>Improvements to our website</li>
                  </ul>
                  <p className="mt-4">We will notify you of significant changes by posting the updated policy on our website and updating the "last modified" date.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-6">Questions About Cookies?</h2>
                <div className="text-gray-300">
                  <p className="mb-4">If you have any questions about our use of cookies, please contact us:</p>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@vizionaire.com</p>
                      <p><strong>Phone:</strong> +971 4 123 4567</p>
                      <p><strong>Address:</strong> DIFC, Dubai, UAE</p>
                      <p><strong>Response Time:</strong> Within 2 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Consent Management */}
              <div className="mb-16">
                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">🍪 Manage Your Cookie Preferences</h3>
                  <p className="text-gray-300 mb-4">You can change your cookie preferences at any time by clicking the button below. Your preferences will be saved and applied to your future visits.</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                    Cookie Settings
                  </button>
                  <p className="text-sm text-gray-400 mt-2">Note: This is a demo button. In production, this would open your cookie consent manager.</p>
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