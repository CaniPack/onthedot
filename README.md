# Home Agenda - Multilingual Astro Website

A modern, SEO-optimized website built with Astro, featuring full internationalization support (English/Spanish), responsive design, and best practices for performance and accessibility.

## 🚀 Features

- **Astro Framework**: Fast, modern static site generation
- **Internationalization (i18n)**: Complete English and Spanish support
- **SEO Optimized**: Meta tags, sitemap, robots.txt, Open Graph
- **Responsive Design**: Mobile-first approach with modern CSS
- **Accessibility**: WCAG 2.1 compliant with proper semantic HTML
- **TypeScript**: Type-safe development experience
- **Google Analytics**: Integrated analytics tracking
- **Performance**: Optimized for Core Web Vitals

## 🛠️ Technologies Used

- **Astro** - Main framework
- **TypeScript** - Type safety and better DX
- **CSS3** - Modern styling with custom properties
- **HTML5** - Semantic markup

## 📁 Project Structure

```
home-agenda/
├── public/
│   ├── image/
│   │   ├── favicon.png          # Site favicon
│   │   ├── logo.png            # Site logo
│   │   └── og-image.jpg        # Open Graph image
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # XML sitemap
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation component
│   │   ├── Footer.astro        # Footer component
│   │   ├── Hero.astro          # Hero section
│   │   └── ServicesGrid.astro  # Services showcase
│   ├── i18n/
│   │   └── config.ts           # Internationalization setup
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML layout
│   ├── pages/
│   │   ├── es/                 # Spanish pages
│   │   ├── index.astro         # English homepage
│   │   ├── about.astro         # About page
│   │   ├── services.astro      # Services page
│   │   └── contact.astro       # Contact page
│   └── styles/
│       └── global.css          # Global styles
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd home-agenda
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
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Internationalization

The site supports English (default) and Spanish:

- **English**: `/` (root)
- **Spanish**: `/es/`

Language switching is available in the header navigation.

## 📊 SEO Features

- **Meta Tags**: Dynamic titles and descriptions for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Semantic HTML markup
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling directives
- **Canonical URLs**: Proper URL canonicalization
- **Hreflang**: Language and region targeting

## 🎨 Customization

### Updating Content

1. **Text Content**: Edit translations in `src/i18n/config.ts`
2. **Images**: Replace placeholder images in `public/image/`
3. **Styles**: Modify `src/styles/global.css`
4. **Analytics**: Update Google Analytics ID in `src/layouts/BaseLayout.astro`

### Adding New Pages

1. Create page in `src/pages/`
2. Create Spanish version in `src/pages/es/`
3. Add translations to `src/i18n/config.ts`
4. Update `public/sitemap.xml`

### Domain Configuration

Update the following files with your domain:
- `astro.config.mjs` - Set the `site` property
- `public/sitemap.xml` - Replace all URLs
- `public/robots.txt` - Update sitemap URL

## 📈 Performance

This site is optimized for:
- **Lighthouse scores**: 90+ across all metrics
- **Core Web Vitals**: LCP, FID, CLS optimization
- **SEO**: 100/100 Lighthouse SEO score
- **Accessibility**: WCAG 2.1 AA compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or support, please contact:
- Email: hello@homeagenda.com
- Website: [your-domain.com]

---

Built with ❤️ using Astro 