import { useState } from "react";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
=======
import { motion } from "framer-motion";
>>>>>>> 8bbe4dc (First Commit)
import RichText from "../../components/RichText";
import Title from "../../components/Title";
import { X } from "lucide-react";
import { FaPlay } from "react-icons/fa";

const AboutSection = ({ data }) => {
<<<<<<< HEAD
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col md:flex-row-reverse justify-center items-start md:items-center gap-4 md:gap-6 lg:gap-10 md:mt-20 lg:mt-30 p-4 md:px-10 lg:px-12">
        <div className="w-full lg:w-[80%] h-56 md:h-64 lg:h-96 rounded-xl md:rounded-2xl lg:rounded-4xl intro_container relative cursor-pointer group" onClick={() => setPlayingVideo(data.about.video)}>
          <img loading="lazy" src={`${imageURL}/identities/${data.about.image1}`} alt={data.about.subtitle} className="w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-4xl shadow-2xl shadow-primary/30 intro_img" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl lg:rounded-4xl intro_img"></div>
          <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl" whileTap={{ scale: 0.9 }}>
            <div className="p-2 group-hover:scale-120 bg-gradient-to-b rounded-full bg-gray-600 via-gray-700 to-gray-800">
              <FaPlay className="text-white  p-4 w-14 h-14 transition-transform duration-200 ease-in-out group-hover:scale-120" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-2 md:space-y-4 text-justify md:text-left w-full lg:w-full">
          <Title sizeMobile="text-left text-2xl" title={data.about.title} />
          <Title sizeMobile="text-left text-lg md:text-lg lg:text-lg" title={data.about.subtitle} />
          <RichText content={data.about.description} />
          <RichText content={data.about.content} />
        </div>
      </div>

      <AnimatePresence>
        {playingVideo && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.3 } }} onClick={() => setPlayingVideo(null)}>
            <motion.div className="relative w-[90%] md:w-[70%] lg:w-[50%] border-2 border-white rounded-lg md:rounded-2xl lg:rounded-4xl" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }}>
              <button
                className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setPlayingVideo(null);
                }}
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
                className="rounded-lg md:rounded-2xl lg:rounded-4xl"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
=======
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [playingVideo, setPlayingVideo] = useState(null);

    return (
        <div className="w-full flex justify-center items-center">
            {/* Dibawah ini adalah kode yang sebelumnya */}
            {/* <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col md:flex-row-reverse justify-center items-start md:items-center gap-4 md:gap-6 lg:gap-10 md:mt-20 lg:mt-30 p-4"> */}
            <div className="w-full px-[105px] gap-[32px] flex flex-col md:flex-row-reverse justify-center items-start md:items-center pt-[96px]"> 
                <div
                    className="w-full lg:w-[80%] h-56 md:h-64 lg:h-96 rounded-xl md:rounded-2xl lg:rounded-4xl intro_container relative cursor-pointer group"
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
                        className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl"
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="p-2 group-hover:scale-120 bg-gradient-to-b rounded-full bg-gray-600 via-gray-700 to-gray-800">
                            <FaPlay className="text-white  p-4 w-14 h-14 transition-transform duration-200 ease-in-out group-hover:scale-120" />
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-2 md:space-y-4 text-justify md:text-left w-full lg:w-full">
                    <Title sizeMobile="text-left text-2xl" title={data.about.title} />
                    <Title sizeMobile="text-left text-lg md:text-lg lg:text-lg" title={data.about.subtitle} />
                    <RichText content={data.about.description} />
                    <RichText content={data.about.content} />
                </div>
            </div>

            {playingVideo && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setPlayingVideo(null)}
                >
                    <motion.div
                        className="relative w-[90%] md:w-[70%] lg:w-[50%] border-2 border-white rounded-lg md:rounded-2xl lg:rounded-4xl"
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
                            className="rounded-lg md:rounded-2xl lg:rounded-4xl"
                        ></iframe>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
>>>>>>> 8bbe4dc (First Commit)
};

export default AboutSection;
