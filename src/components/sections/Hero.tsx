import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Github, Linkedin, Download, ArrowDown, Code2 } from 'lucide-react'
import ParticleBackground from '../ui/ParticleBackground'
import generalisedCv from './GeneralisedCV.pdf'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-transparent"
    >
      <ParticleBackground />

      {/* Glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/15 dark:bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-500/15 dark:bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-16 right-10 w-20 h-20 border-4 border-black dark:border-white bg-red-500 dark:bg-blue-500" />
        <div className="absolute bottom-20 left-8 w-14 h-14 border-4 border-black dark:border-white bg-white dark:bg-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs md:text-sm font-extrabold uppercase tracking-wider
                     border-4 border-black dark:border-white bg-white text-black dark:bg-black dark:text-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-4"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Namit Pareek</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-mono font-extrabold text-zinc-700 dark:text-zinc-200 mb-4 uppercase"
        >
          Data Analyst | Backend Development
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300 text-lg mb-10 font-medium"
        >
          I build data-driven applications, extract meaningful insights, and design systems
          that turn raw data into actionable decisions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <ScrollLink to="projects" smooth duration={500} offset={-64}>
            <button className="btn-primary">
              View Projects
              <ArrowDown size={16} />
            </button>
          </ScrollLink>

          <a href={generalisedCv} download="GeneralisedCV.pdf" className="btn-outline">
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github,   href: 'https://github.com/menamiit',    label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/namit-pareek/',  label: 'LinkedIn' },
            { icon: Code2, href: 'https://leetcode.com/u/namiit/', label: 'LeetCode' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 border-4 border-black dark:border-white bg-white dark:bg-[#16161a]
                         text-black dark:text-white transition-all duration-150
                         hover:-translate-x-1 hover:-translate-y-1"
              style={{ boxShadow: '4px 4px 0 currentColor' }}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                   text-slate-400 dark:text-slate-500 text-xs"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
