import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import RichText from "../../components/RichText";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const TestimonialSection = ({ data, displayDekstop = 'md:flex-row' }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    
    useEffect(() => {
        let index = 0;
        setTypedText(""); // Reset teks sebelum mengetik ulang
        
        const text = data[activeIndex].description;
    // Pastikan text adalah string
    const content = text.toString();
    
    const typingEffect = setInterval(() => {
        if (index < content.length) {
            setTypedText((prev) => prev + content[index]);
            index++;
        } else {
            clearInterval(typingEffect);
        }
    }, 5); // Memperlambat kecepatan mengetik agar lebih terlihat

    return () => clearInterval(typingEffect);
}, [activeIndex, data]);

    return (
        <div className={`w-full flex flex-col ${displayDekstop} gap-4 md:gap-6 lg:gap-10`}>
            <div className="w-full text-center space-y-2 md:space-y-3 p-4 md:px-10 lg:px-12">
                <div className="text-left">
                    <Title title={'Testimoni'} />
                </div>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%]">
                    <Swiper
                        modules={[Navigation, Pagination, EffectCreative]}
                        spaceBetween={20}
                        slidesPerView={1}
                        effect={'creative'}
                        creativeEffect={{
                            prev: { opacity: 0, translate: [0, 0, -100] },
                            next: { opacity: 0, translate: [0, 0, -100] },
                        }}
                        speed={1200}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-lg"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-[80%] md:w-[50%] lg:w-[40%] h-[40vh] rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden"
                                        >
                                            <img src={`${imageURL}/testimonies/${item.image}`} alt={item.name} className="w-full h-full object-cover" />
                                        </motion.div>

                                        <div className="w-full md:w-1/2 lg:w-[60%] h-[25vh] md:h-[40vh] flex flex-col justify-between items-start gap-4 md:gap-6 lg:gap-8">
                                            <div className="w-full h-full flex flex-col justify-evenly md:justify-start items-start gap-4 md:gap-6 lg:gap-8">
                                                <div className="space-y-2">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -50 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <Title sizeText="text-sm md:text-lg lg:text-[18px]" title={item.name} />
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -50 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <Text color="text-gray-500" text={item.title} />
                                                    </motion.div>
                                                </div>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0, y: -50 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <RichText lineclamp={"line-clamp-3"} content={typedText} />
                                                </motion.div>
                                            </div>

                                            <div className="w-full flex justify-center md:justify-start gap-4">
                                                <div
                                                    className="cursor-pointer text-black/80 text-3xl lg:text-4xl"
                                                    onClick={() => swiperRef.current?.slidePrev()}
                                                >
                                                    <IoArrowBackCircleOutline />
                                                </div>
                                                <div
                                                    className="z-10 cursor-pointer text-black/80 text-3xl lg:text-4xl"
                                                    onClick={() => swiperRef.current?.slideNext()}
                                                >
                                                    <IoArrowForwardCircleOutline />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
