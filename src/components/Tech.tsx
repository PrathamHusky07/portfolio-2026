'use client'

import { motion } from 'framer-motion'
import { tech } from '@/content/tech'

export function Tech() {
  return (
    <motion.section
      id="tech"
      aria-labelledby="tech-heading"
      className="py-16 md:py-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">04</span>
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
          id="tech-heading"
          className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground"
        >
          Stack
        </h2>
        <div className="mt-12 space-y-8">
          {tech.map((group) => (
            <div key={group.category} className="flex flex-col gap-3 md:flex-row md:gap-8">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground md:w-48 md:shrink-0 md:pt-1">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border/40 px-2.5 py-1 text-xs text-muted-foreground hover:bg-foreground/5 hover:border-foreground/25 hover:text-foreground transition-colors duration-150"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
