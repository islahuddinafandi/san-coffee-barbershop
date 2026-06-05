import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami — SAN Coffee & Barbershop',
  description: 'Kenali cerita di balik SAN Coffee & Barbershop.',
}

export default function TentangPage() {
  return (
    <div className="min-h-screen">

      <div className="bg-bark-900 py-20 text-center">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Cerita kami</p>
        <h1 className="font-serif text-5xl text-cream-50">Tentang SAN</h1>
      </div>

      <section className="max-w-3xl mx-auto px-4 py-20">
        <div className="space-y-8 text-bark-700 leading-relaxed">
          <p className="font-serif text-2xl text-bark-800">
            Lahir dari kebiasaan, besar karena komunitas.
          </p>
          <p>
            SAN Coffee & Barbershop bermula dari ide sederhana: bagaimana kalau
            ngopi dan potong rambut bisa dilakukan di tempat yang sama, nyaman,
            dan terjangkau?
          </p>
          <p>
            Kami percaya bahwa penampilan dan suasana hati saling berkaitan.
            Secangkir kopi yang enak bisa mengubah hari, begitu juga dengan
            rambut yang rapi. Di SAN, kami hadir untuk keduanya.
          </p>
          <p>
            Dengan barista dan barber berpengalaman, kami berkomitmen untuk
            memberikan pengalaman terbaik di setiap kunjungan. Bukan sekadar
            tempat — tapi ruang untuk jadi diri sendiri.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: '☕',
              title: 'Kopi Berkualitas',
              desc: 'Biji kopi pilihan, diseduh dengan teknik yang tepat.',
            },
            {
              icon: '✂️',
              title: 'Barber Handal',
              desc: 'Barber berpengalaman yang paham gaya dan tren.',
            },
            {
              icon: '🏡',
              title: 'Tempat Nyaman',
              desc: 'Suasana hangat yang bikin kamu betah berlama-lama.',
            },
          ].map((v) => (
            <div key={v.title} className="space-y-3">
              <p className="text-3xl">{v.icon}</p>
              <p className="font-serif text-lg text-bark-800">{v.title}</p>
              <p className="text-sm text-bark-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}