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
    <div className="flex flex-col items-center justify-center h-full text-center px-6"
      style={{ background: 'radial-gradient(circle at center, rgba(45,27,61,0.3) 0%, transparent 80%)' }}>
      <div className="mb-4" style={{ transition: 'opacity 1.5s ease', opacity: show1 ? 1 : 0 }}>
        <span className="font-cormorant italic" style={{ fontSize: 'clamp(3.5rem,9vw,6.5rem)', fontWeight: 700 }}>Happy Birthday</span>
      </div>
      <div className="mb-3" style={{ transition: 'opacity 1.5s ease', opacity: show2 ? 1 : 0 }}>
        <span className="font-cormorant italic" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'var(--rose-light)', fontWeight: 300 }}>With All My Love</span>
      </div>
      <div className="mb-8" style={{ transition: 'opacity 1.5s ease', opacity: show3 ? 1 : 0 }}>
        <span className="font-cormorant italic" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--rose)', fontWeight: 300 }}>Always &amp; Forever</span>
      </div>

      <div style={{ transition: 'opacity 1.5s ease', opacity: showSub ? 1 : 0 }}>
        <p className="font-cormorant italic mb-2" style={{ fontSize: 'clamp(1rem,2vw,1.4rem)', color: 'rgba(255,255,255,0.75)' }}>
          Thank you for being part of my life.
        </p>
        <p className="font-cormorant italic mb-4" style={{ fontSize: 'clamp(1rem,2vw,1.4rem)', color: 'rgba(255,255,255,0.75)' }}>
          I hope this little gift can make your special day even more beautiful.
        </p>
        <p className="font-dancing mb-8" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: 'var(--rose-light)' }}>
          Forever yours. 🤍
        </p>
        <button onClick={onReplay} className="px-8 py-3 rounded-full text-sm tracking-[3px] uppercase transition-all hover:scale-105" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', background: 'transparent', fontFamily: 'sans-serif' }}>
          ↺ REPLAY FROM START
        </button>
      </div>
    </div>
  )
}
