/* eslint-disable @next/next/no-img-element */
"use client"

const polaroids = [
  { src: '/images/hero/foto-1.jpg', rotate: '-12deg', top: '12%', left: '6%' },
  { src: '/images/hero/foto-2.jpg', rotate: '8deg', top: '10%', right: '6%' },
  { src: '/images/hero/foto-3.jpg', rotate: '-6deg', bottom: '12%', left: '8%' },
  { src: '/images/hero/foto-4.jpg', rotate: '12deg', bottom: '10%', right: '6%' },
]

export default function SectionHero({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center px-6"
      style={{ background: 'radial-gradient(circle at 30% 50%, rgba(247,168,192,0.35) 0%, rgba(232,130,159,0.15) 50%, transparent 80%)' }}>

      {/* Polaroid photos */}
      {polaroids.map((p, i) => (
        <div key={i} className="absolute transition-transform duration-500 hover:scale-110 hover:z-20 cursor-pointer"
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, transform: `rotate(${p.rotate})`, zIndex: 3 }}>
          <div className="p-2 pb-8 rounded-sm" style={{ background: 'white', boxShadow: '0 15px 40px rgba(232,130,159,0.25)', width: '160px' }}>
            <img src={p.src} alt="memory" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '2px', display: 'block' }} />
          </div>
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10">
        <div className="text-xs tracking-[6px] uppercase mb-5" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
          ✦ A LOVE LETTER FOR YOU ✦
        </div>
        <h2 className="font-cormorant italic font-semibold mb-4" style={{ fontSize: 'clamp(4rem,10vw,7.5rem)', lineHeight: 0.95, textShadow: '0 0 40px rgba(232,130,159,0.4), 0 4px 20px rgba(232,130,159,0.15)', color: 'var(--ink)' }}>
          Your<br/>Special Day
        </h2>
        <div className="font-dancing mb-8" style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', color: 'var(--rose)' }}>
          Created with love, just for you
        </div>
        <button onClick={onNext} className="px-10 py-4 rounded-full text-sm tracking-[4px] uppercase transition-all hover:scale-105" style={{ border: '1px solid var(--rose)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)', fontFamily: 'sans-serif', color: 'var(--ink)' }}>
          ✦ READ MY LETTER ✦
        </button>
      </div>
    </div>
  )
}
