"use client"
import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.01 + 0.003,
      twinkle: Math.random() * Math.PI * 2
    }))

    let shootX = -100, shootY = Math.random() * 200, shootAlpha = 0
    let shootActive = false

    function triggerShoot() {
      shootX = -100
      shootY = Math.random() * 300
      shootAlpha = 1
      shootActive = true
    }
    const shootInterval = setInterval(triggerShoot, 4000)

    let animationId: number
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(s => {
        s.twinkle += s.speed
        const a = 0.3 + Math.sin(s.twinkle) * 0.4
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.fill()
      })

      if (shootActive) {
        ctx.save()
        ctx.globalAlpha = shootAlpha
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(shootX, shootY)
        ctx.lineTo(shootX - 80, shootY + 30)
        ctx.stroke()
        ctx.restore()
        shootX += 12
        shootY += 4
        shootAlpha -= 0.015
        if (shootAlpha <= 0) shootActive = false
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      clearInterval(shootInterval)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
