import { motion } from 'framer-motion'
import Reveal from '../common/Reveal'
import TechBadge from '../common/TechBadge'
import Icon from '../common/Icon'
import ProjectThumbnail from './ProjectThumbnail'
import { statusStyles } from '../../data/projects'

function ProjectLinks({ githubUrl, liveUrl }) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-1">
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2 text-sm">
          <Icon name="github" className="h-3.5 w-3.5" />
          Code
        </a>
      ) : (
        <span className="btn-secondary !px-4 !py-2 cursor-not-allowed text-sm opacity-50" title="Repository link coming soon">
          <Icon name="github" className="h-3.5 w-3.5" />
          Code
        </span>
      )}
      {liveUrl ? (
        <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-sm">
          <Icon name="externalLink" className="h-3.5 w-3.5" />
          Live demo
        </a>
      ) : (
        <span className="btn-ghost !px-4 !py-2 cursor-not-allowed text-sm opacity-50" title="Not deployed yet">
          <Icon name="externalLink" className="h-3.5 w-3.5" />
          Live demo
        </span>
      )}
    </div>
  )
}

export default function ProjectCard({ project, delay = 0, onViewDetails }) {
  const { title, description, tech, status, icon, accent, githubUrl, liveUrl, featured } = project

  if (featured) {
    return (
      <Reveal delay={delay}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="glass-panel grid grid-cols-1 gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10"
        >
          <ProjectThumbnail icon={icon} accent={accent} className="h-48 w-full lg:h-64" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="tag-pill border-ion-500/30 bg-ion-500/10 text-ion-300">Featured project</span>
              <span className={`tag-pill ${statusStyles[status]}`}>{status}</span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-slate-100 sm:text-3xl">{title}</h3>
            <p className="text-base leading-relaxed text-slate-400">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ProjectLinks githubUrl={githubUrl} liveUrl={liveUrl} />
              <button
                type="button"
                onClick={() => onViewDetails(project)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-signal-400 transition-colors hover:text-signal-300"
              >
                View details
                <Icon name="arrowRight" className="h-3 w-3" />
              </button>
            </div>
          </div>
        </motion.div>
      </Reveal>
    )
  }

  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="glass-panel flex h-full flex-col gap-5 p-6"
      >
        <ProjectThumbnail icon={icon} accent={accent} className="h-40 w-full" />
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-slate-100">{title}</h3>
            <span className={`tag-pill shrink-0 ${statusStyles[status]}`}>{status}</span>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>
          <ProjectLinks githubUrl={githubUrl} liveUrl={liveUrl} />
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-signal-400 transition-colors hover:text-signal-300"
          >
            View details
            <Icon name="arrowRight" className="h-3 w-3" />
          </button>
        </div>
      </motion.div>
    </Reveal>
  )
}
