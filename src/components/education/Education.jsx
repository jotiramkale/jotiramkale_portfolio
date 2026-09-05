import { educationTimeline } from '../../data/education'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

const markerAccents = [
  'border-signal-400/40 text-signal-400',
  'border-ion-400/40 text-ion-400',
  'border-ember-400/40 text-ember-400',
]

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Education"
          title="How I got here"
          description="Formal coursework alongside a self-directed track through applied AI."
        />

        <div className="flex flex-col">
          {educationTimeline.map((item, index) => {
            const isLast = index === educationTimeline.length - 1
            return (
              <Reveal key={item.id} delay={0.08 * index} className="flex gap-5 sm:gap-6">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-ink-900 shadow-panel ${markerAccents[index % markerAccents.length]}`}
                  >
                    <Icon name={item.icon} className="h-[18px] w-[18px]" />
                  </span>
                  {!isLast && <span className="w-px flex-1 bg-gradient-to-b from-white/15 to-white/[0.03]" />}
                </div>

                <div className="glass-panel mb-8 flex-1 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-slate-100">{item.title}</h3>
                    <span className="font-mono text-xs text-slate-500">{item.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
