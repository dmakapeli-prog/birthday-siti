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
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="text-xs tracking-[6px] uppercase mb-3" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>✦ A SPECIAL MESSAGE ✦</div>
      <h2 className="font-cormorant italic mb-2" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--ink)' }}>A Moment For You</h2>
      <p className="font-dancing mb-8" style={{ fontSize: '1.2rem', color: 'var(--rose)' }}>✦ a special video message ✦</p>
      
      <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(232,130,159,0.25)', border: '1px solid var(--border)' }}>
        <video
          ref={videoRef}
          className="w-full"
          style={{ maxHeight: '55vh', objectFit: 'cover', background: '#ffe4ec' }}
          onEnded={() => setPlaying(false)}
        >
          <source src="/video/video-ulang-tahun.mp4" type="video/mp4" />
        </video>
        
        {/* Play button overlay */}
        {!playing && (
          <div onClick={togglePlay} className="absolute inset-0 flex items-center justify-center cursor-pointer"
            style={{ background: 'rgba(255,245,247,0.45)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ background: 'var(--rose)', boxShadow: '0 0 30px rgba(232,130,159,0.5)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm" style={{ color: 'var(--rose)', fontFamily: 'sans-serif' }}>
        * Taruh file video di folder public/video/video-ulang-tahun.mp4 😊
      </p>
      
      <button onClick={onNext} className="mt-6 px-8 py-3 rounded-full text-sm tracking-[3px] uppercase transition-all hover:scale-105" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
        BIRTHDAY WISHES →
      </button>
    </div>
  )
}
