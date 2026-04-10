# Mikhil Sai N - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Framer Motion animations.

## Features

- **Responsive Design**: Mobile-first approach with clean, modern interface
- **Smooth Animations**: Framer Motion animations for page transitions and interactive elements
- **Multiple Pages**: About, Resume, Portfolio, Skills, Hackathons, and Contact
- **Project Showcase**: Interactive project grid with filtering and modal details
- **Contact Form**: Integrated EmailJS for sending messages directly
- **Dark Theme**: Modern dark color scheme with yellow accent colors
- **SEO Optimized**: React Helmet for meta tags and SEO optimization
- **Fast Performance**: Built with Vite for optimal development and production builds

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Styling**: CSS Modules
- **Email Service**: EmailJS
- **SEO**: React Helmet Async
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/MIKHILSAI/Personal-Potfolio.git
cd Personal-Potfolio
```

2. Install dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Create a `.env.local` file with EmailJS configuration:
```bash
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   └── ProjectModal.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Resume.jsx
│   ├── Portfolio.jsx
│   ├── Skills.jsx
│   ├── Hackathons.jsx
│   └── Contact.jsx
├── styles/             # CSS Modules
│   ├── index.css       # Global styles
│   ├── App.css
│   ├── animations.css
│   ├── components/
│   └── pages/
├── data/               # Static data
│   └── portfolioData.js
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Customization

### Update Portfolio Content

Edit `src/data/portfolioData.js` to update:
- About text
- Resume information (education, experience, skills)
- Portfolio projects
- Hackathon achievements
- Contact information

### Styling

The project uses CSS Modules with CSS custom properties (variables) for theming. Edit `src/styles/index.css` to customize colors and typography.

### Images

Replace images in the `public` folder:
- `my-avatar.png` - Your profile picture
- `project-*.jpg` - Project screenshots

## Setting Up EmailJS

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add your credentials to `.env.local`

## Performance Optimizations

- **Code Splitting**: React Router enables automatic code splitting
- **Lazy Loading**: Images use native lazy loading
- **Animation Optimization**: Framer Motion for GPU-accelerated animations
- **CSS Modules**: Scoped styling prevents style conflicts
- **Vite**: Ultra-fast bundler and development server

## Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Reduced motion preferences support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Contact

- Email: nmikhilsai@gmail.com
- Phone: +91 892 567 6110
- LinkedIn: [Mikhil Sai N](https://www.linkedin.com/in/mikhilsain/)
- GitHub: [MIKHILSAI](https://github.com/MIKHILSAI)

---

Built with by Mikhil Sai N
