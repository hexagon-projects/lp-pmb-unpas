import { useState } from "react";
import ArticleTitle from "../ArticleTitle";
import RichText from "../RichText";
const imageURL = import.meta.env.VITE_IMAGE_URL;

const HighlightCard = ({ title, text, image, hoverColor }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div 
            className={`iconCntr group flex flex-col justify-center items-center text-center p-4 md:p-6 cursor-pointer space-y-3 md:space-y-4 transition-all duration-500 ${isActive ? 'bg-blue-500' : ''}`}
            style={{
                backgroundColor: isActive ? '' : '',
                '--hover-color': hoverColor
            }}
            onClick={() => setIsActive(!isActive)}
        >
            
            {/* tampak depan */}
            <div className="grid text-center gap-3">
                <img 
                    src={`${imageURL}/unggulans/${image}`} 
                    alt={image} 
                    className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover m-auto" 
                />
                <ArticleTitle 
                    color={`transition ${
                        isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'
                    }`} 
                    title={title} 
                />
            </div>

            {/* tampak belakang */}
            <div className="space-y-3 md:space-y-4">
                <RichText 
                    lineclamp={'md:line-clamp-4'} 
                    sizeText={`text-xs md:text-sm transition ${ isActive ? 'text-white' : 'group-hover:text-white'}`} 
                    content={text}
                />
            </div>

            <style jsx>{`
                div.iconCntr:hover:not(.active) {
                    background-color: var(--hover-color);
                }
            `}</style>
        </div>
    );
};

export default HighlightCard;