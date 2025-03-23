<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import MotionWrapper from "../components/MotionWrapper";
import MitraCarousel from "../components/MitraCarousel";
import UserLayout from "./layouts/UserLayout";
import bgSection from '../assets/home/section1ori.jpeg';
import Title from "../components/Title";
import Text from "../components/Text";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import HighlightCard from "../components/fakultas/HighlightCard";
import ActivitySection from "../components/ActivitySection";
import TeknikBox from "../components/fakultas/TeknikBox";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
=======
=======
>>>>>>> 8bbe4dc (First Commit)
import UserLayout from "./layouts/UserLayout";
import Title from "../components/Title";
import Text from "../components/Text";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import HighlightCard from "../components/fakultas/HighlightCard";
import ActivitySection from "../components/ActivitySection";
import TeknikBox from "../components/fakultas/TeknikBox";
import RichText from "../components/RichText";
import Loading from "../components/Loading";
import CTASection from "../components/CTASection";
import LogoText from "../components/LogoText";
import Button from "../components/Button";
<<<<<<< HEAD
=======
=======
>>>>>>> origin/Budi
import UserLayout from './layouts/UserLayout'
import Title from '../components/Title'
import Text from '../components/Text'
import ArticleTransparentCard from '../components/ArticleTransparentCard'
import HighlightCard from '../components/fakultas/HighlightCard'
import ActivitySection from '../components/ActivitySection'
import TeknikBox from '../components/fakultas/TeknikBox'
import RichText from '../components/RichText'
import Loading from '../components/Loading'
import CTASection from '../components/CTASection'
import LogoText from '../components/LogoText'
import Button from '../components/Button'
<<<<<<< HEAD
>>>>>>> 5732ed6 (ADD: button play video; FIX: Social Media, Carousel)
=======
>>>>>>> origin/Budi

import { FaFacebook, FaPlay, FaTiktok } from 'react-icons/fa'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { X } from 'lucide-react'
import { useParams } from 'react-router-dom'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======

import { FaFacebook, FaPlay, FaTiktok } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";

>>>>>>> 8bbe4dc (First Commit)
import FakultasService from "../fetching/fakultas";
import PartnerService from "../fetching/partner";
import UnggulanService from "../fetching/unggulan";
import BeritaService from "../fetching/berita";
import AgendaService from "../fetching/agenda";
<<<<<<< HEAD
<<<<<<< HEAD
import RichText from "../components/RichText";
import Loading from "../components/Loading";
=======

import Gedung from "../assets/gedung.jpeg"
import MitraSection from "../views/home/MitraSection";
import bgSection from '../assets/home/section1ori.jpeg';
import StatsSection from "../components/StatsSection";
>>>>>>> 8bbe4dc (First Commit)

