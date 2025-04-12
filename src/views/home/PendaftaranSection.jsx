import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Text from '../../components/Text';
import Title from '../../components/Title';
import Button from '../../components/Button';
import SelengkapnyaButton from '../../components/SelengkapnyaButton';
import Section1 from '../../assets/gedung.jpeg';
import CustomPaginationProdi from '../../components/prodi/CustomPaginationProdi';
import AnimatedTitle from '../../components/AnimatedTitle';
import AnimatedSubtitle from '../../components/AnimatedSubtitle';

const DUMMY_IMAGES = Array(4).fill({ image: Section1 });

const PendaftaranSection = ({ 
  title = '', 
  subtitle = '', 
  jalurPendaftaran = [], 
  titleColor = 'text-text', 
  subtitleColor, 
  borderPaginationColor, 
  paginationColor, 
  iconColor = '#C73929' 
}) => {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    const formattedJalur = useMemo(() => (
        jalurPendaftaran.map(jalur => ({
            ...jalur,
            formattedStart: formatDate(jalur.start_date),
            formattedEnd: formatDate(jalur.end_date)
        }))
    ), [jalurPendaftaran]);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    const handlePaginationClick = useCallback((index) => {
        swiperRef.current?.slideToLoop(index);
    }, []);

    const handleClick = useCallback((link) => {
        window.open(link, '_blank');
    }, []);

    const handleClickJalur = useCallback(() => {
        navigate('/jalur');
    }, [navigate]);

    function formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    const swiperSlides = useMemo(() => (
        DUMMY_IMAGES.map((item, index) => (
            <SwiperSlide key={index}>
                <motion.div
                    className="rounded-xl md:rounded-2xl lg:rounded-4xl pb-5"
                    animate={{
                        scale: activeIndex === index ? 1 : 0.9,
                        transition: { duration: 0.3 }
                    }}
                >
                    <img
                        loading="lazy"
                        src={item.image}
                        alt="Gedung Universitas"
                        className="w-full h-[40vh] lg:h-[50vh] object-cover rounded-xl md:rounded-2xl lg:rounded-4xl"
                        width="100%"
                    />
                </motion.div>
            </SwiperSlide>
        ))
    ), [activeIndex]);

    const jalurItems = useMemo(() => (
        formattedJalur.map((jalur, index) => (
            <motion.div
                key={jalur.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#F3F4F4] w-full p-4 md:p-6 lg:p-8 border-2 border-[#fafafa] shadow-primary/10 shadow-xl rounded-xl md:rounded-2xl lg:rounded-4xl cursor-pointer flex gap-4 items-center"
            >
                <div className="hidden lg:block p-3 rounded-full shadow-xl shadow-text/5 bg-[#f3f4f4] border-2 border-[#fafafa]">
                    <Calendar
                        className="w-6 h-6 md:w-8 md:h-8"
                        style={{ color: iconColor }}
                    />
                </div>
                <div className="w-full flex flex-row justify-between items-center gap-4">
                    <div className="w-[70%] flex flex-col gap-2">
                        <Title sizeText="text-sm md:text-base lg:text-lg" title={jalur.name} fontWeight="font-semibold" />
                        <div className="space-y-1">
                            <Text sizeMobile="text-xs md:text-xs" text={`Jadwal Pendaftaran: ${jalur.formattedStart}`} />
                            <Text sizeMobile="text-xs md:text-xs" text={`Pendaftaran ditutup: ${jalur.formattedEnd}`} />
                        </div>
                    </div>
                    <div className="w-fit">
                        <Button
                            rounded="rounded-xl md:rounded-2xl"
                            text={isMobile ? 'Daftar' : 'Daftar Sekarang'}
                            bgColor="bg-primary"
                            onClick={() => handleClick(jalur.link)}
                            padding="p-3 md:p-4"
                            border='border-2 border-text'
                            hoverBgColor='hover:border-2 hover:border-text'
                        />
                    </div>
                </div>
            </motion.div>
        ))
    ), [formattedJalur, isMobile, handleClick, iconColor]);

    return (
        <div className="w-full flex justify-center items-center bg-transparent">
            <div className="w-full md:w-full flex flex-col gap-4 md:gap-6 lg:gap-8 p-5 md:p-10 lg:p-15">
                <div className="text-center md:space-y-2">
                    {title && <AnimatedSubtitle sizeText="text-base md:text-lg lg:text-2xl" text={title} color={titleColor} weight="" />}
                    {subtitle && <AnimatedTitle text={subtitle} color={subtitleColor} />}
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
                    <div className="w-full lg:w-[35%] jalur-swiper-blur-mask">
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            loop={true}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            slidesPerView={1.3}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                640: { 
                                    spaceBetween: 20,
                                    slidesPerView: 1.2
                                },
                                1024: { 
                                    spaceBetween: 20,
                                    slidesPerView: 1.3
                                },
                                1440: { 
                                    spaceBetween: 20,
                                    slidesPerView: 1.4
                                }
                            }}
                        >
                            {swiperSlides}
                        </Swiper>

                        <CustomPaginationProdi
                            activeIndex={activeIndex}
                            totalSlides={DUMMY_IMAGES.length}
                            onPaginationClick={handlePaginationClick}
                            width="w-2 h-2"
                            scale="w-7 h-2"
                            borderColor={borderPaginationColor}
                            bgColor={paginationColor}
                        />
                    </div>

                    <div className="w-full lg:w-[60%] space-y-4 md:space-y-4">
                        <div className='space-y-4 h-50 lg:h-[50vh] overflow-y-scroll jalur-scroll-container'>
                            {jalurItems}
                        </div>
                        <SelengkapnyaButton onClick={handleClickJalur} color={iconColor}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(PendaftaranSection);