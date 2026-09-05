import Icon from './Icon'
import { techIconKey } from '../../utils/techIcon'

export default function TechBadge({ label }) {
  return (
    <span className="tag-pill hover:border-signal-400/40 hover:text-signal-300">
      <Icon name={techIconKey(label)} className="h-3.5 w-3.5" />
      {label}
    </span>
  )
}
