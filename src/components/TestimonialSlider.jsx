import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ data, bgColor, textColor }) => {
  return (
    <div className="w-full mx-auto overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.3}
        lazy={{ loadPrevNext: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 1.6 },
          1024: { slidesPerView: 2.6 },
        }}
      >
        {data.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="w-full px-2 md:px-3 lg:px-4 pb-10">
            <TestimonialCard {...testimonial} bgColor={bgColor} textColor={textColor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;