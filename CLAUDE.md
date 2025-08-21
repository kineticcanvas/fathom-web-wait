# CLAUDE.md - Fathom Landing Page

## Project Overview
Next.js 14 landing page for Fathom, a client intelligence platform for consulting professionals. Built with TypeScript, Tailwind CSS, and Vercel Analytics.

## Architecture
- **Next.js 14** with App Router (see `app/CLAUDE.md` for details)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** for accessible components (see `components/CLAUDE.md` for details)
- **Vercel Analytics** for tracking

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Key Features
- Landing page with multiple sections (hero, cost, validation, question, invitation)
- Privacy policy page
- Responsive design with gradient backgrounds
- Font optimization (Inter + JetBrains Mono)
- SEO-optimized with metadata and OpenGraph tags

## Site Structure
- `/` - Main landing page
- `/privacy` - Privacy policy page

## SEO Files
- `public/robots.txt` - Search engine crawler instructions with AI crawler support
- `public/sitemap.xml` - Site structure for search engines
- `public/llms.txt` - AI training data information

## Analytics & External Integrations
- **Vercel Analytics** - Integrated user tracking
- **Waitlister** - Email collection embed
- **Cal.com** - Discovery calls integration
- **Self-hosted Plausible Analytics** - Ready but currently commented out

## Directory Structure
- **`/app`** - Next.js App Router files (layout, pages, routing) - see `app/CLAUDE.md`
- **`/components`** - React components and UI primitives - see `components/CLAUDE.md`
- **`/lib`** - Utility functions including `cn()` for CSS class merging with tailwind-merge
- **`/public`** - Static assets and SEO files

## Utilities (/lib)
- **utils.ts**: CSS class merging utility using clsx and tailwind-merge
  - `cn()` function properly merges Tailwind CSS classes with conflict resolution
  - Essential for component variant systems and conditional styling
  - Used throughout UI components for dynamic class composition

## Dependencies
- **External**: Next.js, React, TypeScript, Tailwind CSS, Vercel Analytics, Waitlister, Radix UI, clsx, tailwind-merge
- **Internal**: Components reference utilities from `/lib`

## Domain
Production: https://tryfathom.ai