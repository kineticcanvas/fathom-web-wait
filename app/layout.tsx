import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Fathom - Client Intelligence That Drives Sales',
  description: 'Know what impacts your clients. Surface opportunities. Accelerate sales. Built for consultants who lead with insight.',
  keywords: 'consulting, intelligence, client signals, sales intelligence, opportunity identification',
  openGraph: {
    title: 'Fathom - Client Intelligence That Drives Sales',
    description: 'Surface the signals that create client opportunities.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://tryfathom.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Plausible Analytics Script - Self-hosted */}
        <script defer data-domain="tryfathom.ai" src="https://analytics.tryfathom.ai/js/script.js"></script>
        {/* Waitlister Script */}
        <Script src="https://waitlister.me/js/embed.js" strategy="afterInteractive" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}