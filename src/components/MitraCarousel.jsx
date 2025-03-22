import React from "react";

const MitraCarousel = ({ datas }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const repeatedData = Array.from({ length: 10 }).flatMap(() => datas);

    return (
        <div className="w-full overflow-hidden relative">
            <div className="flex animate-marquee">
                {repeatedData.map((data, index) => (
                    <img
                        key={index}
                        src={`${imageURL}/partners/${data.image}`}
                        alt={data.name}
                        className="w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 object-contain mx-4"
                    />
                ))}
            </div>
        </div>
    );
};

export default MitraCarousel;