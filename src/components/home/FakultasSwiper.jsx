import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Text from "../Text";

const FakultasSwiper = ({ faculties }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="md:hidden h-fit">
            <Swiper
                slidesPerView={1.5}
                spaceBetween={0}
                pagination={{ clickable: true }}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {faculties.map((faculty, index) => (
                    <SwiperSlide key={index} className="w-full flex justify-start items-start pb-10 md:pb-0">
                        <div
                            className={`space-y-4 p-4 h-fit rounded-lg md:rounded-2xl lg:rounded-4xl transition-all duration-300 ease-in-out ${
                                index === activeIndex
                                    ? `w-[100%] ${faculty.color} scale-100`
                                    : "w-[100%] bg-gray-100 text-gray-800 scale-75"
                            }`}
                        >
                            <Text sizeMobile="text-sm" weight="font-semibold" text={faculty.name} />
                            <div className="bg-white p-4 rounded-lg  space-y-2">
                            {faculty.programs.map((program, idx) => (
                                <Text key={idx} text={program} />
                            ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FakultasSwiper;
