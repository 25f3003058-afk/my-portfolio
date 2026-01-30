# 📁 Project Structure Overview

## File Organization

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles with custom scrollbar & grain overlay
│   ├── layout.tsx            # Root layout with fonts and metadata
│   └── page.tsx              # Main page importing all sections
│
├── components/
│   ├── Hero.tsx              # Full-screen hero with typing animation
│   ├── About.tsx             # Professional introduction
│   ├── Academics.tsx         # Education timeline
│   ├── Projects.tsx          # Project cards (MOST IMPORTANT)
│   ├── Experience.tsx        # Startup journey
│   ├── Skills.tsx            # Categorized technical skills
│   ├── Contact.tsx           # Contact form & social links
│   └── Footer.tsx            # Simple footer
│
├── public/
│   └── resume.pdf            # Your resume (REPLACE THIS)
│
├── node_modules/             # Dependencies (auto-generated)
│
├── .next/                    # Build output (auto-generated)
│
├── tailwind.config.ts        # Tailwind customization (dark theme, fonts, animations)
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
│
├── README.md                 # Main documentation
├── CUSTOMIZATION.md          # Optional enhancements
└── DEPLOYMENT.md             # Deployment guide
```

## Key Files to Customize

### 1. **components/Hero.tsx**
- Line 42: Change "Your Name" to your actual name
- The tagline is automatically animated

### 2. **components/About.tsx**
- Lines 23-39: Update with your personal story

### 3. **components/Academics.tsx**
- Lines 11-26: Update `academics` array with your education

### 4. **components/Projects.tsx** ⭐ MOST IMPORTANT
- Lines 18-82: Update `projects` array with your actual projects
- Set `highlight: true` for featured projects
- Replace placeholder URLs

### 5. **components/Experience.tsx**
- Lines 13-57: Update `experiences` array with your startup journey

### 6. **components/Skills.tsx**
- Lines 11-48: Customize `skillCategories` with your skills

### 7. **components/Contact.tsx**
- Lines 67-69, 78-80, 89-91: Update email, LinkedIn, GitHub URLs

### 8. **components/Footer.tsx**
- Line 8: Update "Your Name"

### 9. **app/layout.tsx**
- Lines 18-20: Update page title and description (for SEO)

### 10. **public/resume.pdf**
- Replace with your actual resume PDF

## Component Features

### Hero Section
- ✅ Full-screen height
- ✅ Typing animation for tagline
- ✅ Two CTA buttons (View Projects, Download Resume)
- ✅ Animated scroll indicator
- ✅ Gradient background

### About Section
- ✅ Scroll-triggered fade-in animation
- ✅ Centered layout
- ✅ Dark background section

### Academics Section
- ✅ Timeline design with icons
- ✅ Hover effects on cards
- ✅ Coursework tags
- ✅ Staggered animations

### Projects Section ⭐
- ✅ Card-based grid layout (responsive)
- ✅ Featured project highlighting
- ✅ Tech stack tags
- ✅ Role and impact display
- ✅ Live Demo & GitHub buttons
- ✅ Hover scale effect
- ✅ 6 project examples (replace with yours)

### Experience Section
- ✅ Startup journey focus
- ✅ Key learnings list
- ✅ Challenge highlights
- ✅ Icon-based design
- ✅ Alternating animations

### Skills Section
- ✅ 4 categories (Languages, Frameworks, Tools, Concepts)
- ✅ Pill-style tags
- ✅ Hover color change effect
- ✅ Icon representation

### Contact Section
- ✅ Contact information cards with icons
- ✅ Working contact form (frontend)
- ✅ Social media links
- ✅ Resume download button
- ✅ Form validation

### Footer
- ✅ Copyright with current year
- ✅ Tech stack mention

## Design System

### Colors
- **Background**: `#000000` (Pure black)
- **Dark Sections**: `#1a1a1a`, `#141414`, `#0a0a0a`
- **Text**: `#ffffff` (White), `#f5f5f5`, `#e5e5e5` (Light greys)

### Fonts
- **Body**: Inter (Google Fonts)
- **Headings**: Poppins (Google Fonts)

### Animations
- **Fade In**: 0.6s ease-out
- **Slide Up**: 0.6s ease-out with Y translation
- **Hover**: 0.2s transitions
- **Typing Effect**: 50ms per character

### Spacing
- **Section Padding**: `py-24` (96px vertical)
- **Max Width**: Various (4xl, 5xl, 6xl, 7xl)
- **Gap**: Consistent 4-8 spacing units

### Responsive Breakpoints
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (640px)
- **Desktop**: `md:` (768px), `lg:` (1024px)

## Scripts

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Check for code issues
```

## Dependencies

### Core
- `next`: 16.1.6 (React framework)
- `react`: 19.x
- `react-dom`: 19.x
- `typescript`: Latest

### Styling
- `tailwindcss`: Latest
- `@tailwindcss/postcss`: Latest

### Animation
- `framer-motion`: Latest (smooth animations)

### Icons
- `lucide-react`: Latest (beautiful icons)

## Features Implemented

✅ Dark theme only (as requested)
✅ Smooth scroll animations
✅ Fully responsive design
✅ Typing animation in hero
✅ Hover effects on all interactive elements
✅ Grain texture overlay
✅ Custom scrollbar
✅ SEO-friendly structure
✅ Clean, modern Gen-Z aesthetic
✅ Apple/Vercel-inspired design
✅ All 7 required sections
✅ Contact form (frontend)
✅ Project showcase with details
✅ Startup journey emphasis
✅ Skills visualization
✅ Ready for Vercel deployment

## Next Steps

1. **Customize Content**: Update all placeholder text with your information
2. **Add Resume**: Replace `/public/resume.pdf`
3. **Update Links**: Change all social media and project URLs
4. **Test Locally**: Run `npm run dev` and test all sections
5. **Deploy**: Push to GitHub and deploy to Vercel
6. **Share**: Add to LinkedIn, resume, etc.

## Support

If you need help:
- Check README.md for basic instructions
- See CUSTOMIZATION.md for enhancement ideas
- Read DEPLOYMENT.md for hosting guide
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

---

Built with modern web technologies for maximum performance and visual appeal! 🚀
