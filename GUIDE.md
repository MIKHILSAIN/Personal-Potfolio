# Portfolio Project Guide

Quick reference for working with your portfolio website.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure Overview

```
project/
├── src/
│   ├── pages/                 # Page components
│   │   ├── About.jsx          # About section
│   │   ├── Resume.jsx         # Resume with education, experience, skills
│   │   ├── Portfolio.jsx      # Projects with filtering
│   │   ├── Skills.jsx         # Skill tags by category
│   │   ├── Hackathons.jsx     # Hackathon achievements
│   │   ├── Contact.jsx        # Contact form with validation
│   │   └── NotFound.jsx       # 404 page
│   │
│   ├── components/            # Reusable components
│   │   ├── Sidebar.jsx        # Profile sidebar
│   │   ├── Navbar.jsx         # Navigation bar
│   │   └── ProjectModal.jsx   # Project details modal
│   │
│   ├── styles/               # CSS Modules
│   │   ├── index.css         # Global styles & CSS variables
│   │   ├── App.css           # App layout
│   │   ├── animations.css    # Animation keyframes
│   │   ├── components/       # Component styles
│   │   └── pages/            # Page styles
│   │
│   ├── data/                 # Static data
│   │   └── portfolioData.js  # All content (edit this!)
│   │
│   ├── hooks/                # Custom React hooks
│   │   └── useScrollAnimation.js
│   │
│   ├── App.jsx              # Main component with routing
│   └── main.jsx             # Entry point
│
├── public/                   # Static assets
│   ├── my-avatar.png        # Your profile photo
│   ├── project-*.jpg        # Project screenshots
│   └── logo.ico             # Favicon
│
├── index.html               # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
├── .env.example            # Environment variables template
└── README.md               # Project documentation
```

## Editing Content

### 1. About Section

Edit `src/data/portfolioData.js`:
```javascript
export const aboutData = {
  title: "About me",
  text: "Your about text here..."
}
```

### 2. Resume Information

Update all sections in `portfolioData.js`:
- `resumeData.education` - Education details
- `resumeData.experience` - Work experience
- `resumeData.skills` - Skill bar data

### 3. Projects

Edit `projectsData` array:
```javascript
{
  id: 1,
  title: "Project Name",
  category: "web-design", // or "applications"
  image: "/project-1.jpg",
  description: "Brief description",
  technologies: ["React", "Node.js"],
  link: "https://project-url.com"
}
```

### 4. Skills

Update `skillsData` object:
```javascript
languages: ["JavaScript", "HTML", "CSS"],
frameworks: ["React", "Next.js"],
databases: ["MongoDB", "PostgreSQL"],
tools: ["Git", "GitHub", "VS Code"]
```

### 5. Hackathons

Edit `hackathonsData` array:
```javascript
{
  id: 1,
  title: "Event Name",
  event: "Challenge Type",
  date: "Month Year",
  achievement: "1st Prize",
  description: "What you built..."
}
```

### 6. Contact Info

Update `contactData`:
```javascript
{
  title: "Get in touch",
  email: "your@email.com",
  phone: "+1 234 567 8900"
}
```

## Styling Changes

### Color Scheme

Edit CSS variables in `src/styles/index.css`:
```css
--orange-yellow-crayola: hsl(45, 100%, 72%);  /* Primary accent */
--white-1: hsl(0, 0%, 100%);                  /* Main text */
--eerie-black-2: hsl(240, 2%, 12%);          /* Main background */
```

### Typography

Modify font sizes:
```css
--fs-1: 24px;  /* Large headings */
--fs-2: 18px;  /* Headings */
--fs-5: 15px;  /* Body text */
```

### Spacing & Sizing

Edit in component CSS files or use existing scale:
```css
padding: 15px;  /* Use multiples of 5px */
gap: 20px;      /* Consistent spacing */
border-radius: 20px;  /* Rounded corners */
```

## Images

### Profile Picture
Replace `public/my-avatar.png` with your image:
- Size: 80x80px (displayed)
- Format: PNG recommended
- Keep dimensions square

### Project Screenshots
Replace `project-*.jpg` files:
- Aspect ratio: 16:12
- Format: JPG or PNG
- Resolution: 1280x960px minimum

### Favicon
Replace `public/logo.ico` with your favicon

## Features Guide

### Animations

All animations use Framer Motion. Key animation types:

1. **Page Transitions** - Fade in when navigating
2. **Scroll Reveals** - Elements animate when scrolling into view
3. **Hover Effects** - Interactive feedback on hover
4. **Stagger Animations** - Sequential animation of multiple elements

Adjust animation timing in component files:
```javascript
transition={{ duration: 0.5 }}  // 500ms animation
delay={0.2}                      // 200ms delay before start
```

### Filtering

Portfolio page supports category filtering:
- "All" - Shows all projects
- "Web Design" - Design-focused projects
- "Applications" - Application development

Add custom categories in data and update Portfolio component.

### Contact Form

Uses EmailJS for sending emails:
1. Configure .env.local with credentials
2. Form validates on client side
3. Shows success/error messages
4. Automatically clears on success

### Responsive Design

Breakpoints are responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Test with browser DevTools responsive mode.

## Adding New Pages

1. Create `src/pages/YourPage.jsx`
2. Create `src/styles/pages/YourPage.module.css`
3. Import in `App.jsx`
4. Add route:
   ```javascript
   <Route path="/yourpage" element={<YourPage />} />
   ```
5. Add to navbar in `Navbar.jsx`

## Common Tasks

### Change Primary Color

1. Edit `--orange-yellow-crayola` in `src/styles/index.css`
2. Update all hover states to match
3. Test across all pages

### Add Social Links

Edit `Sidebar.jsx` `socialLinks` array:
```javascript
{
  icon: FaIcon,
  url: 'https://link.com',
  label: 'Platform Name'
}
```

### Customize Form Fields

1. Edit Contact page form structure
2. Update validation in `Contact.jsx`
3. Update EmailJS template variables

### Change Animation Speed

Edit `--transition-1` and `--transition-2` in CSS:
```css
--transition-1: 0.25s ease;      /* Fast animations */
--transition-2: 0.5s ease-in-out; /* Slower animations */
```

### Add Page Analytics

1. Create Google Analytics property
2. Add tracking ID to environment
3. Implement analytics hook
4. Track page views automatically

## Troubleshooting

### Changes Not Showing

1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Restart dev server

### Animations Not Working

1. Check Framer Motion is imported
2. Verify motion components are used
3. Check CSS animations in animations.css

### Form Not Sending Emails

1. Check .env.local has correct credentials
2. Verify EmailJS template variables
3. Check browser console for errors
4. Ensure form validation passes

### Images Not Loading

1. Check image path is correct
2. Verify file exists in `public` folder
3. Check file extension (case-sensitive on Linux)
4. Use Chrome DevTools Network tab to debug

## Performance Tips

1. Optimize images with tools like TinyPNG
2. Lazy load images: `loading="lazy"`
3. Minimize CSS by using scoped modules
4. Use production build: `npm run build`
5. Monitor bundle size regularly

## SEO Optimization

- Meta tags updated via React Helmet
- Edit titles and descriptions in components
- Add schema markup if needed
- Submit sitemap to Google Search Console

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes
git add .
git commit -m "feat: description"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Getting Help

- Check README.md for detailed info
- Review DEPLOYMENT.md for deployment guides
- Check official docs:
  - React: react.dev
  - Vite: vitejs.dev
  - Framer Motion: framer.com/motion
  - React Router: reactrouter.com

---

Happy coding!
