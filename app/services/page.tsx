import Link from 'next/link'

const services = [
  {
    num: '01', title: 'Agent & Broker Branding',
    desc: 'Personal brand identity built for real estate professionals — logo, colours, typography, business cards, listing sign, and social media starter kit.',
    tags: ['Personal Brand','Logo','Business Cards','Social Kit'],
    href: '/services/branding',
    gradient: 'linear-gradient(135deg,#1a0533,#3d1299)',
    accent: '#A78BFA',
  },
  {
    num: '02', title: 'Agency & Firm Identity',
    desc: 'Complete brand system for real estate agencies — visual identity, brand guidelines, signage standards, and team onboarding kit.',
    tags: ['Agency Brand','Guidelines','Signage','Team Kit'],
    href: '/services/rebranding',
    gradient: 'linear-gradient(135deg,#001f40,#0052a8)',
    accent: '#60A5FA',
  },
  {
    num: '03', title: 'Property Marketing & Print',
    desc: 'Listing presentations, sales brochures, hoarding & for-sale signage, floor plan graphics, and open house materials.',
    tags: ['Brochures','Signage','Presentations','Floor Plans'],
    href: '/services/print',
    gradient: 'linear-gradient(135deg,#002d1a,#007a45)',
    accent: '#34D399',
  },
  {
    num: '04', title: 'Social Media & Digital',
    desc: 'Instagram & LinkedIn content kits, listing graphic templates, reels covers, email signatures, and digital ad creatives — all branded for real estate.',
    tags: ['Instagram','Listing Templates','Reels','Email Sig'],
    href: '/services/digital-products',
    gradient: 'linear-gradient(135deg,#2d1500,#8c3900)',
    accent: '#FB923C',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-48 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-1" style={{ width:580, height:580, background:'rgba(139,92,246,0.10)', top:'-15%', right:'-5%' }} />
          <div className="mesh-blob blob-3" style={{ width:380, height:380, background:'rgba(249,115,22,0.08)', bottom:'-10%', left:'5%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.07) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <span className="label label-p tracking-widest mb-5 block">What We Do</span>
          <h1 className="text-[clamp(52px,7vw,100px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 mb-6">
            Built for<br />
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#8B5CF6,#A78BFA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              real estate.
            </span>
          </h1>
          <p className="text-[17px] text-dark-3/45 max-w-[480px] leading-relaxed font-light">
            Every service we offer is designed specifically for the real estate industry — agents, developers, and agencies who want a brand that wins business before they say a word.
          </p>
        </div>
      </section>

      {/* ── Services editorial list ── */}
      <section className="border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="border-t border-black/6">
            {services.map((s) => (
              <Link key={s.num} href={s.href}
                className="service-row block group">
                <div className="grid grid-cols-12 gap-4 items-center py-10 px-2">
                  <div className="col-span-1 lg:col-span-1">
                    <span className="service-num label font-mono text-sm">{s.num}</span>
                  </div>
                  {/* Mini visual */}
                  <div className="hidden lg:flex col-span-2 justify-start">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black"
                      style={{ background: s.gradient, color: s.accent }}>
                      {s.num.slice(1)}
                    </div>
                  </div>
                  <div className="col-span-10 lg:col-span-4">
                    <span className="text-[22px] lg:text-[26px] font-black tracking-tight text-dark-3 leading-tight group-hover:text-primary transition-colors duration-200">
                      {s.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-3 lg:hidden">
                      {s.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold tracking-wide border rounded-full px-2.5 py-0.5" style={{ color:'rgba(14,14,40,0.3)', borderColor:'rgba(14,14,40,0.08)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block col-span-4">
                    <p className="text-[15px] text-dark-3/45 leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {s.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold tracking-wide border rounded-full px-2.5 py-0.5" style={{ color:'rgba(14,14,40,0.3)', borderColor:'rgba(14,14,40,0.08)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:flex col-span-1 justify-end">
                    <svg className="service-arrow w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-32 mt-12" style={{ background:'#09091A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-blob blob-1" style={{ width:500, height:400, background:'rgba(139,92,246,0.18)', top:'-20%', left:'-5%' }} />
          <div className="mesh-blob blob-2" style={{ width:350, height:350, background:'rgba(249,115,22,0.14)', bottom:'-20%', right:'5%' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="label tracking-widest mb-4 block" style={{ color:'rgba(255,255,255,0.3)' }}>Not sure which service?</span>
            <h2 className="text-[clamp(32px,4vw,56px)] font-black tracking-[-0.04em] text-white leading-none">
              Let&apos;s talk it through.<br />
              <span className="font-display italic" style={{ background:'linear-gradient(135deg,#A78BFA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>No pressure.</span>
            </h2>
          </div>
          <Link href="/contact" className="btn-primary px-10 py-4 text-[15px] shrink-0">
            Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
