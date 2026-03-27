'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 1200, suffix: '+',  label: 'Clients\nWorldwide',    sub: 'Fiverr & Upwork verified' },
  { target: 2570, suffix: '+',  label: 'Deliverables\nShipped', sub: 'Identity, content & web' },
  { target: 11,   suffix: ' yrs', label: 'Years of\nExecution', sub: 'Since 2013' },
  { target: 5,    suffix: '★',  label: 'Average\nRating',       sub: '100+ verified reviews' },
]

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const tick = (ts: number) => {
      if (!start) start = ts
      const prog = Math.min((ts - start) / duration, 1)
      // ease out cubic
      const ease = 1 - Math.pow(1 - prog, 3)
      setVal(Math.floor(ease * target))
      if (prog < 1) requestAnimationFrame(tick)
      else setVal(target)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return val
}

function StatItem({ target, suffix, label, sub, active, index }: {
  target: number; suffix: string; label: string; sub: string; active: boolean; index: number
}) {
  const val = useCountUp(target, active)
  return (
    <div className={`py-2.5 lg:py-5 group reveal reveal-delay-${index + 1} text-center lg:text-left ${index < stats.length - 1 ? 'lg:border-r border-white/6' : ''} ${index < 2 ? 'sm:border-b lg:border-b-0 border-white/6 border-b' : ''} px-4 lg:px-12 first:lg:pl-0 last:lg:pr-0`}>
      {/* Giant number */}
      <div className="text-[clamp(52px,6.5vw,92px)] font-black leading-none tracking-tighter mb-5 tabular-nums"
        style={{
          background: 'linear-gradient(135deg,#F0EEFF 0%,rgba(240,238,255,0.6) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        {val}{suffix}
      </div>
      <div className="text-white/40 text-[12px] font-semibold uppercase tracking-widest leading-snug whitespace-pre-line mb-2">
        {label}
      </div>
      <div className="text-white/20 text-[11px]">{sub}</div>
    </div>
  )
}

export default function Stats() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-dark-2 overflow-hidden noise">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] opacity-[0.08]"
          style={{ background: 'radial-gradient(ellipse,#8B5CF6,transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16 py-5 lg:py-7">
        <div className="flex items-center gap-4 mb-4 lg:mb-6 reveal">
          <span className="label label-dim tracking-widest">By The Numbers</span>
          <div className="h-px w-16 bg-white/8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} active={active} index={i} />
          ))}
        </div>

        <div className="mt-6 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(139,92,246,0.2),transparent)' }} />
      </div>
    </section>
  )
}