const FakultasDetail = () => {
    const { slug } = useParams();
    const [fakultas, setFakultas] = useState({});
<<<<<<< HEAD
=======
    const [prodi, setProdi] = useState({});
>>>>>>> 8bbe4dc (First Commit)
    const [unggulan, setUnggulan] = useState([]);
    const [partner, setPartner] = useState([]);
    const [berita, setBerita] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
<<<<<<< HEAD
    const [selectedSocialMedia, setSelectedSocialMedia] = useState('Youtube');
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback(async () => {
        try {
            const [fakultasRes, partnerRes, beritaRes, agendaRes] = await Promise.all([
                FakultasService.getFakultasBySlug(slug),
                PartnerService.getAllPartner(),
                BeritaService.getAllBerita(),
                AgendaService.getAllAgenda()
            ]);

            setFakultas(fakultasRes);
            setPartner(partnerRes);
            setBerita(beritaRes);
            setAgenda(agendaRes);

            if (fakultasRes?.id) {
                const unggulanRes = await UnggulanService.getUnggulanByID(fakultasRes.id);
                setUnggulan(unggulanRes);
            }
=======
    const [loading, setLoading] = useState(true)
    const [playingVideo, setPlayingVideo] = useState(null);
    const thumbnail = `https://img.youtube.com/vi/${fakultas.yt_id}/hqdefault.jpg`;

    const fetchData = useCallback(async () => {
        try {
            const [fakultasRes, partnerRes, beritaRes, agendaRes, unggulanRes] = await Promise.all([
                FakultasService.getFakultasBySlug(slug),
                PartnerService.getAllPartner(),
                BeritaService.getAllBerita(),
                AgendaService.getAllAgenda(),
                UnggulanService.getAllUnggulan()
            ]);

            setFakultas(fakultasRes.fakultas);
            setProdi(fakultasRes.departements);
            setPartner(partnerRes);
            setBerita(beritaRes);
            const sliceUnggulan = unggulanRes?.slice(0, 4)
            setAgenda(agendaRes);
            setUnggulan(sliceUnggulan)
>>>>>>> 8bbe4dc (First Commit)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }, [slug]);

    useEffect(() => {
        fetchData();
<<<<<<< HEAD
=======
        console.log(fakultas)
>>>>>>> 8bbe4dc (First Commit)
    }, [fetchData]);

    const latestBerita = berita.slice(0, 4);

<<<<<<< HEAD
    const handleSocialMediaClick = (platform) => {
        setSelectedSocialMedia(platform);
    };

    if (loading) {
        return <Loading />;
    }    

    const renderPreview = () => {
        switch (selectedSocialMedia) {
            case 'Facebook':
                return (
                    <div className="p-4 bg-gray-200 h-full rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <h3 className="text-lg font-bold">Facebook Preview</h3>
                        <a href={`https://www.facebook.com/${fakultas.fb}`} target="_blank" rel="noopener noreferrer">
                            <p>Kunjungi halaman Facebook kami: {fakultas.fb}</p>
                        </a>
                    </div>
                );
            case 'Tiktok':
                return (
                    <div className="p-4 bg-gray-200 h-full rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <h3 className="text-lg font-bold">Tiktok Preview</h3>
                        <a href={`https://www.tiktok.com/@${fakultas.tt}`} target="_blank" rel="noopener noreferrer">
                            <p>Kunjungi halaman Tiktok kami: {fakultas.tt}</p>
                        </a>
                    </div>
                );
            case 'Instagram':
                return (
                    <div className="p-4 bg-gray-200 h-full rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <h3 className="text-lg font-bold">Instagram Preview</h3>
                        <a href={`https://www.instagram.com/${fakultas.ig}`} target="_blank" rel="noopener noreferrer">
                            <p>Kunjungi halaman Instagram kami: {fakultas.ig}</p>
                        </a>
                    </div>
                );
            case 'Youtube':
                return (
                    <div className="p-4 bg-gray-200 h-full rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <h3 className="text-lg font-bold">Youtube Preview</h3>
                        <a href={`https://www.youtube.com/channel/${fakultas.yt}`} target="_blank" rel="noopener noreferrer">
                            <p>Kunjungi halaman Youtube kami: {fakultas.yt}</p>
                        </a>
                    </div>
                );
            default:
                return <div className="p-4 bg-gray-200 h-full rounded-lg md:rounded-2xl lg:rounded-4xl">Pilih media sosial untuk melihat preview.</div>;
        }
    };

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={'block'} margin={'m-6'} shadow={'shadow-md'} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3'}>
=======
    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} >
>>>>>>> 8bbe4dc (First Commit)
            <Helmet>
                <title>{fakultas.name || 'Loading...'} - Universitas Pasundan</title>
                <meta
                    name="description"
                    content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri. Daftar sekarang!"
                />
                <meta
                    name="keywords"
                    content="Fakultas Teknik Unpas, Teknik Informatika, Teknik Mesin, Teknik Industri, Universitas Pasundan"
                />
                <meta property="og:title" content="Fakultas Teknik - Universitas Pasundan" />
                <meta
                    property="og:description"
                    content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri."
                />
<<<<<<< HEAD
                <meta property="og:image" content="https://www.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://www.unpas.ac.id/fakultas-teknik" />
            </Helmet>

            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <MotionWrapper type={'zoomIn'} delay={0.2} style={{ backgroundImage: `url(${bgSection})` }} className={'relative bg-cover h-screen p-0 rounded-lg md:rounded-2xl lg:rounded-4xl'}>
                    <div className="absolute bottom-0 left-0 max-w-sm md:max-w-lg lg:max-w-xl bg-gray-100 shadow-md p-4 clip-custom-shape">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-500">{fakultas.name}</h1>
                    </div>
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2} className={'grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10'}>
                    <TeknikBox image={''} title={'Teknik Informatika'} />
                    <TeknikBox image={''} title={'Teknik Informatika'} />
                    <TeknikBox image={''} title={'Teknik Informatika'} />
                    <TeknikBox image={''} title={'Teknik Informatika'} />
                    <TeknikBox image={''} title={'Teknik Informatika'} />
                    <TeknikBox image={''} title={'Teknik Informatika'} />
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2}>
                    <div className="w-full flex flex-col justify-center items-center space-y-3 md:space-y-10 lg:space-y-20">
                        <div className="space-y-2 text-center">
                            <Title title={'Sambutan Dekan'} />
                            <Title title={'FISIP UNPAS .'} color="text-blue-500" />
                        </div>
                        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 bg-white md:max-w-3xl lg:max-w-6xl">
                            <div className="w-full md:w-1/2 h-[50vh] p-2">
                                <img src={`${imageURL}/fakultas/${fakultas.image2}`} alt={fakultas.title2} className="w-full h-full object-cover dekan_img" loading="lazy" />
=======
                <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://pmb.unpas.ac.id/fakultas-teknik" />
            </Helmet>

            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <div className="relative ">
                    <div className="w-full fakultas_dtl_container">
                        <div
                            className={`flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 md:px-8 lg:px-12 relative overflow-hidden fakultas_dtl_box lg:h-[55vh]`}
                            style={{ backgroundImage: `url(${fakultas.image1 ? `${imageURL}/fakultas/${fakultas.image1}` : Gedung})` }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/40 to-transparent"></div>
                            <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                    </filter>
                                </defs>
                            </svg>

                            <div className="text-tosca relative my-8 z-10 w-1/2 md:w-1/4 lg:w-1/5">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl py-14 font-bold drop-shadow-lg">
                                    <span className="block">Fakultas</span>
                                    <span className="block">{fakultas.name.replace("Fakultas ", "")}</span>
                                </h2>
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

                <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10'}>
                    {prodi.map((item, index) => (
                        <TeknikBox key={index} image={`${imageURL}/programs/${item.image1}`} title={item.program_name} slug={item.slug} />
                    ))}
                </div>

                <div>
                    <div className="w-full flex flex-col justify-center items-center space-y-3 md:space-y-10 lg:space-y-20">
                        <div className="w-[65%] md:w-[40%] lg:w-[25%] space-y-2 text-center">
                            <Title title={fakultas?.title2} />
                            {/* <Title title={'Sambutan Dekan'} />
                            <Title title={'FISIP UNPAS .'} color="text-blue-500" /> */}
                        </div>
                        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 bg-white md:max-w-3xl lg:max-w-6xl rounded-lg md:rounded-2xl lg:rounded-4xl">
                            <div className="w-full md:w-1/2 h-[50vh] p-2 dekan_container">
                                <img src={`${imageURL}/fakultas/${fakultas.image2}`} alt={fakultas.title2} className="w-full h-full object-cover dekan_img" loading="lazy" />
                                <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
>>>>>>> 8bbe4dc (First Commit)
                            </div>
                            <div className="w-fit md:w-1/2 flex flex-col justify-between text-start p-4 gap-10 rounded-lg md:rounded-2xl lg:rounded-4xl bg-white">
                                <RichText content={fakultas.description2} />
                                <div className="text-start">
                                    <Text weight={'font-bold'} text={fakultas.title2} />
<<<<<<< HEAD
                                    <Text text={'Dekan'} />
=======
>>>>>>> 8bbe4dc (First Commit)
                                </div>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2}>
=======
                </div>

                <StatsSection colorIcon={'text-blue-500'} title1="Karya Ilmiah" prodi={fakultas.statistik3} mahasiswa={fakultas.statistik1} lulusan={fakultas.statistik2} prestasi={fakultas.statistik4} />

                <div>
>>>>>>> 8bbe4dc (First Commit)
                    <div className="text-center md:text-left space-y-3 md:space-y-4">
                        <Title title={'Berita Terbaru'} />
                        <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                            <div className="md:w-1/2 lg:w-full">
<<<<<<< HEAD
                                <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} />
                            </div>
                            <div className="md:w-1/2 flex flex-col gap-4">
                                <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} />
                                <div className="w-full flex flex-col md:flex-row gap-4">
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} />
                                    </div>
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} />
=======
                                <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} description={latestBerita[0]?.description} />
                            </div>
                            <div className="md:w-1/2 flex flex-col gap-4">
                                <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} description={latestBerita[1]?.description} />
                                <div className="w-full flex flex-col md:flex-row gap-4">
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} description={latestBerita[2]?.description} />
                                    </div>
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} description={latestBerita[3]?.description} />
>>>>>>> 8bbe4dc (First Commit)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
                </MotionWrapper>

                <ActivitySection title={'Agenda'} activities={agenda} />

                <MotionWrapper type={'zoomIn'} delay={0.2}>
                    <div className="text-center space-y-3 md:space-y-4">
                        <Title title={'Media Sosial'} />
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <div className="w-full flex flex-wrap md:flex-col gap-4 bg-gray-200 p-4 rounded-lg md:rounded-2xl lg:rounded-4xl">
                                <div onClick={() => handleSocialMediaClick('Facebook')} className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white">
                                    <FaFacebook size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Facebook'} />
                                </div>
                                <div onClick={() => handleSocialMediaClick('Tiktok')} className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white">
                                    <FaTiktok size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Tiktok'} />
                                </div>
                                <div onClick={() => handleSocialMediaClick('Instagram')} className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white">
                                    <FaInstagram size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Instagram'} />
                                </div>
                                <div onClick={() => handleSocialMediaClick('Youtube')} className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white">
                                    <FaYoutube size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Youtube'} />
                                </div>
                            </div>
                            <div className="w-full">
                                {renderPreview()}
                            </div>
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper type={'zoomIn'} delay={0.2}>
                    <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-3 md:space-y-4 gap-4 md:gap-6 lg:gap-10">
                        <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
                            <div className="w-full space-y-2 text-center md:text-left">
                                <Title title={'Kenapa Memilih'} />
                                <Title color="text-blue-500" title={'UNPAS.'} />
                            </div>
                            <div className="w-full h-40 bg-gray-300 rounded-lg md:rounded-2xl lg:rounded-4xl">

