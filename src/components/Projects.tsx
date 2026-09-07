import { projects, type Project } from '@/content/projects'

const featureProjects = projects.filter((p) => p.rank <= 2)
const compactProjects = projects.filter((p) => p.rank >= 3)

function StatusBadge({ status }: { status: Project['status'] }) {
  const base = 'uppercase text-[10px] tracking-wider font-medium px-2.5 py-1 rounded-full'
  return status === 'shipped' ? (
    <span className={`${base} bg-primary/10 text-primary`}>Shipped</span>
  ) : (
    <span className={`${base} bg-muted text-muted-foreground`}>In Progress</span>
  )
}

function TechChips({
  tech,
  size = 'md',
}: {
  tech: readonly string[]
  size?: 'sm' | 'md'
}) {
  const cls =
    size === 'sm'
      ? 'px-2 py-0.5 text-xs border border-border/40 rounded text-muted-foreground'
      : 'px-2.5 py-1 text-xs border border-border/40 rounded text-muted-foreground'
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className={cls}>
          {t}
        </span>
      ))}
    </div>
  )
}

function GitHubLink({ href }: { href?: string }) {
  if (!href) {
    return <span className="text-sm text-muted-foreground/40">GitHub link coming soon</span>
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
    >
      GitHub ↗
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          id="projects-heading"
          className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground"
        >
          Projects
        </h2>

        {/* Feature cards */}
        <div className="mt-12 space-y-8">
          {featureProjects.map((project) => (
            <article key={project.title} className="border border-border/40 rounded-lg p-8">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground leading-tight">
                  {project.title}
                </h3>
                <StatusBadge status={project.status} />
              </div>

              <p className="mt-2 text-base text-muted-foreground">{project.pitch}</p>

              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.longPitch}
              </p>

              {project.metrics && project.metrics.length > 0 ? (
                <ul
                  role="list"
                  className="mt-6 flex flex-col sm:flex-row sm:items-center text-sm font-medium text-muted-foreground"
                >
                  {project.metrics.map((metric, i) => {
                    const isLast = i === project.metrics!.length - 1
                    return (
                      <li
                        key={metric.label}
                        className={[
                          'py-3 sm:py-0',
                          !isLast && 'sm:pr-6 border-b sm:border-b-0 sm:border-r border-border/40',
                          i > 0 && 'sm:pl-6',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <span className="text-foreground font-semibold">{metric.value}</span>{' '}
                        {metric.label}
                      </li>
                    )
                  })}
                </ul>
              ) : project.statusNote ? (
                <p className="mt-6 text-sm text-muted-foreground">{project.statusNote}</p>
              ) : null}

              <div className="mt-6">
                <TechChips tech={project.tech} />
              </div>

              <div className="mt-6">
                <GitHubLink href={project.links.github} />
              </div>
            </article>
          ))}
        </div>

        {/* More work */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            More work
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {compactProjects.map((project) => (
            <article
              key={project.title}
              className="border border-border/40 rounded-lg p-6 hover:border-border transition-colors"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground">
                {project.title}
              </h3>
              <div className="mt-2">
                <StatusBadge status={project.status} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{project.pitch}</p>
              <div className="mt-4">
                <TechChips tech={project.tech} size="sm" />
              </div>
              <div className="mt-4">
                <GitHubLink href={project.links.github} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
