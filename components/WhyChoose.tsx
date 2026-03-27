import Link from 'next/link'

const services = [
  {
    num:'01', title:'Brand Identity Design',
    desc:'Logos, visual systems, typography, colour, brand voice — everything a brand needs to exist with conviction.',
    tags:['Strategy','Logomark','Guidelines','Typography'],
    href:'/services/branding',
  },
  {
    num:'02', title:'Complete Rebranding',
    desc:'Audit, reposition, and transform. We take what exists and make it worthy of the company you\'re becoming.',
    tags:['Audit','Repositioning','Identity Refresh'],
    href:'/services/rebranding',
  },
  {
    num:'03', title:'Print & Packaging',
    desc:'Physical brand touchpoints designed with the same precision as digital — because first impressions are tactile.',
    tags:['Packaging','Stationery','Collateral','Signage'],
    href:'/services/print',
  },
  {
    num:'04', title:'Etsy Digital Products',
    desc:'High-converting digital downloads — planners, templates, and graphics engineered for Etsy marketplace success.',
    tags:['Canva','Templates','Planners','SVG/PDF'],
    href:'/services/digital-products',
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end reveal">
          <div className="lg:col-span-7">
            <span className="label label-p tracking-widest">What We Do</span>
            <h2 className="mt-4 text-[clamp(40px,5vw,64px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
              Every service built for{' '}
              <span className="font-display italic"
                style={{
                  background:'linear-gradient(135deg,#8B5CF6,#F97316)',
                  WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                }}>impact.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[16px] leading-relaxed max-w-md lg:ml-auto" style={{ color:'rgba(14,14,40,0.45)' }}>
              We don&apos;t offer everything. We offer the four things that most directly determine whether a brand succeeds or stalls.
            </p>
          </div>
        </div>

        {/* Rows */}
        <div className="border-t border-black/6">
          {services.map((s, i) => (
            <Link key={s.num} href={s.href} className="block service-row">
              <div className="grid grid-cols-12 gap-4 items-start py-9 px-2">
                <div className="col-span-2 lg:col-span-1 pt-1">
                  <span className="service-num label font-mono text-sm">{s.num}</span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <span className="text-[22px] lg:text-[26px] font-black tracking-tight leading-tight"
                    style={{ color:'#0E0E28' }}>
                    {s.title}
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-3 lg:hidden">
                    {s.tags.map(t => (
                      <span key={t} className="text-[10px] font-semibold tracking-wide border rounded-full px-2.5 py-0.5"
                        style={{ color:'rgba(14,14,40,0.3)',borderColor:'rgba(14,14,40,0.08)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:col-start-6">
                  <p className="text-[15px] leading-relaxed" style={{ color:'rgba(14,14,40,0.45)' }}>{s.desc}</p>
                  <div className="hidden lg:flex flex-wrap gap-1.5 mt-4">
                    {s.tags.map(t => (
                      <span key={t} className="text-[10px] font-semibold tracking-wide border rounded-full px-2.5 py-0.5"
                        style={{ color:'rgba(14,14,40,0.3)',borderColor:'rgba(14,14,40,0.08)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex lg:col-span-1 justify-end pt-1">
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
  )
}
