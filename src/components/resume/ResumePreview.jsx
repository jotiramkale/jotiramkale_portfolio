import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

const lineWidths = ['w-3/4', 'w-full', 'w-5/6', 'w-2/3', 'w-full', 'w-1/2']

function FallbackMock() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-gradient text-sm font-bold text-ink-950">
          {profile.initials}
        </span>
        <div className="flex-1">
          <p className="h-2.5 w-28 rounded-full bg-white/20" />
          <p className="mt-2 h-2 w-20 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2.5">
        {lineWidths.map((width) => (
          <span key={width} className={`h-2 rounded-full bg-white/10 ${width}`} />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {['Python', 'React', 'RAG', 'FastAPI'].map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-400">
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-slate-600">
        Add <code className="text-slate-500">public/resume.pdf</code> to show a real preview here.
      </p>
    </div>
  )
}

/**
 * Shows an actual rendered snapshot of the real resume.pdf when available
 * (public/resume-preview.jpg). Falls back to a generic skeleton mock if
 * that thumbnail is missing, so the section never breaks or looks fake.
 *
 * If you replace public/resume.pdf, regenerate the thumbnail so this stays
 * in sync — see README.md for the one-line command.
 */
export default function ResumePreview() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, rotate: -3, y: 20 }}
      whileInView={{ opacity: 1, rotate: -1.5, y: 0 }}
      whileHover={{ rotate: 0, y: -4 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel mx-auto w-full max-w-sm overflow-hidden"
    >
      {!imageFailed ? (
        <img
          src="/resume-preview.jpg"
          alt={`Preview of ${profile.name}'s resume`}
          className="w-full object-cover"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <FallbackMock />
      )}
    </motion.div>
  )
}
