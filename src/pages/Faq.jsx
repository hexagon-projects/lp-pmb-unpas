import { useEffect, useState } from "react";
import Text from "../components/Text";
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../components/Button";
import FaqService from "../fetching/faq";
import Loading from "../components/Loading";
import CTASection from "../components/CTASection";
import Section1 from "../assets/gedung.jpeg";
import { Helmet } from "react-helmet-async";
import IdentityService from "../fetching/identity";

const Faq = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);
    const [identityLoading, setIdentityLoading] = useState(true);
    const [searchTermGeneral, setSearchTermGeneral] = useState("");
    const [searchTermBilling, setSearchTermBilling] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    // const [formData, setFormData] = useState({
    //     email: "",
    //     phone: "",
    //     message: ""
    // });
    const [openGeneralId, setOpenGeneralId] = useState(null);
    const [openBillingId, setOpenBillingId] = useState(null);
    const itemsPerPage = 3;

    const fetchFaqs = async () => {
        try {
            const response = await FaqService.getAllFaqs();
            setFaqs(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching FAQs:", error);
            setLoading(false);
        }
    };

    const fetchIdentity = async () => {
        try {
            const response = await IdentityService.getAllIdentities();
            if (response.length > 0) {
                setIdentity(response[0]);
            }
            setIdentityLoading(false);
        } catch (error) {
            console.error("Error fetching identity:", error);
            setIdentityLoading(false);
        }
    };

    useEffect(() => {
        fetchFaqs();
        fetchIdentity();
    }, []);

    // const handleInputChange = (e) => {
    //     const { id, value } = e.target;
    //     setFormData(prev => ({
    //         ...prev,
    //         [id]: value
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!identity?.phone) {
    //         alert("Nomor WhatsApp admin tidak tersedia.");
    //         return;
    //     }

    //     const { email, phone, message } = formData;
    //     const whatsappMessage = `Halo Admin PMB Unpas,\n\nSaya ingin bertanya tentang:\n${message}\n\nKontak saya:\nEmail: ${email}\nTelepon: ${phone ? '+62' + phone : '-'}\n\nTerima kasih.`;
    //     const encodedMessage = encodeURIComponent(whatsappMessage);
    //     window.open(`https://wa.me/${identity.phone}?text=${encodedMessage}`, '_blank');
    // };

    const filteredGeneralFaqs = faqs.filter(
        (faq) =>
            faq.id_kategori === 6 &&
            faq.title.toLowerCase().includes(searchTermGeneral.toLowerCase())
    );

    const filteredBillingFaqs = faqs.filter(
        (faq) =>
            faq.id_kategori === 4 &&
            faq.title.toLowerCase().includes(searchTermBilling.toLowerCase())
    );

    const totalPagesGeneral = Math.ceil(filteredGeneralFaqs.length / itemsPerPage);
    const paginatedGeneralFaqs = filteredGeneralFaqs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPagesBilling = Math.ceil(filteredBillingFaqs.length / itemsPerPage);
    const paginatedBillingFaqs = filteredBillingFaqs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const toggleGeneralDropdown = (id) => {
        setOpenGeneralId(openGeneralId === id ? null : id);
    };

    const toggleBillingDropdown = (id) => {
        setOpenBillingId(openBillingId === id ? null : id);
    };

    if (loading || identityLoading) {
        return <Loading />;
    }

    return (
        <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={0.5}>
            <Helmet>
                <title>FAQ - Universitas Pasundan</title>
            </Helmet>
            <div className="p-5 md:p-10 lg:p-15 space-y-8 md:space-y-12 lg:space-y-16">
                <div className="relative h-[30vh] lg:h-[70vh] p-5 md:px-10 lg:px-15 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-start bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${Section1})` }}>

                    <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>

                    <div className="relative z-">
                        <Text text={"Bantuan"} color="text-white" />
                        <Title title={"Frequently Asked Questions"} color="text-white" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
                    <div className="w-full space-y-3 text-center md:text-left">
                        <Title title={`Jadwal Umum PMB`} />
                        <Text text={"Pertanyaan-pertanyaan umum seputar PMB"} />
                    </div>
                    <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
                        <SearchInput
                            placeholder={'Cari FAQ Umum...'}
                            searchTerm={searchTermGeneral}
                            setSearchTerm={setSearchTermGeneral}
                            widthDekstop="w-full"
                        />

                        {paginatedGeneralFaqs.length > 0 ? (
                            paginatedGeneralFaqs.map((faq) => (
                                <div key={faq.id} className="w-full shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg p-4 cursor-pointer" onClick={() => toggleGeneralDropdown(faq.id)}>
                                    <button
                                        className="w-full flex justify-between items-center text-left font-semibold text-xs md:text-sm lg:text-base cursor-pointer"
                                        onClick={() => toggleGeneralDropdown(faq.id)}
                                    >
                                        {faq.title}
                                        <span className={`transform transition-transform duration-500 ${openGeneralId === faq.id ? "rotate-180" : "rotate-0"}`}>
                                            <IoIosArrowDown />
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openGeneralId === faq.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <div
                                            className="mt-2 text-xs md:text-sm lg:text-base text-gray-600"
                                            dangerouslySetInnerHTML={{ __html: faq.description }}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500">Tidak ada FAQ ditemukan.</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
                    <div className="w-full space-y-3 text-center md:text-left">
                        <Title title={`Pembayaran`} />
                        <Text text={"Pertanyaan-pertanyaan mengenai pembayaran"} />
                    </div>
                    <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
                        <SearchInput
                            placeholder={'Cari FAQ Billing...'}
                            searchTerm={searchTermBilling}
                            setSearchTerm={setSearchTermBilling}
                            widthDekstop="w-full"
                        />

                        {paginatedBillingFaqs.length > 0 ? (
                            paginatedBillingFaqs.map((faq) => (
                                <div key={faq.id} className="w-full shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg p-4 cursor-pointer" onClick={() => toggleBillingDropdown(faq.id)}>
                                    <button
                                        className="w-full flex justify-between items-center text-left font-semibold text-xs md:text-sm lg:text-base cursor-pointer"
                                        onClick={() => toggleBillingDropdown(faq.id)}
                                    >
                                        {faq.title}
                                        <span className={`transform transition-transform duration-500 ${openBillingId === faq.id ? "rotate-180" : "rotate-0"}`}>
                                            <IoIosArrowDown />
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openBillingId === faq.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <div
                                            className="mt-2 text-xs md:text-sm lg:text-base text-gray-600"
                                            dangerouslySetInnerHTML={{ __html: faq.description }}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500">Tidak ada FAQ ditemukan.</p>
                        )}
                    </div>
                </div>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Faq;