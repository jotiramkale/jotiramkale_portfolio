import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently most visible in the viewport,
 * so the navbar can highlight the matching link as the user scrolls.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  // Stable string key so the effect only re-runs if the actual ids change,
  // not when the caller passes a new array reference on every render.
  const key = sectionIds.join('|')

  useEffect(() => {
    const ids = key.split('|').filter(Boolean)
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return activeId
}
