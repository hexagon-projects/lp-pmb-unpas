import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GedungCard = ({ title, text, mapUrl }) => {
    return (
        <div
<<<<<<< HEAD
            className="bg-gray-200 shadow-md rounded-md p-4 space-y-3 relative cursor-pointer"
=======
            className="bg-gray-200 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl p-4 space-y-3 relative cursor-pointer flex flex-col justify-between items-stretch"
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
            onClick={() => window.open(mapUrl, "_blank")}
        >
            <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
            <p className="text-xs md:text-sm">{text}</p>
<<<<<<< HEAD
            <iframe
                src={mapUrl}
                className="w-full h-40 rounded-lg md:rounded-2xl lg:rounded-4xl border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <motion.div
                className="absolute bottom-4 right-4 bg-lime-400 p-2 rounded-lg cursor-pointer"
=======
            <div className="h-40 md:h-[40vh]">
                <iframe
                    src={mapUrl}
                    className="w-full h-full rounded-base md:rounded-xl lg:rounded-3xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <motion.div
                className="absolute bottom-7 right-4 bg-lime-400 p-2 rounded-lg cursor-pointer"
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
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
