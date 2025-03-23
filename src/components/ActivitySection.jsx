<<<<<<< HEAD
<<<<<<< HEAD
import MotionWrapper from "./MotionWrapper";
import Title from "./Title";
import { useEffect, useState } from "react";
=======
=======
>>>>>>> 8bbe4dc (First Commit)
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import RichText from "./RichText";
import Title from "./Title";
import Text from "./Text";
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)

const ActivitySection = ({ title, activities }) => {
    const [selectedActivity, setSelectedActivity] = useState(null);

    useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
        if (activities && activities.length > 0) {
=======
        if (activities?.length > 0) {
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
        if (activities?.length > 0) {
>>>>>>> 8bbe4dc (First Commit)
            setSelectedActivity(activities[0]);
        }
    }, [activities]);

    const imageURL = import.meta.env.VITE_IMAGE_URL;

<<<<<<< HEAD
<<<<<<< HEAD
    return (
        <MotionWrapper type={'zoomIn'} delay={0.2}>
            <div className="text-center space-y-3 md:space-y-4">
                <Title title={title} />
                <div className="relative h-96 rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden">
                    <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: `url(${imageURL}/agendas/${selectedActivity?.image})` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                            <div className="max-w-[200px] md:max-w-sm lg:max-w-4xl text-white text-left space-y-2 z-10">
                                <h3 className="text-xl font-bold">{selectedActivity?.title}</h3>
                                <div className="flex gap-2">
                                    <p className="text-xs md:text-sm">{selectedActivity?.start_date} {selectedActivity?.start_time}</p>
                                    <p className="text-xs md:text-sm">{selectedActivity?.end_date} {selectedActivity?.end_time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 flex gap-4 overflow-x-auto max-w-[120px] md:max-w-[240px] lg:max-w-lg pb-2 z-20">
                            {activities.map((kegiatan, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedActivity(kegiatan)}
                                    className={`overflow-x-scroll flex-shrink-0 cursor-pointer transition-transform ${selectedActivity?.title === kegiatan?.title ? '' : 'hover:ring-1 hover:ring-white'}`}>
                                    <img
                                        src={`${imageURL}/agendas/${kegiatan?.image}`} alt={kegiatan?.title} className="w-24 h-24 object-cover rounded-sm" loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MotionWrapper>
=======
=======
>>>>>>> 8bbe4dc (First Commit)
    const handleRegisterClick = () => {
        if (selectedActivity?.register_link) {
            window.open(selectedActivity.register_link, "_blank");
        }
    };

    return (
        <div>
            <div className="text-center space-y-3 md:space-y-4">
                <Title title={title} />

                {activities.length > 0 ? (
                    <div className="relative h-96 md:h-[50vh] lg:h-[70vh] rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            {selectedActivity && (
                                <motion.div
                                    key={selectedActivity.title}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 h-full w-full bg-cover bg-center rounded-lg md:rounded-2xl lg:rounded-4xl"
                                    style={{ backgroundImage: `url(${imageURL}/agendas/${selectedActivity.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="max-w-[200px] md:max-w-sm lg:max-w-4xl text-white text-left space-y-2 z-10"
                                        >
                                            <h3 className="text-xl font-bold">{selectedActivity.title}</h3>
                                            <p className="text-xs md:text-sm">{selectedActivity.start_date}</p>
                                            <RichText lineclamp="line-clamp-2" textColor="text-white" content={selectedActivity.content} />
                                            <Button 
                                                text="Dapatkan Tiket" 
                                                bgColor="bg-blue-500" 
                                                hoverColor="hover:bg-blue-600" 
                                                onClick={handleRegisterClick} 
                                                hoverBgColor={'hover:border-3 hover:border-white/50'}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="agenda_box absolute bottom-4 right-4 flex gap-4 overflow-x-auto max-w-[120px] md:max-w-[240px] lg:max-w-lg pb-2 z-20 scrollbar-none">
                            {activities.map((kegiatan, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setSelectedActivity(kegiatan)}
                                    className="cursor-pointer flex-shrink-0"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <img 
                                        src={`${imageURL}/agendas/${kegiatan.image}`} 
                                        alt={kegiatan.title} 
                                        className={`w-24 h-24 object-cover rounded-lg md:rounded-2xl transition-all duration-500 ${
                                            selectedActivity?.title === kegiatan.title
                                                ? "ring-2 ring-blue-500 scale-105"
                                                : "hover:ring-2 hover:ring-white"
                                        }`}
                                        loading="lazy" 
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-40">
                        <Text text={'Belum ada agenda'} color="text-gray-500"/>
                    </div>
                )}
            </div>
        </div>
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
    );
};

export default ActivitySection;
