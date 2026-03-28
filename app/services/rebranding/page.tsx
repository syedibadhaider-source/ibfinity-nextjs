import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agency & Firm Identity',
  description: 'Complete brand systems for real estate agencies and brokerage firms — visual identity, brand guidelines, signage standards, and team onboarding kit built from the ground up.',
  alternates: { canonical: 'https://ibfinity.com/services/rebranding' },
}

const steps = [
  { num: '01', title: 'Brand Audit', desc: 'We dissect your current brand — what works, what doesn\'t, and why. Competitor analysis across your market reveals the white space your agency can own.' },
  { num: '02', title: 'Positioning Strategy', desc: 'We define your agency\'s market position, brand personality, and promise — whether that\'s luxury residential, commercial, or high-volume sales. This strategy document becomes your north star.' },
  { num: '03', title: 'Visual Identity Design', desc: 'New logomark, colour system, and typography crafted for agency scale — designed to look authoritative on office signage, team business cards, listings, and digital channels.' },
  { num: '04', title: 'Signage & Collateral Standards', desc: 'We produce your signage system: for-sale boards, hoarding templates, office fascia guidelines, and vehicle livery — consistent across every agent and every property.' },
  { num: '05', title: 'Team Onboarding Kit', desc: 'A complete toolkit so every agent joins with the right assets from day one — business cards, email signatures, social profiles, listing templates, and a brand guidelines PDF.' },
]

const deliverables = [
  'Brand audit report',
  'Positioning & strategy document',
  'Logomark (primary, secondary & icon)',
  'Colour system + hex/CMYK/RGB specs',
  'Typography system (2–3 fonts)',
  'Brand guidelines PDF (20+ pages)',
  'Signage standards (for-sale, hoarding, office)',
  'Team business card template',
  'Email signature template',
  'Social media profile kit (IG, LinkedIn, Facebook)',
  'Listing graphic template (Canva)',
  'Agent onboarding checklist',
]

export default function RebrandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-white pt-48 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-2" style={{ width:580, height:500, background:'rgba(59,130,246,0.10)', top:'-15%', right:'-5%' }} />
          <div className="mesh-blob blob-3" style={{ width:380, height:380, background:'rgba(139,92,246,0.08)', bottom:'-10%', left:'5%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.07) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <Link href="/services" className="inline-flex items-center gap-2 text-dark-3/35 text-[13px] font-semibold mb-8 hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <span className="label label-p tracking-widest mb-5 block">Service 02</span>
          <h1 className="text-[clamp(52px,6.5vw,92px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 mb-6">
            Agency & Firm<br />
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#3B82F6,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Identity.</span>
          </h1>
          <p className="text-[17px] text-dark-3/45 max-w-[480px] leading-relaxed font-light">
            A complete brand system for your agency — from strategy and visual identity to signage standards and agent onboarding kits.
          </p>
        </div>
      </section>

      <section className="py-32 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="label label-p tracking-widest mb-4 block">The Process</span>
              <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
                Strategy. Identity.<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#3B82F6,#8B5CF6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>System.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <div className="text-dark-3/25 text-[13px]">Average timeline</div>
              <div className="text-dark-3 font-black text-2xl tracking-tight">3–5 weeks</div>
            </div>
          </div>
          <div className="border-t border-black/6">
            {steps.map((s) => (
              <div key={s.num} className="service-row">
                <div className="grid grid-cols-12 gap-4 items-start py-9 px-2">
                  <div className="col-span-1"><span className="service-num label font-mono text-sm">{s.num}</span></div>
                  <div className="col-span-10 lg:col-span-3"><span className="text-[19px] font-black tracking-tight text-dark-3">{s.title}</span></div>
                  <div className="col-span-12 lg:col-span-7 lg:col-start-5"><p className="text-[15px] text-dark-3/45 leading-relaxed">{s.desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#F7F6FC]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="label label-p tracking-widest mb-4 block">What You Get</span>
              <h2 className="text-[clamp(36px,4vw,52px)] font-black tracking-[-0.04em] text-dark-3 leading-none mb-6">
                Everything included.<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#3B82F6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Start to finish.</span>
              </h2>
              <p className="text-dark-3/45 text-[15px] leading-relaxed mb-8">Every deliverable is production-ready and designed to scale across your entire team from day one.</p>
              <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
                Get a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-black/5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background:'linear-gradient(135deg,#3B82F6,#1D4ED8)' }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-dark-3 text-[15px]">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28" style={{ background:'#09091A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-blob blob-2" style={{ width:500, height:400, background:'rgba(59,130,246,0.18)', top:'-20%', right:'-5%' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-[clamp(36px,5vw,72px)] font-black tracking-[-0.04em] text-white leading-none mb-8">
            Ready to build your<br />
            <span className="font-display italic" style={{ background:'linear-gradient(135deg,#60A5FA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>agency identity?</span>
          </h2>
          <Link href="/contact" className="btn-primary inline-flex px-10 py-4 text-[15px]">
            Start Your Agency Brand
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
