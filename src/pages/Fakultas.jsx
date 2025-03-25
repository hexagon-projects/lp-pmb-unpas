import { useEffect, useState } from 'react'
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

const faculties = [
  {
    name: 'Fakultas Keguruan dan Ilmu Pendidikan',
    programs: [
      'S1 - Pendidikan Pancasila & Kewarganegaraan',
      'S1 - Pendidikan Ekonomi Akuntansi',
      'S1 - Pendidikan Bahasa',
      'S1 - Sastra Indonesia dan Daerah',
      'S1 - Pendidikan Matematika',
      'S1 - Pendidikan Biologi',
      'S1 - Pendidikan Guru Sekolah Dasar',
    ],
  },
  {
    name: 'Fakultas Teknik',
    programs: ['S1 - Teknik Informatika', 'S1 - Teknik Mesin', 'S1 - Teknik Industri', 'S1 - Teknik Lingkungan', 'S1 - Teknologi Pangan'],
  },
  {
    name: 'Fakultas Ekonomi dan Bisnis',
    programs: ['S1 - Akuntansi', 'S1 - Manajemen', 'S1 - Ekonomi Pembangunan'],
  },
  {
    name: 'Fakultas Hukum',
    programs: ['S1 - Ilmu Hukum'],
  },
  {
    name: 'Program Pasca Sarjana',
    programs: [
      'S2 - Magister Ilmu Administrasi & Kebijakan Publik',
      'S2 - Magister Manajemen',
      'S2 - Magister Teknik Industri',
      'S2 - Magister Ilmu Hukum',
      'S2 - Magister Teknologi Pangan',
      'S2 - Magister Pendidikan Matematika',
      'S2 - Magister Teknik Mesin',
      'S2 - Magister Ilmu Komunikasi',
      'S2 - Magister Pendidikan Bahasa Indonesia',
      'S3 - Doktor Ilmu Manajemen',
      'S3 - Doktor Ilmu Sosial',
      'S3 - Doktor Ilmu Hukum',
    ],
  },
  {
    name: 'Fakultas Kedokteran',
    programs: ['S1 - Pendidikan Dokter', 'Profesi - Profesi Dokter'],
  },
  {
    name: 'Fakultas Pendidikan',
    programs: ['S1 - Pendidikan Matematika', 'S1 - Pendidikan Biologi', 'S1 - Pendidikan Pancasila dan Kewarganegaraan', 'S1 - Pendidikan Guru Sekolah Dasar', 'S1 - Pendidikan Bahasa dan Sastra Indonesia', 'S1 - Pendidikan Ekonomi'],
  },
  {
    name: 'Fakultas Ilmu Sosial Dan Ilmu Politik',
    programs: ['S1 - Administrasi Publik', 'S1 - Kesejahteraan Sosial', 'S1 - Hubungan Internasional', 'S1 - Ilmu Administrasi Bisnis', 'S1 - Ilmu Komunikasi'],
  },
  {
    name: 'Fakultas Ilmu Seni dan Sastra',
    programs: ['S1 - Sastra Inggris', 'S1 - Desain Komunikasi Visual', 'S1 - Fotografi dan Film', 'S1 - Seni Musik'],
  },
]

const faculties1 = faculties.slice(0, 3)
const faculties2 = faculties.slice(3, 6)
const faculties3 = faculties.slice(6, 9)

const Fakultas = () => {
  const [fakultas, setFakultas] = useState([])
  const [loading, setLoading] = useState(true) // Tambahkan state loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true) // Set loading sebelum memulai fetch
      try {
        const [fakultasData] = await Promise.all([FakultasService.getAllFakultas()])
        setFakultas(fakultasData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false) // Set loading ke false setelah fetch selesai
      }
    }

    fetchData()
  }, [])


  return (
    <UserLayout position={'fixed'} margin={''} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3 lg:py-6 lg:px-6'} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={1}>
      <Helmet>
        <title>Fakultas - Universitas Pasundan</title>
      </Helmet>

      <div className="relative p-4 md:px-10 lg:px-12 space-y-8 md:space-y-12 lg:space-y-20">
        <div className="relative">
          <div className="w-full fakultas_container">
            <div className="flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 bg-primary relative overflow-hidden fakultas_box lg:h-[55vh]">
              <div className="absolute  right-0">
                <img src={Logo} alt={'Logo Outline Unpas'} loading="lazy" className="h-[30vh] md:h-[45vh] lg:h-[55vh]" />
              </div>
              <div className="text-gray-800 p-14">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">7 Pilihan</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Fakultas Terakreditasi</h3>
              </div>
              <div className="absolute top-4 left-4">
                <LogoText titleColor={'text-black'} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-10">
            <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} hoverBgColor={'hover:border-3 hover:border-white/50'} onClick={() => (window.location.href = '/prestasi')} />
          </div>
        </div>

        {/* <StatsSection prodi={20} mahasiswa={5000} lulusan={1234} prestasi={14} /> */}
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <ThreeDot variant="bounce" color="#FEF251" size="medium" text="" textColor="" />
          </div>
        ) : (
          <>
            <MotionWrapper delay={0.2} className={'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
              {fakultas.map((item) => (
                <FakultasCard key={item.id} image={item.image1} title={item.name} slug={item.slug} />
              ))}
            </MotionWrapper>
            <FakultasSection faculties={faculties} faculties1={faculties1} faculties2={faculties2} faculties3={faculties3} />
          </>
        )}

        <CTASection />
      </div>
    </UserLayout>
  )
}

export default Fakultas
