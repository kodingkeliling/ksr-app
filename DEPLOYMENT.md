# 🚀 Deployment Guide - KSR UNPAS Website

Panduan lengkap untuk deploy website KSR UNPAS ke berbagai platform.

## 📋 Prerequisites

- Node.js 18+ terinstall
- Git repository sudah siap
- Akun di platform deployment (Vercel, Netlify, dll)

## 🌐 Vercel (Recommended)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login ke Vercel
```bash
vercel login
```

### 3. Deploy
```bash
# Dari root project
vercel

# Atau gunakan script
npm run deploy
```

### 4. Environment Variables
Set environment variables di Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=KSR UNPAS
NEXT_PUBLIC_CONTACT_EMAIL=ksr@unpas.ac.id
```

### 5. Custom Domain
1. Buka Vercel dashboard
2. Pilih project
3. Settings → Domains
4. Add domain: `ksrunpas.com`
5. Update DNS records sesuai instruksi

## 🎯 Netlify

### 1. Build Command
```bash
npm run build
```

### 2. Publish Directory
```
out
```

### 3. Environment Variables
Set di Netlify dashboard:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.netlify.app
NEXT_PUBLIC_SITE_NAME=KSR UNPAS
```

## ☁️ AWS Amplify

### 1. Connect Repository
1. Buka AWS Amplify Console
2. Connect to Git provider
3. Pilih repository

### 2. Build Settings
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 🐳 Docker

### 1. Dockerfile
```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
```

### 2. Build & Run
```bash
# Build image
docker build -t ksr-unpas-website .

# Run container
docker run -p 3000:3000 ksr-unpas-website
```

## 🔧 Manual Deployment

### 1. Build Project
```bash
npm run build
npm run start
```

### 2. Upload Files
Upload folder `.next`, `public`, dan `package.json` ke server

### 3. Install Dependencies
```bash
npm install --production
```

### 4. Start Server
```bash
npm start
```

## 📱 PWA Configuration

### 1. Generate Icons
```bash
# Install pwa-asset-generator
npm i -g pwa-asset-generator

# Generate icons
pwa-asset-generator logo.png ./public -i ./public/manifest.json
```

### 2. Update manifest.json
Pastikan path icons sudah benar di `public/manifest.json`

## 🔍 SEO Optimization

### 1. Meta Tags
Semua meta tags sudah dikonfigurasi di `layout.tsx`

### 2. Sitemap
Sitemap otomatis tersedia di `/sitemap.xml`

### 3. Robots.txt
File robots.txt sudah dikonfigurasi di `public/robots.txt`

## 📊 Performance Monitoring

### 1. Vercel Analytics
```bash
npm i @vercel/analytics
```

### 2. Google Analytics
```bash
npm i @next/third-parties
```

### 3. Core Web Vitals
Monitor melalui:
- Google PageSpeed Insights
- Vercel Analytics
- Chrome DevTools

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Runtime Errors
1. Check console logs
2. Verify environment variables
3. Check API endpoints

### Performance Issues
1. Optimize images
2. Enable compression
3. Use CDN for static assets

## 📞 Support

Untuk bantuan deployment:
- Email: ksr@unpas.ac.id
- Instagram: @ksrunpas
- GitHub Issues: [Repository Issues]

---

**Happy Deploying! 🎉**

