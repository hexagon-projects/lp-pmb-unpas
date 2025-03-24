import React, { useState } from "react";
import MitraCarousel from "../../components/MitraCarousel";
import Text from "../../components/Text";
import Title from "../../components/Title";
// import SelengkapnyaButton from "../../components/SelengkapnyaButton";

const MitraSection = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMitra, setSelectedMitra] = useState(null);

    const handleCardClick = (mitra) => {
        setSelectedMitra(mitra);
        setIsModalOpen(true);
    };

    // const handleSelengkapnyaClick = () => {
    //     setIsModalOpen(true);
    // };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMitra(null);
    };

    const midIndex = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, midIndex);
    const secondHalf = data.slice(midIndex);

    return (
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
            <div className="w-full flex flex-col justify-center items-center text-center space-y-3">
                <Title title="Mitra Unpas" />
                <div className="w-2/3 md:w-1/3 xl:w-1/4">
                    <Text sizeMobile="text-sm md:text-lg lg:text-lg" text={'Lebih dari 100+ mitra kerja sama antar perguruan tinggi.'} />
                </div>
            </div>

            <div className="w-full mitra-carousel-blur-mask space-y-4 lg:space-y-6">
                <MitraCarousel datas={firstHalf} onCardClick={handleCardClick} />
                <MitraCarousel datas={secondHalf} onCardClick={handleCardClick} reverse={true} />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
                        <h2 className="text-xl font-bold mb-4">{selectedMitra?.name || 'Detail Mitra'}</h2>
                        <p className="mb-4">
                            {selectedMitra?.description || 'Ini adalah detail mitra kerjasama.'}
                        </p>
                        <button
                            onClick={closeModal}
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MitraSection;
