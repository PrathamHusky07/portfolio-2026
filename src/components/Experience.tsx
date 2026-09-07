'use client'

import { motion } from 'framer-motion'
import { experience } from '@/content/experience'

export function Experience() {
  return (
    <motion.section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">02</span>
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
          id="experience-heading"
          className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-12"
        >
          Experience
        </h2>
        <ol>
          {experience.map((exp) => (
            <li
              key={exp.company}
              className="group relative flex flex-col md:flex-row md:justify-between gap-2 md:gap-10 border-b border-border/40 pb-8 pt-8 first:pt-0 last:border-b-0 rounded-lg -mx-6 px-6 transition-all duration-300 hover:bg-[var(--hover-bg)] hover:-translate-y-1 hover:shadow-[0_8px_32px_-8px_var(--primary)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-xl sm:text-2xl text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {exp.company}
                </p>
                <p className="mt-1 text-base font-medium text-foreground/80">
                  {exp.title}
                </p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {exp.summary}
                </p>
              </div>
              <div className="shrink-0 md:w-48 md:text-right">
                <p className="text-sm text-muted-foreground">{exp.location}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{exp.dates}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </motion.section>
  )
}
