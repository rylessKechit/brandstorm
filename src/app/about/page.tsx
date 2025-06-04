import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Users, Target, Globe, Award, ArrowRight, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description: 'Learn about VIZIONAIRE\'s mission to revolutionize digital marketing in the Middle East with AI-powered solutions.',
}

const team = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    avatar: "👨‍💼",
    bio: "15+ years in digital marketing across MENA region"
  },
  {
    name: "Sarah Hassan",
    role: "Head of Strategy",
    avatar: "👩‍💼", 
    bio: "Former Google & Meta marketing executive"
  },
  {
    name: "Omar Khalil",
    role: "Creative Director",
    avatar: "🎨",
    bio: "Award-winning designer with 200+ campaigns"
  },
  {
    name: "Fatima Al-Zahra",
    role: "Head of Analytics",
    avatar: "📊",
    bio: "Data scientist specializing in marketing ROI"
  }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy, every campaign, every decision is focused on delivering measurable ROI for our clients."
  },
  {
    icon: Globe,
    title: "MENA Expertise",
    description: "Deep understanding of Middle Eastern markets, culture, and consumer behavior."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We leverage cutting-edge AI and automation to stay ahead of the competition."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We don't just work for you - we work with you as an extension of your team."
  }
]

const milestones = [
  { year: "2019", event: "Founded in Dubai", description: "Started with a vision to transform digital marketing in MENA" },
  { year: "2020", event: "First 100 Clients", description: "Reached our first major milestone during a challenging year" },
  { year: "2021", event: "AI Integration", description: "Pioneered AI-powered marketing automation in the region" },
  { year: "2022", event: "Regional Expansion", description: "Expanded operations to Saudi Arabia, Egypt, and UAE" },
  { year: "2023", event: "$50M+ Generated", description: "Helped clients generate over $50M in revenue" },
  { year: "2024", event: "Industry Leader", description: "Recognized as #1 digital marketing agency in MENA" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-cyan-900/20" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Born in Dubai with a mission to revolutionize digital marketing across the Middle East. 
              We combine local expertise with global innovation to deliver exceptional results.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To empower Middle Eastern businesses with world-class digital marketing strategies 
                  that drive real, measurable growth. We believe every business deserves access to 
                  premium marketing services that deliver exceptional ROI.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Through innovative AI-powered solutions and deep regional expertise, we help 
                  businesses not just compete, but dominate their markets.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10">
                    <TrendingUp className="w-8 h-8 text-pink-400 mb-4" />
                    <div className="text-3xl font-black text-white mb-2">2024</div>
                    <div className="text-gray-300">Founded</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10">
                    <Award className="w-8 h-8 text-cyan-400 mb-4" />
                    <div className="text-3xl font-black text-white mb-2">48h</div>
                    <div className="text-gray-300">Setup Time</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-white/10">
                    <Globe className="w-8 h-8 text-green-400 mb-4" />
                    <div className="text-3xl font-black text-white mb-2">MENA</div>
                    <div className="text-gray-300">Specialists</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10">
                    <Target className="w-8 h-8 text-cyan-400 mb-4" />
                    <div className="text-3xl font-black text-white mb-2">90-Day</div>
                    <div className="text-gray-300">ROI Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105">
                    <Icon className="w-12 h-12 text-pink-400 mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The creative minds behind your success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-pink-400 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our growth story
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="text-3xl font-black text-pink-400 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{milestone.event}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Write Your Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their digital presence with VIZIONAIRE
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}