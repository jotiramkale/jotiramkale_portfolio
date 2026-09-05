import { socialLinks } from '../../data/profile'
import Icon from './Icon'

const items = [
  { key: 'github', icon: 'github', label: 'GitHub', href: socialLinks.github },
  { key: 'linkedin', icon: 'linkedin', label: 'LinkedIn', href: socialLinks.linkedin },
  { key: 'email', icon: 'envelope', label: 'Email', href: `mailto:${socialLinks.email}` },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target={item.key === 'email' ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={item.label}
          title={item.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-signal-400/40 hover:text-signal-400"
        >
          <Icon name={item.icon} className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}
