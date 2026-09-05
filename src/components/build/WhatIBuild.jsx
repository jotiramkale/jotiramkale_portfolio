import { buildAreas } from '../../data/whatIBuild'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import BuildCard from './BuildCard'

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container flex flex-col gap-12">
        <SectionHeading
          eyebrow="What I build"
          title="Three kinds of problems I like working on"
          description="Most of my projects fall into one of these buckets — often more than one at once."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {buildAreas.map((area, index) => (
            <Reveal key={area.id} delay={0.08 * index}>
              <BuildCard icon={area.icon} title={area.title} description={area.description} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
