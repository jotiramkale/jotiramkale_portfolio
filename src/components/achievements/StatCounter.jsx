import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'
import Icon from '../common/Icon'

export default function StatCounter({ icon, value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCountUp(value, { start: inView })

  return (
    <div ref={ref} className="glass-panel flex flex-col items-center gap-3 px-6 py-8 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal-500/10 text-signal-400">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <p className="font-display text-4xl font-semibold text-slate-100 sm:text-5xl">
        {count}
        <span className="gradient-text">{suffix}</span>
      </p>
      <p className="text-sm font-medium text-slate-400">{label}</p>
    </div>
  )
}
