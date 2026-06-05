import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'SAN Coffee & Barbershop',
  description: 'Ngopi enak, rambut rapi — semua di satu tempat.',
  keywords: ['kopi', 'barbershop', 'san coffee', 'san barbershop'],
  openGraph: {
    title: 'SAN Coffee & Barbershop',
    description: 'Ngopi enak, rambut rapi — semua di satu tempat.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-cream-50 text-bark-800 antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}