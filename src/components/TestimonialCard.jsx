import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import RichText from "./RichText";

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 8bbe4dc (First Commit)
const TestimonialCard = ({ iconVisibililty = 'flex', cssContainer = 'testi_container', cssBox = 'testi_box', title, description, name, image, bgColor = 'bg-primary', textColor = 'text-black', position = 'top-0 right-0' }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className={`relative ${cssContainer} w-full h-[33vh] lg:h-[25vh]`}>
            <div className={`relative w-fit h-full flex flex-col justify-between p-6 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] ${bgColor} ${cssBox}`}>
                <div className="h-[50%] flex flex-col lg:flex-row items-start gap-4 mb-4 w-[80%] md:w-[80%] lg:w-[75%]">
                    <img
                        src={`${imageURL}/testimonies/${image}`}
                        alt={name}
                        loading="lazy"
                        className="w-10 h-10 rounded-full bg-black"
                    />
                    <div className="space-y-1">
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">{title}</p>
                    </div>
                </div>

                <div className="h-[50%]">
                    <RichText lineclamp={' line-clamp-3 md:line-clamp-3 lg:line-clamp-3 xl:line-clamp-3'} content={description} />
                </div>

                <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className={`absolute ${position} ${bgColor} rounded-lg p-4 xl:p-4 ${iconVisibililty}`}>
                <FaQuoteRight className={`${textColor} text-2xl md:text-2xl xl:text-2xl`} />
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
            </div>
        </div>
    );
};

export default TestimonialCard;
