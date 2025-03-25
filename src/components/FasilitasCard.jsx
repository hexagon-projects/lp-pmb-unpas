import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FasilitasCard = ({ image, title, height = 'h-52 md:h-64 lg:h-[60vh]', index }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
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
      className={`relative w-full ${height} rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden group`}
    >
      <img
        src={`${imageURL}/facilities/${image}`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

      <h3 className="absolute bottom-4 left-4 text-white text-sm md:text-base lg:text-lg font-semibold text-left">
        {title}
      </h3>
    </motion.div>
  );
};

export default FasilitasCard;