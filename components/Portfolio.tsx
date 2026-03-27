'use client'

import Link from 'next/link'
import { useRef, useState, MouseEvent } from 'react'

const projects = [
  {
    id: 'G', category: 'Luxury Developer Branding', title: 'The Grand Residences', year: '2024',
    desc: 'Complete brand identity for a luxury residential development — wordmark, logo mark, deep navy & gold palette, sales brochures, hoarding signage, website, and social media launch kit.',
    gradient: 'linear-gradient(135deg,#0a0e1a 0%,#0d1f3c 40%,#162d4e 100%)',
    glow: 'rgba(180,140,60,0.45)',
    accentColor: '#D4AF37',
    large: true,
    tags: ['Developer Brand','Brochures','Signage','Social Kit'],
  },
  {
    id: 'H', category: 'Agency Identity', title: 'Hartley & Co.', year: '2024',
    desc: 'Full rebrand for a boutique real estate agency — from generic to premium. New identity, listing presentation, agent business cards, and social media system.',
    gradient: 'linear-gradient(135deg,#0f1f1a 0%,#1a3d2e 50%,#0f1f1a 100%)',
    glow: 'rgba(52,211,153,0.45)',
    accentColor: '#34D399',
    large: false,
    tags: ['Agency Brand','Identity','Presentations'],
  },
  {
    id: 'M', category: 'Agent Personal Brand', title: 'Mark Evans, REALTOR', year: '2024',
    desc: 'Personal brand system for a top-producing agent — logo, brand colours, business cards, listing signs, social templates, and a professional headshot style guide.',
    gradient: 'linear-gradient(135deg,#1a0a00 0%,#3d1500 50%,#1a0a00 100%)',
    glow: 'rgba(249,115,22,0.5)',
    accentColor: '#FB923C',
    large: false,
    tags: ['Agent Brand','Print Kit','Social Templates'],
  },
]

function TiltCard({ p }: { p: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width  - 0.5
    const y = (e.clientY - top)  / height - 0.5
    card.style.transform = `perspective(800px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.02)`
    card.style.boxShadow = `0 40px 90px rgba(0,0,0,0.55), 0 0 60px ${p.glow}`
  }
  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
    card.style.boxShadow = '0 8px 40px rgba(0,0,0,0.35)'
    setHovering(false)
  }

  return (
    <div ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onMouseLeave}
      className="group relative rounded-2xl overflow-hidden tilt-card"
      style={{
        minHeight: p.large ? '480px' : '232px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
        transition: 'transform .12s ease, box-shadow .3s ease',
      }}>

      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: p.gradient }} />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* Ghost letter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display italic font-black text-white/[0.04]" style={{ fontSize: p.large ? '260px' : '160px', lineHeight: 1 }}>
          {p.id}
        </span>
      </div>

      {/* Mask-reveal overlay — slides in from right on hover */}
      <div className="absolute inset-0 flex items-center justify-center"
        style={{
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(3px)',
          clipPath: hovering ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          transition: 'clip-path .5s cubic-bezier(.23,1,.32,1)',
        }}>
        <Link href="/portfolio"
          className="border border-white/30 bg-white/10 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
          style={{
            transform: hovering ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform .4s .1s cubic-bezier(.23,1,.32,1)',
          }}>
          View Case Study →
        </Link>
      </div>

      {/* Content footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6"
        style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 100%)' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="label label-dim text-[9px]">{p.category}</span>
          <span className="label label-dim text-[9px]">{p.year}</span>
        </div>
        <h3 className="text-white font-black tracking-tight leading-tight"
          style={{ fontSize: p.large ? '26px' : '18px' }}>
          {p.title}
        </h3>
        <p className="text-white/40 text-xs mt-1.5 leading-relaxed">{p.desc}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {p.tags.map(t => (
            <span key={t} className="text-[9px] font-semibold tracking-wide px-2 py-0.5 rounded-full"
              style={{ background:'rgba(255,255,255,0.1)', color: p.accentColor }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <span className="label label-p tracking-widest">Selected Work</span>
            <h2 className="mt-4 text-[clamp(40px,4.5vw,60px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
              Recent{' '}
              <span className="font-display italic"
                style={{ background:'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                projects.
              </span>
            </h2>
          </div>
          <Link href="/portfolio"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-dark-3/35 hover:text-primary transition-colors glow-link pb-0.5">
            View all work →
          </Link>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 reveal">
          <div className="lg:col-span-7"><TiltCard p={projects[0]} /></div>
          <div className="lg:col-span-5 grid grid-rows-2 gap-4">
            {projects.slice(1).map(p => <TiltCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
