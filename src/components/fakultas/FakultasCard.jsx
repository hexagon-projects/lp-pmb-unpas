import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const FakultasCard = ({ image, title, slug }) => {
  const navigate = useNavigate();
  const imageURL = import.meta.env.VITE_IMAGE_URL;

  const handleClick = () => {
    navigate(`/fakultas/${slug}`);
  };

  return (
    <div
<<<<<<< HEAD
      className="relative w-full h-64 rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-md cursor-pointer group"
=======
      className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh] rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] cursor-pointer group"
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
      onClick={handleClick}
    >
{/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/60 to-transparent transition-all duration-500 group-hover:opacity-0"></div> */}

      <img
        src={`${imageURL}/fakultas/${image}`}
        alt={title}
<<<<<<< HEAD
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>

      <h3 className="absolute bottom-4 left-4 text-white text-2xl max-w-[60px] md:max-w-full font-semibold">
        {title}
      </h3>

      <motion.div
        className="absolute bottom-4 right-4 bg-white p-2 rounded-lg md:rounded-2xl lg:rounded-4xl"
        whileHover={{ scale: 1.2 }}
      >
        <MdOutlineArrowOutward size={30} className="text-black" />
=======
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500"></div>

      <motion.h3
        className="absolute bottom-4 left-4 text-white text-2xl w-[140px] lg:w-[75%] font-semibold"
        initial={{ opacity: 1, y: 0 }}
        whileHover={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <motion.div
        className="absolute bottom-4 right-4 bg-white p-2 rounded-xl"
        whileHover={{ scale: 1.2, rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <MdOutlineArrowOutward size={30} className="text-text" />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
      </motion.div>
    </div>
  );
};

export default FakultasCard;
