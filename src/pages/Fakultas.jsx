import { useEffect, useState, useCallback } from 'react'
import StatsSection from '../components/StatsSection'
import UserLayout from './layouts/UserLayout'
import FakultasCard from '../components/fakultas/FakultasCard'
import Title from '../components/Title'
import MotionWrapper from '../components/MotionWrapper'
import CTASection from '../components/CTASection'
import FakultasService from '../fetching/fakultas'
import ProdiService from '../fetching/prodi'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import Logo from '../assets/logo-outline.png'
import Button from '../components/Button'
import LogoText from '../components/LogoText'
import { Helmet } from 'react-helmet-async'
import { ThreeDot } from 'react-loading-indicators'
import FakultasSection from '../views/home/FakultasSection'
import { motion } from 'framer-motion'
import FakultasItem from '../components/FakultasItem'
import Loading from '../components/Loading'

const FACULTIES = [
  {
    name: 'Fakultas Keguruan dan Ilmu Pendidikan',
    slug: 'fakultas-keguruan-dan-ilmu-pendidikan',
    programs: [
      { name: 'S1 - Pendidikan Pancasila & Kewarganegaraan', slug: 'pendidikan-pancasila-kewarganegaraan' },
      { name: 'S1 - Pendidikan Ekonomi Akuntansi', slug: 'pendidikan-ekonomi-akuntansi' },
      { name: 'S1 - Pendidikan Bahasa', slug: 'pendidikan-bahasa' },
      { name: 'S1 - Sastra Indonesia dan Daerah', slug: 'sastra-indonesia-daerah' },
      { name: 'S1 - Pendidikan Matematika', slug: 'pendidikan-matematika' },
      { name: 'S1 - Pendidikan Biologi', slug: 'pendidikan-biologi' },
      { name: 'S1 - Pendidikan Guru Sekolah Dasar', slug: 'pendidikan-guru-sekolah-dasar' },
    ],
  },
  {
    name: 'Fakultas Teknik',
    slug: 'fakultas-teknik',
    programs: [
      { name: 'S1 - Teknik Informatika', slug: 'teknik-informatika' },
      { name: 'S1 - Teknik Mesin', slug: 'teknik-mesin' },
      { name: 'S1 - Teknik Industri', slug: 'teknik-industri' },
      { name: 'S1 - Teknik Lingkungan', slug: 'teknik-lingkungan' },
      { name: 'S1 - Teknologi Pangan', slug: 'teknologi-pangan' },
    ],
  },
  {
    name: 'Fakultas Ekonomi dan Bisnis',
    slug: 'fakultas-ekonomi-dan-bisnis',
    programs: [
      { name: 'S1 - Akuntansi', slug: 'akuntansi' },
      { name: 'S1 - Manajemen', slug: 'manajemen' },
      { name: 'S1 - Ekonomi Pembangunan', slug: 'ekonomi-pembangunan' },
    ],
  },
  {
    name: 'Fakultas Hukum',
    slug: 'fakultas-hukum',
    programs: [{ name: 'S1 - Ilmu Hukum', slug: 'ilmu-hukum' }],
  },
  {
    name: 'Program Pasca Sarjana',
    slug: 'program-pasca-sarjana',
    programs: [
      { name: 'S2 - Magister Ilmu Administrasi & Kebijakan Publik', slug: 'magister-ilmu-administrasi-kebijakan-publik' },
      { name: 'S2 - Magister Manajemen', slug: 'magister-manajemen' },
      { name: 'S2 - Magister Teknik Industri', slug: 'magister-teknik-industri' },
      { name: 'S2 - Magister Ilmu Hukum', slug: 'magister-ilmu-hukum' },
      { name: 'S2 - Magister Teknologi Pangan', slug: 'magister-teknologi-pangan' },
      { name: 'S2 - Magister Pendidikan Matematika', slug: 'magister-pendidikan-matematika' },
      { name: 'S2 - Magister Teknik Mesin', slug: 'magister-teknik-mesin' },
      { name: 'S2 - Magister Ilmu Komunikasi', slug: 'magister-ilmu-komunikasi' },
      { name: 'S2 - Magister Pendidikan Bahasa Indonesia', slug: 'magister-pendidikan-bahasa-indonesia' },
      { name: 'S3 - Doktor Ilmu Manajemen', slug: 'doktor-ilmu-manajemen' },
      { name: 'S3 - Doktor Ilmu Sosial', slug: 'doktor-ilmu-sosial' },
      { name: 'S3 - Doktor Ilmu Hukum', slug: 'doktor-ilmu-hukum' },
    ],
  },
  {
    name: 'Fakultas Kedokteran',
    slug: 'fakultas-kedokteran',
    programs: [
      { name: 'S1 - Pendidikan Dokter', slug: 'pendidikan-dokter' },
      { name: 'Profesi - Profesi Dokter', slug: 'profesi-dokter' },
    ],
  },
  {
    name: 'Fakultas Pendidikan',
    slug: 'fakultas-pendidikan',
    programs: [
      { name: 'S1 - Pendidikan Matematika', slug: 'pendidikan-matematika' },
      { name: 'S1 - Pendidikan Biologi', slug: 'pendidikan-biologi' },
      { name: 'S1 - Pendidikan Pancasila dan Kewarganegaraan', slug: 'pendidikan-pancasila-kewarganegaraan' },
      { name: 'S1 - Pendidikan Guru Sekolah Dasar', slug: 'pendidikan-guru-sekolah-dasar' },
      { name: 'S1 - Pendidikan Bahasa dan Sastra Indonesia', slug: 'pendidikan-bahasa-sastra-indonesia' },
      { name: 'S1 - Pendidikan Ekonomi', slug: 'pendidikan-ekonomi' },
    ],
  },
  {
    name: 'Fakultas Ilmu Sosial Dan Ilmu Politik',
    slug: 'fakultas-ilmu-sosial-dan-ilmu-politik',
    programs: [
      { name: 'S1 - Administrasi Publik', slug: 'administrasi-publik' },
      { name: 'S1 - Kesejahteraan Sosial', slug: 'kesejahteraan-sosial' },
      { name: 'S1 - Hubungan Internasional', slug: 'hubungan-internasional' },
      { name: 'S1 - Ilmu Administrasi Bisnis', slug: 'ilmu-administrasi-bisnis' },
      { name: 'S1 - Ilmu Komunikasi', slug: 'ilmu-komunikasi' },
    ],
  },
  {
    name: 'Fakultas Ilmu Seni dan Sastra',
    slug: 'fakultas-ilmu-seni-dan-sastra',
    programs: [
      { name: 'S1 - Sastra Inggris', slug: 'sastra-inggris' },
      { name: 'S1 - Desain Komunikasi Visual', slug: 'desain-komunikasi-visual' },
      { name: 'S1 - Fotografi dan Film', slug: 'fotografi-dan-film' },
      { name: 'S1 - Seni Musik', slug: 'seni-musik' },
    ],
  },
]

