import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Section3 from "../assets/gedung.jpeg";
import Title from "../components/Title";
import Text from "../components/Text";
import PendaftaranSection from "../views/home/PendaftaranSection";
import StatsSection from "../components/prodi/StatsSection";
import PrestasiSection from "../components/prodi/PrestasiSection";
import FasilitasSlider from "../components/prodi/FasilitasSlider";
import DosenCard from "../components/prodi/DosenCard";
import RichText from "../components/RichText";
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
import RegistrasiService from "../fetching/registration";
import ProdiService from "../fetching/prodi";
import Loading from "../components/Loading";
import GalleryService from "../fetching/galery";
import MitraSection from "../views/home/MitraSection";
import { X } from "lucide-react";
import HighlightCard from "../components/fakultas/HighlightCard2";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Logo from "../assets/logo.webp";
import TestimonialSection from "../views/home/TestimonialSection";
import { PiBookBookmarkLight, PiSealCheck, PiSealCheckFill } from "react-icons/pi";
import ArticleCard from "../components/artikel/ArticleCard";
import Gedung from "../assets/gedung.webp"
import ButtonHover from "../components/ButtonHover";
import { Helmet } from "react-helmet-async";
import AnimatedRichTitle from "../components/prodi/AnimatedRichTitle";
import AnimatedRichSubtitle from "../components/prodi/AnimatedRichSubtitle";

const MemoizedPendaftaranSection = React.memo(PendaftaranSection);

