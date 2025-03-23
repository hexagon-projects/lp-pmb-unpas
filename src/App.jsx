import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from './pages/Home';
import Fakultas from "./pages/Fakultas";
import Jalur from "./pages/Jalur";
import Fasilitas from "./pages/Fasilitas";
import Mahasiswa from "./pages/Mahasiswa";
import FakultasDetail from "./pages/FakultasDetail";
import ProgramStudi from "./pages/ProgramStudi";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import ArtikelDetail from "./pages/ArtikelDetail";
import Artikel from "./pages/Artikel";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artikel' element={<Artikel />} />
          <Route path='/artikel/:slug' element={<ArtikelDetail />} />
          <Route path='/fakultas' element={<Fakultas />} />
          <Route path='/fakultas/:slug' element={<FakultasDetail />} />
          <Route path='/program-studi/:slug' element={<ProgramStudi />} />
          <Route path='/jalur' element={<Jalur />} />
          <Route path='/fasilitas' element={<Fasilitas />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/kontak' element={<Contact />} />
          <Route path='/mahasiswa-dan-alumni' element={<Mahasiswa />} />
        </Routes>
      </Router>
    </HelmetProvider>

  )
}

export default App