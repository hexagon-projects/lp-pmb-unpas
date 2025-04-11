import { useState } from "react";
import ArticleTitle from "../ArticleTitle";
import RichText from "../RichText";
const imageURL = import.meta.env.VITE_IMAGE_URL

const HighlightCard = ({ title, text, image }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div 
            className={`group flex flex-col justify-center items-center text-center p-4 md:p-6 cursor-pointer space-y-3 md:space-y-4 transition-all duration-500 ${isActive ? 'bg-blue-500' : 'hover:bg-blue-500' }`} onClick={() => setIsActive(!isActive)}>
            
            <div className="grid text-center gap-3">
                <img src={`${imageURL}/unggulans/${image}`} alt={image} className="w-20 h-20 object-cover m-auto" />
                <ArticleTitle 
                    color={`transition ${
                        isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'
                    }`} 
                    title={title} 
                />
            </div>

            <div className="space-y-3 md:space-y-4">
                <RichText 
                    lineclamp={'md:line-clamp-4'} sizeText={`text-xs md:text-sm transition ${ isActive ? 'text-white' : 'group-hover:text-white'}`} content={text}
                />
            </div>
        </div>
    );
};


export default HighlightCard;