# Jotiram Kale — Portfolio

A modern, dark-mode developer portfolio built for campus placements and
AI/ML, Generative AI, and full stack software engineering roles. Built
with React, Vite, Tailwind CSS, and Framer Motion.

## Tech stack

- **React 18** — functional components + hooks only
- **Vite 5** — dev server and build tooling
- **JavaScript** (no TypeScript)
- **Tailwind CSS 3** — utility-first styling with a custom design system
- **Framer Motion 11** — scroll reveals, hover states, page-load animation
- **React Icons** — all icons, centralized in `src/utils/iconMap.js`

No Next.js, Angular, Vue, Bootstrap, Material UI, or TypeScript is used
anywhere in this project, and no dependencies beyond the ones above were
added for this update.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Deploying to Vercel

This project is Vercel-ready out of the box.

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite** (auto-detected). Build command `npm run
   build`, output directory `dist` — already configured in `vercel.json`.
4. Deploy.

Or with the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project structure

```
src/
  components/
    layout/       Navbar, Footer
    common/       Icon, Reveal, SectionHeading, TechBadge, SocialLinks,
                   BackToTop, AmbientBackground
    hero/         Hero section, ProfilePhoto (real photo + fallback)
    about/        About section
    build/        "What I Build" section + BuildCard
    skills/       Skills bento grid + skill badge
    projects/     Projects grid, project card, detail modal, architecture
                   flow diagram
    education/    Education timeline
    achievements/ Animated stat counters
    resume/       Resume section, real-preview card, Hero mini resume card
    contact/      Contact section + form
  pages/
    Home.jsx      Composes every section in order
  data/           Editable content: profile, skills, projects, education,
                   achievements, whatIBuild
  hooks/          useActiveSection, useCountUp
  utils/          iconMap.js (all icon imports), techIcon.js
  styles/
    globals.css   Tailwind layers + design tokens (colors, glass, gradients)
public/
  favicon.svg         Gradient monogram favicon
  og-image.png        Open Graph / social share image (1200x630)
  profile.jpg         Your real photo — shown in the Hero (see below)
  resume.pdf          Your real resume — powers all view/download buttons
  resume-preview.jpg  Rendered snapshot of resume.pdf's first page, used
                       as the resume preview image (see below)
```

## Customizing the content

Everything you're likely to want to change lives in `src/data/`:

- **`profile.js`** — name, title, Hero tagline, About copy, education/goal
  blurbs, interests, social links, and nav labels.
- **`skills.js`** — skill categories and the badges inside each one.
- **`projects.js`** — your project cards: description, problem, solution,
  key features, architecture steps (shown in the project detail modal),
  tech stack, status, and GitHub/live links. Set `featured: true` on one
  project to feature it.
- **`education.js`** — the vertical timeline entries.
- **`achievements.js`** — the four animated counters.
- **`whatIBuild.js`** — the three cards in the "What I Build" section.

### Your photo

The Hero's main identity element expects a real photo at:

```
public/profile.jpg
```

A photo is already in place. To replace it later, just overwrite that
file — any reasonably-sized JPEG/PNG saved as `profile.jpg` works. If the
file is ever missing or fails to load, the site falls back to a styled
placeholder automatically instead of showing a broken image.

### Your resume

`public/resume.pdf` is your real resume and powers every "View" and
"Download" button on the site (in the Hero mini card and the full Resume
section). To update it later, just replace that file — the download
links always point to `/resume.pdf`, so nothing else needs to change.

The Resume section also shows an actual image preview of your resume's
first page (`public/resume-preview.jpg`), not a fake mockup. If you
replace `resume.pdf`, regenerate that preview so it stays in sync:

```bash
pdftoppm -jpeg -r 200 -f 1 -l 1 public/resume.pdf /tmp/resume-page
# then resize/rename the output to public/resume-preview.jpg
```

(`pdftoppm` ships with poppler-utils.) If you skip this step, the old
preview image just stays slightly stale — nothing breaks. If the preview
image is missing entirely, the section falls back to a generic mock card.

### Social links

Update `github`, `linkedin`, and `email` inside `socialLinks` in
`src/data/profile.js`. LinkedIn and email are already filled in with real
values; GitHub is a clearly-marked placeholder
(`https://github.com/your-username`) until you add your real profile URL.

### OG image & domain

- Replace `public/og-image.png` (1200×630) if you want a different social
  preview card.
- The canonical/OG URLs in `index.html` use a placeholder
  (`https://your-domain.com/`) — update these once you have a real domain.

### Colors & type

The palette (graphite background, teal "signal" + violet "ion" accents,
a small amount of amber "ember" highlight) and fonts (Space Grotesk, IBM
Plex Sans, IBM Plex Mono) are defined in `tailwind.config.js` and loaded
via Google Fonts in `index.html`. Glow/shadow effects are intentionally
kept subtle — see the `boxShadow` block in `tailwind.config.js` if you
want to adjust them further.

## Project detail modal

Clicking "View details" on any project card opens a modal with the
problem it addresses, the solution, key features, and — for projects
where it's set in `projects.js` — a simple step-by-step architecture
diagram (built with plain CSS, no charting library). The modal closes on
Escape, on clicking outside, or via the close button, and returns focus
to the element that opened it.

## Notes

- The contact form is front-end only. Wire it up to a backend of your
  choice (Formspree, EmailJS, a serverless function, etc.) — the
  integration point is clearly marked in
  `src/components/contact/ContactForm.jsx`.
- Animations respect `prefers-reduced-motion`.
- Project thumbnails (in the grid, not the profile photo) are still built
  with CSS/SVG gradients and icons rather than image files, so there's
  nothing there that can 404.
- Statistics in `achievements.js` and dates in `education.js` reflect real
  information where available — update them as your numbers change.
