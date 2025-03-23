import React from "react";

const MitraCarousel = ({ datas, reverse = false }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const repeatedData = Array.from({ length: 100 }).flatMap(() => datas);

    return (
        <div className="w-full overflow-hidden relative group">
            <div
                className={`min-w-screen flex cursor-pointer ${reverse ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`} onClick={() => window.location.href = '/mitra'}
            >
                {repeatedData.map((data, index) => (
                    <div className="px-6 py-6 border-2 border-gray-200 rounded-lg md:rounded-xl lg:rounded-2xl mx-2  bg-[#f3f4f4] hover:bg-gray-200 transition duration-500">
                        <img
                            key={index}
                            src={`${imageURL}/partners/${data.image}`}
                            alt={data.name}
                            className="w-18 h-18 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain mx-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MitraCarousel;
