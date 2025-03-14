import { useEffect, useState } from "react";
import StatsSection from "../components/StatsSection";
import UserLayout from "./layouts/UserLayout";
import bgSection from '../assets/fakultas/bg.png';
import FakultasCard from "../components/fakultas/FakultasCard";
import Title from "../components/Title";
import MotionWrapper from "../components/MotionWrapper";
import CTASection from "../components/CTASection";
import FakultasService from "../fetching/fakultas";
import ProdiService from "../fetching/prodi";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";

const Fakultas = () => {
    const [fakultas, setFakultas] = useState([]);
    const [prodi, setProdi] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [fakultasData, prodiData] = await Promise.all([
                    FakultasService.getAllFakultas(),
                    ProdiService.getAllProdi(),
                ]);
                setFakultas(fakultasData);
                setProdi(prodiData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleClick = (item) => {
        navigate(`/program-studi/${item.slug}`);
    };

    const filteredProdi = prodi.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProdi.length / itemsPerPage);
    const paginatedProdi = filteredProdi.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout
            position={"block"}
            margin={"m-6"}
            shadow={"shadow-md"}
            titleColor={"text-black"}
            paddingDekstop={"md:py-3 md:px-3"}
        >
            <div className="relative p-4 md:px-10 lg:px-12 space-y-8 md:space-y-12 lg:space-y-20">
                <MotionWrapper
                    type="scaleUp"
                    delay={0.2}
                    style={{ backgroundImage: `url(${bgSection})` }}
                    className={"bg-left-top md:bg-cover bg-no-repeat"}
                >
                    <div className="text-gray-500 py-14">
                        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold">7 Pilihan</h2>
                        <h3 className="text-3xl md:text-6xl lg:text-7xl font-bold">Fakultas Terakreditasi</h3>
                    </div>
                </MotionWrapper>

                <StatsSection prodi={20} mahasiswa={5000} lulusan={1234} prestasi={14} />

                <MotionWrapper delay={0.2} className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"}>
                    {fakultas.map((item) => (
                        <FakultasCard key={item.id} image={item.image1} title={item.name} slug={item.slug} />
                    ))}
                </MotionWrapper>

                <MotionWrapper type="fadeInLeft" delay={0.2} className={"w-full space-y-4 md:space-y-6 lg:space-y-12"}>
                    <div className="flex justify-between items-center gap-4">
                        <Title title={"Program Studi"} />
                        <SearchInput placeholder="Cari program studi..." searchTerm={search} setSearchTerm={setSearch} />
                    </div>

                    {paginatedProdi.length > 0 ? (
                        <table className="w-full border-collapse text-xs md:text-sm">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-3 text-left">No</th>
                                    <th className="px-4 py-3 text-left">Program Studi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedProdi.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleClick(item)}
                                    >
                                        <td className="px-4 py-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td className="px-4 py-3">{item.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500 text-center mt-4">Program studi tidak ditemukan</p>
                    )}

                    {totalPages > 1 && (
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                    )}
                </MotionWrapper>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Fakultas;