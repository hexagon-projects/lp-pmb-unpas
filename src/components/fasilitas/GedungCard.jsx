import { ArrowUpRight } from "lucide-react";

const GedungCard = ({ title, text, mapUrl, image, imagedb, index }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const displayImage = image || `${imageURL}/fakultas/${imagedb}`;

    return (
        <div
            className="h-full bg-[#f0f0f0] shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl p-4 lg:p-8 space-y-3 relative cursor-pointer flex flex-col justify-between items-stretch"
            onClick={() => window.open(mapUrl, "_blank")}
        >
            <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
            <p className="text-xs md:text-sm">{text}</p>
            <div className="relative h-40 md:h-[40vh] rounded-lg md:rounded-2xl">
                <img
                    src={displayImage}
                    alt={title}
                    className="w-full h-full rounded-lg md:rounded-2xl object-cover"
                    loading="lazy"
                />
                <div
                    className="absolute bg-white bottom-2 right-2 p-2 rounded-lg cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(mapUrl, "_blank");
                    }}
                >
                    <ArrowUpRight size={24} className="text-text" />
                </div>
            </div>
        </div>
    );
};

export default GedungCard;
