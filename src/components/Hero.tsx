import { Mail } from 'lucide-react'
import { HeroSpotlight } from './HeroSpotlight'
import { heroMetrics } from '@/content/hero'

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.93.005 1.867.125 2.739.369 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Hero() {
  return (
    <header
      id="hero"
      aria-labelledby="hero-headline"
      className="relative overflow-hidden flex items-center pt-20 md:pt-28 pb-8 md:pb-12"
    >
      <HeroSpotlight />
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* Headline */}
        <h1 id="hero-headline" className="font-heading font-bold tracking-tight flex flex-col">
          <span className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground">
            AI Analytics{' '}
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Engineer
            </span>
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-muted-foreground mt-3 lg:mt-4">
            Shipping production AI where analytics engineering meets applied ML.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          Built multi-agent systems, RAG pipelines, and LLM-as-judge evaluation
          frameworks powering analytics platforms with $1M+ in business impact
          across advertising, SaaS, and finance.
        </p>

        {/* Metric strip */}
        <ul
          role="list"
          className="mt-10 flex flex-col md:flex-row md:items-center text-sm font-medium text-muted-foreground"
        >
          {heroMetrics.map((metric, i) => {
            const cls =
              i === 0
                ? 'py-4 md:py-0 md:pr-8 border-b md:border-b-0 md:border-r border-border/40'
                : i === heroMetrics.length - 1
                ? 'py-4 md:py-0 md:pl-8'
                : 'py-4 md:py-0 md:px-8 border-b md:border-b-0 md:border-r border-border/40'
            return (
              <li key={metric.label} className={cls}>
                {metric.value ? `${metric.value} ${metric.label}` : metric.label}
              </li>
            )
          })}
        </ul>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            See Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in Touch
          </a>
        </div>

        {/* Social affordance */}
        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/prathameshkulkarni23/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="https://github.com/PrathamHusky07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="mailto:prathamesh.kulkarni2398@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
