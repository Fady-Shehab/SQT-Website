# Commands Reference

All commands are run via `yarn <script>`.

## Development

| Command | Description |
|---------|-------------|
| `yarn dev` | Start the Vite development server. Automatically runs `yarn install` first. |
| `yarn build` | Run TypeScript compiler then build for production. Output goes to `dist/`. |
| `yarn preview` | Preview the production build locally. |
| `yarn lint` | Run ESLint on `.ts` and `.tsx` files. |

## Scaffolding

### `yarn create:component <Name>`

Creates a new reusable component under `src/components/`.

**Example:**
```bash
yarn create:component Button
```

Creates:
```
src/components/Button/
├── index.ts          # Barrel re-export
├── Button.tsx        # Component with React.FC template (modify as needed)
└── Button.styles.css # Empty stylesheet (delete if using global CSS)
```

Auto-updates `src/components/index.ts` with the new export.

### `yarn create:page <Name>`

Creates a new page under `src/pages/`.

**Example:**
```bash
yarn create:page About
```

Creates:
```
src/pages/About/
├── index.ts   # Barrel re-export
└── page.tsx   # Page component
```

Auto-updates `src/pages/index.ts` with the new export. Remember to add a route in `src/App.tsx`.

## Generated Components

| Component | Description |
|-----------|-------------|
| `Button` | Button with `primary`, `secondary`, `text`, `icon`, `brand` variants |
| `Badge` | Status badge with `gold`, `green`, `silver` variants |
| `StatsCard` | Statistic display card with icon, number, label, optional suffix and animation |
| `SectionHeader` | Standardised section header with eye label, title, gold rule, subtitle |
| `ProjectCard` | Project card for grids with image, tags, status badge |
| `ValueCard` | Value/culture card for the Team page |
| `Avatar` | User avatar with image or initials fallback |
| `Breadcrumb` | Breadcrumb navigation with separator |
| `Reveal` | Scroll-reveal wrapper for fade-up animations |

## Utilities

| Location | Description |
|----------|-------------|
| `src/utils/api/` | HTTP client with `get`, `post`, `patch` helpers and retry logic |
| `src/utils/services/` | Business logic layer (auth, etc.) |
| `src/utils/hooks/` | Custom React hooks |
