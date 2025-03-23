import { useEffect, useState } from "react";
import CTASection from "../components/CTASection";
import Text from "../components/Text";
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
import Loading from "../components/Loading";
import PartnerService from "../fetching/partner";
import MitraCard from "../components/mitra/MitraCard";
import Section1 from "../assets/gedung.jpeg";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import RichText from "../components/RichText";
import { X } from "lucide-react";

const Mitra = () => {
    const [partners, setPartners] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const partnersPerPage = 6;
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const fetchPartners = async () => {
        try {
            const response = await PartnerService.getAllPartner();
            setPartners(response);
            // setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPartners();
    }, []);

    const openModal = (partner) => {
        setSelectedPartner(partner);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPartner(null);
    };

    // if (loading) {
    //     return <Loading />;
    // }

    const indexOfLastPartner = currentPage * partnersPerPage;
    const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
    const currentPartners = partners.slice(indexOfFirstPartner, indexOfLastPartner);
    const totalPages = Math.ceil(partners.length / partnersPerPage);

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={0.5}>
            <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
                <div className="w-full mitra_container">
                    <div className="w-full h-42 md:h-60 lg:h-80 mitra_box">
                        <img
                            src={Section1}
                            alt="Mitra Unpas"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-10">
                    <div className="space-y-4 text-center">
                        <Title title={'Mitra'} />
                        <Text text={'Kuliah di UNPAS, Pilihan Tepat dengan 100+ Mitra Kerjasama untuk Masa Depan Gemilang!'} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentPartners.map((partner, index) => (
                            <MitraCard
                                key={index}
                                image={partner.image}
                                title={partner.name}
                                description={partner.description}
                                linkWeb={partner.web ?? ''}
                                onClick={() => openModal(partner)}
                            />
                        ))}
                    </div>

                    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

                <CTASection />

                {isModalOpen && selectedPartner && (
                    <Modal onClose={closeModal}>
                        <div className="p-6 space-y-4">
                            <div className="w-full flex justify-end">
                                <button className="w-fit flex items-end bg-red-500 text-white p-2 rounded-full cursor-pointer" onClick={closeModal}>
                                    <X size={20} />
                                </button>
                            </div>
                            <img
                                src={`${imageURL}/partners/${selectedPartner.image}`}
                                alt={selectedPartner.name}
                                className="w-full h-48 object-cover object-center rounded-lg md:rounded-2xl lg:rounded-4xl"
                            />
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold">{selectedPartner.name}</h2>
                                <RichText content={selectedPartner.description} />
                                <RichText content={selectedPartner.program_desc}/>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </UserLayout>
    );
};

export default Mitra;