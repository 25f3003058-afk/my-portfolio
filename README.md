# 🎨 Personal Portfolio Website

A modern, fully animated personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Dark Theme Design**: Professional black & dark grey aesthetic with clean spacing
- **Smooth Animations**: Framer Motion powered scroll animations and transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **SEO Optimized**: Ready for deployment with proper meta tags

## 📦 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Language**: TypeScript

## 🛠 Installation & Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Personal Information

Edit the following files to add your information:

**Hero Section** (`components/Hero.tsx`):
- Change "Your Name" to your actual name
- The tagline is already animated with typing effect

**About Section** (`components/About.tsx`):
- Update the paragraphs with your own story
- Keep it concise and focused on problem-solving

**Contact Section** (`components/Contact.tsx`):
- Replace placeholder email, LinkedIn, and GitHub URLs
- Update contact information

### 2. Academics

Edit `components/Academics.tsx`:
- Update the `academics` array with your education details
- Add/remove entries as needed

### 3. Projects

Edit `components/Projects.tsx`:
- Modify the `projects` array with your actual projects
- Each project includes:
  - Name, problem statement, tech stack
  - Your role, impact/results
  - Live demo and GitHub links
  - Set `highlight: true` for featured projects

### 4. Experience

Edit `components/Experience.tsx`:
- Update the `experiences` array with your startup journey
- Include learnings and challenges faced

### 5. Skills

Edit `components/Skills.tsx`:
- Customize the `skillCategories` array
- Add/remove skills based on your expertise

### 6. Resume

Place your resume PDF file in the `/public` folder:
- Name it `resume.pdf`
- Or update the links in Hero.tsx and Contact.tsx if using a different name

## 🎨 Design Features

- **Typography**: Uses Inter for body text and Poppins for headings
- **Color Scheme**: 
  - Background: Pure black (#000000)
  - Dark variations for sections
  - White and light grey text
- **Animations**:
  - Scroll-triggered animations on all sections
  - Smooth hover effects on cards and buttons
  - Typing animation in hero section
  - Grain texture overlay for premium feel

## 📱 Sections Overview

1. **Hero**: Full-screen intro with name and animated tagline
2. **About**: Brief professional introduction
3. **Academics**: Education timeline with coursework
4. **Projects**: Card-based showcase of your work (most important section)
5. **Experience**: Startup journey with learnings and challenges
6. **Skills**: Categorized technical skills
7. **Contact**: Social links and contact form
8. **Footer**: Simple copyright and tech stack mention

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

Your portfolio will be live in minutes!

### Other Options

- **Netlify**: Similar to Vercel, drag & drop deployment
- **AWS Amplify**: For AWS users
- **Custom Server**: Run `npm run build` then `npm start`

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for smooth scroll performance
- Minimal bundle size
- Fast page loads

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
