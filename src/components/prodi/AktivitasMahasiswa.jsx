import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
import RichText from "../RichText";

<<<<<<< HEAD
const AktivitasMahasiswa = ({data}) => {
=======
const AktivitasMahasiswa = ({ data = [] }) => {
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
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
            return isActive ? "90%" : "45%";
        } else if (windowWidth < 1024) {
            return isActive ? "60%" : "30%";
        } else {
            return isActive ? "500px" : "200px";
        }
    };

    const getCardHeight = (isActive) => {
        if (windowWidth < 640) {
            return isActive ? 180 : 120;
        } else if (windowWidth < 1024) {
            return isActive ? 220 : 160;
        } else {
<<<<<<< HEAD
<<<<<<< HEAD
            return isActive ? 280 : 180;
        }
    };

    return (
        <MotionWrapper type="zoomIn" delay={0.2} className="space-y-3 md:space-y-4">
=======
            return isActive ? 421 : 421;
=======
            return 421; // Tetap sama untuk tampilan besar
>>>>>>> 5732ed6 (ADD: button play video; FIX: Social Media, Carousel)
        }
    };

    if (!data || !Array.isArray(data)) {
        return <p className="text-center text-gray-500">No activities available.</p>;
    }

    return (
        <div className="space-y-3 md:space-y-4">
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
            <div className="text-center">
                <Title title="Aktivitas Mahasiswa" />
            </div>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 px-2 md:px-0">
                {data.map((card) => (
                    <motion.div
                        key={card.id}
                        className="rounded-4xl relative cursor-pointer p-2 md:p-4 flex flex-col justify-between overflow-hidden"
                        animate={{ 
                            width: getCardWidth(activeCard === card.id),
                            height: getCardHeight(activeCard === card.id)
                        }}
                        whileHover={{ 
                            width: activeCard === card.id ? getCardWidth(true) : getCardWidth(false),
                            scale: activeCard === card.id ? 1 : 1.05
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Animasi lebih smooth
                        onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                        style={{ 
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${imageURL}/portofolios/${card.image1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        {/* Animasi teks muncul setelah gambar melebar */}
                        <motion.div
                            className="absolute bottom-7 left-10"
                            initial={{ opacity: 0, y: 20 }} // Muncul dari bawah
                            animate={activeCard === card.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: activeCard === card.id ? 0.5 : 0 }} // Delay muncul setelah gambar selesai
                        >
                            {activeCard === card.id && (
                                <RichText textColor="text-white" sizeText="text-base md:text-lg lg:text-xl" content={card.description} />
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
<<<<<<< HEAD
        </MotionWrapper>
    );
};

=======
        </div>
    );
};

<<<<<<< HEAD

>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 5732ed6 (ADD: button play video; FIX: Social Media, Carousel)
export default AktivitasMahasiswa;
