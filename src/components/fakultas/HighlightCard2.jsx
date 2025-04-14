import { useState } from "react";
import ArticleTitle from "../ArticleTitle";
import RichText from "../RichText";
const imageURL = import.meta.env.VITE_IMAGE_URL;

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    
    let r, g, b;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }
    
    return `${r}, ${g}, ${b}`;
}

const HighlightCard = ({ title, text, image, hoverColor }) => {
    const [isActive, setIsActive] = useState(false);
    const rgbColor = hoverColor ? hexToRgb(hoverColor) : '0, 0, 0';

    return (
        <div 
            className={`iconCntr group flex flex-col justify-center items-center text-center p-4 md:p-6 cursor-pointer space-y-3 md:space-y-4 transition-all duration-500 ${isActive ? 'bg-blue-500' : ''}`}
            style={{
                '--hover-color-rgb': rgbColor,
                '--hover-color': hoverColor
            }}
            onClick={() => setIsActive(!isActive)}
        >
            <div className="grid text-center gap-3">
                <img 
                    src={`${imageURL}/unggulans/${image}`} 
                    alt={image} 
                    className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover m-auto" 
                />
                <ArticleTitle 
                    color={`transition ${
                        isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-900'
                    }`} 
                    title={title} 
                />
            </div>

            <div className="space-y-3 md:space-y-4">
                <RichText 
                    lineclamp={'md:line-clamp-4'} 
                    sizeText={`text-xs md:text-sm transition ${ isActive ? 'text-white' : 'group-hover:text-gray-900'}`} 
                    content={text}
                />
            </div>

            <style jsx>{`
                div.iconCntr {
                    position: relative;
                    z-index: 1;
                }
                
                div.iconCntr:hover:not(.active)::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(var(--hover-color-rgb), 0.25);
                    z-index: -1;
                    border-radius: inherit;
                }
            `}</style>
        </div>
    );
};

export default HighlightCard;