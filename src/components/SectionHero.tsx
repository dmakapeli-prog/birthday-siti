"use client"
import Image from 'next/image'

const polaroids = [
  { src: '/images/hero/foto-1.jpg', rotate: '-12deg', top: '8%', left: '3%', mobileTop: '5%', mobileLeft: '2%' },
  { src: '/images/hero/foto-2.jpg', rotate: '8deg', top: '7%', right: '3%', mobileTop: '6%', mobileRight: '2%' },
  { src: '/images/hero/foto-3.jpg', rotate: '-6deg', bottom: '8%', left: '4%', mobileBottom: '6%', mobileLeft: '3%' },
  { src: '/images/hero/foto-4.png', rotate: '12deg', bottom: '7%', right: '3%', mobileBottom: '5%', mobileRight: '2%' },
]

export default function SectionHero({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 30% 50%, rgba(247,168,192,0.35) 0%, rgba(232,130,159,0.15) 50%, transparent 80%)' }}>

      {/* Polaroid photos */}
      {polaroids.map((p, i) => (
        <div key={i} className="absolute transition-transform duration-500 hover:scale-110 hover:z-20 cursor-pointer hidden sm:block"
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, transform: `rotate(${p.rotate})`, zIndex: 3 }}>
          <div className="p-2 pb-8 rounded-sm w-[140px] md:w-[160px]" style={{ background: 'white', boxShadow: '0 15px 40px rgba(232,130,159,0.25)' }}>
            <Image src={p.src} alt="hero memory" width={160} height={140} priority className="w-full h-[120px] md:h-[140px] object-cover rounded-[2px] block" />
          </div>
        </div>
      ))}

      {/* Mobile Polaroid summary (2 smaller polaroids floating on mobile top/bottom corners so text remains readable) */}
      <div className="absolute top-4 left-2 transform -rotate-12 z-0 sm:hidden">
        <div className="p-1.5 pb-5 rounded-sm w-[90px]" style={{ background: 'white', boxShadow: '0 10px 25px rgba(232,130,159,0.2)' }}>
          <Image src="/images/hero/foto-1.jpg" alt="hero 1" width={90} height={80} priority className="w-full h-[75px] object-cover rounded-[2px]" />
        </div>
      </div>
      <div className="absolute bottom-16 right-2 transform rotate-12 z-0 sm:hidden">
        <div className="p-1.5 pb-5 rounded-sm w-[90px]" style={{ background: 'white', boxShadow: '0 10px 25px rgba(232,130,159,0.2)' }}>
          <Image src="/images/hero/foto-4.png" alt="hero 4" width={90} height={80} priority className="w-full h-[75px] object-cover rounded-[2px]" />
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-xl px-2">
        <div className="text-xs tracking-[4px] sm:tracking-[6px] uppercase mb-3 sm:mb-5" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
          ✦ A LOVE LETTER FOR YOU ✦
        </div>
        <h2 className="font-cormorant italic font-semibold mb-3 sm:mb-4" style={{ fontSize: 'clamp(3.2rem,10vw,7.5rem)', lineHeight: 0.95, textShadow: '0 0 40px rgba(232,130,159,0.4), 0 4px 20px rgba(232,130,159,0.15)', color: 'var(--ink)' }}>
          Your<br/>Special Day
        </h2>
        <div className="font-dancing mb-6 sm:mb-8" style={{ fontSize: 'clamp(1.2rem,2.5vw,2rem)', color: 'var(--rose)' }}>
          Created with love, just for you
        </div>
        <button onClick={onNext} className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase transition-all hover:scale-105 min-h-[44px]" style={{ border: '1px solid var(--rose)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)', fontFamily: 'sans-serif', color: 'var(--ink)' }}>
          ✦ READ MY LETTER ✦
        </button>
      </div>
    </div>
  )
}
