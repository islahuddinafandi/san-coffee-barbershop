import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bark-900">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bark-900/60 via-transparent to-bark-900/80"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">
          Coffee & Barbershop
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-cream-50 leading-tight mb-6">
          SAN
        </h1>
        <p className="text-cream-200 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Ngopi enak, rambut rapi — semua di satu tempat.
          Tempat nongkrong yang bikin betah.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-gold text-bark-900 px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-cream-200 transition-colors duration-200"
          >
            Lihat Menu
          </Link>
          <Link
            href="/lokasi"
            className="border border-cream-100 text-cream-100 px-8 py-3 text-sm font-medium tracking-wide uppercase hover:border-gold hover:text-gold transition-colors duration-200"
          >
            Temukan Lokasi
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-400">
        <p className="text-xs tracking-widest uppercase">Scroll</p>
        <div className="w-px h-10 bg-gold/50 animate-pulse" />
      </div>
    </section>
  )
}