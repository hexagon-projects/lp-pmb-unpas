import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FasilitasSlider = ({ title, facilities }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const [selectedFacility, setSelectedFacility] = useState(facilities.length > 0 ? facilities[0] : null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div>
            <div className="text-center space-y-3 md:space-y-4">
                <Title title={title} />
                {selectedFacility && (
                    <div className="relative h-96 lg:h-[80vh] rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden">
                        <div
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${imageURL}/facilities/${selectedFacility.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                <div className="max-w-[50px] md:max-w-sm lg:max-w-lg text-white text-left space-y-2 z-10">
                                    <h3 className="text-xl font-bold">{selectedFacility.title}</h3>
                                </div>
                            </div>
                            <div className="border border-transparent absolute bottom-4 right-4 w-full max-w-[120px] md:max-w-[240px] lg:max-w-lg z-20">
                                <Slider {...settings}>
                                    {facilities.map((facility, index) => (
                                        <div key={index} onClick={() => setSelectedFacility(facility)} className="justify-center items-center cursor-pointer">
                                            <img
                                                src={`${imageURL}/facilities/${facility.image}`}
                                                alt={facility.title}
                                                className={`w-24 lg:w-28 h-24 md:h-24 lg:h-42 object-cover rounded-xl md:rounded-xl lg:rounded-2xl transition-transform ${
                                                    selectedFacility.title === facility.title ? 'ring-1 ring-white' : 'hover:ring-1 hover:ring-white'
                                                }`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FasilitasSlider;
