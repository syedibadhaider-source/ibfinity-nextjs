const WORDS_A = ['BRAND', 'IDENTITY', 'DESIGN', 'VISUAL', 'SYSTEMS', 'DIGITAL', 'STRATEGY', 'MOTION']
const WORDS_B = ['CREATIVE', 'STUDIO', 'IBFINITY', 'PREMIUM', 'CRAFT', 'BOLD', 'DISTINCT', 'ICONIC']

interface Props {
  bg?: string
  textColor?: string
  accentColor?: string
}

export default function MarqueeStrip({ bg = '#fff', textColor = 'rgba(14,14,40,0.07)', accentColor = '#8B5CF6' }: Props) {
  const sep = (
    <span className="mx-6 inline-block text-inherit opacity-40">·</span>
  )

  const rowA = [...WORDS_A, ...WORDS_A].map((w, i) => (
    <span key={i} className="inline-flex items-center shrink-0">
      <span
        className="font-black tracking-[-0.04em] uppercase"
        style={{ fontSize:'clamp(52px,7vw,96px)', lineHeight:0.9 }}>
        {w}
      </span>
      {sep}
    </span>
  ))

  const rowB = [...WORDS_B, ...WORDS_B].map((w, i) => (
    <span key={i} className="inline-flex items-center shrink-0">
      <span
        className="font-black tracking-[-0.04em] uppercase"
        style={{ fontSize:'clamp(52px,7vw,96px)', lineHeight:0.9 }}>
        {i % 3 === 1
          ? <span style={{ background:`linear-gradient(135deg,${accentColor},#F97316)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{w}</span>
          : w
        }
      </span>
      {sep}
    </span>
  ))

  return (
    <div className="overflow-hidden py-10 border-y border-black/5 select-none" style={{ background: bg, color: textColor }}>
      {/* Row 1 — left */}
      <div className="flex animate-marquee whitespace-nowrap mb-3" style={{ gap: 0 }}>
        {rowA}
      </div>
      {/* Row 2 — right */}
      <div className="flex animate-marquee-rtl whitespace-nowrap" style={{ gap: 0 }}>
        {rowB}
      </div>
    </div>
  )
}
