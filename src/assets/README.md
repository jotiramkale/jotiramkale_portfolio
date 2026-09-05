# Assets

This `src/assets` folder stays empty on purpose — the site's real image
assets (photo, resume, resume preview, favicon, OG image) live in
`public/` instead, since that's what Vite serves at the site root (so
`/profile.jpg`, `/resume.pdf`, etc. resolve correctly).

- **Profile photo** — `public/profile.jpg`, rendered by
  `src/components/hero/ProfilePhoto.jsx`. Falls back to a styled
  placeholder automatically if the file is missing.
- **Resume** — `public/resume.pdf`, the real PDF behind every
  View/Download button.
- **Resume preview** — `public/resume-preview.jpg`, a rendered snapshot
  of the resume's first page, shown by
  `src/components/resume/ResumePreview.jsx`. Falls back to a generic
  mock card if missing.
- **Project thumbnails** — `src/components/projects/ProjectThumbnail.jsx`
  (gradient panel + icon per project, no image files needed).
- **Icons** — `src/utils/iconMap.js` (react-icons, centralized).
- **Favicon / OG image** — `public/favicon.svg`, `public/og-image.png`.

See the root `README.md` for how to replace the photo and resume.
