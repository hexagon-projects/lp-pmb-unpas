import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Title from "../Title";
import RichText from "../RichText";

const AktivitasMahasiswa = ({ data = [] }) => {
    const [activeCard, setActiveCard] = useState(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const getCardWidth = (isActive) => {
        if (windowWidth < 640) {
            return isActive ? "50%" : "20%";
        } else if (windowWidth < 1024) {
            return isActive ? "50%" : "30%";
        } else {
            return isActive ? "50%" : "20%";
        }
    };
    
    if (!data || !Array.isArray(data)) {
        return <p className="text-center text-gray-500">No activities available.</p>;
    }

    return (
        <div className="space-y-3 md:space-y-4">
            <div className="text-center">
                <Title title="Aktivitas Mahasiswa" />
            </div>
            <div className="flex h-[40vh] lg:h-[50vh] justify-center flex-wrap gap-2 md:gap-4 px-2 md:px-0">
                {data.map((card) => (
                    <motion.div
                        key={card.id}
                        className="rounded-xl md:rounded-2xl lg:rounded-4xl h-full transition-all cursor-pointer p-2 md:p-4 flex flex-col justify-between overflow-hidden bg-cover bg-no-repeat"
                        animate={{ 
                            width: getCardWidth(activeCard === card.id),
                        }}
                        // whileHover={{ width: windowWidth >= 640 ? "500px" : '' }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL}/portofolios/${card.image1})` }}
                    >
                        <h3 className="text-xs md:text-sm font-semibold text-white truncate">
                            {card.title}
                        </h3>
                        {activeCard === card.id && (
                            <RichText textColor="text-white" content={card.description}/>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


export default AktivitasMahasiswa;
