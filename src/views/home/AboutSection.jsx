import { useState, useCallback, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RichText from "../../components/RichText";
import Title from "../../components/Title";
import { X } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import MotionWrapper from "../../components/MotionWrapper";

const AboutSection = ({ data = {} }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [playingVideo, setPlayingVideo] = useState(null);

    const handleVideoOpen = useCallback(() => {
        if (data?.about?.video) {
            setPlayingVideo(data.about.video);
        }
    }, [data?.about?.video]);

    const handleVideoClose = useCallback(() => {
        setPlayingVideo(null);
    }, []);

    const handleVideoContainerClick = useCallback((e) => {
        e.stopPropagation();
    }, []);

    const VideoPlayer = useCallback(() => (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleVideoClose}
        >
            <motion.div
                className="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleVideoContainerClick}
            >
                <button
                    className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer z-10"
                    onClick={handleVideoClose}
                    aria-label="Close video"
                >
                    <X size={20} />
                </button>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
                    title="About University Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl md:rounded-2xl lg:rounded-4xl border-2 border-white"
                    loading="lazy"
                />
            </motion.div>
        </motion.div>
    ), [playingVideo, handleVideoClose, handleVideoContainerClick]);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-start md:items-center gap-4 md:gap-6 lg:gap-8 md:mt-20 lg:mt-30 p-4 md:py-10 lg:py-12">
                {data?.about?.image1 && (
                    <div
                        className="w-full lg:w-[50%] h-56 md:h-[30vh] lg:h-[40vh] rounded-xl md:rounded-2xl lg:rounded-4xl relative cursor-pointer group overflow-hidden intro_container border border-red-500"
                        onClick={handleVideoOpen}
                        aria-label="Play video about university"
                    >
                        <img
                            loading="lazy"
                            src={`${imageURL}/identities/${data.about.image1}`}
                            alt={data.about.subtitle || "University introduction"}
                            className="w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-4xl shadow-2xl shadow-primary/30 transition-transform duration-300 group-hover:scale-105 intro_img"
                            width="100%"
                            height="100%"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                            <motion.div
                                className="p-2 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-full"
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaPlay className="text-white p-4 w-14 h-14 transition-transform duration-200 group-hover:scale-110" />
                            </motion.div>
                        </div>
                    </div>
                )}

                <div className="space-y-2 md:space-y-4 text-justify md:text-left w-full lg:w-full">
                    <MotionWrapper type="slideInLeft" duration={0.5} once className="space-y-2 md:space-y-4">
                        {data?.about?.title && <Title title={data.about.title} />}
                        {data?.about?.subtitle && (
                            <Title 
                                sizeText="text-sm md:text-lg lg:text-[18px]" 
                                title={data.about.subtitle} 
                            />
                        )}
                        {data?.about?.description && (
                            <RichText 
                                lineclamp="text-justify" 
                                content={data.about.description} 
                            />
                        )}
                        {data?.about?.content && (
                            <RichText 
                                lineclamp="text-justify" 
                                content={data.about.content} 
                            />
                        )}
                    </MotionWrapper>
                </div>
            </div>

            <AnimatePresence>
                {playingVideo && <VideoPlayer />}
            </AnimatePresence>
        </div>
    );
};

export default memo(AboutSection);