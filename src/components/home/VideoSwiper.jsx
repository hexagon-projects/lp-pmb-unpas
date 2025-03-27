import { useState, useCallback, useMemo, memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import CustomPagination from "../CustomPagination";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../Title";
import Text from "../Text";
import SelengkapnyaButton from "../SelengkapnyaButton";

const VideoSwiper = ({ data = [] }) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [realActiveIndex, setRealActiveIndex] = useState(1);
    const [playingVideo, setPlayingVideo] = useState(null);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const swiperRef = useRef(null);

    const videos = useMemo(() => (
        data.map((item) => ({
            id: item.id.toString(),
            title: item.title,
            url: `https://www.youtube-nocookie.com/embed/${item.id_yt}?autoplay=1`,
            image: `${imageURL}/dukungans/${item.image}`
        }))
    ), [data, imageURL]);

    const handlePaginationClick = useCallback((index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideToLoop(index);
        }
        setActiveIndex(index);
        setRealActiveIndex(index);
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
                        index === realActiveIndex ? "w-[100%] scale-90" : "scale-75"
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
    ), [videos, realActiveIndex, openVideo]);

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

    const handleSlideChange = useCallback((swiper) => {
        const newRealIndex = swiper.realIndex % videos.length;
        setRealActiveIndex(newRealIndex);
        setActiveIndex(newRealIndex);
    }, [videos.length]);

    return (
        <div className="w-full h-fit space-y-4 md:space-y-6">
            <div className="p-4 md:px-10 lg:px-12 flex justify-between items-center space-y-2">
                <Title title="Bersama Unpas Membangun Generasi Unggul!" />
                <SelengkapnyaButton onClick={()=>window.location.href(`/dukungan`)} />
            </div>
            
            <Swiper
                ref={swiperRef}
                slidesPerView={1.5}
                spaceBetween={-50}
                loop={videos.length >= 3}
                centeredSlides={true}
                autoplay={{ 
                    delay: 3000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Autoplay]}
                onSlideChange={handleSlideChange}
                speed={600}
                breakpoints={{
                    640: { spaceBetween: -120, slidesPerView: 1.2 },
                    1024: { spaceBetween: -150, slidesPerView: 1.5 },
                    1440: { spaceBetween: -180, slidesPerView: 1.5 },
                }}
            >
                {swiperSlides}
            </Swiper>

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
        </div>
    );
};

export default memo(VideoSwiper);