import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Code2 } from 'lucide-react'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`)
    const body    = encodeURIComponent(`Hi,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.open(`mailto:pareeknamit8@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const socials = [
    { icon: Mail,     label: 'pareeknamit8@gmail.com', href: 'mailto:pareeknamit8@gmail.com' },
    { icon: Github,   label: 'github.com/menamiit',  href: 'https://github.com/menamiit' },
    { icon: Linkedin, label: 'linkedin.com/in/namit-pareek', href: 'https://linkedin.com/in/namit-pareek' },
    { icon: Code2, label: 'leetcode.com/u/namiit', href: 'https://leetcode.com/u/namiit/' },
    { icon: MapPin,   label: 'Punjab, India', href: '#' },
  ]

  const inputBase =
    'w-full px-4 py-3 rounded-xl text-sm border bg-white dark:bg-slate-800/60 ' +
    'border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 ' +
    'placeholder-slate-400 dark:placeholder-slate-500 ' +
    'focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 ' +
    'transition-all duration-200'

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-[#0f1629]/50">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subheading">Have a project in mind? Let's talk.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left — info */}
        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm always open to interesting conversations, freelance projects, or full-time
            opportunities. Whether you have a question or just want to say hi — my inbox is open!
          </p>

          <div className="space-y-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card rounded-xl
                           hover:border-primary-400/50 dark:hover:border-primary-600/50
                           transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-primary-100 dark:bg-primary-900/40 shrink-0">
                  <Icon size={18} className="text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200
                                 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div variants={fadeUp}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputBase}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputBase}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`${inputBase} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center"
            >
              {sent ? '✓ Message opened!' : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
