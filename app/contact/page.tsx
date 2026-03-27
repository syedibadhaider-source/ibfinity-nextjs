'use client'

import { useState } from 'react'
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
    label: 'WhatsApp',
    value: '+92 345 118 0314',
    href: 'https://wa.me/923451180314?text=Hi%20Ibfinity%2C%20I%27d%20like%20to%20discuss%20a%20project.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.886a.5.5 0 00.613.613l6.041-1.475A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.8-.535-5.376-1.463l-.384-.23-3.986.974.994-3.986-.253-.404A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
]

const steps = ['Discovery Call', 'Proposal & Timeline', 'Design & Iterate', 'Final Delivery']

const fieldCls = "w-full px-4 py-3.5 bg-white border border-black/10 rounded-xl text-dark-3 text-sm placeholder-dark-3/25 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
const labelCls = "block text-dark-3/50 text-[11px] font-semibold uppercase tracking-widest mb-2"

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    fd.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '')
    fd.append('subject', 'New project enquiry from ibfinity.com')
    fd.append('from_name', 'Ibfinity Contact Form')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero header ── */}
      <section className="relative overflow-hidden bg-white pt-36 sm:pt-48 pb-16 sm:pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="mesh-blob blob-1" style={{ width:550, height:550, background:'rgba(139,92,246,0.10)', top:'-20%', right:'-5%' }} />
          <div className="mesh-blob blob-3" style={{ width:350, height:350, background:'rgba(249,115,22,0.08)', bottom:'-10%', left:'10%' }} />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(14,14,40,0.07) 1px,transparent 1px)', backgroundSize:'32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <span className="label label-p tracking-widest mb-5 block">Get In Touch</span>
          <h1 className="text-[clamp(40px,6.5vw,92px)] font-black tracking-[-0.045em] leading-[0.93] text-dark-3 mb-6">
            Let&apos;s build something<br />
            <span className="font-display italic" style={{ background:'linear-gradient(125deg,#8B5CF6,#A78BFA,#F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              remarkable.
            </span>
          </h1>
          <p className="text-[16px] sm:text-[17px] text-dark-3/45 font-light max-w-[440px] leading-relaxed">
            Have a project in mind? Tell us about it. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Form + info ── */}
      <section className="py-16 sm:py-20 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

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
                      ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-dark-3 font-semibold text-[14px] hover:text-primary transition-colors">{item.value}</a>
                      : <div className="text-dark-3 font-semibold text-[14px]">{item.value}</div>
                    }
                  </div>
                </div>
              ))}

              {/* Process */}
              <div className="bento-card bento-card-glow p-6 mt-2">
                <div className="label label-muted tracking-widest mb-5 text-dark-3/40">Our Process</div>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                        style={{ background: 'linear-gradient(135deg,#8B5CF6,#7C3AED)' }}>
                        {i + 1}
                      </div>
                      <span className="text-dark-3/55 text-[14px]">{step}</span>
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
                <div className="text-white/30 text-[11px] mt-2">— Verified Fiverr Review</div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-8">
              <div className="bento-card p-6 sm:p-8 lg:p-10">

                {status === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: 'rgba(139,92,246,0.1)' }}>
                      <svg className="w-8 h-8" fill="none" stroke="#8B5CF6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-[22px] font-black text-dark-3 mb-2">Message sent!</h2>
                    <p className="text-dark-3/50 text-[15px]">We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')}
                      className="btn-primary mt-8 px-8 py-3 text-[14px]">
                      Send another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-[20px] sm:text-[22px] font-black text-dark-3 tracking-tight mb-8">Tell us about your project</h2>
                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>First Name</label>
                          <input type="text" name="first_name" placeholder="Jane" required className={fieldCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Last Name</label>
                          <input type="text" name="last_name" placeholder="Smith" className={fieldCls} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Email *</label>
                          <input type="email" name="email" placeholder="jane@company.com" required className={fieldCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Company</label>
                          <input type="text" name="company" placeholder="Acme Real Estate" className={fieldCls} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Service Needed</label>
                          <select name="service" className={fieldCls}>
                            <option value="">Select a service</option>
                            <option>Agent &amp; Broker Branding</option>
                            <option>Agency &amp; Firm Identity</option>
                            <option>Property Marketing &amp; Print</option>
                            <option>Social Media &amp; Digital</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelCls}>Budget Range</label>
                          <select name="budget" className={fieldCls}>
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
                        <label className={labelCls}>Project Details *</label>
                        <textarea
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell us about your brand, your goals, and what you're looking to achieve..."
                          className={fieldCls + ' resize-none'}
                        />
                      </div>
                      {status === 'error' && (
                        <p className="text-red-500 text-[13px]">Something went wrong. Please try again or email us directly.</p>
                      )}
                      <button type="submit" disabled={status === 'sending'}
                        className="btn-primary w-full py-4 text-[15px] justify-center disabled:opacity-60">
                        {status === 'sending' ? 'Sending…' : 'Send Message'}
                        {status !== 'sending' && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        )}
                      </button>
                    </form>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
