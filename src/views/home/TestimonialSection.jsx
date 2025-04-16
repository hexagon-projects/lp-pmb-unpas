import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

import Text from "../../components/Text";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ArrowUpRight } from "lucide-react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Koma from '../../assets/koma.svg';
import AnimatedTitle from "../../components/AnimatedTitle";
import ButtonHover from "../../components/ButtonHover";
import { useNavigate } from "react-router-dom";

const TestimonialSection = ({ data, displayDekstop = 'md:flex-row', visibilityTitle = 'block' }) => {
  const navigate = useNavigate();
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const swiperRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigation = (direction) => {
    if (isTransitioning || !swiperRef.current) return;

    setIsTransitioning(true);

    if (direction === 'prev') {
      swiperRef.current.slidePrev();
    } else {
      swiperRef.current.slideNext();
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1100);
  };

  return (
    <div className={`w-full flex flex-col ${displayDekstop} pt-4 md:pt-0 gap-4 md:gap-6 lg:gap-10`}>
      <div className={`text-center ${visibilityTitle}`}>
        <AnimatedTitle text={'Testimoni'} />
      </div>

      <div className="w-full flex justify-center items-center relative">
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[80%] relative">
          <Swiper
            modules={[EffectFade]}
            spaceBetween={20}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
            loop={data?.length > 3}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChangeTransitionStart={() => setIsTransitioning(true)}
            onSlideChangeTransitionEnd={() => setIsTransitioning(false)}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
                  <div className="w-[60%] md:w-[50%] lg:w-[40%] rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden relative">
                    <div className="w-full h-[30vh] lg:h-[50vh]">
                      <img
                        src={`${imageURL}/testimonies/${item.image}`}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="w-full text-center md:text-left absolute bottom-2 left-0 md:bottom-4 md:left-4 overflow-auto">
                      <Title color="text-white" sizeText="text-sm md:text-lg lg:text-[18px]" title={item.name} />
                      <Text color="text-white" text={item.title} weight={'font-light'} />
                    </div>
                  </div>

                  <div className="w-[85%] md:w-1/2 lg:w-[60%] flex flex-col justify-between items-start gap-4 md:gap-6 lg:gap-8">
                    <div className="w-full flex flex-col items-start gap-4 md:gap-6 lg:gap-8">
                      <img src={Koma} alt="" loading="lazy" />
                      <p className={`text-xs md:text-sm lg:text-sm text-gray-800 overflow-hidden leading-6 line-clamp-4 md:line-clamp-5 lg:line-clamp-6`} dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hidden md:block">
            <button
              className={`custom-swiper-prev absolute left-0 md:-left-10 top-1/2 z-50 -translate-y-1/2 p-2 cursor-pointer rounded-full transition-all hover:scale-110`}
              onClick={() => handleNavigation('prev')}
              aria-label="Previous testimonial"
            >
              <IoIosArrowBack size={36} className="text-gray-700 hover:text-text" />
            </button>
            <button
              className={`custom-swiper-next absolute right-0 md:-right-10 top-1/2 z-50 -translate-y-1/2 p-2 cursor-pointer rounded-full transition-all hover:scale-110`}
              onClick={() => handleNavigation('next')}
              aria-label="Next testimonial"
            >
              <IoIosArrowForward size={36} className="text-gray-700 hover:text-text" />
            </button>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-[85%] md:w-full px-3 md:px-6 lg:px-9 relative z-10 md:-mt-10 lg:-mt-16">
              <div className="w-fit">
                <ButtonHover icon={<ArrowUpRight />} iconStatus="visible" text={'Selengkapnya'} flex="flex flex-row" onClick={() => navigate('/testimoni')}/>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center md:hidden mt-2">
            <button
              onClick={() => handleNavigation('prev')}
              className={`p-2 cursor-pointer rounded-full transition-all hover:scale-110`}
              aria-label="Previous testimonial"
            >
              <IoArrowBackCircleOutline size={34} className="text-gray-700 hover:text-text" />
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className={`p-2 cursor-pointer rounded-full transition-all hover:scale-110 ml-2`}
              aria-label="Next testimonial"
            >
              <IoArrowForwardCircleOutline size={34} className="text-gray-700 hover:text-text" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;