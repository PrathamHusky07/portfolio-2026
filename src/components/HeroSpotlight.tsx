'use client'

import { useEffect, useRef, useState } from 'react'

export function HeroSpotlight() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [mounted, setMounted] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hero = document.getElementById('hero')
    if (!hero || reduced) return

    const onMove = (e: MouseEvent) => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        rafRef.current = null
      })
    }

    hero.addEventListener('mousemove', onMove)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!mounted || pos === null) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply dark:mix-blend-screen"
      style={{
        background: `radial-gradient(circle 400px at ${pos.x}px ${pos.y}px, var(--primary) 0%, transparent 100%)`,
      }}
    />
  )
}