=======
                </div>

                <ActivitySection title={'Agenda'} activities={agenda} />

                <div>
                    <div className="text-center space-y-3 md:space-y-4">
                        <Title title={'Media Sosial'} />

                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-h-fit">
                            <div className="w-full flex flex-wrap md:flex-col gap-4 bg-gray-200 p-4 rounded-lg md:rounded-2xl lg:rounded-4xl">
                                <a
                                    href={`https://www.facebook.com/${fakultas.fb}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaFacebook size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Facebook'} />
                                </a>
                                <a
                                    href={`https://www.tiktok.com/@${fakultas.tt}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaTiktok size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Tiktok'} />
                                </a>
                                <a
                                    href={`https://www.instagram.com/${fakultas.ig}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaInstagram size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Instagram'} />
                                </a>
                                <a
                                    href={`https://www.youtube.com/channel/${fakultas.yt}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaYoutube size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Youtube'} />
                                </a>
                            </div>

                            <div className="w-full h-full">
                                <div
                                    className="relative w-full mx-auto cursor-pointer"
                                    onClick={() => setPlayingVideo(`https://www.youtube.com/embed/${fakultas.yt_id}`)}
                                >
                                    <img src={thumbnail} alt="Kisah Alumni" className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FaPlay className="text-white text-4xl" />
                                    </div>
                                </div>

                                {playingVideo && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" onClick={() => setPlayingVideo(null)}>
                                        <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
                                            <button
                                                className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer"
                                                onClick={() => setPlayingVideo(null)}
                                            >
                                                <X size={20} />
                                            </button>

                                            <iframe
                                                width="100%"
                                                height="400"
                                                src={playingVideo}
                                                title="YouTube Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="rounded-lg"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <MitraSection data={partner} />

                <div>
                    <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-3 md:space-y-4 gap-4 md:gap-6 lg:gap-10">
                        <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
                            <div className="w-full space-y-2 text-left md:text-left">
                                <Title title={'Kenapa Memilih'} />
                                <Title color="text-blue-500" title={'UNPAS.'} />
                            </div>
                            <div className="w-full h-full">
                                <img src={Gedung} alt="Gedung Unpas" className="w-full h-full rounded-lg bg-cover md:rounded-2xl lg:rounded-4xl" />
>>>>>>> 8bbe4dc (First Commit)
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            {unggulan.map((item, index) => (
                                <HighlightCard key={index} title={item.title} text={item.description} />
                            ))}
                        </div>
                    </div>
<<<<<<< HEAD
                </MotionWrapper>

                <MotionWrapper type="scaleUp" delay={0.2} className={'flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
                    <div className="text-center">
                        <Text text={'Universitas Pasundan'} color="text-red-500" />
                        <Title sizeMobile="text-base" title={'Partner Kerjasama'} />
                    </div>
                    <MitraCarousel datas={partner} />
                </MotionWrapper>
=======
                </div>

                <CTASection />
>>>>>>> 8bbe4dc (First Commit)
            </div>
        </UserLayout>
    );
};

<<<<<<< HEAD
export default FakultasDetail;
=======
=======
=======
>>>>>>> origin/Budi
import FakultasService from '../fetching/fakultas'
import PartnerService from '../fetching/partner'
import UnggulanService from '../fetching/unggulan'
import BeritaService from '../fetching/berita'
import AgendaService from '../fetching/agenda'
<<<<<<< HEAD
>>>>>>> 5732ed6 (ADD: button play video; FIX: Social Media, Carousel)
=======
>>>>>>> origin/Budi

import Gedung from '../assets/gedung.jpeg'
import MitraSection from '../views/home/MitraSection'
import bgSection from '../assets/home/section1ori.jpeg'
import StatsSection from '../components/StatsSection'
import { motion, AnimatePresence } from 'framer-motion'

const FakultasDetail = () => {
  const { slug } = useParams()
  const [fakultas, setFakultas] = useState({})
  const [prodi, setProdi] = useState({})
  const [unggulan, setUnggulan] = useState([])
  const [partner, setPartner] = useState([])
  const [berita, setBerita] = useState([])
  const [agenda, setAgenda] = useState([])
  const imageURL = import.meta.env.VITE_IMAGE_URL
  const [loading, setLoading] = useState(true)
  const [playingVideo, setPlayingVideo] = useState(null)
  const thumbnail = `https://img.youtube.com/vi/${fakultas.yt_id}/hqdefault.jpg`

  const fetchData = useCallback(async () => {
    try {
      const [fakultasRes, partnerRes, beritaRes, agendaRes, unggulanRes] = await Promise.all([
        FakultasService.getFakultasBySlug(slug),
        PartnerService.getAllPartner(),
        BeritaService.getAllBerita(),
        AgendaService.getAllAgenda(),
        UnggulanService.getAllUnggulan(),
      ])

      setFakultas(fakultasRes.fakultas)
      setProdi(fakultasRes.departements)
      setPartner(partnerRes)
      setBerita(beritaRes)
      const sliceUnggulan = unggulanRes?.slice(0, 4)
      setAgenda(agendaRes)
      setUnggulan(sliceUnggulan)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    fetchData()
    console.log(fakultas)
  }, [fetchData])

  const latestBerita = berita.slice(0, 4)

  if (loading) {
    return <Loading />
  }

  return (
    <UserLayout bgLayoutColor="bg-gray-100" position={'fixed'} margin={''} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3 lg:py-6 lg:px-6'} paddingTop={'lg:pt-20'}>
      <Helmet>
        <title>{fakultas.name || 'Loading...'} - Universitas Pasundan</title>
        <meta name="description" content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri. Daftar sekarang!" />
        <meta name="keywords" content="Fakultas Teknik Unpas, Teknik Informatika, Teknik Mesin, Teknik Industri, Universitas Pasundan" />
        <meta property="og:title" content="Fakultas Teknik - Universitas Pasundan" />
        <meta property="og:description" content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri." />
        <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
        <meta property="og:url" content="https://pmb.unpas.ac.id/fakultas-teknik" />
      </Helmet>

      <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
        <div className="relative ">
          <div className="w-full fakultas_dtl_container">
            <div
              className={`flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 md:px-8 lg:px-12 relative overflow-hidden fakultas_dtl_box lg:h-[55vh]`}
              style={{ backgroundImage: `url(${fakultas.image1 ? `${imageURL}/fakultas/${fakultas.image1}` : Gedung})` }}
            >
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/40 to-transparent"></div>
              <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>

              <div className="text-tosca relative my-8 z-10 w-1/2 md:w-1/4 lg:w-1/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl py-14 font-bold drop-shadow-lg">
                  <span className="block">Fakultas</span>
                  <span className="block">{fakultas.name.replace('Fakultas ', '')}</span>
                </h2>
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

        <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10'}>
          {prodi.map((item, index) => (
            <TeknikBox key={index} image={`${imageURL}/programs/${item.image1}`} title={item.program_name} slug={item.slug} />
          ))}
        </div>

        <div>
          <div className="w-full flex flex-col justify-center items-center space-y-3 md:space-y-10 lg:space-y-20">
            <div className="w-[65%] md:w-[40%] lg:w-[25%] space-y-2 text-center">
              <Title title={fakultas?.title2} />
              {/* <Title title={'Sambutan Dekan'} />
                            <Title title={'FISIP UNPAS .'} color="text-blue-500" /> */}
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 bg-white md:max-w-3xl lg:max-w-6xl rounded-lg md:rounded-2xl lg:rounded-4xl">
              <div className="w-full md:w-1/2 h-[50vh] p-2 dekan_container">
                <img src={`${imageURL}/fakultas/${fakultas.image2}`} alt={fakultas.title2} className="w-full h-full object-cover dekan_img" loading="lazy" />
                <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="w-fit md:w-1/2 flex flex-col justify-between text-start p-4 gap-10 rounded-lg md:rounded-2xl lg:rounded-4xl bg-white">
                <RichText content={fakultas.description2} />
                <div className="text-start">
                  <Text weight={'font-bold'} text={fakultas.title2} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <StatsSection colorIcon={'text-blue-500'} title1="Karya Ilmiah" prodi={fakultas.statistik3} mahasiswa={fakultas.statistik1} lulusan={fakultas.statistik2} prestasi={fakultas.statistik4} />

        <div>
          <div className="text-center space-y-3 md:space-y-4">
            <Title title={'Media Sosial'} />

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
              <div className="w-full flex flex-col justify-between bg-gray-200 p-6 rounded-lg md:rounded-2xl lg:rounded-4xl">
                <motion.a
                  href={`https://www.facebook.com/${fakultas.fb}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaFacebook size={24} className="text-blue-600" />
                  </div>
                  <Text weight="font-medium" text="Facebook" />
                </motion.a>

                <motion.a
                  href={`https://www.tiktok.com/@${fakultas.tt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-gray-100 p-3 rounded-full">
                    <FaTiktok size={24} className="text-gray-800" />
                  </div>
                  <Text weight="font-medium" text="TikTok" />
                </motion.a>

                <motion.a
                  href={`https://www.instagram.com/${fakultas.ig}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-pink-100 p-3 rounded-full">
                    <FaInstagram size={24} className="text-pink-600" />
                  </div>
                  <Text weight="font-medium" text="Instagram" />
                </motion.a>

                <motion.a
                  href={`https://www.youtube.com/channel/${fakultas.yt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-red-100 p-3 rounded-full">
                    <FaYoutube size={24} className="text-red-600" />
                  </div>
                  <Text weight="font-medium" text="YouTube" />
                </motion.a>
              </div>

              <div className="w-full flex flex-col justify-between">
                <div className="relative w-full h-full mx-auto cursor-pointer" onClick={() => setPlayingVideo(`https://www.youtube.com/embed/${fakultas.yt_id}`)}>
                  <img src={thumbnail} alt="Kisah Alumni" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                  <motion.div className="absolute inset-0 flex items-center justify-center rounded-lg md:rounded-2xl lg:rounded-4xl" whileTap={{ scale: 0.9 }}>
                    <div className="p-2 group-hover:scale-120 bg-gradient-to-b rounded-full bg-gray-600 via-gray-700 to-gray-800">
                      <FaPlay className="text-white p-4 w-14 h-14 transition-transform duration-200 ease-in-out group-hover:scale-120" />
                    </div>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {playingVideo && (
                    <motion.div
                      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.3 } }}
                      onClick={() => setPlayingVideo(null)}
                    >
                      <motion.div className="relative w-[90%] md:w-[70%] lg:w-[50%]" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }}>
                        <button
                          className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            setPlayingVideo(null)
                          }}
                        >
                          <X size={20} />
                        </button>

                        <iframe
                          width="100%"
                          height="400"
                          src={playingVideo}
                          title="YouTube Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="border-2 border-white rounded-lg md:rounded-2xl lg:rounded-4xl"
                        ></iframe>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-3 md:space-y-4 gap-4 md:gap-6 lg:gap-10">
            <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
              <div className="w-full space-y-2 text-left md:text-left">
                <Title title={'Mengapa Pilih Fakultas'} />
                <Title color="text-blue-500" title={fakultas.name.replace('Fakultas ', '')} />
              </div>
              <div className="w-full h-full">
                <img src={Gedung} alt="Gedung Unpas" className="w-full h-full rounded-lg bg-cover md:rounded-2xl lg:rounded-4xl" />
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {unggulan.map((item, index) => (
                <HighlightCard key={index} title={item.title} text={item.description} />
              ))}
            </div>
          </div>
        </div>
        <MitraSection data={partner} />

        <div>
          <div className="text-center md:text-left space-y-3 md:space-y-4">
            <Title title={'Berita Terbaru'} />
            <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
              <div className="md:w-1/2 lg:w-full">
                <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} description={latestBerita[0]?.description} />
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} description={latestBerita[1]?.description} />
                <div className="w-full flex flex-col md:flex-row gap-4">
                  <div>
                    <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} description={latestBerita[2]?.description} />
                  </div>
                  <div>
                    <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} description={latestBerita[3]?.description} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {agenda.length > 0 && <ActivitySection title={'Agenda'} activities={agenda} />}

        <CTASection />
      </div>
    </UserLayout>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
