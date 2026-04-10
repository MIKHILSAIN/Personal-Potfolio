# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## Vercel Deployment (Recommended)

Vercel is the creator of Next.js and provides seamless hosting for Vite applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: portfolio migration to React with Vite"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Add environment variables in Settings → Environment Variables:
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_key
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     ```
   - Click "Deploy"

3. **Custom Domain**
   - Go to project settings
   - Add your custom domain
   - Update DNS records if needed

## Netlify Deployment

### Steps:

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **Add Environment Variables**
   - Go to Site Settings → Build & Deploy → Environment
   - Add your EmailJS credentials

## GitHub Pages Deployment

### Steps:

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/Personal-Potfolio/', // Replace with your repo name
   })
   ```

2. **Deploy**
   ```bash
   npm run build
   npm install -g gh-pages
   gh-pages -d dist
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to GitHub Pages
   - Select `gh-pages` branch as source

## Railway Deployment

### Steps:

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Initialize and Deploy**
   ```bash
   railway init
   railway up
   ```

3. **Configure Environment Variables**
   - Add in Railway dashboard

## Environment Variables Setup

### EmailJS Configuration

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Go to Dashboard → Email Services
3. Create new service (Gmail, Outlook, etc.)
4. Get your Service ID
5. Go to Email Templates and create a template
6. Get your Template ID
7. Go to Account → API Keys to get Public Key
8. Add to your `.env.local` file

### Template Variables

Create an EmailJS template with variables:
```
From: {{from_name}}
Email: {{from_email}}
Message:
{{message}}
```

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Run through image optimizer
   - Use WebP format if possible
   - Ensure images are properly sized

2. **Minify Code**
   - `npm run build` automatically minifies

3. **Check Bundle Size**
   ```bash
   npm install -g vite-plugin-visualizer
   ```

### Monitoring

- Use Lighthouse (Chrome DevTools) to check performance
- Aim for 90+ scores in all categories
- Monitor Core Web Vitals

## SSL/TLS Certificate

Most platforms (Vercel, Netlify, GitHub Pages) automatically provide SSL certificates.

## Custom Domain

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Update DNS records to point to your hosting
3. Enable HTTPS (automatic with most platforms)

## CI/CD Pipeline

Your repository now supports automatic deployments:
- Push to main branch
- GitHub Actions runs tests/builds
- Automatic deployment to staging/production

## Troubleshooting

### "Blank Page" Issue
- Check browser console for errors
- Verify environment variables are set
- Clear browser cache and rebuild

### "Module Not Found" Errors
- Run `npm install`
- Check import paths
- Ensure all dependencies are listed in package.json

### Build Fails
- Check Node.js version (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors in console

### EmailJS Not Working
- Verify credentials in .env.local
- Check EmailJS dashboard for quota limits
- Verify template variables match form fields
- Check browser console for error messages

## Monitoring

### Google Analytics Setup (Optional)

1. Create property in Google Analytics
2. Get Measurement ID
3. Create `src/utils/analytics.js`:
   ```javascript
   import { useEffect } from 'react'
   import { useLocation } from 'react-router-dom'

   export const usePageTrack = () => {
     const location = useLocation()
     useEffect(() => {
       // Track page views
       window.gtag?.config('GA_MEASUREMENT_ID', {
         page_path: location.pathname,
       })
     }, [location])
   }
   ```

## Security

- Never commit `.env.local` to git (it's in .gitignore)
- Use environment variables for sensitive data
- Keep dependencies updated: `npm audit fix`
- Enable GitHub security features

## Maintenance

- Monitor error logs
- Update dependencies monthly
- Test contact form regularly
- Backup important data
- Monitor uptime and performance

---

For questions, refer to specific platform documentation or contact support.
