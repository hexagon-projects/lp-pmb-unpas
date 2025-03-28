import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineBook } from "react-icons/md";
import { useRef, useState, useEffect } from "react";

import Logo from "../../assets/logo.png";

import MotionWrapper from "../../components/MotionWrapper";
import RichText from "../../components/RichText";
import Button from "../../components/Button";
import CustomPagination from "../../components/CustomPagination";
import { IoDocumentTextOutline, IoWalletOutline } from "react-icons/io5";

const HeroSection = ({ data }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktopOrTablet(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative m-2 md:m-6 lg:mx-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                direction={isDesktopOrTablet ? "vertical" : "horizontal"}
                navigation={isDesktopOrTablet ? { prevEl: ".custom-swiper-prev", nextEl: ".custom-swiper-next" } : false}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-[75vh] md:h-[80vh] lg:h-[85vh]"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect="fade"
                speed={800}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {data.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative">
<<<<<<< HEAD
                        <div className="w-full h-[75vh] md:h-full">
=======
                        {/* Dibawah ini adalah kode yang sebelummya */}
                        {/* <div className="w-full h-[65vh] md:h-full"> */}
                        <div className="w-full h-[75vh]">
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                            <div className="px-12 md:px-20 lg:px-20 w-full h-full flex justify-start items-center bg-cover md:bg-cover md:rounded-xl"
                                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL}/sliders/${slide.image})`, backgroundAttachment: 'fixed' }}>
                                <MotionWrapper key={slide.id} type="fadeInUp" duration={0.5} className="md:max-w-lg lg:max-w-4xl space-y-3 md:space-y-4">
                                    <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                                        {slide.title}
                                    </h1>
                                    <RichText content={slide.description} textColor="text-white" />
                                    <Button textColor={'text-gray-700'} bgColor={'bg-primary'} text={slide.button} hoverBgColor={'hover:border-3 hover:border-white/50'} onClick={() => window.location.href = `${slide.link}`} />
                                </MotionWrapper>
                            </div>
                        </div>
                        <div className="px-2 py-4 absolute top-0 left-0 lg:hidden z-1000">
                            <div className="flex items-center gap-3 md:gap-5">
                                <img src={Logo} alt="Logo Universitas Pasundan" className="w-10 h-10 md:w-12 md:h-12" loading="lazy" />
                                <div>
                                    <p className={`text-xs lg:text-sm text-black`}>Penerimaan Mahasiswa Baru</p>
                                    <span className={`text-base lg:text-xl text-black md:text-base font-medium`}>Universitas Pasundan</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isDesktopOrTablet && (
                <>
                    <div className="absolute top-1/2 bottom-1/2 right-4 z-12 justify-center hidden md:flex">
                        <CustomPagination
                            display="flex flex-col gap-2 justify-center items-center p-2"
                            heightHover={'h-10'}
                            gap="py-2"
                            bgColor="bg-primary"
                            borderColor="border-primary"
                            scale=""
                            activeIndex={activeIndex}
                            totalSlides={data.length}
                            onPaginationClick={(index) => {
                                setActiveIndex(index);
                                if (swiperRef.current) {
                                    swiperRef.current.slideTo(index);
                                }
                            }}
                        />
                    </div>

                </>
            )}

            <div className="block md:hidden absolute top-1/2 left-4 z-10 cursor-pointer custom-swiper-prev text-primary text-3xl lg:text-4xl">
                <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="block md:hidden absolute top-1/2 right-4 z-10 cursor-pointer custom-swiper-next text-primary text-3xl lg:text-4xl">
                <MdOutlineKeyboardArrowRight />
            </div>
<<<<<<< HEAD

            <div className="absolute -bottom-30 left-0 right-0 z-10 md:-bottom-10 w-full justify-center items-center hidden md:flex">
=======
            {/* Dibawah ini adalah kode yang sebelumnya */}
            {/* <div className="absolute -bottom-30 left-0 right-0 z-10 md:-bottom-10 w-full justify-center items-center hidden md:flex"> */}
            <div className="absolute bottom-5 left-0 right-0 z-10 w-full justify-center items-center hidden md:flex">
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                <div className="flex flex-col justify-center items-center gap-4 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] border border-gray-500 p-4 md:p-6 md:flex-row md:max-w-xl md:rounded-full bg-white">
                    <Button iconStatus="flex" icon={<IoDocumentTextOutline size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Daftar'} rounded="rounded-full" />
                    <Button iconStatus="flex" icon={<IoWalletOutline size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Biaya'} rounded="rounded-full" />
                    <Button iconStatus="flex" icon={<MdOutlineBook size={24} />} textColor={'text-white'} bgColor={'bg-footer'} hoverBgColor={'hover:border-3 hover:border-white/40'} text={'Buku Panduan'} rounded="rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
