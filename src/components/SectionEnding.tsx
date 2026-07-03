"use client"
import { useState, useEffect } from 'react'

export default function SectionEnding({ onReplay }: { onReplay: () => void }) {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [showSub, setShowSub] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShow1(true), 400)
    const t2 = setTimeout(() => setShow2(true), 1800)
    const t3 = setTimeout(() => setShow3(true), 3200)
    const t4 = setTimeout(() => setShowSub(true), 4800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
      style={{ background: 'radial-gradient(circle at center, rgba(247,168,192,0.3) 0%, transparent 80%)' }}>
      <div className="mb-3 sm:mb-4" style={{ transition: 'opacity 1.5s ease', opacity: show1 ? 1 : 0 }}>
        <span className="font-cormorant italic" style={{ fontSize: 'clamp(3.2rem,9vw,6.5rem)', fontWeight: 700, color: 'var(--ink)' }}>Happy Birthday</span>
      </div>
      <div className="mb-2 sm:mb-3" style={{ transition: 'opacity 1.5s ease', opacity: show2 ? 1 : 0 }}>
        <span className="font-cormorant italic" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--rose)', fontWeight: 400 }}>With All My Love</span>
      </div>
      <div className="mb-6 sm:mb-8" style={{ transition: 'opacity 1.5s ease', opacity: show3 ? 1 : 0 }}>
        <span className="font-cormorant italic" style={{ fontSize: 'clamp(1.6rem,4vw,3rem)', color: 'var(--ink)', fontWeight: 300 }}>Always &amp; Forever</span>
      </div>

      <div style={{ transition: 'opacity 1.5s ease', opacity: showSub ? 1 : 0 }}>
        <p className="font-cormorant italic mb-2" style={{ fontSize: 'clamp(1rem,2vw,1.4rem)', color: 'var(--ink)' }}>
          Thank you for being part of my life.
        </p>
        <p className="font-cormorant italic mb-4" style={{ fontSize: 'clamp(1rem,2vw,1.4rem)', color: 'var(--ink)' }}>
          I hope this little gift can make your special day even more beautiful.
        </p>
        <p className="font-dancing mb-6 sm:mb-8" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', color: 'var(--rose)' }}>
          Forever yours. 🤍
        </p>
        <button onClick={onReplay} className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-[3px] uppercase transition-all hover:scale-105 min-h-[44px]" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
          ↺ REPLAY FROM START
        </button>
      </div>
    </div>
  )
}
