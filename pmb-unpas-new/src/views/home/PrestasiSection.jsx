import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Text from "../../components/Text";
import Title from "../../components/Title";
import Button from "../../components/Button";
import MotionWrapper from "../../components/MotionWrapper";


const PrestasiSection = ({ prestasi, imageURL }) => {
    return (
        <MotionWrapper className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
            <div className="text-center">
                <Text sizeText="text-base md:text-lg lg:text-2xl" text={'Universitas Pasundan'} color="text-red-500" weight={'font-bold'}/>
                <Title title={'Kegiatan dan Prestasi Mahasiswa'} />
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row-reverse md:justify-evenly items-center gap-4">
                <div className="w-full md:max-w-1/2 overflow-x-auto">
                    <table className="text-xs md:text-sm lg:text-base min-w-full ">
                        <thead>
                            <tr className="text-gray-700">
                                <th className="text-sm md:text-base py-3 px-5 text-left">Prestasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prestasi.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="text-xs md:text-sm py-3 px-5">{item.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 md:mt-0 p-4">
                        <Button text={'Selengkapnya'} bgColor={'bg-primary'} textColor={'text-black'} onClick={() => window.location.href = '/prestasi'}/>
                    </div>
                </div>
                <div className="w-full md:max-w-1/2 flex flex-col">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={14}
                        slidesPerView={1.2}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.2,
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
                                <div className="w-full rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col items-center text-center">
                                    <img
                                        src={`${imageURL}/prestasis/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl md:rounded-2xl lg:rounded-4xl mb-4 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={14}
                        slidesPerView={1}
                        autoplay={{ delay: 2000, reverseDirection: true }}
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
                                <div className="w-full rounded-xl md:rounded-2xl lg:rounded-4xl hidden md:flex flex-col items-center text-center">
                                    <img
                                        src={`${imageURL}/prestasis/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl md:rounded-2xl lg:rounded-4xl mb-4 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]"
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