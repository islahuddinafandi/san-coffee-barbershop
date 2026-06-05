'use client'

import { useState } from 'react'
import Image from 'next/image'
import { menuItems, categories } from '@/lib/menu'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('semua')

  const filtered = activeCategory === 'semua'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section className="bg-cream-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Pilihan Kami</p>
          <h2 className="font-serif text-4xl text-bark-800">Menu & Layanan</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 text-sm tracking-wide border transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-bark-800 text-cream-50 border-bark-800'
                  : 'bg-transparent text-bark-700 border-bark-400 hover:border-bark-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-cream-200 group hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-cream-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg text-bark-800">{item.name}</h3>
                  <span className="text-gold font-medium text-sm whitespace-nowrap">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-sm text-bark-700/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}