'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight, Target, Users, Zap, Award, Heart, Globe, TrendingUp, Star, CheckCircle, Calendar, Shield } from 'lucide-react'

const stats = [
  {
    number: "500+",
    label: "Projects Delivered",
    color: "text-red-600"
  },
  {
    number: "300%",
    label: "Average ROI",
    color: "text-green-600"
  },
  {
    number: "95%",
    label: "Client Retention",
    color: "text-amber-600"
  },
  {
    number: "24/7",
    label: "Support Available",
    color: "text-blue-600"
  }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is built around measurable outcomes. We don't just create campaigns; we deliver growth that impacts your bottom line.",
    color: "from-red-600 to-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We become an extension of your team, understanding your business inside and out.",
    color: "from-blue-600 to-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of digital trends and leverage cutting-edge technologies to give you a competitive advantage.",
    color: "from-amber-600 to-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "No black boxes or hidden tactics. We provide clear reporting and honest communication throughout our partnership.",
    color: "from-green-600 to-green-500",
    bgColor: "bg-green-50"
  }
]

const team = [
  {
    name: "Rylesskecht",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Digital marketing strategist with 10+ years of experience scaling businesses across the MENA region.",
    expertise: ["Strategy", "Leadership", "Growth"],
    color: "from-red-600 to-amber-600"
  },
  {
    name: "Sarah Al-Mansoori",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b108?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning designer passionate about creating visually stunning and conversion-focused experiences.",
    expertise: ["Design", "Branding", "UX/UI"],
    color: "from-purple-600 to-pink-600"
  },
  {
    name: "Omar Al-Zaabi",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer and automation expert who turns complex ideas into seamless digital solutions.",
    expertise: ["Development", "Automation", "Analytics"],
    color: "from-blue-600 to-indigo-600"
  }
]

const timeline = [
  {
    year: "2020",
    title: "Foundation",
    description: "VIZIONAIRE was founded with a mission to democratize digital marketing for UAE businesses."
  },
  {
    year: "2021",
    title: "Growth Phase",
    description: "Expanded our team and services, helping 100+ businesses achieve digital transformation."
  },
  {
    year: "2022",
    title: "Innovation Hub",
    description: "Launched our automation platform and became the go-to agency for marketing technology."
  },
  {
    year: "2023",
    title: "Market Leadership",
    description: "Recognized as one of the top digital agencies in the UAE with 95% client retention rate."
  },
  {
    year: "2024",
    title: "Regional Expansion",
    description: "Extended our services across the GCC region, serving 500+ satisfied clients."
  }
]

const certifications = [
  {
    name: "Google Premier Partner",
    logo: "🎯",
    description: "Top 3% of Google Ads agencies worldwide"
  },
  {
    name: "Meta Business Partner",
    logo: "📱",
    description: "Certified for advanced Facebook & Instagram advertising"
  },
  {
    name: "HubSpot Diamond Partner",
    logo: "💎",
    description: "Elite level inbound marketing certification"
  },
  {
    name: "Shopify Plus Partner",
    logo: "🛍️",
    description: "Specialized in enterprise e-commerce solutions"
  }
]

export default function AboutPage() {
  const handleGetStarted = () => {
    const message = encodeURIComponent('Hi! I learned about VIZIONAIRE and would like to discuss how you can help grow my business. Can we schedule a consultation?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-amber-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Award-Winning Digital Agency</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                  Empowering UAE
                </span>
                <br />
                <span className="text-white">Businesses to Thrive</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                We're not just another agency. We're your strategic partner in digital transformation, combining local market expertise with global best practices.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl lg:text-4xl font-black ${stat.color} mb-2`}>{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#our-story"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-2xl transition-all duration-300 hover:bg-white/20"
                >
                  Learn Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Mission */}
              <div>
                <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-red-600" />
                  <span className="text-red-600 text-sm font-semibold">Our Mission</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-gray-900">
                  Democratizing Digital Success
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We believe every business deserves access to world-class digital marketing, regardless of size or budget. Our mission is to level the playing field by providing enterprise-level strategies to businesses of all scales.
                </p>
                <div className="space-y-4">
                  {[
                    "Make digital marketing accessible to all UAE businesses",
                    "Deliver measurable results that drive real growth",
                    "Build long-term partnerships based on trust and transparency",
                    "Stay ahead of digital trends to benefit our clients"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
                  <Globe className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-600 text-sm font-semibold">Our Vision</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-6 text-gray-900">
                  Leading the Digital Revolution in MENA
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To become the most trusted digital marketing partner in the MENA region, known for innovation, results, and unwavering commitment to client success.
                </p>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">By 2025, we aim to:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-black text-red-600 mb-1">1,000+</div>
                      <div className="text-gray-600">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-green-600 mb-1">10+</div>
                      <div className="text-gray-600">Regional Markets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Our Core</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do and drive our commitment to your success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className={`${value.bgColor} rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} text-white shadow-lg mb-6`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="our-story" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Our</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From a small startup to a leading digital agency - here's how we've grown together with our clients.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-amber-500 to-green-600"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-red-600 to-amber-600 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                      {item.year.slice(-2)}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-gray-50 rounded-2xl p-6 flex-1 border border-gray-200">
                      <div className="text-sm text-red-600 font-semibold mb-2">{item.year}</div>
                      <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Meet Our</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Expert Team
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Passionate professionals dedicated to your success, combining creativity with data-driven strategies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                    />
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-2">{member.name}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Join Team CTA */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h3>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented individuals who share our passion for digital excellence.
                </p>
                <button
                  onClick={() => {
                    const message = encodeURIComponent('Hi! I am interested in career opportunities at VIZIONAIRE. Can we discuss available positions?')
                    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gray-900">Certified</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our team holds the highest certifications from leading technology platforms, ensuring you get expert-level service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{cert.logo}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-amber-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-amber-200 bg-clip-text text-transparent">
                Ready to Partner
              </span>
              <br />
              <span className="text-white">With Us?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of successful businesses that trust VIZIONAIRE to drive their digital growth and achieve remarkable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button
                onClick={handleGetStarted}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/25"
              >
                <Calendar className="w-5 h-5" />
                Start Your Journey Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-2xl transition-all duration-300 hover:bg-white/20"
              >
                Explore Our Services
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free strategy consultation
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                90-day money-back guarantee
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Dedicated account management
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}