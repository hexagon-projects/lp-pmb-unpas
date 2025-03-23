import { GoArrowUpRight } from "react-icons/go";

<<<<<<< HEAD
const ButtonArrow = ({ text }) => {
    return (
        <button className="group flex items-center gap-2 text-xs md:text-sm bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer px-3 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
            {text}
            <span className="p-2 rounded-full bg-white text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 ease-in-out">
                <GoArrowUpRight size={24} className="transform group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
=======
const ButtonArrow = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="group flex items-center gap-2 text-xs md:text-sm bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer px-3 py-2 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105"
        >
            {text}
            <span className="p-2 rounded-full bg-white text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 ease-in-out">
                <GoArrowUpRight size={24} className="transform group-hover:rotate-45 transition-transform duration-500 ease-in-out" />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
            </span>
        </button>
    );
};

<<<<<<< HEAD
export default ButtonArrow;
=======
export default ButtonArrow;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
