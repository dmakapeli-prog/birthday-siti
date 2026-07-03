"use client"
import { useState, useRef } from 'react'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioCtx = useRef<AudioContext | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const noteIdx = useRef(0)
  const notes = [261.63, 293.66, 329.63, 349.23, 392, 349.23, 329.63, 261.63,
                  293.66, 261.63, 246.94, 261.63, 293.66, 261.63]

  function playNote() {
    if (!audioCtx.current) return
    const ctx = audioCtx.current
    const freq = notes[noteIdx.current % notes.length]
    noteIdx.current++
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.001, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.04)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6)
    gain.connect(ctx.destination)
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq
    osc.connect(gain)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.65)
  }

  function toggleMusic() {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    }
    if (playing) {
      if (timerRef.current) clearInterval(timerRef.current)
      setPlaying(false)
    } else {
      if (audioCtx.current.state === 'suspended') {
        audioCtx.current.resume()
      }
      playNote()
      timerRef.current = setInterval(playNote, 650)
      setPlaying(true)
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full border text-white text-sm font-light tracking-widest uppercase transition-all"
      style={{ background: 'rgba(30,20,25,0.85)', borderColor: 'var(--border)', backdropFilter: 'blur(10px)' }}
    >
      <span style={{ 
        display: 'inline-block', 
        animation: playing ? 'spin 4s linear infinite' : 'none',
        fontSize: '1rem'
      }}>♪</span>
      <span style={{ color: 'var(--rose-light)' }}>{playing ? 'Music On' : 'Music Off'}</span>
    </button>
  )
}
