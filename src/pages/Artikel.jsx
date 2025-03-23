import { useState, useEffect } from "react";
import ArticleCard from "../components/artikel/ArticleCard";
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";
import MotionWrapper from "../components/MotionWrapper";
import BeritaService from "../fetching/berita";
import RichText from "../components/RichText";
import Loading from "../components/Loading";
import AgendaService from "../fetching/agenda";
import AgendaCard from "../components/artikel/AgendaCard";
import { useNavigate } from "react-router-dom";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";

const Artikel = () => {
    const [berita, setBerita] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [beritaData, agendaData] = await Promise.all([
                    BeritaService.getAllBerita(),
                    AgendaService.getAllAgenda(),
                ]);
                setBerita(beritaData);
                setAgenda(agendaData);
            } catch (error) {
                console.error(error);
            } 
        };
        fetchData();
    }, []);

    const filteredBerita = berita.filter(({ title, description }) =>
        [title, description].some(text => text.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBerita.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredBerita.length / itemsPerPage);
    const latestBerita = berita[0] || null;

    const handleClick = (slug) => {
        navigate(`/artikel/${slug}`)
    }

    // if (loading) return <Loading />;

    return (
        <UserLayout position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}>
            <Helmet>
                <title>Artikel - Universitas Pasundan</title>
            </Helmet>
            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                {latestBerita ? (
                    <MotionWrapper
                        type="zoomIn"
                        delay={0.2}
<<<<<<< HEAD
                        className="w-full bg-cover h-[40vh] rounded-lg md:rounded-2xl lg:rounded-4xl"
=======
                        className="w-full bg-cover h-[75vh] rounded-lg md:rounded-2xl lg:rounded-4xl"
>>>>>>> origin/Radh
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL}/posts/${latestBerita.image})` }}
                        onClick={() => handleClick(latestBerita.slug)}
                    >
                        <div className="w-full h-full flex flex-col justify-between items-start p-4 md:p-6 lg:p-12">
                            <div></div>
                            <div className="space-y-2">
                                <Title sizeMobile="text-lg" title={latestBerita.title} color="text-white" />
                                <RichText content={latestBerita.description} lineclamp="line-clamp-2" textColor="text-white" />
                            </div>
                        </div>
                    </MotionWrapper>
                ) : (
                    <div className="text-center text-gray-500">Belum ada artikel tersedia</div>
                )}

                <div className="w-full space-y-3 md:space-y-4">
                    <div className="w-full flex justify-between items-center">
                        <Title sizeMobile="w-full text-base" title="Artikel" />
                        <SearchInput placeholder="Cari Artikel" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </div>

                    {currentItems.length > 0 ? (
                        <>
                            <ArticleCard data={currentItems} />
                            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                        </>
                    ) : (
                        <div className="text-center text-gray-500">Belum ada artikel yang ditemukan</div>
                    )}
                </div>

<<<<<<< HEAD
                <div className="w-full space-y-3 md:space-y-4">
=======
                {/* <div className="w-full space-y-3 md:space-y-4">
>>>>>>> origin/Radh
                    <div className="w-full flex justify-between items-center">
                        <Title sizeMobile="w-full text-base" title="Agenda" />
                    </div>
                    {agenda.length > 0 ? <AgendaCard data={agenda} /> : <div className="text-center text-gray-500">Belum ada agenda tersedia</div>}
<<<<<<< HEAD
                </div>
=======
                </div> */}
>>>>>>> origin/Radh

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Artikel;