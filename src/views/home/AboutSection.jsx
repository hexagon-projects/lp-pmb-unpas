import { useState } from "react";
import { motion } from "framer-motion";
import RichText from "../../components/RichText";
import Title from "../../components/Title";
import { X } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import MotionWrapper from "../../components/MotionWrapper";

const AboutSection = ({ data }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [playingVideo, setPlayingVideo] = useState(null);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-start md:items-center gap-4 md:gap-6 lg:gap-10 md:mt-20 lg:mt-30 p-4 md:py-10 lg:py-12">
                <div
                    className="w-full lg:w-[50%] h-56 md:h-[30vh] lg:h-[40vh] rounded-xl md:rounded-2xl lg:rounded-4xl intro_container relative cursor-pointer group"
                    onClick={() => setPlayingVideo(data.about.video)}
                >
                    <img
                        loading="lazy"
                        src={`${imageURL}/identities/${data.about.image1}`}
                        alt={data.about.subtitle}
                        className="w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-4xl shadow-2xl shadow-primary/30 intro_img"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl intro_img"></div>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center rounded-xl md:rounded-2xl lg:rounded-4xl"
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="p-2 group-hover:scale-120 bg-gradient-to-b rounded-full bg-gray-600 via-gray-700 to-gray-800">
                            <FaPlay className="text-white  p-4 w-14 h-14 transition-transform duration-200 ease-in-out group-hover:scale-120" />
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-2 md:space-y-4 text-justify md:text-left w-full lg:w-full">
                    <MotionWrapper type={'slideInLeft'} duration={0.8} once={true} className={'space-y-2 md:space-y-4'}>
                        <Title title={data.about.title} />
                        <Title sizeText="text-sm md:text-lg lg:text-[18px]" title={data.about.subtitle} />
                        <RichText lineclamp={'text-justify'} content={data.about.description} />
                        <RichText lineclamp={'text-justify'} content={data.about.content} />
                    </MotionWrapper>
                </div>
            </div>
<<<<<<< Updated upstream

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
                        transition={{ duration: 0.3 }}
                        exit={{ scale: 0.8 }}
                    >
                        <button
                            className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer"
                            onClick={() => setPlayingVideo(null)}
                        >
                            <X size={20} />
                        </button>
                        <iframe
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/${playingVideo}`}
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-xl md:rounded-2xl lg:rounded-4xl"
                        ></iframe>
                    </motion.div>
                </motion.div>
            )}
=======
            <AnimatePresence>
                {playingVideo && <VideoPlayer />}
            </AnimatePresence>
>>>>>>> Stashed changes
        </div>
    );
};

export default AboutSection;
