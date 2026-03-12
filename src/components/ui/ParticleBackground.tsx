import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'
import { useAppSelector } from '../../app/hooks'

export default function ParticleBackground() {
  const theme = useAppSelector((s) => s.theme.mode)
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  const isDark    = theme === 'dark'
  const dotColor  = isDark ? '#6366f1' : '#818cf8'
  const lineColor = isDark ? '#4338ca' : '#a5b4fc'

  if (!engineReady) return null

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize:  { enable: true },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color:   { value: dotColor },
          links: {
            color:    lineColor,
            distance: 140,
            enable:   true,
            opacity:  0.35,
            width:    1,
          },
          move: {
            enable: true,
            speed:  1.5,
            outModes: { default: 'bounce' },
          },
          number: { density: { enable: true }, value: 70 },
          opacity: { value: { min: 0.3, max: 0.7 } },
          shape:   { type: 'circle' },
          size:    { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  )
}
