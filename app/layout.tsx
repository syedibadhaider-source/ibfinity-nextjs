import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import RevealObserver from '@/components/RevealObserver'

export const metadata: Metadata = {
  title: 'Ibfinity.com — Premium Branding & Creative Studio',
  description: 'We craft premium brand identities, digital products, and visual systems that help ambitious businesses stand out and grow.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CustomCursor />
        <RevealObserver />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
