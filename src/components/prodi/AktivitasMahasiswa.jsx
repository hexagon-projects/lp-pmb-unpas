import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
import RichText from "../RichText";

<<<<<<< HEAD
<<<<<<< HEAD
const AktivitasMahasiswa = ({data}) => {
=======
const AktivitasMahasiswa = ({ data = [] }) => {
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
const AktivitasMahasiswa = ({ data = [] }) => {
>>>>>>> 8bbe4dc (First Commit)
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
<<<<<<< HEAD
=======
>>>>>>> 8bbe4dc (First Commit)
            return isActive ? 280 : 180;
        }
    };

<<<<<<< HEAD
    return (
        <MotionWrapper type="zoomIn" delay={0.2} className="space-y-3 md:space-y-4">
=======
            return isActive ? 421 : 421;
=======
            return 421; // Tetap sama untuk tampilan besar
>>>>>>> 5732ed6 (ADD: button play video; FIX: Social Media, Carousel)
        }
    };

=======
>>>>>>> 8bbe4dc (First Commit)
    if (!data || !Array.isArray(data)) {
        return <p className="text-center text-gray-500">No activities available.</p>;
    }

    return (
        <div className="space-y-3 md:space-y-4">
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
            <div className="text-center">
                <Title title="Aktivitas Mahasiswa" />
            </div>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 px-2 md:px-0">
                {data.map((card) => (
                    <motion.div
                        key={card.id}
<<<<<<< HEAD
                        className="rounded-4xl relative cursor-pointer p-2 md:p-4 flex flex-col justify-between overflow-hidden"
=======
                        className="rounded-lg transition-all cursor-pointer p-2 md:p-4 flex flex-col justify-between overflow-hidden"
>>>>>>> 8bbe4dc (First Commit)
                        animate={{ 
                            width: getCardWidth(activeCard === card.id),
                            height: getCardHeight(activeCard === card.id)
                        }}
<<<<<<< HEAD
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
=======
                        whileHover={{ width: windowWidth >= 640 ? "500px" : getCardWidth(true) }}
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
>>>>>>> 8bbe4dc (First Commit)
        </div>
    );
};

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 5732ed6 (ADD: button play video; FIX: Social Media, Carousel)
=======

>>>>>>> 8bbe4dc (First Commit)
export default AktivitasMahasiswa;
