import { profile } from '../../data/profile'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

const accentByIndex = ['border-signal-400/60', 'border-ion-400/60', 'border-ember-400/60']

export default function About() {
  const { about, interests, location } = profile

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container flex flex-col gap-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="flex flex-col gap-10 lg:col-span-3">
            <SectionHeading
              eyebrow="About"
              title="A systems thinker who likes shipping working software"
              description="A closer look at my background, what I'm working toward, and the areas I keep coming back to."
            />

            <Reveal className="flex flex-col gap-5" delay={0.05}>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-slate-400 sm:text-[17px]">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2 lg:self-start lg:pt-[30px]">
            <Reveal delay={0.1} className="glass-panel flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-400">
                  <Icon name="degree" className="h-5 w-5" />
                </span>
                <p className="font-display text-base font-semibold text-slate-100">Education</p>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                {about.education.status} &mdash; <span className="text-slate-200">{about.education.degree}</span>,
                focused on {about.education.focus}.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="glass-panel flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ion-500/10 text-ion-400">
                  <Icon name="rocket" className="h-5 w-5" />
                </span>
                <p className="font-display text-base font-semibold text-slate-100">Career goal</p>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{about.goal}</p>
            </Reveal>

            <Reveal delay={0.26} className="glass-panel flex items-center gap-3 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ember-500/10 text-ember-400">
                <Icon name="mapPin" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-slate-100">Based in</p>
                <p className="text-sm text-slate-400">{location}</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div>
          <Reveal className="mb-6 text-sm font-medium text-slate-300">Areas I focus on</Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {interests.map((interest, i) => (
              <Reveal
                key={interest.name}
                delay={0.04 * i}
                className={`flex items-center gap-3 rounded-xl border-l-2 bg-white/[0.025] px-4 py-4 transition-colors hover:bg-white/[0.05] ${accentByIndex[i % accentByIndex.length]}`}
              >
                <Icon name={interest.icon} className="h-[18px] w-[18px] text-slate-300" />
                <span className="text-sm font-medium text-slate-200">{interest.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
