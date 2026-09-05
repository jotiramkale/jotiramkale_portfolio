import { skillCategories } from '../../data/skills'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import SkillBadge from './SkillBadge'

const sizeClasses = {
  lg: 'sm:col-span-2 lg:col-span-3 lg:row-span-2',
  md: 'sm:col-span-1 lg:col-span-3',
  sm: 'sm:col-span-1 lg:col-span-2',
}

const accentClasses = {
  signal: 'text-signal-400',
  ion: 'text-ion-400',
  ember: 'text-ember-400',
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit spanning models, APIs, and interfaces"
          description="Grouped by where each tool shows up in a project — from language fundamentals to the AI stack I use most."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={0.06 * index}
              className={`glass-panel flex flex-col gap-5 p-6 ${sizeClasses[category.size]}`}
            >
              <div>
                <h3 className={`font-display text-lg font-semibold ${accentClasses[category.accent]}`}>
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{category.description}</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
