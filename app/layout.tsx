import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ex-Lux-Immo GmbH | Immobilien in Dillingen',
  description:
    'Ex-Lux-Immo GmbH – Ihr Immobilienpartner in Dillingen. Maklerdienst, Hausverwaltung, Kauf & Verkauf sowie Vermietung & Verpachtung aus einer Hand.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#4a6b4f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`light ${cormorant.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
