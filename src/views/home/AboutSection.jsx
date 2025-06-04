import { useState, useCallback, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RichText from "../../components/RichText";
import Title from "../../components/Title";
import { X } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import MotionWrapper from "../../components/MotionWrapper";
import AnimatedTitle from "../../components/AnimatedTitle";

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
                    src={`https://www.youtube-nocookie.com/embed/${playingVideo}?autoplay=0`}
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
            <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-start md:items-center gap-4 md:gap-6 lg:gap-14 mt-5 md:mt-10">
                {data?.about?.image1 && (
                    <div
                        className="w-full lg:w-[60%] h-56 md:h-[30vh] lg:h-[60vh] rounded-xl md:rounded-2xl lg:rounded-4xl relative cursor-pointer group overflow-hidden intro_container"
                        onClick={handleVideoOpen}
                        aria-label="Play video about university"
                    >
                        <img
                            loading="lazy"
                            src={`${imageURL}/identities/${data.about.image1}`}
                            alt={data.about.subtitle || "University introduction"}
                            className="scale-105 w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-4xl shadow-2xl shadow-primary/30 transition-transform duration-300 group-hover:scale-110 intro_img"
                        />
                        <div className="absolute scale-105 inset-0 bg-black/30 group-hover:bg-black/50 group-hover:scale-110 transition-all duration-300 flex items-center justify-center intro_img">
                            <motion.div
                                className="p-2 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-full"
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaPlay className="text-white p-4 w-14 h-14 transition-transform duration-200 group-hover:scale-115" />
                            </motion.div>
                        </div>
                    </div>
                )}

                <div className="space-y-2 md:space-y-4 text-justify md:text-left w-full lg:w-full">
                    <div className="w-full space-y-2 md:space-y-4">
                        <AnimatedTitle className="flex items-start" text={data?.about?.title}/>
                        <Title
                            sizeText="text-sm md:text-lg lg:text-[18px]"
                            title={data?.about?.subtitle}
                        />
                        <p className={`text-xs md:text-sm lg:text-sm text-gray-800 overflow-hidden leading-6`} dangerouslySetInnerHTML={{ __html: data?.about?.description }}/>
                        <p className={`text-xs md:text-sm lg:text-sm text-gray-800 overflow-hidden leading-6`} dangerouslySetInnerHTML={{ __html: data?.about?.content }}/>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {playingVideo && <VideoPlayer />}
            </AnimatePresence>
        </div>
    );
};

export default memo(AboutSection);