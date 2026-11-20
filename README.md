# fleapweb

Personal website. Static, content-driven, built with Astro, Tailwind CSS v4 and shadcn/ui.

## Development

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static output in dist/
pnpm typecheck
pnpm cv        # rebuild public/cv.pdf from cv/cv.tex (needs pdflatex)
```

## Structure

- `src/site.ts` — site-wide content (name, description, links).
- `cv/cv.tex` — the CV in LaTeX. `pnpm cv` builds it into `public/cv.pdf`, which is committed.
- `src/layouts/main.astro` — base layout (head, header, footer).
- `src/pages/` — one file per route.
- `src/styles/global.css` — design tokens (colors, fonts, radius) and Tailwind setup.
- `src/components/ui/` — shadcn components, owned by this repo.
- `components.json` — shadcn config (style, base color, icon library).

## Components

Add shadcn components with `pnpm dlx shadcn@latest add <component>`. Most can be used
in `.astro` files without hydration. For links styled as buttons, use
`buttonVariants()` on a plain `<a>` so no JavaScript ships.
