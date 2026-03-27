const testimonials = [
  {
    quote: 'Our brand went from another generic agency to the luxury real estate specialist in our city. Ibfinity understood the market before we even finished explaining it.',
    author: 'Sarah Al-Mansouri', role: 'Managing Director, The Grand Agency',
    result: '40% more qualified leads', initials: 'SA', color: '#8B5CF6',
  },
  {
    quote: 'The listing presentations and brochures ibfinity designed became our competitive edge. Buyers walk in and trust us before we even speak — that\'s the power of a premium brand.',
    author: 'Ahmed Khalil', role: 'CEO, Pinnacle Development',
    result: '3× faster deal closures', initials: 'AK', color: '#F97316',
  },
  {
    quote: 'Every social post, every sign, every brochure — all cohesive and unmistakably premium. Our competitors still wonder what changed. We just smile.',
    author: 'Maya Thornton', role: 'Regional Director, RE/MAX Gulf',
    result: '+280% social engagement', initials: 'MT', color: '#06B6D4',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end reveal">
          <div className="lg:col-span-6">
            <span className="label label-p tracking-widest">Client Stories</span>
            <h2 className="mt-4 text-[clamp(40px,5vw,64px)] font-black tracking-[-0.04em] text-dark-3 leading-none">
              Work that{' '}
              <span className="font-display italic"
                style={{
                  background:'linear-gradient(135deg,#8B5CF6,#F97316)',
                  WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                }}>speaks.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-center gap-3">
            <div className="flex -space-x-2">
              {testimonials.map(t => (
                <div key={t.initials}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-dark-3/40 text-xs">5.0 · 100+ reviews</div>
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="border-t border-black/6">
          {testimonials.map((t, i) => (
            <div key={i} className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-black/6 transition-colors duration-200 hover:bg-[#F9F7FF] -mx-8 lg:-mx-16 px-8 lg:px-16 reveal reveal-delay-${i+1}`}>
              <div className="lg:col-span-3 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-dark-3 text-[14px]">{t.author}</div>
                  <div className="text-dark-3/35 text-[12px] mt-0.5">{t.role}</div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[18px] lg:text-[20px] leading-relaxed font-light" style={{ color:'rgba(14,14,40,0.7)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="lg:col-span-3 flex items-center lg:justify-end">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-emerald-700 text-xs font-semibold">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
