/**
 * Simple vertical flow diagram built from CSS/SVG (no chart library) —
 * used in the project detail modal to show a project's pipeline or
 * architecture as an ordered sequence of steps.
 */
export default function ArchitectureFlow({ steps }) {
  if (!steps || steps.length === 0) return null

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        return (
          <div key={step} className="flex gap-3.5">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-signal-400/30 bg-signal-500/[0.08] font-mono text-xs text-signal-300">
                {index + 1}
              </span>
              {!isLast && <span className="w-px flex-1 bg-white/10" />}
            </div>
            <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-5'}`}>
              <p className="pt-1 text-sm text-slate-300">{step}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
