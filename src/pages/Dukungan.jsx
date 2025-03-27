import { useEffect, useState, useCallback, useMemo, memo } from "react";
import UserLayout from "./layouts/UserLayout";
import Loading from "../components/Loading";
import DukunganService from "../fetching/dukungan";
import Title from "../components/Title";
import { Helmet } from "react-helmet-async";
import Text from "../components/Text";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "../components/CTASection";
import InteractiveGrid from "../components/InteractiveCard";

const VideoThumbnail = memo(({ video, openVideo }) => (
    <motion.div
        className="relative h-fit rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group"
        onClick={() => openVideo(video.url)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        <img
            src={video.image}
            alt={video.title}
            className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover shadow-lg"
            loading="lazy"
            width="100%"
            height="100%"
            decoding="async"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-2 group-hover:scale-110 bg-gray-700 rounded-full transition-transform duration-200">
                <FaPlay className="text-white p-4 w-12 h-12 md:w-14 md:h-14" />
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-medium text-sm md:text-base line-clamp-2">
                {video.title}
            </h3>
        </div>
    </motion.div>
));

const VideoGrid = ({ videos = [] }) => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const formattedVideos = useMemo(() => (
        videos.map((item) => ({
            id: item.id.toString(),
            title: item.title,
            url: `https://www.youtube-nocookie.com/embed/${item.id_yt}?autoplay=1`,
            image: `${imageURL}/dukungans/${item.image}`
        }))
    ), [videos, imageURL]);

    const openVideo = useCallback((url) => {
        setPlayingVideo(url);
    }, []);

    const closeVideo = useCallback(() => {
        setPlayingVideo(null);
    }, []);

    const VideoPlayer = useMemo(() => {
        if (!playingVideo) return null;

        return (
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
                        sandbox="allow-scripts allow-same-origin allow-presentation"
                    />
                </motion.div>
            </motion.div>
        );
    }, [playingVideo, closeVideo]);

    return (
        <div className="w-full h-fit space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {formattedVideos.map((video) => (
                    <VideoThumbnail key={video.id} video={video} openVideo={openVideo} />
                ))}
            </div>

            <AnimatePresence>
                {playingVideo && VideoPlayer}
            </AnimatePresence>
        </div>
    );
};

const ScrollDownIndicator = memo(() => (
    <div className="scrolldown absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
        </div>
    </div>
));

const Dukungan = () => {
    const [dukungan, setDukungan] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDukungan = useCallback(async () => {
        try {
            const response = await DukunganService.getAllDukungan();
            setDukungan(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDukungan();
    }, [fetchDukungan]);

    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout
            bgLayoutColor="bg-[#F3F3F3]"
            bgColor={'bg-[#F3F3F3]'}
            position={"fixed"}
            margin={""}
            titleColor={"text-black"}
            paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
            paddingTop={'lg:pt-20'}
            type={'fadeInUp'}
            duration={0.5}
        >
            <Helmet>
                <title>Video Dukungan - Universitas Pasundan</title>
                <meta name="description" content="Dukungan nyata dari akademisi, profesional, dan pemimpin bangsa untuk Universitas Pasundan" />
            </Helmet>
            <div className="relative p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-44 mt-10 lg:mt-20">
                <div className="space-y-8 md:space-y-12 lg:space-y-20 relative">
                    <div className="relative w-full flex flex-col justify-center items-center space-y-3 md:space-y-4">
                        <Title title={'Bersama Membangun Generasi Unggul!'} />
                        <div className="w-2/3 md:w-1/3 xl:w-1/4 text-center">
                            <Text
                                sizeText="text-base md:text-xl lg:text-xl"
                                text={'Dukungan nyata dari akademisi, profesional, dan pemimpin bangsa!'}
                            />
                        </div>
                    </div>
                    <div className="w-full h-full absolute top-0">
                        <InteractiveGrid />
                    </div>
                    <ScrollDownIndicator />
                </div>

                <VideoGrid videos={dukungan} />
                <CTASection />
            </div>

            <style jsx>{`
        .scrolldown {
          --color: #FEF251;
          --sizeX: 30px;
          --sizeY: 50px;
          position: relative;
          width: var(--sizeX);
          height: var(--sizeY);
          margin-left: var(sizeX / 2);
          border: calc(var(--sizeX) / 10) solid var(--color);
          border-radius: 50px;
          box-sizing: border-box;
        }
        
        .scrolldown::before {
          content: '';
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          background-color: var(--color);
          border-radius: 100%;
          animation: scrolldown-anim 2s infinite;
          box-sizing: border-box;
        }
        
        .chevrons {
          padding: 6px 0 0 0;
          margin-left: -3px;
          margin-top: 48px;
          width: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .chevrondown {
          margin-top: -6px;
          position: relative;
          border: solid var(--color);
          border-width: 0 3px 3px 0;
          display: inline-block;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }
        
        .chevrondown:nth-child(odd) {
          animation: pulse 500ms ease infinite alternate;
        }
        
        .chevrondown:nth-child(even) {
          animation: pulse 500ms ease infinite alternate 250ms;
        }
        
        @keyframes pulse {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.5;
          }
        }
        
        @keyframes scrolldown-anim {
          0% {
            opacity: 0;
            height: 6px;
          }
          40% {
            opacity: 1;
            height: 10px;
          }
          80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
          }
          100% {
            height: 3px;
            opacity: 0;
          }
        }
      `}</style>
        </UserLayout>
    );
};

export default memo(Dukungan);