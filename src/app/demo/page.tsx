import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Play, ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies & Portfolio - See Our Work',
  description: 'Explore our successful campaigns and case studies. See how we\'ve helped businesses achieve 300%+ ROI with our digital marketing strategies.',
}

const caseStudies = [
  {
    title: "E-commerce Fashion Brand",
    industry: "Fashion & Retail",
    challenge: "New brand struggling with online visibility and sales",
    solution: "Complete digital transformation with social media, influencer partnerships, and paid ads",
    results: [
      { metric: "Revenue Growth", value: "450%", period: "6 months" },
      { metric: "Instagram Followers", value: "0 → 85K", period: "8 months" },
      { metric: "Return on Ad Spend", value: "6.2x", period: "Average" }
    ],
    testimonial: "VIZIONAIRE transformed our unknown brand into a regional sensation. We went from zero to hero in less than a year!",
    client: "Layla Mohammed, Founder",
    image: "👗",
    color: "from-red-600 to-red-500"
  },
  {
    title: "Tech Startup Dubai",
    industry: "Technology",
    challenge: "B2B lead generation and brand awareness in competitive market",
    solution: "LinkedIn strategy, content marketing, and targeted B2B campaigns",
    results: [
      { metric: "Qualified Leads", value: "300%", period: "3 months" },
      { metric: "LinkedIn Engagement", value: "500%", period: "4 months" },
      { metric: "Demo Bookings", value: "250%", period: "Monthly" }
    ],
    testimonial: "Our pipeline went from empty to overflowing. The quality of leads is exceptional and our sales team can't keep up!",
    client: "Ahmed Al-Mansouri, CEO",
    image: "💻",
    color: "from-green-600 to-green-500"
  },
  {
    title: "Restaurant Chain",
    industry: "Food & Beverage",
    challenge: "Increase online orders and foot traffic across 5 locations",
    solution: "Local SEO, social media content, delivery app optimization, and geo-targeted ads",
    results: [
      { metric: "Online Orders", value: "320%", period: "4 months" },
      { metric: "Foot Traffic", value: "180%", period: "6 months" },
      { metric: "Social Engagement", value: "400%", period: "Monthly" }
    ],
    testimonial: "Every location is now profitable and we're expanding to 3 more cities. VIZIONAIRE made the impossible possible!",
    client: "Khalid Bin Rashid, Owner",
    image: "🍔",
    color: "from-amber-600 to-amber-500"
  },
  {
    title: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "Generate high-quality leads for luxury properties",
    solution: "Facebook & Google Ads, landing page optimization, and CRM automation",
    results: [
      { metric: "Property Sales", value: "200%", period: "5 months" },
      { metric: "Cost per Lead", value: "-60%", period: "Reduction" },
      { metric: "Conversion Rate", value: "8.5%", period: "Industry: 2%" }
    ],
    testimonial: "We've never seen such high-quality leads. Our closing rate doubled and our marketing costs went down significantly.",
    client: "Omar Khalil, Marketing Director",
    image: "🏠",
    color: "from-red-600 to-green-600"
  }
]

