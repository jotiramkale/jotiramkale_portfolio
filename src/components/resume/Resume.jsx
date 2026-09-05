import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'
import ResumePreview from './ResumePreview'

const contents = ['Education & certifications', 'Skills & tech stack', 'Project experience', 'Contact details']

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <SectionHeading
            eyebrow="Resume"
            title="The full picture, in one document"
            description="A one-page summary of my education, skills, and project experience — kept current as new work ships."
          />

          <ul className="flex flex-col gap-2.5">
            {contents.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                <Icon name="checkCircle" className="h-3.5 w-3.5 text-signal-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <a href="/resume.pdf" download className="btn-primary">
              <Icon name="download" className="h-3.5 w-3.5" />
              Download resume
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
              <Icon name="eye" className="h-3.5 w-3.5" />
              View resume
            </a>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <ResumePreview />
        </div>
      </div>
    </section>
  )
}
