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
    <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
      <div className="text-xs tracking-[6px] uppercase mb-2 sm:mb-3" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>✦ A SPECIAL MESSAGE ✦</div>
      <h2 className="font-cormorant italic mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.8rem,5vw,3.5rem)', color: 'var(--ink)' }}>A Moment For You</h2>
      <p className="font-dancing mb-4 sm:mb-6" style={{ fontSize: 'clamp(1rem,3vw,1.2rem)', color: 'var(--rose)' }}>✦ a special video message ✦</p>
      
      <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden flex items-center justify-center" style={{ boxShadow: '0 20px 60px rgba(232,130,159,0.25)', border: '1px solid var(--border)', background: '#ffe4ec', maxHeight: '65vh' }}>
        <video
          ref={videoRef}
          className="w-full h-auto object-contain"
          style={{ maxHeight: '65vh' }}
          onEnded={() => setPlaying(false)}
          muted
          playsInline
          preload="metadata"
        >
          <source src="/video/video-ulang-tahun.mp4" type="video/mp4" />
        </video>
        
        {/* Play button overlay */}
        {!playing && (
          <div onClick={togglePlay} className="absolute inset-0 flex items-center justify-center cursor-pointer"
            style={{ background: 'rgba(255,245,247,0.45)' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ background: 'var(--rose)', boxShadow: '0 0 30px rgba(232,130,159,0.5)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <p className="mt-3 text-xs sm:text-sm" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
        * Taruh file video di folder public/video/video-ulang-tahun.mp4 😊
      </p>
      
      <button onClick={onNext} className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-[3px] uppercase transition-all hover:scale-105 min-h-[44px]" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
        BIRTHDAY WISHES →
      </button>
    </div>
  )
}
