import { MetadataRoute } from 'next'

const SITE_URL = 'https://ibfinity.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                                   lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/about`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services/branding`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/rebranding`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/print`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/digital-products`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/portfolio`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${SITE_URL}/contact`,                      lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.9 },
  ]
}
