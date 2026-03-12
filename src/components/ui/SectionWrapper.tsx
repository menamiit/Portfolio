import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  id: string
  children: React.ReactNode
  className?: string
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SectionWrapper({ id, children, className = '' }: Props) {
  const ref     = useRef<HTMLElement>(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
