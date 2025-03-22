import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import CustomPagination from "./CustomPagination";

const TestimonialSlider = ({ data, bgColor, textColor, cssBox, cssContainer, iconVisibililty, borderColor, bgColorPagination }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const swiperRef = useRef(null);

    const handlePaginationClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    const calculateVisibleSlides = () => {
        if (swiperInstance && swiperInstance.params) {
            const currentSlidesPerView = swiperInstance.params.slidesPerView;
            const roundedSlidesPerView = Math.floor(currentSlidesPerView);
            setVisibleSlides(roundedSlidesPerView);
        }
    };

    useEffect(() => {
        if (swiperInstance) {
            calculateVisibleSlides();
            swiperInstance.on("slidesPerViewChange", calculateVisibleSlides);
        }

        return () => {
            if (swiperInstance) {
                swiperInstance.off("slidesPerViewChange", calculateVisibleSlides);
            }
        };
    }, [swiperInstance]);

    return (
        <div className="w-full mx-auto overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={1.3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                navigation={false}
                effect="fade"
                speed={800}
                breakpoints={{
                    768: { slidesPerView: 1.6 },
                    1024: { slidesPerView: 1.6 },
                    1440: { slidesPerView: 2.6 },
                }}
                ref={swiperRef}
            >
                {data.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="w-full px-2 md:px-3 lg:px-4 pb-5">
                        <TestimonialCard {...testimonial} bgColor={bgColor} textColor={textColor} cssBox={cssBox} cssContainer={cssContainer} iconVisibililty={iconVisibililty} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <CustomPagination
                activeIndex={activeIndex}
                totalSlides={Math.ceil(data.length / visibleSlides)}
                onPaginationClick={handlePaginationClick}
                width="w-3 h-3"
                scale="w-7 h-3"
                borderColor={borderColor}
                bgColor={bgColorPagination}
            />
        </div>
    );
};

export default TestimonialSlider;