import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import MarqueeStrip from '@/components/MarqueeStrip'
import BentoFeatures from '@/components/BentoFeatures'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <BentoFeatures />
      <MarqueeStrip />
      <Stats />
      <Portfolio />
      <Testimonials />
    </div>
  )
}
