import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
import Text from "../Text";

const PrestasiSection = ({ prestasi, imageURL }) => {
    return (
        <MotionWrapper type="scaleUp" delay={0.2} className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
            <div className="text-center">
                <Text text={'Universitas Pasundan'} color="text-red-500" />
                <Title title={'Kegiatan dan Prestasi Mahasiswa'} />
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row-reverse md:justify-evenly items-center gap-4">
                <div className="w-full md:max-w-1/2 overflow-x-auto">
                    <table className="text-xs md:text-sm lg:text-base min-w-full rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="py-3 px-5 text-left">No</th>
                                <th className="py-3 px-5 text-left">Prestasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prestasi.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="py-3 px-5">{item.id}</td>
                                    <td className="py-3 px-5">{item.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-full md:max-w-1/2 flex flex-col">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={14}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1.3,
                            },
                            1024: {
                                slidesPerView: 1.3,
                            },
                        }}
                        className="w-full"
                    >
                        {prestasi.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="w-full bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                                    <img
                                        src={`${imageURL}/prestasis/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={14}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1.3,
                            },
                            1024: {
                                slidesPerView: 1.3,
                            },
                        }}
                        className="w-full"
                    >
                        {prestasi.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="w-full bg-white rounded-lg shadow-md hidden md:flex flex-col items-center text-center">
                                    <img
                                        src={`${imageURL}/prestasis/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </MotionWrapper>
    );
};

export default PrestasiSection;