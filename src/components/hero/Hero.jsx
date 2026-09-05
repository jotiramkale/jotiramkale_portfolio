import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/profile'
import Icon from '../common/Icon'
import SocialLinks from '../common/SocialLinks'
import ProfilePhoto from './ProfilePhoto'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [showResume, setShowResume] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!showResume) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setShowResume(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [showResume])

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28">
      <div className="section-container grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        {/* Photo: first on mobile; top-right on desktop */}
        <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
          <ProfilePhoto />
        </div>

        {/* Text block: second on mobile; left column (spans both rows) on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 flex flex-col items-start gap-5 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center"
        >
            <motion.div
              variants={itemVariants}
              className="tag-pill border-signal-500/30 bg-signal-500/[0.06] text-signal-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-semibold leading-[1.08] text-slate-100 sm:text-5xl lg:text-[3.4rem]"
            >
              <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="font-display text-xl font-medium text-slate-300 sm:text-2xl">
              {profile.title}
            </motion.p>

            <motion.p variants={itemVariants} className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {profile.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-1 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                Explore projects
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </a>
              <button type="button" className="btn-secondary" onClick={() => setShowResume(true)}>
                <Icon name="eye" className="h-3.5 w-3.5" />
                Show resume
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-1">
              <SocialLinks />
            </motion.div>
        </motion.div>

      </div>

      {!shouldReduceMotion && (
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 hover:text-slate-300 sm:flex"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[11px]">scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <Icon name="chevronDown" className="h-4 w-4" />
          </motion.span>
        </motion.a>
      )}

      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/85 px-4 py-8 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setShowResume(false)
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${profile.name}'s resume`}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              className="relative max-h-full max-w-4xl"
            >
              <button
                type="button"
                onClick={() => setShowResume(false)}
                aria-label="Close enlarged resume"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/80 text-slate-300 transition-colors hover:text-white"
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
              <img
                src="/resume-preview.jpg"
                alt={`Enlarged preview of ${profile.name}'s resume`}
                className="max-h-[88vh] w-auto max-w-full rounded-xl object-contain shadow-panel"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
