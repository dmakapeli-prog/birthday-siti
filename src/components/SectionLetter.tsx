"use client"

export default function SectionLetter({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="w-full max-w-2xl rounded-2xl p-8 md:p-12 relative overflow-hidden"
        style={{ background: 'var(--card)', border: '1px solid var(--border)', backdropFilter: 'blur(16px)', boxShadow: '0 25px 60px rgba(232,130,159,0.2)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--rose), transparent)' }} />
        
        <div className="text-center mb-6">
          <h2 className="font-cormorant italic" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 600, color: 'var(--ink)' }}>Happy Birthday</h2>
          <p className="text-xs tracking-[4px] uppercase mt-2" style={{ color: 'var(--rose)', fontFamily: 'sans-serif', fontWeight: 600 }}>HAPPY BIRTHDAY SAYANGKUUU 🤍</p>
          <p className="font-dancing mt-3" style={{ fontSize: '1.3rem', color: 'var(--rose)' }}>4 Juli 2005 — hari paling indah dalam hidupku</p>
        </div>

        <div className="text-left leading-relaxed" style={{ fontSize: 'clamp(1rem,1.8vw,1.15rem)', color: 'var(--ink)', fontFamily: 'Lato, sans-serif', fontWeight: 400, lineHeight: 1.9 }}>
          <p className="mb-4">Selamat ulang tahun yaa cintaa! Hari ini hari yang spesial banget karena hari ini adalah hari lahir orang yang paling berarti di hidupku.</p>
          <p className="mb-4">Terima kasih sudah selalu ada, sudah bikin hari-hariku lebih bahagia, dan sudah menjadi alasan aku tersenyum setiap hari. Aku bersyukur banget bisa kenal dan punya sayang sampai sekarang.</p>
          <p>Di umur yang baru ini, aku cuma mau doain yang terbaik buat kamu. Semoga kamu selalu sehat, bahagia, dan dikelilingi hal-hal yang kamu cintai. 🤍</p>
        </div>

        <div className="flex justify-center mt-8">
          <button onClick={onNext} className="px-8 py-3 rounded-full text-sm tracking-[3px] uppercase transition-all hover:scale-105" style={{ border: '1px solid var(--rose)', color: 'var(--ink)', background: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
            → NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
