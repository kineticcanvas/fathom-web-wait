# CLAUDE.md - App Directory

*For project overview and development commands, see root `/CLAUDE.md`*

## Purpose
Next.js 14 app router directory containing the main application layout, pages, and routing structure for the Fathom landing page.

## Key Components
- **layout.tsx**: Root layout component with font configuration, metadata, and analytics scripts
- **page.tsx**: Main homepage component orchestrating all landing page sections
- **globals.css**: Global CSS styles and Tailwind CSS imports
- **privacy/page.tsx**: Privacy policy page

## Next.js App Router Patterns
- Uses Next.js App Router architecture (not Pages Router)
- File-based routing with nested layouts
- Server components by default with client component opt-in
- Metadata API for SEO configuration
- Font optimization with Next.js font loading

## Layout Architecture
- **Root layout** handles global concerns:
  - Font loading (Inter + JetBrains Mono)
  - Global CSS imports
  - Analytics script loading
  - HTML structure and metadata

## Page Structure
- **Homepage** (`page.tsx`): Component composition pattern
  - Sequential landing page sections
  - Imports all major components from `/components`
  - Footer with privacy policy link integrated

## Critical Implementation Details
- **Font variables**: `--font-inter` and `--font-mono` available globally via CSS variables
- **Analytics loading**: Scripts loaded via Next.js Script component with `afterInteractive` strategy
- **OpenGraph metadata**: Configured for social sharing with proper locale (en_GB)
- **Self-hosted Plausible**: Ready but commented out in layout
- **Component imports**: All landing sections imported from `/components` directory

## Dependencies
- **Internal**: All components from `/components` directory (see `components/CLAUDE.md`)
- **External**: Next.js Script component, Google Fonts, Vercel Analytics, Waitlister

## Routing
- `/` - Main homepage (page.tsx)
- `/privacy` - Privacy policy page (privacy/page.tsx)