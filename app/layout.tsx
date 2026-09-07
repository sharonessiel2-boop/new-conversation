import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geist = localFont({ src: '../public/fonts/GeistVF.woff', variable: '--font-geist', display: 'swap', weight: '100 900' })

export const metadata: Metadata = {
  title: 'EcoFundMe — From a post. To a better tomorrow.',
  description: 'Community-powered climate crowdfunding. Raise support on X, fund progress through milestone governance, and put released funds to work with campaign payments and African fiat outlets.',
  icons: { icon: '/images/ecofundme-logo.png', apple: '/images/ecofundme-logo.png' },
  openGraph: { title: 'EcoFundMe — Small acts. Real-world impact.', description: 'A post sparks support. Milestones build trust. Communities make change.', images: ['/images/community-solar.png'] },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#040B08', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`bg-background ${geist.variable}`}><body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
