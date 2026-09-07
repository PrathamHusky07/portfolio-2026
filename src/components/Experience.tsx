import { experience } from '@/content/experience'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
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
              className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-10 border-b border-border/40 pb-8 pt-8 first:pt-0 last:border-b-0"
            >
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-xl sm:text-2xl text-foreground leading-tight">
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
    </section>
  )
}
