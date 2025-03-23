import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import CustomPagination from "./CustomPagination";
import TestimonialCard from "./testimoni/TestimonialCard";

const TestimonialSlider = ({ data, bgColor, textColor, cssBox, cssContainer, iconVisibililty, borderColor, bgColorPagination }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const [displayedText, setDisplayedText] = useState("");
    const swiperRef = useRef(null);
    const fullText = data[activeIndex]?.testimonial || "";

    // Efek mengetik saat slide berubah
    useEffect(() => {
        let index = 0;
        setDisplayedText(""); // Reset teks saat slide berubah

        const typingEffect = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(typingEffect);
            }
        }, 30); // Kecepatan mengetik

        return () => clearInterval(typingEffect);
    }, [activeIndex]);

    const handlePaginationClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    const calculateVisibleSlides = () => {
        if (swiperInstance?.params) {
            const roundedSlidesPerView = Math.floor(swiperInstance.params.slidesPerView);
            setVisibleSlides(roundedSlidesPerView);
        }
    };

    useEffect(() => {
        if (swiperInstance) {
            calculateVisibleSlides();
            swiperInstance.on("slidesPerViewChange", calculateVisibleSlides);
        }

        return () => {
            swiperInstance?.off("slidesPerViewChange", calculateVisibleSlides);
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
                    768: { slidesPerView: 2.6 },
                    1024: { slidesPerView: 3.6 },
                    1440: { slidesPerView: 3.6 },
                }}
                ref={swiperRef}
            >
                {data.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id} className="w-full px-2 md:px-3 lg:px-4 pb-5">
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }} // Geser ke atas saat menghilang
                            transition={{ duration: 0.5 }}
                        >
                            <TestimonialCard 
                                {...testimonial} 
                                bgColor={bgColor} 
                                textColor={textColor} 
                                lineclamp={'line-clamp-3'} 
                                titleLineClamp={'line-clamp-2'} 
                                height="h-[30vh] md:h-[28vh] lg:h-[32vh]" 
                                justify="justify-evenly"
                                textContent={activeIndex === index ? displayedText : ""}
                            />
                        </motion.div>
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
