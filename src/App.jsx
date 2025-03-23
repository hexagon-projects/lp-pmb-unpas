<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import useGoogleAnalytics, { logPageView } from "./utils/analitics";

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

function App() {
  return (
    <HelmetProvider>
      <Router>
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
import Prestasi from "./pages/Prestasi";
import Mitra from "./pages/Mitra";
import Testimoni from "./pages/Testimoni";

function App() {
  const trackingId = useGoogleAnalytics();

  return (
    <HelmetProvider>
      <Router>
        {trackingId && <GAListener />}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Route path='/prestasi' element={<Prestasi />} />
          <Route path='/mitra' element={<Mitra />} />
          <Route path='/testimoni' element={<Testimoni />} />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
          <Route path='/prestasi' element={<Prestasi />} />
          <Route path='/mitra' element={<Mitra />} />
          <Route path='/testimoni' element={<Testimoni />} />
>>>>>>> 8bbe4dc (First Commit)
=======
          <Route path='/prestasi' element={<Prestasi />} />
          <Route path='/mitra' element={<Mitra />} />
          <Route path='/testimoni' element={<Testimoni />} />
>>>>>>> origin/Budi
          <Route path='/mahasiswa-dan-alumni' element={<Mahasiswa />} />
        </Routes>
      </Router>
    </HelmetProvider>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  )
}

export default App
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
  );
}

const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

<<<<<<< HEAD
<<<<<<< HEAD
export default App;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
export default App;
>>>>>>> 8bbe4dc (First Commit)
=======
export default App;
>>>>>>> origin/Budi
