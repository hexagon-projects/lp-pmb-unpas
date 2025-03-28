import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useGoogleAnalytics, { logPageView } from './utils/analitics'
import MetaPixelListener from './utils/MetaPixelListener'

import Home from './pages/Home'
import Fakultas from './pages/Fakultas'
import Jalur from './pages/Jalur'
import Fasilitas from './pages/Fasilitas'
import Mahasiswa from './pages/Mahasiswa'
import FakultasDetail from './pages/FakultasDetail'
import ProgramStudi from './pages/ProgramStudi'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import ArtikelDetail from './pages/ArtikelDetail'
import Artikel from './pages/Artikel'
import Prestasi from './pages/Prestasi'
import Mitra from './pages/Mitra'
import Testimoni from './pages/Testimoni'
import Dukungan from './pages/Dukungan'

function App() {
  const { trackingId } = useGoogleAnalytics();

  return (
    <HelmetProvider>
      <Router>
        {trackingId && <GAListener />}
        <MetaPixelListener />
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/program-studi/:slug"
          element={
            <PageWrapper>
              <ProgramStudi />
            </PageWrapper>
          }
        />
        <Route
          path="/jalur"
          element={
            <PageWrapper>
              <Jalur />
            </PageWrapper>
          }
        />
        <Route
          path="/artikel"
          element={
            <PageWrapper>
              <Artikel />
            </PageWrapper>
          }
        />
        <Route
          path="/artikel/:slug"
          element={
            <PageWrapper>
              <ArtikelDetail />
            </PageWrapper>
          }
        />
        <Route
          path="/fakultas"
          element={
            <PageWrapper>
              <Fakultas />
            </PageWrapper>
          }
        />
        <Route
          path="/fakultas/:slug"
          element={
            <PageWrapper>
              <FakultasDetail />
            </PageWrapper>
          }
        />
        <Route
          path="/fasilitas"
          element={
            <PageWrapper>
              <Fasilitas />
            </PageWrapper>
          }
        />
        <Route
          path="/faq"
          element={
            <PageWrapper>
              <Faq />
            </PageWrapper>
          }
        />
        <Route
          path="/kontak"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/prestasi"
          element={
            <PageWrapper>
              <Prestasi />
            </PageWrapper>
          }
        />
        <Route
          path="/mitra"
          element={
            <PageWrapper>
              <Mitra />
            </PageWrapper>
          }
        />
        <Route
          path="/testimoni"
          element={
            <PageWrapper>
              <Testimoni />
            </PageWrapper>
          }
        />
        <Route
          path="/dukungan"
          element={
            <PageWrapper>
              <Dukungan />
            </PageWrapper>
          }
        />
        <Route
          path="/mahasiswa-dan-alumni"
          element={
            <PageWrapper>
              <Mahasiswa />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}

const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(true);

    document.querySelectorAll('iframe[src*="youtube.com"]').forEach(iframe => {
      iframe.src = iframe.src.replace('youtube-nocookie.com', 'youtube.com');
    });
  }, [location]);

  return null;
};

export default App