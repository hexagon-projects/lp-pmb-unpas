import UserLayout from './layouts/UserLayout'
import Title from '../components/Title'
import Text from '../components/Text'
import ArticleTransparentCard from '../components/ArticleTransparentCard'
import HighlightCard from '../components/fakultas/HighlightCard'
import ActivitySection from '../components/ActivitySection'
import TeknikBox from '../components/fakultas/TeknikBox'
import RichText from '../components/RichText'
import Loading from '../components/Loading'
import CTASection from '../components/CTASection'
import LogoText from '../components/LogoText'
import Button from '../components/Button'
import ButtonArrow from '../components/ButtonArrow'
import VideoSwiper from '../components/home/VideoSwiper'
import { fetchAllData } from '../utils/fetchAllData'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaFacebook, FaPlay, FaTiktok } from 'react-icons/fa'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { X } from 'lucide-react'
import { useParams } from 'react-router-dom'
import FakultasService from '../fetching/fakultas'
import PartnerService from '../fetching/partner'
import UnggulanService from '../fetching/unggulan'
import BeritaService from '../fetching/berita'
import AgendaService from '../fetching/agenda'
import Gedung from '../assets/gedung.jpeg'
import MitraSection from '../views/home/MitraSection'
import { motion, AnimatePresence } from 'framer-motion'

