# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project bootstrapped with [EasyNext](https://github.com/easynext/easynext), a Korean-focused Next.js starter template that includes a comprehensive set of pre-configured libraries and UI components.

## Key Development Commands

### Running the Development Server
```bash
npm run dev
# Uses Next.js with Turbopack for faster builds
```
The application runs on [http://localhost:3000](http://localhost:3000).

### Build and Production
```bash
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

## Architecture and Structure

### Code Architecture: Feature-Sliced Design (FSD)

This project follows **Feature-Sliced Design**, a methodology that structures code by user features rather than technical concerns.

#### Core Principle
Structure code by **user features** rather than technical categories (components, hooks, utils).

#### Layer Hierarchy (top to bottom)

```
src/
├── app/              # Entry point, global configuration, providers, routing
│   ├── layout.tsx    # Root layout with Providers wrapper
│   ├── page.tsx      # Home page route
│   ├── providers.tsx # Client-side providers (QueryClient, ThemeProvider)
│   └── globals.css   # Global styles with Tailwind utilities
├── pages/            # Complete page units (1:1 mapping with URL routes)
├── widgets/          # Independent and composable UI blocks (header, sidebar, dashboard)
├── features/         # User interaction features (create-account, delete-comment, filter-list)
├── entities/         # Business domain data structures (user, product, order)
└── shared/           # Reusable shared code
    ├── api/          # API client configuration
    ├── config/       # Environment configuration
    ├── lib/          # Utility functions (cn helper, etc.)
    └── ui/           # Shadcn UI components (accordion, button, card, etc.)
```

#### FSD Strict Rules

**1. Layer Reference Rules**
- Only upper layers can import from lower layers
- Same-level layer imports are forbidden
- Reverse imports are absolutely forbidden

```typescript
// ✅ Allowed
// features/ → entities/ → shared/
// pages/ → widgets/ → features/

// ❌ Forbidden
// entities/ → features/
// features/A → features/B
```

**2. Slice Structure**

Each slice is organized by business domain:

```
features/
  create-account/
    model/      # State, logic (Zustand stores, hooks)
    ui/         # React components
    api/        # API calls (React Query queries/mutations)
    lib/        # Utility functions
    index.ts    # Public API (explicit exports only)
```

**3. Public API Rules**

- Each slice exports only through `index.ts`
- Star exports (`export *`) are forbidden
- Use explicit named exports only

```typescript
// ✅ Correct approach
export { CreateAccountForm } from './ui/CreateAccountForm';
export { useCreateAccount } from './model/useCreateAccount';

// ❌ Forbidden
export * from './ui';
```

#### File Creation Guidelines

When adding new features:

1. **Determine which layer the feature belongs to**
   - User interaction? → `features/`
   - Independent UI block? → `widgets/`
   - Business domain data? → `entities/`
   - Shared reusable code? → `shared/`

2. **Name slices in verb+noun format**
   - Examples: `create-account`, `filter-transactions`, `edit-profile`

3. **Separate slice internals into segments**
   - `model/`: Zustand stores, React Query hooks
   - `ui/`: React components
   - `api/`: Axios calls, API endpoints
   - `lib/`: Helper functions, validators (Zod schemas)

4. **Export only Public API explicitly in `index.ts`**

#### Migration from Traditional Structure

Existing code maps as follows:

- `src/components/ui/` → `src/shared/ui/`
- `src/hooks/` → `src/features/*/model/` by feature or `src/shared/lib/hooks/`
- `src/lib/` → `src/shared/lib/`

#### Benefits

- Code changes are limited to a single slice's scope
- Minimized code conflicts between team members
- Clear responsibility for debugging
- Easy feature-level testing and maintenance

### Key Architectural Decisions

**Provider Architecture (app/ layer)**
- React Query and Theme providers are initialized in `src/app/providers.tsx`
- Uses different QueryClient instances for server vs. browser to prevent state sharing
- React Query has a default `staleTime` of 60 seconds to optimize SSR
- ThemeProvider from `next-themes` supports system/dark/light themes with class-based toggling
- Global providers are managed only in the `app/` layer

**Component System (shared/ui/ layer)**
- Uses Shadcn UI component library (not installed via npm, components are copied to `src/shared/ui/`)
- Component configuration is in `components.json` with neutral base color and CSS variables enabled
- All Shadcn components use the `cn()` utility from `@/shared/lib/utils` for className merging with `clsx` and `tailwind-merge`
- Shadcn components are pure UI without domain logic, so they are placed in `shared/ui/`

**State Management Strategy (FSD applied)**
- **Global State**: Zustand stores in `shared/` or `app/` layer
- **Feature State**: Zustand stores in `features/*/model/` for feature-specific state
- **Server State**: React Query hooks in `features/*/api/` or `entities/*/api/`
- **Form State**: React Hook Form + Zod in `features/*/ui/` components

**Path Aliases (reflecting FSD structure)**
- `@/*` maps to `src/*` (configured in `tsconfig.json`)
- FSD layer-specific aliases:
  - `@/app/*` - Application layer
  - `@/pages/*` - Pages layer
  - `@/widgets/*` - Widgets layer
  - `@/features/*` - Features layer
  - `@/entities/*` - Entities layer
  - `@/shared/*` - Shared layer
- Common imports:
  ```typescript
  import { Button } from '@/shared/ui/button';
  import { cn } from '@/shared/lib/utils';
  import { useAuth } from '@/features/auth/model';
  import { User } from '@/entities/user';
  ```

**TypeScript Configuration**
- `strictNullChecks: false` and `noImplicitAny: false` for more permissive typing
- ESLint is configured to ignore `@typescript-eslint/no-empty-object-type`, `no-explicit-any`, and `no-unused-vars`
- ESLint is disabled during builds (`ignoreDuringBuilds: true`)

**Next.js Configuration**
- Turbopack enabled in development for faster builds
- Images accept any hostname (`hostname: '**'`)
- App Router with React Server Components (RSC) enabled
- Server Components are utilized in `pages/` and `widgets/` layers
- Client Components are placed in `features/*/ui/` with `'use client'` directive

## Pre-installed Libraries

### Core Stack
- **Next.js 16.1.6** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS with custom theme

### UI & Styling
- **Shadcn UI** - Accessible component library built on Radix UI primitives
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **next-themes** - Theme switching (dark/light mode)

### State Management & Data Fetching
- **Zustand** - Lightweight state management
- **React Query (@tanstack/react-query)** - Server state management
- **Axios** - HTTP client

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Connects Zod with React Hook Form

### Utilities
- **date-fns** - Date manipulation
- **es-toolkit** - Modern utility library (Lodash alternative)
- **ts-pattern** - Pattern matching for TypeScript
- **react-use** - Collection of React hooks

## EasyNext CLI Commands

The project uses the `@easynext/cli` package for scaffolding additional features. Common commands:

```bash
# Add Supabase integration
easynext supabase

# Add authentication (Next-Auth)
easynext auth          # General auth setup
easynext auth idpw     # ID/Password login
easynext auth kakao    # Kakao login

# Add analytics/monitoring
easynext gtag          # Google Analytics
easynext clarity       # Microsoft Clarity
easynext sentry        # Sentry error tracking
easynext channelio     # ChannelIO customer support
easynext adsense       # Google Adsense

# Switch language
easynext lang ko       # Korean version
```

## Important Notes

- This is a **Korean-language project** - README and some content are in Korean
- The homepage (`src/app/page.tsx`) displays EasyNext template information and checks for CLI version updates
- When adding new Shadcn components, use the configuration from `components.json` and place them in `src/shared/ui/`
- Client components must include `'use client'` directive (see `src/app/page.tsx` and `src/app/providers.tsx`)
- The project uses CSS variables for theming - see `src/app/globals.css` for the color system

### FSD Implementation Notes

**When Creating New Features:**

1. **Always start with layer selection**
   ```typescript
   // ❌ Incorrect approach
   src/components/CreateAccountButton.tsx

   // ✅ Correct approach
   src/features/create-account/ui/CreateAccountButton.tsx
   src/features/create-account/model/useCreateAccount.ts
   src/features/create-account/index.ts
   ```

2. **Respect the import hierarchy**
   ```typescript
   // ✅ Allowed: features → entities → shared
   import { User } from '@/entities/user';
   import { Button } from '@/shared/ui/button';

   // ❌ Forbidden: reverse imports
   // Cannot import features from entities
   ```

3. **Use explicit exports in index.ts**
   ```typescript
   // features/create-account/index.ts
   export { CreateAccountForm } from './ui/CreateAccountForm';
   export { CreateAccountButton } from './ui/CreateAccountButton';
   export { useCreateAccount } from './model/useCreateAccount';
   // ❌ Do not use: export * from './ui'
   ```

4. **Feature naming convention**
   - Verb + noun format: `create-account`, `edit-profile`, `delete-comment`
   - Use kebab-case: `filter-transactions` (not `filterTransactions`)
   - Express functionality clearly: `auth` (❌) → `login-user`, `logout-user` (✅)

5. **Cross-feature communication**
   - Direct imports between features are forbidden
   - Move shared logic to `entities/` or `shared/`
   - If event-based communication is needed, coordinate in the `app/` layer

**Example Feature Structure:**

```
src/features/login-user/
├── api/
│   └── loginApi.ts           # Axios calls, React Query mutations
├── model/
│   ├── useLoginForm.ts       # Form state with React Hook Form
│   └── loginSchema.ts        # Zod validation schema
├── ui/
│   ├── LoginForm.tsx         # Main form component
│   └── LoginButton.tsx       # Submit button
└── index.ts                  # Public API
    export { LoginForm } from './ui/LoginForm';
    export { useLoginForm } from './model/useLoginForm';
```
