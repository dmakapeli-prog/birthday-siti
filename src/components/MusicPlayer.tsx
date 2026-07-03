"use client"
import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/audio/lagu-ultah.mp3')
    audio.loop = true
    audioRef.current = audio

    return () => {
      audio.pause()
    }
  }, [])

  function toggleMusic() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => {
        setPlaying(true)
      }).catch((e) => {
        console.error("Gagal memutar audio, pastikan file public/audio/lagu-ultah.mp3 ada:", e)
      })
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full border text-sm font-light tracking-widest uppercase transition-all shadow-sm"
      style={{ background: 'var(--card)', borderColor: 'var(--border)', backdropFilter: 'blur(10px)', color: 'var(--ink)', boxShadow: '0 5px 20px rgba(232,130,159,0.15)' }}
    >
      <span style={{ 
        display: 'inline-block', 
        animation: playing ? 'spin 4s linear infinite' : 'none',
        fontSize: '1rem'
      }}>♪</span>
      <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{playing ? 'Music On' : 'Music Off'}</span>
    </button>
  )
}
