import MotionWrapper from "./MotionWrapper";
import Title from "./Title";
import { useEffect, useState } from "react";

const ActivitySection = ({ title, activities }) => {
    const [selectedActivity, setSelectedActivity] = useState(null);

    useEffect(() => {
        if (activities && activities.length > 0) {
            setSelectedActivity(activities[0]);
        }
    }, [activities]);

    const imageURL = import.meta.env.VITE_IMAGE_URL;

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
    );
};

export default ActivitySection;
