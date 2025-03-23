import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import ArticleTitle from "./ArticleTitle";

const ArticleTransparentCard = ({ image, title, slug }) => {
=======
=======
>>>>>>> 8bbe4dc (First Commit)
import { motion } from "framer-motion";
import ArticleTitle from "./ArticleTitle";
import RichText from "./RichText";
import { FaArrowRight } from "react-icons/fa";

const ArticleTransparentCard = ({ image, title, slug, description }) => {
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/artikel/${slug}`);
    };

    return (
        <div
<<<<<<< HEAD
<<<<<<< HEAD
            className="cursor-pointer h-full w-full flex flex-col justify-end p-4 rounded-lg bg-cover bg-center relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px] 
                transition-transform transform hover:scale-105 hover:brightness-110 duration-300 ease-in-out"
            style={{ backgroundImage: `url(${imageURL}/posts/${image})` }}
            onClick={handleClick}
        >
            <div className="absolute inset-0 bg-black/40 rounded-lg transition-opacity hover:bg-black/50"></div>

            <div className="relative z-10 text-white">
                <ArticleTitle color="text-white break-words" title={title} />
=======
=======
>>>>>>> 8bbe4dc (First Commit)
            className="cursor-pointer h-full w-full flex flex-col justify-end p-4 md:p-6 rounded-lg md:rounded-2xl lg:rounded-4xl bg-cover bg-center relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px] group"
            style={{ backgroundImage: `url(${imageURL}/posts/${image})` }}
            onClick={handleClick}
        >
            <motion.div
                className="absolute inset-0 rounded-lg md:rounded-2xl lg:rounded-4xl"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ backgroundColor: "black" }}
            ></motion.div>

            <div className="relative z-10 text-white flex flex-col items-start transition-all duration-500 ease-in-out group-hover:gap-2 gap-0">
                <ArticleTitle color="text-white break-words" title={title} />

                <motion.div
                    className="max-h-0 overflow-hidden opacity-0 translate-y-2 space-y-3 md:space-y-4 group-hover:max-h-[6rem] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                >
                    <RichText lineclamp={'line-clamp-1 lg:line-clamp-2'} textColor="text-white" content={description} />

                    <motion.div
                        className="flex items-center gap-2 text-white font-bold text-xs md:text-sm cursor-pointer"
                        initial="hidden"
                        whileHover="visible"
                        transition={{ duration: 0.3 }}
                    >
                        <span>Selengkapnya</span>
                        <FaArrowRight size={16} />
                    </motion.div>
                </motion.div>
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
            </div>
        </div>
    );
};

export default ArticleTransparentCard;