const ProgramStudi = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(4);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const [data, setData] = useState({
    partner: [],
    testimonials: [],
    berita: [],
    prestasi: [],
    prodi: null,
    gallery: [],
    jalur: [],
  });

  const fetchData = useCallback(async () => {
    if (!slug) return;
    try {
      const prodi = await ProdiService.getProdiBySlug(slug);

      const [partners, testimonials, berita, prestasi, gallery, jalur] =
        await Promise.all([
          PartnerService.getAllPartner(),
          TestimoniService.getTestimonibyDepartement({
            id: prodi?.departement?.id,
          }),
          BeritaService.getAllBerita(),
          PrestasiService.getPrestasiProdi(slug),
          GalleryService.getAllInovasiSlug({ slug: slug }),
          RegistrasiService.getAllRegistrasi(),
        ]);
      setData({
        partner: partners,
        testimonials: testimonials.slice(0, 5),
        berita,
        prestasi,
        prodi,
        gallery,
        jalur,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { partner, testimonials, berita, prestasi, prodi, gallery, jalur } =
    data;
  const latestBerita = berita.slice(0, 4);
  const latestActivity = gallery;
  const newJalur = jalur;
  const fakultas = prodi?.departement || {};
  const test = prodi?.test || {};
  const dekan = prodi?.dekan || {};
  const unggulan = prodi?.unggulan?.slice(0, 9) || [];
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
    <>
      <style>
        {`
          p {
            margin: 0;
          }
        `}
      </style>
      <Helmet>
        <title>{`Program Studi ${fakultas.name} - Universitas Pasundan`}</title>
        <meta name="description" content={`Informasi lengkap tentang Program Studi ${fakultas.name} Universitas Pasundan termasuk profil, keunggulan, fasilitas, dan prospek karir.`} />
        <meta name="keywords" content={`${fakultas.name}, Program Studi ${fakultas.name}, Universitas Pasundan, PMB Unpas, Pendidikan Tinggi`} />
        <meta property="og:title" content={`Program Studi ${fakultas.name} - Universitas Pasundan`} />
        <meta property="og:description" content={`Informasi lengkap tentang Program Studi ${fakultas.name} Universitas Pasundan`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={fakultas.image1 ? `${imageURL}/programs/${fakultas.image1}` : Logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Program Studi ${fakultas.name} - Universitas Pasundan`} />
        <meta name="twitter:description" content={`Informasi lengkap tentang Program Studi ${fakultas.name} Universitas Pasundan`} />
        <meta name="twitter:image" content={fakultas.image1 ? `${imageURL}/programs/${fakultas.image1}` : Logo} />
      </Helmet>

      <UserLayout
        bgLayoutColor="bg-[#F3F3F3]"
        bgColor="bg-[#F3F3F3]"
        position="fixed"
        margin=""
        titleColor="text-black"
        paddingDekstop="md:py-3 md:px-3 lg:py-6 lg:px-6"
        paddingTop="lg:pt-10"
      >
        <div className="p-0 lg:py-12 space-y-14 md:space-y-16 lg:space-y-20">
          {/* Hero Section */}
          <motion.div
            className="relative p-0 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full">
              <div
                className="md:flex flex-col justify-center bg-cover bg-no-repeat lg:rounded-4xl p-4 md:p-6 lg:p-20 relative overflow-hidden space-y-3 h-fit lg:h-[75vh] lg:mt-12 rounded-b-3xl"
                style={{
                  backgroundImage: `url(${fakultas.image1
                    ? `${imageURL}/programs/${fakultas.image1}`
                    : Gedung
                    })`,
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent"></div>
                <div className="relative flex flex-col justify-center items-center gap-4 p-5 py-16 h-[60vh] ">
                  <div className="flex justify-center items-center ">
                    <div className="flex items-center md:hidden gap-3 md:gap-4 z-1 cursor-pointer absolute top-4 rounded-lg p-2 md:p-4">
                      <img
                        src={Logo}
                        alt="Logo Universitas Pasundan"
                        className=" md:w-12 md:h-12 object-cover"
                        loading="lazy"
                        width="30"
                        height="30"
                      />
                      <div className="w-[85%]">
                        <p className={`text-[10px]/3 `}>
                          Penerimaan Mahasiswa Baru
                        </p>
                        <p
                          className={`text-[10px]/3 md:text-base lg:text-lg font-medium`}
                        >
                          Universitas Pasundan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h1 className="text-xl md:text-3xl lg:text-4xl md:font-bold font-medium text-white text-center">
                      Selamat Datang di
                    </h1>
                    <h1 className="text-xl md:text-3xl lg:text-4xl md:font-bold text-white text-center">
                      Program Studi{" "}
                      <span style={{ color: fakultas.color }} className="font-bold">
                        {fakultas.name}
                      </span>
                    </h1>
                  </div>

                  <div className="">
                    <RichText
                      content={fakultas.description1}
                      textColor="text-white"
                      sizeText="text-xs md:text-sm lg:text-lg text-center"
                      leading="leading-5 lg:leading-6"
                    />
                  </div>

                  <div className="flex gap-3 justify-center ">
                    <Button
                      css="w-fit h-fit outline-[#C93829] outline outline-2"
                      paddingMobile="px-4 py-3"
                      text="Daftar Sekarang"
                      bgColor="bg-primary"
                      hoverBgColor="hover:outline-2 hover:outline-text"
                      onClick={() =>
                        (window.location.href = `https://registrasi.unpas.ac.id/register`)
                      }
                    />
                    <Button
                      css="w-fit h-fit"
                      paddingMobile="px-4 py-3"
                      text="Hubungi Admin"
                      bgColor="outline outline-2 outline-footer text-[#F3F4F4]"
                      hoverBgColor="hover:border-2 hover:bg-[#034833] hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Hero Section End */}

          {/* Video Section */}
          <motion.div
            className="w-full flex lg:flex-row justify-around items-center px-6 md:px-6 lg:px-12 gap-6 md:gap-6 lg:gap-8 flex-col-reverse "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={
                    fakultas.image2
                      ? `${imageURL}/programs/${fakultas.image2}`
                      : Gedung
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Gedung;
                  }}
                  loading="lazy"
                  alt="Thumbnail Video"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
                <motion.div
                  className="absolute inset-0 flex justify-center items-center rounded-xl md:rounded-2xl lg:rounded-4xl"
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="p-2 group-hover:scale-110 bg-gray-700 rounded-full">
                    <FaPlay className="text-white p-4 w-14 h-14" />
                  </div>
                </motion.div>
              </button>
            </div>

            <div className="w-full space-y-4 md:space-y-6 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
              <div className="flex flex-col items-center lg:items-start space-y-4 md:space-y-4 lg:space-y-4 md:w-full">
                <AnimatedRichSubtitle color={fakultas.color} text={fakultas.title1} className="md:mx-auto lg:mx-0"/>
                <RichText content={fakultas.description1} />
                <div className="flex gap-3 md:mx-auto lg:mx-0">
                  <motion.div>
                    <Button
                      css="w-fit h-fit outline-[#C93829] outline outline-2"
                      paddingMobile="px-4 py-2"
                      text="Daftar Sekarang"
                      bgColor="bg-primary"
                      hoverBgColor="hover:border-2"
                      onClick={() =>
                        fakultas?.link_program &&
                        (window.location.href = fakultas.link_program)
                      }
                    />
                  </motion.div>

                  <motion.div>
                    <Button
                      css="w-fit h-fit"
                      paddingMobile="px-4 py-2"
                      text="Hubungi Kami"
                      bgColor="outline outline-2 outline-[#034833] text-gray-900 bg-transparent"
                      hoverBgColor="hover:border-2 hover:bg-[#034833] hover:text-white"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Video Section End */}

          {/* Fakultas Dalam Angka */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=""
          >
            {fakultas.periode && fakultas.age && fakultas.weekly && fakultas.class_size && (
              <>
                <div className="w-full flex justify-center items-center mb-4">
                  <AnimatedRichTitle
                    text={`${fakultas.name} Dalam Angka`}
                    color={fakultas.color}
                  />
                </div>
                <StatsSection
                  colorIcon={fakultas.color}
                  title1="Karya Ilmiah"
                  prodi={fakultas.periode}
                  mahasiswa={fakultas.age}
                  lulusan={fakultas.weekly}
                  prestasi={fakultas.class_size}
                />
              </>
            )}
          </motion.div>
          {/* Fakultas Dalam Angka End */}

          {/* Fakultas Unggulan Section */}
          <motion.div
            className=" w-full flex lg:flex-row justify-around items-center gap-4 md:gap-6 lg:gap-8 px-6 md:px-6 lg:px-12 flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex flex-col items-start space-y-2 md:space-y-2 lg:space-y-4">
                  <AnimatedRichSubtitle color={fakultas.color} text={fakultas.title2} className="mx-auto lg:mx-0"/>
                  <p className={`text-xs md:text-sm lg:text-sm text-gray-800 overflow-hidden leading-6 text-center lg:text-left`} dangerouslySetInnerHTML={{ __html: fakultas.description2 }} />
                  {/* <RichText content={fakultas.description2} /> */}
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
              <button className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
                <img
                  src={
                    fakultas.image2
                      ? `${imageURL}/programs/${fakultas.image2}`
                      : Gedung
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Gedung;
                  }}
                  loading="lazy"
                  alt="Thumbnail Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
              </button>
            </div>
          </motion.div>
          {/* Fakultas Unggulan Section End */}

          {/* Mengapa Memilih Fakultas Section */}
          <motion.div className=" p-5 md:px-6 lg:px-12 relative w-full overflow-hidden space-y-4 md:space-y-6 lg:space-y-8">
            <div className="w-full flex justify-center items-center">
              <div className="w-full lg:hidden md:w-full lg:w-1/3 xl:w-full flex justify-center items-center text-center flex-wrap">
                <AnimatedRichTitle text={`Mengapa Harus Memilih Program Studi ${fakultas?.name?.replace(
                  "Fakultas ",
                  ""
                )} Universitas Pasundan`}
                  color={fakultas.color} />
              </div>

              <div className="hidden lg:flex w-full md:w-1/3 lg:w-1/3 xl:w-full flex-col justify-center items-center text-center flex-wrap">
                <AnimatedRichTitle text={`Mengapa Harus Memilih Program Studi ${fakultas?.name?.replace(
                  "Fakultas ",
                  ""
                )}`}
                  color={fakultas.color} />
                <AnimatedRichTitle
                  text={`Universitas Pasundan`}
                  color={fakultas.color}
                />
              </div>
            </div>
            <Text text={""} />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-[#E4E4E7]">
              {unggulan.map((item, index) => (
                <HighlightCard
                  key={index}
                  title={item.title}
                  text={item.description}
                  image={item.image}
                  hoverColor={fakultas.color}
                />
              ))}
            </div>
          </motion.div>
          {/* Mengapa Memilih Fakultas Section End */}

          {/* Apa yang kamu pelajari Section */}
          <motion.div
            className=" w-full flex lg:flex-row justify-around items-center gap-4 md:gap-6 lg:gap-8 px-6 md:px-6 lg:px-12 flex-col-reverse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-full md:w-full space-y-4 md:space-y-6 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="p-3 md:p-4 rounded-full bg-[#F4F4F4] outline-white shadow w-fit h-fit mb-6 md:mb-8">
                  <PiBookBookmarkLight style={{ color: `${fakultas.color}` }} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="flex flex-col items-center md:items-start space-y-2 lg:space-y-4">
                  <AnimatedRichSubtitle color={fakultas.color} text={fakultas.title3} />
                  <p className={`text-xs md:text-sm lg:text-sm text-gray-800 overflow-hidden leading-6 text-center md:text-left`} dangerouslySetInnerHTML={{ __html: fakultas.description3 }} />
                  {/* <RichText content={fakultas.description3} /> */}
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
              <button className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
                <img
                  src={
                    fakultas.image3
                      ? `${imageURL}/programs/${fakultas.image3}`
                      : Gedung
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Gedung;
                  }}
                  loading="lazy"
                  alt="Thumbnail Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
              </button>
            </div>
          </motion.div>
          {/* Apa yang kamu pelajari Section End */}

          {/* Prospek karir Section */}
          <motion.div
            className="w-full flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-20 px-6 md:px-6 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex rounded-xl md:rounded-2xl lg:rounded-4xl">
              <div className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
                <img
                  src={
                    fakultas.image4
                      ? `${imageURL}/programs/${fakultas.image4}`
                      : Gedung
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Gedung;
                  }}
                  loading="lazy"
                  alt="Thumbnail Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
              </div>
            </div>
            <div className="w-full md:w-full space-y-4 md:space-y-6 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="p-3 md:p-4 rounded-full bg-[#F4F4F4] outline-white shadow w-fit h-fit mb-6 md:mb-8">
                  <PiSealCheck style={{ color: `${fakultas.color}` }} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="flex flex-col items-start space-y-2 lg:space-y-4">
                  <AnimatedRichSubtitle color={fakultas.color} text={fakultas.title4} />
                  <p className={`text-xs md:text-sm lg:text-sm text-gray-800 overflow-hidden leading-6 text-center md:text-left`} dangerouslySetInnerHTML={{ __html: fakultas.description4 }} />
                  {/* <RichText content={fakultas.description4} /> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Prospek karir Section End */}

          {/* jalur */}
          <div className="space-y-8 md:space-y-14 lg:space-y-20 px-6 md:px-6 lg:px-12">
            <div className="w-full flex justify-center items-center">
              <MemoizedPendaftaranSection
                image={Section3}
                title="Pendaftaran"
                subtitle="Jalur Pendaftaran"
                jalurPendaftaran={newJalur}
                color={fakultas.color}
                titleColor="text-black"
                subtitleColor={fakultas.color}
                iconColor={fakultas.color}
                borderPaginationColor={fakultas.color}
                paginationColor={fakultas.color}
              />
            </div>
          </div>

          <motion.div
            className="w-full flex justify-center items-center p-0 md:px-6 md:py-9 lg:px-8 lg:py-11"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <div
              className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] px-4 py-4 rounded-none md:rounded-2xl lg:rounded-4xl lg:p-6 relative z-2"
              style={{
                background: `linear-gradient(to right, ${fakultas.color} 0%, white 90%, transparent 100%)`
              }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 items-center text-center relative z-10">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-[60%] md:w-fit hidden lg:block">
                    <Title
                      sizeText="text-sm md:text-xl lg:text-[32px] text-white"
                      fontWeight="font-semibold"
                      title="Dapatkan Informasi Lainnya"
                    />
                    <div className="flex items-center gap-2 md:gap-4">
                      <Title
                        sizeText="text-sm md:text-xl lg:text-2xl text-white"
                        fontWeight="font-base"
                        title="Seputar PMB Unpas"
                      />
                      <FaArrowRightLong className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 animated-arrow" color="white" />
                    </div>
                  </div>
                  <div className="flex lg:hidden items-center gap-4 text-left">
                    <Title
                      sizeText="text-sm md:text-2xl lg:text-[32px] text-white"
                      fontWeight="font-base"
                      title="Dapatkan Informasi Lainya Seputar PMB Unpas"
                    />
                    <FaArrowRightLong className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rotate-90" color="white" />
                  </div>
                </div>
                <div className="flex md:gap-5 lg:gap-10 gap-5 md:mt-0 ">
                  <button
                    onClick={() => { }}
                    className="cursor-pointer relative overflow-hidden group py-2 px-4 md:px-8 md:py-4 text-black text-right whitespace-nowrap rounded-lg md:rounded-xl border-footer border-2 transition-all duration-500 hover:text-white"
                  >
                    <span className="relative z-10 cursor-pointer text-xs md:text-sm lg:text-sm font-bold">Informasi Biaya</span>
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out bg-footer z-0"></span>
                  </button>
                  <button
                    onClick={() => { }}
                    className="cursor-pointer relative hidden md:block overflow-hidden group py-2 px-4 md:px-8 md:py-4 text-black text-right whitespace-nowrap rounded-lg md:rounded-xl border-footer border-2 transition-all duration-500 hover:text-white"
                  >
                    <span className="relative z-10 cursor-pointer text-xs md:text-sm lg:text-sm font-bold">Buku Panduan</span>
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out bg-footer z-0"></span>
                  </button>
                  <button
                    onClick={() => { }}
                    className="cursor-pointer relative overflow-hidden group py-2 px-4 md:px-8 md:py-4 text-black text-right whitespace-nowrap rounded-lg md:rounded-xl border-footer border-2 transition-all duration-500 hover:text-white"
                  >
                    <span className="relative z-10 cursor-pointer text-xs md:text-sm lg:text-sm font-bold">Hubungi Admin</span>
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out bg-footer z-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          {/* jalur end */}

          {/* Dosen Penelitian Section */}
          <motion.div
            className="space-y-4 md:space-y-6 lg:space-y-8 px-6 md:px-6 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {ourteam && ourteam.length > 0 ? (
              <>
                <div className="text-center">
                  <AnimatedRichTitle text="Dosen & Penelitian" color={fakultas.color} />
                </div>
                <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
                  {currentItems.map((member, index) => (
                    <div key={index}>
                      <DosenCard
                        name={member.name}
                        title={member.title}
                        image={member.image}
                        color={fakultas.color}
                        data={member}
                      />
                    </div>
                  ))}
                </div>
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            ) : (
              <></>
            )}
          </motion.div>
          {/* Dosen Penelitian Section End */}

          {/* Inovasi Section */}
          {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <AktivitasMahasiswa data={latestActivity} color={fakultas.color} />
        </motion.div> */}
          {/* Inovasi Section End */}

          {/* Prestasi Section */}
          <motion.div
            className="w-full space-y-4 md:space-y-6 lg:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            {prestasi.data && prestasi.data.length > 0 ? (
              <PrestasiSection prestasi={prestasi.data} color={fakultas.color} />
            ) : (
              <></>
            )}
          </motion.div>
          {/* Prestasi Section End */}

          {/* Fasilitas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="px-6 md:px-0"
          >
            {fasilitas.length > 0 ? (
              <>
                <div className="text-center mb-5">
                  <AnimatedRichTitle text="Fasilitas" color={fakultas.color} />
                </div>
                <FasilitasSlider title="Fasilitas" facilities={fasilitas} color={fakultas.color} />
              </>
            ) : (
              <></>
            )}
          </motion.div>
          {/* Fasilitas Section End */}

          {/* Mitra Section */}
          <motion.div
            className="w-full flex flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-10">
              <MitraSection data={partner} color={fakultas.color} />
            </div>
          </motion.div>
          {/* Mitra Section End */}

          {/* Testimoni Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {testimonials.length > 0 ? (
              <>
                <div className="w-full text-center ">
                  <AnimatedRichTitle text="Testimoni" color={fakultas.color} />
                </div>
                <div className="w-full">
                  <TestimonialSection
                    data={testimonials}
                    displayDekstop="md:flex-col"
                    visibilityTitle="hidden"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </motion.div>
          {/* Testimoni Section End */}

          {/* Berita Terbaru Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <div className="text-center md:text-left space-y-4 md:space-y-6 lg:space-y-8 px-0">
              <div className="text-center">
                <AnimatedRichTitle text="Berita Terbaru" color={fakultas.color} />
              </div>
              <div className="w-full">
                <div className="text-left py-2 px-5 md:px-10 lg:px-15">
                  <ArticleCard data={latestBerita} />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Berita Terbaru Section End */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
          >
            <CTASection
              onClick={() =>
                fakultas?.link_program &&
                (window.location.href = fakultas.link_program)
              }
              color="bg-[#FEF251]"
            />
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  className="relative w-[90%] md:w-[70%] lg:w-[50%] border-2 border-white rounded-xl md:rounded-2xl lg:rounded-4xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={20} />
                  </button>
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube-nocookie.com/embed/${fakultas.id_yt}`}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl md:rounded-2xl lg:rounded-4xl"
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </UserLayout></>
  );
};

export default ProgramStudi;