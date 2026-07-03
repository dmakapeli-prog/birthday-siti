"use client"
import { motion, Variants } from 'framer-motion'

export default function SectionWishes({ onNext }: { onNext: () => void }) {
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
          <h2 className="font-cormorant italic" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 600, color: 'var(--ink)' }}>Birthday Wishes</h2>
          <p style={{ color: 'var(--rose)', fontFamily: 'sans-serif', fontSize: '0.85rem', letterSpacing: '2px', marginTop: '8px', fontWeight: 600 }}>Happy Birthday, my love 🤍</p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center leading-loose" style={{ fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', color: 'var(--ink)', fontFamily: 'Lato, sans-serif', fontWeight: 400, lineHeight: 1.9 }}>
          <p>I wish you happiness, good health, success, and endless blessings in this new chapter of your life. May all your dreams come true, your days be filled with joy, and your heart always find peace.</p>
          <br/>
          <p>Thank you for being such a wonderful part of my life. I hope this year brings you everything you&apos;ve been wishing for. Stay happy, stay healthy, and keep shining.</p>
          <br/>
          <p>I love you always. 🤍</p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-4 sm:mt-6">
          <span style={{ fontSize: '2rem', animation: 'heartbeat 1.5s infinite', display: 'inline-block' }}>🤍</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center mt-4 sm:mt-6">
          <button onClick={onNext} className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-[3px] uppercase transition-all hover:scale-105 min-h-[44px]" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
            ONE MORE THING →
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
