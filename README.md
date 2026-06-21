# SQT Website

A modern React + TypeScript + Vite website for Sharq Tech team.

## Prerequisites

- **Node.js**: >= 18.0.0
- **Yarn**: Preferred package manager (install from [yarnpkg.com](https://yarnpkg.com/getting-started/installation))

## Getting Started

### 1. Install dependencies
```bash
yarn install
```

> Note: The `yarn dev` script automatically runs `yarn install` before starting the dev server for convenience.

### 2. Run development server
```bash
yarn dev
```

Your app will be available at `http://localhost:5173` by default.

## Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server (auto installs dependencies first) |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint |
| `yarn create:component <Name` | Create a new component |
| `yarn create:page <Name>` | Create a new page |

## Generating Components & Pages

### Create a Component
```bash
yarn create:component Button
```
Creates:
```
src/components/Button/
├── index.ts          # Export file
├── Button.tsx       # Component with RAFC template
└── Button.styles.css  # Empty stylesheet
```
Also auto-updates `src/components/index.ts` with the new export!

### Create a Page
```bash
yarn create:page About
```
Creates:
```
src/pages/About/
├── index.ts   # Export file
└── page.tsx   # Page component
```
Also auto-updates `src/pages/index.ts` with the new export.
> Remember to add a route for your new page in `src/App.tsx`

## Project Structure
```
src/
├── components/      # Reusable UI components
│   ├── index.ts    # Barrel file (exports all components)
│   ├── Navigation/
│   └── Footer/
├── pages/          # Page components
│   ├── index.ts    # Barrel file (exports all pages)
│   ├── Home/
│   ├── Auth/
│   └── ...
├── App.tsx        # Main app component with routing
└── main.tsx       # Entry point with React
public/
├── assets/
│   ├── index.ts  # Export all assets
│   └── images/
css/              # Global stylesheets (imported in App.tsx)
```

## Tech Stack
- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Fast bundler and dev server
- **React Router DOM**: Client-side routing
- **CSS**: All existing styles preserved
