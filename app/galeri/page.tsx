import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Galeri — SAN Coffee & Barbershop',
  description: 'Momen dan suasana SAN Coffee & Barbershop.',
}

const photos = [
  { src: '/images/galeri/1.jpg', alt: 'Suasana kafe SAN' },
  { src: '/images/galeri/2.jpg', alt: 'Barista menyeduh kopi' },
  { src: '/images/galeri/3.jpg', alt: 'Barber sedang bekerja' },
  { src: '/images/galeri/4.jpg', alt: 'Kopi susu SAN' },
  { src: '/images/galeri/5.jpg', alt: 'Interior SAN' },
  { src: '/images/galeri/6.jpg', alt: 'Hasil potong rambut' },
  { src: '/images/galeri/7.jpg', alt: 'Meja bar SAN' },
  { src: '/images/galeri/8.jpg', alt: 'Cappuccino art' },
  { src: '/images/galeri/9.jpg', alt: 'Pelanggan SAN' },
]

export default function GaleriPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-bark-900 py-20 text-center">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
          Momen kami
        </p>
        <h1 className="font-serif text-5xl text-cream-50">Galeri</h1>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative overflow-hidden break-inside-avoid bg-cream-100 group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}