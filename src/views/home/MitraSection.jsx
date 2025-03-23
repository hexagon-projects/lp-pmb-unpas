import React, { useState } from "react";
import MitraCarousel from "../../components/MitraCarousel";
import Text from "../../components/Text";
import Title from "../../components/Title";
import SelengkapnyaButton from "../../components/SelengkapnyaButton";

const MitraSection = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMitra, setSelectedMitra] = useState(null);

    const handleCardClick = (mitra) => {
        setSelectedMitra(mitra);
        setIsModalOpen(true);
    };

    const handleSelengkapnyaClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMitra(null);
    };

    return (
        <div className={'flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8'}>
            <div className="w-full md:w-[30%] text-left md:text-left space-y-3">
                <Text text={'Universitas Pasundan'} color="text-text" />
                <Title title={'Mitra Kerjasama'} />
                <Text text={'Kuliah di UNPAS, Pilihan Tepat dengan 100+ Mitra Kerjasama untuk Masa Depan Gemilang!'} color="text-black" />
                <SelengkapnyaButton onClick={() => window.location.href = '/mitra'} />
            </div>
            <div className="w-full md:w-[70%] relative">
                <div className="mitra-carousel-blur-mask">
                    <MitraCarousel datas={data} onCardClick={handleCardClick} />
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
                        <h2 className="text-xl font-bold mb-4">{selectedMitra ? selectedMitra.name : 'Detail Mitra'}</h2>
                        <p className="mb-4">
                            {selectedMitra ? selectedMitra.description : 'Ini adalah detail mitra kerjasama.'}
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