export default FakultasDetail;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
export default FakultasDetail
>>>>>>> 5732ed6 (ADD: button play video; FIX: Social Media, Carousel)
=======
export default FakultasDetail;
>>>>>>> 8bbe4dc (First Commit)
=======
export default FakultasDetail
=======
import UserLayout from "./layouts/UserLayout";
import Title from "../components/Title";
import Text from "../components/Text";
import ArticleTransparentCard from "../components/ArticleTransparentCard";
import HighlightCard from "../components/fakultas/HighlightCard";
import ActivitySection from "../components/ActivitySection";
import TeknikBox from "../components/fakultas/TeknikBox";
import RichText from "../components/RichText";
import Loading from "../components/Loading";
import CTASection from "../components/CTASection";
import LogoText from "../components/LogoText";
import Button from "../components/Button";

import { FaFacebook, FaPlay, FaTiktok } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";

import FakultasService from "../fetching/fakultas";
import PartnerService from "../fetching/partner";
import UnggulanService from "../fetching/unggulan";
import BeritaService from "../fetching/berita";
import AgendaService from "../fetching/agenda";

import Gedung from "../assets/gedung.jpeg"
import MitraSection from "../views/home/MitraSection";
import bgSection from '../assets/home/section1ori.jpeg';
import StatsSection from "../components/StatsSection";

