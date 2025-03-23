import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import bgSection from '../../assets/home/section1ori.jpeg'

const VideoSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);

    const videos = [
        { id: "1", title: "Introduction to Web Development", url: "https://www.youtube.com/embed/1zWiYeNztp4", thumbnail: bgSection },
        { id: "2", title: "React.js Crash Course", url: "https://www.youtube.com/embed/1zWiYeNztp4", thumbnail: bgSection },
        { id: "3", title: "Tailwind CSS Full Tutorial", url: "https://www.youtube.com/embed/1zWiYeNztp4", thumbnail: bgSection }
    ];
=======
import { Navigation, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import CustomPagination from "../CustomPagination";

const VideoSwiper = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const videos = data && data.length > 0 ? data.map((item) => ({
        id: item.id.toString(),
        title: item.title,
        url: `https://www.youtube.com/embed/${item.id_yt}`,
        image: item.image
    })) : [];

    const handlePaginationClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };
>>>>>>> 8bbe4dc (First Commit)

    return (
        <div className="w-full h-fit">
            <Swiper
                slidesPerView={1.5}
<<<<<<< HEAD
                spaceBetween={0}
                pagination={{ clickable: true }}
                centeredSlides={true}
                lazy={{ loadPrevNext: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={video.id} className="w-full flex justify-center items-center pb-10">
                        <div
                            className={`relative space-y-4 p-4 h-fit rounded-lg md:rounded-2xl lg:rounded-4xl transition-all duration-300 ease-in-out cursor-pointer ${index === activeIndex ? "w-[100%] scale-100" : "scale-80"
                                }`}
                            onClick={() => setPlayingVideo(video.url)}
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-[300px] object-cover rounded-lg md:rounded-2xl lg:rounded-4xl"
                            />
                            <div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl">
                                <FaPlay className="text-white text-4xl" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

=======
                spaceBetween={-40}
                centeredSlides={true}
                lazy={{ loadPrevNext: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                effect="fade"
                speed={800}
                breakpoints={{
                    640: {
                        spaceBetween: -60,
                    },
                    1024: {
                        spaceBetween: -80,
                    },
                    1440: {
                        spaceBetween: -120,
                    },
                }}
            >
                {videos.map((video, index) => {
                    const videoId = video.url.split("/").pop();
                    // const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    const thumbnail = `${imageURL}/dukungans/${video.image}`

                    return (
                        <SwiperSlide key={video.id} className="w-full flex justify-center items-center">
                            <div
                                className={`w-full relative space-y-4 p-4 h-fit rounded-lg md:rounded-2xl lg:rounded-4xl transition-all duration-500 ease-in-out cursor-pointer ${index === activeIndex ? "w-[100%] scale-100" : "scale-80"
                                    }`}
                                onClick={() => setPlayingVideo(video.url)}
                            >
                                <img
                                    src={thumbnail}
                                    alt={video.title}
                                    className="w-full h-[300px] md:h-[40vh] lg:h-[60vh] object-cover rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]"
                                />
                                <div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl">
                                    <FaPlay className="text-white text-4xl" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <CustomPagination
                activeIndex={activeIndex}
                totalSlides={videos.length}
                onPaginationClick={handlePaginationClick}
                width="w-3 h-3"
                scale="w-7 h-3"
            />

>>>>>>> 8bbe4dc (First Commit)
            {playingVideo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" onClick={() => setPlayingVideo(null)}>
                    <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
                        <button
                            className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full"
                            onClick={() => setPlayingVideo(null)}
                        >
                            <X size={20} />
                        </button>
                        <iframe
                            width="100%"
                            height="400"
                            src={playingVideo}
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg md:rounded-2xl lg:rounded-4xl"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

<<<<<<< HEAD
export default VideoSwiper;
=======
import { Navigation, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import CustomPagination from "../CustomPagination";
import { motion, AnimatePresence } from "framer-motion";

const VideoSwiper = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const imageURL = import.meta.env.VITE_IMAGE_URL;

  const videos =
    data && data.length > 0
      ? data.map((item) => ({
          id: item.id.toString(),
          title: item.title,
          url: `https://www.youtube.com/embed/${item.id_yt}`,
          image: item.image,
        }))
      : [];

  const handlePaginationClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <div className="w-full h-fit">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={-40}
        centeredSlides={true}
        lazy={{ loadPrevNext: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        effect="fade"
        speed={800}
        breakpoints={{
          640: {
            spaceBetween: -60,
          },
          1024: {
            spaceBetween: -80,
          },
          1440: {
            spaceBetween: -120,
          },
        }}
      >
        {videos.map((video, index) => {
          const videoId = video.url.split("/").pop();
          // const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          const thumbnail = `${imageURL}/dukungans/${video.image}`;

          return (
            <SwiperSlide key={video.id} className="w-full flex justify-center items-center">
              <div
                className={`w-full relative space-y-4 p-4 h-fit rounded-lg md:rounded-2xl lg:rounded-4xl transition-all duration-500 ease-in-out cursor-pointer ${index === activeIndex ? "w-[100%] scale-100" : "scale-80"}`}
                onClick={() => setPlayingVideo(video.url)}
              >
                <img src={thumbnail} alt={video.title} className="w-full h-[300px] md:h-[40vh] lg:h-[60vh] object-cover rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]" />
                <div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <CustomPagination activeIndex={activeIndex} totalSlides={videos.length} onPaginationClick={handlePaginationClick} width="w-3 h-3" scale="w-7 h-3" />

      <AnimatePresence>
        {playingVideo && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.3 } }} onClick={() => setPlayingVideo(null)}>
            <motion.div className="relative w-[90%] md:w-[70%] lg:w-[50%]" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }}>
              <button
                className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation(); // Mencegah modal tertutup saat tombol diklik
                  setPlayingVideo(null);
                }}
              >
                <X size={20} />
              </button>

              <iframe
                width="100%"
                height="400"
                src={playingVideo}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg md:rounded-2xl lg:rounded-4xl border-2 border-white"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoSwiper;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
export default VideoSwiper;
>>>>>>> 8bbe4dc (First Commit)
