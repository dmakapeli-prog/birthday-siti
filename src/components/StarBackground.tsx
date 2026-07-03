"use client"
import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random(),
      speed: Math.random() * 0.01 + 0.003,
      twinkle: Math.random() * Math.PI * 2,
      type: Math.random() < 0.2 ? 'heart' : 'circle' // 1 in 5 ratio
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

    function drawHeart(x: number, y: number, size: number, alpha: number) {
      ctx.save()
      ctx.translate(x, y)
      ctx.beginPath()
      const topCurveHeight = size * 0.75
      ctx.moveTo(0, topCurveHeight)
      ctx.bezierCurveTo(0, 0, -size * 1.6, 0, -size * 1.6, topCurveHeight)
      ctx.bezierCurveTo(-size * 1.6, size * 1.8, 0, size * 2.3, 0, size * 3.2)
      ctx.bezierCurveTo(0, size * 2.3, size * 1.6, size * 1.8, size * 1.6, topCurveHeight)
      ctx.bezierCurveTo(size * 1.6, 0, 0, 0, 0, topCurveHeight)
      ctx.closePath()
      ctx.fillStyle = `rgba(232,130,159,${alpha})`
      ctx.fill()
      ctx.restore()
    }

    let animationId: number
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(s => {
        s.twinkle += s.speed
        const a = 0.3 + Math.sin(s.twinkle) * 0.4
        
        if (s.type === 'heart') {
          drawHeart(s.x, s.y, s.r * 1.4, a)
        } else {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(232,130,159,${a})`
          ctx.fill()
        }
      })

      if (shootActive) {
        ctx.save()
        ctx.globalAlpha = shootAlpha
        ctx.strokeStyle = 'rgba(232,130,159,0.8)'
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
