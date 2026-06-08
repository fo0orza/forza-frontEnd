# AI Project Setup Blueprint

## 1. Project Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript (strict, `noUncheckedIndexedAccess`)
- **Styling:** TailwindCSS v4 (CSS-first, `@theme` tokens in `styles/tailwind.css`)
- **UI library:** shadcn/ui on top of Radix UI primitives, `class-variance-authority` for variants, `tailwind-merge` + `clsx` (via `cn` helper)
- **i18n:** `next-intl` with `[locale]` segment routing and JSON message catalogs
- **State management:** Zustand
- **Forms / validation:** `@radix-ui/react-form` + Zod
- **Env validation:** `@t3-oss/env-nextjs` + Zod
- **Icons:** `lucide-react`, `@hugeicons/react` + `@hugeicons/core-free-icons`
- **Drawer / sheet:** `vaul`
- **Testing:** Vitest + Testing Library (unit), Playwright (e2e)
- **Stories:** Storybook
- **Observability:** `@vercel/otel` + OpenTelemetry SDK
- **Tooling:** ESLint 9 (flat config) + Prettier + `prettier-plugin-tailwindcss` + `eslint-plugin-tailwindcss`
- **Package manager:** pnpm (10.x)

## 2. Required Dependencies

```bash
pnpm add next react react-dom next-intl zustand zod \
  @t3-oss/env-nextjs \
  @radix-ui/react-accordion @radix-ui/react-checkbox @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu @radix-ui/react-form @radix-ui/react-label \
  @radix-ui/react-popover @radix-ui/react-radio-group @radix-ui/react-scroll-area \
  @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-slot \
  @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle-group \
  @radix-ui/react-tooltip @radix-ui/react-visually-hidden \
  class-variance-authority clsx tailwind-merge tw-animate-css vaul \
  lucide-react @hugeicons/react @hugeicons/core-free-icons \
  @vercel/otel @opentelemetry/api
```

```bash
pnpm add -D typescript @types/node @types/react @types/react-dom \
  tailwindcss @tailwindcss/postcss postcss postcss-import \
  shadcn \
  eslint eslint-config-next eslint-config-prettier \
  eslint-plugin-import eslint-plugin-tailwindcss \
  @typescript-eslint/eslint-plugin typescript-eslint \
  prettier prettier-plugin-tailwindcss \
  vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom \
  @vitejs/plugin-react vite-tsconfig-paths \
  @playwright/test \
  @next/bundle-analyzer cross-env \
  @total-typescript/ts-reset
```

## 3. Project Creation Command

```bash
pnpm dlx create-next-app@latest my-project --ts --eslint --app --no-src-dir --import-alias "@/*"
cd my-project
```

After scaffolding, initialize shadcn:

```bash
pnpm dlx shadcn@latest init
```

## 4. Folder Structure To Create

This project uses a **root-based** layout (no `src/`) with `@/*` resolving to the repo root.

```txt
app/
  [locale]/
    layout.tsx
    page.tsx
  api/
assets/
components/
  ui/
  shared/
constants/
features/
helpers/
hooks/
i18n/
interfaces/
lib/
messages/
store/
styles/
types/
widgets/
public/
```

Notes:
- `components/ui` — shadcn-style primitives.
- `components/shared` — composed, business-neutral shared blocks (navbar, footer, logo, etc.).
- `widgets/` — page-level sections composed from `components/*` and `features/*`.
- `features/<feature>/` — feature-scoped components, hooks, and logic.
- `interfaces/` — TS `interface` declarations per domain file.
- `types/` — TS `type` aliases and `*.d.ts` ambient declarations.
- `constants/` — static data tables (often paired 1:1 with `interfaces/<same-name>.ts`).
- `i18n/` — `routing.ts`, `navigation.ts`, `request.ts` for `next-intl`.
- `messages/` — locale JSON files (`en.json`, `ar.json`, …).

## 5. Folder Creation Commands

```bash
mkdir -p app/api
mkdir -p assets/imgs
mkdir -p components/ui
mkdir -p components/shared
mkdir -p constants
mkdir -p features
mkdir -p helpers
mkdir -p hooks
mkdir -p i18n
mkdir -p interfaces
mkdir -p lib
mkdir -p messages
mkdir -p store
mkdir -p styles
mkdir -p types
mkdir -p widgets
mkdir -p public
```

