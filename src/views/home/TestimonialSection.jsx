import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import Text from "../../components/Text";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ArrowUpRight } from "lucide-react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import Koma from '../../assets/koma.svg';

const TestimonialSection = ({ data, displayDekstop = 'md:flex-row' }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={`w-full flex flex-col ${displayDekstop} pt-4 md:pt-0 gap-4 md:gap-6 lg:gap-10`}>
      <div className="text-center">
        <Title title={'Testimoni'} />
      </div>

      <div className="w-full flex justify-center items-center relative">
        <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] relative">
          <Swiper
            modules={[Navigation, EffectFade]}
            spaceBetween={20}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
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
              ref={navigationPrevRef}
              className="absolute left-0 md:-left-10 top-1/2 z-10 -translate-y-1/2 p-2 cursor-pointer rounded-full transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              ref={navigationNextRef}
              className="absolute right-0 md:-right-10 top-1/2 z-10 -translate-y-1/2 p-2 cursor-pointer rounded-full transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="w-full flex justify-start md:justify-start ml-14 md:-mt-20 md:ml-6 xl:-mt-20 xl:ml-8 ">
            <Button icon={<ArrowUpRight />} iconStatus="visible" css={'flex-row-reverse'} text={'Selengkapnya'} bgColor={'bg-primary'} textColor={'text-black'} onClick={() => window.location.href = '/testimoni'} paddingMobile="px-4 py-2" paddingTablet="md:px-4 md:py-2" />
          </div>

          <div className="w-full flex justify-center items-center md:hidden mt-2">
            <button
              ref={navigationPrevRef}
              className="p-2 cursor-pointer rounded-full transition-all"
            >
              <IoArrowBackCircleOutline size={30}/>
            </button>
            <button
              ref={navigationNextRef}
              className="p-2 cursor-pointer rounded-full transition-all ml-2"
            >
              <IoArrowForwardCircleOutline size={30}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;