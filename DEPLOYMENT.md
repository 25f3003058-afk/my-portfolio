# 🚀 Deployment Guide

Step-by-step guide to deploy your portfolio to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free, sign up at [vercel.com](https://vercel.com))
- Your code pushed to GitHub

## Step 1: Push to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repo)
git remote add origin https://github.com/yourusername/my-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click "Deploy"
6. Wait 2-3 minutes
7. Your site is live! 🎉

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts
```

## Step 3: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

## Environment Variables (If Needed)

If you add any API keys or secrets:

1. Create `.env.local` file (never commit this!)
2. Add your variables
3. In Vercel Dashboard:
   - Go to Settings → Environment Variables
   - Add each variable
   - Redeploy

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every PR = Preview deployment
- Automatic HTTPS
- Global CDN
- Automatic invalidation

## Build Optimization

Before deploying, verify:

```bash
# Test production build locally
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## Post-Deployment Checklist

- [ ] Test all links
- [ ] Verify animations work
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify resume download works
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Set up custom domain (optional)
- [ ] Add to search console (optional)
- [ ] Share on LinkedIn!

## Monitoring

Vercel provides:
- **Analytics**: Track visitors (free tier limited)
- **Speed Insights**: Performance metrics
- **Real-time logs**: Debug issues

Access these in your project dashboard.

## Updating Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update projects"
git push
```

Vercel automatically redeploys!

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard. Common issues:
- TypeScript errors
- Missing dependencies
- Environment variables

### 404 Errors

- Ensure all imports use correct paths
- Check file naming (case-sensitive)

### Slow Performance

- Optimize images
- Check bundle size
- Use Next.js Image component

## Alternative Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect GitHub repository
3. Configure build settings
4. Deploy

### Custom Server

```bash
# Build
npm run build

# Run on port 3000
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

## Performance Tips

1. **Enable Compression**: Vercel does this automatically
2. **Image Optimization**: Use Next.js Image component
3. **Code Splitting**: Next.js handles this
4. **Caching**: Configure in `next.config.ts`

## Security

Vercel provides:
- Automatic HTTPS
- DDoS protection
- Firewall
- Edge network

No extra configuration needed!

## Support

If you encounter issues:
- Vercel Docs: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

🎉 **Congratulations!** Your portfolio is now live and accessible worldwide!
