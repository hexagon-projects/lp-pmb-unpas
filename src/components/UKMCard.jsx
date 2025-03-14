import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import RichText from "./RichText";

const UKMCard = ({ title, text, image, onClick }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="bg-gray-100 shadow-md rounded-md p-4 space-y-3 relative" onClick={onClick}>
      <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
      <RichText content={text}/>
      <img
        src={`${imageURL}/organisasi/${image}`}
        alt={title}
        className="w-full h-40 object-cover rounded-xl"
      />
      <motion.div
        className="absolute bottom-4 right-4 bg-lime-400 p-2 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUpRight size={24} className="text-black" />
      </motion.div>
    </div>
  );
};

export default UKMCard;
