<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
import { hover, motion } from "framer-motion";

const Button = ({
    text,
    textColor,
    bgColor = 'bg-white',
    hoverBgColor='hover:border-3 hover:border-white/50',
    onClick,
<<<<<<< HEAD
    rounded = 'rounded-lg md:rounded-xl lg:rounded-2xl',
=======
    rounded = 'rounded-full',
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
    icon,
    iconStatus = 'hidden',
    border = 'border-3 border-transparent',
    paddingMobile = 'px-8 py-4',
    paddingTablet = 'md:px-8 md:py-4',
<<<<<<< HEAD
    hoverShadowColor = 'hover:shadow-black/5',
    borderColor = 'border-3 border-transparent'
}) => {
    return (
        <motion.button
            className={`flex gap-2 cursor-pointer items-center text-xs md:text-sm lg:text-sm ${borderColor} ${paddingMobile} ${paddingTablet} font-bold ${border} ${bgColor} ${textColor} ${rounded} ${hoverBgColor} shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] ${hoverShadowColor} transition duration-500`}
=======
    hoverShadowColor = 'hover:shadow-black/5'
}) => {
    return (
        <motion.button
            className={`flex gap-2 cursor-pointer items-center text-xs md:text-sm lg:text-sm ${paddingMobile} ${paddingTablet} font-bold ${border} ${bgColor} ${textColor} ${rounded} ${hoverBgColor} shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] ${hoverShadowColor} transition duration-500`}
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                className={iconStatus}
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0.7 }}
            >
                {icon}
            </motion.span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
            {text}
        </motion.button>
    );
};

export default Button;
