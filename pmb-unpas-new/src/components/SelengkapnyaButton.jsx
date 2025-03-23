import { motion } from "framer-motion";
import Text from "./Text";

const SelengkapnyaButton = ({ onClick, color = "text-text" }) => {
    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-fit relative group cursor-pointer p-2"
            onClick={onClick}
        >
            <Text text={"Selengkapnya"} color={color} weight={"font-semibold"} />
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