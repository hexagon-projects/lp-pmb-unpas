import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Text from "../../components/Text";
import Title from "../../components/Title";
import Button from "../../components/Button";
import MotionWrapper from "../../components/MotionWrapper";

const PrestasiSection = ({ prestasi, imageURL }) => {
    const [tableHeight, setTableHeight] = useState(0);
    const tableRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (tableRef.current) {
                setTableHeight(tableRef.current.clientHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        if (tableRef.current) {
            setTableHeight(tableRef.current.clientHeight);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [prestasi]);

    const getSwiperHeight = () => {
        if (windowWidth < 768) {
            return 'auto';
        }
        return `${tableHeight / 2 - 32}px`;
    };

    return (
        <MotionWrapper className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
            <div className="text-center">
                <Text sizeText="text-base md:text-lg lg:text-2xl" text={'Universitas Pasundan'} color="text-red-500" weight={'font-bold'} />
                <Title title={'Kegiatan dan Prestasi Mahasiswa'} />
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row-reverse md:justify-evenly items-center gap-4">
                <div className="w-full md:max-w-1/2 overflow-x-auto" ref={tableRef}>
                    <table className="text-xs md:text-sm lg:text-base min-w-full">
                        <thead>
                            <tr className="text-gray-700">
                                <th className="text-lg md:text-xl py-3 px-5 text-left">Prestasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prestasi.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50 border-t border-gray-200">
                                    <td className="text-xs md:text-sm py-3 px-5">{item.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 md:mt-0 p-4">
                        <Button text={'Selengkapnya'} bgColor={'bg-primary'} textColor={'text-black'} onClick={() => window.location.href = '/prestasi'} />
                    </div>
                </div>
                <div className="w-full md:max-w-1/2 flex flex-col gap-4" style={{ height: windowWidth >= 768 ? tableHeight : 'auto' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
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
                        style={{ height: getSwiperHeight() }}
                        className="w-full"
                    >
                        {prestasi.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="relative w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden">
                                    <img
                                        src={`${imageURL}/prestasis/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-[25vh] lg:h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                                        <h3 className="text-white text-sm md:text-base font-bold">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
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
                        style={{ height: getSwiperHeight() }}
                        className="w-full"
                    >
                        {prestasi.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="relative w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden">
                                    <img
                                        src={`${imageURL}/prestasis/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-[25vh] lg:h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                                        <h3 className="text-white text-sm md:text-base font-bold">
                                            {item.title}
                                        </h3>
                                    </div>
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