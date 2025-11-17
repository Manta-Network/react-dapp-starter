# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

_Note: This is a sample changelog provided as a demonstration for how to structure and document changes in your project. Please follow this format and replace these examples with real project change logs when using this template._

## [Unreleased]

### Added

- Comprehensive responsive design support with `useResponsive` hook
- Fluid typography system for smooth font scaling (390px - 1440px viewports)
- Enhanced Home page with wallet dashboard UI
- Mobile navigation with Sheet component
- Custom breakpoints based on design system (Mobile: 390px, Desktop: 1440px)

### Changed

- Upgraded to Tailwind CSS 4.x with native Vite integration
- Upgraded to React 19 and React Router 7
- Migrated Tailwind configuration from JS to CSS (`@theme inline` in index.css)
- Updated Reown AppKit to latest version (v1.8.14)
- Refactored Header component with simplified flat navigation

### Removed

- PostCSS configuration (no longer needed with Tailwind CSS 4.x)
- Tailwind config file (configuration moved to index.css)
- Deprecated Profile and History pages (replaced with Page1/Page2 structure)

## [0.1.0] - 2024-09-04

### Added

- Arabic translation ([#444](https://github.com/Manta-Network/react-dapp-starter/pull/6)).
- French translation.
- Dutch translation.
- Russian translation.

### Fixed

- Fix missing logo in 1.1 pages.
- Display notice when translation isn't for most recent version.
- Various broken links, page versions, and indentations.

### Changed

- Upgrade dependencies: Ruby 3.2.1, Middleman, etc.

### Removed

- Unused normalize.css file.
- Identical links assigned in each translation file.
- Duplicate index file for the english version.
