"use client"

interface Props {
  current: number
  total: number
  onDotClick: (i: number) => void
}

export default function NavDots({ current, total, onDotClick }: Props) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="rounded-full border transition-all duration-300"
          style={{
            width: i === current ? '12px' : '9px',
            height: i === current ? '12px' : '9px',
            background: i === current ? 'var(--rose)' : 'rgba(255,255,255,0.2)',
            borderColor: i === current ? 'var(--rose)' : 'rgba(196,160,160,0.3)',
            boxShadow: i === current ? '0 0 15px var(--rose)' : 'none'
          }}
        />
      ))}
    </div>
  )
}
