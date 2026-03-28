import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Property Marketing & Print',
  description: 'Real estate print design — listing presentations, sales brochures, for-sale signage, floor plan graphics, and open house materials that sell properties faster.',
  alternates: { canonical: 'https://ibfinity.com/services/print' },
}

const items = [
  { num: '01', title: 'Listing Presentations', desc: 'Pitch decks and printed presentation booklets that win listings — property overviews, comparative market analysis layouts, and agent pitch pages that make a compelling case before you say a word.' },
  { num: '02', title: 'Sales Brochures & Flyers', desc: 'Property brochures, DL flyers, and letterbox drop campaigns. Every format print-ready with correct bleeds, margins, and CMYK profiles for any commercial printer.' },
  { num: '03', title: 'For-Sale & Hoarding Signs', desc: 'Yard signs, corflute boards, street banners, and large-format hoarding panels. Designed to be legible at speed and on-brand at every scale.' },
  { num: '04', title: 'Floor Plan Graphics', desc: 'Clean, professional floor plan redraws from architect drawings or hand sketches — branded, dimensioned, and ready for brochures, portals, and print.' },
  { num: '05', title: 'Open House Materials', desc: 'Open home schedules, inspection packs, feature sheets, and display signage. Everything buyers take away, beautifully branded and print-ready.' },
]

const deliverables = [
  'Print-ready files (CMYK, PDF with bleed)',
  'Listing presentation deck (print + digital)',
  'Property brochure template (branded)',
  'DL / A5 flyer layouts',
  'For-sale sign / yard board design',
  'Hoarding panel artwork',
  'Floor plan graphic (redrawn & branded)',
  'Open house schedule & feature sheet',
  'Source files (AI, INDD)',
  'Printer-ready export package',
]

export default function PrintPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-white pt-48 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-3" style={{ width:560, height:500, background:'rgba(16,185,129,0.09)', top:'-15%', right:'-5%' }} />
          <div className="mesh-blob blob-1" style={{ width:380, height:380, background:'rgba(139,92,246,0.07)', bottom:'-10%', left:'5%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.07) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <Link href="/services" className="inline-flex items-center gap-2 text-dark-3/35 text-[13px] font-semibold mb-8 hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <span className="label label-p tracking-widest mb-5 block">Service 03</span>
          <h1 className="text-[clamp(52px,6.5vw,92px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 mb-6">
            Property Marketing<br />
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#10B981,#8B5CF6,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>& Print.</span>
          </h1>
          <p className="text-[17px] text-dark-3/45 max-w-[480px] leading-relaxed font-light">
            Every print touchpoint that moves a property — from the listing presentation to the for-sale sign on the kerb.
          </p>
        </div>
      </section>

      <section className="py-32 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="label label-p tracking-widest mb-4 block">What We Design</span>
              <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
                Print that sells<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#10B981,#8B5CF6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>property.</span>
              </h2>
            </div>
          </div>
          <div className="border-t border-black/6">
            {items.map((s) => (
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
              <span className="label label-p tracking-widest mb-4 block">Every File You Need</span>
              <h2 className="text-[clamp(36px,4vw,52px)] font-black tracking-[-0.04em] text-dark-3 leading-none mb-6">
                Print-ready.<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#10B981,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Every time.</span>
              </h2>
              <p className="text-dark-3/45 text-[15px] leading-relaxed mb-8">Every file delivered with correct bleeds, CMYK colour profiles, and printer specs so nothing comes back wrong.</p>
              <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
                Get a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-black/5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background:'linear-gradient(135deg,#10B981,#059669)' }}>
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
          <div className="mesh-blob blob-3" style={{ width:500, height:400, background:'rgba(16,185,129,0.16)', top:'-20%', left:'-5%' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-[clamp(36px,5vw,72px)] font-black tracking-[-0.04em] text-white leading-none mb-8">
            Ready to market your<br />
            <span className="font-display italic" style={{ background:'linear-gradient(135deg,#34D399,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>next listing?</span>
          </h2>
          <Link href="/contact" className="btn-primary inline-flex px-10 py-4 text-[15px]">
            Start Your Print Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
