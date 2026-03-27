'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/* ── Animated count-up ── */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
      else setVal(target)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return val
}

/* ── Brand Identity card ── */
function CardBrand() {
  return (
    <div className="bento-card bento-card-glow h-full p-0 overflow-hidden">
      {/* Visual top */}
      <div className="relative h-48 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0D0530,#1B0A5E,#0D0530)' }}>
        {/* rotating conic gradient ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full conic-spin absolute opacity-30"
            style={{
              background: 'conic-gradient(from 0deg, #8B5CF6, #F97316, #06B6D4, #8B5CF6)',
              filter: 'blur(24px)',
            }} />
        </div>
        {/* mesh blobs */}
        <div className="absolute w-32 h-32 rounded-full"
          style={{ background:'rgba(139,92,246,0.55)', filter:'blur(40px)', top:'-20%', left:'10%' }} />
        <div className="absolute w-24 h-24 rounded-full"
          style={{ background:'rgba(249,115,22,0.4)', filter:'blur(32px)', bottom:'-5%', right:'15%' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display italic font-black text-7xl relative z-10"
            style={{
              background: 'linear-gradient(135deg,#C4B5FD,#F97316)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 24px rgba(139,92,246,0.7))',
            }}>
            ib.
          </span>
        </div>
        {/* grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="label label-p mb-2 tracking-widest">01 — Brand Identity</div>
        <h3 className="text-[20px] font-black text-dark-3 tracking-tight leading-tight mb-2">
          Visual systems that<br />outlast trends.
        </h3>
        <p className="text-dark-3/40 text-[13px] leading-relaxed">
          Logomarks, colour theory, type pairing, and brand guidelines built for longevity.
        </p>
        <Link href="/services/branding"
          className="inline-flex items-center gap-1.5 mt-4 text-[12px] font-semibold text-primary hover:gap-3 transition-all duration-200">
          Explore service
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

/* ── Projects card ── */
function CardProjects({ active }: { active: boolean }) {
  const count = useCountUp(50, active)
  return (
    <div className="bento-card bento-card-glow h-full flex flex-col justify-between p-6">
      <div>
        <div className="label label-muted mb-3 tracking-widest">Projects Delivered</div>
        <div className="text-[72px] font-black leading-none tracking-tighter tabular-nums"
          style={{
            background: 'linear-gradient(135deg,#8B5CF6,#F97316)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
          {count}+
        </div>
      </div>
      <div className="flex gap-1.5 mt-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex-1 h-1.5 rounded-full"
            style={{
              background: i < 7 ? 'linear-gradient(90deg,#8B5CF6,#A78BFA)' : 'rgba(0,0,0,0.06)',
              opacity: i < 7 ? (i + 4) / 10 : 1,
            }} />
        ))}
      </div>
    </div>
  )
}

/* ── Speed card ── */
function CardSpeed() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect() } }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="bento-card bento-card-glow h-full p-6 flex flex-col justify-between">
      <div>
        <div className="label label-muted mb-2 tracking-widest">Avg. Turnaround</div>
        <div className="text-[52px] font-black leading-none tracking-tighter text-dark-3">14<span className="text-[28px] text-dark-3/30 ml-1">days</span></div>
      </div>
      <div className="space-y-2.5 mt-4">
        {[['Discovery', '2d'],['Design', '8d'],['Refinement', '3d'],['Delivery', '1d']].map(([label, time], i) => (
          <div key={label} className="flex items-center justify-between gap-2">
            <span className="text-dark-3/40 text-[11px] w-20 shrink-0">{label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-black/5 overflow-hidden">
              <div className="h-full rounded-full"
                style={{
                  width: triggered ? ['14%','57%','21%','8%'][i] : '0%',
                  background: `linear-gradient(90deg,#8B5CF6,#A78BFA)`,
                  transition: `width 1s ${i * 0.15}s cubic-bezier(.23,1,.32,1)`,
                }} />
            </div>
            <span className="text-dark-3/30 text-[10px] font-mono w-5 shrink-0">{time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Rebranding card ── */
function CardRebrand() {
  return (
    <div className="bento-card bento-card-glow h-full p-0 overflow-hidden group">
      {/* Split visual */}
      <div className="relative h-36 overflow-hidden">
        {/* Before half */}
        <div className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center"
          style={{ background: '#F0EDF8' }}>
          <span className="text-3xl font-black text-dark-3/15 tracking-tighter">OLD</span>
        </div>
        {/* After half */}
        <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#1B0A5E,#0D0530)' }}>
          <span className="font-display italic text-3xl font-black"
            style={{
              background: 'linear-gradient(135deg,#C4B5FD,#F97316)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
            NEW
          </span>
        </div>
        {/* Divider */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-px w-0.5 bg-white z-10" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center z-20">
          <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="label label-p mb-1.5 tracking-widest">02 — Rebranding</div>
        <h3 className="text-[17px] font-black text-dark-3 tracking-tight">Transform what exists.</h3>
        <p className="text-dark-3/40 text-[12px] mt-1.5 leading-relaxed">Full audit → strategy → identity rebuild.</p>
      </div>
    </div>
  )
}

/* ── Digital card ── */
function CardDigital() {
  return (
    <div className="bento-card bento-card-glow h-full p-0 overflow-hidden">
      <div className="relative h-36 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#2D1500,#8C3900,#2D1500)' }}>
        {/* Animated blob */}
        <div className="absolute w-32 h-32 rounded-full blob-1"
          style={{ background:'rgba(249,115,22,0.5)', filter:'blur(40px)', top:'-20%', right:'10%' }} />
        {/* Template grid mock */}
        <div className="absolute inset-0 p-4 grid grid-cols-3 gap-1.5 opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="rounded-md bg-white/10 flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-white/20" />
            </div>
          ))}
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase">200+ Templates</span>
        </div>
      </div>
      <div className="p-5">
        <div className="label label-p mb-1.5 tracking-widest">04 — Digital Products</div>
        <h3 className="text-[17px] font-black text-dark-3 tracking-tight">Etsy-ready templates.</h3>
        <p className="text-dark-3/40 text-[12px] mt-1.5 leading-relaxed">Canva planners and graphics — #1 in category.</p>
      </div>
    </div>
  )
}

/* ── Rating card ── */
function CardRating() {
  return (
    <div className="bento-card bento-card-glow h-full p-6 flex flex-col items-center justify-center text-center"
      style={{ background: 'linear-gradient(135deg,#0D0530,#1B0A5E)' }}>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_,i) => (
          <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="text-white font-black text-4xl tracking-tight">5.0</div>
      <div className="text-white/30 text-[11px] mt-1.5 tracking-wider uppercase font-semibold">100+ verified</div>
    </div>
  )
}

/* ── Section ── */
export default function BentoFeatures() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#F7F6FC] py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <span className="label label-p tracking-widest">What We Do</span>
            <h2 className="mt-4 text-[clamp(40px,4.5vw,60px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
              Every service built for{' '}
              <span className="font-display italic"
                style={{ background:'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                impact.
              </span>
            </h2>
          </div>
          <Link href="/services"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-dark-3/35 hover:text-primary transition-colors glow-link pb-0.5">
            All services →
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4 reveal">
          {/* Row 1 */}
          <div className="md:col-span-5 md:row-span-2"><CardBrand /></div>
          <div className="md:col-span-4"><CardProjects active={active} /></div>
          <div className="md:col-span-3"><CardRating /></div>
          {/* Row 2 */}
          <div className="md:col-span-4"><CardSpeed /></div>
          <div className="md:col-span-3 md:row-span-1"><CardRebrand /></div>
          {/* Row 3 — span full */}
          <div className="md:col-span-7"><CardDigital /></div>
        </div>
      </div>
    </section>
  )
}
