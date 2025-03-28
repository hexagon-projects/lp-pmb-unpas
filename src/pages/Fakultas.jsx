import { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import UserLayout from './layouts/UserLayout';
import CTASection from '../components/CTASection';
import FakultasService from '../fetching/fakultas';
import Button from '../components/Button';
import LogoText from '../components/LogoText';
import FakultasSection from '../views/home/FakultasSection';
import FakultasItem from '../components/FakultasItem';
import { FACULTIES, FACULTIES1, FACULTIES2, FACULTIES3 } from '../data/fakultas';
import Logo from '../assets/logo-outline.png';

const Fakultas = () => {
  const [fakultas, setFakultas] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const timestamp = Date.now();
      const fakultasData = await FakultasService.getAllFakultas(`?timestamp=${timestamp}`);
      setFakultas(fakultasData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load faculties data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRegisterClick = useCallback(() => {
    window.open('https://registrasi.unpas.ac.id/register', '_blank', 'noopener,noreferrer');
  }, []);

  useEffect(() => {
    // Preload logo image
    const img = new Image();
    img.src = Logo;

    // Fetch data and set hydration status
    const initialize = async () => {
      await fetchData();
      setIsHydrated(true);
    };

    initialize();
  }, [fetchData]);

  return (
    <UserLayout
      bgLayoutColor="bg-[#F3F3F3]"
      bgColor="bg-[#F3F3F3]"
      position="fixed"
      margin=""
      titleColor="text-black"
      paddingDekstop="md:py-3 md:px-3 lg:py-6 lg:px-6"
      paddingTop="lg:pt-30"
      type="fadeInUp"
      duration={0.5}
    >
      <Helmet>
        <title>Fakultas - Universitas Pasundan</title>
        <meta name="description" content="Daftar fakultas terakreditasi di Universitas Pasundan" />
        <link rel="preload" href={Logo} as="image" />
      </Helmet>

      <div className="relative p-4 md:px-10 lg:px-12 space-y-8 md:space-y-12 lg:space-y-20">
        {/* Hero Section */}
        <div className="relative">
          <div className="w-full fakultas_container">
            <div className="flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 bg-primary relative overflow-hidden fakultas_box lg:h-[55vh]">
              <div className="absolute -right-1/4 md:-right-30 lg:-right-4">
                <img
                  src={Logo}
                  alt="Logo Outline Unpas"
                  loading="eager"
                  width="auto"
                  height="auto"
                  className="h-[30vh] md:h-[45vh] lg:h-[55vh]"
                  fetchpriority="high"
                  decoding="sync"
                />
              </div>
              <div className="text-gray-800 px-4 py-14">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">7 Pilihan</h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Fakultas Terakreditasi</h2>
              </div>
              <div className="absolute top-4 left-4">
                <LogoText titleColor="text-black" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-10">
            <Button
              text="Daftar Sekarang"
              bgColor="bg-primary"
              hoverBgColor="hover:border-3 hover:border-white/50"
              onClick={handleRegisterClick}
              aria-label="Daftar sekarang di Universitas Pasundan"
            />
          </div>
        </div>

        {/* Faculties Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <p>Loading faculties...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-12 text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isHydrated ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  duration: 0.2
                }
              },
            }}
          >
            {fakultas.map((item, index) => (
              <FakultasItem
                key={item.id}
                image={item.image1}
                title={item.name}
                slug={item.slug}
                index={index}
                priority={index < 3 ? "high" : "low"}
              />
            ))}
          </motion.div>
        )}

        <FakultasSection
          faculties={FACULTIES}
          faculties1={FACULTIES1}
          faculties2={FACULTIES2}
          faculties3={FACULTIES3}
        />

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Fakultas;