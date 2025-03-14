import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Title from "./Title";

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
            </div>
        </motion.div>
    );
};

export default CTABox;