import { useEffect, useState } from "react";
import StatsSection from "../components/StatsSection";
import UserLayout from "./layouts/UserLayout";
<<<<<<< HEAD
import bgSection from '../assets/fakultas/bg.png';
=======
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
import FakultasCard from "../components/fakultas/FakultasCard";
import Title from "../components/Title";
import MotionWrapper from "../components/MotionWrapper";
import CTASection from "../components/CTASection";
import FakultasService from "../fetching/fakultas";
import ProdiService from "../fetching/prodi";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
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
=======
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import Logo from "../assets/logo-outline.png";
import Button from "../components/Button";
import LogoText from "../components/LogoText";
import { Helmet } from "react-helmet-async";
import { ThreeDot } from "react-loading-indicators";
import { motion } from "framer-motion";


const Fakultas = () => {
  const [fakultas, setFakultas] = useState([]);
  const [prodi, setProdi] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Tambahkan state loading
  const itemsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading sebelum memulai fetch
      try {
        const [fakultasData, prodiData] = await Promise.all([FakultasService.getAllFakultas(), ProdiService.getAllProdi()]);
        setFakultas(fakultasData);
        setProdi(prodiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading ke false setelah fetch selesai
      }
    };

    fetchData();
  }, []);

  const handleClick = (item) => {
    navigate(`/program-studi/${item.slug}`);
  };

  const filteredProdi = prodi.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const totalPages = Math.ceil(filteredProdi.length / itemsPerPage);
  const paginatedProdi = filteredProdi.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <UserLayout position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={"lg:pt-30"} type={"fadeInUp"} duration={1}>
      <Helmet>
        <title>Fakultas - Universitas Pasundan</title>
      </Helmet>

      <div className="relative p-4 md:px-10 lg:px-12 space-y-8 md:space-y-12 lg:space-y-20">
        <div className="relative">
          <div className="w-full fakultas_container">
            <div className="flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 bg-primary relative overflow-hidden fakultas_box lg:h-[55vh]">
              <div className="absolute -top-2 -right-30 md:-top-10 md:-right-40 -rotate-26 lg:-right-20 opacity-25">
                <img src={Logo} alt={"Logo Outline Unpas"} loading="lazy" className="h-[30vh] md:h-[45vh] lg:h-[70vh]" />
              </div>
              <div className="text-gray-800 py-14">
                <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold">7 Pilihan</h2>
                <h3 className="text-3xl md:text-6xl lg:text-7xl font-bold">Fakultas Terakreditasi</h3>
              </div>
              <div className="absolute top-4 left-4">
                <LogoText titleColor={"text-black"} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-10">
            <Button text={"Daftar Sekarang"} bgColor={"bg-primary"} hoverBgColor={"hover:border-3 hover:border-white/50"} onClick={() => (window.location.href = "/prestasi")} />
          </div>
        </div>

        <StatsSection prodi={20} mahasiswa={5000} lulusan={1234} prestasi={14} />
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <ThreeDot variant="bounce" color="#FEF251" size="medium" text="" textColor="" />
          </div>
        ) : (
          <>
            <MotionWrapper delay={0.2} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fakultas.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Delay 0.1s per item
                >
                  <FakultasCard image={item.image1} title={item.name} slug={item.slug} />
                </motion.div>
              ))}
            </MotionWrapper>

            <div className={"w-full space-y-4 md:space-y-6 lg:space-y-12"}>
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
                      <tr key={item.id} className="hover:bg-gray-100 transition-all duration-500 cursor-pointer" onClick={() => handleClick(item)}>
                        <td className="px-4 py-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td className="px-4 py-3">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500 text-center mt-4">Program studi tidak ditemukan</p>
              )}

              {totalPages > 1 && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}
            </div>
          </>
        )}

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Fakultas;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