const portfolioItems = [
  {
    title: "Luxury Wellness Spa",
    type: "Website + Social Media",
    image: "🧘‍♀️",
    results: "400% increase in bookings"
  },
  {
    title: "Educational Platform",
    type: "Lead Generation",
    image: "📚",
    results: "180% more enrollments"
  },
  {
    title: "Fitness Center Chain",
    type: "Local SEO + Ads",
    image: "💪",
    results: "250% membership growth"
  },
  {
    title: "Luxury Car Dealership",
    type: "Digital Transformation",
    image: "🚗",
    results: "300% increase in test drives"
  },
  {
    title: "Beauty & Cosmetics",
    type: "Influencer + Paid Ads",
    image: "💄",
    results: "500% Instagram growth"
  },
  {
    title: "Home Services",
    type: "Google Ads + SEO",
    image: "🔧",
    results: "350% more inquiries"
  }
]

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-amber-900/10 to-green-900/20" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                Success Stories
              </span>
              <br />
              <span className="text-white">That Inspire</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Real businesses. Real results. See how we've helped companies across MENA 
              achieve explosive growth with our proven strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105">
                Get Similar Results
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-xl transition-all duration-300 hover:bg-white/20 flex items-center gap-2 justify-center">
                <Play className="w-5 h-5" />
                Watch Video Cases
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Detailed Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dive deep into our most successful campaigns and learn how we achieved these results
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, i) => (
                <div 
                  key={i}
                  className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-3xl opacity-5`} />
                  
                  <div className="relative z-10">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Case Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-6xl">{study.image}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{study.title}</h3>
                            <p className="text-gray-400">{study.industry}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-white font-bold mb-2">Challenge:</h4>
                            <p className="text-gray-300">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-bold mb-2">Solution:</h4>
                            <p className="text-gray-300">{study.solution}</p>
                          </div>
                          
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex items-start gap-3">
                              <div className="text-2xl">💬</div>
                              <div>
                                <p className="text-gray-300 italic mb-2">"{study.testimonial}"</p>
                                <p className="text-red-500 font-medium">— {study.client}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Results */}
                      <div>
                        <h4 className="text-white font-bold mb-6 text-xl">Key Results:</h4>
                        <div className="space-y-4">
                          {study.results.map((result, j) => (
                            <div key={j} className="p-4 rounded-xl bg-white/5 border border-white/10">
                              <div className="text-2xl font-black text-green-500 mb-1">{result.value}</div>
                              <div className="text-white font-medium text-sm">{result.metric}</div>
                              <div className="text-gray-400 text-xs">{result.period}</div>
                            </div>
                          ))}
                        </div>
                        
                        <Link
                          href="/contact"
                          className={`mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r ${study.color} rounded-xl text-white font-bold transform hover:scale-105 transition-all duration-300`}
                        >
                          Get Similar Results
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  More Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A glimpse into our extensive portfolio of successful campaigns
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{item.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.type}</p>
                  <div className="flex items-center gap-2 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.results}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Our Commitment
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-black text-white mb-2">2024</div>
                <div className="text-gray-300">Founded</div>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-black text-white mb-2">48h</div>
                <div className="text-gray-300">Setup Time</div>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <TrendingUp className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <div className="text-4xl font-black text-white mb-2">90-Day</div>
                <div className="text-gray-300">ROI Guarantee</div>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Behind Success */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  The Process Behind Every Success
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology that delivers consistent results across all industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deep Analysis</h3>
                <p className="text-gray-300 text-sm">Comprehensive audit of your current situation, competitors, and market opportunities.</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Strategy</h3>
                <p className="text-gray-300 text-sm">Tailored action plan designed specifically for your industry and target audience.</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Execution</h3>
                <p className="text-gray-300 text-sm">Professional implementation by our team of specialists with continuous optimization.</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-green-500/10 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Measurable Results</h3>
                <p className="text-gray-300 text-sm">Transparent reporting and continuous optimization to maximize your ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We've Transformed */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Industries We've Transformed
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From startups to enterprises, we've delivered success across every major industry
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: "🏪", name: "E-commerce" },
                { icon: "🏥", name: "Healthcare" },
                { icon: "🏠", name: "Real Estate" },
                { icon: "📚", name: "Education" },
                { icon: "💰", name: "Finance" },
                { icon: "🍔", name: "F&B" },
                { icon: "🚗", name: "Automotive" },
                { icon: "💄", name: "Beauty" },
                { icon: "💪", name: "Fitness" },
                { icon: "🧘‍♀️", name: "Wellness" },
                { icon: "🔧", name: "Services" },
                { icon: "💻", name: "Technology" }
              ].map((industry, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <div className="text-white text-sm font-medium">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                Your Success Story
              </span>
              <br />
              <span className="text-white">Starts Here</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to achieve similar results? Let's discuss how we can transform your business 
              and create the next success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-green-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-xl transition-all duration-300 hover:bg-white/20"
              >
                Explore Our Services
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free consultation
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Custom strategy
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Results guaranteed
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}