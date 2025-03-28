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
      className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh] rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] cursor-pointer group"
      onClick={handleClick}
    >

      <img
        src={`${imageURL}/fakultas/${image}`}
        alt={title}
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
        className="absolute bottom-4 right-4 bg-white p-2 rounded-xl md:rounded-2xl lg:rounded-4xl"
        whileHover={{ scale: 1.2, rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <MdOutlineArrowOutward size={30} className="text-text" />
      </motion.div>
    </div>
  );
};

export default FakultasCard;
