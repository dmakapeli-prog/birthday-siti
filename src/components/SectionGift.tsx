"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SectionGift({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false)

  function handleClick() {
    if (opened) return
    setOpened(true)
    setTimeout(onNext, 1800)
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 overflow-hidden"
      style={{ background: 'radial-gradient(circle at center, rgba(247,168,192,0.3) 0%, transparent 70%)' }}>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[4px] sm:tracking-[6px] uppercase mb-6 sm:mb-10 relative z-10"
        style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}
      >
        ✦ ADA SESUATU UNTUKMU ✦
      </motion.div>

      <motion.div
        onClick={handleClick}
        className="relative cursor-pointer flex flex-col items-center p-4 min-h-[44px] min-w-[44px] z-20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={
          opened
            ? { scale: [1, 1.15, 1], rotate: 0, opacity: 1 }
            : { y: [0, -14, 0], rotate: [-2.5, 2.5, -2.5], opacity: 1 }
        }
        transition={
          opened
            ? { duration: 0.4 }
            : {
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
              }
        }
      >
        {/* Gift box SVG */}
        <svg width="180" height="200" viewBox="0 0 180 200" className="relative z-20">
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
            style={{ transition: 'y 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease', opacity: opened ? 0 : 1 }} />
          <rect x="83" y={opened ? 0 : 48} width="14" height="28" fill="#d68fa3" style={{ transition: 'y 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease', opacity: opened ? 0 : 1 }} />
          {/* Box body */}
          <rect x="20" y="76" width="140" height="110" rx="4" fill="#4a2c2c" stroke="#e8829f" strokeWidth="1.5" />
          <rect x="83" y="76" width="14" height="110" fill="#d68fa3" />
          <rect x="20" y="126" width="140" height="14" fill="#d68fa3" />
          {/* Glow when opened */}
          {opened && <ellipse cx="90" cy="76" rx="65" ry="25" fill="rgba(255,220,150,0.8)" style={{ filter: 'blur(15px)' }} />}
        </svg>
        
        <p className="mt-6 text-sm tracking-widest relative z-20" style={{ color: 'var(--ink)', fontFamily: 'sans-serif', animation: opened ? 'none' : 'twinkle 2s infinite', fontWeight: 500 }}>
          {opened ? '✨ HADIAH TERBUKA! ✨' : '✨ klik untuk membuka hadiahmu ✨'}
        </p>
      </motion.div>
    </div>
  )
}
