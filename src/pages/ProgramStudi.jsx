import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Star } from "lucide-react";

import UserLayout from "./layouts/UserLayout";
import MotionWrapper from "../components/MotionWrapper";
=======
import UserLayout from "./layouts/UserLayout";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
import UserLayout from "./layouts/UserLayout";
>>>>>>> 8bbe4dc (First Commit)
=======
import UserLayout from "./layouts/UserLayout";
>>>>>>> origin/Budi
import Title from "../components/Title";
import Text from "../components/Text";
import ButtonArrow from "../components/ButtonArrow";
import StatsSection from "../components/StatsSection";
import PrestasiSection from "../components/prodi/PrestasiSection";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import AdvantageItem from "../components/prodi/AdvantageItem";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import MitraCarousel from "../components/MitraCarousel";
=======
import ArticleTransparentCard from "../components/ArticleTransparentCard";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
import ArticleTransparentCard from "../components/ArticleTransparentCard";
>>>>>>> 8bbe4dc (First Commit)
=======
import ArticleTransparentCard from "../components/ArticleTransparentCard";
>>>>>>> origin/Budi
import TestimonialSlider from "../components/TestimonialSlider";
import AktivitasMahasiswa from "../components/prodi/AktivitasMahasiswa";
import FasilitasSlider from "../components/prodi/FasilitasSlider";
import DosenCard from "../components/prodi/DosenCard";
import RichText from "../components/RichText";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import bgSection from "../assets/home/section1ori.jpeg";

=======
import bgSection from "../assets/home/section1ori.jpeg";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
import bgSection from "../assets/home/section1ori.jpeg";
>>>>>>> 8bbe4dc (First Commit)
=======
import bgSection from "../assets/home/section1ori.jpeg";
>>>>>>> origin/Budi
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
import ProdiService from "../fetching/prodi";
import Loading from "../components/Loading";
import GalleryService from "../fetching/galery";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const ProgramStudi = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true)
    const imageURL = import.meta.env.VITE_IMAGE_URL;
=======
=======
>>>>>>> origin/Budi
import MitraSection from "../views/home/MitraSection";
import { X } from "lucide-react";
import HighlightCard from "../components/fakultas/HighlightCard";
import Pagination from "../components/Pagination";
<<<<<<< HEAD

