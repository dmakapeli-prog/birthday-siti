"use client"
import { useState } from 'react'
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

  function goTo(index: number) {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }

  function next() { if (current < TOTAL - 1) goTo(current + 1) }
  function replay() { goTo(0) }

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
