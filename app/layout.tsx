import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import RevealObserver from '@/components/RevealObserver'
import ChatWidget from '@/components/ChatWidget'

const SITE_URL = 'https://ibfinity.com'

export const viewport: Viewport = {
  themeColor: '#8B5CF6',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ibfinity — Real Estate Branding & Graphic Design Studio',
    template: '%s | Ibfinity',
  },
  description:
    'Premium graphic design and branding studio built exclusively for real estate agents, brokers, developers & agencies. Logos, print, social media & web — 11+ years, 1,200+ clients.',
  keywords: [
    'real estate branding',
    'real estate graphic design',
    'real estate logo design',
    'agent branding',
    'broker branding',
    'real estate marketing',
    'property marketing design',
    'real estate web design',
    'ibfinity',
  ],
  authors: [{ name: 'Ibfinity', url: SITE_URL }],
  creator: 'Ibfinity',
  publisher: 'Ibfinity',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Ibfinity',
    title: 'Ibfinity — Real Estate Branding & Graphic Design Studio',
    description:
      'Premium graphic design and branding studio built exclusively for real estate professionals. 11+ years, 1,200+ clients.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ibfinity — Real Estate Design Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibfinity — Real Estate Branding & Graphic Design Studio',
    description: 'Premium branding & graphic design exclusively for real estate pros.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ibfinity',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Premium graphic design and branding studio built exclusively for real estate professionals.',
  email: 'info@ibfinity.com',
  foundingDate: '2013',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 3 },
  serviceType: 'Graphic Design & Branding',
  areaServed: 'Worldwide',
  knowsAbout: ['Real Estate Branding', 'Logo Design', 'Property Marketing', 'Social Media Design'],
  sameAs: ['https://www.fiverr.com/ibfinity', 'https://www.upwork.com/ag/ibfinity'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <RevealObserver />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
