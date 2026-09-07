import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Tech } from '@/components/Tech'
import { Contact } from '@/components/Contact'
import { AmbientBackground } from '@/components/AmbientBackground'

export default function Home() {
  return (
    <main>
      <AmbientBackground />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Tech />
      <Contact />
      <footer className="border-t border-border/40 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="text-sm text-muted-foreground">© 2026 Prathamesh Kulkarni</p>
          <p className="text-sm text-muted-foreground">Built with Next.js on Vercel</p>
        </div>
      </footer>
    </main>
  )
}
