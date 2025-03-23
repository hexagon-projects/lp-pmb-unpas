import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import RichText from "./RichText";

const UKMCard = ({ title, text, image, onClick }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="bg-white shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between items-stretch relative" onClick={onClick}>
      <h2 className="text-[24px] font-bold">{title}</h2>
      <RichText content={text}/>
      <img
        src={`${imageURL}/organisasi/${image}`}
        alt={title}
        className="w-full h-52 md:h-64 lg:h-72 object-cover rounded-xl"
      />
      {/* <motion.div
        className="absolute bottom-11 right-8 bg-lime-400 p-2 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUpRight size={24} className="text-black" />
      </motion.div> */}
    </div>
  );
};

export default UKMCard;
