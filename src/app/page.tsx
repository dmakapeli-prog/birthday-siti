"use client"
import { useState, useEffect, useCallback } from 'react'
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
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
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

      <div
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(20px)' : 'translateY(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          height: '100%',
          width: '100%',
          position: 'relative',
          zIndex: 10
        }}
      >
        {sections[current]}
      </div>
    </main>
  )
}
