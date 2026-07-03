"use client"
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StarBackground from '@/components/StarBackground'
import MusicPlayer from '@/components/MusicPlayer'
import NavDots from '@/components/NavDots'
import SectionCountdown from '@/components/SectionCountdown'
import SectionHero from '@/components/SectionHero'
import SectionGift from '@/components/SectionGift'
import SectionLetter from '@/components/SectionLetter'
import SectionMemories from '@/components/SectionMemories'
import SectionVideo from '@/components/SectionVideo'
import SectionWishes from '@/components/SectionWishes'
import SectionEnding from '@/components/SectionEnding'

const TOTAL = 8

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating || index === current) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => {
      setAnimating(false)
    }, 650)
  }, [animating, current])

  const next = useCallback(() => {
    if (current < TOTAL - 1) goTo(current + 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1)
  }, [current, goTo])

  const replay = useCallback(() => {
    goTo(0)
  }, [goTo])

  useEffect(() => {
    let touchStartY = 0
    let touchStartX = 0

    function handleWheel(e: WheelEvent) {
      if (animating) return
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          next()
        } else if (e.deltaY < 0) {
          prev()
        }
      }
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY
      touchStartX = e.touches[0].clientX
    }

    function handleTouchEnd(e: TouchEvent) {
      if (animating) return
      const deltaY = touchStartY - e.changedTouches[0].clientY
      const deltaX = touchStartX - e.changedTouches[0].clientX
      
      if (Math.abs(deltaY) > 50 && Math.abs(deltaY) > Math.abs(deltaX)) {
        if (deltaY > 0) {
          next()
        } else if (deltaY < 0) {
          prev()
        }
      }
    }

    window.addEventListener('wheel', handleWheel)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [animating, next, prev])

  const sections = [
    <SectionCountdown key="0" onNext={next} />,
    <SectionHero key="1" onNext={next} />,
    <SectionGift key="2" onNext={next} />,
    <SectionLetter key="3" onNext={next} />,
    <SectionMemories key="4" onNext={next} />,
    <SectionVideo key="5" onNext={next} />,
    <SectionWishes key="6" onNext={next} />,
    <SectionEnding key="7" onReplay={replay} />,
  ]

  return (
    <main className="relative w-screen h-screen overflow-hidden" style={{ background: 'radial-gradient(circle at center, #ffeef3 0%, var(--bg) 60%, var(--bg-deep) 100%)', color: 'var(--ink)' }}>
      <StarBackground />
      <MusicPlayer />
      <NavDots current={current} total={TOTAL} onDotClick={goTo} />

      {/* Parallax background gradient layer moving slightly slower than foreground */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background: `radial-gradient(circle at ${30 + (current % 3) * 20}% ${40 + (current % 2) * 20}%, rgba(247,168,192,0.25) 0%, transparent 60%)`
          }}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-full relative z-10"
        >
          {sections[current]}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
