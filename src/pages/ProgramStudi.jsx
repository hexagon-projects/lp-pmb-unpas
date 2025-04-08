import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Section3 from "../assets/gedung.jpeg";
import Title from "../components/Title";
import Text from "../components/Text";
import PendaftaranSection from "../views/home/PendaftaranSection";
import StatsSection from "../components/StatsSection";
import PrestasiSection from "../components/prodi/PrestasiSection";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import TestimonialSlider from "../components/TestimonialSlider";
import AktivitasMahasiswa from "../components/prodi/AktivitasMahasiswa";
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
import LogoText from "../components/LogoText";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import Gedung from "../assets/gedung.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import IdentityService from "../fetching/identity";
import Logo from "../assets/logo.webp";

const MemoizedPendaftaranSection = React.memo(PendaftaranSection);

const ProgramStudi = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const navigate = useNavigate();

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
          TestimoniService.getTestimonibyDepartement(prodi?.departement?.id),
          BeritaService.getAllBerita(),
          PrestasiService.getPrestasiProdi(slug),
          GalleryService.getAllInovasiSlug(slug),
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
    <UserLayout
      bgLayoutColor="bg-[#F3F3F3]"
      bgColor="bg-[#F3F3F3]"
      position="fixed"
      margin=""
      titleColor="text-black"
      paddingDekstop="md:py-3 md:px-3 lg:py-6 lg:px-6"
      paddingTop="lg:pt-20"
    >
      <div className="p-0 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20">
        {/* Hero Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full">
            <div
              className="md:flex flex-col justify-center bg-cover bg-no-repeat md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-20 relative overflow-hidden space-y-3 h-fit lg:h-[70vh] md:mt-10 rounded-b-3xl"
              style={{
                backgroundImage: `url(${
                  fakultas.image1
                    ? `${imageURL}/programs/${fakultas.image1}`
                    : Gedung
                })`,
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent"></div>
              <div className="relative grid gap-5 p-5 py-36 h-[90vh]">
                <div className="flex justify-center items-center">
                  <div className="flex items-center md:hidden gap-3 md:gap-4 z-1 cursor-pointer absolute top-10 rounded-lg bg-white/60 p-2 md:p-4">
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
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl md:font-bold font-medium text-white text-center">
                    Selamat Datang di
                  </h1>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl md:font-bold font-medium text-white text-center">
                    Program Studi{" "}
                    <span style={{ color: fakultas.color }}>
                      {fakultas.name}
                    </span>
                  </h1>
                </div>

                <div className="">
                  <RichText
                    content={fakultas.description1}
                    textColor="text-white"
                    sizeText="text-xs md:text-sm lg:text-lg text-center"
                  />
                </div>

                <div className="flex gap-3 justify-center">
                  <Button
                    css="w-fit h-fit outline-[#C93829] outline outline-2"
                    paddingMobile="px-4 py-3"
                    text="Daftar Sekarang"
                    bgColor="bg-primary"
                    hoverBgColor="hover:border-3 hover:border-white/50"
                    onClick={() =>
                      (window.location.href = `https://registrasi.unpas.ac.id/register`)
                    }
                  />
                  <Button
                    css="w-fit h-fit"
                    paddingMobile="px-4 py-3"
                    text="Hubungi Kami"
                    bgColor="outline outline-2 outline-[#034833] text-[#F3F4F4] bg-transparent"
                    hoverBgColor="hover:border-3 hover:border-white/50 hover:bg-[#034833] hover:text-white"
                  />
                </div>
              </div>
              {/* <Title color="text-white" title={`Selamat Datang`} />
                <Title
                  color="text-white"
                  title={`di Program Studi ${fakultas.name}`}
                /> */}
              {/* 
              <svg
                style={{ visibility: "hidden", position: "absolute" }}
                width="0"
                height="0"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>
              <div className="relative z-10 w-full md:w-1/2 h-[40vh] flex flex-col justify-center items-start gap-4">
                <Title color="text-white" title={`Selamat Datang`} />
                <Title
                  color="text-white"
                  title={`di Program Studi ${fakultas.name}`}
                />
                <nav
                  className="flex text-white text-sm"
                  aria-label="Breadcrumb"
                >
                  <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                    <li className="list-none">
                      <a href="/" class="flex items-center text-white">
                        <svg
                          class="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7m-9 5v6m4-6v6m5-10l2 2"
                          ></path>
                        </svg>
                        Beranda
                      </a>
                    </li>
                    <li className="list-none">
                      <span class="mx-2 text-white">/</span>
                    </li>
                    <li className="list-none">
                      <a
                        href={`/fakultas/${test.fakultas_slug}`}
                        class="text-white"
                      >
                        {test.fakultas_name}
                      </a>
                    </li>
                    <li className="list-none">
                      <span class="mx-2 text-white">/</span>
                    </li>
                    <li class="text-white font-medium list-none">
                      {fakultas.name}
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="absolute top-4 left-4 z-10">
                <LogoText titleColor="text-white" />
              </div> */}
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 z-20">
            <Button
              text="Daftar Sekarang"
              bgColor="bg-primary"
              hoverBgColor="hover:border-3 hover:border-white/50"
              onClick={() =>
                (window.location.href = `https://registrasi.unpas.ac.id/register`)
              }
            />
          </div> */}
        </motion.div>
        {/* Hero Section End */}

        {/* Video Section */}
        <motion.div
          className="w-full flex lg:flex-row justify-around items-center gap-6 md:gap-6 lg:gap-8 px-6 md:px-0 flex-col-reverse"
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
                src={`${imageURL}/programs/${fakultas.image2}`}
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

          <div className="w-full md:w-fit space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col items-start space-y-0 md:space-y-2 lg:space-y-2">
                <Title title={fakultas.title1} color={fakultas.color} />
                <RichText content={fakultas.description1} />
                <div className="flex gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Button
                      css="w-fit h-fit outline-[#C93829] outline outline-2"
                      paddingMobile="px-4 py-2"
                      text="Daftar Sekarang"
                      bgColor="bg-primary"
                      hoverBgColor="hover:border-3 hover:border-white/50"
                      onClick={() =>
                        fakultas?.link_program &&
                        (window.location.href = fakultas.link_program)
                      }
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Button
                      css="w-fit h-fit"
                      paddingMobile="px-4 py-2"
                      text="Hubungi Kami"
                      bgColor="outline outline-2 outline-[#034833] text-gray-900 bg-transparent"
                      hoverBgColor="hover:border-3 hover:border-white/50 hover:bg-[#034833] hover:text-white"
                    />
                  </motion.div>
                </div>
                {/* <div className="flex gap-5 bg-gray-300 p-3 rounded-xl items-center shadow-2xs">
                  <img src={`${imageURL}/ourteams/${dekan.image}`} alt={dekan.image} className='rounded-full w-16 h-16' />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-sora text-lg font-bold text-gray-900">{dekan.name}</h1>
                    <span className='font-sora text-sm text-gray-900'>{dekan.title}</span>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Video Section End */}

        {/* Fakultas Dalam Angka */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full flex justify-center items-center">
            <Title
              title={`${fakultas.name} Dalam Angka`}
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
        </motion.div>
        {/* Fakultas Dalam Angka End */}

        {/* Fakultas Unggulan Section */}
        <motion.div
          className="w-full flex lg:flex-row justify-around items-center gap-4 md:gap-6 lg:gap-8 px-6 md:px-0 flex-col-reverse"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-full md:w-fit space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col items-start space-y-0 md:space-y-2">
                <Title title={fakultas.title2} color={fakultas.color} />
                <RichText content={fakultas.description2} />
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
            <button className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
              <img
                src={`${imageURL}/programs/${fakultas.image2}`}
                alt="Thumbnail Video"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
            </button>
          </div>
        </motion.div>
        {/* Fakultas Unggulan Section End */}

        {/* Tentang Kami Section */}
        {/* <motion.div
          className="w-full flex flex-col lg:flex-row justify-around items-center gap-4 md:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] px-4 py-4 rainbow-border rounded-xl md:rounded-2xl lg:rounded-4xl lg:p-6 relative z-2">
            <div className="flex flex-col justify-center md:justify-center items-center text-center relative z-2 pt-5 px-3 pb-0">
              <Title fontWeight="font-bold mx-auto" title={fakultas.title2} />
              <RichText textColor="" content={fakultas.description2} />
            </div>
          </div>
        </motion.div> */}
        {/* Tentang Kami Section End */}

        {/* Mengapa Memilih Fakultas Section */}
        <motion.div className="relative w-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden space-y-4 md:space-y-6 lg:space-y-8 px-5 md:px-0">
          <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-full flex flex-col justify-center items-center text-center flex-wrap">
              <Title
                sizeText="text-base md:text-lg lg:text-3xl"
                title={`Mengapa Harus Memilih Program Studi ${fakultas?.name?.replace(
                  "Fakultas ",
                  ""
                )}`}
                color={fakultas.color}
              />
              <Title
                sizeText="text-base md:text-lg lg:text-3xl"
                title={`Universitas Pasundan`}
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
              />
            ))}
          </div>
        </motion.div>
        {/* Mengapa Memilih Fakultas Section End */}

        {/* Apa yang kamu pelajari Section */}
        <motion.div
          className="w-full flex lg:flex-row justify-around items-center gap-4 md:gap-6 lg:gap-8 px-6 md:px-0 flex-col-reverse"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-full md:w-fit space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col items-start space-y-0">
                <Title title={fakultas.title3} color={fakultas.color} />
                <RichText content={fakultas.description3} />
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
            <button className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
              <img
                src={`${imageURL}/programs/${fakultas.image3}`}
                alt="Thumbnail Video"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
            </button>
          </div>
        </motion.div>
        {/* Apa yang kamu pelajari Section End */}

        {/* Prospek karir Section */}
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-20 px-6 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex">
            <button className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer group">
              <img
                src={`${imageURL}/programs/${fakultas.image4}`}
                alt="Thumbnail Video"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
            </button>
          </div>
          <div className="w-full md:w-fit space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col items-start space-y-0">
                <Title title={fakultas.title4} color={fakultas.color} />
                <RichText content={fakultas.description4} />
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Prospek karir Section End */}

        {/* jalur */}
        <div className="space-y-8 md:space-y-14 lg:space-y-20">
          <div className="w-full flex justify-center items-center">
            <MemoizedPendaftaranSection
              image={Section3}
              title="Pendaftaran"
              subtitle="Jalur Pendaftaran"
              jalurPendaftaran={newJalur}
              color={fakultas.color}
            />
          </div>
        </div>

        <motion.div
          className="w-full flex justify-center items-center p-4 md:px-6 md:py-9 lg:px-8 lg:py-11"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] px-4 py-4 rainbow-border rounded-xl md:rounded-2xl lg:rounded-4xl lg:p-6 relative z-2">
            <div className="flex justify-between md:justify-between items-center text-center relative z-2">
              <div className="flex items-center gap-4 text-left">
                <div className="w-[60%] md:w-fit">
                  <Title
                    sizeText="text-sm md:text-2xl lg:text-[32px]"
                    fontWeight="font-semibold"
                    title="Dapatkan Informasi Lengkap Seputar PMB"
                  />
                </div>
                <FaArrowRightLong className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 animated-arrow" />
              </div>
              <div>
                <Button
                  css="pulsating-button"
                  text="Informasi Biaya"
                  bgColor="bg-primary"
                  padding="p-4"
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* jalur end */}

        {/* Dosen Penelitian Section */}
        <motion.div
          className="space-y-4 md:space-y-6 lg:space-y-8 px-6 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="text-center">
            <Title title="Dosen & Penelitian" color={fakultas.color} />
          </div>
          {ourteam && ourteam.length > 0 ? (
            <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
              {currentItems.map((member, index) => (
                <div key={index}>
                  <DosenCard
                    name={member.name}
                    title={member.title}
                    image={member.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <Text
                text="Tidak ada data dosen yang tersedia."
                color="text-gray-500"
              />
            </div>
          )}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </motion.div>
        {/* Dosen Penelitian Section End */}

        {/* Inovasi Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <AktivitasMahasiswa data={latestActivity} color={fakultas.color} />
        </motion.div>
        {/* Inovasi Section End */}

        {/* Prestasi Section */}
        <motion.div
          className="space-y-4 md:space-y-6 lg:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {prestasi.data && prestasi.data.length > 0 ? (
            <PrestasiSection prestasi={prestasi.data} color={fakultas.color} />
          ) : (
            <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
              <Title title="Prestasi" color={fakultas.color} />
              <p className="text-center text-gray-500">Tidak ada Prestasi</p>
            </div>
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
          <div className="text-center">
            <Title title="Fasilitas" color={fakultas.color} />
          </div>
          <FasilitasSlider title="Fasilitas" facilities={fasilitas} />
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
            <TestimonialSlider
              testimonials={testimonials}
              color={fakultas.color}
            />
          ) : (
            <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
              <Title title="Testimoni" color={fakultas.color} />
              <p className="text-center text-gray-500">Tidak ada testimoni</p>
            </div>
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
              <Title title="Berita Terbaru" color={fakultas.color} />
            </div>
            <div className="relative w-full">
              {/* <div className="absolute left-0 top-0 h-[95%] w-12 bg-gradient-to-r from-[#F3F4F4] to-transparent z-10 pointer-events-none hidden md:block" />

              <div className="absolute right-0 top-0 h-[95%] w-12 bg-gradient-to-l from-[#F3F4F4] to-transparent z-10 pointer-events-none hidden md:block" /> */}
              <div className="overflow-x-auto snap-x py-2">
                <div className="flex flex-nowrap gap-4 px-4 flex-col md:flex-row justify-center">
                  {latestBerita && latestBerita.length > 0 ? (
                    <>
                      {latestBerita.map((berita, index) => (
                        <>
                          <div key={index} className="w-full md:flex-shrink-0 rounded-lg p-3 bg-white flex md:flex-col gap-4 lg:w-[280px] md:w-[200px] h-full">
                            <img
                              src={`${imageURL}/posts/${berita.image}`}
                              alt=""
                              className="rounded-lg w-2/5 md:w-full md:h-40 object-cover"
                            />
                            <div className="flex flex-col justify-between flex-1 gap-2">
                              <div className="flex flex-col gap-2">
                                <p className="md:text-base/5 text-left text-xs line-clamp-3">{berita.title}</p>
                                <RichText
                                  lineclamp={"line-clamp-2 lg:line-clamp-4 md:text-sm text-xs"}
                                  textColor="text-gray-700"
                                  content={berita.description}
                                  sizeText="text-left"
                                  leading="leading-4 md:leading-4.5"
                                />
                              </div>
                              <div className="flex justify-between mt-2">
                                <p className="font-medium cursor-pointer text-xs md:text-sm text-left" onClick={() => navigate(`/artikel/${berita.slug}`)}>
                                  Read More
                                </p>
                                <p className="text-gray-500 text-xs md:text-sm text-right">
                                  {berita.pub_date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <Text
                        text="Tidak ada data berita yang tersedia."
                        color="text-gray-500"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* {latestBerita && latestBerita.length > 0 ? (
              <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                <div className="md:w-1/2 lg:w-1/fit">
                </div>
                <div className="md:w-1/2 flex flex-col gap-4">
                  <ArticleTransparentCard
                    image={latestBerita[1]?.image}
                    title={latestBerita[1]?.title}
                    slug={latestBerita[1]?.slug}
                    description={latestBerita[0]?.description}
                  />
                  <div className="w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2">
                      <ArticleTransparentCard
                        image={latestBerita[2]?.image}
                        title={latestBerita[2]?.title}
                        slug={latestBerita[2]?.slug}
                        description={latestBerita[0]?.description}
                      />
                    </div>
                    <div className="md:w-1/2">
                      <ArticleTransparentCard
                        image={latestBerita[3]?.image}
                        title={latestBerita[3]?.title}
                        slug={latestBerita[3]?.slug}
                        description={latestBerita[0]?.description}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <Text
                  text="Tidak ada data berita yang tersedia."
                  color="text-gray-500"
                />
              </div>
            )} */}
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
                  className="rounded-xl"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </UserLayout>
  );
};

export default ProgramStudi;
