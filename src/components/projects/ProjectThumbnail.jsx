import { motion } from 'framer-motion'
import Icon from '../common/Icon'

const gradientByAccent = {
  signal: 'from-signal-600/25 via-ink-800 to-ink-850',
  ion: 'from-ion-600/30 via-ink-800 to-ink-850',
  ember: 'from-ember-500/25 via-ink-800 to-ink-850',
}

const iconGlowByAccent = {
  signal: 'text-signal-400',
  ion: 'text-ion-400',
  ember: 'text-ember-400',
}

export default function ProjectThumbnail({ icon, accent = 'signal', className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradientByAccent[accent]} ${className}`}
    >
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-ink-900/70 backdrop-blur-sm ${iconGlowByAccent[accent]}`}
      >
        <Icon name={icon} className="h-7 w-7" />
      </motion.div>
    </div>
  )
}
