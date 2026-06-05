import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bark-900 border-t border-bark-700 text-cream-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <p className="font-serif text-2xl text-gold tracking-widest uppercase mb-3">SAN</p>
          <p className="text-sm text-cream-300 leading-relaxed">
            Coffee & Barbershop.<br />
            Tempat ngopi, tampil keren,<br />
            dan jadi diri sendiri.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-4">Halaman</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/',        label: 'Beranda' },
              { href: '/menu',    label: 'Menu' },
              { href: '/tentang', label: 'Tentang Kami' },
              { href: '/lokasi',  label: 'Lokasi' },
              { href: '/galeri',  label: 'Galeri' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-4">Ikuti Kami</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-gold transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-gold transition-colors">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-bark-700 text-xs text-cream-400 text-center">
        © {new Date().getFullYear()} SAN Coffee & Barbershop. All rights reserved.
      </div>
    </footer>
  )
}