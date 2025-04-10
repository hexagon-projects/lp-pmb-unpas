import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const imageURL = import.meta.env.VITE_IMAGE_URL;

const ArticleSidebar = ({
    data,
    excludeId = null,
    border,
    grid = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'
}) => {
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        const updateDisplayData = () => {
            const filteredData = excludeId
                ? data.filter((item) => item?.id !== excludeId)
                : data;

            if (window.innerWidth > 1280) {
                setDisplayData(filteredData.slice(0, 3));
            } else {
                setDisplayData(filteredData.slice(0, 2));
            }
        };

        updateDisplayData();
        window.addEventListener("resize", updateDisplayData);
        return () => window.removeEventListener("resize", updateDisplayData);
    }, [data, excludeId]);

    const handleClick = (slug) => {
        window.location.href = `/artikel/${slug}`;
    };

    return (
        <div className={`${grid} gap-4 md:gap-[32px] lg:gap-8 md:pb-8`}>
            {displayData.map((item) => (
                <div key={item?.id} className="cursor-pointer" onClick={() => handleClick(item?.slug)}>
                    <motion.div
                        className={`rounded-[16px] overflow-hidden shadow-xl ${border}`}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={item?.image ? `${imageURL}/posts/${item?.image}` : "/placeholder.jpg"}
                            alt={item?.title ?? "Gambar artikel"}
                            className="w-full h-48 md:h-56 object-cover"
                        />
                    </motion.div>

                    <h3 className="mt-3 text-sm md:text-base lg:text-lg font-semibold line-clamp-2">
                        {item?.title}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default ArticleSidebar;