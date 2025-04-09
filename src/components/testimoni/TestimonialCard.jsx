import { FaPlay, FaQuoteRight } from "react-icons/fa";
import RichText from "../../components/RichText";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const TestimonialCard = ({ 
    name, 
    title, 
    image, 
    description, 
    height = 'h-full', 
    justify = 'justify-between', 
    titleLineClamp, 
    yt 
}) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        if (yt) setIsOpen(prev => !prev);
    };

    return (
        <div className={`bg-primary p-4 md:p-6 lg:p-8 flex flex-col ${justify} gap-4 relative rounded-xl md:rounded-2xl lg:rounded-3xl ${height}`}>
            <div className="flex items-start gap-4">
                <img
                    src={`${imageURL}/testimonies/${image}`}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                    width={40}
                    height={40}
                />
                <div className="space-y-1">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className={`text-xs text-gray-500 ${titleLineClamp}`}>{title}</p>
                </div>
            </div>
            
            <RichText 
                padding="pb-2 md:pb-3 lg:pb-4" 
                content={description} 
                lineclamp="line-clamp-4 md:line-clamp-5 lg:line-clamp-6" 
            />
            
            <div className="flex justify-between items-center">
                <button 
                    className={`flex gap-2 items-center p-2 rounded-lg text-sm transition-colors ${
                        yt 
                            ? 'bg-footer text-white hover:bg-footer/90 cursor-pointer' 
                            : 'bg-gray-300 text-gray-800 cursor-not-allowed'
                    }`}
                    onClick={toggleModal}
                    disabled={!yt}
                    aria-label={yt ? "Play testimonial video" : "No video available"}
                >
                    Play <FaPlay size={12} />
                </button>
                <div className="p-2 xl:p-2">
                    <FaQuoteRight className="text-text text-2xl md:text-3xl" />
                </div>
            </div>

            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={toggleModal}
                >
                    <motion.div
                        className="relative w-[90%] md:w-[80%] lg:w-[60%] aspect-video border-2 border-white rounded-xl md:rounded-2xl lg:rounded-3xl"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-3 -right-3 bg-red-500 text-white p-1 rounded-full z-10 hover:bg-red-600 transition-colors cursor-pointer"
                            onClick={toggleModal}
                            aria-label="Close video"
                        >
                            <X size={20} />
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1`}
                            title={`${name}'s Testimonial`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-xl md:rounded-2xl"
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default TestimonialCard;