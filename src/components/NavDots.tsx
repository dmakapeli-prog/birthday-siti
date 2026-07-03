"use client"

interface Props {
  current: number
  total: number
  onDotClick: (i: number) => void
}

export default function NavDots({ current, total, onDotClick }: Props) {
  return (
    <div className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 sm:gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="rounded-full border transition-all duration-300 min-h-[20px] min-w-[20px] flex items-center justify-center"
          aria-label={`Go to section ${i + 1}`}
        >
          <span
            className="rounded-full block transition-all duration-300"
            style={{
              width: i === current ? '10px' : '7px',
              height: i === current ? '10px' : '7px',
              background: i === current ? 'var(--rose)' : 'rgba(232,130,159,0.3)',
              boxShadow: i === current ? '0 0 15px var(--rose)' : 'none'
            }}
          />
        </button>
      ))}
    </div>
  )
}
