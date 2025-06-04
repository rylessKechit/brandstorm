# 🚀 BrandStorm SaaS - Digital Marketing Platform

A premium SaaS platform revolutionizing digital marketing in the Middle East. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### Current (Landing Page)

- 🎨 Premium 3D Apple-style design
- 📱 Fully responsive design
- ⚡ Lightning-fast performance
- 🌍 Optimized for MENA market
- 📊 Detailed service sections
- 💰 Pricing plans
- ⭐ Customer testimonials
- ❓ FAQ section

### Planned (SaaS Features)

- 🤖 AI-powered analytics
- 📈 Campaign automation
- 🎯 Multi-channel management
- 📊 Real-time dashboards
- 🔗 API integrations
- 👥 Team collaboration
- 📱 Mobile app

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI / Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Database**: PostgreSQL (Supabase)
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📁 Project Structure

```
vizionaire-saas/
├── 📁 public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── 📁 (dashboard)/
│   │   │   ├── dashboard/
│   │   │   ├── campaigns/
│   │   │   ├── analytics/
│   │   │   └── settings/
│   │   ├── 📁 api/
│   │   │   ├── auth/
│   │   │   ├── campaigns/
│   │   │   └── analytics/
│   │   ├── 📁 about/
│   │   ├── 📁 pricing/
│   │   ├── 📁 contact/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── 📁 components/
│   │   ├── 📁 ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── modal.tsx
│   │   ├── 📁 sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── FAQ.tsx
│   │   ├── 📁 dashboard/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Charts.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── 📁 lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── 📁 hooks/
│   │   ├── useAuth.ts
│   │   ├── useAnalytics.ts
│   │   └── useCampaigns.ts
│   ├── 📁 types/
│   │   ├── auth.ts
│   │   ├── campaign.ts
│   │   └── analytics.ts
│   └── 📁 styles/
│       └── globals.css
├── 📁 docs/
│   ├── api.md
│   ├── deployment.md
│   └── contributing.md
├── .env.example
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/vizionaire-saas.git
cd vizionaire-saas
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="BrandStorm"

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/vizionaire"

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Payments
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
RESEND_API_KEY=re_...

# Analytics
VERCEL_ANALYTICS_ID=your-analytics-id
```

## 🎨 Design System

### Colors

- **Primary**: Pink/Purple gradient (#ff0080 → #7928ca)
- **Secondary**: Cyan/Blue (#00dfd8 → #0070f3)
- **Accent**: Yellow/Orange (#fbbf24 → #f97316)
- **Background**: Black (#000000)
- **Surface**: White/5 with backdrop blur

### Typography

- **Headings**: Font-black, gradient text
- **Body**: Font-medium, gray-300
- **Accent**: Font-bold, colored

### Components

- **Buttons**: 3D effects with gradients
- **Cards**: Glassmorphism with hover animations
- **Inputs**: Minimal with focus states

## 📱 Responsive Breakpoints

```css
sm: '640px'   # Mobile
md: '768px'   # Tablet
lg: '1024px'  # Desktop
xl: '1280px'  # Large Desktop
2xl: '1536px' # Extra Large
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Add environment variables**
3. **Deploy automatically on push to main**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Manual Deployment

1. **Build the project**

```bash
npm run build
```

2. **Start production server**

```bash
npm run start
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: < 300KB gzipped
- **Load Time**: < 2s on 3G

## 🔒 Security

- HTTPS only in production
- CSP headers configured
- Input validation with Zod
- Rate limiting on API routes
- Secure authentication flows

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📈 Monitoring

- **Error Tracking**: Sentry
- **Performance**: Vercel Analytics
- **User Analytics**: PostHog
- **Uptime**: UptimeRobot

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Founder & CEO**: [Your Name]
- **Lead Developer**: [Your Name]
- **UI/UX Designer**: [Designer Name]

## 📞 Support

- **Email**: support@vizionaire.com
- **Discord**: [Join our community](https://discord.gg/vizionaire)
- **Documentation**: [docs.vizionaire.com](https://docs.vizionaire.com)

## 🗺 Roadmap

### Phase 1 (Current) - Landing Page

- ✅ Landing page design
- ✅ Service sections
- ✅ Pricing plans
- ⏳ Contact forms

### Phase 2 - Authentication

- ⏳ User registration/login
- ⏳ OAuth integration
- ⏳ User profiles
- ⏳ Subscription management

### Phase 3 - Core SaaS Features

- ⏳ Dashboard analytics
- ⏳ Campaign management
- ⏳ Automation workflows
- ⏳ Real-time notifications

### Phase 4 - Advanced Features

- ⏳ AI recommendations
- ⏳ Team collaboration
- ⏳ Advanced reporting
- ⏳ Mobile app

---

Made with ❤️ in Dubai 🇦🇪
