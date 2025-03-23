import { useState, useEffect } from "react";
import ArticleCard from "../components/artikel/ArticleCard";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Text from "../components/Text";
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
import bgSection from "../assets/home/section1ori.jpeg";
=======
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
>>>>>>> 8bbe4dc (First Commit)
=======
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
>>>>>>> origin/Budi
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";
import MotionWrapper from "../components/MotionWrapper";
import BeritaService from "../fetching/berita";
import RichText from "../components/RichText";
import Loading from "../components/Loading";
import AgendaService from "../fetching/agenda";
import AgendaCard from "../components/artikel/AgendaCard";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
import { useNavigate } from "react-router-dom";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";
>>>>>>> 8bbe4dc (First Commit)
=======
import { useNavigate } from "react-router-dom";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/Budi

const Artikel = () => {
    const [berita, setBerita] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const [itemsPerPage] = useState(5);
    const [loading, setLoading] = useState(true)
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const fetchArticle = async () => {
        try {
            const response = await BeritaService.getAllBerita();
            setBerita(response);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAgenda = async () => {
        try {
            const response = await AgendaService.getAllAgenda();
            console.log(agenda)
            setAgenda(response);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchArticle();
        fetchAgenda()
    }, []);

    const filteredBerita = berita.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBerita.slice(indexOfFirstItem, indexOfLastItem);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    const totalPages = Math.ceil(filteredBerita.length / itemsPerPage);

    const latestBerita = berita.slice(0, 1);

    if (loading) {
        return <Loading />
    }

    return (
        <UserLayout position={'block'} margin={'m-6'} shadow={'shadow-md'} titleColor={'text-black'}>
            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <MotionWrapper type={'zoomIn'} delay={0.2} className={'w-full bg-cover h-[40vh] rounded-lg md:rounded-2xl lg:rounded-4xl'} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageURL}/posts/${latestBerita[0]?.image})` }}>
                    <div className="w-full h-full flex flex-col justify-between items-start p-4 md:p-6 lg:p-12">
                        <div></div>
                        <div className="space-y-2">
                            <Title sizeMobile="text-lg" title={latestBerita[0].title} color="text-white" />
                            <RichText content={latestBerita[0].description} lineclamp={'line-clamp-2'} textColor="text-white" />
                        </div>
                    </div>
                </MotionWrapper>

                <div className="w-full space-y-3 md:space-y-4">
                    <div className="w-full flex justify-between items-center">
                        <Title sizeMobile="w-full text-base" title={'Artikel'} />
                        <SearchInput
                            placeholder={'Cari Artikel'}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>
                    <ArticleCard data={currentItems} />
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
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
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
                </div>

                <div className="w-full space-y-3 md:space-y-4">
                    <div className="w-full flex justify-between items-center">
<<<<<<< HEAD
                        <Title sizeMobile="w-full text-base" title={'Agenda'} />
                        {/* <SearchInput
                            placeholder={'Cari Artikel'}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        /> */}
                    </div>
                    <AgendaCard data={agenda} />
                    {/* <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    /> */}
                </div>
=======
                        <Title sizeMobile="w-full text-base" title="Agenda" />
                    </div>
                    {agenda.length > 0 ? <AgendaCard data={agenda} /> : <div className="text-center text-gray-500">Belum ada agenda tersedia</div>}
                </div>

                <CTASection />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                </div>

                {/* <div className="w-full space-y-3 md:space-y-4">
=======
                </div>

<<<<<<< HEAD
                <div className="w-full space-y-3 md:space-y-4">
=======
                {/* <div className="w-full space-y-3 md:space-y-4">
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                    <div className="w-full flex justify-between items-center">
                        <Title sizeMobile="w-full text-base" title="Agenda" />
                    </div>
                    {agenda.length > 0 ? <AgendaCard data={agenda} /> : <div className="text-center text-gray-500">Belum ada agenda tersedia</div>}
<<<<<<< HEAD
                </div> */}

                <CTASection />
>>>>>>> 8bbe4dc (First Commit)
=======
<<<<<<< HEAD
                </div>
=======
                </div> */}
>>>>>>> origin/Radh

                <CTASection />
>>>>>>> origin/Budi
            </div>
        </UserLayout>
    );
};

export default Artikel;