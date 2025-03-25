import { useEffect, useState } from "react";
import PrestasiCard from "../components/PrestasiCard";
import UserLayout from "./layouts/UserLayout";
import PrestasiService from "../fetching/prestasi";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import Title from "../components/Title";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";

const Prestasi = () => {
    const [prestasi, setPrestasi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchPrestasi = async () => {
            try {
                const response = await PrestasiService.getAllPrestasi();
                setPrestasi(response);
                // setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPrestasi();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const filteredPrestasi = prestasi.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPrestasi.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const slicePrestasi = prestasi?.slice(0, 1)
    const currentPrestasi = filteredPrestasi.slice(startIndex, startIndex + itemsPerPage);

    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}>
        {/* <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}> */}
            <Helmet>
                <title>Prestasi - Universitas Pasundan</title>
            </Helmet>
            <div className="p-4 md:p-6 lg:p-12 space-y-6 md:space-y-8 lg:space-y-20">
                {slicePrestasi.length > 0 && (
                    <div className="w-full h-full space-y-4 md:space-y-6 lg:space-y-12">
                        <div className="w-full h-full md:h-[40vh] lg:h-[70vh]">
                            <img src={`${imageURL}/prestasis/${slicePrestasi[0].image}`} alt="" className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl object-cover" />
                        </div>
                        <Title title={slicePrestasi[0].title} />
                    </div>
                )}

                <div className="space-y-4 md:space-y-6 lg:space-y-12 pb-6">
                    <div className="flex justify-between items-center w-full gap-4">
                        <Title sizeText="text-lg md:text-xl lg:text-3xl" fontWeight="font-semibold" title={'Prestasi'} />
                        <SearchInput placeholder="Cari prestasi..." searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {currentPrestasi.length > 0 ? (
                                currentPrestasi.map((prestasi) => (
                                    <PrestasiCard key={prestasi.id} image={prestasi.image} title={prestasi.title} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500">Tidak ada prestasi ditemukan.</p>
                            )}
                        </div>
                    </div>

                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    )}
                </div>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Prestasi;