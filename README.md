Personal portfolio built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

Almost all editable content — name, email, GitHub/LinkedIn/CV links, project
and business descriptions, experience, skills — lives in one file:

```
src/lib/config.ts
```

Anything wrapped in `[BRACKETS]` (e.g. `[YOUR_NAME]`, `[EXCELAI_LIVE_URL]`) is
a placeholder. Buttons pointing at an un-filled `[BRACKETED]` link render as
disabled until you replace it, so nothing links out to a broken URL.

Sections themselves live in `src/components/sections/`, one file per section,
assembled in `src/app/page.tsx`. Shared UI primitives (buttons, tags, the
scroll-reveal wrapper, section headings) are in `src/components/ui/`.

Site-wide metadata (title, description, Open Graph) is set in
`src/app/layout.tsx`, driven by the same `SITE` object in `config.ts`.

## Deploy on Vercel

```bash
npm run build
```

Then push to a Git repo and import it at [vercel.com/new](https://vercel.com/new),
or run `npx vercel` from this directory.
