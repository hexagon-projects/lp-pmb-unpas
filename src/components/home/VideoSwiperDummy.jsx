import { useState, useCallback, useMemo, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import CustomPagination from "../CustomPagination";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../Title";
import Text from "../Text";

const dummyVideos = [
    {
      id: 1,
      title: "Video Motivasi Mahasiswa",
      id_yt: "OYDn-UHfNBM",
      image: "https://img.youtube.com/vi/OYDn-UHfNBM/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Campus Tour Virtual",
      id_yt: "dQw4w9WgXcQ",
      image: "https://img.youtube.com/vi/OYDn-UHfNBM/maxresdefault.jpg"
    },
    {
      id: 3,
      title: "Seminar Pendidikan",
      id_yt: "y6120QOlsfU",
      image: "https://img.youtube.com/vi/OYDn-UHfNBM/maxresdefault.jpg"
    }
  ];

const VideoSwiper = ({ data = dummyVideos }) => {
  // ... (state dan fungsi lainnya tetap sama)
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = useMemo(() => (
    data.map((item) => ({
      id: item.id.toString(),
      title: item.title,
      url: `https://www.youtube.com/embed/${item.id_yt}?autoplay=1`,
      image: item.image
    }))
  ), [data]);

  const handlePaginationClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const openVideo = useCallback((url) => {
    setPlayingVideo(url);
  }, []);

  const closeVideo = useCallback(() => {
    setPlayingVideo(null);
  }, []);

  const swiperSlides = useMemo(() => (
    videos.map((video, index) => (
      <SwiperSlide key={video.id} className="w-full flex justify-center items-center p-4">
        <motion.div
          className={`w-full relative h-fit rounded-xl md:rounded-2xl lg:rounded-4xl transition-all duration-300 ease-in-out cursor-pointer group ${
            index === activeIndex ? "w-[100%] scale-90" : "scale-75"
          }`}
          onClick={() => openVideo(video.url)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-[200px] md:h-[40vh] lg:h-[60vh] object-cover shadow-xl rounded-xl md:rounded-2xl lg:rounded-4xl"
            loading="lazy"
            width="100%"
            height="100%"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
          <div className="absolute inset-0 flex items-center justify-center rounded-xl md:rounded-2xl lg:rounded-4xl">
            <div className="p-2 group-hover:scale-110 bg-gray-700 rounded-full transition-transform duration-200">
              <FaPlay className="text-white p-4 w-12 h-12 md:w-14 md:h-14" />
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
    ))
  ), [videos, activeIndex, openVideo]);

  const videoPlayer = useMemo(() => (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={closeVideo}
    >
      <motion.div
        className="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video border-2 border-white rounded-xl md:rounded-2xl lg:rounded-4xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full z-10"
          onClick={closeVideo}
          aria-label="Close video"
        >
          <X size={20} />
        </button>
        <iframe
          width="100%"
          height="100%"
          src={playingVideo}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl md:rounded-2xl"
          loading="eager"
        />
      </motion.div>
    </motion.div>
  ), [playingVideo, closeVideo]);

  return (
    <div className="w-full h-fit flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
      {/* Bagian Kiri - Judul dan Teks */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">
        <div className="space-y-2 md:space-y-4">
          <Title title="Kisah - Kisah Alumni" align="text-left" />
          <Text 
            text="Temukan perjalanan inspiratif para alumni yang telah menapaki jalur sukses di dunia Profesional!" 
            sizeText="text-base md:text-lg lg:text-xl"
            align="text-left"
          />
        </div>
      </div>

      {/* Bagian Kanan - Video Swiper */}
      <div className="w-full lg:w-1/2 relative overflow-hidden drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={-30}
          centeredSlides={true}
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          modules={[Autoplay]}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          speed={600}
          breakpoints={{
            640: { slidesPerView: 1.3, spaceBetween: -40 },
            1024: { slidesPerView: 1.2, spaceBetween: -50 },
            1440: { slidesPerView: 1.3, spaceBetween: -60 },
          }}
          className="!overflow-visible"
        >
          {swiperSlides}
        </Swiper>

        <div className="mt-6 md:mt-8">
          <CustomPagination
            activeIndex={activeIndex}
            totalSlides={videos.length}
            onPaginationClick={handlePaginationClick}
            width="w-2 h-2"
            scale="w-7 h-2"
          />
        </div>
      </div>

      <AnimatePresence>
        {playingVideo && videoPlayer}
      </AnimatePresence>
    </div>
  );
};

export default memo(VideoSwiper);