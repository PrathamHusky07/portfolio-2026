# Portfolio v2 — Prathamesh Kulkarni

## What this project is
A personal portfolio site for an AI Analytics Engineer actively interviewing for Analytics Engineer, AI Engineer, and Forward Deployed Engineer roles. This site is a recruiter conversion tool, not a hobby project. Every decision optimizes for: (1) a recruiter deciding to reply within 30 seconds of landing, and (2) a technical screener respecting the code under the hood.

Content source of truth: `_reference/content.md`. Do not invent copy — pull from that file. If content is missing for a section, stop and ask.

The old React project lives in `_reference/` for asset extraction only. Do not port its structure, styling, or dependencies. Do not edit anything under `_reference/`.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion for scroll animations (used sparingly, respects `prefers-reduced-motion`)
- shadcn/ui for base components (Button, Card, form primitives) — installed on demand, no wholesale copy
- Vercel Analytics + Speed Insights
- Deploys to Vercel from `main`

## Model policy
Default model is `claude-sonnet-4-6`. Escalate to Opus (via `/model opus`) only for architecture planning, multi-file refactors, or genuinely hard debugging. Drop to Haiku (`/model haiku`) for mechanical work (renames, README edits, prettier passes). Do not run the entire session on Opus.

## Commands (exact)
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npx tsc --noEmit`
- Format: `npx prettier --write .`

Run `npm run build` and `npx tsc --noEmit` before saying a change is done. A "working" dev server is not evidence the build passes.

## Layout
- `src/app/` — App Router pages. `layout.tsx` sets metadata and fonts. `page.tsx` is the single-page portfolio.
- `src/components/` — Section components (Hero, About, Experience, Projects, Tech, Contact).
- `src/components/ui/` — shadcn primitives.
- `src/content/` — TypeScript files exporting typed content arrays (`experience.ts`, `projects.ts`, `tech.ts`). Content lives here, not inline in components. Source values from `_reference/content.md`.
- `public/` — Static assets. Project images are `public/projects/`. Favicon and OG assets live here.
- `src/lib/` — Utilities (`cn` helper, analytics wrapper).
- `_reference/` — Old React project + `content.md`. Read-only. Never edit, never import from source code.

## Conventions
- Server Components by default. Add `"use client"` only when a component needs state, effects, or browser APIs.
- Every component is a named export with a typed props interface. No `React.FC`.
- Content is typed. `src/content/projects.ts` exports `Project[]` where `Project` has a discriminated status (`shipped` | `in_progress`) and a `featured: boolean`. Metrics are structured (`{ value: string; label: string }`), not free-text.
- Tailwind classes live inline. No CSS files except `globals.css`. Design tokens live in `tailwind.config.ts` under `theme.extend`.
- One custom font pair maximum. Sans for body, a display face for headings. Loaded via `next/font/google` for zero layout shift.
- No emoji in production copy. No cyan-on-black contact info in the hero. No phone number anywhere on the site. No resume PDF hosted on the site.
- Images use `next/image`. No `<img>` tags.
- External links use `rel="noopener noreferrer"` and open in a new tab only when the user leaves the site.
- Accessibility: every interactive element has a visible focus ring. Color contrast passes WCAG AA. Section landmarks use semantic tags (`<header>`, `<section aria-labelledby>`, `<footer>`).

## Responsive design (non-negotiable)
- Mobile-first. Every component starts from the 375px layout and scales up via Tailwind's `sm:`, `md:`, `lg:` breakpoints. Not the other way around.
- Do not use fixed pixel widths on layout containers. Use `max-w-*`, `w-full`, and fluid units.
- Do not use horizontal scroll to solve a layout problem. If content overflows on mobile, restructure.
- Tap targets are ≥ 44×44px. Text is ≥ 16px on mobile to prevent iOS zoom-on-focus.
- Verify at three widths before claiming done: 375px (iPhone SE), 768px (iPad portrait), 1440px (laptop).

## Positioning (this drives every word of copy)
The site presents Prathamesh consistently across the resume, LinkedIn, and this page as an **AI Analytics Engineer**. Do not use "Aspiring", "Junior", or "Data Scientist" anywhere. The old site had three different self-descriptions; this one has one.

Job titles per role must match the resume verbatim (`AI Engineer / Data Scientist` at USA Today, `Analytics Engineer Co-op` at Mimecast, `Data Analytics Engineer` at Standard Screws, `Data Science Intern` at Remark). The site's role summaries are shorter than the resume by design — the resume sells the interview; the site sells the resume.

## Content rules
- Every experience entry leads with the flagship outcome and names the tech. Format: "verb + system + tech stack → metric with unit."
- Featured projects: 5, ordered by strength. Ranks 1–2 (E-Commerce Intelligence Platform, Healthcare Compliance Investigation Engine) carry the full narrative — long pitch + metric strip + tech chips. Ranks 3–5 (Career Crafter, Snowpark ML, Boston Data Insights) are card-only: title, one-line pitch, tech chips, GitHub link. Old tutorial projects (OpenAI chatbot, image captioning, PDF evaluator, Stay Network) are excluded from v1.
- No lorem ipsum ever ships. If content is missing, block the section behind a `TODO(content)` comment and surface it in the response.
- Layered disclosure: the site shows numbers and architecture at a high level. It does not show internal failure modes, stakeholder dynamics, or exact evaluation methodology — those are interview material and stay off the site.

### Prose discipline (no AI-generated tells)
- No em-dashes in body copy. Use periods or commas instead. Em-dashes in code comments are fine, but not in user-facing prose.
- No "It's not just X, it's Y" constructions.
- No words: delve, delving, tapestry, landscape (as metaphor), robust, leverage, streamline, empower, seamless, cutting-edge, best-in-class, world-class, revolutionize, unlock (as verb metaphor).
- No sentence openers: Moreover, Furthermore, Additionally, In today's, In the modern era.
- No balanced tricolons ("X, Y, and Z" three times in a paragraph). One is fine, more reads as AI cadence.
- No hedging language: perhaps, arguably, in many ways, one could say.
- Prefer short declarative sentences. If a sentence has three commas, it likely needs to become two sentences.
- When you're about to write an em-dash, ask: would a period work here? Usually yes.

## SEO and metadata (non-negotiable)
- Root `layout.tsx` exports `metadata` with a real title template, description that names his stack, OG image, Twitter card, and canonical URL.
- `src/app/opengraph-image.tsx` generates a dynamic OG image with his name and title using Next's built-in image generation.
- `public/robots.txt` and `src/app/sitemap.ts` exist and are correct.
- Structured data: JSON-LD `Person` schema in the root layout with `sameAs` for LinkedIn and GitHub.

## Do not
- Do not add features not requested (no dark/light toggle unless asked, no i18n, no CMS, no blog for v1).
- Do not install a UI kit that bundles more than the components used. shadcn/ui components are copied in per-component; MUI, Chakra, Radix-wholesale are off-limits.
- Do not add state management libraries.
- Do not touch `_reference/`.
- Do not commit `.env*`, `.vercel/`, `node_modules/`, or `.claude/settings.local.json`.
- Do not add AI-attribution to commit messages (no "Co-authored-by: Claude", no "🤖 Generated with Claude Code").
- Do not use `any`. If a type is genuinely unknown, use `unknown` and narrow.
- Do not use `<img>`. Use `next/image`.
- Do not add a hosted resume PDF or any resume download link. The site's Contact section is the single conversion point.

## Definition of done for any change
1. `npm run build` succeeds with zero warnings.
2. `npx tsc --noEmit` passes.
3. `npm run lint` passes.
4. Manually verified in the browser at three widths: 375px (mobile), 768px (tablet), 1440px (desktop).
5. Lighthouse (production build, incognito) scores ≥ 95 for Performance, Accessibility, Best Practices, SEO. If any drops below, name why in the response.
6. No console errors or warnings in the browser.

## Working style
- Before implementing anything beyond a one-line change, state the plan in 3–6 bullets and wait for confirmation. This is Karpathy's "think before coding" principle applied to this repo.
- Prefer editing existing files over creating new ones. Do not create a new component when an existing one can take a prop.
- When a decision has a real tradeoff (Framer Motion vs CSS keyframes, Server Component vs Client Component), present both options briefly, recommend one, and proceed.
- If you catch yourself writing more than 200 lines for a single component, stop and split.
