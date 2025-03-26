import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Text from "../../components/Text";
import Title from "../../components/Title";
import Button from "../../components/Button";
import SelengkapnyaButton from "../../components/SelengkapnyaButton";
import Section1 from "../../assets/gedung.jpeg";
import CustomPagination from "../../components/CustomPagination";
import { useEffect, useRef, useState } from "react";

const dummyImages = [
    { image: Section1 },
    { image: Section1 },
    { image: Section1 },
    { image: Section1 }
];

const PendaftaranSection = ({ title, subtitle, jalurPendaftaran }) => {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePaginationClick = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    const handleClickJalur = () => {
        navigate('/jalur');
    };

    return (
        <div className="w-full flex justify-center items-center bg-transparent">
            <div className="w-full md:w-full flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:p-10 lg:p-12">
                <div className="text-center space-y-2">
                    <Text sizeText="text-base md:text-lg lg:text-2xl" text={title} color="text-text" weight={'font-bold'} />
                    <Title title={subtitle} />
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10">
                    <div className="w-full lg:w-[35%] jalur-swiper-blur-mask">
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            slidesPerView={1.3}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            direction="horizontal"
                            breakpoints={{
                                640: {
                                    spaceBetween: 20,
                                },
                                1024: {
                                    spaceBetween: 30,
                                },
                                1440: {
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            {dummyImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="rounded-xl md:rounded-2xl lg:rounded-4xl pb-5">
                                        <img
                                            loading="lazy"
                                            src={item.image}
                                            alt="Section"
                                            className="w-full h-[40vh] lg:h-[50vh] object-cover rounded-xl md:rounded-2xl lg:rounded-4xl"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <CustomPagination
                            activeIndex={activeIndex}
                            totalSlides={dummyImages.length}
                            onPaginationClick={handlePaginationClick}
                            width="w-2 h-2"
                            scale="w-7 h-2"
                        />
                    </div>
                    <div className="w-full lg:w-[60%] space-y-3 md:space-y-4 flex flex-col items-start md:items-start pt-4 md:pt-0">
                        {jalurPendaftaran.map((jalur, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-[#F3F4F4] w-full h-full p-4 md:p-6 lg:p-8 border-1 border-white shadow-primary/10 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] flex gap-4 rounded-xl md:rounded-2xl lg:rounded-4xl cursor-pointer items-center"
                            >
                                <div className="hidden lg:block p-3 rounded-full shadow-xl shadow-text/10 shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)]">
                                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-text" />
                                </div>
                                <div className="w-full h-full flex flex-row justify-around md:justify-between items-center gap-4">
                                    <div className="w-[70%] md:w-full flex flex-col justify-evenly gap-2">
                                        <Title sizeText="text-sm md:text-base lg:text-lg" title={jalur.name} fontWeight="font-semibold" />
                                        <div>
                                            <Text sizeMobile="text-xs md:text-xs" text={`Jadwal Pendaftaran: ${formatDate(jalur.start_date)}`} />
                                            <Text sizeMobile="text-xs md:text-xs" text={`Pendaftaran ditutup: ${formatDate(jalur.end_date)}`} />
                                        </div>
                                    </div>
                                    <div className="w-fit lg:w-1/2">
                                        <div className="w-full flex justify-end">
                                            <Button rounded={'rounded-xl md:rounded-2xl lg:rounded-2xl'} hoverBgColor={'hover:border-3 hover:border-white/50'} text={isMobile ? 'Daftar' : 'Daftar Sekarang'} bgColor="bg-primary" hoverColor={''} onClick={() => (handleClick(jalur.link))} padding="p-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <SelengkapnyaButton onClick={handleClickJalur} />
                    </div>
                </div>
            </div>
        </div>
    );
};

<<<<<<< Updated upstream
export default PendaftaranSection;
=======

export default memo(PendaftaranSection);
>>>>>>> Stashed changes
