import { achievements } from '../../data/achievements'
import SectionHeading from '../common/SectionHeading'
import StatCounter from './StatCounter'

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Achievements"
          title="A quick snapshot in numbers"
          description="Counts that grow with every project, course, and repository I add."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {achievements.map((item) => (
            <StatCounter
              key={item.id}
              icon={item.icon}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
