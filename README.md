# Ryan Gao — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Running the site

Requires Node.js 20 or newer.

```bash
npm install        # first time only
npm run dev        # http://localhost:3000, reloads as you edit
```

Other scripts:

```bash
npm run lint       # ESLint
npm run build      # production build (also type-checks)
npm run start      # serve the production build
```

## Editing content

**All text, links, and project details live in [`src/data/portfolio.ts`](src/data/portfolio.ts).**
You shouldn't need to touch the components to update the site.

- `site`: name, title, intro, email, LinkedIn, GitHub, resume file name
- `about`: About paragraphs and the facts grid
- `projects`: featured projects, in display order
- `skills`: skill groups
- `nav`: header links (each `id` matches a section on the page)

## Filling in placeholder links

Links that are still empty strings (`""`) are **hidden from visitors**. While
`npm run dev` is running, each missing link shows up as a dashed
`+ add … in portfolio.ts` hint, so you can see what's left to fill in.

- **GitHub profile:** set `site.github`, e.g. `"https://github.com/your-username"`.
  A GitHub row then appears in the Contact section.
- **Project repo / demo:** set `links.repo` and `links.demo` on each project.
  "Source" and "Live demo" links then appear on that project's card.

## Adding your resume

Copy your PDF into the `public/` folder with this exact name:

```
public/RyanGaoResume2026.pdf
```

The "Download resume" buttons in the hero and contact sections switch on
automatically. Until then they show a disabled "Resume coming soon" state. The
check happens at build time, so restart `npm run dev` or re-run `npm run build`
after adding the file. To use a different file name, change `site.resumeFile`.

## Replacing the project visuals with screenshots

Each project card currently shows placeholder art drawn in CSS/SVG
([`src/components/ProjectVisual.tsx`](src/components/ProjectVisual.tsx)). To use
a real screenshot:

1. Put the image in `public/projects/`, e.g. `public/projects/pantrypal.png`.
   A landscape image around 1600×1040 (20:13) fits the card best.
2. Add an `image` field to that project in `portfolio.ts`:

   ```ts
   image: { src: "/projects/pantrypal.png", alt: "PantryPal pantry dashboard with expiration dates" },
   ```

The screenshot replaces the CSS art for that project. Remove the `image` field
to switch back.

## Adding a project

Copy one of the objects in the `projects` array and edit it. The `visual`
field must be `"pantry"`, `"ocean"`, `"poker"`, `"blackjack"`, or
`"calculator"` (the CSS art styles).
For a new project, add an `image` screenshot, or reuse a visual until you have one.

## Design notes

- Colors are defined as CSS variables at the top of
  [`src/app/globals.css`](src/app/globals.css), with separate light and dark
  values. The site follows the visitor's system theme. Change `--accent` to
  change the accent color.
- Fonts: Instrument Serif (headings), Geist (body), and Geist Mono (labels),
  loaded through `next/font`.
- Motion is subtle and turns off when the visitor has "reduce motion" enabled.
  Sections fade in on scroll using CSS scroll-driven animations. Browsers
  without support just show the content right away.

## Deploying

The site builds to static pages, so it works on any Next.js host. The simplest
is [Vercel](https://vercel.com/new): import the repository and keep the default
settings.
