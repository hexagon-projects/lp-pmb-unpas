<<<<<<< HEAD
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
=======
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
import { useState } from "react";
import Slider from "react-slick";
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FasilitasSlider = ({ title, facilities }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const [selectedFacility, setSelectedFacility] = useState(facilities.length > 0 ? facilities[0] : null);
<<<<<<< HEAD
    const [direction, setDirection] = useState(1); // 1 untuk kanan, -1 untuk kiri

    const handleFacilityChange = (newFacility) => {
        if (newFacility.title !== selectedFacility.title) {
            setDirection(facilities.indexOf(newFacility) > facilities.indexOf(selectedFacility) ? 1 : -1);
            setSelectedFacility(newFacility);
        }
    };
=======
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi

    const settings = {
        dots: false,
        infinite: true,
<<<<<<< HEAD
        speed: 600, // Kecepatan transisi lebih smooth
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false, // Matikan fade agar transisi tetap geser
=======
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <MotionWrapper type={'zoomIn'} delay={0.2}>
=======
        <div>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
        <div>
>>>>>>> 8bbe4dc (First Commit)
=======
        <div>
>>>>>>> origin/Budi
            <div className="text-center space-y-3 md:space-y-4">
                <Title title={title} />
                {selectedFacility && (
                    <div className="relative h-96 lg:h-[80vh] rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden">
<<<<<<< HEAD
                        <motion.div
                            key={selectedFacility.image}
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${imageURL}/facilities/${selectedFacility.image})` }}
                            initial={{ opacity: 0, x: direction * 50 }} // Mulai dari opacity 0 & geser sedikit
                            animate={{ opacity: 1, x: 0 }} // Muncul secara halus
                            exit={{ opacity: 0, x: direction * -50 }} // Hilang dengan efek geser ke arah yang berlawanan
                            transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
=======
                        <div
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${imageURL}/facilities/${selectedFacility.image})` }}
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                <div className="max-w-[50px] md:max-w-sm lg:max-w-lg text-white text-left space-y-2 z-10">
                                    <h3 className="text-xl font-bold">{selectedFacility.title}</h3>
                                </div>
                            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            <div className="absolute bottom-4 right-4 w-full max-w-[120px] md:max-w-[240px] lg:max-w-lg mx-auto z-20">
                                <Slider {...settings}>
                                    {facilities.map((facility, index) => (
                                        <div key={index} onClick={() => setSelectedFacility(facility)} className="cursor-pointer">
                                            <img
                                                src={`${imageURL}/facilities/${facility.image}`}
                                                alt={facility.title}
                                                className={`w-24 h-30 md:h-30 lg:h-40 object-cover rounded-lg md:rounded-2xl lg:rounded-4xl transition-transform ${
=======
                            <div className="border border-transparent absolute bottom-4 right-4 w-full max-w-[120px] md:max-w-[240px] lg:max-w-lg z-20">
                                <Slider {...settings}>
                                    {facilities.map((facility, index) => (
=======
                            <div className="border border-transparent absolute bottom-4 right-4 w-full max-w-[120px] md:max-w-[240px] lg:max-w-lg z-20">
                                <Slider {...settings}>
                                    {facilities.map((facility, index) => (
<<<<<<< HEAD
>>>>>>> origin/Budi
                                        <div key={index} onClick={() => handleFacilityChange(facility)} className="justify-center items-center cursor-pointer">
                                            <img
                                                src={`${imageURL}/facilities/${facility.image}`}
                                                alt={facility.title}
                                                className={`w-24 lg:w-28 h-30 md:h-30 lg:h-32 p-2 object-cover rounded-lg transition-transform ${
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                            <div className="border border-transparent absolute bottom-4 right-4 w-full max-w-[120px] md:max-w-[240px] lg:max-w-lg z-20">
                                <Slider {...settings}>
                                    {facilities.map((facility, index) => (
=======
=======
>>>>>>> origin/Budi
                                        <div key={index} onClick={() => setSelectedFacility(facility)} className="justify-center items-center cursor-pointer">
                                            <img
                                                src={`${imageURL}/facilities/${facility.image}`}
                                                alt={facility.title}
                                                className={`w-24 lg:w-28 h-30 md:h-30 lg:h-50 p-2 object-cover rounded-lg transition-transform ${
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                                                    selectedFacility.title === facility.title ? 'ring-2 ring-white' : 'hover:ring-1 hover:ring-white'
                                                }`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
<<<<<<< HEAD
                        </motion.div>
<<<<<<< HEAD
                    </div>
                )}
            </div>
<<<<<<< HEAD
        </MotionWrapper>
=======
        </div>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                        </div>
=======
=======
                        </div>
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                    </div>
                )}
            </div>
        </div>
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
    );
};

export default FasilitasSlider;
