import type { Metadata } from 'next'
import LocationSection from '@/components/LocationSection'

export const metadata: Metadata = {
  title: 'Lokasi — SAN Coffee & Barbershop',
  description: 'Temukan SAN Coffee & Barbershop terdekat dari kamu.',
}

export default function LokasiPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-bark-900 py-20 text-center">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
          Kunjungi kami
        </p>
        <h1 className="font-serif text-5xl text-cream-50">Lokasi</h1>
      </div>
      <LocationSection />
    </div>
  )
}