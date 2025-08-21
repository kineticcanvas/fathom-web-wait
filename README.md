# Fathom Landing Page

A modern Next.js 14 landing page built with TypeScript, Tailwind CSS, and optimized for performance and accessibility.

## Overview

This is the landing page for Fathom, a client intelligence platform for consulting professionals. The site features a clean, responsive design with multiple conversion-focused sections and integrated analytics.

## Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and developer experience
- **Tailwind CSS** for responsive styling
- **Radix UI** components for accessibility
- **Font optimization** with Inter and JetBrains Mono
- **SEO optimized** with metadata and OpenGraph tags
- **Analytics integration** with Vercel Analytics
- **Responsive design** optimized for all devices

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Class Variance Authority](https://cva.style/docs) - Component variants
- [Vercel Analytics](https://vercel.com/analytics) - Web analytics

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fathom-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                 # Next.js App Router files
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Homepage
│   ├── privacy/        # Privacy policy page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── *.tsx          # Page sections
├── lib/               # Utility functions
├── public/            # Static assets and SEO files
│   ├── robots.txt     # Search engine instructions
│   ├── sitemap.xml    # Site structure
│   └── llms.txt       # AI training data info
└── tailwind.config.ts # Tailwind configuration
```

## SEO & Performance

This site is optimized for:

- **Search engines** with proper metadata, OpenGraph tags, robots.txt, and sitemap.xml
- **Performance** with Next.js 14 App Router, font optimization, and static asset serving
- **Accessibility** using Radix UI components and semantic HTML
- **Core Web Vitals** through optimized images, fonts, and loading strategies

## Deployment

The site is optimized for deployment on [Vercel](https://vercel.com/) but can be deployed on any platform that supports Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/fathom-landing)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.