const ProgramStudi = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
>>>>>>> 8bbe4dc (First Commit)

    const [data, setData] = useState({
        partner: [],
        testimonials: [],
        berita: [],
        prestasi: [],
<<<<<<< HEAD
        prodi: null
    });

    const fetchData = useCallback(async () => {
=======
        prodi: null,
        gallery: [],
    });

    const fetchData = useCallback(async () => {
        if (!slug) return;

>>>>>>> 8bbe4dc (First Commit)
        try {
            const [partners, testimonials, berita, prestasi, prodi, gallery] = await Promise.all([
                PartnerService.getAllPartner(),
                TestimoniService.getAllTestimoni(),
                BeritaService.getAllBerita(),
                PrestasiService.getPrestasiProdi(slug),
                ProdiService.getProdiBySlug(slug),
<<<<<<< HEAD
                GalleryService.getAllGallery()
            ]);

            setData({ partner: partners, testimonials, berita, prestasi, prodi, gallery });
=======
                GalleryService.getAllGallery(),
            ]);

            setData({ partner: partners, testimonials: testimonials.slice(0,5), berita, prestasi, prodi, gallery });
>>>>>>> 8bbe4dc (First Commit)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const { partner, testimonials, berita, prestasi, prodi, gallery } = data;
    const latestBerita = berita.slice(0, 4);
    const latestActivity = gallery?.slice(0, 4);
<<<<<<< HEAD
    const fakultas = prodi?.fakultas || {};
=======
    const fakultas = prodi?.departement || {};
>>>>>>> 8bbe4dc (First Commit)
    const unggulan = prodi?.unggulan || [];
    const ourteam = prodi?.ourteam || [];
    const fasilitas = prodi?.fasilitas || [];

<<<<<<< HEAD
    if (loading) {
        return <Loading />
    }

    return (
        <UserLayout position={'block'} margin={'m-6'} shadow={'shadow-md'} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3'}>
            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <MotionWrapper type={'zoomIn'} delay={0.2} className={'flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10'}>
                    <div className="w-full md:w-1/2">
                        <img src={`${imageURL}/programs/${fakultas.image1}`} alt="" className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                        <Title title={`Selamat Datang di Program Studi ${fakultas.name}`} />
                        <RichText content={fakultas.description1} />
                        <ButtonArrow text={'Baca Selengkapnya'} />
                    </div>
                </MotionWrapper>

                <StatsSection prodi={fakultas.age} mahasiswa={fakultas.weekly} lulusan={fakultas.periode} prestasi={fakultas.ourteam_id} />

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4'}>
                    <div className="text-center">
                        <Title title={'Mengapa Memilih Program Ini'} />
                    </div>
                    <div className="flex flex-row md:flex-row items-center gap-4">
                        <div className="w-1/2">
                            {unggulan && unggulan.length > 0 && (
                                <img
                                    src={`${imageURL}/unggulans/${unggulan[0].image}`}
                                    alt={unggulan[0].title}
                                    className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl"
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-4">
                            {unggulan.map((item, index) => (
                                <AdvantageItem key={index} icon={Star} text={item.title} />
                            ))}
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10'}>
                    <div className="w-full md:w-1/2">
                        <img src={`${imageURL}/programs/${fakultas.image2}`} alt="" className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                        <Title title={'Visi dan Misi'} />
                        <RichText content={`${fakultas.description2}`} />
                        <ButtonArrow text={'Baca Selengkapnya'} />
                    </div>
                </MotionWrapper>

                <PrestasiSection prestasi={prestasi} />

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4'}>
                    <div className="text-center">
                        <Title title={'Dosen Penilitan'} />
                    </div>
                    {ourteam && ourteam.length > 0 && (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
                            {ourteam.map((member, index) => (
=======
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ourteam.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(ourteam.length / itemsPerPage);

    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'}>
            <div className="p-4 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20">
                <div className={'w-full flex justify-around items-center'}>
                    <div className={'w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10'}>
                        <div className="w-full lg:w-1/2">
                            <img src={`${imageURL}/programs/${fakultas.image1}`} alt="" className="w-full lg:h-[80vh] object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                            <Title title={`Selamat Datang di Program Studi ${fakultas.name}`} />
                            <RichText content={fakultas.description1} lineclamp={'text-justify'} />
                            <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                        </div>
                    </div>
                </div>

                <StatsSection colorIcon={'text-blue-500'} title1="Karya Ilmiah" prodi={fakultas.periode} mahasiswa={fakultas.age} lulusan={fakultas.weekly} prestasi={fakultas.class_size} />

                <div className={'w-full flex justify-around items-center'}>
                    <div className={'w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col md:flex-row-reverse justify-around items-center gap-4'}>
                        <div className="w-full md:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${fakultas.id_yt}/hqdefault.jpg`}
                                    alt="Thumbnail Video"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex justify-center items-center ">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 22v-20l18 10-18 10z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="w-full md:w-fit space-y-3 md:space-y-4 flex flex-col justify-center items-center text-justify md:items-start md:text-left">
                            <Title title={'Visi dan Misi'} />
                            <RichText content={`${fakultas.description2}`} />
                            <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                        </div>
                    </div>
                </div>

                <div className={'w-full flex justify-around items-center'}>
                    <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        <div className="w-full lg:w-[40%] text-left space-y-8">
                            <Title sizeMobile="text-2xl md:text-4xl lg:text-6xl" title={'Mengapa Memilih Program Ini'} />
                            <div className="hidden lg:block">
                                <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                            </div>
                        </div>
                        {unggulan && unggulan.length > 0 ? (
                            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
                                {unggulan.map((item, index) => (
                                    <HighlightCard key={index} title={item.title} text={item.description} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <Text text={'Tidak ada data unggulan yang tersedia.'} color="text-gray-500" />
                            </div>
                        )}
                    </div>
                </div>

                <div className={'space-y-3 md:space-y-4'}>
                    {prestasi.data && prestasi.data.length > 0 ? (
                        <PrestasiSection prestasi={prestasi.data} />
                    ) : (
                        <div className="text-center py-6">
                            <Text text={'Tidak ada data prestasi yang tersedia.'} color="text-gray-500" />
                        </div>
                    )}
                </div>

                <div className={'space-y-3 md:space-y-4'}>
                    <div className="text-center">
                        <Title title={'Dosen Penelitian'} />
                    </div>
                    {ourteam && ourteam.length > 0 ? (
                        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
                            {currentItems.map((member, index) => (
>>>>>>> 8bbe4dc (First Commit)
                                <div key={index}>
                                    <DosenCard name={member.name} title={member.title} image={member.image} />
                                </div>
                            ))}
<<<<<<< HEAD
                        </div>
                    )}
                </MotionWrapper>

                <FasilitasSlider title={'Fasilitas & Inovasi'} facilities={fasilitas} />

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4 pb-56 md:pb-46 lg:pb-10'}>
=======

                        </div>
                    ) : (
                        <div className="text-center py-6">
                            <Text text={'Tidak ada data dosen yang tersedia.'} color="text-gray-500" />
                        </div>
                    )}
                    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

                <FasilitasSlider title={'Fasilitas & Inovasi'} facilities={fasilitas} />

                <div className={'space-y-3 md:space-y-4 pb-80 md:pb-56 lg:pb-20'}>
>>>>>>> 8bbe4dc (First Commit)
                    <div className="relative">
                        <div className="w-full flex justify-center gap-4 md:gap-6 lg:gap-10">
                            <div className="w-1/2">
                                <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
                            </div>
                            <div className="w-1/2">
                                <div className="text-left">
                                    <Text text={'Testimoni'} color="text-red-500" />
                                    <span>
                                        <Title sizeMobile="text-base" title={'Apa Kata Mereka Soal'} />
                                        <Title sizeMobile="text-base" color="text-blue-500" title={'Unpas?'} />
                                    </span>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD
                        <div className="absolute -bottom-60 -right-6 max-w-xs md:-bottom-45 md:right-20 md:max-w-sm lg:-bottom-10 lg:right-0 lg:max-w-4xl xl:bottom-10 xl:right-10 xl:max-w-5xl z-40">
                            <TestimonialSlider data={testimonials} bgColor={'bg-white'} textColor={'text-gray-700'} />
                        </div>
                    </div>
                </MotionWrapper>

                <AktivitasMahasiswa data={latestActivity} />

                <div className="w-full flex flex-row jusity-center items-center gap-4">
                    <MotionWrapper type="scaleUp" delay={0.2} className={'w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
                        <div className="text-left">
                            <Title sizeMobile="text-base" title={'Partner Kerjasama'} />
                        </div>
                        <MitraCarousel datas={partner} />
                    </MotionWrapper>
                    <div className="w-1/2">
                        <img src={`${imageURL}/programs/${fakultas.image3}`} alt="" loading="lazy" />
                    </div>
                </div>

                <MotionWrapper type={'zoomIn'} delay={0.2}>
                    <div className="text-center md:text-left space-y-3 md:space-y-4">
                        <Title title={'Berita Terbaru'} />
                        <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                            <div className="md:w-1/2 lg:w-full">
                                <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} />
                            </div>
                            <div className="md:w-1/2 flex flex-col gap-4">
                                <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} />
                                <div className="w-full flex flex-col md:flex-row gap-4">
                                    <div className="md:w-1/2">
                                        <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} />
                                    </div>
                                    <div className="md:w-1/2">
                                        <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4'}>
                    <div className="w-full flex justify-center items-center gap-4 p-4 shadow-md rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <div className="w-1/2 text-left space-y-3 md:space-y-4">
                            <Text text={'Penerimaan Mahasiswa Baru'} color="text-red-500" />
                            <Title sizeMobile="text-base" title={'Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!'} />
                            <ButtonArrow text={'Daftar'} />
=======
                        <div className="absolute -bottom-90 sm:-bottom-65 -right-2 max-w-xs md:-bottom-70 md:right-20 md:max-w-sm lg:-bottom-40 lg:right-0 lg:max-w-4xl xl:-bottom-25 xl:right-10 xl:max-w-5xl z-40 mb-10">
                            {testimonials && testimonials.length > 0 ? (
                                <TestimonialSlider data={testimonials} bgColor={'bg-white'} textColor={'text-gray-700'} arrowColor={'text-blue-500'} cssBox={''} cssContainer={''} iconVisibililty={'hidden'} borderColor={'border-blue-500'} bgColorPagination={'bg-blue-500'} />
                            ) : (
                                <div className="text-center py-6">
                                    <Text text={'Tidak ada data testimoni yang tersedia.'} color="text-gray-500" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <AktivitasMahasiswa data={latestActivity} />

                <div className="w-full flex flex-row jusity-between items-center gap-4">
                    <div className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10'}>
                        <MitraSection data={partner} />
                    </div>
                </div>

                <div>
                    <div className="text-center md:text-left space-y-3 md:space-y-4">
                        <Title title={'Berita Terbaru'} />
                        {latestBerita && latestBerita.length > 0 ? (
                            <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                                <div className="md:w-1/2 lg:w-full">
                                    <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} />
                                </div>
                                <div className="md:w-1/2 flex flex-col gap-4">
                                    <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} />
                                    <div className="w-full flex flex-col md:flex-row gap-4">
                                        <div className="md:w-1/2">
                                            <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} />
                                        </div>
                                        <div className="md:w-1/2">
                                            <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <Text text={'Tidak ada data berita yang tersedia.'} color="text-gray-500" />
                            </div>
                        )}
                    </div>
                </div>

                <div className={'space-y-3 md:space-y-4'}>
                    <div className="w-full flex justify-center items-center gap-4 p-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <div className="w-1/2 text-left space-y-3 md:space-y-4">
                            <Text text={'Penerimaan Mahasiswa Baru'} color="text-red-500" />
                            <Title sizeMobile="text-base" title={'Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!'} />
                            <ButtonArrow text={fakultas?.cta ?? 'Daftar'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
>>>>>>> 8bbe4dc (First Commit)
                        </div>
                        <div className="w-1/2 h-full bg-gray-200">
                            <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                    </div>
<<<<<<< HEAD
                </MotionWrapper>
            </div>
        </UserLayout >
    )
}

export default ProgramStudi
=======
import MitraSection from "../views/home/MitraSection";
import { X } from "lucide-react";
import HighlightCard from "../components/fakultas/HighlightCard";
import Pagination from "../components/Pagination";
=======
<<<<<<< HEAD
>>>>>>> origin/Budi
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from 'react-icons/fa'


const ProgramStudi = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const [data, setData] = useState({
    partner: [],
    testimonials: [],
    berita: [],
    prestasi: [],
    prodi: null,
    gallery: [],
  });

  const fetchData = useCallback(async () => {
    if (!slug) return;

    try {
      const [partners, testimonials, berita, prestasi, prodi, gallery] = await Promise.all([
        PartnerService.getAllPartner(),
        TestimoniService.getAllTestimoni(),
        BeritaService.getAllBerita(),
        PrestasiService.getPrestasiProdi(slug),
        ProdiService.getProdiBySlug(slug),
        GalleryService.getAllGallery(),
      ]);

      setData({ partner: partners, testimonials: testimonials.slice(0, 5), berita, prestasi, prodi, gallery });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { partner, testimonials, berita, prestasi, prodi, gallery } = data;
  const latestBerita = berita.slice(0, 4);
  const latestActivity = gallery?.slice(0, 4);
  const fakultas = prodi?.departement || {};
  const unggulan = prodi?.unggulan || [];
  const ourteam = prodi?.ourteam || [];
  const fasilitas = prodi?.fasilitas || [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ourteam.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(ourteam.length / itemsPerPage);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserLayout bgLayoutColor="bg-gray-100" position={'fixed'} margin={''} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3 lg:py-6 lg:px-6'} paddingTop={'lg:pt-20'}>
      <div className="p-4 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20">
        <div className={'w-full flex justify-around items-center'}>
          <div className={'w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10'}>
            <div className="w-full lg:w-1/2">
              <img src={`${imageURL}/programs/${fakultas.image1}`} alt="" className="w-full lg:h-[80vh] object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
            </div>
            <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
              <Title title={`Selamat Datang di Program Studi ${fakultas.name}`} />
              <RichText content={fakultas.description1} lineclamp={'text-justify'} />
              <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
            </div>
          </div>
        </div>

        <StatsSection colorIcon={'text-blue-500'} title1="Karya Ilmiah" prodi={fakultas.periode} mahasiswa={fakultas.age} lulusan={fakultas.weekly} prestasi={fakultas.class_size} />

        <div className={'w-full flex justify-around items-center'}>
          <div className={'w-full md:w-[90%] lg:w-[90%] xl:w-[90%] flex flex-col md:flex-row-reverse justify-around items-center gap-x-18'}>
            <div className="w-full md:w-fit space-y-3 md:space-y-4 flex flex-col justify-center items-center text-justify md:items-start md:text-left">
              <Title title={'Visi dan Misi'} />
              <div className="max-h-[300px] overflow-y-auto">
                <RichText content={`${fakultas.description2}`} />
              </div>
              <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
            </div>
            <div className="w-full md:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
              <button onClick={() => setIsOpen(true)} className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer">
                <img src={`https://img.youtube.com/vi/${fakultas.id_yt}/hqdefault.jpg`} alt="Thumbnail Video" className="w-full h-full object-cover" />
                <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl" whileTap={{ scale: 0.9 }}>
                  <div className="p-2 group-hover:scale-120 bg-gradient-to-b rounded-full bg-gray-600 via-gray-700 to-gray-800">
                    <FaPlay className="text-white  p-4 w-14 h-14 transition-transform duration-200 ease-in-out group-hover:scale-120" />
                  </div>
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        <div className={'w-full flex justify-around items-center'}>
          <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-14">
            <div className="w-full lg:w-[40%] text-left space-y-8">
              <Title sizeMobile="text-2xl md:text-4xl lg:text-5xl" title={'Mengapa Memilih Program Ini?'} />
              <div className="hidden lg:block">
                <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
              </div>
            </div>
            {unggulan && unggulan.length > 0 ? (
              <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
                {unggulan.map((item, index) => (
                  <HighlightCard key={index} title={item.title} text={item.description} />
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <Text text={'Tidak ada data unggulan yang tersedia.'} color="text-gray-500" />
              </div>
            )}
          </div>
        </div>

        <div className={'space-y-3 md:space-y-4'}>
          {prestasi.data && prestasi.data.length > 0 ? (
            <PrestasiSection prestasi={prestasi.data} />
          ) : (
            <div className="text-center py-6">
              <Text text={'Tidak ada data prestasi yang tersedia.'} color="text-gray-500" />
            </div>
          )}
        </div>

        <div className={'space-y-3 md:space-y-4'}>
          <div className="text-center">
            <Title title={'Dosen Penelitian'} />
          </div>
          {ourteam && ourteam.length > 0 ? (
            <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
              {currentItems.map((member, index) => (
                <div key={index}>
                  <DosenCard name={member.name} title={member.title} image={member.image} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <Text text={'Tidak ada data dosen yang tersedia.'} color="text-gray-500" />
            </div>
          )}
          <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

        <FasilitasSlider title={'Fasilitas & Inovasi'} facilities={fasilitas} />

        <div className={'space-y-3 md:space-y-4 pb-80 md:pb-56 lg:pb-20'}>
          <div className="relative">
            <div className="w-full flex justify-center gap-4 md:gap-6 lg:gap-10">
              <div className="w-1/2">
                <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
              </div>
              <div className="w-1/2">
                <div className="text-left">
                  <Text text={'Testimoni'} color="text-red-500" />
                  <span>
                    <Title sizeMobile="text-base" title={'Apa Kata Mereka Soal'} />
                    <Title sizeMobile="text-base" color="text-blue-500" title={'Unpas?'} />
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-90 sm:-bottom-65 -right-2 max-w-xs md:-bottom-70 md:right-20 md:max-w-sm lg:-bottom-40 lg:right-0 lg:max-w-4xl xl:-bottom-25 xl:right-10 xl:max-w-5xl z-40 mb-10">
              {testimonials && testimonials.length > 0 ? (
                <TestimonialSlider
                  data={testimonials}
                  bgColor={'bg-white'}
                  textColor={'text-gray-700'}
                  arrowColor={'text-blue-500'}
                  cssBox={''}
                  cssContainer={''}
                  iconVisibililty={'hidden'}
                  borderColor={'border-blue-500'}
                  bgColorPagination={'bg-blue-500'}
                />
              ) : (
                <div className="text-center py-6">
                  <Text text={'Tidak ada data testimoni yang tersedia.'} color="text-gray-500" />
                </div>
              )}
            </div>
          </div>
        </div>

        <AktivitasMahasiswa data={latestActivity} />

        <div className="w-full flex flex-row jusity-between items-center gap-4">
          <div className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10'}>
            <MitraSection data={partner} />
          </div>
        </div>

        <div>
          <div className="text-center md:text-left space-y-3 md:space-y-4">
            <Title title={'Berita Terbaru'} />
            {latestBerita && latestBerita.length > 0 ? (
              <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                <div className="md:w-1/2 lg:w-full">
                  <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} />
                </div>
                <div className="md:w-1/2 flex flex-col gap-4">
                  <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} />
                  <div className="w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2">
                      <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} />
                    </div>
                    <div className="md:w-1/2">
                      <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <Text text={'Tidak ada data berita yang tersedia.'} color="text-gray-500" />
              </div>
            )}
          </div>
        </div>

        <div className={'space-y-3 md:space-y-4'}>
          <div className="w-full flex justify-center items-center gap-4 p-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl">
            <div className="w-1/2 text-left space-y-3 md:space-y-4">
              <Text text={'Penerimaan Mahasiswa Baru'} color="text-red-500" />
              <Title sizeMobile="text-base" title={'Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!'} />
              <ButtonArrow text={fakultas?.cta ?? 'Daftar'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
            </div>
            <div className="w-1/2 h-full bg-gray-200">
              <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center bg-black/80 z-50"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }} // Tambahkan durasi transisi
            >
              <motion.div className="relative p-4 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation() // Mencegah modal tertutup saat button diklik
                    setIsOpen(false)
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
                >
                  <X size={20} />
                </button>

                <iframe
                  className="w-full aspect-video border-2 border-white rounded-lg md:rounded-2xl lg:rounded-4xl"
                  src={`https://www.youtube.com/embed/${fakultas.id_yt}`}
                  title="Kisah Alumni"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </UserLayout>
  )
};

export default ProgramStudi;
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
=======
=======

const ProgramStudi = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const [data, setData] = useState({
        partner: [],
        testimonials: [],
        berita: [],
        prestasi: [],
        prodi: null,
        gallery: [],
    });

    const fetchData = useCallback(async () => {
        if (!slug) return;

        try {
            const [partners, testimonials, berita, prestasi, prodi, gallery] = await Promise.all([
                PartnerService.getAllPartner(),
                TestimoniService.getAllTestimoni(),
                BeritaService.getAllBerita(),
                PrestasiService.getPrestasiProdi(slug),
                ProdiService.getProdiBySlug(slug),
                GalleryService.getAllGallery(),
            ]);

            setData({ partner: partners, testimonials: testimonials.slice(0,5), berita, prestasi, prodi, gallery });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const { partner, testimonials, berita, prestasi, prodi, gallery } = data;
    const latestBerita = berita.slice(0, 4);
    const latestActivity = gallery?.slice(0, 4);
    const fakultas = prodi?.departement || {};
    const unggulan = prodi?.unggulan || [];
    const ourteam = prodi?.ourteam || [];
    const fasilitas = prodi?.fasilitas || [];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ourteam.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(ourteam.length / itemsPerPage);

    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'}>
            <div className="p-4 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20">
                <div className={'w-full flex justify-around items-center'}>
                    <div className={'w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10'}>
                        <div className="w-full lg:w-1/2">
                            <img src={`${imageURL}/programs/${fakultas.image1}`} alt="" className="w-full lg:h-[80vh] object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                            <Title title={`Selamat Datang di Program Studi ${fakultas.name}`} />
                            <RichText content={fakultas.description1} lineclamp={'text-justify'} />
                            <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                        </div>
                    </div>
                </div>

                <StatsSection colorIcon={'text-blue-500'} title1="Karya Ilmiah" prodi={fakultas.periode} mahasiswa={fakultas.age} lulusan={fakultas.weekly} prestasi={fakultas.class_size} />

                <div className={'w-full flex justify-around items-center'}>
                    <div className={'w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col md:flex-row-reverse justify-around items-center gap-4'}>
                        <div className="w-full md:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${fakultas.id_yt}/hqdefault.jpg`}
                                    alt="Thumbnail Video"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex justify-center items-center ">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 22v-20l18 10-18 10z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="w-full md:w-fit space-y-3 md:space-y-4 flex flex-col justify-center items-center text-justify md:items-start md:text-left">
                            <Title title={'Visi dan Misi'} />
                            <RichText content={`${fakultas.description2}`} />
                            <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                        </div>
                    </div>
                </div>

                <div className={'w-full flex justify-around items-center'}>
                    <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        <div className="w-full lg:w-[40%] text-left space-y-8">
                            <Title sizeMobile="text-2xl md:text-4xl lg:text-6xl" title={'Mengapa Memilih Program Ini'} />
                            <div className="hidden lg:block">
                                <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                            </div>
                        </div>
                        {unggulan && unggulan.length > 0 ? (
                            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
                                {unggulan.map((item, index) => (
                                    <HighlightCard key={index} title={item.title} text={item.description} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <Text text={'Tidak ada data unggulan yang tersedia.'} color="text-gray-500" />
                            </div>
                        )}
                    </div>
                </div>

                <div className={'space-y-3 md:space-y-4'}>
                    {prestasi.data && prestasi.data.length > 0 ? (
                        <PrestasiSection prestasi={prestasi.data} />
                    ) : (
                        <div className="text-center py-6">
                            <Text text={'Tidak ada data prestasi yang tersedia.'} color="text-gray-500" />
                        </div>
                    )}
                </div>

                <div className={'space-y-3 md:space-y-4'}>
                    <div className="text-center">
                        <Title title={'Dosen Penelitian'} />
                    </div>
                    {ourteam && ourteam.length > 0 ? (
                        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
                            {currentItems.map((member, index) => (
                                <div key={index}>
                                    <DosenCard name={member.name} title={member.title} image={member.image} />
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div className="text-center py-6">
                            <Text text={'Tidak ada data dosen yang tersedia.'} color="text-gray-500" />
                        </div>
                    )}
                    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

                <FasilitasSlider title={'Fasilitas & Inovasi'} facilities={fasilitas} />

                <div className={'space-y-3 md:space-y-4 pb-80 md:pb-56 lg:pb-20'}>
                    <div className="relative">
                        <div className="w-full flex justify-center gap-4 md:gap-6 lg:gap-10">
                            <div className="w-1/2">
                                <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
                            </div>
                            <div className="w-1/2">
                                <div className="text-left">
                                    <Text text={'Testimoni'} color="text-red-500" />
                                    <span>
                                        <Title sizeMobile="text-base" title={'Apa Kata Mereka Soal'} />
                                        <Title sizeMobile="text-base" color="text-blue-500" title={'Unpas?'} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-90 sm:-bottom-65 -right-2 max-w-xs md:-bottom-70 md:right-20 md:max-w-sm lg:-bottom-40 lg:right-0 lg:max-w-4xl xl:-bottom-25 xl:right-10 xl:max-w-5xl z-40 mb-10">
                            {testimonials && testimonials.length > 0 ? (
                                <TestimonialSlider data={testimonials} bgColor={'bg-white'} textColor={'text-gray-700'} arrowColor={'text-blue-500'} cssBox={''} cssContainer={''} iconVisibililty={'hidden'} borderColor={'border-blue-500'} bgColorPagination={'bg-blue-500'} />
                            ) : (
                                <div className="text-center py-6">
                                    <Text text={'Tidak ada data testimoni yang tersedia.'} color="text-gray-500" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <AktivitasMahasiswa data={latestActivity} />

                <div className="w-full flex flex-row jusity-between items-center gap-4">
                    <div className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10'}>
                        <MitraSection data={partner} />
                    </div>
                </div>

                <div>
                    <div className="text-center md:text-left space-y-3 md:space-y-4">
                        <Title title={'Berita Terbaru'} />
                        {latestBerita && latestBerita.length > 0 ? (
                            <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                                <div className="md:w-1/2 lg:w-full">
                                    <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} />
                                </div>
                                <div className="md:w-1/2 flex flex-col gap-4">
                                    <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} />
                                    <div className="w-full flex flex-col md:flex-row gap-4">
                                        <div className="md:w-1/2">
                                            <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} />
                                        </div>
                                        <div className="md:w-1/2">
                                            <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <Text text={'Tidak ada data berita yang tersedia.'} color="text-gray-500" />
                            </div>
                        )}
                    </div>
                </div>

                <div className={'space-y-3 md:space-y-4'}>
                    <div className="w-full flex justify-center items-center gap-4 p-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <div className="w-1/2 text-left space-y-3 md:space-y-4">
                            <Text text={'Penerimaan Mahasiswa Baru'} color="text-red-500" />
                            <Title sizeMobile="text-base" title={'Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!'} />
                            <ButtonArrow text={fakultas?.cta ?? 'Daftar'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                        </div>
                        <div className="w-1/2 h-full bg-gray-200">
                            <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                    </div>
>>>>>>> origin/Budi
                </div>

                {isOpen && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50" onClick={() => setIsOpen(false)}>
                        <div className="relative p-4 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
                            >
                                <X size={20} />
                            </button>

                            <iframe
                                className="w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl"
                                src={`https://www.youtube.com/embed/${fakultas.id_yt}`}
                                title="Kisah Alumni"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </UserLayout>
    );
};

export default ProgramStudi;
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
