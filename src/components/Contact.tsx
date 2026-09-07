'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

function GitHubIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.93.005 1.867.125 2.739.369 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const btnBase =
  'inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto justify-center sm:justify-start'
const btnPrimary = `${btnBase} bg-primary text-primary-foreground hover:bg-primary/90`
const btnSecondary = `${btnBase} border border-foreground/20 text-foreground hover:bg-foreground/5`

export function Contact() {
  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">05</span>
          <motion.div
            className="h-px w-12 bg-primary/60"
            style={{ originX: 0 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
        <h2
          id="contact-heading"
          className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground"
        >
          Get in touch
        </h2>
        <div className="group relative rounded-lg border border-border/40 bg-foreground/[0.015] p-6 md:p-8 overflow-hidden hover:border-primary/30 hover:bg-[var(--hover-bg)] transition-all duration-300 mt-6 mb-8 max-w-2xl">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 w-1 h-full bg-[var(--hover-accent)] rounded-l-lg transition-colors duration-300 group-hover:bg-primary"
          />
          <p className="text-lg leading-relaxed text-muted-foreground">
            Open to Analytics Engineer, AI Engineer, and Forward-Deployed Engineer roles. Best
            reached by email or LinkedIn.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
          <a href="mailto:prathamesh.kulkarni2398@gmail.com" className={btnPrimary}>
            <Mail size={16} aria-hidden="true" />
            prathamesh.kulkarni2398@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/prathameshkulkarni23/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnSecondary}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href="https://github.com/PrathamHusky07"
            target="_blank"
            rel="noopener noreferrer"
            className={btnSecondary}
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  )
}
