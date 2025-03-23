import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import RichText from "./RichText";

const UKMCard = ({ title, text, image, onClick }) => {
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-gray-100 shadow-md rounded-md p-4 space-y-3 relative" onClick={onClick}>
=======
    <div className="bg-white shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between items-stretch relative" onClick={onClick}>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
      <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
=======
    <div className="bg-white shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between items-stretch relative" onClick={onClick}>
      <h2 className="text-[24px] font-bold">{title}</h2>
>>>>>>> 8bbe4dc (First Commit)
      <RichText content={text}/>
      <img
        src={`${imageURL}/organisasi/${image}`}
        alt={title}
<<<<<<< HEAD
<<<<<<< HEAD
        className="w-full h-40 object-cover rounded-xl"
      />
      <motion.div
        className="absolute bottom-4 right-4 bg-lime-400 p-2 rounded-xl cursor-pointer"
=======
=======
>>>>>>> 8bbe4dc (First Commit)
        className="w-full h-52 md:h-64 lg:h-72 object-cover rounded-xl"
      />
      {/* <motion.div
        className="absolute bottom-11 right-8 bg-lime-400 p-2 rounded-xl cursor-pointer"
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUpRight size={24} className="text-black" />
<<<<<<< HEAD
<<<<<<< HEAD
      </motion.div>
=======
      </motion.div> */}
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
      </motion.div> */}
>>>>>>> 8bbe4dc (First Commit)
    </div>
  );
};

export default UKMCard;
