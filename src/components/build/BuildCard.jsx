import { motion } from 'framer-motion'
import Icon from '../common/Icon'

export default function BuildCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="glass-panel flex h-full flex-col gap-4 p-6 transition-colors hover:border-signal-400/25"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/10 text-signal-400">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="font-display text-lg font-semibold text-slate-100">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </motion.div>
  )
}
