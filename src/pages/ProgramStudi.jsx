import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Title from "../components/Title";
import Text from "../components/Text";
import ButtonArrow from "../components/ButtonArrow";
import StatsSection from "../components/StatsSection";
import PrestasiSection from "../components/prodi/PrestasiSection";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import TestimonialSlider from "../components/TestimonialSlider";
import AktivitasMahasiswa from "../components/prodi/AktivitasMahasiswa";
import FasilitasSlider from "../components/prodi/FasilitasSlider";
import DosenCard from "../components/prodi/DosenCard";
import RichText from "../components/RichText";
import bgSection from "../assets/home/section1ori.jpeg";
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
import ProdiService from "../fetching/prodi";
import Loading from "../components/Loading";
import GalleryService from "../fetching/galery";
import MitraSection from "../views/home/MitraSection";
import { X } from "lucide-react";
import HighlightCard from "../components/fakultas/HighlightCard";
import Pagination from "../components/Pagination";
import LogoText from "../components/LogoText";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import TestimonialSection from "../views/home/TestimonialSection";

const ProgramStudi = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(6);
            } else {
                setItemsPerPage(4);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => {
            window.removeEventListener("resize", updateItemsPerPage);
        };
    }, []);

    const [data, setData] = useState({
        partner: [],
        testimonials: [],
        berita: [],
        prestasi: [],
        prodi: null,
        gallery: [],
    });

    const fetchData = useCallback(async () => {
        if (!slug) return;

        try {
            const [partners, testimonials, berita, prestasi, prodi, gallery] = await Promise.all([
                PartnerService.getAllPartner(),
                TestimoniService.getAllTestimoni(),
                BeritaService.getAllBerita(),
                PrestasiService.getPrestasiProdi(slug),
                ProdiService.getProdiBySlug(slug),
                GalleryService.getAllGallery(),
            ]);

            setData({ partner: partners, testimonials: testimonials.slice(0, 5), berita, prestasi, prodi, gallery });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const { partner, testimonials, berita, prestasi, prodi, gallery } = data;
    const latestBerita = berita.slice(0, 4);
    const latestActivity = gallery?.slice(0, 4);
    const fakultas = prodi?.departement || {};
    const unggulan = prodi?.unggulan || [];
    const ourteam = prodi?.ourteam || [];
    const fasilitas = prodi?.fasilitas || [];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ourteam.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(ourteam.length / itemsPerPage);

    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'}>
            <div className="p-4 md:p-6 lg:p-12 space-y-14 md:space-y-16 lg:space-y-20">

                <div className="relative">
                    <div className="w-full prodi_container">
                        <div
                            className={`flex flex-col justify-center bg-cover bg-no-repeat rounded-xl md:rounded-2xl lg:rounded-4xl p-4 md:p-6 lg:p-8 relative overflow-hidden space-y-3 h-fit lg:h-[55vh] prodi_box`}
                            style={{ backgroundImage: `url(${fakultas.image1 ? `${imageURL}/programs/${fakultas.image1}` : Gedung})` }}>
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
                            <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                    </filter>
                                </defs>
                            </svg>

                            <div className="relative z-10 w-full h-[40vh] flex flex-col justify-center items-start gap-4">
                                <Title color="text-white" title={`Selamat Datang di Program Studi ${fakultas.name}`} />
                                <RichText textColor="text-white" lineclamp={'line-clamp-4 md:line-clamp-5 lg:line-clamp-8'} content={fakultas.description1} />
                            </div>

                            <div className="absolute top-4 left-4 z-10">
                                <LogoText titleColor={'text-white'} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 z-20">
                        <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} hoverBgColor={'hover:border-3 hover:border-white/50'} />
                    </div>
                </div>

                <StatsSection colorIcon={'text-blue-500'} title1="Karya Ilmiah" prodi={fakultas.periode} mahasiswa={fakultas.age} lulusan={fakultas.weekly} prestasi={fakultas.class_size} />

                <div className={'w-full flex justify-around items-center'}>
                    <div className={'w-full lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-around items-center gap-4'}>
                        <div className="w-full lg:w-1/2 h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="relative w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${fakultas.id_yt}/hqdefault.jpg`}
                                    alt="Thumbnail Video"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex justify-center items-center ">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 22v-20l18 10-18 10z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="w-full md:w-fit space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center items-start text-justify md:items-start md:text-left">
                            <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
                                <Title title={'Visi dan Misi'} />
                                <RichText content={`${fakultas.description2}`} />
                            </div>
                            <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} hoverBgColor={'hover:border-3 hover:border-white/50'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                        </div>
                    </div>
                </div>

                <div className={'space-y-4 md:space-y-6 lg:space-y-8'}>
                    <div className="text-center">
                        <Title title={'Dosen Penelitian'} />
                    </div>
                    {ourteam && ourteam.length > 0 ? (
                        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
                            {currentItems.map((member, index) => (
                                <div key={index}>
                                    <DosenCard name={member.name} title={member.title} image={member.image} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-6">
                            <Text text={'Tidak ada data dosen yang tersedia.'} color="text-gray-500" />
                        </div>
                    )}
                    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

                <FasilitasSlider title={'Fasilitas & Inovasi'} facilities={fasilitas} />

                <div className={'space-y-4 md:space-y-6 lg:space-y-8'}>
                    {prestasi.data && prestasi.data.length > 0 ? (
                        <PrestasiSection prestasi={prestasi.data} />
                    ) : (
                        <div className="text-center py-6">
                            <Text text={'Tidak ada data prestasi yang tersedia.'} color="text-gray-500" />
                        </div>
                    )}
                </div>

                <AktivitasMahasiswa data={latestActivity} />

                <div className="w-full flex flex-row jusity-between items-center gap-4">
                    <div className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-10'}>
                        <MitraSection data={partner} />
                    </div>
                </div>

                <div>
                    <div className="text-center md:text-left space-y-4 md:space-y-6 lg:space-y-8">
                        <Title title={'Berita Terbaru'} />
                        {latestBerita && latestBerita.length > 0 ? (
                            <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                                <div className="md:w-1/2 lg:w-full">
                                    <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} />
                                </div>
                                <div className="md:w-1/2 flex flex-col gap-4">
                                    <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} />
                                    <div className="w-full flex flex-col md:flex-row gap-4">
                                        <div className="md:w-1/2">
                                            <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} />
                                        </div>
                                        <div className="md:w-1/2">
                                            <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <Text text={'Tidak ada data berita yang tersedia.'} color="text-gray-500" />
                            </div>
                        )}
                    </div>
                </div>

                <TestimonialSection data={data?.testimonials} displayDekstop="md:flex-col" />

                <CTASection onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} color={'bg-blue-500'} />

                {/* <div className={'w-full flex justify-around items-center'}>
                    <div className="w-full lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        <div className="w-full lg:w-[40%] text-left space-y-8">
                            <Title sizeMobile="text-2xl md:text-4xl lg:text-6xl" title={'Mengapa Memilih Program Ini'} />
                            <div className="hidden lg:block">
                                <ButtonArrow text={'Baca Selengkapnya'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                            </div>
                        </div>
                        {unggulan && unggulan.length > 0 ? (
                            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
                                {unggulan.map((item, index) => (
                                    <HighlightCard key={index} title={item.title} text={item.description} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-6">
                                <Text text={'Tidak ada data unggulan yang tersedia.'} color="text-gray-500" />
                            </div>
                        )}
                    </div>
                </div> */}

                {/* <div className={'space-y-4 md:space-y-6 lg:space-y-8 pb-80 md:pb-56 lg:pb-20'}>
                    <div className="relative">
                        <div className="w-full flex justify-center gap-4 md:gap-6 lg:gap-10">
                            <div className="w-1/2">
                                <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl" />
                            </div>
                            <div className="w-1/2">
                                <div className="text-left">
                                    <Text text={'Testimoni'} color="text-red-500" />
                                    <span>
                                        <Title sizeMobile="text-base" title={'Apa Kata Mereka Soal'} />
                                        <Title sizeMobile="text-base" color="text-blue-500" title={'Unpas?'} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-90 sm:-bottom-65 -right-2 max-w-xs md:-bottom-70 md:right-20 md:max-w-sm lg:-bottom-40 lg:right-0 lg:max-w-4xl xl:-bottom-25 xl:right-10 xl:max-w-5xl z-40 mb-10">
                            {testimonials && testimonials.length > 0 ? (
                                <TestimonialSlider data={testimonials} bgColor={'bg-white'} textColor={'text-gray-700'} arrowColor={'text-blue-500'} cssBox={''} cssContainer={''} iconVisibililty={'hidden'} borderColor={'border-blue-500'} bgColorPagination={'bg-blue-500'} />
                            ) : (
                                <div className="text-center py-6">
                                    <Text text={'Tidak ada data testimoni yang tersedia.'} color="text-gray-500" />
                                </div>
                            )}
                        </div>
                    </div>
                </div> */}

                {/* <div className={'space-y-4 md:space-y-6 lg:space-y-8'}>
                    <div className="w-full flex justify-center items-center gap-4 p-4 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl">
                        <div className="w-1/2 text-left space-y-4 md:space-y-6 lg:space-y-8">
                            <Text text={'Penerimaan Mahasiswa Baru'} color="text-red-500" />
                            <Title sizeMobile="text-base" title={'Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!'} />
                            <ButtonArrow text={fakultas?.cta ?? 'Daftar'} onClick={() => fakultas?.link_program && (window.location.href = fakultas.link_program)} />
                        </div>
                        <div className="w-1/2 h-full bg-gray-200">
                            <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl" />
                        </div>
                    </div>
                </div> */}

                {isOpen && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50" onClick={() => setIsOpen(false)}>
                        <div className="relative p-4 rounded-xl md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
                            >
                                <X size={20} />
                            </button>

                            <iframe
                                className="w-full aspect-video rounded-xl md:rounded-2xl lg:rounded-4xl"
                                src={`https://www.youtube.com/embed/${fakultas.id_yt}`}
                                title="Kisah Alumni"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </UserLayout>
    );
};

export default ProgramStudi;