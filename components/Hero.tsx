'use client'

import { useEffect, useRef, useState } from 'react'
import MagneticButton from './MagneticButton'

const WORDS = ['Agents', 'Developers', 'Agencies', 'Leaders']
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*'

function useScramble(text: string, active: boolean) {
  const [display, setDisplay] = useState('')
  useEffect(() => {
    if (!active) { setDisplay(''); return }
    let frame = 0
    const total = text.length * 3
    const id = setInterval(() => {
      frame++
      setDisplay(
        text.split('').map((ch, i) => {
          if (ch === ' ') return ' '
          if (frame > i * 3) return ch
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        }).join('')
      )
      if (frame >= total) clearInterval(id)
    }, 28)
    return () => clearInterval(id)
  }, [active, text])
  return display
}

export default function Hero() {
  const [wordIdx, setWordIdx]     = useState(0)
  const [wordVisible, setVisible] = useState(true)
  const [loaded, setLoaded]       = useState(false)
  const [scramble, setScramble]   = useState(false)
  const cardRef  = useRef<HTMLDivElement>(null)
  const heroRef  = useRef<HTMLDivElement>(null)

  // Mount stagger
  useEffect(() => {
    const t = setTimeout(() => { setLoaded(true); setScramble(true) }, 200)
    return () => clearTimeout(t)
  }, [])

  // Word rotation
  useEffect(() => {
    let id: ReturnType<typeof setInterval>
    const init = setTimeout(() => {
      id = setInterval(() => {
        setVisible(false)
        setTimeout(() => { setWordIdx(i => (i + 1) % WORDS.length); setVisible(true) }, 350)
      }, 3000)
    }, 2200)
    return () => { clearTimeout(init); clearInterval(id) }
  }, [])

  // Mouse parallax
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = hero.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      if (cardRef.current) {
        const rx = (y - 0.5) * -12
        const ry = (x - 0.5) * 12
        cardRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(16px)`
      }
      hero.querySelectorAll<HTMLElement>('.parallax-orb').forEach((el, i) => {
        const d = (i + 1) * 0.018
        el.style.transform = `translate(${(x - 0.5) * d * 110}px, ${(y - 0.5) * d * 70}px)`
      })
    }
    const onLeave = () => {
      if (cardRef.current) cardRef.current.style.transform = ''
    }
    hero.addEventListener('mousemove', onMove as any, { passive: true })
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove as any)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const line1 = ['We', 'Brand']
  const line3 = ['Close', 'Deals.']
  const scrambled = useScramble('We Brand', loaded)

  return (
    <section ref={heroRef} className="relative min-h-screen bg-white overflow-hidden flex flex-col">

      {/* ── Animated gradient mesh ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="mesh-blob blob-1 parallax-orb"
          style={{ width:640, height:640, background:'rgba(139,92,246,0.13)', top:'-15%', left:'-8%', transition:'transform .8s ease-out' }} />
        <div className="mesh-blob blob-2 parallax-orb"
          style={{ width:500, height:500, background:'rgba(249,115,22,0.11)', bottom:'-10%', right:'5%', transition:'transform .8s ease-out' }} />
        <div className="mesh-blob blob-3 parallax-orb"
          style={{ width:380, height:380, background:'rgba(6,182,212,0.09)', top:'30%', left:'35%', transition:'transform .8s ease-out' }} />
        <div className="mesh-blob blob-4"
          style={{ width:300, height:300, background:'rgba(244,63,94,0.07)', top:'10%', right:'25%' }} />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(14,14,40,0.09) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />
      </div>

      <div className="h-24 shrink-0" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── LEFT ── */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-10">

              {/* Eyebrow */}
              <div className={`flex items-center gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="label label-muted">Real Estate Branding Studio</span>
                </span>
                <div className="h-px flex-1 max-w-[48px] bg-black/8" />
              </div>

              {/* Headline */}
              <div className="space-y-0 leading-none">
                {/* Line 1 */}
                <div className="overflow-hidden">
                  <div className={`text-[clamp(36px,8.5vw,112px)] font-black leading-[0.92] tracking-[-0.045em] text-dark-3 transition-all duration-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    style={{ transitionDelay: '80ms' }}>
                    We Brand
                  </div>
                </div>

                {/* Line 2 — rotating serif italic */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-0">
                  <span
                    className={`font-display italic text-[clamp(32px,8.5vw,108px)] leading-[1.0] tracking-[-0.025em] transition-all duration-500 ease-in-out ${wordVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                    style={{
                      background: 'linear-gradient(125deg,#8B5CF6 0%,#A78BFA 35%,#F97316 80%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                    {WORDS[wordIdx]}
                  </span>
                  <span className={`text-[clamp(32px,8.5vw,108px)] font-black leading-[1.0] tracking-[-0.045em] text-dark-3/18 transition-all duration-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    style={{ transitionDelay: '280ms' }}>
                    That
                  </span>
                </div>

                {/* Line 3 */}
                <div className="overflow-hidden">
                  <div className={`text-[clamp(36px,8.5vw,112px)] font-black leading-[0.92] tracking-[-0.045em] transition-all duration-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    style={{ transitionDelay: '180ms' }}>
                    <span className="text-dark-3">Close Deals</span>
                    <span style={{
                      background: 'linear-gradient(135deg,#8B5CF6,#F97316)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>.</span>
                  </div>
                </div>
              </div>

              {/* Sub */}
              <p className={`text-[17px] leading-[1.7] max-w-[440px] text-dark-3/45 font-light transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '480ms' }}>
                Brand identity, marketing materials, and digital presence built exclusively for real estate professionals who want to dominate their market.
              </p>

              {/* CTAs */}
              <div className={`flex flex-wrap items-center gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '580ms' }}>
                <MagneticButton href="/contact" className="btn-primary px-8 py-4 text-[14px]">
                  <span className="flex items-center gap-2">
                    Start a Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </MagneticButton>
                <MagneticButton href="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 text-[14px] font-semibold rounded-lg border border-dark-3/10 text-dark-3/55 hover:border-dark-3/22 hover:text-dark-3 transition-all duration-200">
                  See Our Work
                </MagneticButton>
              </div>

              {/* Stats */}
              <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-black/5 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '680ms' }}>
                {[['2,570+','Deliverables'],['1,200+','Clients'],['11 yrs','Experience']].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-[22px] font-black text-dark-3 tracking-tight leading-none">{n}</div>
                    <div className="label label-muted mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT — Brand Canvas ── */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px]">

                {/* Glow rings behind card */}
                <div className="absolute inset-0 -m-8 rounded-full opacity-20 blur-3xl"
                  style={{ background: 'radial-gradient(circle,#8B5CF6 0%,#F97316 60%,transparent 80%)' }} />

                {/* Main card */}
                <div ref={cardRef} className="relative rounded-[24px] overflow-hidden float-a"
                  style={{
                    background: '#09091A',
                    border: '1px solid rgba(139,92,246,0.25)',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
                    transition: 'transform .1s ease',
                  }}>

                  {/* Card chrome bar */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="flex gap-1.5">
                      {['rgba(255,90,90,0.7)','rgba(255,190,60,0.7)','rgba(60,210,90,0.7)'].map(c => (
                        <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                      ))}
                    </div>
                    <span className="text-white/25 text-[10px] font-mono tracking-widest">BRAND.SYSTEM</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400/70 text-[9px] font-semibold tracking-wider">LIVE</span>
                    </div>
                  </div>

                  {/* Canvas — animated gradient mesh inside */}
                  <div className="relative h-56 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg,#0D0530 0%,#1B0A5E 50%,#0D0530 100%)' }}>
                    {/* Inner mesh blobs */}
                    <div className="absolute w-48 h-48 rounded-full blob-1"
                      style={{ background:'rgba(139,92,246,0.5)', filter:'blur(50px)', top:'-20%', left:'-10%' }} />
                    <div className="absolute w-36 h-36 rounded-full blob-2"
                      style={{ background:'rgba(249,115,22,0.4)', filter:'blur(40px)', bottom:'-10%', right:'0%' }} />
                    <div className="absolute w-28 h-28 rounded-full blob-3"
                      style={{ background:'rgba(6,182,212,0.3)', filter:'blur(35px)', top:'20%', right:'20%' }} />
                    {/* Wordmark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display italic font-black relative z-10 select-none"
                        style={{
                          fontSize: '88px', lineHeight: 1, letterSpacing: '-0.02em',
                          background: 'linear-gradient(135deg,#C4B5FD,#F97316)',
                          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                          textShadow: 'none',
                          filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.6))',
                        }}>
                        ib.
                      </span>
                    </div>
                  </div>

                  {/* Palette row */}
                  <div className="px-5 pt-5 pb-2 flex gap-2">
                    {['#8B5CF6','#F97316','#A78BFA','#06B6D4','rgba(240,238,255,0.08)'].map((c, i) => (
                      <div key={i} className="flex-1 h-7 rounded-lg ring-1 ring-inset ring-white/5 transition-transform duration-200 hover:scale-110"
                        style={{ background: c }} />
                    ))}
                  </div>

                  {/* Type row */}
                  <div className="px-5 pt-3 pb-4 space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-black text-xl tracking-tight">Ibfinity</span>
                      <span className="text-white/25 text-[9px] font-mono tracking-widest">WORDMARK</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { label: 'Aa', sub: 'Inter' },
                        { label: 'Bb', sub: 'Display' },
                        { label: '01', sub: 'Mono' },
                      ].map(({ label, sub }) => (
                        <div key={label} className="rounded-lg flex flex-col items-center py-2 gap-0.5"
                          style={{ background: 'rgba(255,255,255,0.04)' }}>
                          <span className="text-white/50 text-sm font-semibold">{label}</span>
                          <span className="text-white/20 text-[8px] font-mono tracking-wider">{sub}</span>
                        </div>
                      ))}
                    </div>
                    {/* Shimmer bar */}
                    <div className="h-1 rounded-full overflow-hidden bg-white/5">
                      <div className="h-full w-4/5 rounded-full shimmer"
                        style={{ background: 'linear-gradient(90deg,#8B5CF6,#F97316)' }} />
                    </div>
                  </div>
                </div>

                {/* Badge — delivered */}
                <div className="float-b absolute -bottom-4 left-0 sm:-left-10 z-20 glass rounded-2xl px-4 py-3"
                  style={{ border:'1px solid rgba(255,255,255,0.12)', boxShadow:'0 12px 40px rgba(0,0,0,0.3)', background:'rgba(9,9,26,0.9)', backdropFilter:'blur(16px)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/40 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold">Brand delivered</div>
                      <div className="text-white/30 text-[10px]">2 days ahead of schedule</div>
                    </div>
                  </div>
                </div>

                {/* Badge — stars */}
                <div className="float-a absolute -top-4 right-0 sm:-right-8 z-20 rounded-2xl px-4 py-3"
                  style={{ border:'1px solid rgba(255,255,255,0.1)', boxShadow:'0 12px 40px rgba(0,0,0,0.25)', background:'rgba(9,9,26,0.88)', backdropFilter:'blur(16px)', animationDelay:'1.5s' }}>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_,i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-white text-xs font-semibold">5.0 · 100+ reviews</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
