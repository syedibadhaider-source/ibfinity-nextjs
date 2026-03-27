'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const services = [
  { href: '/services/branding',         label: 'Agent & Broker Branding', desc: 'Personal brand for real estate pros',  icon: '✦' },
  { href: '/services/rebranding',       label: 'Agency & Firm Identity',  desc: 'Full brand systems for agencies',      icon: '◈' },
  { href: '/services/print',            label: 'Property Marketing & Print', desc: 'Brochures, signage & presentations', icon: '⬡' },
  { href: '/services/digital-products', label: 'Social Media & Digital',  desc: 'Listing templates & content kits',     icon: '◇' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen]     = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = scrolled
    ? 'text-white/70 hover:text-white hover:bg-white/6'
    : 'text-dark-3/55 hover:text-dark-3 hover:bg-black/5'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-white/6 shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
          : 'bg-white/80 backdrop-blur-md border-b border-black/5'
      }`}
      style={scrolled ? { background: 'rgba(9,9,26,0.92)' } : undefined}
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
              label === 'Services dropdown' ? null :
              <Link key={href} href={href}
                className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${linkCls}`}>
                {label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}>
              <button className={`px-4 py-2 text-[13px] font-medium rounded-lg flex items-center gap-1.5 transition-all duration-200 ${linkCls}`}>
                Services
                <svg className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Invisible bridge fills the gap so mouse doesn't leave the zone */}
              <div className="absolute top-full left-0 right-0 h-2" />

              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_24px_64px_rgba(0,0,0,0.5)]" style={{ background: 'rgba(9,9,26,0.97)', marginTop: 0 }}>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm shrink-0 mt-0.5 group-hover:bg-primary/30 transition-colors">
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{s.label}</div>
                        <div className="text-white/40 text-xs mt-0.5">{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-1 pt-2 border-t border-white/5">
                    <Link href="/services"
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-primary text-sm font-semibold hover:bg-primary/10 rounded-xl transition-colors">
                      View all services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
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
              <span key={i} className={`w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-dark-3'} ${
                i === 0 ? (isMenuOpen ? 'rotate-45 translate-y-2' : '') :
                i === 1 ? (isMenuOpen ? 'opacity-0' : '') :
                (isMenuOpen ? '-rotate-45 -translate-y-2' : '')
              }`} />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-1" style={{ background: 'rgba(9,9,26,0.97)' }}>
            {[['/', 'Home'], ['/portfolio', 'Portfolio'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href}
                className="block px-4 py-3 text-white/80 hover:text-white text-sm font-medium rounded-xl hover:bg-white/5 transition-colors">
                {label}
              </Link>
            ))}
            <div>
              <button className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-white text-sm font-medium rounded-xl hover:bg-white/5 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}>
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l border-white/10 pl-4">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="block py-2 text-white/60 hover:text-white text-sm transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-2 border-t border-white/5">
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
