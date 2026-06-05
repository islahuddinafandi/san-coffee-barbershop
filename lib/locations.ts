export type Location = {
  id: string
  name: string
  address: string
  city: string
  hours: string
  phone: string
  mapsUrl: string
}

export const locations: Location[] = [
  {
    id: 'pusat',
    name: 'SAN Coffee & Barbershop — Pusat',
    address: 'Perumahan BSR Blok F23 Jl. Gunung Selamet Pondok Benda, Pamulang',
    city: 'Tangerang Selatan',
    hours: 'Setiap hari, 08.00 – 22.00 WIB',
    phone: '+62 812-3456-7890',
    mapsUrl: 'https://maps.google.com',
  },
  {
    id: 'cabang-1',
    name: 'SAN Coffee & Barbershop — Cabang 1',
    address: 'Jl. Contoh No. 2, Kel. Contoh, Kec. Contoh',
    city: 'Jakarta Timur',
    hours: 'Setiap hari, 09.00 – 21.00 WIB',
    phone: '+62 812-3456-7891',
    mapsUrl: 'https://maps.google.com',
  },
]