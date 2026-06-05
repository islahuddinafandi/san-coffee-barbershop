import type { Metadata } from 'next'
import MenuSection from '@/components/MenuSection'

export const metadata: Metadata = {
  title: 'Menu — SAN Coffee & Barbershop',
  description: 'Pilihan menu kopi, non-kopi, makanan, dan layanan barbershop kami.',
}

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-bark-900 py-20 text-center">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
          Apa yang kami sajikan
        </p>
        <h1 className="font-serif text-5xl text-cream-50">Menu & Layanan</h1>
      </div>
      <MenuSection />
    </div>
  )
}