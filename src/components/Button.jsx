import { motion } from "framer-motion";

const Button = ({
    text,
    textColor,
    bgColor = 'bg-white',
    hoverBgColor='hover:border-2 hover:border-white/50',
    onClick,
    rounded = 'rounded-xl md:rounded-xl lg:rounded-2xl',
    icon,
    iconStatus = 'hidden',
    border = 'border-3 border-transparent',
    padding = 'px-8 py-4',
    hoverShadowColor = 'hover:shadow-black/5',
    css,
    sizeText = 'text-xs md:text-sm lg:text-sm',
    weight = 'font-bold'
}) => {
    return (
        <motion.button
            className={`flex gap-2 ${weight} cursor-pointer items-center ${sizeText} ${padding} font-bold ${border} ${bgColor} ${textColor} ${rounded} ${hoverBgColor} shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] ${hoverShadowColor} ${css} transition duration-500`}
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
            {text}
        </motion.button>
    );
};

export default Button;
