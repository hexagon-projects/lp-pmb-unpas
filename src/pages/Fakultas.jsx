import { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import UserLayout from './layouts/UserLayout';
import CTASection from '../components/CTASection';
import FakultasService from '../fetching/fakultas';
import Button from '../components/Button';
import LogoText from '../components/LogoText';
import FakultasSection from '../views/home/FakultasSection';
import FakultasItem from '../components/FakultasItem';
import { FACULTIES, FACULTIES1, FACULTIES2, FACULTIES3 } from '../data/fakultas';
import Logo from '../assets/logo-outline.png';
import MotionWrapper from '../components/MotionWrapper';

const Fakultas = () => {
  const [fakultas, setFakultas] = useState([]);
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
    const img = new Image();
    img.src = Logo;

    fetchData();
  }, [fetchData]);

  return (
    <UserLayout
      bgLayoutColor="bg-[#F3F3F3]"
      bgColor="bg-[#F3F3F3]"
      position="fixed"
      margin=""
      titleColor="text-black"
      paddingDekstop="md:py-3 md:px-3 lg:py-6 lg:px-12"
      paddingTop="lg:pt-30"
    >
      <Helmet>
        <title>Fakultas - Universitas Pasundan</title>
        <meta name="description" content="Daftar fakultas terakreditasi di Universitas Pasundan" />
        <link rel="preload" href={Logo} as="image" />
      </Helmet>

      <div className="relative space-y-8 md:space-y-12 lg:space-y-16 lg:pt-5">
        <div className="relative px-5 md:px-10 lg:px-15">
          <MotionWrapper type={'fadeInUp'} duration={1} className="w-full fakultas_container">
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
          </MotionWrapper>
          <MotionWrapper type={'fadeInUp'} duration={1} className="absolute bottom-0 left-0 z-10 px-5 md:px-10 lg:px-15">
            <Button
              text="Daftar Sekarang"
              bgColor="bg-primary"
              onClick={handleRegisterClick}
              aria-label="Daftar sekarang di Universitas Pasundan"
              border='border-2 border-text'
              hoverBgColor='hover:border-2 hover:border-text'
            />
          </MotionWrapper>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <p>Loading faculties...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-12 text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-5 md:px-10 lg:px-15">
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
          </div>
        )}

        <div className="md:bg-[#717171]/5 px-4 md:px-6 lg:px-8 md:border-2 md:border-[#ebebeb]">
          <FakultasSection
            faculties={FACULTIES}
            faculties1={FACULTIES1}
            faculties2={FACULTIES2}
            faculties3={FACULTIES3}
          />
        </div>

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Fakultas;