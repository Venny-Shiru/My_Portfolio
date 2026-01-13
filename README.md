# Venny Wanjiru — Portfolio

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## Quick start

Requirements:
- Node.js (v18+ recommended)
- npm (v9 is pinned via `package.json`)

```bash
# Clone
git clone <YOUR_GIT_URL>
cd My_Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — build for production (output: `dist`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

---

## Deployment (Vercel)

This project is configured for Vercel. Key settings:

- Root directory: repository root (leave blank)
- Build command: `npm run build`
- Output directory: `dist`
- Vercel config: `vercel.json` is included to pin the `dist` directory for static deployment.
- `packageManager` is set to `npm@9` in `package.json` to ensure consistent installs on Vercel.

To deploy:
1. Import the repository into Vercel (https://vercel.com/new).
2. Select `Vite` as the framework preset (should be detected automatically).
3. Confirm build & output settings (see above), add any environment variables if needed, and deploy.

If you prefer CLI deploys: `npm i -g vercel` → `vercel --prod` (you may need to login with `vercel login`).

---

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn-ui (Radix + Tailwind UI primitives)
- Framer Motion, React Router, and other UI libraries

---

## Contributing

- Create a new branch for your changes: `git checkout -b feat/your-feature`
- Commit changes with a clear message
- Push the branch and open a Pull Request against `main`
- I use `main` as the production branch — merging to `main` will trigger a Vercel deployment

---

## Contact

Venny Wanjiru — vennywanjiru@gmail.com

---

If you'd like any additional sections (e.g., tests, CI, license), tell me what to include and I will add it.
