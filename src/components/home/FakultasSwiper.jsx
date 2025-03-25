import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FakultasCardMobile from '../FacultasCardMobile';
import CustomPagination from '../CustomPagination';
import { useState, useRef } from 'react';

const FakultasSwiper = ({ faculties = [], faculties2 = [], faculties3 = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const allFaculties = [...faculties, ...faculties2, ...faculties3];
  const facultyGroups = [faculties, faculties2, faculties3];
  
  if (allFaculties.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center px-8">
        <div className="text-center text-gray-500">
          Data fakultas tidak tersedia
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="w-full lg:hidden px-4 py-4 space-y-4">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {facultyGroups.map((facultyGroup, groupIndex) => (
          <SwiperSlide key={`slide-${groupIndex}`}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={`slide-content-${groupIndex}`}
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {facultyGroup.map((faculty, index) => (
                  <FakultasCardMobile 
                    key={`group${groupIndex + 1}-${faculty.slug}-${index}`} 
                    faculty={faculty}
                    index={index}
                    isVisible={activeSlide === groupIndex}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>

      <CustomPagination 
        activeIndex={activeSlide}
        totalSlides={facultyGroups.length}
        onPaginationClick={handlePaginationClick}
        width="w-2 h-2"
        heightHover="hover:h-4 hover:w-4"
        borderColor="border-text"
        bgColor="bg-text"
        scale="w-7 h-2"
      />
    </div>
  );
};

export default FakultasSwiper;