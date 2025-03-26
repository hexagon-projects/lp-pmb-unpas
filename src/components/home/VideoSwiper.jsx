import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

<<<<<<< Updated upstream
    const handlePaginationClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

=======
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
>>>>>>> Stashed changes
    return (
        <div className="w-full h-fit">
            <Swiper
                slidesPerView={1.5}
                spaceBetween={-50}
                // spaceBetween={-40}
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
                        spaceBetween: -120,
                        slidesPerView: 1.2
                    },
                    1024: {
                        spaceBetween: -150,
                        slidesPerView: 1.5
                    },
                    1440: {
                        spaceBetween: -180,
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
                                className={`w-full relative space-y-4 p-4 h-fit rounded-xl md:rounded-2xl lg:rounded-4xl transition-all duration-500 ease-in-out cursor-pointer ${index === activeIndex ? "w-[100%] scale-90" : "scale-75"
                                    }`}
                                onClick={() => setPlayingVideo(video.url)}
                            >
                                <img
                                    src={thumbnail}
                                    alt={video.title}
                                    className="w-full h-[200px] md:h-[40vh] lg:h-[60vh] object-cover rounded-xl md:rounded-2xl lg:rounded-4xl shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]"
                                />
                                <div className="absolute inset-0 flex items-center justify-center rounded-xl md:rounded-2xl lg:rounded-4xl">
                                    <FaPlay className="text-white text-4xl" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

<<<<<<< Updated upstream
            <div className="-mt-4 lg:-mt-6">
                <CustomPagination
                    activeIndex={activeIndex}
                    totalSlides={videos.length}
                    onPaginationClick={handlePaginationClick}
                    width="w-2 h-2"
                    scale="w-7 h-2"
                />
            </div>

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
                            className="rounded-xl md:rounded-2xl lg:rounded-4xl"
                        ></iframe>
                    </div>
                </div>
            )}
=======
            <CustomPagination
                activeIndex={activeIndex}
                totalSlides={videos.length}
                onPaginationClick={handlePaginationClick}
                width="w-2 h-2"
                scale="w-7 h-2"
            />
            <AnimatePresence>
                {playingVideo && videoPlayer}
            </AnimatePresence>
>>>>>>> Stashed changes
        </div>
    );
};

export default VideoSwiper;