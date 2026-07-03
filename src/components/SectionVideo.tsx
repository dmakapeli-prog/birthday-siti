"use client"
import { useRef, useState } from 'react'

export default function SectionVideo({ onNext }: { onNext: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function togglePlay() {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause(); setPlaying(false) }
    else { videoRef.current.play(); setPlaying(true) }
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(247,168,192,0.35) 0%, transparent 55%), radial-gradient(circle at 70% 80%, rgba(214,143,163,0.25) 0%, transparent 55%)'
      }}>
      
      {/* Floating decorative elements around card */}
      <div className="absolute top-[12%] left-[8%] sm:left-[16%] text-2xl sm:text-3xl pointer-events-none opacity-80" style={{ animation: 'float 4s ease-in-out infinite' }}>🌸</div>
      <div className="absolute bottom-[16%] right-[6%] sm:right-[14%] text-xl sm:text-2xl pointer-events-none opacity-80" style={{ animation: 'float 5s ease-in-out infinite 1s' }}>🤍</div>
      <div className="absolute top-[22%] right-[10%] sm:right-[18%] text-lg sm:text-xl pointer-events-none opacity-70" style={{ animation: 'twinkle 3s ease-in-out infinite' }}>✨</div>

      <div className="relative z-10 text-xs tracking-[6px] uppercase mb-2 sm:mb-3" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>✦ A SPECIAL MESSAGE ✦</div>
      <h2 className="relative z-10 font-cormorant italic mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.8rem,5vw,3.5rem)', color: 'var(--ink)', textShadow: '0 0 30px rgba(232,130,159,0.3)' }}>A Moment For You</h2>
      <p className="relative z-10 font-dancing mb-4 sm:mb-6" style={{ fontSize: 'clamp(1rem,3vw,1.2rem)', color: 'var(--rose)' }}>✦ a special video message ✦</p>
      
      {/* Gradient border wrapper for scrapbook card feel */}
      <div className="relative z-10 max-w-2xl w-full p-[2px] rounded-2xl transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, var(--rose) 0%, var(--rose-gold) 50%, var(--rose-light) 100%)',
          boxShadow: '0 25px 70px rgba(232,130,159,0.35)'
        }}>
        <div className="relative w-full rounded-[14px] overflow-hidden flex items-center justify-center bg-[#ffe4ec]" style={{ maxHeight: '65vh' }}>
          
          <video
            ref={videoRef}
            className="w-full h-auto object-contain relative z-0"
            style={{ maxHeight: '65vh' }}
            onEnded={() => setPlaying(false)}
            muted
            playsInline
            preload="metadata"
          >
            <source src="/video/video-ulang-tahun.mp4" type="video/mp4" />
          </video>
          
          {/* Subtle dark vignette on 4 sides for cinematic depth */}
          <div className="absolute inset-0 pointer-events-none z-10"
            style={{ background: 'radial-gradient(circle at center, transparent 55%, rgba(107,64,80,0.25) 100%)' }} />
          
          {/* Play button overlay with breathing ring & pulseGlow */}
          {!playing && (
            <div onClick={togglePlay} className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 group"
              style={{ background: 'rgba(255,245,247,0.35)', backdropFilter: 'blur(3px)' }}>
              
              <div className="relative flex items-center justify-center">
                {/* Outer breathing rings */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[var(--rose)] transition-all duration-300 group-hover:scale-125 group-hover:border-white"
                  style={{ animation: 'breathingRing 3s infinite ease-in-out' }} />
                <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[var(--rose-light)]"
                  style={{ animation: 'breathingRing 3s infinite ease-in-out 1.5s' }} />
                
                {/* Premium solid play button */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, var(--rose) 0%, var(--rose-gold) 100%)',
                    boxShadow: '0 0 35px rgba(232,130,159,0.8), 0 8px 20px rgba(107,64,80,0.3)',
                    animation: 'pulseGlow 2.5s infinite ease-in-out'
                  }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 transition-transform duration-300 group-hover:scale-110">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="relative z-10 mt-3 text-xs sm:text-sm" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
        * Taruh file video di folder public/video/video-ulang-tahun.mp4 😊
      </p>
      
      <button onClick={onNext} className="relative z-10 mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-[3px] uppercase transition-all duration-300 hover:scale-105 hover:bg-[var(--rose)] hover:text-white hover:border-[var(--rose)] hover:shadow-lg min-h-[44px]" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.6)', fontFamily: 'sans-serif' }}>
        BIRTHDAY WISHES →
      </button>
    </div>
  )
}
