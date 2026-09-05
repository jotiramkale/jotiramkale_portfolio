import { navLinks, profile } from '../../data/profile'
import Icon from '../common/Icon'
import SocialLinks from '../common/SocialLinks'

// Education and Achievements are real sections on the page but are left
// out of the main navbar to keep it short — linked here instead so
// they're still easy to reach.
const footerOnlyLinks = [
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const allLinks = [...navLinks, ...footerOnlyLinks]

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="section-container flex flex-col gap-8 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a href="#hero" className="flex items-center gap-2.5 font-display text-lg font-semibold text-slate-100">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-gradient text-sm font-bold text-ink-950">
              {profile.initials}
            </span>
            {profile.name}
          </a>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            {allLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-slate-100">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <SocialLinks />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
          </p>
          <a href="#hero" className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-signal-400">
            Back to top
            <Icon name="arrowUp" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}
