import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700'],
})

export const metadata: Metadata = {
  title: 'Nexus Realty Group | AI-Powered Real Estate Insights',
  description:
    'Leveraging predictive AI to help you buy or sell with confidence. Get your free 2026 property value forecast from Nexus Realty Group.',
  keywords: [
    'real estate',
    'AI',
    'property forecast',
    'buy home',
    'sell home',
    'Nexus Realty Group',
    'predictive analytics',
  ],
  openGraph: {
    title: 'Nexus Realty Group | The Future of Local Living',
    description:
      'Leveraging predictive AI to help you buy or sell with confidence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Nexus Realty Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Realty Group | AI-Powered Real Estate',
    description: 'Get your free 2026 property value forecast.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1A1B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
