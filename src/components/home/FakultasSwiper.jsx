<<<<<<< HEAD
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
=======
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Text from "../Text";
import CustomPagination from "../CustomPagination";

const FakultasSwiper = ({ faculties }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);
    const slideRefs = useRef([]);
    const swiperInstance = useRef(null);

    useEffect(() => {
        if (slideRefs.current.length > 0) {
            const heights = slideRefs.current.map((ref) => ref?.offsetHeight || 0);
            setMaxHeight(Math.max(...heights));
        }
    }, [faculties]);

    const handlePaginationClick = (index) => {
        if (swiperInstance.current) {
            swiperInstance.current.slideTo(index);
        }
    };

    return (
        <div className="lg:hidden h-full">
            <Swiper
                slidesPerView={1.5}
                spaceBetween={-30}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperInstance.current = swiper)}
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
            >
                {faculties.map((faculty, index) => (
                    <SwiperSlide key={index} className="w-full flex justify-start items-start pb-10 md:pb-0">
                        <div
<<<<<<< HEAD
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
=======
                            ref={(el) => (slideRefs.current[index] = el)}
                            className={`grid grid-rows-[auto_1fr] space-y-4 p-4 rounded-2xl md:rounded-2xl lg:rounded-4xl transition-all duration-500 ease-in-out ${index === activeIndex
                                ? `w-[100%] bg-primary/30 border-2 border-white hover:shadow-[0px_10px_20px_rgba(0,0,0,0.5)] hover:shadow-primary/30 scale-100`
                                : `w-[100%] bg-primary/30 border-2 border-white hover:shadow-[0px_10px_20px_rgba(0,0,0,0.5)] hover:shadow-primary/30 text-gray-800 scale-75`
                                }`}
                            style={{ minHeight: maxHeight || "300px" }}
                        >
                            <Text sizeMobile="text-sm" weight="font-semibold" text={faculty.name} />
                            <div className="flex-grow p-2 rounded-lg space-y-2">
                                {faculty.programs.map((program, idx) => (
                                    <Text key={idx} text={program} color="bg-gray-100 border-2 border-white rounded-2xl p-4" />
                                ))}
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
<<<<<<< HEAD
=======

            <CustomPagination
                activeIndex={activeIndex}
                totalSlides={faculties.length}
                onPaginationClick={handlePaginationClick}
                width="w-3 h-3"
                scale="w-7 h-3"
            />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
        </div>
    );
};

<<<<<<< HEAD
export default FakultasSwiper;
=======
export default FakultasSwiper;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
