import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import CustomPagination from "./CustomPagination";
import TestimonialCard from "./testimoni/TestimonialCard";
import RichText from "./RichText";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TestimonialSlider = ({
  data,
  bgColor,
  textColor,
  cssBox,
  cssContainer,
  iconVisibililty,
  borderColor,
  bgColorPagination,
}) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [displayedText, setDisplayedText] = useState("");
  const swiperRef = useRef(null);
  const fullText = data[activeIndex]?.testimonial || "";
  const imageURL = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const typingEffect = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 30);

    return () => clearInterval(typingEffect);
  }, [activeIndex]);

  const handlePaginationClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const calculateVisibleSlides = () => {
    if (swiperInstance?.params) {
      const roundedSlidesPerView = Math.floor(
        swiperInstance.params.slidesPerView
      );
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
    <div className="px-8 md:px-0 md:w-4/5 mx-auto overflow-hidden md:flex md:items-center md:gap-10">
      <IoIosArrowBack
        size={"40px"}
        className="hidden md:block cursor-pointer"
        onClick={() => {
          setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
        }}
      />
      <div className="md:flex md:flex-row-reverse md:gap-2 md:w-4/5">
        <div
          className="w-1/2 md:w-3/10 h-[250px] md:h-[300px] rounded-lg mx-auto relative grid content-end pb-2 px-3"
          style={{
            backgroundImage: `url(${imageURL}/testimonies/${data[activeIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
          <div className="text-white z-10">
            <div className="text-xs font-bold mb-1">
              {data[activeIndex].name}
            </div>
            <div className="text-xs font-semibold text-gray-400">
              {data[activeIndex].title}
            </div>
          </div>
        </div>
        <div className="mt-3 md:flex md:flex-col md:justify-between">
          <div>
            <img src="/src/assets/icon/quote.svg" alt="" className="md:w-8" />
            <RichText
              content={data[activeIndex].description}
              sizeText="text-sm md:text-base"
              weight="font-medium"
            />
          </div>
          <motion.button
            className={` flex gap-2 cursor-pointer items-center text-xs md:text-sm lg:text-sm font-bold shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] transition duration-500 bg-[#FEF251] hover:border-3 hover:border-white/50 rounded-lg md:rounded-xl lg:rounded-2xl border-3 border-transparent px-5 py-4 md:px-5 md:py-4 hover:shadow-black/5 w-fit`}
            onClick={() => {
              navigate(`/testimoni}`);
            }}
            whileTap={{ scale: 0.95 }}
          >
            Selengkapnya
            <motion.span>
              <FaArrowRightLong size={"20px"} className="-rotate-45" />
            </motion.span>
          </motion.button>
        </div>
      </div>
      <IoIosArrowForward
        size={"40px"}
        className="hidden md:block cursor-pointer"
        onClick={() => {
          setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }}
      />

      <div className="flex justify-center gap-0 mt-4 md:hidden">
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
          }
          className="px-2 py-2 text-[#444444]"
        >
          <IoArrowBackCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
        </button>

        <button
          onClick={() =>
            setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
          }
          className="px-2 py-2 text-[#444444]"
        >
          <IoArrowForwardCircleOutline className="text-4xl md:text-5xl cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;