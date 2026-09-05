import { motion } from 'framer-motion'
import Icon from '../common/Icon'

export default function SkillBadge({ name, icon }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-slate-200 transition-colors hover:border-signal-400/40 hover:bg-white/[0.06]"
    >
      <Icon name={icon} className="h-4 w-4 shrink-0 text-slate-300" />
      <span>{name}</span>
    </motion.div>
  )
}
