import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink-800/90 text-slate-200 shadow-panel backdrop-blur-md hover:border-signal-400/40 hover:text-signal-400 sm:bottom-8 sm:right-8"
        >
          <Icon name="arrowUp" className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
