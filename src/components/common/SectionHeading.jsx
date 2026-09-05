import Reveal from './Reveal'

/**
 * Consistent section header: a short eyebrow line, a display title, and
 * an optional supporting sentence. Alignment defaults to left to match
 * the site's left-aligned reading rhythm; pass align="center" where a
 * centered header suits the layout better (e.g. Achievements).
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <div className="flex items-center gap-2.5">
          <span className="h-px w-8 bg-signal-gradient" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold text-slate-100 sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-slate-400">{description}</p>}
    </Reveal>
  )
}
