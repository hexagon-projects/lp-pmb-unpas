import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import RichText from "./RichText";

const TestimonialCard = ({ title, description, name, image, bgColor = 'bg-[#DAFE3A]', textColor = 'text-[#DAFE3A]' }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className={`relative w-full max-w-sm p-6 rounded-lg md:rounded-2xl lg:rounded-4xl ${bgColor} shadow-lg`}>
            <div className="absolute top-0 right-0 bg-white p-4 rounded-xl shadow-md">
                <FaQuoteRight className={`${textColor} text-xl`} />
            </div>

            <RichText lineclamp={'line-clamp-3'} content={description}/>

            <div className="flex items-center gap-4 mt-6">
                <img
                    src={`${imageURL}/testimonies/${image}`}
                    alt={name}
                    loading="lazy"
                    className="w-10 h-10 rounded-full bg-black"
                />
                <div className="space-y-1">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
