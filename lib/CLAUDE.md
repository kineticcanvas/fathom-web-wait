# CLAUDE.md - Lib Directory

## Purpose
Utility functions and shared helpers for the Fathom application. Currently contains styling utilities for component composition.

## Key Components
- **utils.ts**: CSS class merging utility using clsx and tailwind-merge

## Important Patterns
- Class merging with conflict resolution using tailwind-merge
- Conditional class application using clsx
- Type-safe className handling with ClassValue type
- Single export utility pattern

## Dependencies
- External: clsx, tailwind-merge
- Internal: None

## Critical Knowledge
- `cn()` function properly merges Tailwind CSS classes with conflict resolution
- Prevents style conflicts when multiple classes target the same property
- Essential for component variant systems and conditional styling
- Used throughout UI components for dynamic class composition
- tailwind-merge handles Tailwind-specific class conflicts intelligently

## Recent Changes
- Standard utility implementation for Tailwind class merging