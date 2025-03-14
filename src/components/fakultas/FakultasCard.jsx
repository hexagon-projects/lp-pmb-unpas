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
      className="relative w-full h-64 rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-md cursor-pointer group"
      onClick={handleClick}
    >

      <img
        src={`${imageURL}/fakultas/${image}`}
        alt={title}
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
      </motion.div>
    </div>
  );
};

export default FakultasCard;