If the project is locale-aware, also:

```bash
mkdir -p "app/[locale]"
```

## 6. Configuration Files To Recreate

- **`tsconfig.json`** — `strict: true`, `noUncheckedIndexedAccess: true`, `moduleResolution: bundler`, `jsx: react-jsx`, `baseUrl: "."`, `paths: { "@/*": ["./*"] }`, Next plugin enabled.
- **`next.config.ts`** — wrap config with `createNextIntlPlugin("./i18n/request.ts")` and optionally `@next/bundle-analyzer` gated by `env.ANALYZE`.
- **`postcss.config.js`** — register `@tailwindcss/postcss` and `postcss-import`.
- **`styles/tailwind.css`** — `@import "tailwindcss";` + `@import "tw-animate-css";` + `@theme inline { … }` design tokens + `:root { --background, --foreground, --primary, --secondary, … }`.
- **`components.json`** — shadcn config: `style: default`, `rsc: true`, `tsx: true`, `tailwind.css: "styles/tailwind.css"`, `cssVariables: true`, aliases mapped to `@/components`, `@/components/ui`, `@/lib/utils`, `@/lib`, `@/hooks`.
- **`eslint.config.mjs`** — flat config extending `next/core-web-vitals`, `next/typescript`, `prettier`, with `import/order`, `tailwindcss`, and `sort-imports` rules.
- **`prettier.config.js`** — register `prettier-plugin-tailwindcss`.
- **`env.mjs`** — `createEnv({ server, client, runtimeEnv })` with Zod validation.
- **`i18n/routing.ts`**, **`i18n/navigation.ts`**, **`i18n/request.ts`** — locales list, `createNavigation(routing)`, server message loader.
- **`middleware.ts`** — `createMiddleware(routing)` from `next-intl/middleware` if i18n is enabled.
- **`instrumentation.ts`** — OpenTelemetry registration via `@vercel/otel`.
- **`vitest.config.ts`** / **`vitest.setup.ts`** — jsdom env, Testing Library setup, `vite-tsconfig-paths`.
- **`playwright.config.ts`** — e2e baseline.
- **`.prettierignore`**, **`.gitignore`** — standard.
- **`.env.example`** — document every env var consumed by `env.mjs`.

## 7. Import Alias Rules

Single root alias: `@/*` → repo root (no `src/`).

```ts
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/i18n/navigation"
import { useStore } from "@/store/use-store"
import type { IFooSomething } from "@/interfaces/foo"
```

Configure in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
}
```

Always import via `@/...`, never with relative `../../`.

## 8. Reusable Architecture Rules

- Put **reusable UI primitives** (Button, Input, Badge, Dropdown, Drawer, Card, Tabs, etc.) in `components/ui/`. One file per primitive; export named + default consistently with shadcn.
- Put **composed shared blocks** that compose primitives (Navbar, Footer, Logo, GridPattern) in `components/shared/<name>/`. Each folder has an `index.tsx` that **is** the entry component (not a re-export when the component is small enough).
- Put **page-level sections** in `widgets/<section>/` with subcomponents in sibling files (`heading.tsx`, `subtitle.tsx`, `cta.tsx`).
- Put **feature-specific code** (state, components, hooks tied to one domain) in `features/<feature>/`.
- Put **reusable hooks** in `hooks/use-*.ts`.
- Put **pure helpers** in `helpers/` and **utility primitives** (`cn`, formatting, etc.) in `lib/`.
- Put **TS interfaces** in `interfaces/<domain>.ts` (prefix with `I`), and **type aliases / ambient types** in `types/<domain>.ts`.
- Put **static data tables** in `constants/<domain>.ts`. Pair them 1:1 with `interfaces/<same-domain>.ts`.
- Put **Zustand stores** in `store/use-<name>-store.ts`.
- Put **i18n configuration** in `i18n/` and **translation strings** in `messages/<locale>.json` — never hardcode user-visible strings in components.
- **Data files hold no JSX.** Data describes structure (icons, hrefs, `translationKey`); the component renders it.

## 9. Starter Files To Create

```bash
touch lib/utils.ts                      # cn() helper (clsx + tailwind-merge)
touch hooks/.gitkeep
touch constants/index.ts                # shared constants barrel (if useful)
touch types/index.ts
touch interfaces/.gitkeep
touch store/.gitkeep
touch helpers/index.ts
touch styles/tailwind.css
touch env.mjs
touch i18n/routing.ts
touch i18n/navigation.ts
touch i18n/request.ts
touch middleware.ts
touch instrumentation.ts
touch components.json
touch app/layout.tsx
touch app/page.tsx
```

Skeleton for `lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 10. Styling Setup Rules

