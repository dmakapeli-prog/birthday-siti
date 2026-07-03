"use client"
import { useState } from 'react'

export default function SectionGift({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false)

  function handleClick() {
    if (opened) return
    setOpened(true)
    setTimeout(onNext, 1800)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6"
      style={{ background: 'radial-gradient(circle at center, rgba(247,168,192,0.3) 0%, transparent 70%)' }}>
      <div className="text-xs tracking-[6px] uppercase mb-10" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
        ✦ ADA SESUATU UNTUKMU ✦
      </div>

      <div onClick={handleClick} className="cursor-pointer flex flex-col items-center" style={{ animation: opened ? 'none' : 'float 3s ease-in-out infinite' }}>
        {/* Gift box SVG */}
        <svg width="180" height="200" viewBox="0 0 180 200">
          {/* Ribbon bow */}
          {!opened && (
            <>
              <ellipse cx="75" cy="45" rx="28" ry="18" fill="none" stroke="#d68fa3" strokeWidth="5" transform="rotate(-20 75 45)" />
              <ellipse cx="105" cy="45" rx="28" ry="18" fill="none" stroke="#d68fa3" strokeWidth="5" transform="rotate(20 105 45)" />
              <circle cx="90" cy="48" r="9" fill="#d68fa3" />
            </>
          )}
          {/* Lid */}
          <rect x="20" y={opened ? 0 : 48} width="140" height="28" rx="5"
            fill="#5c3535" stroke="#e8829f" strokeWidth="1.5"
            style={{ transition: 'y 0.8s ease, opacity 0.8s ease', opacity: opened ? 0 : 1 }} />
          <rect x="83" y={opened ? 0 : 48} width="14" height="28" fill="#d68fa3" style={{ transition: 'y 0.8s ease, opacity 0.8s ease', opacity: opened ? 0 : 1 }} />
          {/* Box body */}
          <rect x="20" y="76" width="140" height="110" rx="4" fill="#4a2c2c" stroke="#e8829f" strokeWidth="1.5" />
          <rect x="83" y="76" width="14" height="110" fill="#d68fa3" />
          <rect x="20" y="126" width="140" height="14" fill="#d68fa3" />
          {/* Glow when opened */}
          {opened && <ellipse cx="90" cy="76" rx="60" ry="20" fill="rgba(255,220,150,0.6)" style={{ filter: 'blur(15px)' }} />}
        </svg>
        
        <p className="mt-6 text-sm tracking-widest" style={{ color: 'var(--ink)', fontFamily: 'sans-serif', animation: 'twinkle 2s infinite', fontWeight: 500 }}>
          ✨ klik untuk membuka hadiahmu ✨
        </p>
      </div>
    </div>
  )
}
