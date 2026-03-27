'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'

/* ─── Content ────────────────────────────────────────── */
const WORDS = ['Agents', 'Developers', 'Agencies', 'Brokers']

// Purple-spectrum brand palette — orange reserved for stat card + CTA only
const BRAND_COLORS = [
  { bg: 'rgba(139,92,246,0.12)',  border: 'rgba(139,92,246,0.26)',  text: '#6D28D9' },  // violet
  { bg: 'rgba(109,40,217,0.12)', border: 'rgba(109,40,217,0.25)',  text: '#5B21B6' },  // deep violet
  { bg: 'rgba(76,29,149,0.12)',  border: 'rgba(76,29,149,0.25)',   text: '#4C1D95' },  // indigo-purple
  { bg: 'rgba(167,139,250,0.18)',border: 'rgba(167,139,250,0.32)', text: '#6D28D9' },  // lavender
  { bg: 'rgba(196,91,246,0.12)', border: 'rgba(196,91,246,0.24)',  text: '#7E22CE' },  // violet-pink
  { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.26)',  text: '#5B21B6' },  // medium violet
  { bg: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.3)',   text: '#7C3AED' },  // bright violet
  { bg: 'rgba(91,33,182,0.12)',  border: 'rgba(91,33,182,0.24)',   text: '#4C1D95' },  // plum
  { bg: 'rgba(167,139,250,0.14)',border: 'rgba(167,139,250,0.26)', text: '#5B21B6' },  // soft lavender
  { bg: 'rgba(109,40,217,0.1)',  border: 'rgba(109,40,217,0.2)',   text: '#3B0764' },  // darkest
  { bg: 'rgba(124,58,237,0.11)', border: 'rgba(124,58,237,0.22)',  text: '#6D28D9' },  // light violet
]

// Each tag: pixel left/top within inner card, drop order (left→right, row by row), rotation, color index
const TAG_DATA = [
  { text: 'Agent Branding',    left:   0, top:  8,  order: 0,  rot: -1.5, ci: 0  },
  { text: 'Agency Identity',   left: 132, top: 10,  order: 1,  rot:  1.5, ci: 1  },
  { text: 'Social Media',      left: 264, top:  6,  order: 2,  rot: -1,   ci: 4  },
  { text: 'Website Design',    left: 372, top: 10,  order: 3,  rot:  2,   ci: 2  },
  { text: 'Property Marketing',left:   0, top: 57,  order: 4,  rot:  1,   ci: 3  },
  { text: 'Listing Brochures', left: 158, top: 59,  order: 5,  rot: -2,   ci: 7  },
  { text: 'Yard Signs',        left: 305, top: 53,  order: 6,  rot:  1.5, ci: 5  },
  { text: 'Print Design',      left:   0, top: 106, order: 7,  rot: -1,   ci: 6  },
  { text: 'Brand Strategy',    left: 108, top: 108, order: 8,  rot:  2,   ci: 8  },
  { text: 'Presentation Decks',left: 233, top: 103, order: 9,  rot: -1.5, ci: 9  },
  { text: 'Logo Design',       left: 400, top: 108, order: 10, rot:  1,   ci: 10 },
]

const SERVICES = [
  {
    href: '/services/branding', num: '01',
    title: 'Agent & Broker Branding',
    desc: 'Personal brand identity designed to dominate your local market — logo, colour palette, typography, business cards, social kit & complete brand guidelines.',
    tags: ['Logo Design', 'Brand Strategy', 'Business Cards', 'Social Kit'],
    color: '#8B5CF6',
  },
  {
    href: '/services/rebranding', num: '02',
    title: 'Agency & Firm Identity',
    desc: 'Full rebrands for real estate agencies and brokerage firms. We rebuild your visual identity from the ground up.',
    tags: ['Rebrand', 'Identity System', 'Guidelines'],
    color: '#6D28D9',
  },
  {
    href: '/services/print', num: '03',
    title: 'Property Marketing & Print',
    desc: 'Listing brochures, yard signs & presentations that sell properties before buyers walk through the door.',
    tags: ['Brochures', 'Signage', 'Presentations'],
    color: '#8B5CF6',
  },
  {
    href: '/services/digital-products', num: '04',
    title: 'Social Media & Digital',
    desc: 'Listing templates, content kits & digital assets that keep your brand consistent across every platform.',
    tags: ['Templates', 'Social Media', 'Digital Kits'],
    color: '#A78BFA',
  },
]

