'use client'

import Link from 'next/link'
import Image from 'next/image'

const nav = {
  Services: [
    { href: '/services/branding', label: 'Agent & Broker Branding' },
    { href: '/services/rebranding', label: 'Agency & Firm Identity' },
    { href: '/services/print', label: 'Property Marketing & Print' },
    { href: '/services/digital-products', label: 'Social Media & Digital' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark-2 text-white">

      {/* ── CTA band ── */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,77,255,0.12), transparent 70%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="label label-light tracking-label mb-3 block">Ready to begin?</span>
            <h3 className="text-[clamp(32px,4vw,52px)] font-black tracking-tighter text-white leading-tight">
              Let&apos;s make your brand<br />
              <span className="font-display italic gradient-text-soft">impossible to ignore.</span>
            </h3>
          </div>
          <Link href="/contact" className="btn-primary px-9 py-4 text-[14px] shrink-0">
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-6">
              <Image src="/logo.png" alt="ibfinity" width={130} height={44} className="h-9 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/30 text-[14px] leading-relaxed max-w-xs mb-8">
              The real estate branding studio. We build identities for agents, developers &amp; agencies who refuse to blend in.
            </p>
            {/* Newsletter */}
            <div>
              <span className="label label-light tracking-label mb-3 block">Stay in the loop</span>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-lg text-white text-sm bg-white/5 border border-white/8 placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <button type="submit" className="btn-primary px-5 py-2.5 text-xs shrink-0">
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([heading, links]) => (
            <div key={heading} className="col-span-1 lg:col-span-2 lg:col-start-auto">
              <span className="label label-light tracking-label mb-5 block">{heading}</span>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href}
                      className="text-white/35 hover:text-white text-[14px] transition-colors link-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="col-span-2 lg:col-span-2">
            <span className="label label-light tracking-label mb-5 block">Find Us</span>
            <div className="space-y-3">
              {[
                { name: 'Instagram', handle: '@ibfinity' },
                { name: 'LinkedIn', handle: 'ibfinity' },
                { name: 'Behance', handle: 'ibfinity' },
                { name: 'Dribbble', handle: 'ibfinity' },
              ].map(s => (
                <a key={s.name} href="#"
                  className="flex items-center gap-2 group">
                  <span className="text-white/35 group-hover:text-white text-[14px] transition-colors link-underline">{s.name}</span>
                  <span className="text-white/15 text-[11px]">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[12px]">
            © {new Date().getFullYear()} Ibfinity.com — All rights reserved.
          </p>
          <p className="text-white/15 text-[12px]">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}
