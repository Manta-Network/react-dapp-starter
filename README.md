# React DApp Starter

![TypeScript](https://img.shields.io/badge/language-typescript-%233178c6.svg)

## Overview

`react-dapp-starter` is a robust and scalable template designed for building decentralized applications (DApps) with modern web technologies. This template is a production-ready foundation currently used in [Manta Network](https://manta.network/), designed to meet the demands of complex and scalable DApp development.

## Features

- **[TypeScript](https://www.typescriptlang.org/)**: Strongly-typed language that builds on JavaScript, giving you better tooling at any scale.
- **[React 19](https://react.dev/)**: Latest React version with improved performance and new features.
- **[React Router 7](https://reactrouter.com/)**: A declarative routing library for React that makes it easy to navigate your app.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework with native Vite integration and CSS-first configuration.
- **[Reown AppKit](https://reown.com/)**: The toolkit to build onchain app UX with wallet connection support.
- **[Wagmi](https://wagmi.sh/)**: A set of React Hooks for working with Ethereum.
- **[Viem](https://viem.sh/)**: A toolkit for handling Ethereum-related data and logic.
- **[Shadcn UI](https://ui.shadcn.com/)**: A collection of pre-built UI components for a fast and consistent development experience.
- **[Zustand](https://github.com/pmndrs/zustand)**: A small, fast, and scalable state management solution for React.
- **[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)**: Powerful data fetching, caching, and synchronization for server state management.
- **[React Responsive](https://github.com/yocontra/react-responsive)**: Media queries in React with custom breakpoint hooks.
- **ESLint & Prettier**: Code quality and formatting tools to ensure a clean codebase.

## Getting Started

1. **Clone the repository:**

   You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with this template.

   ```bash
   npx degit Manta-Network/react-dapp-starter#main your-project
   cd your-project
   ```

2. **Install dependencies (default: yarn):**

   ```bash
   yarn install
   ```

3. **Configure WalletConnect Project ID and Metadata:**
   - Visit [Reown Cloud](https://cloud.reown.com/) to create a project and obtain your `Project ID`.
   - Open the file `src/config/common.ts` in your project.
   - Locate the `WALLET_CONNECT_PROJECT_ID` key and replace `YOUR_PROJECT_ID` with your actual `Project ID`.
   - Update the `WALLET_CONNECT_METADATA` section with your project's details, including the name, description, URL, and icons.

4. **Run the development server:**

   ```bash
   yarn dev
   ```

5. **Build for production:**

   ```bash
   yarn build
   ```

## Responsive Design

This template includes comprehensive responsive design support:

### Tailwind CSS Breakpoints

```tsx
// Use responsive prefixes for different screen sizes
<h1 className="text-2xl md:text-4xl lg:text-5xl">Responsive Title</h1>

// Mobile-specific styles with max-md
<div className="block max-md:hidden">Desktop only</div>
<div className="hidden max-md:block">Mobile only</div>
```

### Custom Breakpoints Hook

```tsx
import { useResponsive } from '@/hooks/useResponsive';

function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return isMobile ? <MobileView /> : <DesktopView />;
}
```

### Fluid Typography (Optional)

For smooth font scaling across viewports (390px - 1440px):

```tsx
<h1 className="text-[clamp(1rem,0.8143rem+0.7619vw,1.5rem)]">
  Title smoothly scales from 16px to 24px
</h1>
```

Use the [Utopia Fluid Type Calculator](https://utopia.fyi/type/calculator?c=390,16,1.5,1440,24,1.5,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12) to generate custom clamp values.

## Project Structure

```plaintext
├── src/
│ ├── abis/ # Smart contract ABIs
│ ├── api/ # Optional API endpoints definitions
│ ├── assets/ # Static assets like images and fonts
│ ├── components/ # Reusable UI components
│ │ └── ui/ # Shadcn UI components
│ ├── config/ # Application configuration files
│ ├── hooks/ # Custom React hooks (useResponsive, etc.)
│ ├── lib/ # Utility functions and business logic
│ ├── pages/ # Application pages
│ ├── store/ # Global state management using Zustand
│ ├── types/ # TypeScript types
│ ├── AppRouter.tsx # Application routing
│ ├── index.css # Global styles & Tailwind CSS configuration
│ ├── main.tsx # Main entry point
│ └── vite-env.d.ts # Vite environment variables types
├── public/ # Static public assets
├── .gitignore # Git ignore file
├── .prettierrc # Prettier configuration
├── CHANGELOG.md # Project changelog
├── components.json # Shadcn UI components configuration
├── eslintrc.config.js # ESLint configuration
├── index.html # Main HTML file
├── package.json # Project metadata and dependencies
├── PROJECT_OVERVIEW.md # Overview of the project
├── README.md # Project README
├── tsconfig.app.json # App TypeScript configuration
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # Node.js TypeScript configuration
├── vercel.json # Vercel deployment configuration
├── vite.config.ts # Vite configuration
└── yarn.lock # Yarn lock file
```

## Contributing

Contributions are welcome! Please create an issue or submit a pull request if you find any bugs or have suggestions for improvements.

## Acknowledgements

Special thanks to the open-source community and the maintainers of the libraries and tools used in this template.
