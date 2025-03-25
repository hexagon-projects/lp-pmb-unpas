import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GedungCard = ({ title, text, mapUrl, image, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-gray-200 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl p-4 space-y-3 relative cursor-pointer flex flex-col justify-between items-stretch"
            onClick={() => window.open(mapUrl, "_blank")}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
            <p className="text-xs md:text-sm">{text}</p>
            <div className="h-40 md:h-[40vh] rounded-lg md:rounded-2xl">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full rounded-lg md:rounded-2xl object-cover"
                    loading="lazy"
                />
            </div>
            <motion.div
                className="absolute bottom-7 right-4 bg-white p-2 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.stopPropagation();
                    window.open(mapUrl, "_blank");
                }}
            >
                <ArrowUpRight size={24} className="text-text" />
            </motion.div>
        </motion.div>
    );
};

export default GedungCard;