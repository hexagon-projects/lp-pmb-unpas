<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import RichText from "../RichText";

const ArticleCard = ({ data }) => {
    const navigate = useNavigate()
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const handleClick = (slug) => {
        navigate(`/artikel/${slug}`)
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item) => (
                <div key={item.id} className="cursor-pointer flex flex-col justify-between p-4 md:p-0 bg-white rounded-lg md:rounded-2xl lg:rounded-4xl shadow-md space-y-3" onClick={() => (handleClick(item.slug))}>
                    <div className="space-y-3">
                        <img src={`${imageURL}/posts/${item.image}`} alt={item.title} className="w-full h-30 md:h-40 lg:h-52 object-cover rounded-t-lg md:rounded-t-2xl lg:rounded-t-4xl" />
                        <div className="bg-white p-0 md:p-4 lg:p-8 md:rounded-b-md space-y-3">
                            <h3 className="font-semibold text-xs md:text-sm lg:text-base">{item.title}</h3>
                            <RichText lineclamp={'line-clamp-2'} sizeText="text-xs md:text-sm" content={item.description} />
                        </div>
                    </div>
                    <div className="md:p-4 lg:p-8 mt-2 flex justify-between items-center">
                        <p className="text-black font-bold uppercase text-xs md:text-sm lg:text-base cursor-pointer">Read More</p>
                        <p className="text-gray-700 font-semibold text-xs md:text-sm lg:text-base">{item.date}</p>
                    </div>
                </div>
=======
import { useState, useEffect } from "react";
import RichText from "../RichText";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ArticleCard = ({ data, border }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        const updateDisplayData = () => {
            if (window.innerWidth > 1280) {
                setDisplayData(data.slice(0, 4));
            } else {
                setDisplayData(data.slice(0, 3));
            }
        };

        updateDisplayData();
        window.addEventListener("resize", updateDisplayData);
        return () => window.removeEventListener("resize", updateDisplayData);
    }, [data]);

    const handleClick = (slug) => {
        window.location.href = `/artikel/${slug}`;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {displayData.map((item) => (
                <motion.div
                    key={item.id}
                    className={`xl:w-full cursor-pointer flex flex-col justify-between p-4 md:p-0 bg-white rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] space-y-3 ${border}`}
                    onClick={() => handleClick(item.slug)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="space-y-3">
                        <img
                            src={`${imageURL}/posts/${item.image}`}
                            alt={item.title}
                            className="w-full h-30 md:h-40 lg:h-52 object-cover rounded-t-lg md:p-4 rounded-lg md:rounded-2xl lg:rounded-4xl"
                        />
                        <div className="bg-white px-0 md:px-4 md:rounded-b-md space-y-3">
                            <h3 className="font-semibold text-xs md:text-sm lg:text-base">{item.title}</h3>
                            <RichText lineclamp="line-clamp-2 md:line-clamp-3" sizeText="text-xs md:text-sm" content={item.description} />
                        </div>
                    </div>
                    <div className="md:px-4 flex justify-between items-center">
                        <motion.div
                            className="flex items-center gap-2 text-black font-bold uppercase text-xs md:text-sm cursor-pointer pb-2 md:pb-4"
                            initial="hidden"
                            whileHover="visible"
                            transition={{ duration: 0.3 }}
                        >
                            <span>Lihat</span>
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, x: -5 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaArrowRight size={16} />
                            </motion.span>
                        </motion.div>
                        <p className="text-gray-700 font-semibold text-xs md:text-sm">{item.date}</p>
                    </div>
                </motion.div>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
            ))}
        </div>
    );
};

export default ArticleCard;