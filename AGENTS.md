# AGENTS.md — template-floral

## Status

Greenfield project. No implementation files exist yet — only `.agents/prd.md`.

## Source of truth

- `.agents/prd.md` — the sole design specification. Read it first.
- No `package.json`, no build config, no CI, no lint/typecheck commands yet.

## Design spec (from PRD)

| Item | Value |
|---|---|
| Theme | Floral Romance, garden/intimate/outdoor wedding |
| Colors | Rose Pink (primary), Cream (secondary), Soft Green (accent) |
| Typography | Cormorant Garamond (headings), Poppins (body) |
| Style | Floral decorations, soft colors, romantic animations |

## Sections to implement

1. Opening Cover (floral frame)
2. Hero Couple (floral background)
3. Love Story (vertical timeline)
4. Event Details (elegant card layout)
5. Gallery (polaroid style)
6. Maps (custom floral frame)
7. Gift (elegant floral card)
8. RSVP (floral button design)

## Special features

- Falling flower animation
- Soft fade animation
- Floral SVG decorations

## Tech stack (chosen)

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 (CSS `@theme` config, no `tailwind.config`) |
| Language | TypeScript |
| Package manager | pnpm |
| Linter | ESLint 9 (flat config via `eslint.config.mjs`) |
| PostCSS | `@tailwindcss/postcss` plugin |

## Developer commands

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build (also runs TypeScript check) |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project structure

```
app/
├── globals.css    # Tailwind imports + @theme (colors, fonts)
├── layout.tsx     # Root layout with Cormorant Garamond + Poppins
└── page.tsx       # Main page composing all sections
components/        # Section components
```

## Tailwind v4 notes

- Theme is defined in `app/globals.css` via `@theme`, **not** in a `tailwind.config` file.
- Custom colors: `rose-pink`, `rose-pink-light`, `rose-pink-dark`, `cream`, `cream-dark`, `soft-green`, `soft-green-dark`.
- Custom font utilities: `font-heading` (Cormorant Garamond), `font-body` (Poppins).
- Import: `@import "tailwindcss"` (no `@tailwind` directives).

## Design tokens

| Token | Value |
|---|---|
| `--color-rose-pink` | `#EAA6B6` |
| `--color-cream` | `#FFF8F0` |
| `--color-soft-green` | `#C8D9BA` |
| `--font-heading` | Cormorant Garamond (serif, 400–700) |
| `--font-body` | Poppins (sans, 300–600) |

## What still needs doing

- `.git` directory not initialized — run `git init` when ready.
- CI, formatter, and test runner not yet configured.
