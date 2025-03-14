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
import FakultasService from "../fetching/fakultas";
import PartnerService from "../fetching/partner";
import UnggulanService from "../fetching/unggulan";
import BeritaService from "../fetching/berita";
import AgendaService from "../fetching/agenda";
import RichText from "../components/RichText";
import Loading from "../components/Loading";

const FakultasDetail = () => {
    const { slug } = useParams();
    const [fakultas, setFakultas] = useState({});
    const [unggulan, setUnggulan] = useState([]);
    const [partner, setPartner] = useState([]);
    const [berita, setBerita] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
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
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }, [slug]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const latestBerita = berita.slice(0, 4);

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
                            </div>
                            <div className="w-fit md:w-1/2 flex flex-col justify-between text-start p-4 gap-10 rounded-lg md:rounded-2xl lg:rounded-4xl bg-white">
                                <RichText content={fakultas.description2} />
                                <div className="text-start">
                                    <Text weight={'font-bold'} text={fakultas.title2} />
                                    <Text text={'Dekan'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionWrapper>

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
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[2]?.image} title={latestBerita[2]?.title} slug={latestBerita[2]?.slug} />
                                    </div>
                                    <div>
                                        <ArticleTransparentCard image={latestBerita[3]?.image} title={latestBerita[3]?.title} slug={latestBerita[3]?.slug} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            {unggulan.map((item, index) => (
                                <HighlightCard key={index} title={item.title} text={item.description} />
                            ))}
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper type="scaleUp" delay={0.2} className={'flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
                    <div className="text-center">
                        <Text text={'Universitas Pasundan'} color="text-red-500" />
                        <Title sizeMobile="text-base" title={'Partner Kerjasama'} />
                    </div>
                    <MitraCarousel datas={partner} />
                </MotionWrapper>
            </div>
        </UserLayout>
    );
};

export default FakultasDetail;