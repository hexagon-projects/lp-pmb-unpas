import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Text from "../../components/Text";
import Title from "../../components/Title";
import Button from "../../components/Button";
import MotionWrapper from "../../components/MotionWrapper";

const PrestasiSection = ({ organisasi, prestasi, imageURL }) => {
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

        return () => window.removeEventListener('resize', handleResize);
    }, [prestasi]);

    const getSwiperHeight = () => {
        if (windowWidth < 768) {
            return 'auto';
        }
        return `${tableHeight / 2 - 32}px`;
    };

    const isMobileOrTablet = windowWidth < 1024;
    const displayedPrestasi = isMobileOrTablet ? prestasi.slice(0, 5) : prestasi;
    const organisasi1 = organisasi.slice(11, 15)
    const organisasi2 = organisasi.slice(15, 19)

    return (
        <MotionWrapper className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10 px-4 md:px-10 lg:px-12'}>
            <div className="text-center">
                <Title title={'Kegiatan dan Prestasi Mahasiswa'} />
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse md:justify-evenly items-center gap-4 md:gap-6 lg:gap-8">
                <div className="w-full lg:max-w-1/2 overflow-x-auto p-2 md:p-4 rounded-xl md:rounded-2xl lg:rounded-4xl bg-[#f0f0f0] border-2 border-[#fafafa]" ref={tableRef}>
                    <table className="text-xs md:text-sm lg:text-base min-w-full">
                        <thead>
                            <tr className="text-gray-700">
                                <th className="text-lg md:text-xl py-3 px-5 text-left">Prestasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedPrestasi.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50 border-t border-gray-200">
                                    <td className="text-xs md:text-sm py-3 px-5">{item.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 md:mt-0 p-4">
                        <Button text={'Selengkapnya'} bgColor={'bg-primary'} textColor={'text-black'} onClick={() => window.location.href = '/prestasi'} paddingMobile="px-4 py-4" />
                    </div>
                </div>

                <div className="hidden lg:flex w-full h-full lg:max-w-1/2 flex-col items-center justify-center gap-4 mt-4 md:mt-0" style={{ height: windowWidth >= 768 ? tableHeight : 'auto' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView="auto"
                        loop={true}
                        style={{ height: getSwiperHeight() }}
                        className="w-full"
                    >
                        {organisasi1.map((item, index) => (
                            <SwiperSlide
                                key={item.id}
                                className={index % 2 === 0 ? '!w-[65%]' : '!w-[35%]'}
                                style={{ width: index % 2 === 0 ? '65%' : '35%' }}
                            >
                                <div className={`relative w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden`}>
                                    <img
                                        src={`${imageURL}/organisasi/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-[25vh] lg:h-full object-cover object-top"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#D3C61D]/100 via-[#C5B91B40]/25 to-transparent flex items-end p-4">
                                        <h3 className="text-white text-sm md:text-base font-bold line-clamp-3 md:line-clamp-5">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={16}
                        slidesPerView="auto"
                        loop={true}
                        style={{ height: getSwiperHeight() }}
                        className="w-full"
                    >
                        {organisasi2.map((item, index) => (
                            <SwiperSlide key={item.id}
                                className={index % 2 === 0 ? '!w-[35%]' : '!w-[65%]'}
                                style={{ width: index % 2 === 0 ? '35%' : '65%' }}
                            >
                                <div className="relative w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden">
                                    <img
                                        src={`${imageURL}/organisasi/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-[25vh] lg:h-full object-cover object-top"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#D3C61D]/100 via-[#C5B91B40]/25 to-transparent flex items-end p-4">
                                        <h3 className="text-white text-sm md:text-base font-bold line-clamp-3 md:line-clamp-5">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="w-full block lg:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1.3}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        className="w-full"
                    >
                        {organisasi2.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={`w-full relative h-full rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden`}>
                                    <img
                                        src={`${imageURL}/organisasi/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-[25vh] md:h-[35vh] lg:h-full rounded-xl md:rounded-2xl lg:rounded-4xl object-cover object-top"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#D3C61D]/100 via-[#C5B91B40]/25 to-transparent flex items-end p-4">
                                        <h3 className="text-white text-sm md:text-base font-bold line-clamp-3 md:line-clamp-5">
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