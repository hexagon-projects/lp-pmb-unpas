import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import UserLayout from './layouts/UserLayout'
import Title from '../components/Title'
import Text from '../components/Text'
import ButtonArrow from '../components/ButtonArrow'
import StatsSection from '../components/StatsSection'
import PrestasiSection from '../components/prodi/PrestasiSection'
import ArticleTransparentCard from '../components/ArticleTransparentCard'
import TestimonialSlider from '../components/TestimonialSlider'
import AktivitasMahasiswa from '../components/prodi/AktivitasMahasiswa'
import FasilitasSlider from '../components/prodi/FasilitasSlider'
import DosenCard from '../components/prodi/DosenCard'
import RichText from '../components/RichText'
import bgSection from '../assets/home/section1ori.jpeg'
import PartnerService from '../fetching/partner'
import TestimoniService from '../fetching/testimoni'
import BeritaService from '../fetching/berita'
import PrestasiService from '../fetching/prestasi'
import ProdiService from '../fetching/prodi'
import Loading from '../components/Loading'
import GalleryService from '../fetching/galery'
import MitraSection from '../views/home/MitraSection'
import { X } from 'lucide-react'
import HighlightCard from '../components/fakultas/HighlightCard'
import Pagination from '../components/Pagination'
import LogoText from '../components/LogoText'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import TestimonialSection from '../views/home/TestimonialSection'
import Gedung from '../assets/gedung.jpeg'
import { FaArrowRightLong } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const ProgramStudi = () => {
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const imageURL = import.meta.env.VITE_IMAGE_URL
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6)
      } else {
        setItemsPerPage(4)
      }
    }
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => {
      window.removeEventListener('resize', updateItemsPerPage)
    }
  }, [])

  const [data, setData] = useState({
    partner: [],
    testimonials: [],
    berita: [],
    prestasi: [],
    prodi: null,
    gallery: [],
  })

  const fetchData = useCallback(async () => {
    if (!slug) return
    try {

      const prodi = await ProdiService.getProdiBySlug(slug)

      const [partners, testimonials, berita, prestasi, gallery] = await Promise.all([
        PartnerService.getAllPartner(),
        TestimoniService.getTestimonibyDepartement(prodi?.departement?.id),
        BeritaService.getAllBerita(),
        PrestasiService.getPrestasiProdi(slug),
        GalleryService.getAllInovasiSlug(slug),
      ])
      setData({
        partner: partners,
        testimonials: testimonials.slice(0, 5),
        berita,
        prestasi,
        prodi,
        gallery,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const { partner, testimonials, berita, prestasi, prodi, gallery } = data
  const latestBerita = berita.slice(0, 4)
  const latestActivity = gallery
  const fakultas = prodi?.departement || {}
  const unggulan = prodi?.unggulan?.slice(0, 4) || []
  const ourteam = prodi?.ourteam || []
  const fasilitas = prodi?.fasilitas || []

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = ourteam.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(ourteam.length / itemsPerPage)

  if (loading) {
    return <Loading />
  }

  return (
    <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor="bg-[#F3F3F3]" position="fixed" margin="" titleColor="text-black" paddingDekstop="md:py-3 md:px-3 lg:py-6 lg:px-6" paddingTop="lg:pt-20">
      <div className="p-4 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20">
        <motion.div className="relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="w-full prodi_container">
            <div
              className="flex flex-col justify-center bg-cover bg-no-repeat rounded-xl md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-8 relative overflow-hidden space-y-3 h-fit lg:h-[55vh] prodi_box"
              style={{ backgroundImage: `url(${fakultas.image1 ? `${imageURL}/programs/${fakultas.image1}` : Gedung})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
              <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>
              <div className="relative z-10 w-full h-[40vh] flex flex-col justify-center items-start gap-4">
                <Title color="text-white" title={`Selamat Datang di Program Studi ${fakultas.name}`} />
                {/* <RichText textColor="text-white" lineclamp="line-clamp-4 md:line-clamp-5 lg:line-clamp-8" content={fakultas.description1} /> */}
              </div>
              <div className="absolute top-4 left-4 z-10">
                <LogoText titleColor="text-white" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-20">
            <Button text="Daftar Sekarang" bgColor="bg-primary" hoverBgColor="hover:border-3 hover:border-white/50" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <StatsSection colorIcon="text-blue-500" title1="Karya Ilmiah" prodi={fakultas.periode} mahasiswa={fakultas.age} lulusan={fakultas.weekly} prestasi={fakultas.class_size} />
        </motion.div>

        <motion.div className="w-full flex flex-col lg:flex-row justify-around items-center gap-4 md:gap-6 lg:gap-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
            <button onClick={() => setIsOpen(true)} className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
              <img src={`https://img.youtube.com/vi/${fakultas.id_yt}/hqdefault.jpg`} alt="Thumbnail Video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
              <motion.div className="absolute inset-0 flex justify-center items-center rounded-xl md:rounded-2xl lg:rounded-4xl" whileTap={{ scale: 0.9 }}>
                <div className="p-2 group-hover:scale-110 bg-gray-700 rounded-full">
                  <FaPlay className="text-white p-4 w-14 h-14" />
                </div>
              </motion.div>
            </button>
          </div>
          <div className="w-full md:w-fit space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
              <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
                <Title title="About" />
                <RichText content={fakultas.description2} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
              <Button text="Daftar Sekarang" bgColor="bg-primary" hoverBgColor="hover:border-3 hover:border-white/50" onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="relative w-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden space-y-4 md:space-y-6 lg:space-y-8">
          <div className='w-full flex justify-center items-center'>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center text-center gap-2 flex-wrap">
              <Title
                sizeText="text-base md:text-lg lg:text-2xl"
                title={`Kenapa Harus Memilih Program Studi ${fakultas?.name?.replace('Fakultas ', '')} Unpas`}
                color="text-blue-500"
              />
            </div>
          </div>
          <Text text={''} />
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 md:space-y-4 gap-4 md:gap-6 lg:gap-10'>
            {unggulan.map((item, index) => (
              <HighlightCard key={index} title={item.title} text={item.description} />
            ))}
          </div>
        </motion.div>

        <motion.div className="space-y-4 md:space-y-6 lg:space-y-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4 }}>
          <div className="text-center">
            <Title title="Dosen Penelitian" />
          </div>
          {ourteam && ourteam.length > 0 ? (
            <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
              {currentItems.map((member, index) => (
                <div key={index}>
                  <DosenCard name={member.name} title={member.title} image={member.image} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <Text text="Tidak ada data dosen yang tersedia." color="text-gray-500" />
            </div>
          )}
          <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.6 }}>
          <AktivitasMahasiswa data={latestActivity} />
        </motion.div>

        <motion.div className="space-y-4 md:space-y-6 lg:space-y-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.8 }}>
          {prestasi.data && prestasi.data.length > 0 ? (
            <PrestasiSection prestasi={prestasi.data} />
          ) : (
            <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
              <Title title="Prestasi" />
              <p className="text-center text-gray-500">Tidak ada Prestasi</p>
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2 }}>
          <FasilitasSlider title="Fasilitas" facilities={fasilitas} />
        </motion.div>

        <motion.div className="w-full flex flex-row justify-between items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.2 }}>
          <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-10">
            <MitraSection data={partner} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          {testimonials.length > 0 ? (
            <TestimonialSlider testimonials={testimonials} />
          ) : (
            <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
              <Title title="Testimoni" />
              <p className="text-center text-gray-500">Tidak ada testimoni</p>
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.6 }}>
          <div className="text-center md:text-left space-y-4 md:space-y-6 lg:space-y-8">
            <div className='text-center'>
              <Title title="Berita Terbaru" />
            </div>
            {latestBerita && latestBerita.length > 0 ? (
              <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                <div className="md:w-1/2 lg:w-1/fit">
                  <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} description={latestBerita[0]?.description}/>
                </div>
                <div className="md:w-1/2 flex flex-col gap-4">
                  <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} description={latestBerita[0]?.description}/>
                  <div className="w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2">
                      <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} description={latestBerita[0]?.description}/>
                    </div>
                    <div className="md:w-1/2">
                      <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} description={latestBerita[0]?.description}/>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <Text text="Tidak ada data berita yang tersedia." color="text-gray-500" />
              </div>
            )}
          </div>
        </motion.div>

        <motion.div className="w-full flex justify-center items-center p-4 md:px-6 md:py-9 lg:px-8 lg:py-11" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.8 }}>
          <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] px-4 py-4 rainbow-border rounded-xl md:rounded-2xl lg:rounded-4xl lg:p-6 relative z-2">
            <div className="flex justify-between md:justify-between items-center text-center relative z-2">
              <div className="flex items-center gap-4 text-left">
                <div className="w-[60%] md:w-fit">
                  <Title sizeText="text-sm md:text-2xl lg:text-[32px]" fontWeight="font-semibold" title="Dapatkan Informasi Lengkap Seputar PMB" />
                </div>
                <FaArrowRightLong className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 animated-arrow" />
              </div>
              <div>
                <Button css="pulsating-button" text="Informasi Biaya" bgColor="bg-primary" padding="p-4" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 3 }}>
          <CTASection onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} color="bg-blue-500" />
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)}>
              <motion.div
                className="relative w-[90%] md:w-[70%] lg:w-[50%] border-2 border-white rounded-xl md:rounded-2xl lg:rounded-4xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full" onClick={() => setIsOpen(false)}>
                  <X size={20} />
                </button>
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube-nocookie.com/embed/${fakultas.id_yt}`}
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </UserLayout>
  )
}

export default ProgramStudi