const FACULTIES1 = FACULTIES.slice(0, 3);
const FACULTIES2 = FACULTIES.slice(3, 6);
const FACULTIES3 = FACULTIES.slice(6, 9);

const Fakultas = () => {
  const [fakultas, setFakultas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const timestamp = Date.now();
      const fakultasData = await FakultasService.getAllFakultas(`?timestamp=${timestamp}`);
      setFakultas(fakultasData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRegisterClick = useCallback(() => {
    window.location.href = '/prestasi';
  }, []);

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
      duration={1}
    >
      <Helmet>
        <title>Fakultas - Universitas Pasundan</title>
      </Helmet>

      <div className="relative p-4 md:px-10 lg:px-12 space-y-8 md:space-y-12 lg:space-y-20">
        <div className="relative">
          <div className="w-full fakultas_container">
            <div className="flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 bg-primary relative overflow-hidden fakultas_box lg:h-[55vh]">
              <div className="absolute -right-1/4 md:-right-30 lg:-right-4">
                <img 
                  src={Logo} 
                  alt="Logo Outline Unpas" 
                  loading="lazy" 
                  width="auto"
                  height="auto"
                  className="h-[30vh] md:h-[45vh] lg:h-[55vh]" 
                />
              </div>
              <div className="text-gray-800 px-4 py-14">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">7 Pilihan</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Fakultas Terakreditasi</h3>
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
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <ThreeDot variant="bounce" color="#FEF251" size="medium" />
          </div>
        ) : (
          <>
            <motion.div
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1, 
                  transition: { 
                    staggerChildren: 0.2,
                    duration: 0.3 // Reduced duration for faster animation
                  } 
                },
              }}
            >
              {fakultas?.map((item) => (
                <FakultasItem 
                  key={item.id} 
                  image={item.image1} 
                  title={item.name} 
                  slug={item.slug} 
                />
              ))}
            </motion.div>

            <FakultasSection 
              faculties={FACULTIES} 
              faculties1={FACULTIES1} 
              faculties2={FACULTIES2} 
              faculties3={FACULTIES3} 
            />
          </>
        )}

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Fakultas;