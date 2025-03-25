import { useRef, useState, useEffect, useCallback, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import RichText from "../../components/RichText";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const TestimonialSection = ({ data = [], displayDekstop = 'md:flex-row' }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [typedText, setTypedText] = useState("");

    const goPrev = useCallback(() => {
        swiperRef.current?.slidePrev();
    }, []);

    const goNext = useCallback(() => {
        swiperRef.current?.slideNext();
    }, []);

    useEffect(() => {
        let index = 0;
        let typingEffect;
        const currentItem = data[activeIndex];
        
        if (currentItem?.description) {
            const content = currentItem.description.toString();
            setTypedText("");

            typingEffect = setInterval(() => {
                if (index < content.length) {
                    setTypedText(prev => prev + content[index]);
                    index++;
                } else {
                    clearInterval(typingEffect);
                }
            }, 10);
        }

        return () => {
            if (typingEffect) clearInterval(typingEffect);
        };
    }, [activeIndex, data]);

    const renderSlide = useCallback((item, index) => (
        <SwiperSlide key={`${item.id || index}`}>
            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeIndex} 
                    className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-lg"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-[80%] md:w-[50%] lg:w-[40%] min-h-[300px] rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden"
                    >
                        <img 
                            src={`${imageURL}/testimonies/${item.image}`} 
                            alt={item.name} 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                        />
                    </motion.div>

                    <div className="w-full md:w-1/2 lg:w-[60%] min-h-[200px] flex flex-col justify-between items-start gap-4 md:gap-6 lg:gap-8">
                        <div className="w-full flex flex-col justify-evenly md:justify-start items-start gap-4 md:gap-6 lg:gap-8">
                            <div className="w-full space-y-2 text-center md:text-left">
                                <Title sizeText="text-sm md:text-lg lg:text-[18px]" title={item.name} />
                                <Text color="text-gray-500" text={item.title} />
                            </div>
                            <div className="min-h-[100px]">
                                <RichText content={typedText}/>
                            </div>
                        </div>

                        <div className="w-full flex justify-center md:justify-start gap-4 mt-4">
                            <div className="cursor-pointer text-black/80 text-3xl lg:text-4xl" onClick={goPrev}>
                                <IoArrowBackCircleOutline />
                            </div>
                            <div className="cursor-pointer text-black/80 text-3xl lg:text-4xl" onClick={goNext}>
                                <IoArrowForwardCircleOutline />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </SwiperSlide>
    ), [activeIndex, typedText, imageURL, goPrev, goNext]);

    return (
        <div className={`w-full flex flex-col ${displayDekstop} gap-4 md:gap-6 lg:gap-10`}>
            <div className="w-full text-center space-y-2 md:space-y-3 p-4 md:px-10 lg:px-12">
                <div className="text-center">
                    <Title title={'Testimoni'} />
                </div>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%]">
                    <Swiper
                        modules={[Navigation, EffectCreative]}
                        spaceBetween={20}
                        slidesPerView={1}
                        effect={'creative'}
                        creativeEffect={{
                            prev: { opacity: 0, translate: [0, 0, -100] },
                            next: { opacity: 0, translate: [0, 0, -100] },
                        }}
                        speed={800}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {data.map(renderSlide)}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default memo(TestimonialSection);