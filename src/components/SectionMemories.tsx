"use client"
import { useState, useRef } from 'react'
import Image from 'next/image'

const memories = [
  { src: '/images/memories/momen-1.png', rotate: '-5deg', label: 'momen terbaik 💜' },
  { src: '/images/memories/momen-2.jpg', rotate: '3deg', label: 'selalu bersamamu' },
  { src: '/images/memories/momen-3.jpg', rotate: '-4deg', label: 'kenangan indah 🌸' },
  { src: '/images/memories/momen-4.jpg', rotate: '4deg', label: 'selalu kamu 💕' },
  { src: '/images/memories/momen-5.jpg', rotate: '-6deg', label: 'foto kita 📷' },
  { src: '/images/memories/momen-6.jpg', rotate: '5deg', label: 'forever 💍' },
  { src: '/images/memories/momen-7.jpeg', rotate: '-3deg', label: 'tersenyum bersamamu 😊' },
  { src: '/images/memories/momen-8.jpeg', rotate: '4deg', label: 'hari yang tak terlupakan ✨' },
  { src: '/images/memories/momen-9.jpeg', rotate: '-5deg', label: 'bahagia itu sederhana 💖' },
  { src: '/images/memories/momen-10.jpeg', rotate: '3deg', label: 'kamu dan aku 🤍' },
]

function PolaroidCard({ m }: { m: { src: string; rotate: string; label: string } }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="flex-none w-[190px] sm:w-[235px] snap-center cursor-pointer transition-all duration-300"
      style={{
        transform: hovered ? 'scale(1.08) rotate(0deg)' : `rotate(${m.rotate})`,
        zIndex: hovered ? 30 : 1
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="p-3 pb-8 rounded-sm transition-all duration-300"
        style={{
          background: 'white',
          boxShadow: hovered ? '0 20px 40px rgba(232,130,159,0.45)' : '0 10px 30px rgba(232,130,159,0.25)'
        }}
      >
        <Image
          src={m.src}
          alt={m.label}
          width={235}
          height={235}
          loading="lazy"
          className="w-full aspect-square object-cover block rounded-sm"
        />
        <p className="text-center text-[#666] text-xs sm:text-sm mt-3 font-dancing leading-tight">
          {m.label}
        </p>
      </div>
    </div>
  )
}

export default function SectionMemories({ onNext }: { onNext: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(offset: number) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-4 w-full max-w-6xl mx-auto overflow-hidden">
      <h2 className="font-cormorant italic mb-1" style={{ fontSize: 'clamp(2.5rem,6vw,4.2rem)', color: 'var(--ink)', textShadow: '0 0 30px rgba(232,130,159,0.3)' }}>
        Our Memories
      </h2>
      <p className="text-xs tracking-[5px] uppercase mb-4 sm:mb-6" style={{ color: 'var(--rose)', fontFamily: 'sans-serif', fontWeight: 600 }}>✦ every moment captured in love ✦</p>
      
      {/* Carousel Container */}
      <div className="relative w-full flex items-center justify-center my-2">
        <button
          onClick={() => scroll(-280)}
          className="absolute left-1 z-20 w-10 h-10 rounded-full hidden sm:flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--ink)', backdropFilter: 'blur(8px)' }}
          aria-label="Previous photos"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto py-6 px-4 sm:px-12 w-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {memories.map((m, i) => (
            <PolaroidCard key={i} m={m} />
          ))}
        </div>

        <button
          onClick={() => scroll(280)}
          className="absolute right-1 z-20 w-10 h-10 rounded-full hidden sm:flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--ink)', backdropFilter: 'blur(8px)' }}
          aria-label="Next photos"
        >
          ›
        </button>
      </div>

      <p className="text-xs text-center mt-1 sm:mt-2 mb-4" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
        * Geser kanan/kiri untuk melihat 10 momen kita 💕
      </p>

      <button onClick={onNext} className="px-8 py-3 rounded-full text-sm tracking-[3px] uppercase transition-all hover:scale-105" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
        → NEXT
      </button>
    </div>
  )
}
