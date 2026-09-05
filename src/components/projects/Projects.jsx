import { useState } from 'react'
import { projects } from '../../data/projects'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-28">
      <div className="section-container flex flex-col gap-10">
        <SectionHeading
          eyebrow="Projects"
          title="Applied AI and full stack projects"
          description="A mix of shipped work and projects still in progress — spanning predictive ML, RAG, and multi-agent systems. Click any project for the full breakdown."
        />

        <div className="flex flex-col gap-6">
          {featured && <ProjectCard project={featured} onViewDetails={setSelectedProject} />}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={0.08 * index}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
