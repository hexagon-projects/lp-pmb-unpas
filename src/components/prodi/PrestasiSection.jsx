import React, { useRef } from "react";
import MotionWrapper from "../MotionWrapper";
import Text from "../Text";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const PrestasiSection = ({ prestasi }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const swiperRef = useRef(null);

    return (
        <MotionWrapper type={'zoomIn'} delay={0.2} className={'flex flex-col md:flex-row justify-between items-center gap-4'}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="w-full md:w-[30%] text-center space-y-3 md:space-y-4">
=======
            <div className="w-full md:w-[30%] text-center lg:text-left space-y-3 md:space-y-4">
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            <div className="w-full md:w-[30%] text-center lg:text-left space-y-3 md:space-y-4">
>>>>>>> 8bbe4dc (First Commit)
=======
            <div className="w-full md:w-[30%] text-center lg:text-left space-y-3 md:space-y-4">
>>>>>>> origin/Budi
                <Title title={'Prestasi'} />
                <Text leading={'leading-6'} text={'Dari akademik hingga inovasi, Universitas Pasundan terus mencetak prestasi gemilang. Bersama Unpas, raih mimpi dan jadilah bagian dari generasi unggul yang membawa perubahan!'} />
            </div>
            <div className="w-full md:w-[70%]">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={false}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="relative h-96 overflow-hidden"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        768: { slidesPerView: 1.6 },
                        1024: { slidesPerView: 2.6 },
                    }}
                >
                    {prestasi.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${imageURL}/prestasis/${item?.image})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                    <div className="w-full text-white text-left space-y-2 z-10">
                                        <h3 className="text-xl font-bold">{item?.title}</h3>
                                        <div className="flex gap-2">
                                            <p className="text-xs md:text-sm">{item?.start_date} {item?.start_time}</p>
                                            <p className="text-xs md:text-sm">{item?.end_date} {item?.end_time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="px-4 py-2 text-blue-500"
                    >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        <IoArrowBackCircleOutline className="text-4xl md:text-5xl" />
=======
                        <IoArrowBackCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                        <IoArrowBackCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
>>>>>>> 8bbe4dc (First Commit)
=======
                        <IoArrowBackCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
>>>>>>> origin/Budi
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="px-4 py-2 text-blue-500"
                    >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        <IoArrowForwardCircleOutline className="text-4xl md:text-5xl" />
=======
                        <IoArrowForwardCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                        <IoArrowForwardCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
>>>>>>> 8bbe4dc (First Commit)
=======
                        <IoArrowForwardCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
>>>>>>> origin/Budi
                    </button>
                </div>
            </div>
        </MotionWrapper>
    );
};

export default PrestasiSection;