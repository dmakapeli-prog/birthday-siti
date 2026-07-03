"use client"
import { useState, useEffect, Fragment } from 'react'
import { motion, Variants } from 'framer-motion'

export default function SectionCountdown({ onNext }: { onNext: () => void }) {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
  const [isToday, setIsToday] = useState(false)

  useEffect(() => {
    function calc() {
      const target = new Date('2026-07-04T00:00:00')
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) {
        setIsToday(true)
        setTime({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000)
      })
    }
    calc()
    const t = setInterval(calc, 1000)
    return () => clearInterval(t)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-xs tracking-[6px] uppercase mb-6" style={{ color: 'var(--rose)', fontFamily: 'Lato, sans-serif' }}>
        ✦ MENGHITUNG HARI ✦
      </motion.div>
      <motion.h1 variants={itemVariants} className="font-cormorant italic font-semibold mb-2" style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', lineHeight: 1.05, color: 'var(--ink)' }}>
        Her Special Day
      </motion.h1>
      <motion.div variants={itemVariants} className="font-cormorant mb-3" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: 'var(--rose)', fontWeight: 300 }}>
        is Coming
      </motion.div>
      <motion.div variants={itemVariants} className="font-dancing mb-8" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', color: 'var(--ink)' }}>
        Sesuatu yang indah sedang menunggu untukmu 🤍
      </motion.div>

      {isToday ? (
        <motion.div variants={itemVariants} className="font-cormorant italic mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--rose)' }}>
          🎉 Hari ini adalah Hari Spesialnya! 🎉
        </motion.div>
      ) : (
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center max-w-[280px] sm:max-w-none mx-auto">
          {[['HARI', pad(time.days)], ['JAM', pad(time.hours)], ['MENIT', pad(time.mins)], ['DETIK', pad(time.secs)]].map(([label, val], i) => (
            <Fragment key={label}>
              <div className="flex flex-col items-center rounded-xl px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto" style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid var(--border)', minWidth: '80px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(232,130,159,0.2)' }}>
                <span className="font-cormorant font-bold" style={{ fontSize: 'clamp(1.8rem,5vw,3.2rem)', lineHeight: 1, color: 'var(--ink)' }}>{val}</span>
                <span className="text-[10px] sm:text-xs tracking-widest mt-1.5 sm:mt-2" style={{ color: 'var(--rose)', fontFamily: 'sans-serif', fontWeight: 700 }}>{label}</span>
              </div>
              {i < 3 && <span className="font-cormorant hidden sm:inline" style={{ fontSize: '2.5rem', color: 'var(--rose)', animation: 'pulseGlow 1.5s infinite' }}>:</span>}
            </Fragment>
          ))}
        </motion.div>
      )}

      <motion.button variants={itemVariants} onClick={onNext} className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase transition-all hover:scale-105 font-light min-h-[44px]" style={{ border: '1px solid var(--rose)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)', fontFamily: 'sans-serif', color: 'var(--ink)' }}>
        ✦ MULAI PERJALANAN ✦
      </motion.button>
    </motion.div>
  )
}
