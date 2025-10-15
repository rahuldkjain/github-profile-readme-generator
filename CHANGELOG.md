# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-10-15

### ✨ Features

- **Complete rewrite**: Migrated to Next.js 15 with App Router and Turbopack
- **React 19**: Updated to latest React with concurrent features
- **TypeScript 5**: Full type safety with strict configuration
- **Modern UI**: Tailwind CSS 4 with design tokens and CSS variables
- **Accessibility**: WCAG 2.1 AA compliance with accessibility menu
- **Privacy**: GDPR-compliant analytics with opt-in consent
- **Performance**: 3x faster builds and 50% smaller bundle size
- **Auto-fill**: GitHub integration for automatic profile data
- **Export/Import**: JSON functionality for profile data
- **Enhanced UX**: Multi-step wizard with real-time validation
- **Responsive**: Mobile-first design with touch optimization

### 🐛 Bug Fixes

- Fixed skill selection persistence across sessions
- Resolved theme toggle flickering on page load
- Fixed social media icon alignment issues
- Corrected markdown preview rendering edge cases

### ⚡ Performance Improvements

- Implemented code splitting with lazy loading
- Optimized bundle size with Turbopack
- Added image optimization for better loading
- Reduced JavaScript bundle by 50%

### ♻️ Code Refactoring

- Migrated from Gatsby to Next.js 15
- Converted all components to TypeScript
- Implemented modern React patterns (hooks, context)
- Restructured project architecture for scalability

### 📚 Documentation

- Added comprehensive TypeScript documentation
- Created accessibility guidelines
- Updated deployment documentation
- Added contributing guidelines for V2

### 🏗️ Build System

- Migrated to Next.js build system
- Added Turbopack for development
- Implemented ESLint + Prettier configuration
- Added Vitest for testing

### 👷 Continuous Integration

- Enhanced GitHub Actions workflows
- Added preview deployments with environment tracking
- Implemented automated release management
- Added comprehensive testing pipeline

---

## Previous Versions (V1)

For changes in V1, see the [V1 Release Archive](https://github.com/rahuldkjain/github-profile-readme-generator/releases?q=v1&expanded=true).

### Migration from V1 to V2

V2 represents a complete rewrite with breaking changes:

- **Technology Stack**: Gatsby → Next.js 15
- **Styling**: CSS Modules → Tailwind CSS 4
- **State Management**: Local state → Zustand + localStorage
- **Build System**: Webpack → Turbopack
- **Type Safety**: JavaScript → TypeScript 5

All V1 functionality has been preserved and enhanced in V2. See [MIGRATION_STRATEGY.md](./MIGRATION_STRATEGY.md) for detailed migration information.
