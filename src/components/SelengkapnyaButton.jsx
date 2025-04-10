import { motion } from "framer-motion";

const SelengkapnyaButton = ({ onClick, color = "#C73929" }) => {
    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-fit relative group cursor-pointer p-2"
            onClick={onClick}
        >
            <p className="text-xs md:text-base lg:text-lg font-semibold" style={{ color: color }}>Selengkapnya</p>
            <motion.div
                className="absolute left-0 bottom-0 h-[2px] z-10000 bg-text pointer-events-none"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};

export default SelengkapnyaButton;