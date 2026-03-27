import Link from 'next/link'

const values = [
  { num: '01', title: 'Real Estate Only', desc: 'We work exclusively with real estate professionals. No generalist work. We know your market, your buyers, and what it takes to stand out in it.' },
  { num: '02', title: 'Design with Purpose', desc: 'Every logo, every brochure, every website we build has one job — help you win more business. We design with measurable intent.' },
  { num: '03', title: 'Premium, Always', desc: 'Your brand competes with the best in your market. We build identities that look more expensive than your competition — because they are.' },
  { num: '04', title: 'True Partnership', desc: 'We\'re not a print shop. We become invested in your growth, understand your market positioning, and create work that reflects where you\'re going.' },
]

const stats = [
  { num: '11+',   label: 'Years of Experience',  sub: 'Since 2013' },
  { num: '2,570+',  label: 'Deliverables Shipped',  sub: 'Identity, web & print' },
  { num: '1,200+', label: 'Happy Clients',          sub: 'Fiverr & Upwork verified' },
  { num: '100%',  label: 'Real Estate Focused',    sub: 'Our only industry' },
]

const team = [
  { initials: 'IB', name: 'Ibrahim', role: 'Founder & Creative Director', color: '#8B5CF6' },
  { initials: 'AS', name: 'Aisha S.', role: 'Brand Strategist', color: '#F97316' },
  { initials: 'KM', name: 'Kai M.', role: 'Senior Designer', color: '#06B6D4' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-white">
        {/* Mesh blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-1" style={{ width:600, height:600, background:'rgba(139,92,246,0.11)', top:'-15%', right:'-5%' }} />
          <div className="mesh-blob blob-2" style={{ width:450, height:450, background:'rgba(249,115,22,0.09)', bottom:'-10%', left:'-5%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.08) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-16 pt-48 pb-20">
          <span className="label label-p tracking-widest block mb-6">Our Story</span>
          <h1 className="text-[clamp(52px,7vw,100px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 max-w-4xl mb-8">
            The design studio built{' '}
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#8B5CF6,#A78BFA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              for real estate.
            </span>
          </h1>
          <p className="text-[18px] text-dark-3/45 max-w-[520px] leading-relaxed font-light">
            Ibfinity is a 100% real estate focused graphic design and web studio. We do one industry — and we do it better than anyone else.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-32 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="label label-p tracking-widest mb-4 block">Our Mission</span>
              <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-0.04em] text-dark-3 leading-none mb-8">
                Graphic design &amp;<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>web for real estate.</span>
              </h2>
              <div className="space-y-5 text-dark-3/50 text-[16px] leading-relaxed">
                <p>We are a boutique graphic design and web studio that works exclusively with real estate professionals — agents, brokers, developers, and agencies. Every service, every template, every website we build is engineered for the real estate market.</p>
                <p>From agent personal branding to luxury development campaigns — if it involves real estate and design, it&apos;s what we do. Full creative investment, deep industry knowledge, and meticulous execution on every project.</p>
              </div>
            </div>
            {/* Stats grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bento-card bento-card-glow p-8">
                  <div className="text-[52px] font-black tracking-tighter leading-none mb-3"
                    style={{ background:'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                    {s.num}
                  </div>
                  <div className="text-dark-3 font-bold text-[15px] leading-tight">{s.label}</div>
                  <div className="text-dark-3/30 text-[12px] mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-32 bg-[#F7F6FC]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="label label-p tracking-widest mb-4 block">What We Stand For</span>
              <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
                Principles that guide<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>every project.</span>
              </h2>
            </div>
          </div>
          <div className="border-t border-black/6">
            {values.map((v) => (
              <div key={v.num} className="service-row">
                <div className="grid grid-cols-12 gap-4 items-start py-9 px-2 gap-y-2">
                  <div className="col-span-1">
                    <span className="service-num label font-mono text-sm">{v.num}</span>
                  </div>
                  <div className="col-span-11 lg:col-span-4">
                    <span className="text-[18px] lg:text-[22px] font-black tracking-tight text-dark-3">{v.title}</span>
                  </div>
                  <div className="col-span-12 lg:col-span-6 lg:col-start-6">
                    <p className="text-[15px] leading-relaxed text-dark-3/45">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <span className="label label-p tracking-widest mb-4 block">The Team</span>
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
              Small team.<br />
              <span className="font-display italic" style={{ background:'linear-gradient(135deg,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Outsized results.</span>
            </h2>
            <p className="hidden lg:block text-dark-3/40 text-[15px] max-w-xs text-right leading-relaxed">
              We keep our team lean on purpose. Every client gets senior attention, not interns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {team.map((t) => (
              <div key={t.initials} className="bento-card bento-card-glow p-8 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-black text-dark-3 text-[17px]">{t.name}</div>
                  <div className="text-dark-3/40 text-[13px] mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-32" style={{ background:'#09091A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-blob blob-1" style={{ width:600, height:400, background:'rgba(139,92,246,0.2)', top:'-20%', left:'-5%' }} />
          <div className="mesh-blob blob-2" style={{ width:400, height:400, background:'rgba(249,115,22,0.15)', bottom:'-20%', right:'5%' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <span className="label tracking-widest mb-6 block" style={{ color:'rgba(255,255,255,0.3)' }}>Ready to Begin?</span>
          <h2 className="text-[clamp(40px,5.5vw,80px)] font-black tracking-[-0.04em] text-white leading-none mb-8">
            Let&apos;s make your brand<br />
            <span className="font-display italic" style={{ background:'linear-gradient(135deg,#A78BFA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              impossible to ignore.
            </span>
          </h2>
          <Link href="/contact" className="btn-primary inline-flex px-10 py-4 text-[15px]">
            Get Your Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
