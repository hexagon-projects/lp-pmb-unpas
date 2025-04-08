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
                    <div key={index} className="px-6 py-6 border-2 border-[#fafafa] rounded-4xl mx-2  bg-[#f0f0f0] hover:bg-gray-100 transition duration-500">
                        <img
                            key={index}
                            src={`${imageURL}/partners/${data.image}`}
                            alt={data.name}
                            className="w-14 h-14 md:w-16 md:h-16 lg:w-30 lg:h-30 object-contain mx-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MitraCarousel;
