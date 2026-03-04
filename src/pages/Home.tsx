import { MapPin, Facebook, Users, BookOpen, Clock, HeartHandshake, ShieldCheck, TreePine, MessageSquare, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Beranda | Komunitas Kandang Kebo</title>
                <meta name="description" content="Komunitas pelestari budaya independen, mewadahi siapapun tanpa melihat latar belakang, disatukan oleh rasa cinta kepada kebudayaan, peninggalan leluhur, dan sejarah Nusantara." />
                <link rel="canonical" href="https://kandangkebo.org/" />
            </Helmet>
            {/* Hero Section */}
            <section className="bg-amber-800 text-stone-50 py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
                        Menapak Jejak <br className="hidden md:block" /> Leluhur Nusantara
                    </h2>
                    <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
                        Komunitas pelestari warisan budaya independen, mewadahi siapapun tanpa melihat latar belakang, disatukan oleh rasa cinta kepada kebudayaan dan peninggalan leluhur.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://www.facebook.com/groups/KANDANGKEBO/" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-none inline-flex flex-row items-center justify-center gap-2 transition-colors uppercase tracking-wider">
                            <Facebook className="w-5 h-5" />
                            Grup Facebook
                        </a>
                        <Link to="/kegiatan" className="bg-stone-50 hover:bg-stone-200 text-amber-900 font-bold py-3 px-8 rounded-none transition-colors uppercase tracking-wider text-center">
                            Kegiatan Kami
                        </Link>
                    </div>
                </div>
            </section>

            {/* Profil Singkat */}
            <section id="profil" className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-stone-900 border-b-4 border-amber-800 inline-block pb-2">
                                Tentang Kami
                            </h2>
                            <p className="text-lg leading-relaxed text-stone-700 font-medium">
                                Kami hadir sejak tahun <strong>2015</strong> secara informal dan diakui secara legal berbadan hukum pada Januari 2019. Kami adalah tempat berkumpulnya orang-orang yang mencintai segala hal berbau kebudayaan.
                            </p>
                            <p className="text-lg leading-relaxed text-stone-700">
                                Keanggotaan Kandang Kebo bebas tanpa melihat latar belakang. Kami mendanai seluruh kegiatan kami secara mandiri, <strong>tidak terikat lembaga</strong>, dan murni independen tanpa unsur politik praktis.
                            </p>
                        </div>
                        <div className="bg-stone-900 p-8 text-stone-50 shadow-xl relative">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-800 -mr-4 -mt-4 hidden md:block"></div>
                            <h3 className="text-xl font-bold uppercase mb-6 text-amber-500 border-b-2 border-stone-600 pb-2">Identitas Komunitas</h3>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block uppercase text-sm tracking-wider opacity-80 mb-1">Basecamp</strong>
                                        <span className="font-medium">Ngalian, Widodomartani, Ngemplak, Sleman, Yogyakarta</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Briefcase className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block uppercase text-sm tracking-wider opacity-80 mb-1">Legalitas</strong>
                                        <span className="font-medium">Keputusan Menkumham No. AHU-0000196.AH.0107 Thn 2019.<br />Nomor Induk Kebudayaan (NIK): 2.10.2020.744</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Users className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block uppercase text-sm tracking-wider opacity-80 mb-1">Sifat Terbuka</strong>
                                        <span className="font-medium">Paseduluran Saklawase (Persaudaraan Selamanya)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filosofi Section */}
            <section id="filosofi" className="bg-stone-200 py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-stone-900 mb-8">
                        Filosofi <span className="text-amber-800">"Kandang Kebo"</span>
                    </h2>
                    <div className="text-left space-y-6 text-lg text-stone-800 font-medium bg-white p-8 md:p-12 shadow-md border-t-8 border-amber-800">
                        <p>
                            Nama ini diambil karena kesadaran kami bahwa kami adalah sekumpulan orang bodoh yang dalam filosofi Jawa dikatakan <strong>"Plonga-plongo koyo kebo"</strong> (Hanya toleh-toleh, tidak tahu apa-apa seperti kerbau). Sering dianalogikan dungu dan bisa "dicocok hidungnya".
                        </p>
                        <p>
                            Namun nyatanya, <strong>Kerbau adalah pekerja keras</strong>. Di masa Neolithik, kerbau adalah binatang mulia yang berkedudukan penting dan berhubungan erat dengan kesuburan, penolak bala, dan pekerja ulet dari masa ke masa.
                        </p>
                        <div className="bg-amber-100 p-6 border-l-4 border-amber-800 text-amber-900 italic font-bold">
                            "Meskipun dianggap plonga-plongo, kami adalah pekerja keras yang terus belajar tanpa henti untuk mengajak masyarakat mencintai cagar budaya dan melestarikannya secara independen. Kami adalah orang <strong>merdeka</strong>."
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section id="visimisi" className="py-20 md:py-28 bg-stone-900 text-stone-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-SM font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">Arah & Tujuan</h2>
                        <h3 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 border-b-2 border-amber-800 inline-block pb-4">
                            Visi & Misi
                        </h3>
                        <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-tight text-stone-200">
                            "Menjadi Komunitas Pelestari Warisan Budaya Agar Dapat Diwariskan Kepada Generasi Mendatang dan Memperkuat Identitas Budaya Bangsa."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Melestarikan Warisan Budaya",
                                desc: "Merawat, mendokumentasikan, dan melindungi warisan budaya untuk memastikan keberlanjutannya.",
                                icon: <ShieldCheck className="w-8 h-8 mb-4 text-amber-500" />
                            },
                            {
                                title: "Edukasi & Kesadaran",
                                desc: "Meningkatkan pemahaman dan apresiasi masyarakat tentang warisan budaya melalui berbagai program.",
                                icon: <BookOpen className="w-8 h-8 mb-4 text-amber-500" />
                            },
                            {
                                title: "Kemitraan & Kolaborasi",
                                desc: "Menjalin kerjasama lintas sektor untuk memperkuat upaya dan memperluas dampak pelestarian.",
                                icon: <HeartHandshake className="w-8 h-8 mb-4 text-amber-500" />
                            },
                            {
                                title: "Pemberdayaan Komunitas",
                                desc: "Dukungan pelatihan untuk komunitas lokal mengelola dan melestarikan warisan budaya.",
                                icon: <Users className="w-8 h-8 mb-4 text-amber-500" />
                            },
                            {
                                title: "Penyebarluasan Pengetahuan",
                                desc: "Memanfaatkan media digital dan publikasi nyata demi menyebarkan pengetahuan kepada masyarakat luas.",
                                icon: <MessageSquare className="w-8 h-8 mb-4 text-amber-500" />
                            },
                            {
                                title: "Pelestarian Berkelanjutan",
                                desc: "Menerapkan praktik pelestarian berkelanjutan dan inovatif agar tetap dinikmati generasi nanti.",
                                icon: <TreePine className="w-8 h-8 mb-4 text-amber-500" />
                            },
                            {
                                title: "Dialog & Refleksi",
                                desc: "Menyediakan ruang diskusi isu terkait cagar budaya membangun pemahaman dan erat antar komunitas.",
                                icon: <Clock className="w-8 h-8 mb-4 text-amber-500" />
                            }
                        ].map((misi, i) => (
                            <Card key={i} className="bg-stone-800 border-none rounded-none text-stone-50 hover:bg-stone-700 transition-colors">
                                <CardContent className="p-8">
                                    {misi.icon}
                                    <h4 className="text-xl font-bold uppercase mb-3">{misi.title}</h4>
                                    <p className="text-stone-300 font-medium leading-relaxed">{misi.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Susunan Pengurus */}
            <section id="pengurus" className="py-20 md:py-28 bg-stone-50">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-stone-900 inline-block border-b-4 border-amber-800 pb-2">
                            Susunan Pengurus
                        </h2>
                        <p className="mt-4 text-lg font-bold text-stone-600 uppercase tracking-widest">Periode 2024</p>
                    </div>

                    <div className="bg-stone-900 p-1 text-stone-50">
                        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-stone-700">
                            <div className="p-6 border-r border-stone-700">
                                <span className="block text-sm uppercase text-amber-500 mb-1 font-bold">Ketua I</span>
                                <span className="text-lg font-bold">Maria Tri Widayati</span>
                            </div>
                            <div className="p-6 md:border-r border-stone-700">
                                <span className="block text-sm uppercase text-amber-500 mb-1 font-bold">Ketua II</span>
                                <span className="text-lg font-bold">Suharno</span>
                            </div>
                            <div className="p-6 border-r border-stone-700 border-t md:border-t-0">
                                <span className="block text-sm uppercase text-amber-500 mb-1 font-bold">Sekretaris I</span>
                                <span className="text-lg font-bold">Anna Tri Astuti</span>
                            </div>
                            <div className="p-6 border-t md:border-t-0">
                                <span className="block text-sm uppercase text-amber-500 mb-1 font-bold">Sekretaris II</span>
                                <span className="text-lg font-bold">Sanyoto</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-b border-stone-700">
                            <div className="p-6 border-r border-stone-700">
                                <span className="block text-sm uppercase text-amber-500 mb-1 font-bold">Bendahara I</span>
                                <span className="text-lg font-bold">Achid Zamroji</span>
                            </div>
                            <div className="p-6">
                                <span className="block text-sm uppercase text-amber-500 mb-1 font-bold">Bendahara II</span>
                                <span className="text-lg font-bold">Aminah</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { role: "Dokumentasi", names: ["Mohammad Windu Karsa", "Azizah Hakim"] },
                            { role: "Humas", names: ["Mimbar Pamungkas P.", "Minta Harsana"] },
                            { role: "Lapangan", names: ["Al'Manye Sumaryanto", "Adnan Rusdy", "Kaleb Hendy Setyawan"] },
                            { role: "Konsumsi", names: ["Yvonne", "Ibnu Ibeh"] },
                            { role: "Literasi", names: ["Ancah Yosi Cahyono", "Dwi Ony Raharjo"] },
                            { role: "Perlengkapan", names: ["Agus Cahyono", "Mei Anjar Wintolo"] },
                            { role: "Publikasi", names: ["Agung Kristianto", "Saptono Nugroho"] }
                        ].map((seksi, i) => (
                            <div key={i} className="bg-white p-6 border-l-4 border-amber-800 shadow-sm">
                                <h4 className="text-amber-800 font-black uppercase text-sm tracking-wider mb-2">Seksi {seksi.role}</h4>
                                <ul className="text-lg font-semibold text-stone-800">
                                    {seksi.names.map((name, idx) => (
                                        <li key={idx} className="mb-1">{name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
