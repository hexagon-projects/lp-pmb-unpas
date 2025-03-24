import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/gedung.jpeg"
import JalurCard from "../components/JalurCard";
import { TfiAnnouncement } from "react-icons/tfi";
import CTASection from "../components/CTASection";
import { useEffect, useState } from "react";
import RegistrasiService from "../fetching/registration";
import Loading from "../components/Loading";
import Button from "../components/Button";
import LogoText from "../components/LogoText";
import RichText from "../components/RichText";
import Text from "../components/Text";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Jalur = () => {
    const [jalur, setJalur] = useState([])
    // const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedJalur, setSelectedJalur] = useState(null);

    const handleOpenModal = (event, jalur) => {
        event.preventDefault();

        setSelectedJalur(jalur);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedJalur(null);
    };

    const fetchJalur = async () => {
        try {
            const response = await RegistrasiService.getAllRegistrasi()
            // setLoading(false)
            setJalur(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchJalur()
    }, [])

    // if (loading) {
    //     return <Loading />
    // }

    return (
        <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={0.5}>
        {/* <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={0.5}> */}
            <Helmet>
                <title>Jalur Pendaftaran - Universitas Pasundan</title>
            </Helmet>
            <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
                <div className={'w-full flex flex-col md:flex-row-reverse justify-between md:justify-center items-center gap-4 md:gap-4 lg:gap-20'}>
                    <div className="relative w-full jalur_container">
                        <div className="w-full h-52 md:h-64 lg:h-full jalur_box">
                            <img
                                src={Section1}
                                alt="Gedung Unpas"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent rounded-xl md:hidden"></div>
                        </div>
                        <div className="absolute top-4 left-4">
                            <LogoText titleColor="text-white" />
                        </div>
                    </div>

                    <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>
                    <div className="w-fit flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start gap-2 md:gap-4 lg:gap-6">
                        <h2 className="text-4xl md:text-6xl lg:text-9xl font-bold">{jalur.length}</h2>
                        <div className="space-y-1 md:space-y-2 lg:space-y-4">
                            <h3 className="text-xs md:text-base lg:text-3xl font-semibold text-gray-800">Jalur Masuk</h3>
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-text">
                                Universitas Pasundan.
                            </h2>
                            <div className="hidden md:flex">
                    {/* <div className="w-fit flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start">
                        <h2 className="text-[96px] font-bold">{jalur.length}</h2>
                        <div className="">
                            <h3 className="text-[26px] font-semibold text-gray-800">Jalur Masuk</h3>
                            <h2 className="text-[64px] font-bold text-text">
                                Universitas Pasundan.
                            </h2>
                            <div className="hidden md:flex pt-4"> */}
                                <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex md:hidden">
                        <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} border={'w-full justify-center'} rounded="rounded-full" />
                    </div>
                </div>

                <div type="zoomOut" delay={0.2} className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6'}>
                    {jalur.map((item, index) => (
                        <JalurCard
                            key={index}
                            icon={<TfiAnnouncement size={20} />}
                            title={item.name}
                            text={item.description}
                            link={item.link}
                            startDate={item.start_date}
                            endDate={item.end_date}
                            onClick={(e) => handleOpenModal(e, item)}
                        />
                    ))}

                    {isOpen && selectedJalur && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={handleCloseModal}>
                            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg space-y-3">
                                <div className="flex justify-between items-start gap-4">
                                    <h2 className="text-xl font-bold">{selectedJalur.name}</h2>
                                    <Button iconStatus="flex" icon={<X />} bgColor="bg-red-500" textColor="text-white" onClick={handleCloseModal} paddingMobile="p-2 md:p-2 lg:p-2" rounded="rounded-full" />
                                </div>
                                <RichText content={selectedJalur.content} />
                                <Text text={`Periode: ${selectedJalur.start_date} - ${selectedJalur.end_date}`} />
                                <div className="flex justify-start mt-4 gap-4">
                                    <Button text="Daftar Sekarang" bgColor="bg-primary" textColor="text-black" onClick={() => window.open(selectedJalur.link, "_blank")} />
                                    <Button text="Buku Panduan" bgColor="bg-gray-500" textColor="text-white" onClick={() => window.open(selectedJalur.link, "_blank")} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* <div type="zoomOut" delay={0.2} className={'w-full h-[50vh] bg-gray-200  rounded-md'}>

                </div> */}

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Jalur;