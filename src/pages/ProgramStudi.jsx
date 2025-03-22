import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Title from "../components/Title";
import Text from "../components/Text";
import ButtonArrow from "../components/ButtonArrow";
import StatsSection from "../components/StatsSection";
import PrestasiSection from "../components/prodi/PrestasiSection";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import TestimonialSlider from "../components/TestimonialSlider";
import AktivitasMahasiswa from "../components/prodi/AktivitasMahasiswa";
import FasilitasSlider from "../components/prodi/FasilitasSlider";
import DosenCard from "../components/prodi/DosenCard";
import RichText from "../components/RichText";
import bgSection from "../assets/home/section1ori.jpeg";
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
import ProdiService from "../fetching/prodi";
import Loading from "../components/Loading";
import GalleryService from "../fetching/galery";
import MitraSection from "../views/home/MitraSection";
import { X } from "lucide-react";
import HighlightCard from "../components/fakultas/HighlightCard";
import Pagination from "../components/Pagination";
import { motion, AnimatePresence  } from "framer-motion";

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
    <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={"lg:pt-20"}>
      <div className="p-4 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20">
        <div className={"w-full flex justify-around items-center"}>
          <div className={"w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10"}>
            <div className="w-full lg:w-1/2">
              <img src={`${imageURL}/programs/${fakultas.image1}`} alt="" className="w-full lg:h-[80vh] object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
            </div>
            <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
              <Title title={`Selamat Datang di Program Studi ${fakultas.name}`} />
              <RichText content={fakultas.description1} lineclamp={"text-justify"} />
              <ButtonArrow text={"Baca Selengkapnya"} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
            </div>
          </div>
        </div>

        <StatsSection colorIcon={"text-blue-500"} title1="Karya Ilmiah" prodi={fakultas.periode} mahasiswa={fakultas.age} lulusan={fakultas.weekly} prestasi={fakultas.class_size} />

        <div className={"w-full flex justify-around items-center"}>
          <div className={"w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col md:flex-row-reverse justify-around items-center gap-4"}>
            <div className="w-full md:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
              <button onClick={() => setIsOpen(true)} className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer">
                <img src={`https://img.youtube.com/vi/${fakultas.id_yt}/hqdefault.jpg`} alt="Thumbnail Video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-center items-center ">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 22v-20l18 10-18 10z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="w-full md:w-fit space-y-3 md:space-y-4 flex flex-col justify-center items-center text-justify md:items-start md:text-left">
              <Title title={"Visi dan Misi"} />
              <RichText content={`${fakultas.description2}`} />
              <ButtonArrow text={"Baca Selengkapnya"} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
            </div>
          </div>
        </div>

        <div className={"w-full flex justify-around items-center"}>
          <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <div className="w-full lg:w-[40%] text-left space-y-8">
              <Title sizeMobile="text-2xl md:text-4xl lg:text-6xl" title={"Mengapa Memilih Program Ini"} />
              <div className="hidden lg:block">
                <ButtonArrow text={"Baca Selengkapnya"} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
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
                <Text text={"Tidak ada data unggulan yang tersedia."} color="text-gray-500" />
              </div>
            )}
          </div>
        </div>

        <div className={"space-y-3 md:space-y-4"}>
          {prestasi.data && prestasi.data.length > 0 ? (
            <PrestasiSection prestasi={prestasi.data} />
          ) : (
            <div className="text-center py-6">
              <Text text={"Tidak ada data prestasi yang tersedia."} color="text-gray-500" />
            </div>
          )}
        </div>

        <div className={"space-y-3 md:space-y-4"}>
          <div className="text-center">
            <Title title={"Dosen Penelitian"} />
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
              <Text text={"Tidak ada data dosen yang tersedia."} color="text-gray-500" />
            </div>
          )}
          <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

        <FasilitasSlider title={"Fasilitas & Inovasi"} facilities={fasilitas} />

        <div className={"space-y-3 md:space-y-4 pb-80 md:pb-56 lg:pb-20"}>
          <div className="relative">
            <div className="w-full flex justify-center gap-4 md:gap-6 lg:gap-10">
              <div className="w-1/2">
                <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
              </div>
              <div className="w-1/2">
                <div className="text-left">
                  <Text text={"Testimoni"} color="text-red-500" />
                  <span>
                    <Title sizeMobile="text-base" title={"Apa Kata Mereka Soal"} />
                    <Title sizeMobile="text-base" color="text-blue-500" title={"Unpas?"} />
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-90 sm:-bottom-65 -right-2 max-w-xs md:-bottom-70 md:right-20 md:max-w-sm lg:-bottom-40 lg:right-0 lg:max-w-4xl xl:-bottom-25 xl:right-10 xl:max-w-5xl z-40 mb-10">
              {testimonials && testimonials.length > 0 ? (
                <TestimonialSlider
                  data={testimonials}
                  bgColor={"bg-white"}
                  textColor={"text-gray-700"}
                  arrowColor={"text-blue-500"}
                  cssBox={""}
                  cssContainer={""}
                  iconVisibililty={"hidden"}
                  borderColor={"border-blue-500"}
                  bgColorPagination={"bg-blue-500"}
                />
              ) : (
                <div className="text-center py-6">
                  <Text text={"Tidak ada data testimoni yang tersedia."} color="text-gray-500" />
                </div>
              )}
            </div>
          </div>
        </div>

        <AktivitasMahasiswa data={latestActivity} />

        <div className="w-full flex flex-row jusity-between items-center gap-4">
          <div className={"w-full flex flex-col gap-4 md:gap-6 lg:gap-10"}>
            <MitraSection data={partner} />
          </div>
        </div>

        <div>
          <div className="text-center md:text-left space-y-3 md:space-y-4">
            <Title title={"Berita Terbaru"} />
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
                <Text text={"Tidak ada data berita yang tersedia."} color="text-gray-500" />
              </div>
            )}
          </div>
        </div>

        <div className={"space-y-3 md:space-y-4"}>
          <div className="w-full flex justify-center items-center gap-4 p-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl">
            <div className="w-1/2 text-left space-y-3 md:space-y-4">
              <Text text={"Penerimaan Mahasiswa Baru"} color="text-red-500" />
              <Title sizeMobile="text-base" title={"Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!"} />
              <ButtonArrow text={fakultas?.cta ?? "Daftar"} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
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
                    e.stopPropagation(); // Mencegah modal tertutup saat button diklik
                    setIsOpen(false);
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
  );
};

export default ProgramStudi;
