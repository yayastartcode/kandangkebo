import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="bg-stone-900 text-stone-50 py-6 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
                <Link to="/" onClick={closeMenu} className="text-xl md:text-2xl font-bold uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors">
                    Kandang Kebo
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-amber-500 hover:text-amber-400 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 font-semibold uppercase text-sm tracking-wide">
                    <Link to="/" className="hover:text-amber-500 transition-colors">Beranda</Link>
                    <a href="/#profil" className="hover:text-amber-500 transition-colors">Profil</a>
                    <a href="/#visimisi" className="hover:text-amber-500 transition-colors">Visi & Misi</a>
                    <Link to="/kegiatan" className="hover:text-amber-500 transition-colors">Kegiatan</Link>
                </nav>

                {/* Mobile Navigation Dropdown */}
                {isOpen && (
                    <nav className="absolute top-full left-0 right-0 bg-stone-900 border-t border-stone-800 flex flex-col items-center py-6 gap-6 font-semibold uppercase text-sm tracking-wide md:hidden shadow-xl">
                        <Link to="/" onClick={closeMenu} className="hover:text-amber-500 transition-colors">Beranda</Link>
                        <a href="/#profil" onClick={closeMenu} className="hover:text-amber-500 transition-colors">Profil</a>
                        <a href="/#visimisi" onClick={closeMenu} className="hover:text-amber-500 transition-colors">Visi & Misi</a>
                        <Link to="/kegiatan" onClick={closeMenu} className="hover:text-amber-500 transition-colors">Kegiatan</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}
