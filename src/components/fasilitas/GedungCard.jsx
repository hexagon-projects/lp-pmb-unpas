import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GedungCard = ({ title, text, mapUrl, image }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    // `${imageURL}/facilities/${image}`

    return (
        <div
            className="bg-gray-200 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl p-8 space-y-3 relative cursor-pointer flex flex-col justify-between items-stretch"
            // className="bg-gray-200 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl p-8 space-y-3 relative cursor-pointer flex flex-col justify-between items-stretch"
            onClick={() => window.open(mapUrl, "_blank")}
        >
            <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
            <p className="text-xs md:text-sm">{text}</p>
            <div className="h-40 md:h-[40vh] rounded-lg md:rounded-2xl">
                <img src={image} alt="" className="w-full h-full rounded-lg md:rounded-2xl object-cover "/>
            </div>
            <motion.div
                className="absolute right-4 bg-transparent p-2 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.stopPropagation();
                    window.open(mapUrl, "_blank");
                }}
            >
                <ArrowUpRight size={24} className="text-text" />
            </motion.div>
        </div>
    );
};

export default GedungCard;
