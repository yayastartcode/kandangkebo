import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/common/FloatingWhatsApp'
import Home from './pages/Home'
import Kegiatan from './pages/Kegiatan'
import './App.css'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-800 selection:text-white flex flex-col relative">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kegiatan" element={<Kegiatan />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
