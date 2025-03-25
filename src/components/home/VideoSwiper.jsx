import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import CustomPagination from "../CustomPagination";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../Title";

const VideoSwiper = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const videos = data?.map((item) => ({
        id: item.id.toString(),
        title: item.title,
        url: `https://www.youtube.com/embed/${item.id_yt}`,
        image: item.image
    })) || [];

    const handlePaginationClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    return (
        <div className="w-full h-fit space-y-4 md:space-y-6">
            <div className="text-center space-y-2">
                <Title title="Video Dukungan" />
            </div>
            <Swiper
                slidesPerView={1.1}
                spaceBetween={-80}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={setSwiperInstance}
                effect="fade"
                speed={800}
                breakpoints={{
                    640: { spaceBetween: -120, slidesPerView: 1.2 },
                    1024: { spaceBetween: -150, slidesPerView: 1.5 },
                    1440: { spaceBetween: -180, slidesPerView: 1.5 },
                }}
            >
                {videos.map((video, index) => {
                    const thumbnail = `${imageURL}/dukungans/${video.image}`;

                    return (
                        <SwiperSlide key={video.id} className="w-full flex justify-center items-center p-4">
                            <motion.div
                                className={`w-full relative h-fit rounded-xl md:rounded-2xl lg:rounded-4xl transition-all duration-500 ease-in-out cursor-pointer group ${index === activeIndex ? "w-[100%] scale-90" : "scale-75"}`}
                                onClick={() => setPlayingVideo(video.url)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={thumbnail}
                                    alt={video.title}
                                    className="w-full h-[200px] md:h-[40vh] lg:h-[60vh] object-cover shadow-xl rounded-xl md:rounded-2xl lg:rounded-4xl"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center rounded-xl md:rounded-2xl lg:rounded-4xl"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className="p-2 group-hover:scale-110 bg-gray-700 rounded-full">
                                        <FaPlay className="text-white p-4 w-14 h-14" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <CustomPagination
                activeIndex={activeIndex}
                totalSlides={videos.length}
                onPaginationClick={handlePaginationClick}
                width="w-2 h-2"
                scale="w-7 h-2"
            />

            <AnimatePresence>
                {playingVideo && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPlayingVideo(null)}
                    >
                        <motion.div
                            className="relative w-[90%] md:w-[70%] lg:w-[50%] border-2 border-white rounded-xl md:rounded-2xl lg:rounded-4xl"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
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
                                className="rounded-xl"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VideoSwiper;