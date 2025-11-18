# LeadFlow - Enterprise Lead Management Dashboard

A modern, sophisticated enterprise-grade Lead Management System dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features three distinct color themes, comprehensive analytics, and a beautiful, intuitive interface.

![LeadFlow Dashboard](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css)

## Features

### Core Functionality
- **Lead Management**: Track and manage 1,247+ leads across multiple pipeline stages
- **Campaign Orchestration**: Monitor 8 active campaigns (Email & WhatsApp)
- **Task Management**: Organize daily tasks with priority tracking
- **Team Performance**: View team metrics and conversion rates
- **Analytics Dashboard**: Real-time charts and performance indicators
- **Pipeline Visualization**: Interactive funnel showing lead progression

### Design System
Three complete, professionally-designed themes:
- **Purple Theme** (Default): Modern, vibrant with purple/gold accents
- **Blue/Teal Theme**: Professional, corporate with ocean-inspired colors
- **Dark Mode**: Sleek, modern dark theme with colorful accents

### Technical Highlights
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Interactive data visualizations with Recharts
- ✅ Smooth animations and transitions
- ✅ Accessible UI components
- ✅ Theme persistence with localStorage
- ✅ Production-ready and Vercel-deployable

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Inter, Manrope, JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Navigate to the project directory**
   ```bash
   cd lead-management-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Features Breakdown

### Dashboard Components

#### Metric Cards
- Total Leads: 1,247 (+12%)
- Active Campaigns: 8 (+2)
- Conversion Rate: 24.3% (+2.8%)
- Today's Tasks: 15 (6 completed)

#### Campaign Performance Chart
- Area chart showing engagement trends
- Tracks 8 weeks of data
- Responsive and interactive

#### Lead Pipeline
- 5 stages: New → Contacted → Qualified → Negotiation → Won
- Visual funnel representation
- Dollar value tracking per stage

#### Recent Activity Feed
- Last 6 lead interactions
- Activity type indicators
- Timestamp tracking

#### Team Performance
- 5 team members with avatars
- Conversion tracking
- Role-based access levels

#### Task Management
- Priority-based organization
- Due date tracking
- Completion status

#### Quick Actions
- Create Lead
- Start Campaign
- Schedule Meeting
- Generate Report

### Theme Switcher

Access the theme switcher in the top-right corner:
- 🟣 Purple (Default)
- 🔵 Blue/Teal
- 🌙 Dark Mode

## Deployment to Vercel

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Click "Deploy"

The dashboard is now ready for production deployment!

---

**Built with ❤️ using Next.js and Tailwind CSS**
