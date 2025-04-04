import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Title from "../Title";
import Text from "../Text";

const FasilitasSlider = ({ title, facilities }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [selectedFacility, setSelectedFacility] = useState(facilities.length > 0 ? facilities[0] : null);
    const swiperRef = useRef(null);

    return (
        <div className="w-full flex justify-center items-center relative">
            <div className="w-full md:w-[90%] lg:w-[90%] flex flex-col justify-center text-center space-y-3 md:space-y-4 bg-[#F0F0F0] p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-4xl">
                <Title title={title} fontWeight="lg:hidden"/>
                {selectedFacility && (
                    <div className="flex flex-col lg:flex-row-reverse space-y-3 md:space-y-4 gap-4 md:gap-6 lg:gap-8">
                        <div className="lg:w-1/2 text-black text-center md:text-left space-y-2 z-10">
                            <h3 className="hidden lg:block text-xl font-bold text-black">
                                {selectedFacility.title}
                            </h3>
                            <Text text={'Fasilitas pendukung kami dirancang untuk memberikan kenyamanan, kemudahan, dan efisiensi dalam setiap aktivitas Mahasiswa'}/>
                        </div>
                        <div className="lg:w-1/2 relative h-96 lg:h-[50vh] rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden">
                            <div
                                className="h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${imageURL}/facilities/${selectedFacility.image})` }}
                            >
                            </div>
                        </div>
                    </div>
                )}
                <div className="w-full flex justify-center items-center bg-[#F3F4F4] p-4 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl relative">
                    <button 
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors -translate-x-1/2"
                    >
                        <FiChevronLeft className="text-2xl text-gray-700" />
                    </button>
                    
                    <div className="w-full">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={4}
                            onSwiper={(swiper) => swiperRef.current = swiper}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },
                                480: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 25
                                }
                            }}
                        >
                            {facilities.map((facility, index) => (
                                <SwiperSlide key={index}>
                                    <div 
                                        onClick={() => setSelectedFacility(facility)} 
                                        className="flex flex-col items-center cursor-pointer space-y-3 md:space-y-4 px-2"
                                    >
                                        <img
                                            src={`${imageURL}/facilities/${facility.image}`}
                                            alt={facility.title}
                                            className={`w-full h-24 md:h-24 lg:h-42 object-cover rounded-xl md:rounded-xl lg:rounded-2xl transition-transform ${
                                                selectedFacility.title === facility.title 
                                                    ? 'ring-2 ring-primary scale-105' 
                                                    : 'hover:ring-1 hover:ring-gray-300'
                                            }`}
                                            loading="lazy"
                                        />
                                        <Text 
                                            weight={'font-semibold'} 
                                            text={facility.title}
                                            className={selectedFacility.title === facility.title ? 'text-red-600' : ''}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button 
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors translate-x-1/2"
                    >
                        <FiChevronRight className="text-2xl text-gray-700" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FasilitasSlider;