import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import RichText from "./RichText";
import { useState } from "react";

const UKMCard = ({ title, text, image, onClick }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Variabel animasi untuk card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.div
      className="bg-white shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between items-stretch relative"
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
      <RichText content={text}/>
      
      {/* Image Container dengan Fade In */}
      <div className="relative w-full h-52 md:h-64 lg:h-72">
        <motion.img
          src={`${imageURL}/organisasi/${image}`}
          alt={`Gambar ${title}`}
          className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Skeleton Loading */}
        {!isImageLoaded && (
          <motion.div
            className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>

      {/* <motion.div
        className="absolute bottom-11 right-8 bg-lime-400 p-2 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUpRight size={24} className="text-black" />
      </motion.div> */}
    </motion.div>
  );
};

export default UKMCard;