const FakultasDetail = () => {
    const { slug } = useParams();
    const [fakultas, setFakultas] = useState({});
    const [prodi, setProdi] = useState({});
    const [unggulan, setUnggulan] = useState([]);
    const [partner, setPartner] = useState([]);
    const [berita, setBerita] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [loading, setLoading] = useState(true)
    const [playingVideo, setPlayingVideo] = useState(null);
    const thumbnail = `https://img.youtube.com/vi/${fakultas.yt_id}/hqdefault.jpg`;

    const fetchData = useCallback(async () => {
        try {
            const [fakultasRes, partnerRes, beritaRes, agendaRes, unggulanRes] = await Promise.all([
                FakultasService.getFakultasBySlug(slug),
                PartnerService.getAllPartner(),
                BeritaService.getAllBerita(),
                AgendaService.getAllAgenda(),
                UnggulanService.getAllUnggulan()
            ]);

            setFakultas(fakultasRes.fakultas);
            setProdi(fakultasRes.departements);
            setPartner(partnerRes);
            setBerita(beritaRes);
            const sliceUnggulan = unggulanRes?.slice(0, 4)
            setAgenda(agendaRes);
            setUnggulan(sliceUnggulan)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }, [slug]);

    useEffect(() => {
        fetchData();
        console.log(fakultas)
    }, [fetchData]);

    const latestBerita = berita.slice(0, 4);

    if (loading) {
        return <Loading />;
    }

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} >
            <Helmet>
                <title>{fakultas.name || 'Loading...'} - Universitas Pasundan</title>
                <meta
                    name="description"
                    content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri. Daftar sekarang!"
                />
                <meta
                    name="keywords"
                    content="Fakultas Teknik Unpas, Teknik Informatika, Teknik Mesin, Teknik Industri, Universitas Pasundan"
                />
                <meta property="og:title" content="Fakultas Teknik - Universitas Pasundan" />
                <meta
                    property="og:description"
                    content="Fakultas Teknik Universitas Pasundan menawarkan program studi unggulan seperti Teknik Informatika, Teknik Mesin, dan Teknik Industri."
                />
                <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://pmb.unpas.ac.id/fakultas-teknik" />
            </Helmet>

            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <div className="relative ">
                    <div className="w-full fakultas_dtl_container">
                        <div
                            className={`flex flex-col justify-center bg-cover bg-no-repeat rounded-lg md:rounded-2xl lg:rounded-4xl py-8 px-4 md:px-8 lg:px-12 relative overflow-hidden fakultas_dtl_box lg:h-[55vh]`}
                            style={{ backgroundImage: `url(${fakultas.image1 ? `${imageURL}/fakultas/${fakultas.image1}` : Gedung})` }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/40 to-transparent"></div>
                            <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                    </filter>
                                </defs>
                            </svg>

                            <div className="text-tosca relative my-8 z-10 w-1/2 md:w-1/4 lg:w-1/5">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl py-14 font-bold drop-shadow-lg">
                                    <span className="block">Fakultas</span>
                                    <span className="block">{fakultas.name.replace("Fakultas ", "")}</span>
                                </h2>
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

                <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10'}>
                    {prodi.map((item, index) => (
                        <TeknikBox key={index} image={`${imageURL}/programs/${item.image1}`} title={item.program_name} slug={item.slug} />
                    ))}
                </div>

                <div>
                    <div className="w-full flex flex-col justify-center items-center space-y-3 md:space-y-10 lg:space-y-20">
                        <div className="w-[65%] md:w-[40%] lg:w-[25%] space-y-2 text-center">
                            <Title title={fakultas?.title2} />
                            {/* <Title title={'Sambutan Dekan'} />
                            <Title title={'FISIP UNPAS .'} color="text-blue-500" /> */}
                        </div>
                        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 bg-white md:max-w-3xl lg:max-w-6xl rounded-lg md:rounded-2xl lg:rounded-4xl">
                            <div className="w-full md:w-1/2 h-[50vh] p-2 dekan_container">
                                <img src={`${imageURL}/fakultas/${fakultas.image2}`} alt={fakultas.title2} className="w-full h-full object-cover dekan_img" loading="lazy" />
                                <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className="w-fit md:w-1/2 flex flex-col justify-between text-start p-4 gap-10 rounded-lg md:rounded-2xl lg:rounded-4xl bg-white">
                                <RichText content={fakultas.description2} />
                                <div className="text-start">
                                    <Text weight={'font-bold'} text={fakultas.title2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <StatsSection colorIcon={'text-blue-500'} title1="Karya Ilmiah" prodi={fakultas.statistik3} mahasiswa={fakultas.statistik1} lulusan={fakultas.statistik2} prestasi={fakultas.statistik4} />

                <div>
                    <div className="text-center md:text-left space-y-3 md:space-y-4">
                        <Title title={'Berita Terbaru'} />
                        <div className="w-full flex flex-col md:flex-row gap-4 justify-stretch">
                            <div className="md:w-1/2 lg:w-full">
                                <ArticleTransparentCard image={latestBerita[0]?.image} title={latestBerita[0]?.title} slug={latestBerita[0]?.slug} description={latestBerita[0]?.description} />
                            </div>
                            <div className="md:w-1/2 flex flex-col gap-4">
                                <ArticleTransparentCard image={latestBerita[1]?.image} title={latestBerita[1]?.title} slug={latestBerita[1]?.slug} description={latestBerita[1]?.description} />
                                <div className="w-full flex flex-col md:flex-row gap-4">
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} description={latestBerita[2]?.description} />
                                    </div>
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} description={latestBerita[3]?.description} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ActivitySection title={'Agenda'} activities={agenda} />

                <div>
                    <div className="text-center space-y-3 md:space-y-4">
                        <Title title={'Media Sosial'} />

                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-h-fit">
                            <div className="w-full flex flex-wrap md:flex-col gap-4 bg-gray-200 p-4 rounded-lg md:rounded-2xl lg:rounded-4xl">
                                <a
                                    href={`https://www.facebook.com/${fakultas.fb}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaFacebook size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Facebook'} />
                                </a>
                                <a
                                    href={`https://www.tiktok.com/@${fakultas.tt}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaTiktok size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Tiktok'} />
                                </a>
                                <a
                                    href={`https://www.instagram.com/${fakultas.ig}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaInstagram size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Instagram'} />
                                </a>
                                <a
                                    href={`https://www.youtube.com/channel/${fakultas.yt}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex gap-2 items-center text-center md:text-left bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl cursor-pointer hover:bg-blue-500 hover:text-white"
                                >
                                    <FaYoutube size={20} />
                                    <Text color="hover:text-white" sizeMobile="text-sm" text={'Youtube'} />
                                </a>
                            </div>

                            <div className="w-full h-full">
                                <div
                                    className="relative w-full mx-auto cursor-pointer"
                                    onClick={() => setPlayingVideo(`https://www.youtube.com/embed/${fakultas.yt_id}`)}
                                >
                                    <img src={thumbnail} alt="Kisah Alumni" className="w-full rounded-lg md:rounded-2xl lg:rounded-4xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FaPlay className="text-white text-4xl" />
                                    </div>
                                </div>

                                {playingVideo && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" onClick={() => setPlayingVideo(null)}>
                                        <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
                                            <button
                                                className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer"
                                                onClick={() => setPlayingVideo(null)}
                                            >
                                                <X size={20} />
                                            </button>

                                            <iframe
                                                width="100%"
                                                height="400"
                                                src={playingVideo}
                                                title="YouTube Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="rounded-lg"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <MitraSection data={partner} />

                <div>
                    <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-3 md:space-y-4 gap-4 md:gap-6 lg:gap-10">
                        <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
                            <div className="w-full space-y-2 text-left md:text-left">
                                <Title title={'Kenapa Memilih'} />
                                <Title color="text-blue-500" title={'UNPAS.'} />
                            </div>
                            <div className="w-full h-full">
                                <img src={Gedung} alt="Gedung Unpas" className="w-full h-full rounded-lg bg-cover md:rounded-2xl lg:rounded-4xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            {unggulan.map((item, index) => (
                                <HighlightCard key={index} title={item.title} text={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default FakultasDetail;
>>>>>>> origin/Radh
>>>>>>> origin/Budi
