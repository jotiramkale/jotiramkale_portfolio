/**
 * Fixed decorative backdrop: two slow-moving blurred gradient blobs plus a
 * faint grid, masked so it fades toward the edges. Purely decorative —
 * aria-hidden and pointer-events disabled.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] animate-blob rounded-full bg-ion-600/[0.10] blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[26rem] w-[26rem] animate-blob rounded-full bg-signal-600/[0.10] blur-[120px] [animation-delay:-6s]" />
    </div>
  )
}
