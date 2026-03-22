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
                 bg-gradient-to-br from-slate-50 via-slate-100 to-primary-50
                 dark:from-[#0a0f1e] dark:via-[#0d1530] dark:to-[#0a1628]"
    >
      <ParticleBackground />

      {/* Glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     border border-primary-300/50 dark:border-primary-700/50
                     bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300
                     text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Namit Pareek</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-mono font-medium text-slate-600 dark:text-slate-300 mb-4"
        >
          Data Analyst | Backend Development
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg mb-10"
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
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700
                         bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm
                         text-slate-600 dark:text-slate-300
                         hover:text-primary-600 dark:hover:text-primary-400
                         hover:border-primary-400 dark:hover:border-primary-600
                         transition-all duration-200 hover:scale-110"
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
