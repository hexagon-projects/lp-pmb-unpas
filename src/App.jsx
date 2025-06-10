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
import JalurDetail from './pages/JalurDetail'
import Utbk from './pages/jalur/Utbk'
import Pmdk from './pages/jalur/Pmdk'
import Usm from './pages/jalur/Usm'
import Utbk2 from './pages/jalur/Utbk2'
// import GTM from './GTM'
import Ods from './pages/jalur/Ods'
import Hafidz from './pages/jalur/Hafidz'
import Alumni from './pages/jalur/Alumni'
import Rpl from './pages/jalur/Rpl'
import Sma from './pages/jalur/Sma'
import PrestasiSeni from './pages/jalur/Prestasi'

function App() {
  const { trackingId } = useGoogleAnalytics();

  return (
    <HelmetProvider>
      <Router>
        {/* <GTM /> */}
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
      {/* <Route
        path="/jalurdetail"
        element={
          <PageWrapper>
            <JalurDetail />
          </PageWrapper>
        }
      /> */}
      <Route
        path="/jalur/:slug"
        element={
          <PageWrapper>
            <JalurDetail />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/utbk"
        element={
          <PageWrapper>
            <Utbk2 />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/pmdk"
        element={
          <PageWrapper>
            <Pmdk />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/usm"
        element={
          <PageWrapper>
            <Usm />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/ods"
        element={
          <PageWrapper>
            <Ods />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/hafidz"
        element={
          <PageWrapper>
            <Hafidz />
          </PageWrapper>
        }
      />

      <Route
        path="/jalur/rpl"
        element={
          <PageWrapper>
            <Rpl />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/alumni"
        element={
          <PageWrapper>
            <Alumni />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/sma-islam"
        element={
          <PageWrapper>
            <Sma />
          </PageWrapper>
        }
      />
      <Route
        path="/jalur/prestasi-seni"
        element={
          <PageWrapper>
            <PrestasiSeni />
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
  )
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div>
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