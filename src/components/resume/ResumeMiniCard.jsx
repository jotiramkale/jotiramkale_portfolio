import Icon from '../common/Icon'

/**
 * Compact, secondary resume card shown near the Hero — deliberately smaller
 * and quieter than the profile photo. The full Resume section further down
 * the page carries the fuller preview and explanation.
 */
export default function ResumeMiniCard() {
  return (
    <div className="glass-panel mx-auto flex w-full max-w-[320px] items-center gap-3 px-4 py-3 sm:max-w-[360px] lg:max-w-[380px]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-300">
        <Icon name="filePdf" className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-200">Resume</p>
        <p className="text-xs text-slate-500">One-page PDF</p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="View resume"
          title="View resume"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-slate-100"
        >
          <Icon name="eye" className="h-3.5 w-3.5" />
        </a>
        <a
          href="/resume.pdf"
          download
          aria-label="Download resume"
          title="Download resume"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-signal-400"
        >
          <Icon name="download" className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
