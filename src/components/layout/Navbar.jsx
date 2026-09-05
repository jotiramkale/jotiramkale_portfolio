import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import Icon from '../common/Icon'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-slate-100"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-gradient text-sm font-bold text-ink-950">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-secondary !px-5 !py-2.5 text-sm">
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'bars'} className="h-[18px] w-[18px]" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeId === id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        isActive ? 'bg-white/[0.06] text-slate-100' : 'text-slate-400'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li className="pt-2">
                <a href="#contact" onClick={handleNavClick} className="btn-primary w-full">
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
