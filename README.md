# React DApp Starter

![TypeScript](https://img.shields.io/badge/language-typescript-%233178c6.svg)

## Overview

`react-dapp-starter` is a robust and scalable template designed for building decentralized applications (DApps) with modern web technologies. This template is a production-ready foundation currently used in [Manta Network](https://manta.network/), designed to meet the demands of complex and scalable DApp development.

## Features

- **[TypeScript](https://www.typescriptlang.org/)**: Strongly-typed language that builds on JavaScript, giving you better tooling at any scale.
- **[React Router](https://reactrouter.com/)**: A declarative routing library for React that makes it easy to navigate your app.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Web3Modal](https://docs.walletconnect.com/appkit/react/core/installation)**: An easy-to-use library for integrating multiple wallet providers.
- **[Reown](https://reown.com/)**: The toolkit to build onchain app UX.
- **[Wagmi](https://wagmi.sh/)**: A set of React Hooks for working with Ethereum.
- **[Viem](https://viem.sh/)**: A toolkit for handling Ethereum-related data and logic.
- **[Shadcn UI](https://ui.shadcn.com/)**: A collection of pre-built UI components for a fast and consistent development experience.
- **[Zustand](https://github.com/pmndrs/zustand)**: A small, fast, and scalable state management solution for React.
- **[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)**: Powerful data fetching, caching, and synchronization for server state management.
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

   - Visit [Reown Cloud](https://cloud.reown.com/?utm_source=cloud_banner&utm_medium=docs&utm_campaign=backlinks&_gl=1*1fv6aj9*_ga*MjA2ODU1MTAwMS4xNzMzNzI3OTM5*_ga_X117BZWK4X*MTc0MTg1MDU3MC45LjEuMTc0MTg1MjIyMi4wLjAuMA..) to create a project and obtain your `Project ID`.
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

## Project Structure

```plaintext
├── src/
│ ├── abis/ # Smart contract ABIs
│ ├── api/ # Optional API endpoints definitions
│ ├── assets/ # Static assets like images and fonts
│ ├── components/ # Reusable UI components
│ ├── config/ # Application configuration files
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions and business logic
│ ├── pages/ # Application pages
│ ├── store/ # Global state management using Zustand
│ ├── types/ # TypeScript types
│ ├── AppRouter.tsx # Application routing
│ ├── index.css # Global styles
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
├── postcss.config.js # PostCSS configuration
├── PROJECT_OVERVIEW.md # Overview of the project
├── README.md # Project README
├── tailwind.config.js # Tailwind CSS configuration
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
