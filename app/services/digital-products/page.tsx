import Link from 'next/link'

const products = [
  { num: '01', title: 'Editable Planners', desc: 'Daily, weekly, monthly, and yearly planners in Canva. Fully customisable — buyers can personalise them without any design skills.' },
  { num: '02', title: 'Business Templates', desc: 'Proposals, presentations, invoices, and media kits. Professional templates that save buyers hours and look better than anything they\'d make themselves.' },
  { num: '03', title: 'Social Media Packs', desc: 'Post templates, story covers, highlight icons, and reels frames. Cohesive sets that make any brand look instantly polished on Instagram.' },
  { num: '04', title: 'SVG & Clipart', desc: 'Cut files for Cricut, sublimation-ready PNGs, and vector clipart sets. Designed for the crafting market with unlimited commercial licences.' },
  { num: '05', title: 'Printable Wall Art', desc: 'Instant-download art for home decor — motivational quotes, botanical prints, and abstract designs that sell consistently year-round.' },
]

const deliverables = [
  'Canva template files (editable links)','PDF / PNG print-ready exports',
  'SVG & EPS vector files','Commercial use licence',
  'Etsy listing images + mockups','Keyword-optimised product descriptions',
  'Multiple size variants','Buyer instruction guide',
]

export default function DigitalProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-white pt-48 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-1" style={{ width:560, height:500, background:'rgba(249,115,22,0.11)', top:'-15%', right:'-5%' }} />
          <div className="mesh-blob blob-2" style={{ width:380, height:380, background:'rgba(139,92,246,0.08)', bottom:'-10%', left:'5%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.07) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <Link href="/services" className="inline-flex items-center gap-2 text-dark-3/35 text-[13px] font-semibold mb-8 hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <span className="label label-p tracking-widest mb-5 block">Service 04</span>
          <h1 className="text-[clamp(52px,6.5vw,92px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 mb-6">
            Etsy Digital<br />
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#F97316,#FB923C,#8B5CF6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Products.</span>
          </h1>
          <p className="text-[17px] text-dark-3/45 max-w-[480px] leading-relaxed font-light">
            High-converting Canva templates and digital downloads — engineered for Etsy marketplace success from day one.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
              <span className="text-amber-600 text-[12px] font-bold">★ #1 in Category</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="text-emerald-700 text-[12px] font-bold">500+ Downloads</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="label label-p tracking-widest mb-4 block">Product Types</span>
              <h2 className="text-[clamp(36px,4vw,56px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
                Designed to sell.<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#F97316,#8B5CF6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>From day one.</span>
              </h2>
            </div>
          </div>
          <div className="border-t border-black/6">
            {products.map((s) => (
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
              <span className="label label-p tracking-widest mb-4 block">What&apos;s Included</span>
              <h2 className="text-[clamp(36px,4vw,52px)] font-black tracking-[-0.04em] text-dark-3 leading-none mb-6">
                Ready to list<br />
                <span className="font-display italic" style={{ background:'linear-gradient(135deg,#F97316,#8B5CF6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>on Etsy.</span>
              </h2>
              <p className="text-dark-3/45 text-[15px] leading-relaxed mb-8">Every product comes with everything you need to list, sell, and deliver — including mockup images and listing copy.</p>
              <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
                Get a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-black/5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background:'linear-gradient(135deg,#F97316,#EA580C)' }}>
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
          <div className="mesh-blob blob-1" style={{ width:500, height:400, background:'rgba(249,115,22,0.2)', top:'-20%', right:'-5%' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-[clamp(36px,5vw,72px)] font-black tracking-[-0.04em] text-white leading-none mb-8">
            Ready to launch your<br />
            <span className="font-display italic" style={{ background:'linear-gradient(135deg,#FB923C,#A78BFA)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Etsy store?</span>
          </h2>
          <Link href="/contact" className="btn-primary inline-flex px-10 py-4 text-[15px]">
            Start Your Digital Product
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
