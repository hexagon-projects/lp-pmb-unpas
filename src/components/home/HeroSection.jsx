import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { PiPlus } from "react-icons/pi";
import Button from "../Button";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import RichText from "../RichText";

const HeroSection = ({ data }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="relative md:m-6 lg:m-12">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    prevEl: ".custom-swiper-prev",
                    nextEl: ".custom-swiper-next",
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-[100vh]"
            >
                {data.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="px-12 md:px-20 lg:px-20 w-full h-full flex justify-start items-center bg-cover md:bg-cover md:rounded-xl bg_home"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL}/sliders/${slide.image})`
                            }}
                        >
                            <div className="md:max-w-lg lg:max-w-4xl space-y-3 md:space-y-4">
                                <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                                    {slide.title}
                                </h1>
                                <RichText content={slide.description} textColor="text-white" />
                                <Button textColor={'text-gray-700'} bgColor={'bg-primary'} text={slide.button} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute top-1/2 left-4 z-10 cursor-pointer custom-swiper-prev text-primary text-3xl lg:text-4xl">
                <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="absolute top-1/2 right-4 z-10 cursor-pointer custom-swiper-next text-primary text-3xl lg:text-4xl">
                <MdOutlineKeyboardArrowRight />
            </div>

            <div className="absolute -bottom-30 left-0 right-0 z-10 md:-bottom-10 w-full justify-center items-center hidden md:flex">
                <div className="flex flex-col justify-center items-center gap-4 shadow border border-gray-500 p-4 md:p-6 md:flex-row md:max-w-xl md:rounded-full bg-white">
                    <Button iconStatus="flex" icon={<PiPlus size={20} />} textColor={'text-gray-700'} bgColor={'bg-white'} hoverColor={'hover:bg-primary hover:border-none'} border={'border'} text={'Daftar'} rounded="rounded-full" />
                    <Button iconStatus="flex" icon={<PiPlus size={20} />} textColor={'text-gray-700'} bgColor={'bg-white'} hoverColor={'hover:bg-primary hover:border-none'} border={'border'} text={'Biaya'} rounded="rounded-full" />
                    <Button iconStatus="flex" icon={<PiPlus size={20} />} textColor={'text-gray-700'} bgColor={'bg-white'} hoverColor={'hover:bg-primary hover:border-none'} border={'border'} text={'Buku Panduan'} rounded="rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;