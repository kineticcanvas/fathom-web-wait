# Fathom Landing Page

A modern Next.js 14 landing page built with TypeScript, Tailwind CSS, and optimized for performance and accessibility.

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

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

## License

This project is proprietary and confidential. All rights reserved. See the [LICENSE](LICENSE) file for details.