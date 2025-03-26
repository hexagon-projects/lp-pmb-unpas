import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Title from "./Title";

const CTABox = ({ subtitle, title, textButton, subtitle2 }) => {
    const handleClick = () => {
        window.location.href = "https://situ2.unpas.ac.id/spmbfront/";
    };

    return (
        <motion.div
            className="cta_container relative w-full"
            whileTap={{ scale: 0.98 }}
        >
            <div className="w-full flex justify-center items-center shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] duration-500">
                <div className="w-full px-4 py-10 bg-primary rounded-2xl cta_box ">
                    <div className="w-full text-center mt-10 md:mt-8 space-y-2">
                        <h3 className="text-gray-800 text-[26px] font-medium">{subtitle}</h3>
                        <Title sizeMobile="text[32px]" title={title} />
                        <Title sizeMobile="text-[32px]" title={subtitle2} />
                        <div className="w-full flex justify-center items-center gap-4">
                            <motion.button
                                onClick={handleClick}
<<<<<<< Updated upstream
                                className="rounded-full border-3 border-transparent hover:border-3 hover:border-primary/40 cursor-pointer text-xs md:text-base mt-6 px-6 py-2 bg-gray-100 text-black font-semibold shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] hover:bg-white transition"
=======
                                className="rounded-full border-3 border-transparent hover:border-3 hover:border-primary/40 cursor-pointer text-xs md:text-base mt-6 px-6 py-2 bg-gray-100 text-black font-semibold shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] hover:bg-white transition"
>>>>>>> Stashed changes
                                whileTap={{ scale: 0.95 }}
                            >
                                {textButton}
                            </motion.button>
                            <motion.button
<<<<<<< Updated upstream
                                onClick={handleClick}
                                className="rounded-full border-3 border-transparent hover:border-3 hover:border-white/40 cursor-pointer text-xs md:text-base mt-6 px-6 py-2 text-black font-semibold shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] transition"
=======
                                onClick={handleWhatsApp}
                                className="rounded-full border-1 border-text hover:border-2 hover:border-red-500 cursor-pointer text-xs md:text-base mt-6 px-6 py-2 text-text font-semibold shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] transition"
>>>>>>> Stashed changes
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
            </div>
        </motion.div>
    );
};

export default CTABox;