const FakultasDetail = () => {
  const { slug } = useParams()
  const [fakultas, setFakultas] = useState({})
  const [prodi, setProdi] = useState([])
  const [unggulan, setUnggulan] = useState([])
  const [partner, setPartner] = useState([])
  const [berita, setBerita] = useState([])
  const [agenda, setAgenda] = useState([])
  const imageURL = import.meta.env.VITE_IMAGE_URL
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const fakultasPromise = FakultasService.getFakultasBySlug(slug)
      // First get fakultas data
      const fakultasRes = await fakultasPromise
      setFakultas(fakultasRes.fakultas)
      setProdi(fakultasRes.departements)
      // Then get other data using the fakultas ID
      const [partnerRes, beritaRes, agendaRes, unggulanRes] = await Promise.all([PartnerService.getAllPartner(), BeritaService.getAllBerita(), AgendaService.getAllAgenda(), UnggulanService.getUnggulanByID(fakultasRes.fakultas.id)])
      setPartner(partnerRes)
      setBerita(beritaRes)
      setAgenda(agendaRes)
      setUnggulan(unggulanRes?.slice(0, 4))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [slug])

  const [data, setData] = useState({
    dukungan: [],
  })

  useEffect(() => {
    fetchData()
    const loadData = async () => {
      setLoading(true)
      try {
        const fetchedData = await fetchAllData()
        setData(fetchedData)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [fetchData])

  const latestBerita = berita.slice(0, 4)

  if (loading) {
    return <Loading />
  }

  return (
    <UserLayout bgLayoutColor="bg-[#F3f4f4]" position={'fixed'} margin={''} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3 lg:py-6 lg:px-6'} paddingTop={'lg:pt-20'}>
      <Helmet>
        <title>{fakultas.name || 'Loading...'} - Universitas Pasundan</title>
        <meta name="description" content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri. Daftar sekarang!" />
        <meta name="keywords" content="Fakultas Teknik Unpas, Teknik Informatika, Teknik Mesin, Teknik Industri, Universitas Pasundan" />
        <meta property="og:title" content="Fakultas Teknik - Universitas Pasundan" />
        <meta property="og:description" content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri." />
        <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
        <meta property="og:url" content="https://pmb.unpas.ac.id/fakultas-teknik" />
      </Helmet>

      {/* Modal Video */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50" onClick={() => setIsOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.3 } }}>
            <motion.div className="relative p-4 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
              >
                <X size={20} />
              </button>
              <iframe
                className="w-full aspect-video border-2 border-white rounded-lg md:rounded-2xl lg:rounded-4xl"
                src={`https://www.youtube-nocookie.com/embed/${fakultas.yt_id}`}
                title="Kisah Alumni"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="w-full p-4 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        {/* Header Section */}
        <motion.div className="relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="w-full fakultas_dtl_container">
            <div
              className={`w-full flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 md:px-8 lg:px-12 relative overflow-hidden fakultas_dtl_box lg:h-[55vh]`}
              style={{ backgroundImage: `url(${fakultas.image1 ? `${imageURL}/fakultas/${fakultas.image1}` : Gedung})` }}
            >
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
              <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>
              <div className="text-white relative my-8 z-10 w-1/2 md:w-1/4 lg:w-1/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl px-4 py-14 font-bold">
                  <span className="block">Fakultas</span>
                  <span className="block">{fakultas.name.replace('Fakultas ', '')}</span>
                </h2>
              </div>
              <div className="absolute top-4 left-4 z-10">
                <LogoText titleColor={'text-white'} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-20">
            <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} hoverBgColor={'hover:border-3 hover:border-white/50'} padding={'px-4 py-4'} onClick={() => window.location.href = 'https://registrasi.unpas.ac.id/register'}/>
          </div>
        </motion.div>

        {/* Program Studi Section */}
        <motion.div className="flex flex-wrap flex-row justify-center gap-4 md:gap-6 lg:gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          {prodi.map((item, index) => (
            <div key={index}>
              <TeknikBox image={`${imageURL}/programs/${item.image1}`} title={item.program_name} slug={item.slug} />
            </div>
          ))}
        </motion.div>

        {/* Visi & Misi Section */}
        <motion.div className="w-full flex justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-y-4 md:gap-y-0 gap-x-18">
            <div className="w-full md:w-full space-y-3 md:space-y-4 flex flex-col justify-center items-left text-justify md:items-start md:text-left">
              <div className="text-center md:text-left">
                <Title title={'Visi dan Misi'} color="text-[#3384FF]" />
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                <RichText content={`${fakultas.description2}`} />
              </div>
              <div className="w-fit">
                <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} hoverBgColor={'hover:border-3 hover:border-white/50'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
              </div>
            </div>
            <div className="w-full md:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
              <button onClick={() => setIsOpen(true)} className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer">
                <img src={`https://img.youtube.com/vi/${fakultas.yt_id}/hqdefault.jpg`} alt="Thumbnail Video" className="w-full h-full object-cover" />
                <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl" whileTap={{ scale: 0.9 }}>
                  <div className="p-2 group-hover:scale-120 bg-gradient-to-b rounded-full bg-gray-600 via-gray-700 to-gray-800">
                    <FaPlay className="text-white p-4 w-14 h-14 transition-transform duration-200 ease-in-out group-hover:scale-120" />
                  </div>
                </motion.div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Video Section (jika ada duplikasi video) */}
        {/* <motion.div className="w-full flex justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <div className="w-full md:w-[80%] lg:w-[60%]">
            <button onClick={() => setIsOpen(true)} className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer">
              <img src={`https://img.youtube.com/vi/${fakultas.yt_id}/hqdefault.jpg`} alt="Thumbnail Video" className="w-full h-full object-cover" />
              <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl" whileTap={{ scale: 0.9 }}>
                <div className="p-2 group-hover:scale-120 bg-gradient-to-b rounded-full bg-gray-600 via-gray-700 to-gray-800">
                  <FaPlay className="text-white p-4 w-14 h-14 transition-transform duration-200 ease-in-out group-hover:scale-120" />
                </div>
              </motion.div>
            </button>
          </div>
        </motion.div> */}

        {/* Mengapa Pilih Fakultas Section */}
        {/* <motion.div className="relative w-full lg:py-40 rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
          <div className="hidden lg:block absolute inset-0 border-1 border-gray-800/10 shadow-xl shadow-black/5 transform -skew-y-3 origin-top-left rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
          <div className="relative flex flex-col md:flex-row justify-center items-center text-center space-y-3 md:space-y-4 gap-4 md:gap-6 lg:gap-10">
            <div className="w-full md:w-1/2 lg:w-1/3 space-y-3 md:space-y-4">
              <div className="w-full space-y-2 text-left md:text-left">
                <Title title={'Mengapa Pilih Fakultas'} />
                <Title color="text-blue-500" title={fakultas.name.replace('Fakultas ', '')} />
              </div>
              <div className="w-full h-full">
                <img src={Gedung} alt="Gedung Unpas" className="w-full h-full rounded-lg bg-cover md:rounded-2xl lg:rounded-4xl" />
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {unggulan.map((item, index) => (
                <HighlightCard key={index} title={item.title} text={item.description} />
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Button Daftar Sekarang Section */}
        <motion.div className="w-full flex justify-center items-center p-4 md:px-6 md:py-9 lg:px-8 lg:py-11" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}>
          <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] px-4 py-4 rainbow-border rounded-xl md:rounded-2xl lg:rounded-4xl lg:p-6 relative z-2">
            <div className="flex justify-between md:justify-between items-center text-center relative z-2">
              <div className="flex items-center gap-4 text-left">
                <div className="w-[60%] md:w-fit">
                  <Title sizeText="text-sm md:text-2xl lg:text-[32px]" fontWeight="font-semibold" title={'Yuk Daftar Di Unpas Sekarang!'} />
                </div>
                <FaArrowRightLong className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 animated-arrow" />
              </div>
              <div className="">
                <Button css={'pulsating-button'} text={'Daftar Sekarang'} bgColor="bg-primary" padding="p-4" onClick={() => window.location.href = 'https://registrasi.unpas.ac.id/register'}/>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mitra Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4 }}>
          <MitraSection data={partner} />
        </motion.div>

        {/* Berita Terbaru Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.6 }}>
          <div className="text-center md:text-left space-y-3 md:space-y-4">
            <Title title={'Berita Terbaru'} />
            <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
              <div className="md:w-1/2 lg:w-full">
                <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} description={latestBerita[0]?.description} />
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} description={latestBerita[1]?.description} />
                <div className="w-full flex flex-col md:flex-row gap-4">
                  <div>
                    <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} description={latestBerita[2]?.description} />
                  </div>
                  <div>
                    <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} description={latestBerita[3]?.description} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agenda / Activity Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.8 }}>
          {agenda.length > 0 ? (
            <ActivitySection title={'Agenda'} activities={agenda} />
          ) : (
            <div className="text-center">
              <Text text={'Tidak ada Agenda'} />
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2 }}>
          <CTASection color={'bg-blue-500'} />
        </motion.div>
      </motion.div>
    </UserLayout>
  )
}

export default FakultasDetail
