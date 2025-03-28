import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import RichText from "./RichText";

const UKMCard = ({ title, text, image, index }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        mass: 0.5,
        delay: index * 0.1
      }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="article-card bg-white shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between items-stretch relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      style={{ willChange: 'transform, opacity' }}
    >
      <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
      <RichText content={text} lineclamp={'line-clamp-2 md:line-clamp-none'}/>

      <motion.div 
        className="relative w-full h-52 md:h-64 lg:h-72"
        variants={imageVariants}
      >
        <LazyLoadImage
          src={`${imageURL}/organisasi/${image}`}
          alt={`Gambar ${title}`}
          effect="blur"
          className="w-full h-full object-cover rounded-xl"
          wrapperClassName="w-full h-full"
          threshold={200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default UKMCard;