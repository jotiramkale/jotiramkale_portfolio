import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` over `duration` ms once `start`
 * becomes true. Uses requestAnimationFrame with an ease-out curve.
 */
export function useCountUp(target, { duration = 1600, start = false } = {}) {
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!start || hasRun.current) return undefined
    hasRun.current = true

    let frameId
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setValue(Math.round(eased * target))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [start, target, duration])

  return value
}
