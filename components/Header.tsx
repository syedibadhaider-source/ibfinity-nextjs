'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const services = [
  {
    href: '/services/branding',
    label: 'Agent & Broker Branding',
    desc: 'Personal brand for real estate pros',
    accent: '#8B5CF6',
    bg: 'rgba(139,92,246,0.15)',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    href: '/services/rebranding',
    label: 'Agency & Firm Identity',
    desc: 'Full brand systems for agencies',
    accent: '#A78BFA',
    bg: 'rgba(167,139,250,0.15)',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    href: '/services/print',
    label: 'Property Marketing & Print',
    desc: 'Brochures, signage & presentations',
    accent: '#C4B5FD',
    bg: 'rgba(196,181,253,0.15)',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/services/digital-products',
    label: 'Social Media & Digital',
    desc: 'Listing templates & content kits',
    accent: '#7C3AED',
    bg: 'rgba(124,58,237,0.15)',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen]         = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const [activeIdx, setActiveIdx]           = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = scrolled
    ? 'text-white/70 hover:text-white hover:bg-white/8'
    : 'text-dark-3/60 hover:text-dark-3 hover:bg-black/5'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          : 'border-b border-black/5'
      }`}
      style={{
        background: scrolled ? 'rgba(9,9,26,0.92)' : 'rgba(237,238,245,0.85)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-16 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image src="/logo.png" alt="ibfinity" width={130} height={44} className="h-9 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {[['/', 'Home'], ['/portfolio', 'Portfolio'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href}
                className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${linkCls}`}>
                {label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => { setIsServicesOpen(false); setActiveIdx(null) }}>
              <button className={`px-4 py-2 text-[13px] font-medium rounded-lg flex items-center gap-1.5 transition-all duration-200 ${linkCls}`}>
                Services
                <svg className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Invisible bridge */}
              <div className="absolute top-full left-0 right-0 h-3" />

              {/* Dropdown panel */}
              <div className={`absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 w-[480px] transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)]"
                  style={{ background: 'rgba(7,7,20,0.98)', backdropFilter: 'blur(24px)' }}>

                  {/* Header strip */}
                  <div className="px-5 pt-4 pb-3 border-b border-white/5 flex items-center justify-between">
                    <span className="text-white/30 text-[10px] font-semibold tracking-widest uppercase">Our Services</span>
                    <Link href="/services"
                      className="text-[11px] font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
                      style={{ color: '#8B5CF6' }}>
                      View all
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Service rows */}
                  <div className="p-2">
                    {services.map((s, i) => (
                      <Link key={s.href} href={s.href}
                        onMouseEnter={() => setActiveIdx(i)}
                        onMouseLeave={() => setActiveIdx(null)}
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-150 group relative overflow-hidden"
                        style={{ background: activeIdx === i ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        {/* Accent glow on hover */}
                        {activeIdx === i && (
                          <div className="absolute inset-0 pointer-events-none rounded-xl"
                            style={{ background: `radial-gradient(circle at 0% 50%,${s.accent}15,transparent 60%)` }} />
                        )}
                        {/* Icon */}
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-150 relative z-10"
                          style={{
                            background: activeIdx === i ? s.bg : 'rgba(255,255,255,0.06)',
                            color: activeIdx === i ? s.accent : 'rgba(255,255,255,0.4)',
                            border: `1px solid ${activeIdx === i ? s.accent + '40' : 'transparent'}`,
                          }}>
                          {s.icon}
                        </div>
                        {/* Text */}
                        <div className="flex-1 relative z-10">
                          <div className="text-[13.5px] font-semibold transition-colors duration-150"
                            style={{ color: activeIdx === i ? '#fff' : 'rgba(255,255,255,0.75)' }}>
                            {s.label}
                          </div>
                          <div className="text-[11.5px] mt-0.5 transition-colors duration-150"
                            style={{ color: activeIdx === i ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.28)' }}>
                            {s.desc}
                          </div>
                        </div>
                        {/* Arrow */}
                        <svg className="w-3.5 h-3.5 relative z-10 transition-all duration-150"
                          style={{
                            color: activeIdx === i ? s.accent : 'transparent',
                            transform: activeIdx === i ? 'translateX(0)' : 'translateX(-4px)',
                          }}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {/* CTA footer */}
                  <div className="px-4 pb-4 pt-1">
                    <Link href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-bold text-white transition-all duration-200 hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg,#7C3AED,#5B21B6)' }}>
                      Free Consultation
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+923451180314"
              className={`flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-white/80 hover:text-white hover:bg-white/8'
                  : 'text-dark-3/70 hover:text-dark-3 hover:bg-black/5'
              }`}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <Link href="/contact" className="btn-primary text-[13px] py-2.5 px-5">
              Free Consultation
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {[0,1,2].map(i => (
              <span key={i} className={`w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white/70' : 'bg-dark-3/70'} ${
                i === 0 ? (isMenuOpen ? 'rotate-45 translate-y-2' : '') :
                i === 1 ? (isMenuOpen ? 'opacity-0' : '') :
                (isMenuOpen ? '-rotate-45 -translate-y-2' : '')
              }`} />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="rounded-2xl p-4 space-y-1 border border-white/8"
            style={{ background: 'rgba(7,7,20,0.98)', backdropFilter: 'blur(24px)' }}>
            {[['/', 'Home'], ['/portfolio', 'Portfolio'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href}
                className="block px-4 py-3 text-white/70 hover:text-white text-sm font-medium rounded-xl hover:bg-white/5 transition-colors">
                {label}
              </Link>
            ))}
            <div>
              <button className="w-full flex items-center justify-between px-4 py-3 text-white/70 hover:text-white text-sm font-medium rounded-xl hover:bg-white/5 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}>
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="mt-2 space-y-1 px-2">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: s.bg, color: s.accent }}>
                        {s.icon}
                      </div>
                      <span className="text-white/60 hover:text-white text-[13px] font-medium transition-colors">{s.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-2 border-t border-white/5 space-y-2">
              <a href="tel:+923451180314"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +92 345 118 0314
              </a>
              <Link href="/contact" className="btn-primary w-full text-sm justify-center">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
