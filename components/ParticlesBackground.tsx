'use client'
import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0, height = 0
    let particles: any[] = []
    let animationId: number
    let mouse = { x: null as number | null, y: null as number | null, radius: 200 }

    const initParticles = () => {
      particles = []
      const PARTICLE_COUNT = 180
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          radius: Math.random() * 4 + 1.5,
          color: `hsl(${180 + Math.random() * 60}, 85%, 65%)`,
        })
      }
    }

    const draw = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      // líneas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const opacity = 0.6 * (1 - dist / 120)
            ctx.strokeStyle = `rgba(116, 193, 235, ${opacity * 0.8})`
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        }
      }
      // partículas con glow
      for (let p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 12
        ctx.shadowColor = "#74C1EB"
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.4)"
        ctx.fill()
      }
    }

    const update = () => {
      for (let p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx)
            const force = (mouse.radius - dist) / mouse.radius
            p.x += Math.cos(angle) * force * 2.2
            p.y += Math.sin(angle) * force * 2.2
          }
        }
      }
    }

    const animate = () => {
      update()
      draw()
      animationId = requestAnimationFrame(animate)
    }

    const resize = () => {
      const hero = document.querySelector('.hero') as HTMLElement
      if (hero) {
        width = hero.clientWidth
        height = hero.clientHeight
        canvas.width = width
        canvas.height = height
        initParticles()
      }
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas id="particles-canvas" ref={canvasRef} />
}