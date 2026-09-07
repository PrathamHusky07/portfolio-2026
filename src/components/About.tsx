'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      className="pt-8 md:pt-12 pb-16 md:pb-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">01</span>
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
          id="about-heading"
          className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-8"
        >
          About
        </h2>
        <div className="group relative rounded-lg border border-border/40 bg-foreground/[0.015] p-6 md:p-8 overflow-hidden hover:border-primary/30 hover:bg-[var(--hover-bg)] transition-all duration-300">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 w-1 h-full bg-[var(--hover-accent)] rounded-l-lg transition-colors duration-300 group-hover:bg-primary"
          />
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            I build production AI systems where analytics engineering meets applied ML. My focus is
            multi-agent orchestration, LLM evaluation pipelines, and lakehouse-native ML platforms.
            The systems that move business metrics and hold up under real traffic.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
