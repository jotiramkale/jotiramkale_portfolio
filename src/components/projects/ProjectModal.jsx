import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../common/Icon'
import TechBadge from '../common/TechBadge'
import ArchitectureFlow from './ArchitectureFlow'
import { statusStyles } from '../../data/projects'

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    previouslyFocused.current = document.activeElement
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus?.()
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-950/80 px-4 py-10 backdrop-blur-sm sm:items-center"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative w-full max-w-2xl bg-ink-900/95 p-6 sm:p-8"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:text-slate-100"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-6 pr-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`tag-pill ${statusStyles[project.status]}`}>{project.status}</span>
                {project.featured && (
                  <span className="tag-pill border-ion-500/30 bg-ion-500/10 text-ion-300">Featured project</span>
                )}
              </div>

              <h3 id="project-modal-title" className="font-display text-2xl font-semibold text-slate-100 sm:text-3xl">
                {project.title}
              </h3>

              {project.inProgressNote && (
                <p className="rounded-lg border border-ember-500/25 bg-ember-500/[0.06] px-4 py-3 text-sm leading-relaxed text-ember-300">
                  {project.inProgressNote}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>

              {project.problem && (
                <div>
                  <h4 className="mb-2 font-display text-sm font-semibold text-slate-200">Problem</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h4 className="mb-2 font-display text-sm font-semibold text-slate-200">Solution</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{project.solution}</p>
                </div>
              )}

              {project.keyFeatures?.length > 0 && (
                <div>
                  <h4 className="mb-3 font-display text-sm font-semibold text-slate-200">Key features</h4>
                  <ul className="flex flex-col gap-2">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                        <Icon name="checkCircle" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture?.length > 0 && (
                <div>
                  <h4 className="mb-3 font-display text-sm font-semibold text-slate-200">Architecture</h4>
                  <ArchitectureFlow steps={project.architecture} />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-6">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2 text-sm">
                    <Icon name="github" className="h-3.5 w-3.5" />
                    View code
                  </a>
                ) : (
                  <span className="btn-secondary !px-4 !py-2 cursor-not-allowed text-sm opacity-50" title="Repository link coming soon">
                    <Icon name="github" className="h-3.5 w-3.5" />
                    Code coming soon
                  </span>
                )}
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-sm">
                    <Icon name="externalLink" className="h-3.5 w-3.5" />
                    Live demo
                  </a>
                ) : (
                  <span className="btn-ghost !px-4 !py-2 cursor-not-allowed text-sm opacity-50" title="Not deployed yet">
                    <Icon name="externalLink" className="h-3.5 w-3.5" />
                    Not deployed yet
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
