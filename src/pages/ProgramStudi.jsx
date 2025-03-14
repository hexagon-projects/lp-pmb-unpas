import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";

import UserLayout from "./layouts/UserLayout";
import MotionWrapper from "../components/MotionWrapper";
import Title from "../components/Title";
import Text from "../components/Text";
import ButtonArrow from "../components/ButtonArrow";
import StatsSection from "../components/StatsSection";
import PrestasiSection from "../components/prodi/PrestasiSection";
import AdvantageItem from "../components/prodi/AdvantageItem";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import MitraCarousel from "../components/MitraCarousel";
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

const ProgramStudi = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true)
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    const [data, setData] = useState({
        partner: [],
        testimonials: [],
        berita: [],
        prestasi: [],
        prodi: null
    });

    const fetchData = useCallback(async () => {
        try {
            const [partners, testimonials, berita, prestasi, prodi, gallery] = await Promise.all([
                PartnerService.getAllPartner(),
                TestimoniService.getAllTestimoni(),
                BeritaService.getAllBerita(),
                PrestasiService.getPrestasiProdi(slug),
                ProdiService.getProdiBySlug(slug),
                GalleryService.getAllGallery()
            ]);

            setData({ partner: partners, testimonials, berita, prestasi, prodi, gallery });
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
    const fakultas = prodi?.fakultas || {};
    const unggulan = prodi?.unggulan || [];
    const ourteam = prodi?.ourteam || [];
    const fasilitas = prodi?.fasilitas || [];

    if (loading) {
        return <Loading />
    }

    return (
        <UserLayout position={'block'} margin={'m-6'} shadow={'shadow-md'} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3'}>
            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <MotionWrapper type={'zoomIn'} delay={0.2} className={'flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10'}>
                    <div className="w-full md:w-1/2">
                        <img src={`${imageURL}/programs/${fakultas.image1}`} alt="" className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                        <Title title={`Selamat Datang di Program Studi ${fakultas.name}`} />
                        <RichText content={fakultas.description1} />
                        <ButtonArrow text={'Baca Selengkapnya'} />
                    </div>
                </MotionWrapper>

                <StatsSection prodi={fakultas.age} mahasiswa={fakultas.weekly} lulusan={fakultas.periode} prestasi={fakultas.ourteam_id} />

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4'}>
                    <div className="text-center">
                        <Title title={'Mengapa Memilih Program Ini'} />
                    </div>
                    <div className="flex flex-row md:flex-row items-center gap-4">
                        <div className="w-1/2">
                            {unggulan && unggulan.length > 0 && (
                                <img
                                    src={`${imageURL}/unggulans/${unggulan[0].image}`}
                                    alt={unggulan[0].title}
                                    className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl"
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-4">
                            {unggulan.map((item, index) => (
                                <AdvantageItem key={index} icon={Star} text={item.title} />
                            ))}
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-6 lg:gap-10'}>
                    <div className="w-full md:w-1/2">
                        <img src={`${imageURL}/programs/${fakultas.image2}`} alt="" className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl" loading="lazy" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                        <Title title={'Visi dan Misi'} />
                        <RichText content={`${fakultas.description2}`} />
                        <ButtonArrow text={'Baca Selengkapnya'} />
                    </div>
                </MotionWrapper>

                <PrestasiSection prestasi={prestasi} />

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4'}>
                    <div className="text-center">
                        <Title title={'Dosen Penilitan'} />
                    </div>
                    {ourteam && ourteam.length > 0 && (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
                            {ourteam.map((member, index) => (
                                <div key={index}>
                                    <DosenCard name={member.name} title={member.title} image={member.image} />
                                </div>
                            ))}
                        </div>
                    )}
                </MotionWrapper>

                <FasilitasSlider title={'Fasilitas & Inovasi'} facilities={fasilitas} />

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4 pb-56 md:pb-46 lg:pb-10'}>
                    <div className="relative">
                        <div className="w-full flex justify-center gap-4 md:gap-6 lg:gap-10">
                            <div className="w-1/2">
                                <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
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
                        <div className="absolute -bottom-60 -right-6 max-w-xs md:-bottom-45 md:right-20 md:max-w-sm lg:-bottom-10 lg:right-0 lg:max-w-4xl xl:bottom-10 xl:right-10 xl:max-w-5xl z-40">
                            <TestimonialSlider data={testimonials} bgColor={'bg-white'} textColor={'text-gray-700'} />
                        </div>
                    </div>
                </MotionWrapper>

                <AktivitasMahasiswa data={latestActivity} />

                <div className="w-full flex flex-row jusity-center items-center gap-4">
                    <MotionWrapper type="scaleUp" delay={0.2} className={'w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
                        <div className="text-left">
                            <Title sizeMobile="text-base" title={'Partner Kerjasama'} />
                        </div>
                        <MitraCarousel datas={partner} />
                    </MotionWrapper>
                    <div className="w-1/2">
                        <img src={`${imageURL}/programs/${fakultas.image3}`} alt="" loading="lazy" />
                    </div>
                </div>

                <MotionWrapper type={'zoomIn'} delay={0.2}>
                    <div className="text-center md:text-left space-y-3 md:space-y-4">
                        <Title title={'Berita Terbaru'} />
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
                    </div>
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'space-y-3 md:space-y-4'}>
                    <div className="w-full flex justify-center items-center gap-4 p-4 shadow-md rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <div className="w-1/2 text-left space-y-3 md:space-y-4">
                            <Text text={'Penerimaan Mahasiswa Baru'} color="text-red-500" />
                            <Title sizeMobile="text-base" title={'Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!'} />
                            <ButtonArrow text={'Daftar'} />
                        </div>
                        <div className="w-1/2 h-full bg-gray-200">
                            <img src={bgSection} alt="" loading="lazy" className="w-full h-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </UserLayout >
    )
}

export default ProgramStudi