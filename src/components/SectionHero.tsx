/* eslint-disable @next/next/no-img-element */
"use client"

const polaroids = [
  { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=300&fit=crop&crop=faces', rotate: '-12deg', top: '12%', left: '6%' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop&crop=faces', rotate: '8deg', top: '10%', right: '6%' },
  { src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=300&h=300&fit=crop', rotate: '-6deg', bottom: '12%', left: '8%' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop', rotate: '12deg', bottom: '10%', right: '6%' },
]

export default function SectionHero({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center px-6"
      style={{ background: 'radial-gradient(circle at 30% 50%, rgba(100,30,60,0.4) 0%, rgba(45,27,61,0.2) 50%, transparent 80%)' }}>

      {/* Polaroid photos */}
      {polaroids.map((p, i) => (
        <div key={i} className="absolute transition-transform duration-500 hover:scale-110 hover:z-20 cursor-pointer"
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, transform: `rotate(${p.rotate})`, zIndex: 3 }}>
          <div className="p-2 pb-8 rounded-sm" style={{ background: 'white', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', width: '160px' }}>
            <img src={p.src} alt="memory" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '2px', display: 'block' }} />
          </div>
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10">
        <div className="text-xs tracking-[6px] uppercase mb-5" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
          ✦ A LOVE LETTER FOR YOU ✦
        </div>
        <h2 className="font-cormorant italic font-semibold mb-4" style={{ fontSize: 'clamp(4rem,10vw,7.5rem)', lineHeight: 0.95, textShadow: '0 0 60px rgba(196,160,160,0.4), 0 4px 30px rgba(0,0,0,0.9)' }}>
          Your<br/>Special Day
        </h2>
        <div className="font-dancing mb-8" style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', color: 'var(--rose-light)' }}>
          Created with love, just for you
        </div>
        <button onClick={onNext} className="px-10 py-4 rounded-full text-sm tracking-[4px] uppercase transition-all hover:scale-105" style={{ border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)', fontFamily: 'sans-serif' }}>
          ✦ READ MY LETTER ✦
        </button>
      </div>
    </div>
  )
}
