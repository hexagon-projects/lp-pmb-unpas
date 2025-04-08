import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineBook } from "react-icons/md";
import { useRef, useState, useEffect, useCallback, memo } from "react";
import Logo from "../../assets/logo.webp";
import Button from "../../components/Button";
import CustomPagination from "../../components/CustomPagination";
import { IoDocumentTextOutline, IoWalletOutline } from "react-icons/io5";

const HeroSection = ({ data = [] }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

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
    const isDesktopOrTablet = windowSize.width >= 768;

    const handleSlideChange = useCallback((swiper) => {
        setActiveIndex(swiper.activeIndex);
    }, []);

    const goPrev = useCallback(() => {
        swiperRef.current?.slidePrev();
    }, []);

    const goNext = useCallback(() => {
        swiperRef.current?.slideNext();
    }, []);

    const renderSlide = useCallback((slide) => {
        const slideHeight = isMobile ? `65vh` : '100%';
        const selectedImage = isMobile ? slide.image2 : slide.image;

        return (
            <SwiperSlide key={slide.id} className="relative">
                <div className="w-full h-full" style={{ height: slideHeight }}>
                    <div
                        className="w-full h-full bg-cover rounded-b-4xl md:rounded-b-2xl lg:rounded-b-4xl "
                        style={{
                            backgroundImage: `url(${imageURL}/sliders/${selectedImage})`,
                            backgroundAttachment: isDesktopOrTablet ? 'fixed' : 'scroll',
                            height: slideHeight,
                            backgroundSize: isMobile ? 'cover' : 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                    >
                    </div>
                </div>
            </SwiperSlide>
        );
    }, [activeIndex, imageURL, isDesktopOrTablet, isMobile, windowSize.width]);

    const handlePaginationClick = useCallback((index) => {
        setActiveIndex(index);
        swiperRef.current?.slideTo(index);
    }, []);

    return (
        <div className="relative md:mx-6 lg:mx-6 lg:pt-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                direction={isDesktopOrTablet ? "vertical" : "horizontal"}
                navigation={isDesktopOrTablet ? {
                    prevEl: ".custom-swiper-prev",
                    nextEl: ".custom-swiper-next"
                } : false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                className="w-full"
                style={{ height: isMobile ? '65vh' : '75vh' }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={800}
                onSlideChange={handleSlideChange}
                lazy={'true'}
            >
                {data.map(renderSlide)}
            </Swiper>

            {isDesktopOrTablet && (
                <div className="absolute top-1/2 bottom-1/2 right-4 z-12 justify-center hidden md:flex">
                    <CustomPagination
                        display="flex flex-col gap-2 justify-center items-center p-2"
                        heightHover="h-10"
                        gap="py-2"
                        bgColor="bg-primary"
                        borderColor="border-primary"
                        width="w-2 h-2"
                        scale="w-2 h-2"
                        activeIndex={activeIndex}
                        totalSlides={data.length}
                        onPaginationClick={handlePaginationClick}
                    />
                </div>
            )}

            <button
                className="block md:hidden absolute top-1/2 left-4 z-10 cursor-pointer text-primary text-3xl lg:text-4xl"
                onClick={goPrev}
                aria-label="Previous slide"
            >
                <MdOutlineKeyboardArrowLeft />
            </button>

            <button
                className="block md:hidden absolute top-1/2 right-4 z-10 cursor-pointer text-primary text-3xl lg:text-4xl"
                onClick={goNext}
                aria-label="Next slide"
            >
                <MdOutlineKeyboardArrowRight />
            </button>

            <div className="absolute -bottom-30 left-0 right-0 z-10 md:-bottom-13 w-full justify-center items-center hidden md:flex">
                <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 md:p-6 md:flex-row md:max-w-xl lg:max-w-fit rounded-xl md:rounded-2xl lg:rounded-4xl bg-[#EBEBEB] border-2 border-white">
                    <Button iconStatus="block" icon={<IoDocumentTextOutline size={24} className="text-text" />} textColor={'text-black'} bgColor={'bg-[#EBEBEB]'} hoverBgColor={'hover:border-2 hover:border-text'} border="border-2 border-white" text={'Daftar Sekarang'} weight="font-normal" onClick={() => window.location.href = `https://registrasi.unpas.ac.id/register`} />
                    <Button iconStatus="block" icon={<IoWalletOutline size={24} className="text-text" />} textColor={'text-black'} bgColor={'bg-[#EBEBEB]'} hoverBgColor={'hover:border-2 hover:border-text'} border="border-2 border-white" text={'Biaya'} weight="font-normal" />
                    <Button iconStatus="block" icon={<MdOutlineBook size={24} className="text-text" />} textColor={'text-black'} bgColor={'bg-[#EBEBEB]'} hoverBgColor={'hover:border-2 hover:border-text'} border="border-2 border-white" text={'Buku Panduan'} weight="font-normal" />
                </div>
            </div>
        </div>
    );
};

export default memo(HeroSection);