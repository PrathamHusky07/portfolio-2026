export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dot grid — foreground color at 3% opacity creates a subtle texture */}
      <div
        className="absolute inset-0 opacity-[var(--ambient-dot-opacity)]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Top-center accent glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 40% at 50% -10%, var(--primary) 0%, transparent 100%)`,
          opacity: 0.04,
        }}
      />
    </div>
  )
}
