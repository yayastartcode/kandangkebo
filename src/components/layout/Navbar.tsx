import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="bg-white text-stone-900 py-4 sticky top-0 z-50 shadow-md border-b-4 border-amber-800">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-3 text-xl md:text-2xl font-black uppercase tracking-widest text-stone-900 hover:text-amber-800 transition-colors">
                    <img src="/images/kebolg.png" alt="Logo Kandang Kebo" className="h-12 w-auto object-contain" />
                    Kandang Kebo
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-amber-800 hover:text-amber-600 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 font-bold uppercase text-sm tracking-wide text-stone-700">
                    <Link to="/" className="hover:text-amber-800 transition-colors">Beranda</Link>
                    <a href="/#profil" className="hover:text-amber-800 transition-colors">Profil</a>
                    <a href="/#visimisi" className="hover:text-amber-800 transition-colors">Visi & Misi</a>
                    <a href="/#galeri" className="hover:text-amber-800 transition-colors">Galeri</a>
                    <Link to="/kegiatan" className="hover:text-amber-800 transition-colors">Kegiatan</Link>
                </nav>

                {/* Mobile Navigation Dropdown */}
                {isOpen && (
                    <nav className="absolute top-full left-0 right-0 bg-white border-b-4 border-amber-800 flex flex-col items-center py-6 gap-6 font-bold uppercase text-sm tracking-wide md:hidden shadow-xl">
                        <Link to="/" onClick={closeMenu} className="text-stone-800 hover:text-amber-800 transition-colors">Beranda</Link>
                        <a href="/#profil" onClick={closeMenu} className="text-stone-800 hover:text-amber-800 transition-colors">Profil</a>
                        <a href="/#visimisi" onClick={closeMenu} className="text-stone-800 hover:text-amber-800 transition-colors">Visi & Misi</a>
                        <a href="/#galeri" onClick={closeMenu} className="text-stone-800 hover:text-amber-800 transition-colors">Galeri</a>
                        <Link to="/kegiatan" onClick={closeMenu} className="text-stone-800 hover:text-amber-800 transition-colors">Kegiatan</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}
