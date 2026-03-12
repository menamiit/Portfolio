import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading"><span className="gradient-text">Certifications</span></h2>
        <p className="section-subheading">Validated skills and professional credentials</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {certifications.map((cert) => (
          <motion.div key={cert.id} variants={fadeUp}>
            <div className="card p-5 flex flex-col gap-4 hover:border-primary-400/50 dark:hover:border-primary-600/50 transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="p-3 w-fit rounded-xl bg-gradient-to-br from-primary-100 to-accent-400/20 dark:from-primary-900/40 dark:to-accent-500/10">
                <Award size={22} className="text-primary-600 dark:text-primary-400" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{cert.date}</p>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400
                             hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  Verify <ExternalLink size={11} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
