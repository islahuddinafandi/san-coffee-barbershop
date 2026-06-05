'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',        label: 'Beranda' },
  { href: '/menu',    label: 'Menu' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/lokasi',  label: 'Lokasi' },
  { href: '/galeri',  label: 'Galeri' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bark-900/90 backdrop-blur-sm border-b border-bark-700">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        <Link href="/" className="font-serif text-xl text-gold tracking-widest uppercase">
          SAN
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-gold'
                  : 'text-cream-100 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-cream-100 hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-bark-900 border-t border-bark-700 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-wide py-1 transition-colors ${
                pathname === link.href
                  ? 'text-gold'
                  : 'text-cream-100 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}