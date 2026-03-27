'use client'

import Link from 'next/link'

const info = [
  {
    label: 'Email',
    value: 'info@ibfinity.com',
    href: 'mailto:info@ibfinity.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Consultation',
    value: 'Free — no commitment',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const steps = ['Discovery Call', 'Proposal & Timeline', 'Design & Iterate', 'Final Delivery']

const fieldCls = "w-full px-4 py-3.5 bg-white border border-black/10 rounded-xl text-dark-3 text-sm placeholder-dark-3/25 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
const labelCls = "block text-dark-3/50 text-[11px] font-semibold uppercase tracking-widest mb-2"

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero header ── */}
      <section className="relative overflow-hidden bg-white pt-48 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-1" style={{ width:550, height:550, background:'rgba(139,92,246,0.10)', top:'-20%', right:'-5%' }} />
          <div className="mesh-blob blob-3" style={{ width:350, height:350, background:'rgba(249,115,22,0.08)', bottom:'-10%', left:'10%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.07) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <span className="label label-p tracking-widest mb-5 block">Get In Touch</span>
          <h1 className="text-[clamp(48px,6.5vw,92px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 mb-6">
            Let&apos;s build something<br />
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#8B5CF6,#A78BFA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              remarkable.
            </span>
          </h1>
          <p className="text-[17px] text-dark-3/45 font-light max-w-[440px] leading-relaxed">
            Have a project in mind? Tell us about it. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Form + info ── */}
      <section className="py-20 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left — info */}
            <div className="lg:col-span-4 space-y-4">
              {info.map((item) => (
                <div key={item.label} className="bento-card bento-card-glow p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-dark-3/35 text-[10px] font-semibold uppercase tracking-widest mb-0.5">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="text-dark-3 font-semibold text-[14px] hover:text-primary transition-colors">{item.value}</a>
                      : <div className="text-dark-3 font-semibold text-[14px]">{item.value}</div>
                    }
                  </div>
                </div>
              ))}

              {/* Process */}
              <div className="bento-card bento-card-glow p-6 mt-2">
                <div className="label label-muted tracking-widest mb-5">Our Process</div>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                        style={{ background: 'linear-gradient(135deg,#8B5CF6,#7C3AED)' }}>
                        {i + 1}
                      </div>
                      <span className="text-dark-3/55 text-[14px]">{step}</span>
                      {i < steps.length - 1 && (
                        <div className="ml-auto w-px h-3 bg-black/8 hidden" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social proof */}
              <div className="bento-card p-6" style={{ background:'linear-gradient(135deg,#0D0530,#1B0A5E)', border:'1px solid rgba(139,92,246,0.2)' }}>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/60 text-[13px] leading-relaxed italic">&ldquo;Best investment we made for our brand. Delivered beyond expectations.&rdquo;</p>
                <div className="text-white/30 text-[11px] mt-2">— Lisa R., TechStart Inc.</div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-8">
              <div className="bento-card p-8 lg:p-10">
                <h2 className="text-[22px] font-black text-dark-3 tracking-tight mb-8">Tell us about your project</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>First Name</label>
                      <input type="text" placeholder="Jane" className={fieldCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Last Name</label>
                      <input type="text" placeholder="Smith" className={fieldCls} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Email</label>
                      <input type="email" placeholder="jane@company.com" className={fieldCls} required />
                    </div>
                    <div>
                      <label className={labelCls}>Company</label>
                      <input type="text" placeholder="Acme Inc." className={fieldCls} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Service Needed</label>
                      <select className={fieldCls} style={{ color: 'rgba(14,14,40,0.55)' }}>
                        <option value="">Select a service</option>
                        <option>Brand Identity Design</option>
                        <option>Complete Rebranding</option>
                        <option>Print &amp; Packaging</option>
                        <option>Etsy Digital Products</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Budget Range</label>
                      <select className={fieldCls} style={{ color: 'rgba(14,14,40,0.55)' }}>
                        <option value="">Select budget</option>
                        <option>Under $500</option>
                        <option>$500 – $1,000</option>
                        <option>$1,000 – $2,500</option>
                        <option>$2,500 – $5,000</option>
                        <option>$5,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Project Details</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your brand, your goals, and what you're looking to achieve..."
                      className={fieldCls + ' resize-none'}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-[15px] justify-center">
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
