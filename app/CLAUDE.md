# CLAUDE.md - App Directory

## Purpose
Next.js 14 app router directory containing the main application layout, pages, and routing structure for the Fathom landing page.

## Key Components
- **layout.tsx**: Root layout component with font configuration, metadata, and analytics scripts
- **page.tsx**: Main homepage component orchestrating all landing page sections
- **globals.css**: Global CSS styles and Tailwind CSS imports
- **privacy/page.tsx**: Privacy policy page

## Important Patterns
- Uses Next.js App Router architecture
- Font optimization with Next.js font loading (Inter + JetBrains Mono)
- SEO metadata configuration with OpenGraph tags
- Analytics integration (Waitlister and Vercel Analytics)
- Component composition pattern for landing page sections

## Dependencies
- External: Next.js, React, Tailwind CSS, Vercel Analytics, Waitlister
- Internal: All components from `/components` directory

## Critical Knowledge
- Font variables: `--font-inter` and `--font-mono` available globally
- Analytics scripts loaded via Next.js Script component with `afterInteractive` strategy
- OpenGraph metadata configured for social sharing
- Self-hosted Plausible Analytics ready but commented out
- Footer includes privacy policy link and branding

## Recent Changes
- Layout configured with dual font loading
- Main page structured with sequential landing page sections
- Privacy policy route established