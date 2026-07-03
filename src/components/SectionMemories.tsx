/* eslint-disable @next/next/no-img-element */
"use client"

const memories = [
  { src: '/images/memories/momen-1.jpg', rotate: '-5deg', label: 'momen terbaik 🤍' },
  { src: '/images/memories/momen-2.jpg', rotate: '3deg', label: 'selalu bersamamu' },
  { src: '/images/memories/momen-3.jpg', rotate: '-4deg', label: 'kenangan indah 🌸' },
  { src: '/images/memories/momen-4.jpg', rotate: '4deg', label: 'selalu kamu 💕' },
  { src: '/images/memories/momen-5.jpg', rotate: '-6deg', label: 'foto kita 📸' },
  { src: '/images/memories/momen-6.jpg', rotate: '5deg', label: 'forever 🌹' },
]

export default function SectionMemories({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <h2 className="font-cormorant italic mb-2" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', color: 'var(--ink)', textShadow: '0 0 30px rgba(232,130,159,0.3)' }}>
        Our Memories
      </h2>
      <p className="text-xs tracking-[5px] uppercase mb-8" style={{ color: 'var(--rose)', fontFamily: 'sans-serif', fontWeight: 600 }}>✦ every moment captured in love ✦</p>
      
      <div className="grid grid-cols-3 gap-4 max-w-3xl w-full">
        {memories.map((m, i) => (
          <div key={i} className="cursor-pointer transition-all duration-300 hover:z-10 group"
            style={{ transform: `rotate(${m.rotate})` }}>
            <div className="p-2 pb-7 rounded-sm group-hover:scale-110 group-hover:rotate-0 transition-all duration-300"
              style={{ background: 'white', boxShadow: '0 10px 30px rgba(232,130,159,0.25)' }}>
              <img src={m.src} alt="memory" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
              <p style={{ textAlign: 'center', color: '#666', fontSize: '0.7rem', marginTop: '4px', fontFamily: 'Dancing Script, cursive' }}>{m.label}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onNext} className="mt-8 px-8 py-3 rounded-full text-sm tracking-[3px] uppercase transition-all hover:scale-105" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
        → NEXT
      </button>
    </div>
  )
}
