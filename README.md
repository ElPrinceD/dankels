# Dankels Company Limited - Landing Website

A modern, responsive, and animated landing website for Dankels Company Limited, a professional cleaning company based in Telford, UK.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive and mobile-friendly
- 🎨 Color palette: White, Light Blue, and Green
- 🚀 Smooth scrolling navigation
- 💫 Fade-in animations on scroll
- 🎯 Interactive hover effects
- 📧 Contact form with validation
- 🗺️ Google Maps integration
- 💬 Testimonials slider

## Sections

1. **Hero Section** - Eye-catching header with call-to-action buttons
2. **About Us** - Company information with image gallery
3. **Services** - Grid layout showcasing cleaning services
4. **Why Choose Us** - Key differentiators with icons
5. **Testimonials** - Customer reviews slider
6. **Contact** - Contact form and company information
7. **Footer** - Social media links and copyright

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

### Quick Deploy Steps:

1. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Name it `dankels` (or your preferred name)
   - Make it **Public**
   - Don't initialize with any files

2. **Initialize Git and Push:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dankels.git
git push -u origin main
```

3. **Update Configuration:**
   - Update `package.json` homepage with your GitHub username
   - Update `vite.config.js` base path if repository name differs

4. **Deploy:**
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Deploy: `npm run deploy`

Or use GitHub Actions (recommended) - the workflow file is already set up!

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Animations & Transitions)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Dankels Company Limited. All rights reserved.

