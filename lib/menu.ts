export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: 'kopi' | 'non-kopi' | 'barbershop' | 'makanan'
  image: string
}

export const menuItems: MenuItem[] = [
  {
    id: 'kopi-susu-san',
    name: 'Kopi Susu SAN',
    description: 'Espresso pilihan dengan susu segar dan sentuhan gula aren asli.',
    price: 28000,
    category: 'kopi',
    image: '/images/menu/kopi-susu-san.jpg',
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso double shot diencerkan dengan air panas, rasa bold & clean.',
    price: 22000,
    category: 'kopi',
    image: '/images/menu/americano.jpg',
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Espresso lembut dengan steamed milk dan milk foam tipis.',
    price: 28000,
    category: 'kopi',
    image: '/images/menu/latte.jpg',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Klasik Italia — espresso, steamed milk, dan foam tebal.',
    price: 28000,
    category: 'kopi',
    image: '/images/menu/cappuccino.jpg',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Perpaduan espresso dan coklat belgika dengan susu hangat.',
    price: 30000,
    category: 'kopi',
    image: '/images/menu/mocha.jpg',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Matcha premium Jepang dengan susu segar, segar dan creamy.',
    price: 30000,
    category: 'non-kopi',
    image: '/images/menu/matcha.jpg',
  },
  {
    id: 'coklat-panas',
    name: 'Coklat Panas',
    description: 'Dark chocolate pilihan, hangat dan kaya rasa.',
    price: 25000,
    category: 'non-kopi',
    image: '/images/menu/coklat.jpg',
  },
  {
    id: 'es-teh-tarik',
    name: 'Es Teh Tarik',
    description: 'Teh tarik susu ala SAN, dingin dan menyegarkan.',
    price: 18000,
    category: 'non-kopi',
    image: '/images/menu/teh-tarik.jpg',
  },
  {
    id: 'roti-bakar',
    name: 'Roti Bakar Coklat Keju',
    description: 'Roti tebal panggang dengan selai coklat dan keju leleh.',
    price: 20000,
    category: 'makanan',
    image: '/images/menu/roti-bakar.jpg',
  },
  {
    id: 'pisang-nugget',
    name: 'Pisang Nugget',
    description: 'Pisang goreng crispy dengan topping pilihan susu & meses.',
    price: 18000,
    category: 'makanan',
    image: '/images/menu/pisang-nugget.jpg',
  },
  {
    id: 'potong-rambut',
    name: 'Potong Rambut',
    description: 'Potong + styling oleh barber berpengalaman.',
    price: 35000,
    category: 'barbershop',
    image: '/images/menu/potong.jpg',
  },
  {
    id: 'cukur-jenggot',
    name: 'Cukur Jenggot',
    description: 'Shaving presisi dengan hot towel dan aftershave.',
    price: 25000,
    category: 'barbershop',
    image: '/images/menu/jenggot.jpg',
  },
  {
    id: 'paket-kombo',
    name: 'Paket Kombo SAN',
    description: 'Potong rambut + cukur jenggot + 1 kopi pilihan.',
    price: 75000,
    category: 'barbershop',
    image: '/images/menu/kombo.jpg',
  },
]

export const categories = [
  { value: 'semua',      label: 'Semua' },
  { value: 'kopi',       label: '☕ Kopi' },
  { value: 'non-kopi',   label: '🍵 Non-Kopi' },
  { value: 'makanan',    label: '🍞 Makanan' },
  { value: 'barbershop', label: '✂️ Barbershop' },
]