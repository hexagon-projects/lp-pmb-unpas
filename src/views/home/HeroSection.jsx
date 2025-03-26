import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineBook } from "react-icons/md";
import { useRef, useState, useEffect, useCallback, memo } from "react";
import Logo from "../../assets/logo.png";
import MotionWrapper from "../../components/MotionWrapper";
import RichText from "../../components/RichText";
import Button from "../../components/Button";
import CustomPagination from "../../components/CustomPagination";
import { IoDocumentTextOutline, IoWalletOutline } from "react-icons/io5";

const HeroSection = ({ data = [] }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(
        typeof window !== 'undefined' ? window.innerWidth >= 768 : false
    );

    const handleResize = useCallback(() => {
        setIsDesktopOrTablet(window.innerWidth >= 768);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [handleResize]);

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
        const isVideo = !!slide.yt_id;
        const motionKey = `${slide.id}-${activeIndex}`;

        return (
            <SwiperSlide key={slide.id} className="relative">
                <div className="w-full h-full">
                    {isVideo ? (
                        <div className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden relative">
                            <iframe
                                src={`https://www.youtube.com/embed/${slide.yt_id}?autoplay=1&mute=1&loop=1&playlist=${slide.yt_id}&controls=0&showinfo=0&rel=0`}
                                title={slide.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl iframe_hero"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/50 flex justify-start items-center px-12 md:px-20 lg:px-20">
                                <MotionWrapper
                                    key={motionKey}
                                    type="fadeInUp"
                                    duration={0.5}
                                    className="md:max-w-lg lg:max-w-4xl space-y-3 md:space-y-4"
                                >
                                    <h1 className="text-white font-bold text-xl md:text-2xl lg:text-[32px]">
                                        {slide.title}
                                    </h1>
                                    <RichText content={slide.description} textColor="text-white" />
                                    <Button
                                        css={'pulsating-button'}
                                        textColor={'text-gray-700'}
                                        bgColor={'bg-primary'}
                                        text={slide.button}
                                        onClick={() => window.location.href = slide.link}
                                    />
                                </MotionWrapper>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="px-12 md:px-20 lg:px-20 w-full h-full flex justify-start items-center bg-cover md:bg-cover rounded-xl md:rounded-2xl lg:rounded-4xl"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL}/sliders/${slide.image})`,
                                backgroundAttachment: isDesktopOrTablet ? 'fixed' : 'scroll'
                            }}
                        >
                            <MotionWrapper
                                key={motionKey}
                                type="fadeInUp"
                                duration={0.5}
                                className="md:max-w-lg lg:max-w-4xl space-y-3 md:space-y-4"
                            >
                                <h1 className="text-white font-bold text-xl md:text-2xl lg:text-[32px]">
                                    {slide.title}
                                </h1>
                                <RichText content={slide.description} textColor="text-white" />
                                <Button
                                    css={'pulsating-button'}
                                    textColor={'text-gray-700'}
                                    bgColor={'bg-primary'}
                                    text={slide.button}
                                    hoverBgColor={'hover:border-3 hover:border-white/50'}
                                    onClick={() => window.location.href = slide.link}
                                />
                            </MotionWrapper>
                        </div>
                    )}
                </div>
                <div className="px-2 py-4 absolute top-4 left-4 lg:hidden z-[1000]">
                    <div className="flex items-center gap-3 md:gap-5">
                        <img
                            src={Logo}
                            alt="Logo Universitas Pasundan"
                            className="w-10 h-10 md:w-12 md:h-12"
                            loading="lazy"
                            width={48}
                            height={48}
                        />
                        <div>
                            <p className="text-xs lg:text-sm text-white">Penerimaan Mahasiswa Baru</p>
                            <span className="text-base lg:text-xl text-white md:text-base font-medium">
                                Universitas Pasundan
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        );
    }, [activeIndex, imageURL, isDesktopOrTablet]);

    const handlePaginationClick = useCallback((index) => {
        setActiveIndex(index);
        swiperRef.current?.slideTo(index);
    }, []);

    return (
        <div className="relative m-2 md:mx-6 lg:mx-6 lg:pt-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                // modules={[Navigation, Pagination, Autoplay]}
                // spaceBetween={50}
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
                className="w-full h-[85vh] md:h-[80vh] lg:h-[75vh]"
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

            <div
                className="block md:hidden absolute top-1/2 left-4 z-10 cursor-pointer text-primary text-3xl lg:text-4xl"
                onClick={goPrev}
                aria-label="Previous slide"
            >
                <MdOutlineKeyboardArrowLeft />
            </div>
            <div
                className="block md:hidden absolute top-1/2 right-4 z-10 cursor-pointer text-primary text-3xl lg:text-4xl"
                onClick={goNext}
                aria-label="Next slide"
            >
                <MdOutlineKeyboardArrowRight />
            </div>

            <div className="absolute -bottom-30 left-0 right-0 z-10 md:-bottom-13 w-full justify-center items-center hidden md:flex">
                <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] border border-gray-500 p-4 md:p-6 md:flex-row md:max-w-xl lg:max-w-fit md:rounded-full bg-white">
                    <Button iconStatus="flex" icon={<IoDocumentTextOutline size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Daftar Sekarang'} rounded="rounded-full" weight="font-normal" />
                    <Button iconStatus="flex" icon={<IoWalletOutline size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Biaya'} rounded="rounded-full" weight="font-normal" />
                    <Button iconStatus="flex" icon={<MdOutlineBook size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Buku Panduan'} rounded="rounded-full" weight="font-normal" /> */}

                </>
            )}

            <div className="block md:hidden absolute top-1/2 left-4 z-10 cursor-pointer custom-swiper-prev text-primary text-3xl lg:text-4xl">
                <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="block md:hidden absolute top-1/2 right-4 z-10 cursor-pointer custom-swiper-next text-primary text-3xl lg:text-4xl">
                <MdOutlineKeyboardArrowRight />
            </div>
            {/* Dibawah ini adalah kode yang sebelumnya */}
            {/* <div className="absolute -bottom-30 left-0 right-0 z-10 md:-bottom-10 w-full justify-center items-center hidden md:flex"> */}
            <div className="absolute bottom-5 left-0 right-0 z-10 w-full justify-center items-center hidden md:flex">
                <div className="flex flex-col justify-center items-center gap-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] border border-gray-500 p-4 md:p-6 md:flex-row md:max-w-xl md:rounded-full bg-white">
                    <Button iconStatus="flex" icon={<IoDocumentTextOutline size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Daftar'} rounded="rounded-full" />
                    <Button iconStatus="flex" icon={<IoWalletOutline size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Biaya'} rounded="rounded-full" />
                    <Button iconStatus="flex" icon={<MdOutlineBook size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Buku Panduan'} rounded="rounded-full" />
                    <Button
                        iconStatus="flex"
                        icon={<IoDocumentTextOutline size={24} />}
                        textColor="text-white"
                        bgColor="bg-footer"
                        hoverBgColor="hover:border-3 hover:border-white/40"
                        text="Daftar Sekarang"
                        rounded="rounded-full"
                        weight="font-normal"
                    />
                    <Button
                        iconStatus="flex"
                        icon={<IoWalletOutline size={24} />}
                        textColor="text-white"
                        bgColor="bg-footer"
                        hoverBgColor="hover:border-3 hover:border-white/40"
                        text="Biaya"
                        rounded="rounded-full"
                        weight="font-normal"
                    />
                    <Button
                        iconStatus="flex"
                        icon={<MdOutlineBook size={24} />}
                        textColor="text-white"
                        bgColor="bg-footer"
                        hoverBgColor="hover:border-3 hover:border-white/40"
                        text="Buku Panduan"
                        rounded="rounded-full"
                        weight="font-normal"
                    />
                </div>
            </div>
        </div>
    );
};


export default memo(HeroSection);
