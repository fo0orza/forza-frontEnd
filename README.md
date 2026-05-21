<div align="center">
  <img src="assets/imgs/Froza-logo.svg" alt="Forza Logo" width="120" height="120" />
  <h1>Forza</h1>
  <p><strong>A modern, production-ready Next.js starter — built for speed, scale, and great DX.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/pnpm-package_manager-F69220?logo=pnpm&logoColor=white" alt="pnpm" />
    <img src="https://img.shields.io/badge/Vitest-3.2-6E9F18?logo=vitest&logoColor=white" alt="Vitest" />
    <img src="https://img.shields.io/badge/Playwright-E2E-2EAD33?logo=playwright&logoColor=white" alt="Playwright" />
    <img src="https://img.shields.io/badge/Storybook-8.6-FF4785?logo=storybook&logoColor=white" alt="Storybook" />
  </p>
</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Internationalization](#internationalization)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Deployment](#deployment)

---

## Overview

**Forza** is a full-featured Next.js application boilerplate that comes pre-wired with everything you need to ship a modern web product:

- **App Router** with locale-aware routing (English & Arabic)
- **Component library** built on Radix UI + shadcn/ui with Tailwind CSS
- **Type-safe environment variables** via `@t3-oss/env-nextjs` + Zod
- **Observability** via OpenTelemetry (`@vercel/otel`)
- **Automated releases** with Semantic Release + conventional commits
- **Health check** endpoints built-in

---

## Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2 | React framework (App Router + Turbopack) |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Type safety |

### Styling & UI

| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | 4.2 | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com/) | 4.7 | Accessible component system |
| [Radix UI](https://www.radix-ui.com/) | latest | Headless UI primitives |
| [Base UI](https://base-ui.com/) | 1.4 | Additional accessible components |
| [HugeIcons](https://hugeicons.com/) | 4.1 | Icon library |
| [class-variance-authority](https://cva.style/docs) | 0.7 | Variant-based component styling |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.5 | Merge Tailwind classes safely |
| [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) | 1.4 | CSS animations for Tailwind |

### Internationalisation

| Technology | Version | Purpose |
|---|---|---|
| [next-intl](https://next-intl-docs.vercel.app/) | 4.12 | i18n routing & translations (EN / AR) |

### Validation & Environment

| Technology | Version | Purpose |
|---|---|---|
| [Zod](https://zod.dev/) | 3.24 | Schema validation |
| [@t3-oss/env-nextjs](https://env.t3.gg/) | 0.13 | Type-safe env variables |

### Observability

| Technology | Version | Purpose |
|---|---|---|
| [@vercel/otel](https://vercel.com/docs/observability/otel-overview) | 1.12 | OpenTelemetry integration |

### Testing

| Technology | Version | Purpose |
|---|---|---|
| [Vitest](https://vitest.dev/) | 3.2 | Unit & component testing |
| [Testing Library](https://testing-library.com/) | 16 | DOM testing utilities |
| [Playwright](https://playwright.dev/) | 1.58 | End-to-end testing |
| [Storybook](https://storybook.js.org/) | 8.6 | Component development & visual testing |

### Code Quality & Releases

| Technology | Purpose |
|---|---|
| [ESLint](https://eslint.org/) | Linting |
| [Prettier](https://prettier.io/) | Code formatting |
| [Semantic Release](https://semantic-release.gitbook.io/) | Automated versioning & changelog |
| [Conventional Commits](https://www.conventionalcommits.org/) | Commit message standard |

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 20.0.0`
- **pnpm** (recommended) — [install guide](https://pnpm.io/installation)

```bash
node -v   # >= 20.0.0
pnpm -v   # any recent version
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd forza
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

> The project uses `@t3-oss/env-nextjs` with Zod — all env variables are validated at build time. See `env.mjs` for the schema.

### 4. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Hot reload is powered by **Turbopack**.

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Auto-fix lint errors |
| `pnpm prettier` | Check formatting |
| `pnpm prettier:fix` | Auto-fix formatting |
| `pnpm format` | Format all TS/TSX/MD files |
| `pnpm test` | Run unit tests (Vitest) |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:ui` | Run tests with Vitest UI |
| `pnpm test:coverage` | Generate coverage report |
| `pnpm e2e:headless` | Run Playwright e2e tests |
| `pnpm e2e:ui` | Run Playwright with UI mode |
| `pnpm storybook` | Start Storybook dev server (port 6006) |
| `pnpm build-storybook` | Build Storybook for production |
| `pnpm analyze` | Bundle analysis report |

---

## Project Structure

```
forza/
├── app/                      # Next.js App Router
│   ├── [locale]/             # Locale-aware pages (en / ar)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── api/
│       └── health/           # Health check endpoint
├── assets/
│   └── imgs/                 # Static images & icons
├── components/
│   ├── Button/               # Example component with stories & tests
│   ├── Tooltip/
│   ├── shared/
│   │   └── hero/             # Hero section components
│   └── ui/                   # shadcn/ui base components
├── i18n/
│   ├── navigation.ts         # Locale-aware navigation helpers
│   ├── request.ts            # next-intl request config
│   └── routing.ts            # Locale routing definition
├── lib/
│   └── utils.ts              # Shared utility functions
├── messages/
│   ├── en.json               # English translations
│   └── ar.json               # Arabic translations
├── public/
│   └── videos/               # Public video assets
├── styles/
│   └── tailwind.css          # Global styles & Tailwind entry
├── types/
│   └── locale.ts             # Locale type definitions
├── env.mjs                   # Type-safe environment schema
├── instrumentation.ts        # OpenTelemetry instrumentation
├── next.config.ts            # Next.js configuration
├── playwright.config.ts      # Playwright configuration
└── vitest.config.ts          # Vitest configuration
```

---

## Internationalization

The app supports **English** and **Arabic** out of the box, with the locale prefix always present in the URL (e.g., `/en/...`, `/ar/...`).

- **Routing config:** `i18n/routing.ts`
- **Request config:** `i18n/request.ts`
- **Translations:** `messages/en.json` & `messages/ar.json`
- **Navigation helpers:** `i18n/navigation.ts`

To add a new locale, update `i18n/routing.ts` and add the corresponding messages file in `messages/`.

---

## Testing

### Unit tests

```bash
pnpm test              # single run
pnpm test:watch        # watch mode
pnpm test:coverage     # with coverage
```

Tests live alongside their components (e.g., `Button/Button.test.tsx`).

### E2E tests

```bash
pnpm e2e:headless      # CI mode
pnpm e2e:ui            # interactive Playwright UI
```

### Component development

```bash
pnpm storybook         # http://localhost:6006
```

---

## Code Quality

This project enforces consistent code style through:

- **ESLint** — rules defined in `eslint.config.mjs`
- **Prettier** — config in `prettier.config.js`
- **Conventional Commits** — enforced via `git-conventional-commits.yaml`

Run all checks at once:

```bash
pnpm lint && pnpm prettier
```

---

## Deployment

The project is configured for **Vercel** deployment (`vercel.json`). Push to your connected branch and Vercel handles the rest.

For other platforms, run:

```bash
pnpm build
pnpm start
```

Health check endpoints are available at `/health`, `/healthz`, `/api/health`, and `/ping`.
