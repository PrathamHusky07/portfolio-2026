interface AboutProps {}

export function About({}: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2
          id="about-heading"
          className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-8"
        >
          About
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
          I build production AI systems where analytics engineering meets applied ML. My focus is
          multi-agent orchestration, LLM evaluation pipelines, and lakehouse-native ML platforms.
          The systems that move business metrics and hold up under real traffic.
        </p>
      </div>
    </section>
  )
}
