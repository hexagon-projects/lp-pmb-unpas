import { useState } from "react";
import { FaStar } from "react-icons/fa";
import ArticleTitle from "../ArticleTitle";
import RichText from "../RichText";

const HighlightCard = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div 
            className={`group flex flex-col justify-center items-center text-center p-4 md:p-6 cursor-pointer space-y-3 md:space-y-4 transition-all duration-500 ${isActive ? 'bg-blue-500' : 'hover:bg-blue-500' }`} onClick={() => setIsActive(!isActive)}>
            <div className={`p-2 rounded-full transition ${ isActive ? 'bg-white' : 'bg-blue-500 group-hover:bg-white'}`}>
                <FaStar 
                    size={30} 
                    className={`transition ${
                        isActive ? 'text-blue-500' : 'text-white group-hover:text-blue-500'
                    }`} 
                />
            </div>

            <div className="space-y-3 md:space-y-4">
                <ArticleTitle 
                    color={`transition ${
                        isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'
                    }`} 
                    title={title} 
                />
                <RichText 
                    lineclamp={'md:line-clamp-4'} sizeText={`text-xs md:text-sm transition ${ isActive ? 'text-white' : 'group-hover:text-white'}`} content={text}
                />
            </div>
        </div>
    );
};

export default HighlightCard;