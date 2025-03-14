import React from "react";

const MitraCarousel = ({ datas }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const repeatedData = [...datas, ...datas];

    return (
        <div className="w-full overflow-hidden relative">
            <div className="flex items-center space-x-8 md:space-x-14 lg:space-x-20 animate-marquee">
                {repeatedData.map((data, index) => (
                    <img
                        key={index}
                        src={`${imageURL}/partners/${data.image}`}
                        alt={data.name}
                        className="w-24 h-24 object-contain"
                    />
                ))}
            </div>
        </div>
    );
};

export default MitraCarousel;
