'use client'

import Link from 'next/link'
import { useRef, useState, MouseEvent } from 'react'

const projects = [
  {
    category: 'Luxury Developer Branding', title: 'The Grand Residences', client: 'Grand Residences', year: '2024',
    desc: 'Complete brand identity for a luxury residential development — wordmark, deep navy & gold palette, sales brochures, hoarding signage, website, and social launch kit.',
    gradient: 'linear-gradient(135deg,#0a0e1a 0%,#0d1f3c 40%,#162d4e 100%)',
    glow: 'rgba(180,140,60,0.45)', accent: '#D4AF37',
    tags: ['Developer Brand','Brochures','Signage','Social Kit'], large: true,
  },
  {
    category: 'Agency Identity', title: 'Hartley & Co.', client: 'Hartley & Co.', year: '2024',
    desc: 'Full rebrand for a boutique real estate agency — from generic to premium. New identity, listing presentation, business cards, and social media system.',
    gradient: 'linear-gradient(135deg,#0f1f1a 0%,#1a3d2e 50%,#0f1f1a 100%)',
    glow: 'rgba(52,211,153,0.45)', accent: '#34D399',
    tags: ['Agency Brand','Identity','Presentations'], large: false,
  },
  {
    category: 'Agent Personal Brand', title: 'Mark Evans, REALTOR', client: 'Mark Evans', year: '2024',
    desc: 'Personal brand system for a top-producing agent — logo, brand colours, business cards, listing signs, social templates, and headshot style guide.',
    gradient: 'linear-gradient(135deg,#1a0a00 0%,#3d1500 50%,#1a0a00 100%)',
    glow: 'rgba(249,115,22,0.5)', accent: '#FB923C',
    tags: ['Agent Brand','Print Kit','Social Templates'], large: false,
  },
  {
    category: 'Luxury Developer Branding', title: 'Pinnacle Tower', client: 'Pinnacle Development', year: '2023',
    desc: 'Pre-launch brand identity and marketing suite for a mixed-use tower — logo, hoarding visuals, investor deck design, digital ads, and VIP brochure.',
    gradient: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
    glow: 'rgba(139,92,246,0.5)', accent: '#A78BFA',
    tags: ['Developer Brand','Investor Deck','Print'], large: false,
  },
  {
    category: 'Property Marketing & Print', title: 'Luxury Listing Suite', client: 'The Grand Agency', year: '2023',
    desc: 'Premium listing presentation, property brochures, for-sale signage, and open house materials — a full print system built to convert luxury buyers.',
    gradient: 'linear-gradient(135deg,#1f0a1a 0%,#4a1540 50%,#1f0a1a 100%)',
    glow: 'rgba(236,72,153,0.5)', accent: '#F472B6',
    tags: ['Listing Presentation','Brochures','Signage'], large: false,
  },
  {
    category: 'Agency Identity', title: 'Bayview Properties', client: 'Bayview Properties', year: '2023',
    desc: 'Brand identity and digital presence for a coastal real estate firm — full visual system, social media kit, email templates, and agent onboarding kit.',
    gradient: 'linear-gradient(135deg,#001f33 0%,#003d66 50%,#001f33 100%)',
    glow: 'rgba(6,182,212,0.5)', accent: '#22D3EE',
    tags: ['Agency Brand','Social Kit','Digital'], large: false,
  },
]

const CATS = ['All', 'Luxury Developer Branding', 'Agency Identity', 'Agent Personal Brand', 'Property Marketing & Print']

function TiltCard({ p }: { p: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5, y = (e.clientY - top) / height - 0.5
    el.style.transform = `perspective(800px) rotateX(${y * -9}deg) rotateY(${x * 9}deg) scale(1.02)`
    el.style.boxShadow = `0 32px 80px rgba(0,0,0,0.5), 0 0 60px ${p.glow}`
  }
  const onLeave = () => {
    const el = ref.current; if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
    el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'
    setHover(false)
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHover(true)} onMouseLeave={onLeave}
      className="group relative rounded-2xl overflow-hidden tilt-card"
      style={{ minHeight: p.large ? 440 : 220, boxShadow:'0 8px 32px rgba(0,0,0,0.3)', transition:'transform .12s ease,box-shadow .3s' }}>
      <div className="absolute inset-0" style={{ background: p.gradient }} />
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      {/* Hover reveal */}
      <div className="absolute inset-0 flex items-center justify-center"
        style={{ background:'rgba(0,0,0,0.45)', backdropFilter:'blur(4px)', clipPath: hover ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)', transition:'clip-path .5s cubic-bezier(.23,1,.32,1)' }}>
        <Link href="/contact" className="border border-white/30 bg-white/10 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
          style={{ transform: hover ? 'scale(1)' : 'scale(0.88)', transition:'transform .4s .1s cubic-bezier(.23,1,.32,1)' }}>
          Start a Similar Project →
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6"
        style={{ background:'linear-gradient(to top,rgba(0,0,0,0.85),transparent)' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="label label-dim text-[9px]">{p.category}</span>
          <span className="label label-dim text-[9px]">{p.year}</span>
        </div>
        <h3 className="text-white font-black tracking-tight" style={{ fontSize: p.large ? 24 : 17 }}>{p.title}</h3>
        <p className="text-white/40 text-xs mt-1 leading-relaxed">{p.desc}</p>
        <div className="flex gap-1.5 mt-3">
          {p.tags.map(t => (
            <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full" style={{ background:'rgba(255,255,255,0.1)', color: p.accent }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-48 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-2" style={{ width:600, height:500, background:'rgba(139,92,246,0.10)', top:'-20%', right:'-5%' }} />
          <div className="mesh-blob blob-3" style={{ width:400, height:400, background:'rgba(249,115,22,0.08)', bottom:'-10%', left:'5%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.07) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <span className="label label-p tracking-widest mb-5 block">Our Work</span>
          <h1 className="text-[clamp(38px,7vw,100px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 mb-6">
            Projects we&apos;re<br />
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#8B5CF6,#A78BFA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              proud of.
            </span>
          </h1>
          <p className="text-[17px] text-dark-3/45 max-w-[440px] leading-relaxed font-light">
            A curated selection of brands and products we&apos;ve built from the ground up.
          </p>
        </div>
      </section>

      {/* ── Filter ── */}
      <div className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-lg border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-4 flex gap-2 overflow-x-auto">
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap ${
                active === cat
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-black/4 text-dark-3/50 hover:bg-primary/8 hover:text-primary'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="py-20 max-w-[1440px] mx-auto px-8 lg:px-16">
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            <div className="lg:col-span-7"><TiltCard p={filtered[0]} /></div>
            <div className="lg:col-span-5 grid grid-rows-2 gap-4">
              {filtered.slice(1,3).map(p => <TiltCard key={p.title} p={p} />)}
            </div>
          </div>
        )}
        {filtered.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {filtered.slice(3).map(p => <TiltCard key={p.title} p={p} />)}
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="pb-32 text-center px-8">
        <h2 className="text-[clamp(32px,3.5vw,48px)] font-black tracking-[-0.04em] text-dark-3 mb-4">
          Want to be our next{' '}
          <span className="font-display italic" style={{ background:'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            success story?
          </span>
        </h2>
        <p className="text-dark-3/40 text-[16px] mb-8">Let&apos;s talk about your brand and how we can help it grow.</p>
        <Link href="/contact" className="btn-primary inline-flex px-10 py-4 text-[15px]">
          Start a Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </div>
  )
}
