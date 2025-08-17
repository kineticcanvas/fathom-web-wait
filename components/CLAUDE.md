# CLAUDE.md - Components Directory

## Purpose
React components for the Fathom landing page, organized into page sections and reusable UI components. Follows a component composition pattern with clear separation between layout sections and UI primitives.

## Key Components

### Landing Page Sections
- **hero-section.tsx**: Main hero with value proposition, CTAs, and scarcity messaging
- **cost-section.tsx**: Cost of missed opportunities section
- **validation-section.tsx**: Social proof and validation section  
- **question-section.tsx**: Interactive questioning section
- **invitation-section.tsx**: Final CTA and email signup section
- **navbar.tsx**: Fixed navigation header with branding and privacy link

### UI Components
- **ui/button.tsx**: Customizable button component using CVA variants
- **ui/input.tsx**: Input component for forms

## Important Patterns
- Component composition for landing page flow
- CVA (Class Variance Authority) for component variants
- Radix UI integration for accessible primitives
- Lucide React icons throughout
- Responsive design with Tailwind CSS
- External link handling with security attributes
- Environment variable usage for configurable links

## Dependencies
- External: React, Lucide React, Radix UI Slot, Class Variance Authority
- Internal: `/lib/utils` for utility functions

## Critical Knowledge
- Button component supports `asChild` prop for polymorphic rendering
- Hero section uses `NEXT_PUBLIC_CAL_LINK` environment variable
- Color scheme: slate grays with cyan and amber accents
- Hover effects with scale transforms
- Fixed navbar with backdrop blur
- Scarcity messaging in hero for conversion optimization
- All external links include security attributes

## Recent Changes
- Button variants configured for landing page theme
- Hero section includes scarcity alert messaging
- Navbar positioned as fixed with backdrop blur effect