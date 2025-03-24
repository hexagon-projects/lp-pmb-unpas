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
import Section1 from "../assets/gedung.jpeg"
import { Helmet } from "react-helmet-async";

const Faq = () => {
    const [faqs, setFaqs] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTermGeneral, setSearchTermGeneral] = useState("");
    const [searchTermBilling, setSearchTermBilling] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const fetchFaqs = async () => {
        try {
            const response = await FaqService.getAllFaqs();
            setFaqs(response.data.data);
            // setLoading(false);
        } catch (error) {
            console.error("Error fetching FAQs:", error);
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    const filteredGeneralFaqs = faqs.filter(
        (faq) =>
            faq.id_kategori === 5 &&
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

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}>
        {/* <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}> */}
            <Helmet>
                <title>FAQ - Universitas Pasundan</title>
            </Helmet>
            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <div className="relative h-[70vh] p-4 md:px-10 lg:px-12 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-start bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${Section1})` }}>

                    <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>

                    <div className="relative z-10">
                        <Text text={"Bantuan"} />
                        <Title title={"Frequently Asked Questions"} />
                {/* <div className="relative h-[70vh] p-4 md:px-10 lg:px-12 rounded-lg md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-start bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${Section1})` }}>

                    <div className="absolute inset-0 bg-black/30 rounded-lg md:rounded-2xl lg:rounded-4xl"></div>

                    <div className="relative z-10">
                        <Text text={"Bantuan"} color="text-white" />
                        <Title title={"Frequently Asked Questions"} color="text-white" /> */}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="w-full space-y-3 text-center md:text-left">
                        <Title title={`General FAQ's`} />
                        <Text text={"Pertanyaan-pertanyaan umum"} />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <SearchInput
                            placeholder={'Cari FAQ Umum...'}
                            searchTerm={searchTermGeneral}
                            setSearchTerm={setSearchTermGeneral}
                            widthDekstop="w-full"
                        />

                        {paginatedGeneralFaqs.length > 0 ? (
                            paginatedGeneralFaqs.map((faq, index) => (
                                <div key={faq.id} className="w-full shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg p-4">
                                {/* <div key={faq.id} className="w-full shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg p-4"> */}
                                    <button
                                        className="w-full flex justify-between items-center text-left font-semibold text-xs md:text-sm lg:text-base"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {faq.title}
                                        <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                            <IoIosArrowDown />
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <div
                                            className="mt-2 text-xs md:text-sm lg:text-base text-gray-600"
                                            dangerouslySetInnerHTML={{ __html: faq.description }}
                                        />
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500">Tidak ada FAQ ditemukan.</p>
                        )}

                        <Pagination currentPage={currentPage} totalPages={totalPagesGeneral} setCurrentPage={setCurrentPage} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="w-full space-y-3 text-center md:text-left">
                        <Title title={`Billing FAQ's`} />
                        <Text text={"Pertanyaan-pertanyaan mengenai pembayaran"} />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <SearchInput
                            placeholder={'Cari FAQ Billing...'}
                            searchTerm={searchTermBilling}
                            setSearchTerm={setSearchTermBilling}
                            widthDekstop="w-full"
                        />

                        {paginatedBillingFaqs.length > 0 ? (
                            paginatedBillingFaqs.map((faq, index) => (
                                <div key={faq.id} className="w-full shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg p-4">
                                {/* <div key={faq.id} className="w-full shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg p-4"> */}
                                    <button
                                        className="w-full flex justify-between items-center text-left font-semibold text-xs md:text-sm lg:text-base"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {faq.title}
                                        <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                            <IoIosArrowDown />
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <div
                                            className="mt-2 text-xs md:text-sm lg:text-base text-gray-600"
                                            dangerouslySetInnerHTML={{ __html: faq.description }}
                                        />
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-xs md:text-sm lg:text-base text-gray-500">Tidak ada FAQ ditemukan.</p>
                        )}

                        <Pagination currentPage={currentPage} totalPages={totalPagesBilling} setCurrentPage={setCurrentPage} />
                    </div>
                </div>

                <div className={'bg-primary p-4 md:p-10 lg:p-12 rounded-lg shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] text-black space-y-3 md:space-y-4'}>
                {/* <div className={'bg-primary p-4 md:p-10 lg:p-12 rounded-2xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] text-black space-y-3 md:space-y-4'}> */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold">Masih Punya Pertanyaan?</h2>
                        <p className="text-xs md:text-sm lg:text-base">Hubungi kami </p>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs md:text-sm lg:text-base font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full text-xs md:text-sm lg:text-base p-4 bg-white rounded-lg mt-1"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-xs md:text-sm lg:text-base font-medium">Phone</label>
                        <div className="flex items-center">
                            <span className="p-4 text-xs md:text-sm lg:text-base bg-gray-200 rounded-l-md">+62</span>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full text-xs md:text-sm lg:text-base p-4 bg-white rounded-r-md"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    <p className="mt-2 text-xs md:text-sm lg:text-base font-semibold">Jam Operasional 08:00 WIB - 16:00 WIB</p>

                    <Button text={'Hubungi Kami'} bgColor={'bg-green-800'} hoverColor={'hover:bg-green-900'} textColor={'text-white'} hoverBgColor={'hover:border-3 hover:border-white/50'} />
                </div>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Faq;