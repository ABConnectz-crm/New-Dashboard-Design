# Enterprise ERP Dashboard - Lead Management System

A beautiful, modern, and fully-featured Enterprise Resource Planning (ERP) dashboard built with Next.js 14, TypeScript, and TailwindCSS. This dashboard focuses on **Lead Management** with comprehensive campaign management, automation flows, and team performance tracking.

![Dashboard Preview](./dashboard-preview.png)

## 🎨 Design Features

### Three Switchable Themes

1. **Modern Pastel** (Default - Primary Design)
   - Soft purple (#6A4DF4) with yellow (#FDCB50) and sky blue (#58C6F5) accents
   - Neumorphic design with subtle shadows
   - Clean, modern aesthetic inspired by the smart home UI reference

2. **Gradient Analytics**
   - Dark charcoal background (#0F1015)
   - Pink-to-orange gradient cards
   - Professional analytics-focused design

3. **Minimal Enterprise**
   - Clean white/light gray base
   - Soft blue/purple accents
   - Corporate, professional aesthetic

Switch themes using the palette icon in the top navigation bar.

## 🚀 Features

### Lead Management
- **Pipeline Tracking**: Visual funnel showing New → Contacted → Qualified → Converted
- **Lead Scoring**: Track and prioritize leads based on engagement
- **Source Attribution**: Monitor lead sources (ads, campaigns, referrals, website)
- **Lead Overview Charts**: Beautiful visualizations of lead acquisition trends

### Campaign Management
- **Email Campaigns**: Single-send, recurring, and drip campaigns
  - Open rates, click rates, bounce tracking
  - Template management and A/B testing
- **WhatsApp Campaigns**: Bulk sending, templates, and flow-based campaigns
  - Delivery and read receipts
  - Reply rate tracking
  - Branching flows with conditional logic
- **Campaign Scheduling**: Schedule, pause, resume, and monitor campaigns
- **Drip Sequences**: Time-based and event-triggered multi-step campaigns

### Automation & Flows
- **Flow Editor Preview**: Visual representation of multi-step automations
- **WhatsApp Flows**: Branching nodes, conditional steps, wait timers
- **Email Drip Sequences**: Event-triggered, time-delayed campaigns
- **Success Metrics**: Track completion rates and average completion times

### Task & Scheduling
- **Calendar Integration**: View upcoming tasks and meetings
- **Task Assignment**: Assign tasks to team members
- **Priority Management**: High, medium, low priority tasks
- **Meeting Scheduling**: Schedule follow-ups and demos

### Team Performance
- **User Activity Tracking**: Calls, messages, tasks completed
- **Conversion Rates**: Individual team member performance
- **Lead Handling**: Track leads handled per team member
- **Top Performer Highlights**: Automated recognition of best performers

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design tokens
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: React Context API (Theme)
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

   The dashboard will automatically load at `/dashboard`

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

This project is optimized for deployment on Vercel:

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Environment Variables (Optional)

Currently, this dashboard uses demo data. To connect to a real backend:

1. Create a `.env.local` file
2. Add your API endpoints:
   ```env
   NEXT_PUBLIC_API_URL=https://your-api.com
   NEXT_PUBLIC_REDIS_URL=your-redis-url
   ```

## 📁 Project Structure

```
erp-dashboard/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard page
│   ├── layout.tsx             # Root layout with theme provider
│   ├── page.tsx               # Home (redirects to dashboard)
│   └── globals.css            # Global styles and Tailwind imports
├── components/
│   ├── Sidebar.tsx            # Left navigation sidebar
│   ├── TopNav.tsx             # Top navigation with theme switcher
│   ├── WelcomeBanner.tsx      # Welcome section with greeting
│   ├── StatsCard.tsx          # KPI display cards
│   ├── PipelineFunnel.tsx     # Sales pipeline visualization
│   ├── CampaignCard.tsx       # Campaign status cards
│   ├── FlowEditorPreview.tsx  # Automation flow preview
│   ├── CalendarPreview.tsx    # Task and schedule preview
│   ├── TeamActivity.tsx       # Team performance tracking
│   ├── QuickActions.tsx       # Quick action buttons
│   └── LeadOverview.tsx       # Lead acquisition charts
├── contexts/
│   └── ThemeContext.tsx       # Theme provider and hook
├── lib/
│   ├── demo-data.ts           # Sample data for all modules
│   └── utils.ts               # Utility functions
├── tailwind.config.ts         # Tailwind configuration with custom colors
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Component Usage

### Using Theme Context

```typescript
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme('pastel')}>
      Switch to Pastel Theme
    </button>
  );
}
```

### Creating Custom Stats Cards

```typescript
import { StatsCard } from '@/components/StatsCard';
import { Users } from 'lucide-react';

<StatsCard
  title="Total Leads"
  value={642}
  change={12.5}
  trend="up"
  icon={Users}
  iconColor="purple"
  subtitle="This month"
/>
```

## 🎨 Customization

### Adding New Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  yourtheme: {
    primary: '#YOUR_COLOR',
    secondary: '#YOUR_COLOR',
    // ... more colors
  }
}
```

### Modifying Demo Data

Edit `lib/demo-data.ts` to change:
- Lead information
- Campaign statistics
- Team member details
- Task lists
- Chart data

## 📊 Dashboard Sections

1. **Welcome Banner** - Personalized greeting with weather info
2. **Key Metrics** - Total leads, new leads, conversion rate, active campaigns
3. **Lead Acquisition Chart** - 7-month trend visualization
4. **Active Campaigns** - Email and WhatsApp campaign cards
5. **Campaign Statistics** - Email, WhatsApp, and Drip campaign counts
6. **Automation Flows** - Active automation sequences with success rates
7. **Quick Actions** - Fast access to common tasks
8. **Pipeline Funnel** - Visual sales pipeline with conversion rates
9. **Calendar & Tasks** - Upcoming schedule and task list
10. **Team Performance** - Individual and team-wide metrics

## 🔐 Security Notes

- This is a **frontend demo** with sample data
- No authentication is implemented (add NextAuth.js for production)
- API routes not included (add `/app/api` routes as needed)
- Redis integration mentioned for caching (implement server-side)

## 🤝 Integration Points

This dashboard is designed to integrate with:

- **PostgreSQL Database**: Store leads, campaigns, users, tasks
- **Redis**: Cache frequently accessed data, session management
- **Email Service**: SendGrid, AWS SES, or similar for email campaigns
- **WhatsApp Business API**: For WhatsApp campaign delivery
- **Webhook Receivers**: For external integrations (CRM, ads platforms)
- **REST/SOAP APIs**: Enterprise system integrations

## 📱 Responsive Design

The dashboard is fully responsive:
- **Desktop**: Full layout with all components visible
- **Tablet**: Adaptive grid, components stack appropriately
- **Mobile**: Single column layout, optimized for touch

## 🐛 Troubleshooting

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
Ensure you're using Node.js 18+ and all dependencies are installed

## 📝 License

This project is open-source and available for use in your projects.

## 🙏 Acknowledgments

Design inspiration from modern dashboard UIs with a focus on:
- Clean, neumorphic design patterns
- Soft color palettes
- Professional data visualization
- Enterprise-grade UX

---

**Built with ❤️ for Enterprise Teams**

For questions or support, please refer to the Next.js documentation or create an issue in your repository.
