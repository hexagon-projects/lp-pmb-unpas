import { motion } from "framer-motion";

const Button = ({ 
    text, 
    textColor, 
    bgColor, 
    hoverColor, 
    onClick, 
    rounded = 'rounded-lg md:rounded-2xl lg:rounded-4xl', 
    icon, 
    iconStatus = 'hidden', 
    border, 
    paddingMobile = 'px-8 py-4' 
}) => {
    return (
        <motion.button 
            className={`flex gap-2 cursor-pointer items-center text-xs md:text-sm lg:text-sm ${paddingMobile} md:px-8 md:py-4 font-bold ${border} ${bgColor} ${hoverColor} ${textColor} ${rounded}`} 
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className={iconStatus}>{icon}</span>
            {text}
        </motion.button>
    );
};

export default Button;