- Tailwind v4, CSS-first. Single entry: `styles/tailwind.css`, imported once from the root layout.
- Define design tokens with `@theme inline { --color-…, --radius-…, --font-…, --container-…, --breakpoint-… }` and CSS variables on `:root` (use `oklch()` where possible).
- Background / foreground / primary / secondary / muted / accent / destructive are all CSS variables; reference them via Tailwind utilities (`bg-background`, `text-primary`, `border-secondary/30`, …).
- Provide a `container-wrapper` component class for the global content width.
- Fonts are loaded via `next/font/google` in the root layout and exposed as CSS variables (`--font-sans`, `--font-heading`, etc.), then mapped under `@theme`.
- Use `class-variance-authority` for component variants and `cn()` for class composition.
- Use shadcn primitives generated into `components/ui/`. Do **not** hand-roll inputs, dropdowns, dialogs, drawers, etc. when a shadcn primitive exists.
- For RTL support, set `dir` on `<html>` based on locale; rely on logical flex order rather than fixed `left`/`right`.

## 11. API Layer Rules

- Place server route handlers under `app/api/<route>/route.ts`.
- Place reusable server-side fetchers / SDK clients under `lib/api/` or a dedicated `services/` folder (create when needed); export typed functions, not raw `fetch` calls scattered in components.
- Validate every external response with Zod schemas colocated next to the fetcher.
- Validate env vars in `env.mjs` (`createEnv`); never reference `process.env.X` directly inside components or services — import from `@/env.mjs`.
- UI components must not contain transport code (`fetch`, headers, base URLs). They call a service function or a Server Component that does.
- For client-side data, prefer Server Components first; reach for client fetching (and a query lib) only when interactivity demands it.

## 12. Copy / Do Not Copy

**Copy:**
- Folder structure (`app/`, `components/ui` + `components/shared`, `features/`, `widgets/`, `constants/`, `interfaces/`, `types/`, `hooks/`, `lib/`, `store/`, `helpers/`, `i18n/`, `messages/`, `styles/`).
- Root-based `@/*` alias.
- `tsconfig` strictness flags.
- `next.config.ts` wrapping pattern (next-intl + bundle analyzer behind an env flag).
- Tailwind v4 CSS-first token setup and `cn` helper.
- shadcn `components.json` shape.
- ESLint flat config + Prettier + Tailwind plugins.
- `env.mjs` with `@t3-oss/env-nextjs`.
- `i18n/` triad (routing / navigation / request) and `middleware.ts` pattern.
- `instrumentation.ts` OpenTelemetry registration.
- Component conventions: shadcn primitives in `ui/`, composed blocks in `shared/<name>/index.tsx`, data in `constants/`, types in `interfaces/`.

**Do not copy:**
- Any `app/[locale]/page.tsx`, `widgets/*`, or `features/*` content.
- Brand names, product copy, logos, illustrations, icons specific to the source.
- `messages/*.json` translation values (keep the structure idea, drop the strings).
- `assets/imgs/*` (logos, photos, SVGs).
- Domain-specific `constants/<file>.ts` data (clients, plans, macros, etc.).
- Domain-specific `interfaces/` and `types/` files.
- Hardcoded routes, hash anchors, social URLs, dashboards.
- Real API base URLs and environment values.

## 13. Final AI Instruction

When creating a new project from this blueprint:

1. Create the base project.
2. Install the required dependencies.
3. Recreate the folder structure.
4. Recreate the configuration files.
5. Add aliases.
6. Add starter utility files.
7. Add shared UI/layout structure.
8. Do not copy business-specific files.
9. Keep the new project generic until the user provides requirements.
