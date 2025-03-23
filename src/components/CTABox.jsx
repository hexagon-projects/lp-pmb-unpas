import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Title from "./Title";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const CTABox = ({ subtitle, title, onClick, textButton }) => {
    return (
        <motion.div 
            className="w-[90%] md:max-w-xl lg:max-w-4xl flex justify-center items-center px-4 py-10 bg-[#e6ff2f] rounded-2xl relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div 
                className="absolute top-4 left-4 bg-black p-2 rounded-lg"
                whileHover={{ scale: 1.2 }}
            >
                <ArrowDownRight size={32} className="text-[#e6ff2f]" />
            </motion.div>

            <div className="text-center max-w-3xl mt-10 md:mt-8 space-y-2">
                <h3 className="text-gray-800 text-xs md:text-base lg:text-lg font-medium">{subtitle}</h3>
                <Title sizeMobile="text-sm md:text-xl" title={title} />
                <motion.button 
                    onClick={onClick} 
                    className="cursor-pointer text-xs md:text-base mt-6 px-6 py-2 bg-white text-black font-semibold rounded-lg md:rounded-2xl lg:rounded-4xl shadow-md hover:bg-gray-200 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {textButton}
                </motion.button>
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
const CTABox = ({ subtitle, title, textButton, subtitle2 }) => {
    const handleClick = () => {
        window.location.href = "https://situ2.unpas.ac.id/spmbfront/";
    };

    return (
        <motion.div
            className="cta_container relative w-full"
            whileTap={{ scale: 0.98 }}
        >
            <div className="w-full flex justify-center items-center shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] duration-500">
                <div className="w-full px-4 py-10 bg-primary rounded-2xl cta_box ">
                    <div className="w-full text-center mt-10 md:mt-8 space-y-2">
<<<<<<< HEAD
                        <h3 className="text-gray-800 text-xs md:text-base lg:text-lg font-medium">{subtitle}</h3>
                        <Title sizeMobile="text-sm md:text-xl" title={title} />
                        <Title sizeMobile="text-sm md:text-xl" title={subtitle2} />
=======
                        <h3 className="text-gray-800 text-[26px] font-medium">{subtitle}</h3>
                        <Title sizeMobile="text[32px]" title={title} />
                        <Title sizeMobile="text-[32px]" title={subtitle2} />
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                        <div className="w-full flex justify-center items-center gap-4">
                            <motion.button
                                onClick={handleClick}
                                className="rounded-full border-3 border-transparent hover:border-3 hover:border-primary/40 cursor-pointer text-xs md:text-base mt-6 px-6 py-2 bg-gray-100 text-black font-semibold shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] hover:bg-white transition"
                                whileTap={{ scale: 0.95 }}
                            >
                                {textButton}
                            </motion.button>
                            <motion.button
                                onClick={handleClick}
<<<<<<< HEAD
                                className="rounded-full border-3 border-transparent hover:border-3 hover:border-white/40 cursor-pointer text-xs md:text-base mt-6 px-6 py-2 text-black font-semibold shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] transition"
=======
                                className="rounded-full border-1 border-red-500 hover:border-2 hover:border-red-600 cursor-pointer text-xs md:text-base mt-6 px-6 py-2 text-red-500 hover:text-red-600 font-semibold shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] transition"
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                                whileTap={{ scale: 0.95 }}
                            >
                                Hubungi Admin
                            </motion.button>
                        </div>
                    </div>
                    <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <motion.div
                    className="w-fit flex justify-center items-center absolute top-0 left-0 bg-primary p-3 md:p-4 rounded-md"
                >
                    <ArrowDownRight size={32} className="text-black" />
                </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
            </div>
        </motion.div>
    );
};

export default CTABox;