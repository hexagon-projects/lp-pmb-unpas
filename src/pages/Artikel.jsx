import { useState, useEffect } from "react";
import ArticleCard from "../components/artikel/ArticleCard";
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";
import MotionWrapper from "../components/MotionWrapper";
import BeritaService from "../fetching/berita";
import RichText from "../components/RichText";
import AgendaService from "../fetching/agenda";
import { useNavigate } from "react-router-dom";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";
import ArticleContent from "../components/ArticleContent";

const Artikel = () => {
    const [berita, setBerita] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const navigate = useNavigate();
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [isMobile, setIsMobile] = useState(false);

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

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const latestBerita = berita[0] || null;

    // Hapus artikel terbaru dari daftar jika ada
    const filteredBerita = berita
        .filter(({ title, description, slug }) =>
            [title, description].some((text) =>
                text.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        .filter((item) => item.slug !== latestBerita?.slug); // Filter artikel yang sama

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBerita.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredBerita.length / itemsPerPage);

    const handleClick = (slug) => {
        navigate(`/artikel/${slug}`);
    };

    const stripHtmlTags = (text) => {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
    };

    return (
        <UserLayout
            bgLayoutColor="bg-[#F3F4F4]"
            bgColor={"bg-[#F3F3F3]"}
            position={"fixed"}
            margin={""}
            titleColor={"text-black"}
            paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
            paddingTop={"lg:pt-30"}
            type={"fadeInUp"}
            duration={0.5}
        >
            <Helmet>
                <title>Artikel - Universitas Pasundan</title>
            </Helmet>
            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-16">
                {/* === Artikel Terbaru === */}
                {latestBerita && (
                    <MotionWrapper
                        type="zoomIn"
                        delay={0.2}
                        className="w-full lg:hidden bg-cover h-[40vh] lg:h-[80vh] rounded-xl md:rounded-2xl lg:rounded-4xl"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL}/posts/${latestBerita.image})`,
                        }}
                        onClick={() => handleClick(latestBerita.slug)}
                    >
                        <div className="w-full h-full flex flex-col justify-between items-start p-4 md:p-6 lg:p-12">
                            <div></div>
                            <div className="space-y-2">
                                <Title
                                    sizeMobile="text-lg"
                                    title={latestBerita.title}
                                    color="text-white"
                                />
                                <RichText
                                    content={latestBerita.description}
                                    lineclamp="line-clamp-2"
                                    textColor="text-white"
                                />
                            </div>
                        </div>
                    </MotionWrapper>
                )}

                {latestBerita && !isMobile && (
                    <div className="hidden lg:block">
                        <ArticleContent
                            title={latestBerita.title}
                            image={`${imageURL}/posts/${latestBerita.image}`}
                            description={stripHtmlTags(latestBerita.content)}
                            slug={latestBerita.slug}
                        />
                    </div>
                )}

                {/* === Daftar Artikel === */}
                <div className="w-full space-y-3 md:space-y-4">
                    <div className="w-full flex justify-between items-center">
                        <Title sizeMobile="w-full text-base" title="Artikel Terkait" />
                        <SearchInput
                            placeholder="Cari Artikel"
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            widthMobile="w-1/2"
                        />
                    </div>

                    {currentItems.length > 0 ? (
                        <>
                            <ArticleCard data={currentItems} />
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                            />
                        </>
                    ) : (
                        <div className="text-center text-gray-500">
                            Belum ada artikel yang ditemukan
                        </div>
                    )}
                </div>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Artikel;