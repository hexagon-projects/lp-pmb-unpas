import React, { useRef } from "react";
import Text from "../Text";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const PrestasiSection = ({ prestasi, color="text-black" }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const swiperRef = useRef(null);

    return (
        <div className={'w-full flex flex-col md:flex-col justify-center items-center gap-4'}>
            <div className="w-full md:w-full text-center lg:text-center space-y-3 md:space-y-4">
                <Title title={'Prestasi'} color={color}/>
                <p className="text-sm md:text-base lg:text-base text-gray-500">
                    Dari akademik hingga inovasi, Universitas Pasundan terus mencetak prestasi gemilang. 
                </p>
            </div>
            <div className="w-full md:w-full">
                <Swiper
                    slidesPerView={1.6}
                    spaceBetween={5}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={false}
                    autoplay={{ delay: 3000 }}
                    loop
                    centeredSlides={true}
                    className="relative w-full h-[40vh] overflow-hidden"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        768: { slidesPerView: 2.6 },
                        1024: { slidesPerView: 3.3 },
                    }}
                >
                    {prestasi.map((item, index) => (
                        <SwiperSlide key={index} className="transition-all duration-500">
                            {({ isActive }) => (
                                <div
                                    className={`relative w-full h-full bg-cover bg-center rounded-xl md:rounded-2xl lg:rounded-4xl transition-all duration-500 ${
                                        isActive ? "scale-100" : "scale-[90%] opacity-80"
                                    }`}
                                    style={{ backgroundImage: `url(${imageURL}/prestasis/${item?.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-[#C5B91B40]/25 to-transparent flex flex-col justify-end p-6 rounded-xl md:rounded-2xl lg:rounded-4xl">
                                        <div className="w-full text-white text-left space-y-2 z-10">
                                            <h3 className="text-xs md:text-base lg:text-base font-bold">{item?.title}</h3>
                                            <div className="flex gap-2">
                                                <p className="text-xs md:text-sm">{item?.start_date} {item?.start_time}</p>
                                                <p className="text-xs md:text-sm">{item?.end_date} {item?.end_time}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-0 mt-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="px-2 py-2 text-[#444444]"
                    >
                        <IoArrowBackCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="px-2 py-2 text-[#444444]"
                    >
                        <IoArrowForwardCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrestasiSection;