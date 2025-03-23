import React from "react";

const MitraCarousel = ({ datas }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

<<<<<<< HEAD
    const repeatedData = [...datas, ...datas];

    return (
        <div className="w-full overflow-hidden relative">
            <div className="flex items-center space-x-8 md:space-x-14 lg:space-x-20 animate-marquee">
=======
    const repeatedData = Array.from({ length: 10 }).flatMap(() => datas);

    return (
        <div className="w-full overflow-hidden relative">
            <div className="flex animate-marquee">
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
                {repeatedData.map((data, index) => (
                    <img
                        key={index}
                        src={`${imageURL}/partners/${data.image}`}
                        alt={data.name}
<<<<<<< HEAD
                        className="w-24 h-24 object-contain"
=======
                        className="w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 object-contain mx-4"
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
                    />
                ))}
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default MitraCarousel;
=======
export default MitraCarousel;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
