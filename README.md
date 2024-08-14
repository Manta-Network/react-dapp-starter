# React DApp Starter

![TypeScript](https://img.shields.io/badge/language-typescript-%233178c6.svg)

## Overview

`react-dapp-starter` is a robust and scalable template designed for building decentralized applications (DApps) with modern web technologies. This template is a production-ready foundation currently used in [Manta Network](https://manta.network/), designed to meet the demands of complex and scalable DApp development.

## Features

- **[TypeScript](https://www.typescriptlang.org/)**: Strongly-typed language that builds on JavaScript, giving you better tooling at any scale.
- **[React Router](https://reactrouter.com/)**: A declarative routing library for React that makes it easy to navigate your app.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Web3Modal](https://docs.walletconnect.com/appkit/react/core/installation)**: An easy-to-use library for integrating multiple wallet providers.
- **[Wagmi](https://wagmi.sh/)**: A set of React Hooks for working with Ethereum.
- **[Viem](https://viem.sh/)**: A toolkit for handling Ethereum-related data and logic.
- **[Shadcn UI](https://ui.shadcn.com/)**: A collection of pre-built UI components for a fast and consistent development experience.
- **[Zustand](https://github.com/pmndrs/zustand)**: A small, fast, and scalable state management solution for React.

## Getting Started

### Installation

1. **Clone the repository:**

   You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with this template.

   ```bash
   npx degit Manta-Network/react-dapp-starter#main your-project
   cd your-project
   ```

2. **Install dependencies:**

   Using Yarn:

   ```bash
   yarn install
   ```

   Or using npm:

   ```bash
   npm install
   ```

3. **Configure WalletConnect Project ID:**

   - Go to [WalletConnect Cloud](https://cloud.walletconnect.com) to create a project and obtain your `Project ID`.
   - Open the file `src/config/common.ts` in your project.
   - Replace the placeholder `YOUR_PROJECT_ID` with your actual `Project ID` from WalletConnect Cloud.

4. **Run the development server:**

   Using Yarn:

   ```bash
   yarn dev
   ```

   Or using npm:

   ```bash
   npm run dev
   ```

5. **Build for production:**

   Using Yarn:

   ```bash
   yarn build
   ```

   Or using npm:

   ```bash
   npm run build
   ```

6. **Preview the production build:**

   Using Yarn:

   ```bash
   yarn preview
   ```

   Or using npm:

   ```bash
   npm run preview
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
│ ├── index.scss # Global styles
│ ├── main.tsx # Main entry point
│ └── vite-env.d.ts # Vite environment variables types
├── public/ # Static public assets
├── .eslintrc.cjs # ESLint configuration
├── .gitignore # Git ignore file
├── .prettierrc # Prettier configuration
├── components.json # Shadcn UI components configuration
├── index.html # Main HTML file
├── package.json # Project metadata and dependencies
├── postcss.config.js # PostCSS configuration
├── README.md # Project README
├── tailwind.config.js # Tailwind CSS configuration
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
