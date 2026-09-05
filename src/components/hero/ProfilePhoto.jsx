import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/profile'
import Icon from '../common/Icon'

/**
 * Primary Hero identity element. Expects a transparent PNG at /public/profile.png.
 * If that file is missing (or fails to load), falls back to a styled
 * placeholder instead of a broken image — never generates a fake portrait.
 */
export default function ProfilePhoto() {
  const [imageFailed, setImageFailed] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]"
    >
      <div className="relative aspect-square overflow-hidden rounded-full bg-signal-gradient shadow-glow">
        {!imageFailed ? (
          <img
            src="/profile.png"
            alt={`${profile.name} — ${profile.title}`}
            className="h-full w-full object-contain"
            loading="eager"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-signal-gradient font-display text-2xl font-semibold text-ink-950">
              {profile.initials}
            </span>
            <p className="max-w-[200px] text-xs leading-relaxed text-slate-500">
              Add your photo at <code className="text-slate-400">public/profile.png</code>
            </p>
          </div>
        )}

      </div>

      <div className="absolute -bottom-4 -right-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-900 shadow-panel sm:-bottom-5 sm:-right-5 sm:h-16 sm:w-16">
        <Icon name="brainAi" className="h-6 w-6 text-signal-400 sm:h-7 sm:w-7" />
      </div>
    </motion.div>
  )
}
