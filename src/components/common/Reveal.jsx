import { motion, useReducedMotion } from 'framer-motion'

/**
 * Shared scroll-reveal wrapper: fades and slides content up once when it
 * enters the viewport. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = '',
  as = 'div',
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  if (shouldReduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
