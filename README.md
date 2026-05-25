# 🚀 Suddhodhan's Portfolio Website

A modern, interactive portfolio website showcasing projects, skills, and achievements with cutting-edge web technologies.

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.14-06B6D4?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.184.0-000000?logo=three.js&logoColor=white)

---

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- 🌓 **Dark/Light Mode** - Theme toggle for comfortable viewing
- ✨ **Smooth Animations** - Powered by Framer Motion and GSAP
- 🎯 **Interactive 3D Elements** - Three.js integration for immersive visuals
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Fast Performance** - Built with Vite for optimized builds
- 🔍 **SEO Optimized** - React Helmet for meta tags
- 📊 **Animated Statistics** - Dynamic number counters and carousels
- 🎮 **Orbital Skills Visualization** - Interactive skill display
- 🔗 **Social Integration** - GitHub, LinkedIn, and contact links

---

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)

---

## 📁 Project Structure

```
sudd-portfolio-website/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── layout/         # Layout components (Navbar, Footer, etc.)
│   │   ├── shared/         # Shared components (Logo, ThemeToggle, etc.)
│   │   └── LoadingScreen.jsx
│   ├── sections/           # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── StackSection.jsx
│   │   └── ... (more sections)
│   ├── data/               # Static data
│   │   └── sections.js
│   ├── hooks/              # Custom React hooks
│   ├── providers/          # Context providers
│   ├── store/              # State management (Zustand)
│   ├── utils/              # Utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                 # Static assets
│   ├── images/
│   ├── badges/
│   └── ...
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── package.json
```

---

## 🛠 Tech Stack

### Frontend Framework
- **React 19.2.6** - UI library with latest features
- **Vite 8.0.12** - Lightning-fast build tool

### Styling & Animation
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Framer Motion 12.39.0** - React animation library
- **GSAP 3.15.0** - Professional animation library

### 3D Graphics
- **Three.js 0.184.0** - 3D JavaScript library
- **@react-three/fiber 9.6.1** - React renderer for Three.js
- **@react-three/drei 10.7.7** - Useful helpers for Three.js

### Icons & UI
- **Lucide React 1.16.0** - Beautiful icon library
- **FontAwesome 7.2.0** - Icon library
- **Simple Icons 13.11.1** - Brand icons

### State Management & Utilities
- **Zustand 5.0.13** - Lightweight state management
- **React Helmet Async 3.0.0** - Manage document head
- **React Intersection Observer 10.0.3** - Lazy loading & scroll detection

### Development Tools
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **gh-pages** - GitHub Pages deployment

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ ([Download](https://nodejs.org/))
- npm 7+ or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Suddhu-IITH2004/sudd-portfolio.git
   cd sudd-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update `package.json` homepage**
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/portfolio-website"
   ```

2. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as source
   - Save

4. **Visit your website**
   ```
   https://YOUR-USERNAME.github.io/portfolio-website
   ```

For detailed deployment instructions, see [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md)

---

## 🎨 Customization

### Update Personal Information

1. **Edit `src/data/sections.js`** - Update content for all sections
2. **Replace images** - Add your photos to `public/images/`
3. **Update colors** - Modify `tailwind.config.js` for theme colors
4. **Customize sections** - Edit components in `src/sections/`

### Theme Configuration

Edit `tailwind.config.js` to customize:
- Color palette
- Typography
- Spacing
- Breakpoints

### Adding New Sections

1. Create new component in `src/sections/`
2. Import in `src/App.jsx`
3. Add to page layout
4. Update `src/data/sections.js` with content

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Contact

- **GitHub:** [Suddhu-IITH2004](https://github.com/Suddhu-IITH2004)
- **Portfolio:** [Visit Website](https://suddhu-iith2004.github.io/sudd-portfolio)

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)
- 3D graphics with [Three.js](https://threejs.org)
- Deployed with [GitHub Pages](https://pages.github.com)

---

**Made with ❤️ by Suddhodhan**
