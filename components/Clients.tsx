'use client'

const clients = ['Emaar','DAMAC','Nakheel','RE/MAX','Coldwell Banker','Savills','JLL','Knight Frank','Bayut','Sotheby\'s Realty']

export default function Clients() {
  const doubled = [...clients, ...clients]
  return (
    <section className="bg-white py-12 overflow-hidden border-y border-black/5">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 mb-7">
        <span className="label" style={{ color:'rgba(14,14,40,0.25)', letterSpacing:'0.12em' }}>
          Trusted by real estate professionals worldwide
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background:'linear-gradient(90deg,#fff,transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background:'linear-gradient(270deg,#fff,transparent)' }} />
        <div className="flex animate-marquee whitespace-nowrap select-none">
          {doubled.map((name, i) => (
            <div key={i} className="inline-flex items-center shrink-0 mx-10 group cursor-default">
              <span className="text-[15px] font-semibold tracking-tight transition-colors duration-200"
                style={{ color:'rgba(14,14,40,0.18)' }}
                onMouseEnter={e => (e.currentTarget.style.color='rgba(139,92,246,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color='rgba(14,14,40,0.18)')}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
