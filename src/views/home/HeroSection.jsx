import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineBook } from "react-icons/md";
import { useRef, useState, useEffect, useCallback, memo } from "react";
import Biaya from '../../assets/biaya.jpg'
import CustomPagination from "../../components/CustomPagination";
import { IoDocumentTextOutline, IoWalletOutline } from "react-icons/io5";
import ButtonHover from "../../components/ButtonHover";
import MotionWrapper from "../../components/MotionWrapper";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ data = [] }) => {
    const navigate = useNavigate();
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    const handleSlideClick = useCallback((slug) => {
        navigate(`/jalur/${slug}`);
    }, [navigate]);

    const handleResize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [handleResize]);

    const isMobile = windowSize.width < 768;
    const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
    const isDesktop = windowSize.width >= 1024;

    const handleSlideChange = useCallback((swiper) => {
        setActiveIndex(swiper.realIndex);
    }, []);

    const goPrev = useCallback(() => {
        swiperRef.current?.slidePrev();
    }, []);

    const goNext = useCallback(() => {
        swiperRef.current?.slideNext();
    }, []);

    const handleDownloadBiaya = useCallback(() => {
        const link = document.createElement('a');
        link.href = Biaya;
        link.download = 'Brosur Biaya Unpas.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    const renderSlide = useCallback((slide) => {
        let slideHeight, selectedImage;

        if (isMobile) {
            slideHeight = '75vh';
            selectedImage = slide.image2;
        } else if (isTablet) {
            slideHeight = '86vh';
            selectedImage = slide.image2;
        } else {
            slideHeight = '70vh';
            selectedImage = slide.image;
        }

        return (
            <SwiperSlide key={slide.id} className="relative">
                <div className="w-full" style={{ height: slideHeight }} onClick={() => handleSlideClick(slide.slug)}>
                    <div
                        className="w-full h-full rounded-b-4xl md:rounded-2xl lg:rounded-4xl cursor-pointer"
                        style={{
                            backgroundImage: `url(${imageURL}/sliders/${selectedImage})`,
                            backgroundAttachment: isDesktop ? 'fixed' : 'scroll',
                            height: slideHeight,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                    >
                    </div>
                </div>
            </SwiperSlide>
        );
    }, [isMobile, isTablet, isDesktop, imageURL]);

    const handlePaginationClick = useCallback((index) => {
        setActiveIndex(index);
        swiperRef.current?.slideToLoop(index);
    }, []);

    return (
        <MotionWrapper type={'fadeInUp'} duration={1} once className="relative mx-0 md:mx-10 lg:mx-15 lg:pt-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                direction={isMobile ? "horizontal" : "horizontal"}
                navigation={isDesktop ? {
                    prevEl: ".custom-swiper-prev",
                    nextEl: ".custom-swiper-next"
                } : false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                className="w-full"
                style={{
                    height: isMobile ? '75vh' :
                        isTablet ? '86vh' : '70vh'
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={800}
                loop={data.length > 1}
                onSlideChange={handleSlideChange}
                lazy={'true'}
            >
                {data.map(renderSlide)}
            </Swiper>

            <button
                className="hidden md:block absolute top-1/2 left-4 z-10 cursor-pointer text-text text-3xl lg:text-4xl rounded-full p-2 transition-all"
                onClick={goPrev}
                aria-label="Previous slide"
            >
                <MdOutlineKeyboardArrowLeft size={50} />
            </button>

            <button
                className="hidden md:block absolute top-1/2 right-4 z-10 cursor-pointer text-text text-3xl lg:text-4xl rounded-full p-2 transition-all"
                onClick={goNext}
                aria-label="Next slide"
            >
                <MdOutlineKeyboardArrowRight size={50} />
            </button>

            {isDesktop && (
                <div className="absolute bottom-8 right-8 z-12 justify-center hidden md:flex">
                    <CustomPagination
                        display="flex gap-2 justify-center items-center p-2"
                        heightHover="w-10"
                        gap="py-2"
                        bgColor="bg-text"
                        borderColor="border-text"
                        width="w-2 h-2"
                        scale="w-2 h-2"
                        activeIndex={activeIndex}
                        totalSlides={data.length}
                        onPaginationClick={handlePaginationClick}
                    />
                </div>
            )}

            {isMobile && (
                <>
                    <button
                        className="block absolute top-1/2 left-4 z-10 cursor-pointer text-text text-3xl lg:text-4xl"
                        onClick={goPrev}
                        aria-label="Previous slide"
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </button>

                    <button
                        className="block absolute top-1/2 right-4 z-10 cursor-pointer text-text text-3xl lg:text-4xl"
                        onClick={goNext}
                        aria-label="Next slide"
                    >
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </>
            )}

            <div className="absolute -bottom-30 left-0 right-0 z-10 md:-bottom-13 w-full justify-center items-center hidden md:flex">
                <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 md:p-6 md:flex-row md:max-w-xl lg:max-w-fit rounded-xl md:rounded-2xl lg:rounded-4xl bg-[#EBEBEB] border-2 border-white">
                    <ButtonHover icon={<IoDocumentTextOutline size={24} className="text-text" />} onClick={() => window.location.href = `https://registrasi.unpas.ac.id/register`} text={'Daftar Sekarang'} />
                    {/* <ButtonHover icon={<IoWalletOutline size={24} className="text-text" />} onClick={handleDownloadBiaya} text={'Biaya'} /> */}
                    <ButtonHover icon={<MdOutlineBook size={24} className="text-text" />} onClick={() => window.location.href = `https://www.instagram.com/p/DIoC6zRySms/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==`} text={'Panduan Pendaftaran'} />
                </div>
            </div>
        </MotionWrapper>
    );
};

export default memo(HeroSection);