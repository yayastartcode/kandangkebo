import { kegiatanAkbar, kegiatanLainnya } from '@/data/kegiatan'
import { Helmet } from 'react-helmet-async'

export default function Kegiatan() {
    return (
        <>
            <Helmet>
                <title>Kegiatan & Aksi | Komunitas Kandang Kebo</title>
                <meta name="description" content="Informasi terlengkap 58 kegiatan rutin, blusukan akbar, pameran kesejarahan, dan aksi sosial dari Komunitas Kandang Kebo Yogyakarta." />
                <link rel="canonical" href="https://kandangkebo.org/kegiatan" />
            </Helmet>
            <div className="py-20 md:py-28 bg-stone-50">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-black uppercase text-stone-900 inline-block border-b-4 border-amber-800 pb-2">
                            Kegiatan Komunitas
                        </h1>
                        <p className="mt-6 text-xl font-medium text-stone-600 max-w-3xl mx-auto">
                            Berbagai kegiatan rutin, blusukan akbar, diskusi, dan aksi sosial dalam upaya menapak jejak leluhur dan menjaga warisan budaya.
                        </p>
                    </div>

                    {/* Daftar Kegiatan Akbar */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-bold uppercase tracking-widest text-amber-800 mb-8 border-l-4 border-amber-800 pl-4 bg-amber-50 p-2">
                            Diskusi & Blusukan Akbar Terjadwal
                        </h2>
                        <div className="space-y-4">
                            {kegiatanAkbar.map((item, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 shadow-sm border border-stone-200 flex gap-4 md:gap-6 hover:shadow-md transition-shadow">
                                    <div className="text-2xl md:text-4xl font-black text-amber-500 opacity-50 shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div className="text-lg font-medium text-stone-800 whitespace-pre-wrap leading-relaxed">
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Daftar Kegiatan Lainnya */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-widest text-amber-800 mb-8 border-l-4 border-amber-800 pl-4 bg-amber-50 p-2">
                            Kegiatan Rutin & Aksi Lainnya
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {kegiatanLainnya.map((item, i) => (
                                <div key={i} className="bg-stone-900 border-t-4 border-stone-600 p-6 text-stone-50 hover:border-amber-500 transition-colors">
                                    <p className="text-lg leading-relaxed whitespace-pre-wrap font-medium">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
