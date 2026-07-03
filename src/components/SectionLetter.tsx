"use client"
import { motion, Variants } from 'framer-motion'

export default function SectionLetter({ onNext }: { onNext: () => void }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
        style={{ background: 'var(--card)', border: '1px solid var(--border)', backdropFilter: 'blur(16px)', boxShadow: '0 25px 60px rgba(232,130,159,0.2)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--rose), transparent)' }} />
        
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="font-cormorant italic" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 600, color: 'var(--ink)' }}>Happy Birthday</h2>
          <p className="text-xs tracking-[4px] uppercase mt-2" style={{ color: 'var(--rose)', fontFamily: 'sans-serif', fontWeight: 600 }}>HAPPY BIRTHDAY SAYANGKUUU 🤍</p>
          <p className="font-dancing mt-3" style={{ fontSize: '1.3rem', color: 'var(--rose)' }}>4 Juli 2005</p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-left leading-relaxed" style={{ fontSize: 'clamp(0.95rem,1.8vw,1.15rem)', color: 'var(--ink)', fontFamily: 'Lato, sans-serif', fontWeight: 400, lineHeight: 1.8 }}>
          <p className="mb-4">Selamat ulang tahun yaa sayangg! Hari ini hari yang spesial banget karena hari ini adalah hari lahir orang yang paling berarti di hidupku.</p>
          <p className="mb-4">Terima kasih sudah selalu ada, sudah bikin hari-hariku lebih bahagia, dan sudah menjadi alasan aku tersenyum setiap hari. Aku bersyukur banget bisa kenal dan punya kamu sampai sekarang.</p>
          <p>Di umur yang baru ini, aku cuma mau doain yang terbaik buat kamu. Semoga kamu selalu sehat, bahagia, dan dikelilingi hal-hal yang kamu cintai. 🤍</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center mt-6 sm:mt-8">
          <button onClick={onNext} className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-[3px] uppercase transition-all hover:scale-105 min-h-[44px]" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
            → NEXT
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
