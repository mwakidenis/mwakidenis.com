# Cloudflare Pages Deployment Guide

This guide explains how to deploy the mwakidenis Next.js portfolio to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- A domain (can be free .workers.dev subdomain or your own domain)
- Git repository pushed to GitHub

## Setup Steps

### 1. Connect Your Repository to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** in the left sidebar
3. Click **Connect to Git**
4. Authorize and select your GitHub account
5. Select the `mwakidenis/mwakidenis.com` repository
6. Click **Begin setup**

### 2. Configure Build Settings

On the deployment configuration page:

**Build command:**
```bash
npm run build
```

**Build output directory:**
```
.next/standalone
```

**Root directory (leave blank or set to `.`)**

### 3. Environment Variables

Add these environment variables in Cloudflare Pages:

```
CF_PAGES=1
NODE_VERSION=18
```

**Optional** - Add any custom environment variables:
- `NEXT_PUBLIC_API_URL` - Your API endpoint if using a backend
- Other Next.js environment variables as needed

### 4. Deploy

Click **Save and Deploy**. Cloudflare will automatically:
1. Clone your repository
2. Install dependencies
3. Build the project
4. Deploy to Cloudflare's global network

## Custom Domain Setup

To use your custom domain:

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Add your domain or subdomain
3. Follow the DNS setup instructions
4. Verify domain ownership

## Cloudflare Configuration Files

This project includes optimized Cloudflare configuration:

- **`wrangler.toml`** - Cloudflare Workers configuration
- **`_routes.json`** - URL routing rules for Pages
- **`cloudflare.env.example`** - Example environment variables

## Performance Optimizations

Cloudflare Pages automatically provides:

- **Global CDN** - Content cached across 300+ Cloudflare data centers
- **Auto-minification** - HTML, CSS, JS automatically compressed
- **HTTP/3 support** - Latest web standards
- **DDoS protection** - Enterprise-grade security
- **SSL/TLS encryption** - HTTPS by default

## Monitoring & Analytics

View deployment details in Cloudflare Pages:

1. Go to your Pages project
2. Click on the deployment
3. View build logs, performance metrics, and analytics

## Troubleshooting

### Build Fails with "Cannot find module"
```bash
# Ensure all dependencies are in package.json
npm install
git add package-lock.json
git push
```

### Static assets not loading
- Ensure `public/` directory files are referenced correctly
- Check `_routes.json` for proper exclusion rules

### API routes not working
- Confirm `src/pages/api/` exists
- Check Cloudflare Pages logs for errors

## Advanced: Using Cloudflare Workers

For serverless functions, you can use Cloudflare Workers:

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Deploy:
```bash
wrangler deploy
```

## Links

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
