import { useEffect, useState, useCallback, lazy, Suspense } from 'react'
import UserLayout from './layouts/UserLayout'
import CTASection from '../components/CTASection'
import FakultasService from '../fetching/fakultas'
import Logo from '../assets/logo-outline.png'
import Button from '../components/Button'
import LogoText from '../components/LogoText'
import { Helmet } from 'react-helmet-async'
import { ThreeDot } from 'react-loading-indicators'
import { motion } from 'framer-motion'
import { FACULTIES, FACULTIES1, FACULTIES2, FACULTIES3 } from '../data/fakultas'

const FakultasSection = lazy(() => import('../views/home/FakultasSection'))
const FakultasItem = lazy(() => import('../components/FakultasItem'))

const Fakultas = () => {
  const [fakultas, setFakultas] = useState([])
  const [loading, setLoading] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const timestamp = Date.now()
      const fakultasData = await FakultasService.getAllFakultas(`?timestamp=${timestamp}`)
      setFakultas(fakultasData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
    setIsHydrated(true)
  }, [fetchData])

  const handleRegisterClick = useCallback(() => {
    window.location.href = 'https://registrasi.unpas.ac.id/register'
  }, [])

  // Preload main logo image
  useEffect(() => {
    const img = new Image()
    img.src = Logo
  }, [])

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
      duration={0.5} // Reduced animation duration
    >
      <Helmet>
        <title>Fakultas - Universitas Pasundan</title>
        <link rel="preload" href={Logo} as="image" />
      </Helmet>

      <div className="relative p-4 md:px-10 lg:px-12 space-y-8 md:space-y-12 lg:space-y-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[55vh] bg-gradient-to-br from-gray-100 to-gray-300 rounded-4xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <>
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[55vh] bg-gradient-to-br from-gray-100 to-gray-300 rounded-4xl animate-pulse"></div>
                ))}
              </div>
            }>
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
                {fakultas?.map((item, index) => (
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

              <FakultasSection 
                faculties={FACULTIES} 
                faculties1={FACULTIES1} 
                faculties2={FACULTIES2} 
                faculties3={FACULTIES3} 
              />
            </Suspense>
          </>
        )}

        <CTASection />
      </div>
    </UserLayout>
  )
}

export default Fakultas