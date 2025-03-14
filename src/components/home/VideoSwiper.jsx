import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

    return (
        <div className="w-full h-fit">
            <Swiper
                slidesPerView={1.5}
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

export default VideoSwiper;