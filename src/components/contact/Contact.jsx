import { socialLinks } from '../../data/profile'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'
import ContactForm from './ContactForm'

// Derives a short display handle from a profile URL so the label always
// matches whatever is actually set in data/profile.js instead of a hardcoded fake handle.
function handleFromUrl(url) {
  const trimmed = url.replace(/\/$/, '')
  return trimmed.substring(trimmed.lastIndexOf('/') + 1)
}

const contactMethods = [
  { key: 'email', icon: 'envelope', label: 'Email', value: socialLinks.email, href: `mailto:${socialLinks.email}` },
  { key: 'github', icon: 'github', label: 'GitHub', value: `@${handleFromUrl(socialLinks.github)}`, href: socialLinks.github },
  { key: 'linkedin', icon: 'linkedin', label: 'LinkedIn', value: handleFromUrl(socialLinks.linkedin), href: socialLinks.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            description="Open to internships, campus placements, and collaborations in AI/ML and full stack development. Reach out through any of these."
          />

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
            {contactMethods.map((method, i) => (
              <Reveal key={method.key} delay={0.06 * i}>
                <a
                  href={method.href}
                  target={method.key === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="glass-panel flex items-center gap-4 p-5 transition-colors hover:border-signal-400/30"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal-500/10 text-signal-400">
                    <Icon name={method.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">{method.label}</p>
                    <p className="truncate text-sm font-medium text-slate-200">{method.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:col-span-3 lg:pt-[30px]">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
