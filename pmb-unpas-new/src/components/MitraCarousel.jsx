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
                    <div className="px-8 py-6 border-2 border-gray-200 rounded-xl md:rounded-2xl lg:rounded-4xl mx-4 bg-[#f3f4f4]">
                    <img
                        key={index}
                        src={`${imageURL}/partners/${data.image}`}
                        alt={data.name}
                        className="w-8 h-8 md:w-12 md:h-12 lg:w-18 lg:h-18 object-contain mx-4"
                    />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MitraCarousel;
