# 🚀 Vercel Deployment Guide

Complete guide to deploy your Enterprise ERP Dashboard to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository hosted on GitHub, GitLab, or Bitbucket
- Node.js 18+ installed locally

---

## Method 1: Deploy via Vercel Dashboard (Recommended for First-Time Deploy)

### Step 1: Push Code to Git Repository

```bash
# If not already initialized
git init
git add .
git commit -m "Initial commit: Enterprise ERP Dashboard"

# Add remote repository
git remote add origin https://github.com/your-username/erp-dashboard.git

# Push to main branch
git push -u origin main
```

### Step 2: Import Project to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select **Import Git Repository**
4. Choose your repository from the list
5. Vercel will auto-detect Next.js settings

### Step 3: Configure Project Settings

Vercel will automatically detect:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

**You don't need to change these defaults!**

### Step 4: Set Environment Variables (Optional)

If you plan to connect to a backend API or database:

1. Click **"Environment Variables"**
2. Add the following (if needed):

```env
NEXT_PUBLIC_API_URL=https://your-api-endpoint.com
REDIS_URL=redis://your-redis-url
DATABASE_URL=postgresql://your-database-url
SENDGRID_API_KEY=your_sendgrid_key
WHATSAPP_API_KEY=your_whatsapp_key
```

3. Select environment: **Production**, **Preview**, and **Development**

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your dashboard will be live at `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Vercel CLI (For Developers)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy from Terminal

```bash
# Navigate to project directory
cd /path/to/erp-dashboard

# Deploy to production
vercel --prod

# Or deploy to preview (staging)
vercel
```

### Step 4: Follow CLI Prompts

```
? Set up and deploy "~/erp-dashboard"? [Y/n] y
? Which scope do you want to deploy to? Your Username
? Link to existing project? [y/N] n
? What's your project's name? erp-dashboard
? In which directory is your code located? ./
Auto-detected Project Settings (Next.js):
- Build Command: next build
- Development Command: next dev --port 3000
- Output Directory: .next
? Want to modify these settings? [y/N] n
```

### Step 5: Deployment Complete

```
✅ Production: https://erp-dashboard.vercel.app [copied to clipboard]
```

---

## Method 3: Deploy via GitHub Integration (Continuous Deployment)

### Step 1: Connect GitHub to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click **"Add New..."** → **"Project"**
4. Install the Vercel GitHub app (if not already installed)

### Step 2: Auto-Deploy on Git Push

Once connected:
- **Every push to `main` branch** → Deploys to production
- **Every push to other branches** → Creates preview deployment
- **Every pull request** → Creates preview deployment with unique URL

This is the **recommended approach** for team collaboration!

---

## Post-Deployment Steps

### 1. Configure Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `dashboard.yourcompany.com`)
4. Update DNS records as instructed by Vercel

Example DNS Configuration:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 2. Enable Analytics

1. In Vercel Dashboard, go to **"Analytics"**
2. Click **"Enable Analytics"**
3. View real-time visitor data, page views, and performance metrics

### 3. Configure Team Access

1. Go to **"Settings"** → **"Team"**
2. Invite team members via email
3. Assign roles: **Owner**, **Member**, or **Viewer**

### 4. Set Up Environment Variables for Production

```bash
# Via CLI
vercel env add NEXT_PUBLIC_API_URL production
# Then paste your API URL when prompted

# Via Dashboard
# Settings → Environment Variables → Add New
```

---

## Troubleshooting

### Build Fails

**Error: "Cannot find module '@/components/...'"**

**Solution**: Ensure `tsconfig.json` has the correct paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Error: "Module not found: Can't resolve 'react'"**

**Solution**: Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json .next
npm install
vercel --prod --force
```

### Deployment is Slow

**Solution**:
- Vercel automatically optimizes images and code
- First deployment takes longer (2-3 minutes)
- Subsequent deployments are faster (30-60 seconds)

### Environment Variables Not Working

**Solution**:
- Environment variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- Restart development server after adding new variables
- Redeploy after updating variables in Vercel Dashboard

---

## Performance Optimization

### Enable Image Optimization

Next.js automatically optimizes images on Vercel. No configuration needed!

### Enable Edge Functions (Optional)

For ultra-fast global performance:

1. Create `middleware.ts` in project root:
```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
```

2. Deploy and middleware runs on Vercel Edge Network

### Enable Incremental Static Regeneration (ISR)

For static pages that update periodically:

```typescript
// In page component
export const revalidate = 60; // Regenerate every 60 seconds
```

---

## Monitoring & Maintenance

### View Deployment Logs

```bash
# Via CLI
vercel logs https://your-project.vercel.app

# Via Dashboard
Deployments → Select deployment → View Logs
```

### Rollback to Previous Version

1. Go to **"Deployments"** in Dashboard
2. Find the previous successful deployment
3. Click **"..."** → **"Promote to Production"**

### Set Up Webhook Notifications

1. **Settings** → **Git Integration** → **Deploy Hooks**
2. Add webhook URL for Slack, Discord, etc.
3. Get notified on every deployment

---

## Cost & Limits (Vercel Free Tier)

| Feature | Free Tier | Pro Tier |
|---------|-----------|----------|
| Bandwidth | 100 GB/month | 1 TB/month |
| Builds | 6,000 minutes/month | Unlimited |
| Serverless Functions | 100 GB-hours | 1,000 GB-hours |
| Team Members | 1 | Unlimited |
| Custom Domains | Unlimited | Unlimited |

**For this ERP Dashboard:**
- Expected bandwidth: ~5-10 GB/month (with 100-500 daily users)
- Build time: ~2-3 minutes per deployment
- **Free tier is sufficient for most use cases**

---

## Security Best Practices

### 1. Enable HTTPS (Automatic)

Vercel automatically provides SSL certificates for all deployments.

### 2. Set Security Headers

Already configured in `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### 3. Protect Sensitive Routes (Future)

Add authentication middleware:
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Vercel Community Forum](https://github.com/vercel/vercel/discussions)

---

## Quick Reference Commands

```bash
# Deploy to production
vercel --prod

# Deploy to preview (staging)
vercel

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Pull environment variables from Vercel
vercel env pull .env.local

# Remove deployment
vercel remove [deployment-url]
```

---

## Support

If you encounter issues:

1. Check [Vercel Status Page](https://www.vercel-status.com/)
2. Search [GitHub Discussions](https://github.com/vercel/vercel/discussions)
3. Contact [Vercel Support](https://vercel.com/support)

---

**Congratulations! Your Enterprise ERP Dashboard is now live on Vercel! 🎉**

Access it at: `https://your-project-name.vercel.app/dashboard`
