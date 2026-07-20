# AGENTS.md

## Cursor Cloud specific instructions

This repo (`dmadridy.dev`) is a single static personal portfolio site built with React 19 + TypeScript + Vite 8. There is no backend, database, or environment variables — the Vite dev server is the only service.

Standard commands are defined in `package.json` scripts:
- Dev server: `npm run dev` (Vite, serves on `http://localhost:5173`). Use `npm run dev -- --host` to expose externally.
- Lint: `npm run lint` (ESLint flat config in `eslint.config.js`).
- Build: `npm run build` (runs `tsc -b` type-check then `vite build`).
- Preview production build: `npm run preview` (serves `dist/` on port `4173`).

Notes:
- There is no automated test suite configured. End-to-end verification = start the dev server and load the page in a browser.
- Node 22 (available on the VM) satisfies Vite 8's engine requirement; no version file is pinned.
- The `Projects` component and `src/data/projects.ts` exist but `projects` is currently an empty array and `Projects` is not rendered in `app.tsx`; the live page shows only the profile section and footer.
