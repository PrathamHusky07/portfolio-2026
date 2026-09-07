import { tech } from '@/content/tech'

export function Tech() {
  return (
    <section id="tech" aria-labelledby="tech-heading" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
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
                    className="rounded border border-border/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
