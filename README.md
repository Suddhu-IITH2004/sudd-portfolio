# Suddhodhan Jajula | AI Engineer Portfolio

Production-grade portfolio website showcasing AI/ML engineering projects, enterprise RAG systems, and cloud automation work.

🔗 **Live Site:** [https://suddhu-iith2004.github.io/sudd-portfolio/](https://suddhu-iith2004.github.io/sudd-portfolio/)

---

## 🚀 Tech Stack

### Core
- **React 19** - UI framework
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion 12** - Animation library

### State & Utilities
- **Zustand 5** - Lightweight state management
- **React Intersection Observer** - Scroll-based animations
- **Lucide React** - Icon system
- **Classnames** - Conditional CSS classes

### Build & Deploy
- **GitHub Pages** - Static hosting
- **gh-pages** - Automated deployment
- **PostCSS & Autoprefixer** - CSS processing

---

## 🏗️ Project Structure

```
sudd-portfolio-website/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   ├── shared/          # Reusable components
│   │   ├── Navbar.jsx
│   │   └── LoadingScreen.jsx
│   ├── sections/            # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── LeadershipSection.jsx
│   │   └── ContactSection.jsx
│   ├── hooks/               # Custom React hooks
│   ├── store/               # Zustand state management
│   ├── utils/               # Utility functions
│   ├── providers/           # Context providers
│   ├── data/                # Static data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── images/
│   └── badges/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites
- **Node.js 20.19+** or **22.12+**
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Suddhu-IITH2004/sudd-portfolio.git
cd sudd-portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev        # Start dev server with hot reload
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run deploy     # Build and deploy to GitHub Pages
```

---

## 🚢 Deployment

### GitHub Pages Deployment

This portfolio is configured for automated GitHub Pages deployment.

**Deploy Command:**

```bash
npm run deploy
```

This command:
1. Builds the production bundle (`npm run build`)
2. Pushes the `dist/` folder to the `gh-pages` branch
3. GitHub Pages automatically serves from this branch

**Configuration:**

- Base path: `/sudd-portfolio/` (set in `vite.config.js`)
- Repository: `https://github.com/Suddhu-IITH2004/sudd-portfolio`
- Branch: `gh-pages`

---

## ⚙️ Configuration

### ⚠️ Tailwind Breakpoints (IMPORTANT)

**This project uses INVERTED (desktop-first) Tailwind breakpoints:**

```js
// tailwind.config.js
screens: {
  '2xl': { max: '1535px' },  // Desktop-first approach
  'xl':  { max: '1279px' },
  'lg':  { max: '1023px' },
  'md':  { max: '767px' },   // Applies to ≤767px
  'sm':  { max: '639px' },   // Applies to ≤639px
  'xs':  { max: '479px' },
}
```

**What this means:**

- `md:w-full` applies to screens **≤767px** (mobile/tablet), NOT larger
- `sm:text-lg` applies to screens **≤639px** (mobile), NOT larger
- Default (no prefix) applies to **all screens** (desktop-first)

**Example:**
```jsx
// This reads: "Half width on desktop, full width on mobile/tablet"
<div className="w-1/2 md:w-full">
```

⚠️ **This is opposite to Tailwind's default mobile-first approach.** All responsive classes in this codebase follow this pattern consistently.

### Environment Variables

```bash
# .env.local (optional)
VITE_BASE_PATH=/sudd-portfolio/
```

---

## 📊 Performance

### Bundle Size (Production)
- HTML: 3.54 kB (gzip: 1.14 kB)
- CSS: 41.20 kB (gzip: 7.69 kB)
- JS: ~392 kB (gzip: ~122 kB)

### Optimizations
- ✅ Code splitting with Vite
- ✅ Lazy loading images
- ✅ Framer Motion animations on-demand
- ✅ Intersection Observer for scroll animations
- ✅ Reduced loading screen duration (1.5s)
- ✅ Removed unused dependencies

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

- ✅ Skip-to-content link for keyboard navigation
- ✅ Focus-visible styles on all interactive elements
- ✅ ARIA labels on icon buttons
- ✅ Semantic HTML structure (`<main>`, `<nav>`, `<section>`)
- ✅ Minimum 44x44px touch targets (mobile)
- ✅ Prefers-reduced-motion support
- ✅ Keyboard navigation support
- ✅ `aria-current` for active navigation items

### Tested On
- Chrome/Edge (Desktop + Mobile)
- Safari (iOS)
- Firefox
- Screen readers (NVDA, VoiceOver)

---

## 🎨 Design System

### Colors
```css
--color-canvas: Light sage tint / Dark navy
--color-surface: Pure white / Deep slate
--color-text: Dark organic slate / Light slate
--color-muted: Earth gray / Medium slate
--color-accent: #58e6d9 (Teal)
--color-accentSoft: #9c6bff (Purple)
```

### Typography
- **Display:** Space Grotesk (headings)
- **Body:** IBM Plex Sans (paragraphs)
- **Mono:** JetBrains Mono (code, badges)

### Spacing Scale
- Uses Tailwind's default spacing scale (4px base)
- Custom section padding: `py-24 lg:py-20 md:py-16`

---

## 🔍 SEO

### Implemented
- ✅ Semantic HTML structure
- ✅ OpenGraph meta tags
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data (Person schema)
- ✅ Canonical URL
- ✅ Optimized title and description
- ✅ Social media preview images

### Meta Tags
```html
<title>Suddhodhan Jajula | AI Engineer | Production RAG Systems</title>
<meta name="description" content="AI Engineer building production RAG systems serving 500+ users..." />
```

---

## 📝 Content Management

### Updating Projects

Edit `src/sections/ProjectsSection.jsx`:

```jsx
const featuredProject = {
  title: 'Your Project Name',
  summary: 'Brief description...',
  highlights: ['Bullet 1', 'Bullet 2'],
  stack: ['Tech1', 'Tech2'],
  image: '/images/projects/your-image.png',
  metrics: { users: '500+', documents: '1,000+', latency: '<1.2s' }
}
```

### Updating Experience

Edit `src/sections/AboutSection.jsx`:

```jsx
const experiences = [
  {
    role: 'Your Role',
    company: 'Company Name',
    companyLink: 'https://company.com',
    period: 'Start — End',
    location: 'City, Country',
    description: 'What you did...'
  }
]
```

---

## 🐛 Known Issues & Technical Debt

### Minor
- Dark mode toggle commented out (theme system exists but UI hidden)
- Some console.log statements in NavLink.jsx (debug code)

### Future Enhancements
- [ ] Add blog section with MDX support
- [ ] Implement view transitions API
- [ ] Add analytics (privacy-respecting)
- [ ] Progressive Web App (PWA) features
- [ ] Automated Lighthouse CI checks

---

## 🔒 Security

- No API keys or secrets in frontend code
- All external links use `rel="noopener noreferrer"`
- HTTPS enforced via GitHub Pages
- Content Security Policy ready (if needed)

---

## 📄 License

© 2026 Suddhodhan Jajula. All rights reserved.

This portfolio is for personal use and demonstration purposes.

---

## 🤝 Contact

- **Email:** suddhu11050@gmail.com
- **LinkedIn:** [linkedin.com/in/suddhodhan-jajula-682184234](https://www.linkedin.com/in/suddhodhan-jajula-682184234/)
- **GitHub:** [github.com/Suddhu-IITH2004](https://github.com/Suddhu-IITH2004)

---

## 🙏 Acknowledgments

Built with modern web technologies and best practices for performance, accessibility, and user experience.

Special attention to:
- Production-first engineering principles
- Mobile-first responsive design
- WCAG 2.1 accessibility standards
- Core Web Vitals optimization
