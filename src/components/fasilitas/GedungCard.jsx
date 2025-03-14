import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GedungCard = ({ title, text, mapUrl }) => {
    return (
        <div
            className="bg-gray-200 shadow-md rounded-md p-4 space-y-3 relative cursor-pointer"
            onClick={() => window.open(mapUrl, "_blank")}
        >
            <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
            <p className="text-xs md:text-sm">{text}</p>
            <iframe
                src={mapUrl}
                className="w-full h-40 rounded-lg md:rounded-2xl lg:rounded-4xl border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <motion.div
                className="absolute bottom-4 right-4 bg-lime-400 p-2 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.stopPropagation();
                    window.open(mapUrl, "_blank");
                }}
            >
                <ArrowUpRight size={24} className="text-black" />
            </motion.div>
        </div>
    );
};

export default GedungCard;
