import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Text from "../Text";
import { FaTiktok, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import ArticleTitle from "../ArticleTitle";
import { useState } from "react";
const imageURL = import.meta.env.VITE_IMAGE_URL;

const DosenCard = ({ name, title, image, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div
                className="w-full h-72 md:h-96 lg:h-[44vh] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${imageURL}/ourteams/${image})` }}
            >
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/100 via-[#C5B91B40]/25 to-transparent rounded-b-xl"></div>

                <div className="w-[80%] p-4 md:p-6 h-full flex flex-col items-start justify-end gap-2 relative z-10">
                    <ArticleTitle color="text-white" title={name} />
                    <Text color="text-white" text={title} />
                </div>
            </div>

            <div
                className="absolute bottom-3 right-3 z-50 flex flex-col items-center gap-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Social Icons on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="flex flex-col gap-2 mb-2"
                        >
                            {[FaTiktok, FaYoutube, FaInstagram, FaFacebookF].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
                                >
                                    <Icon className="w-5 h-5" style={{ color: color }} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Original ArrowUpRight Icon */}
                <motion.div
                    className="rounded-xl bg-white"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <ArrowUpRight className="w-8 md:w-11 h-8 md:h-11 p-1 rounded-xl rotate-45 group-hover:rotate-0 transition duration-500" style={{ color: color }} />
                </motion.div>
            </div>
        </div>
    );
};

export default DosenCard;