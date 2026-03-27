'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

type View = 'home' | 'email' | 'sent'

function playPopSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(520, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.06)
    osc.frequency.exponentialRampToValueAtTime(620, ctx.currentTime + 0.14)
    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.03)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.3)
  } catch {}
}

export default function ChatWidget() {
  const [open, setOpen]       = useState(false)
  const [view, setView]       = useState<View>('home')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [pulse, setPulse]     = useState(false)
  const formRef               = useRef<HTMLFormElement>(null)
  const hasAutoOpened         = useRef(false)

  const openPanel = useCallback(() => {
    setOpen(true)
    playPopSound()
  }, [])

  // Auto-open after 4 s on first visit (once per session)
  useEffect(() => {
    if (hasAutoOpened.current) return
    const timer = setTimeout(() => {
      if (!hasAutoOpened.current) {
        hasAutoOpened.current = true
        // Pulse the button first, then open
        setPulse(true)
        setTimeout(() => {
          setPulse(false)
          openPanel()
        }, 600)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [openPanel])

  function togglePanel() {
    if (open) {
      setOpen(false)
      setTimeout(() => setView('home'), 300)
    } else {
      openPanel()
    }
  }

  function openWhatsApp() {
    window.open(
      'https://wa.me/923451180314?text=Hi%20Ibfinity%2C%20I%27d%20like%20to%20discuss%20a%20project.',
      '_blank'
    )
  }

  async function handleEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const fd = new FormData(e.currentTarget)
    fd.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '')
    fd.append('subject', 'New message from ibfinity.com chat widget')
    fd.append('from_name', 'Ibfinity Chat Widget')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      })
      const data = await res.json()
      if (data.success) {
        setView('sent')
        formRef.current?.reset()
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Bubble */}
      <button
        onClick={togglePanel}
        aria-label="Chat with us"
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[999] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${
          pulse ? 'scale-125' : 'scale-100'
        }`}
        style={{
          background: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
          boxShadow: '0 8px 32px rgba(124,58,237,0.5), 0 0 0 0 rgba(124,58,237,0.4)',
        }}
      >
        {/* Ripple ring when pulse */}
        {pulse && (
          <span className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(124,58,237,0.35)' }} />
        )}
        {open ? (
          <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-24 right-3 sm:right-6 sm:bottom-28 z-[998] w-[calc(100vw-24px)] sm:w-[400px] max-w-[400px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(14,14,40,0.22),0_8px_32px_rgba(124,58,237,0.12)] transition-all duration-300 origin-bottom-right ${
          open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
        style={{ background: '#FFFFFF' }}
      >
        {/* Header */}
        <div className="px-7 py-6" style={{ background: 'linear-gradient(135deg,#7C3AED,#5B21B6)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-[16px]">Chat with us</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  <span className="text-white/60 text-[12px]">Typically replies in minutes</span>
                </div>
              </div>
            </div>
            <button
              onClick={togglePanel}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">

          {/* Home view */}
          {view === 'home' && (
            <div className="space-y-3.5">
              {/* Greeting bubble */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg,#7C3AED,#5B21B6)' }}>
                  IB
                </div>
                <div className="rounded-2xl rounded-tl-sm px-4 py-3 text-[14px] leading-relaxed"
                  style={{ background: 'rgba(124,58,237,0.07)', color: '#0E0E28' }}>
                  Hey! 👋 How can we help you today? We're a real estate design studio — reach us instantly below.
                </div>
              </div>

              {/* WhatsApp */}
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: 'rgba(37,211,102,0.07)', borderColor: 'rgba(37,211,102,0.25)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#25D366' }}>
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.886a.5.5 0 00.613.613l6.041-1.475A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.8-.535-5.376-1.463l-.384-.23-3.986.974.994-3.986-.253-.404A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[#0E0E28] font-bold text-[15px]">WhatsApp</div>
                  <div className="text-[#0E0E28]/40 text-[13px]">Quick reply, opens WhatsApp</div>
                </div>
                <svg className="w-4 h-4 text-[#0E0E28]/20 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Email */}
              <button
                onClick={() => setView('email')}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: 'rgba(124,58,237,0.06)', borderColor: 'rgba(124,58,237,0.18)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg,#7C3AED,#5B21B6)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[#0E0E28] font-bold text-[15px]">Send an Email</div>
                  <div className="text-[#0E0E28]/40 text-[13px]">info@ibfinity.com</div>
                </div>
                <svg className="w-4 h-4 text-[#0E0E28]/20 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Email form */}
          {view === 'email' && (
            <div>
              <button onClick={() => setView('home')}
                className="flex items-center gap-1.5 text-[12px] font-semibold mb-5 transition-colors hover:opacity-70"
                style={{ color: 'rgba(14,14,40,0.35)' }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <form ref={formRef} onSubmit={handleEmail} className="space-y-3">
                <input type="hidden" name="to" value="info@ibfinity.com" />
                <input
                  type="text" name="name" required placeholder="Your name"
                  className="w-full px-4 py-3.5 rounded-xl text-[14px] outline-none transition-all"
                  style={{
                    background: 'rgba(14,14,40,0.04)',
                    border: '1px solid rgba(14,14,40,0.1)',
                    color: '#0E0E28',
                  }}
                />
                <input
                  type="email" name="email" required placeholder="Your email"
                  className="w-full px-4 py-3.5 rounded-xl text-[14px] outline-none transition-all"
                  style={{
                    background: 'rgba(14,14,40,0.04)',
                    border: '1px solid rgba(14,14,40,0.1)',
                    color: '#0E0E28',
                  }}
                />
                <textarea
                  name="message" required placeholder="How can we help?" rows={4}
                  className="w-full px-4 py-3.5 rounded-xl text-[14px] outline-none resize-none transition-all"
                  style={{
                    background: 'rgba(14,14,40,0.04)',
                    border: '1px solid rgba(14,14,40,0.1)',
                    color: '#0E0E28',
                  }}
                />
                {error && <p className="text-red-500 text-[12px]">{error}</p>}
                <button
                  type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-xl text-white text-[15px] font-bold transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg,#7C3AED,#5B21B6)' }}
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          )}

          {/* Sent view */}
          {view === 'sent' && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(124,58,237,0.1)' }}>
                <svg className="w-8 h-8" fill="none" stroke="#7C3AED" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[#0E0E28] font-bold text-[18px] mb-2">Message sent!</div>
              <p className="text-[#0E0E28]/45 text-[14px] leading-relaxed">
                We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setView('home')}
                className="mt-6 px-8 py-3 rounded-xl text-white text-[14px] font-semibold transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#5B21B6)' }}
              >
                Done
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 pb-4 text-center">
          <span className="text-[11px]" style={{ color: 'rgba(14,14,40,0.2)' }}>
            Powered by ibfinity.com
          </span>
        </div>
      </div>
    </>
  )
}
