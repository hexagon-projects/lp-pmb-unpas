import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/gedung.jpeg";
import Section2 from "../assets/mhsw.webp";
import Title from "../components/Title";
import Text from "../components/Text";
import UKMCard from "../components/UkmCard";
import PrestasiCard from "../components/PrestasiCard";
import CTASection from "../components/CTASection";
import SelengkapnyaButton from "../components/SelengkapnyaButton";
import OrganisasiService from "../fetching/organisasi";
import PrestasiService from "../fetching/prestasi";
import TestimoniService from "../fetching/testimoni";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Mahasiswa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [data, setData] = useState({ ukm: [], prestasi: [], testimoni: [] });
  const [isImage1Loaded, setIsImage1Loaded] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [ukm, prestasi, testimoni] = await Promise.all([
          OrganisasiService.getAllOrganisasi(),
          PrestasiService.getAllPrestasi(),
          TestimoniService.getTestimoniHome()
        ]);

        if (isMounted) {
          setData({ ukm, prestasi, testimoni });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const { ukm, prestasi, testimoni } = data;
  const latestPrestasi = prestasi?.slice(0, 8);
  const videoTestimonials = testimoni?.filter(testi => testi.yt_link);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderImageWithLoader = (src, alt, loadedState, setLoadedState) => (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-4xl transition-opacity duration-500 ${
          loadedState ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoadedState(true)}
        loading="lazy"
      />
      {!loadedState && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl md:rounded-2xl lg:rounded-4xl" />
      )}
    </div>
  );

  const renderVideoModal = () => (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center bg-black/80 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative p-4 rounded-xl md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
            >
              <X size={20} />
            </button>
            <iframe
              className="w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl"
              src={`https://www.youtube-nocookie.com/embed/${selectedVideo}`}
              title="Kisah Alumni"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );

  const renderAlumniStories = () => (
    <Motion.div
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
      className={"w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10 lg:px-[50px]"}
    >
      <div className="w-full lg:w-[30%] space-y-4 text-center lg:text-left">
        <Title title={"Kisah Alumni"} />
        <Text
          text={
            "Temukan perjalanan inspiratif para alumni yang telah menapaki jalur sukses di dunia Profesional"
          }
        />
      </div>
      <div className="w-full lg:w-[70%] h-96 md:h-[30vh] lg:h-[40vh] flex justify-center">
        {videoTestimonials?.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full h-full"
            breakpoints={{
              768: { slidesPerView: 1.3 },
              1024: { slidesPerView: 1.3 },
            }}
          >
            {videoTestimonials.map((testi) => (
              <SwiperSlide key={testi.id}>
                <div className="h-full relative group">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedVideo(testi.yt_link);
                    }}
                    className="relative w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] cursor-pointer"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${testi.yt_link}/maxresdefault.jpg`}
                      alt={testi.name}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        isThumbnailLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setIsThumbnailLoaded(true)}
                      loading="lazy"
                    />
                    {!isThumbnailLoaded && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg md:rounded-2xl lg:rounded-4xl" />
                    )}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-medium text-lg text-left">{testi.name}</h3>
                      <p className="text-white text-sm text-left">{testi.title}</p>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 22v-20l18 10-18 10z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Tidak ada video alumni tersedia</p>
          </div>
        )}
      </div>
    </Motion.div>
  );

  return (
    <UserLayout
      bgLayoutColor="bg-[#F3F3F3]"
      bgColor={"bg-[#F3F3F3]"}
      position={"fixed"}
      margin={""}
      titleColor={"text-black"}
      paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
      paddingTop={"lg:pt-30"}
      type={"fadeInUp"}
      duration={0.5}
    >
      <Helmet>
        <title>Mahasiswa & Alumni - Universitas Pasundan</title>
      </Helmet>

      <AnimatePresence mode="wait">
        <Motion.div
          key="mahasiswa-page"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <div className="w-full relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
            <Motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              className={"space-y-4 md:space-y-6 lg:space-y-10"}
            >
              <div className="flex h-50 md:h-60 lg:h-[60vh] justify-between items-center gap-4">
                <div className="w-[30%] h-full">
                  {renderImageWithLoader(Section1, "Gedung Universitas Pasundan", isImage1Loaded, setIsImage1Loaded)}
                </div>
                <div className="w-[70%] h-full">
                  {renderImageWithLoader(Section2, "Aktivitas Mahasiswa", isImage2Loaded, setIsImage2Loaded)}
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-left text-gray-500">
                Mahasiswa & Alumni
              </h1>
            </Motion.div>

            <Motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className={"w-full space-y-4 md:space-y-6 lg:space-y-10"}
            >
              <Title title={"Aktivitas Mahasiswa"} />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {ukm?.map((ukm) => (
                  <UKMCard
                    key={ukm.id}
                    image={ukm.image}
                    title={ukm.title}
                    text={ukm.description}
                  />
                ))}
              </div>
            </Motion.div>

            {renderAlumniStories()}

            <Motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className={
                "w-full flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-10 lg:px-[77px]"
              }
            >
              <div className="w-full space-y-4 text-center">
                <Title title={"Prestasi"} />
                <Text
                  text={
                    "Simak kisah inspiratif mereka dan jadilah bagian dari generasi berprestasi berikutnya!"
                  }
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {latestPrestasi?.map((prestasi) => (
                    <PrestasiCard
                      key={prestasi.id}
                      image={prestasi.image}
                      title={prestasi.title}
                      widthImg="w-full"
                    />
                  ))}
                </div>
                <div className="w-full flex justify-end">
                  <div className="hover:font-bold cursor-pointer">
                    <SelengkapnyaButton
                      onClick={() => (window.location.href = "/prestasi")}
                      color="text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </Motion.div>

            <CTASection />
            {renderVideoModal()}
          </div>
        </Motion.div>
      </AnimatePresence>
    </UserLayout>
  );
};

export default Mahasiswa;