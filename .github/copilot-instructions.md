## Repo snapshot

- Framework: Next.js (app router under `src/app`, Next v16)
- Language: TypeScript + React 19
- Styling: Tailwind CSS (classes in JSX, global file at `src/app/globals.css`)
- Deploy: Vercel (auto-deploy from `main`); editable content lives in `data/` per `README.md`.

## High-level architecture (what matters for code edits)

- This is a Next.js App Router project: pages/routes are in `src/app`. The root layout is
  `src/app/layout.tsx` which composes `Navbar` and `Footer` and wraps page content.
- Components are under `src/components/` with a `layout/` and `ui/` subfolders. Use the
  `@/*` import alias (see `tsconfig.json`) when adding imports: e.g. `@/components/layout/Navbar`.
- Client components explicitly opt in with the "use client" directive (see
  `src/components/layout/Navbar.tsx`). If you need state, effects, or browser APIs, add
  `"use client"` at the top of the file.

## Developer workflows (commands you can run)

- Start dev server: `npm run dev` (runs `next dev`, default port 3000)
- Build for production: `npm run build` (runs `next build`)
- Run production server locally: `npm run start` (runs `next start` after build)
- Lint: `npm run lint` (runs `eslint`)
- Optional type-check: `npx tsc --noEmit` (TypeScript is included as a dev dependency)

Note: There are no test scripts present in `package.json`.

## Project-specific conventions and patterns

- Content-edit workflow: the `README.md` documents that editable site content is kept in `data/` (for
  example `data/projects.js`). Non-developers edit those files directly in GitHub to update site content.
- Styling: Tailwind class names are used inline in JSX components (mobile-first with responsive prefixes
  like `md:`). Keep CSS changes in `src/app/globals.css` or add utility classes to components.
- Client vs Server components: assume files without `"use client"` are server components. Example: the
  root `layout.tsx` is a server component that imports client components (`Navbar`, `Footer`).
- Navbar pattern: `src/components/layout/Navbar.tsx` is a client component using `useState` and
  `useEffect` to toggle a full-screen mobile menu and to prevent body scroll when open. Follow this
  pattern for other interactive UI (use `use client` and manage body-level side effects carefully).

## Integration and cross-cutting points

- Absolute imports: `@/` maps to `./src/` (see `tsconfig.json`). Use this for cleaner imports.
- Static assets: place images and icons in `public/` and reference them by path (e.g. `/images/...`).
- PostCSS / Tailwind: Tailwind is configured (project includes `postcss.config.mjs` and Tailwind deps).

## When editing or adding features — checklist for an AI agent

1. Identify whether the component must be client-side (uses hooks, events, window/document). If so,
   add `"use client"` and keep logic minimal.
2. Use `@/` imports for project modules. Keep paths consistent with `tsconfig.json`.
3. Follow existing Tailwind naming and responsive patterns (see `Navbar.tsx` for mobile menu pattern).
4. If modifying content, prefer updating the `data/` files when the change is content-only.
5. Run `npm run dev` locally to verify changes and `npm run lint` to check linting.

## Examples to copy from

- Client component header pattern: `src/components/layout/Navbar.tsx` (shows `"use client"`, hook usage,
  overlay menu, and scroll-blocking via `document.body.style.overflow`).
- Root layout composition: `src/app/layout.tsx` (imports `Navbar` and `Footer` and renders `{children}`).

## If something is unclear

- Ask the repo owner which `data/` files map to which pages when content intent isn't obvious.
- If there are build or runtime errors, provide the `next build` or `next dev` error output and the files
  that were changed so the maintainer can reproduce locally or fix environment-specific issues.

---
If you'd like, I can refine any section or add quick examples for common changes (adding a new route,
adding a data-driven component, or converting a server component to a client component). Please tell me
which area to expand. 
