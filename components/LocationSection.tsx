import { locations } from '@/lib/locations'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="bg-bark-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Kunjungi Kami</p>
          <h2 className="font-serif text-4xl text-cream-50">Lokasi Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="border border-bark-700 p-8 hover:border-gold transition-colors duration-300"
            >
              <h3 className="font-serif text-xl text-cream-50 mb-6">{loc.name}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <p className="text-sm text-cream-300 leading-relaxed">
                    {loc.address}, {loc.city}
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-gold shrink-0" />
                  <p className="text-sm text-cream-300">{loc.hours}</p>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <p className="text-sm text-cream-300">{loc.phone}</p>
                </li>
              </ul>
              
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-cream-100 hover:border-cream-100 transition-colors duration-200"
              >
                {'Petunjuk Arah ->'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