const TESTIMONIALS = [
  {
    quote: 'Ibfinity completely transformed our agency brand. Within weeks of the rebrand, we started attracting higher-calibre listings.',
    name: 'Sarah Al-Mansouri', role: 'Director, The Grand Agency',
  },
  {
    quote: 'The marketing materials they created for our development sold out Phase 1 before construction was complete. Unmatched quality.',
    name: 'Ahmed Khalil', role: 'CEO, Pinnacle Development',
  },
  {
    quote: 'My personal brand now looks better than any franchise agent in my area. Clients actually comment on how professional everything looks.',
    name: 'Maya Thornton', role: 'Top Producer, RE/MAX Gulf',
  },
]

const CLIENTS = ['Emaar', 'DAMAC', 'Nakheel', 'RE/MAX', 'Coldwell Banker', 'Savills', 'JLL', 'Knight Frank', 'Bayut', "Sotheby's Realty"]

/* ─── Count-up hook ─────────────────────────────────── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const start = useCallback(() => setStarted(true), [])
  useEffect(() => {
    if (!started) return
    let t0: number
    const tick = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])
  return { count, start }
}

/* ─── Page ───────────────────────────────────────────── */
export default function Home() {
  const [wordIdx, setWordIdx] = useState(0)
  const [fade, setFade] = useState(true)
  const statsRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const statsTriggered = useRef(false)
  const tagsTriggered = useRef(false)
  const [tagsVisible, setTagsVisible] = useState(false)

  const clientsCount = useCountUp(1200, 2000)
  const deliverablesCount = useCountUp(2570, 2200)
  const yearsCount = useCountUp(11, 1500)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => { setWordIdx(i => (i + 1) % WORDS.length); setFade(true) }, 180)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const el = statsRef.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !statsTriggered.current) {
        statsTriggered.current = true
        clientsCount.start(); deliverablesCount.start(); yearsCount.start()
        ob.disconnect()
      }
    }, { threshold: 0.15 })
    ob.observe(el); return () => ob.disconnect()
  }, [])

  useEffect(() => {
    const el = tagsRef.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !tagsTriggered.current) {
        tagsTriggered.current = true
        setTagsVisible(true)
        ob.disconnect()
      }
    }, { threshold: 0.2 })
    ob.observe(el); return () => ob.disconnect()
  }, [])

  return (
    <div className="bg-[#EDEEF5] min-h-screen">

      {/* ═══════════════════════════════════════
          HERO BENTO
      ═══════════════════════════════════════ */}
      <section className="pt-28 lg:pt-32 pb-4 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-3 lg:gap-4">

          {/* ── MAIN HERO CARD ── */}
          <div className="col-span-12 lg:col-span-8 bento-card p-8 sm:p-10 lg:p-14 flex flex-col justify-between"
            style={{ minHeight: 500 }}>
            <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 65%)', filter: 'blur(60px)', transform: 'translate(25%,-25%)' }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 65%)', filter: 'blur(40px)', transform: 'translate(-25%,25%)' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(139,92,246,0.1)', color: '#6D28D9', border: '1px solid rgba(139,92,246,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                Real Estate Design Studio
              </div>
              <h1 className="text-[clamp(40px,5.5vw,80px)] font-black tracking-[-0.045em] leading-[0.92] text-[#0E0E28] mb-6">
                Brand Design<br />for Real Estate<br />
                {/* Separate opacity wrapper from background-clip to avoid Chrome render artifact */}
                <span className="transition-opacity duration-200 inline-block"
                  style={{ opacity: fade ? 1 : 0 }}>
                  <span className="font-display italic"
                    style={{
                      background: 'linear-gradient(125deg,#5B21B6,#7C3AED,#A78BFA)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                    {WORDS[wordIdx]}.
                  </span>
                </span>
              </h1>
              <p className="text-[#0E0E28]/55 text-[16px] max-w-[420px] leading-relaxed font-light">
                Premium graphic design and web studio built exclusively for real estate professionals who refuse to blend in.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-5 flex-wrap mt-10">
              <Link href="/contact" className="btn-primary px-8 py-4 text-[14px]">
                Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/portfolio" className="flex items-center gap-2 text-[#0E0E28]/45 hover:text-[#0E0E28] text-[14px] font-medium transition-colors group">
                See our work
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:gap-4">
            {/* Purple tagline card */}
            <div className="rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between p-8 lg:p-9"
              style={{ background: 'linear-gradient(140deg,#4C1D95 0%,#6D28D9 45%,#7C3AED 100%)', border: '1px solid rgba(109,40,217,0.4)', minHeight: 240 }}>
              <div className="absolute bottom-0 right-0 w-52 h-52 rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)', transform: 'translate(35%,35%)' }} />
              <div className="absolute top-0 left-0 w-32 h-32 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', transform: 'translate(-40%,-40%)' }} />
              <div className="absolute top-5 right-5 text-white/12 text-[90px] font-black leading-none select-none pointer-events-none">✦</div>
              <div className="relative z-10">
                <div className="text-white/60 text-[10px] font-semibold tracking-widest uppercase mb-4">The Studio</div>
                <h2 className="text-[clamp(22px,2.8vw,30px)] font-black text-white leading-tight tracking-tight">
                  One industry.<br />Mastered completely.
                </h2>
              </div>
              <p className="relative z-10 text-white/65 text-[13px] leading-relaxed mt-4">
                Agents, brokers, developers & agencies — no generalist work, ever.
              </p>
            </div>

            {/* 2 stat cards */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="rounded-3xl p-5 lg:p-6 flex flex-col justify-between"
                style={{ background: 'linear-gradient(135deg,#EA580C,#C2410C)', border: '1px solid rgba(234,88,12,0.4)', minHeight: 130 }}>
                <div className="text-white/65 text-[10px] font-semibold tracking-widest uppercase">Happy Clients</div>
                <div>
                  <div className="text-[clamp(32px,3.5vw,48px)] font-black text-white tracking-tighter leading-none">
                    {clientsCount.count.toLocaleString()}+
                  </div>
                  <div className="text-white/55 text-[10px] mt-1">Verified reviews</div>
                </div>
              </div>
              <div className="bento-card p-5 lg:p-6 flex flex-col justify-between" style={{ minHeight: 130 }}>
                <div className="text-[#0E0E28]/40 text-[10px] font-semibold tracking-widest uppercase">Deliverables</div>
                <div>
                  <div className="text-[clamp(32px,3.5vw,48px)] font-black tracking-tighter leading-none"
                    style={{ background: 'linear-gradient(135deg,#8B5CF6,#7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {deliverablesCount.count.toLocaleString()}+
                  </div>
                  <div className="text-[#0E0E28]/40 text-[10px] mt-1">Shipped</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM ROW ── */}
          <div ref={statsRef} className="col-span-6 sm:col-span-3 lg:col-span-3 bento-card p-5 lg:p-7 flex flex-col justify-between" style={{ minHeight: 110 }}>
            <div className="text-[#0E0E28]/40 text-[10px] font-semibold tracking-widest uppercase">Experience</div>
            <div>
              <div className="text-[40px] font-black text-[#0E0E28] tracking-tighter leading-none">{yearsCount.count}+</div>
              <div className="text-[#0E0E28]/40 text-[11px] mt-0.5">Years — Since 2013</div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-3 bento-card p-5 lg:p-7 flex flex-col justify-between" style={{ minHeight: 110 }}>
            <div className="text-[#0E0E28]/40 text-[10px] font-semibold tracking-widest uppercase">Focus</div>
            <div>
              <div className="text-[40px] font-black tracking-tighter leading-none"
                style={{ background: 'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                100%
              </div>
              <div className="text-[#0E0E28]/40 text-[11px] mt-0.5">Real estate only</div>
            </div>
          </div>

          {/* ── SERVICE TAGS — scattered drop animation ── */}
          <div ref={tagsRef} className="col-span-12 lg:col-span-6 bento-card p-6 lg:p-8">
            <div className="text-[#0E0E28]/40 text-[10px] font-semibold tracking-widest uppercase mb-4">What We Do</div>
            {/* Tags fall from above and stack naturally in flex-wrap layout */}
            <div className="flex flex-wrap gap-2 content-start" style={{ minHeight: 140 }}>
              {TAG_DATA.map((tag) => {
                const c = BRAND_COLORS[tag.ci]
                return (
                  <div
                    key={tag.text}
                    className={tagsVisible ? 'tag-drop' : 'opacity-0'}
                    style={{
                      ['--tag-rot' as string]: `${tag.rot}deg`,
                      animationDelay: tagsVisible ? `${tag.order * 0.15}s` : undefined,
                    }}>
                    <span style={{
                      display: 'inline-block',
                      transform: `rotate(${tag.rot}deg)`,
                      padding: '6px 15px',
                      borderRadius: '100px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: c.text,
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      whiteSpace: 'nowrap',
                      cursor: 'default',
                      boxShadow: `0 2px 10px ${c.border}`,
                    }}>
                      {tag.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES BENTO
      ═══════════════════════════════════════ */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-3 lg:gap-4">

          <div className="col-span-12 bento-card px-7 py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-5 flex-wrap">
              <span className="text-[#0E0E28]/40 text-[10px] font-semibold tracking-widest uppercase">Our Services</span>
              <h2 className="text-[clamp(15px,1.8vw,21px)] font-black text-[#0E0E28] tracking-tight">Built for real estate. Nothing else.</h2>
            </div>
            <Link href="/services" className="hidden sm:flex items-center gap-1.5 text-[#0E0E28]/40 hover:text-[#0E0E28] text-[13px] font-medium transition-colors group shrink-0">
              View all
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Large service card */}
          <Link href={SERVICES[0].href}
            className="col-span-12 lg:col-span-6 bento-card p-8 lg:p-10 flex flex-col justify-between group cursor-none"
            style={{ minHeight: 260 }}>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 30% 50%,rgba(139,92,246,0.07),transparent 65%)' }} />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-[13px] font-black"
                style={{ background: 'rgba(139,92,246,0.1)', color: '#6D28D9', border: '1px solid rgba(139,92,246,0.2)' }}>
                01
              </div>
              <h3 className="text-[21px] font-black text-[#0E0E28] tracking-tight mb-3">{SERVICES[0].title}</h3>
              <p className="text-[#0E0E28]/55 text-[14px] leading-relaxed">{SERVICES[0].desc}</p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-1.5 mt-6">
              {SERVICES[0].tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{ background: 'rgba(139,92,246,0.1)', color: '#6D28D9' }}>
                  {tag}
                </span>
              ))}
            </div>
          </Link>

          {/* Compact service cards */}
          {SERVICES.slice(1).map((svc) => (
            <Link key={svc.href} href={svc.href}
              className="col-span-12 sm:col-span-4 lg:col-span-2 bento-card p-6 flex flex-col justify-between group cursor-none"
              style={{ minHeight: 200 }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 50%,${svc.color}10,transparent 70%)` }} />
              <div className="relative z-10">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-5 text-[11px] font-black"
                  style={{ background: `${svc.color}15`, color: svc.color, border: `1px solid ${svc.color}30` }}>
                  {svc.num}
                </div>
                <h3 className="text-[14px] font-black text-[#0E0E28] tracking-tight leading-snug mb-4">{svc.title}</h3>
              </div>
              <div className="relative z-10 flex flex-wrap gap-1.5">
                {svc.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                    style={{ background: `${svc.color}12`, color: svc.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* ═══════════════════════════════════════
          SPECIALTY + PORTFOLIO
      ═══════════════════════════════════════ */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-3 lg:gap-4">

          {/* 100% Real Estate — dark accent card */}
          <div className="col-span-12 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(140deg,#0D0520,#1A0A38)', border: '1px solid rgba(109,40,217,0.3)' }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px]"
                style={{ background: 'radial-gradient(ellipse,rgba(139,92,246,0.25) 0%,transparent 60%)', filter: 'blur(60px)' }} />
            </div>
            <div className="relative z-10">
              <div className="text-white/45 text-[10px] font-semibold tracking-widest uppercase mb-5">Our Promise</div>
              <h2 className="text-[clamp(32px,5vw,72px)] font-black tracking-[-0.04em] text-white leading-none mb-4">
                100% Real Estate.{' '}
                <span className="font-display italic"
                  style={{ background: 'linear-gradient(135deg,#7C3AED,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  0% Generic.
                </span>
              </h2>
              <p className="text-white/55 text-[15px] max-w-xl mx-auto leading-relaxed">
                We don&apos;t design for restaurants, startups, or fashion brands. Every tool, template, and strategy we have is engineered for one industry — real estate.
              </p>
            </div>
          </div>

          {/* Featured portfolio */}
          <div className="col-span-12 lg:col-span-7 bento-card flex flex-col justify-end p-8 lg:p-10 relative"
            style={{ minHeight: 360 }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(160deg,rgba(139,92,246,0.06) 0%,transparent 50%,rgba(249,115,22,0.04) 100%)' }} />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[200px] font-black tracking-[-0.1em] select-none leading-none"
                style={{ color: 'rgba(14,14,40,0.04)' }}>GR</div>
            </div>
            <div className="relative z-10">
              <div className="text-[#0E0E28]/40 text-[10px] font-semibold tracking-widest uppercase mb-4">Featured Work</div>
              <h3 className="text-[25px] font-black text-[#0E0E28] tracking-tight mb-2">The Grand Residences</h3>
              <p className="text-[#0E0E28]/50 text-[13px] mb-6 leading-relaxed">Luxury developer branding — complete visual identity for a premium residential development.</p>
              <div className="flex gap-2 flex-wrap">
                {['Brand Identity', 'Luxury Developer', 'Print & Digital'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-[11px] text-[#0E0E28]/50"
                    style={{ background: 'rgba(14,14,40,0.05)', border: '1px solid rgba(14,14,40,0.1)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2 stacked project cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 lg:gap-4">
            {[
              { name: 'Hartley & Co.', desc: 'Agency identity for a boutique real estate firm.', tag: 'Agency Identity', color: '#6D28D9' },
              { name: 'Mark Evans REALTOR', desc: 'Agent personal brand — premium and trust-building.', tag: 'Agent Branding', color: '#8B5CF6' },
            ].map(p => (
              <div key={p.name} className="bento-card p-7 flex-1 relative overflow-hidden" style={{ minHeight: 160 }}>
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                  style={{ background: `radial-gradient(circle,${p.color}12 0%,transparent 70%)`, filter: 'blur(24px)', transform: 'translate(20%,-20%)' }} />
                <div className="text-[10px] font-semibold tracking-widest uppercase mb-3 relative z-10" style={{ color: p.color }}>{p.tag}</div>
                <h3 className="text-[17px] font-black text-[#0E0E28] tracking-tight mb-2 relative z-10">{p.name}</h3>
                <p className="text-[#0E0E28]/50 text-[13px] relative z-10">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="col-span-12">
            <Link href="/portfolio"
              className="flex items-center justify-center gap-2.5 py-4 rounded-3xl text-[#0E0E28]/35 hover:text-[#0E0E28] text-[13px] font-medium transition-colors group"
              style={{ border: '1px dashed rgba(14,14,40,0.15)' }}>
              View full portfolio
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-3 lg:gap-4">

          <div className="col-span-12 flex items-center justify-between px-1 py-2">
            <span className="text-[#0E0E28]/40 text-[10px] font-semibold tracking-widest uppercase">Client Stories</span>
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[#0E0E28]/35 text-[11px] ml-1.5">5.0 — Fiverr & Upwork</span>
            </div>
          </div>

          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="col-span-12 md:col-span-4 bento-card p-7 lg:p-8 flex flex-col justify-between" style={{ minHeight: 200 }}>
              <p className="text-[#0E0E28]/60 text-[14px] leading-relaxed italic relative z-10">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6 relative z-10">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[11px] font-black shrink-0"
                  style={{ background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)' }}>
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="text-[#0E0E28] text-[13px] font-bold">{t.name}</div>
                  <div className="text-[#0E0E28]/40 text-[11px]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLIENTS MARQUEE
      ═══════════════════════════════════════ */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="bento-card py-7 overflow-hidden">
          <div className="text-center text-[#0E0E28]/35 text-[10px] font-semibold tracking-widest uppercase mb-5">
            Trusted by real estate professionals worldwide
          </div>
          <div className="flex items-center overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right,transparent 0%,black 8%,black 92%,transparent 100%)' }}>
            <div className="flex gap-14 animate-marquee shrink-0 pr-14">
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <span key={i} className="font-bold text-[15px] tracking-wider whitespace-nowrap cursor-default transition-colors"
                  style={{ color: 'rgba(14,14,40,0.3)' }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="py-4 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(140deg,#0D0520,#160C2E)', border: '1px solid rgba(109,40,217,0.3)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/4 top-0 w-80 h-80"
              style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.25) 0%,transparent 60%)', filter: 'blur(60px)', transform: 'translateY(-50%)' }} />
            <div className="absolute right-1/4 bottom-0 w-80 h-80"
              style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.18) 0%,transparent 60%)', filter: 'blur(60px)', transform: 'translateY(50%)' }} />
          </div>
          <div className="relative z-10">
            <div className="text-white/45 text-[10px] font-semibold tracking-widest uppercase mb-6">Ready to Begin?</div>
            <h2 className="text-[clamp(32px,5.5vw,72px)] font-black tracking-[-0.04em] text-white leading-none mb-6">
              Let&apos;s make your brand<br />
              <span className="font-display italic"
                style={{ background: 'linear-gradient(135deg,#C4B5FD,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                impossible to ignore.
              </span>
            </h2>
            <p className="text-white/55 text-[15px] mb-10 max-w-lg mx-auto leading-relaxed">
              Free consultation. No pressure. Just a conversation about where your brand is — and where it should be.
            </p>
            <Link href="/contact" className="btn-primary inline-flex px-10 py-5 text-[15px]">
              Start Your Brand Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
