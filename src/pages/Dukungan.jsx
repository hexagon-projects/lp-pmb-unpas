import { useEffect, useState, useCallback, useMemo, memo } from 'react';
import UserLayout from './layouts/UserLayout';
import Loading from '../components/Loading';
import DukunganService from '../fetching/dukungan';
import Title from '../components/Title';
import { Helmet } from 'react-helmet-async';
import Text from '../components/Text';
import { FaPlay } from 'react-icons/fa';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CTASection from '../components/CTASection';
import ButtonLoadMore from '../components/ButtonLoadMore';
import InteractiveCard from '../components/InteractiveCard';

// Komponen Video Thumbnail
const VideoThumbnail = memo(({ video, openVideo }) => (
  <motion.div
    className="relative h-fit rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
    onClick={() => openVideo(video.url)}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col items-start p-4  rounded-2xl">
      <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px]">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-full object-cover shadow-lg rounded-xl md:rounded-2xl lg:rounded-4xl"
          loading="lazy"
          width="100%"
          height="100%"
          decoding="async"
        />
        {/* Play button always visible at the center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity">
          <div className="p-3 bg-gray-700 rounded-full">
            <FaPlay className="text-white p-4 w-12 h-12 md:w-14 md:h-14" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start mt-4 gap-2">
        <h3 className="text-black font-medium text-sm md:text-base line-clamp-2">{video.title}</h3>
      </div>
    </div>
  </motion.div>
));

// Komponen Video Grid
const VideoGrid = ({ videos = [], visibleVideos }) => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const imageURL = import.meta.env.VITE_IMAGE_URL;

  const formattedVideos = useMemo(() =>
      videos.map((item) => ({
        id: item.id.toString(),
        title: item.title,
        url: `https://www.youtube-nocookie.com/embed/${item.id_yt}?autoplay=0`,
        image: `${imageURL}/dukungans/${item.image}`
      })),
    [videos, imageURL]
  );

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
    <div className="w-full h-fit space-y-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-2 lg:gap-4 px-[16px] md:px-[32px] lg:px-[64px] ">

        {formattedVideos.slice(0, visibleVideos).map((video) => (
          <VideoThumbnail key={video.id} video={video} openVideo={openVideo} />
        ))}
      </div>

      <AnimatePresence>{playingVideo && VideoPlayer}</AnimatePresence>
    </div>
  );
};


// Komponen Scroll Down Indicator
const ScrollDownIndicator = memo(() => (
  <div className="scrolldown absolute bottom-29 md:bottom-35 lg:bottom-39 left-1/2 transform -translate-x-1/2 z-10 scale-60 md:scale-80 lg:scale-100">
    <div className="chevrons">
      <div className="chevrondown"></div>
      <div className="chevrondown"></div>
    </div>
  </div>
));

const Dukungan = () => {
  const [dukungan, setDukungan] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(12);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchDukungan = useCallback(async () => {
    try {
      const response = await DukunganService.getAllDukungan();
      if (response && response.length > 0) {
        setDukungan(response);
      } else {
        console.error("No data received");
      }
    } catch (error) {
      console.error("Error fetching dukungan:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDukungan();
  }, [fetchDukungan]);

  const loadMore = async () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setVisibleVideos((prev) => prev + 12);

    setTimeout(() => {
      setLoadingMore(false);
    }, 1000);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <UserLayout
      bgLayoutColor="bg-[#F3F3F3]"
      bgColor={'bg-[#F3F3F3]'}
      position={'fixed'}
      margin={''}
      titleColor={'text-black'}
      paddingDekstop={'md:py-3 md:px-3 lg:py-6 lg:px-6'}
      paddingTop={'lg:pt-20'}
      type={'fadeInUp'}
      duration={0.5}
    >
      <Helmet>
        <title>Video Dukungan - Universitas Pasundan</title>
        <meta name="description" content="Dukungan nyata dari akademisi, profesional, dan pemimpin bangsa untuk Universitas Pasundan" />
      </Helmet>

      <div className="relative">
        {/* SECTION HEADER DENGAN BACKGROUND GRID */}
        <div className="relative w-full ">
          {/* Background Grid sebagai elemen paling belakang */}
          <div className="absolute w-full h-screen inset-0 z-10">
            <InteractiveCard />
          </div>



          {/* Konten Teks di atas grid dan SVG */}
          <div className="relative z-0 py-30 md:py-40 lg:py-50 mx-6 flex flex-col justify-center items-center text-center space-y-4">
            <Title title="Bersama Membangun Generasi Unggul Dan Berbudaya!" />
            <div className="w-2/3 md:w-1/3 xl:w-1/4 text-center">
              <Text
                sizeText="text-base md:text-xl lg:text-xl"
                text="Dukungan nyata dari akademisi, profesional, dan pemimpin bangsa!"
              />
            </div>
          </div>

          {/* Scroll Down Indicator tetap di atas */}
          <ScrollDownIndicator />
        </div>

        {/* VIDEO SECTION */}
        <div>
          <div className="relative z-10 w-full flex flex-col items-center justify-center bottom-10">
            <VideoGrid videos={dukungan} visibleVideos={visibleVideos} />
          </div>

          {/* LOAD MORE BUTTON */}
          <div className="flex justify-center z-10 ">
            <ButtonLoadMore onClick={loadMore} disabled={loadingMore}>
              {loadingMore ? "Loading..." : "Load More"}
            </ButtonLoadMore>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="relative z-10 pt-15">
          <CTASection />
        </div>
      </div >


      <style jsx>{`
        .scrolldown {
          --color: #fef251;
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
    </UserLayout >
  );
};

export default memo(Dukungan);