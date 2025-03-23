import UserLayout from "./layouts/UserLayout";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Section3 from "../assets/home/section3.png";
import Title from "../components/Title";
import Text from "../components/Text";
import React, { useEffect, useState } from "react";
import MitraCarousel from "../components/MitraCarousel";
import TestimonialSlider from "../components/TestimonialSlider";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import MotionWrapper from "../components/MotionWrapper";
import PendaftaranSection from "../components/home/PendaftaranSection";
import FakultasSwiper from "../components/home/FakultasSwiper";
import ReasonSection from "../components/home/ReasonSection";
import VideoSwiper from "../components/home/VideoSwiper";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";
import PrestasiSection from "../components/home/PrestasiSection";
import { fetchAllData } from "../utils/fetchAllData";
import RichText from "../components/RichText";
import HeroSection from "../components/home/HeroSection";
import ArticleCard from "../components/artikel/ArticleCard";
import InfoBox from "../components/home/InfoBox";
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
import Section3 from "../assets/home/section2.png";
import React, { useEffect, useState } from "react";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import VideoSwiper from "../components/home/VideoSwiper";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";
import { fetchAllData } from "../utils/fetchAllData";
import InfoBox from "../components/home/InfoBox";
import HeroSection from "../views/home/HeroSection";
import AboutSection from "../views/home/AboutSection";
import PendaftaranSection from "../views/home/PendaftaranSection";
import ReasonSection from "../views/home/ReasonSection";
import FakultasSection from "../views/home/FakultasSection";
import PrestasiSection from "../views/home/PrestasiSection";
import ArtikelSection from "../views/home/ArtikelSection";
import MitraSection from "../views/home/MitraSection";
import TestimonialSection from "../views/home/TestimonialSection";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi

const faculties = [
    {
        name: 'Fakultas Keguruan dan Ilmu Pendidikan',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        color: 'bg-pink-100',
=======
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        programs: [
            'S1 - Pendidikan Pancasila & Kewarganegaraan',
            'S1 - Pendidikan Ekonomi Akuntansi',
            'S1 - Pendidikan Bahasa',
            'S1 - Sastra Indonesia dan Daerah',
            'S1 - Pendidikan Matematika',
            'S1 - Pendidikan Biologi',
            'S1 - Pendidikan Guru Sekolah Dasar'
        ]
    },
    {
        name: 'Fakultas Teknik',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        color: 'bg-green-100',
=======
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        programs: [
            'S1 - Teknik Informatika',
            'S1 - Teknik Mesin',
            'S1 - Teknik Industri',
            'S1 - Teknik Lingkungan',
            'S1 - Teknologi Pangan'
        ]
    },
    {
        name: 'Fakultas Ekonomi dan Bisnis',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        color: 'bg-blue-100',
=======
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        programs: [
            'S1 - Akuntansi',
            'S1 - Manajemen',
            'S1 - Ekonomi Pembangunan'
        ]
    },
    {
        name: 'Fakultas Hukum',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        color: 'bg-yellow-100',
=======
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        programs: ['S1 - Ilmu Hukum']
    },
    {
        name: 'Program Pasca Sarjana',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        color: 'bg-purple-100',
=======
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        programs: [
            'S2 - Magister Ilmu Administrasi & Kebijakan Publik',
            'S2 - Magister Manajemen',
            'S2 - Magister Teknik Industri',
            'S2 - Magister Ilmu Hukum',
            'S2 - Magister Teknologi Pangan',
            'S2 - Magister Pendidikan Matematika',
            'S2 - Magister Teknik Mesin',
            'S2 - Magister Ilmu Komunikasi',
            'S2 - Magister Pendidikan Bahasa Indonesia',
            'S3 - Doktor Ilmu Manajemen',
            'S3 - Doktor Ilmu Sosial',
            'S3 - Doktor Ilmu Hukum'
        ]
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        name: 'Fakultas Ilmu Sosial Dan Ilmu Politik',
        color: 'bg-red-100',
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        name: 'Fakultas Kedokteran',
        programs: [
            'S1 - Pendidikan Dokter',
            'Profesi - Profesi Dokter'
        ]
    },
    {
        name: 'Fakultas Pendidikan',
        programs: [
            'S1 - Pendidikan Matematika',
            'S1 - Pendidikan Biologi',
            'S1 - Pendidikan Pancasila dan Kewarganegaraan',
            'S1 - Pendidikan Guru Sekolah Dasar',
            'S1 - Pendidikan Bahasa dan Sastra Indonesia',
            'S1 - Pendidikan Ekonomi'
        ]
    },
    {
        name: 'Fakultas Ilmu Sosial Dan Ilmu Politik',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
        programs: [
            'S1 - Administrasi Publik',
            'S1 - Kesejahteraan Sosial',
            'S1 - Hubungan Internasional',
            'S1 - Ilmu Administrasi Bisnis',
            'S1 - Ilmu Komunikasi'
        ]
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        name: 'Fakultas Kedokteran',
        color: 'bg-indigo-100',
        programs: [
            'S1 - Pendidikan Dokter',
            'Profesi - Profesi Dokter'
        ]
    },
    {
        name: 'Fakultas Ilmu Seni dan Sastra',
        color: 'bg-orange-100',
=======
        name: 'Fakultas Ilmu Seni dan Sastra',
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
        name: 'Fakultas Ilmu Seni dan Sastra',
>>>>>>> 8bbe4dc (First Commit)
=======
        name: 'Fakultas Ilmu Seni dan Sastra',
>>>>>>> origin/Budi
        programs: [
            'S1 - Sastra Inggris',
            'S1 - Desain Komunikasi Visual',
            'S1 - Fotografi dan Film',
            'S1 - Seni Musik'
        ]
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    {
        name: 'Fakultas Pendidikan',
        color: 'bg-teal-100',
        programs: [
            'S1 - Pendidikan Matematika',
            'S1 - Pendidikan Biologi',
            'S1 - Pendidikan Pancasila dan Kewarganegaraan',
            'S1 - Pendidikan Guru Sekolah Dasar',
            'S1 - Pendidikan Bahasa dan Sastra Indonesia',
            'S1 - Pendidikan Ekonomi'
        ]
    }
];

=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
];

const faculties1 = faculties.slice(0, 3)
const faculties2 = faculties.slice(3, 6)
const faculties3 = faculties.slice(6, 9)

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
const Home = () => {
    const [data, setData] = useState({
        slider: [],
        about: [],
        partner: [],
        testimonials: [],
        unggulan: [],
        jalur: [],
        artikel: [],
        prestasi: [],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    });
    const [loading, setLoading] = useState(false);
=======
        dukungan: []
    });
    const [loading, setLoading] = useState(true);
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
        dukungan: []
    });
    const [loading, setLoading] = useState(true);
>>>>>>> 8bbe4dc (First Commit)
=======
        dukungan: []
    });
    const [loading, setLoading] = useState(true);
>>>>>>> origin/Budi
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const fetchedData = await fetchAllData();
                setData(fetchedData);
            } catch (error) {
                console.error("Error loading data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <UserLayout paddingDekstop={'p-8 md:p-14 lg:p-16'}>
            <Helmet>
                <title>Universitas Pasundan - Kampus Unggulan di Bandung</title>
=======
        <UserLayout position={'fixed'} bgLayoutColor="bg-[#F3F3F3]" paddingDekstop={'md:p-6 lg:p-6'} paddingTop={'lg:pt-30'} bgColor={'bg-[#F3F3F3]'}>
            <Helmet>
                <title>Beranda - Universitas Pasundan</title>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
        <UserLayout position={'fixed'} bgLayoutColor="bg-[#F3F3F3]" paddingDekstop={'md:p-6 lg:p-6'} paddingTop={'lg:pt-30'} bgColor={'bg-[#F3F3F3]'}>
            <Helmet>
                <title>Beranda - Universitas Pasundan</title>
>>>>>>> 8bbe4dc (First Commit)
=======
        <UserLayout position={'fixed'} bgLayoutColor="bg-[#F3F3F3]" paddingDekstop={'md:p-6 lg:p-6'} paddingTop={'lg:pt-30'} bgColor={'bg-[#F3F3F3]'}>
            <Helmet>
                <title>Beranda - Universitas Pasundan</title>
>>>>>>> origin/Budi
                <meta
                    name="description"
                    content="Universitas Pasundan (Unpas) adalah kampus unggulan di Bandung yang menawarkan program studi lengkap, fasilitas modern, dan kerjasama dengan industri. Daftar sekarang!"
                />
                <meta
                    name="keywords"
                    content="Universitas Pasundan, Unpas, Kampus Bandung, Program Studi, Pendaftaran Mahasiswa, Fakultas Unpas"
                />
                <meta property="og:title" content="Universitas Pasundan - Kampus Unggulan di Bandung" />
                <meta
                    property="og:description"
                    content="Universitas Pasundan (Unpas) adalah kampus unggulan di Bandung yang menawarkan program studi lengkap, fasilitas modern, dan kerjasama dengan industri."
                />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <meta property="og:image" content="https://www.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://www.unpas.ac.id" />
                <link rel="canonical" href="https://www.unpas.ac.id" />
=======
                <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://pmb.unpas.ac.id" />
                <link rel="canonical" href="https://pmb.unpas.ac.id" />
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://pmb.unpas.ac.id" />
                <link rel="canonical" href="https://pmb.unpas.ac.id" />
>>>>>>> 8bbe4dc (First Commit)
=======
                <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://pmb.unpas.ac.id" />
                <link rel="canonical" href="https://pmb.unpas.ac.id" />
>>>>>>> origin/Budi
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "Universitas Pasundan",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        "url": "https://www.unpas.ac.id",
                        "logo": "https://www.unpas.ac.id/logo-unpas.png",
=======
                        "url": "https://pmb.unpas.ac.id",
                        "logo": "https://pmb.unpas.ac.id/logo-unpas.png",
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
                        "url": "https://pmb.unpas.ac.id",
                        "logo": "https://pmb.unpas.ac.id/logo-unpas.png",
>>>>>>> 8bbe4dc (First Commit)
=======
                        "url": "https://pmb.unpas.ac.id",
                        "logo": "https://pmb.unpas.ac.id/logo-unpas.png",
>>>>>>> origin/Budi
                        "description": "Universitas Pasundan (Unpas) adalah kampus unggulan di Bandung yang menawarkan program studi lengkap, fasilitas modern, dan kerjasama dengan industri.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Jl. Lengkong Besar No. 68",
                            "addressLocality": "Bandung",
                            "postalCode": "40261",
                            "addressCountry": "Indonesia"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+62-22-4205945",
                            "email": "info@unpas.ac.id"
                        }
                    })}
                </script>
            </Helmet>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="relative space-y-8 md:space-y-12 lg:space-y-20">
                <HeroSection data={data.slider} />

                <MotionWrapper type="scaleUp" delay={0.2} className={' flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-6 lg:gap-10 md:mt-20 p-4 md:px-10 lg:px-12'}>
                    <div className="w-full h-full lg:aspect-[16/9] rounded-lg md:rounded-2xl lg:rounded-4xl">
                        <img loading="lazy" src={`${imageURL}/identities/${data.about.image1}`} alt={data.about.subtitle} className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl shadow-2xl shadow-primary/30" />
                    </div>
                    <div className="space-y-2 md:space-y-4 text-justify md:text-left w-full lg:w-[70%]">
                        <Title sizeMobile="text-center text-2xl" title={data.about.subtitle} />
                        <RichText content={data.about.description} />
                        <RichText content={data.about.content} />
                    </div>
                </MotionWrapper>
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
            <div className="relative space-y-8 md:space-y-14 lg:space-y-20">

                <HeroSection data={data.slider} />

                <div className={'flex md:hidden w-full justify-center items-center p-4 md:px-10 lg:px-12'}>
                    <InfoBox />
                </div>

                <AboutSection data={data} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi

                <StatsSection prodi={20} mahasiswa={5148} lulusan={3130} prestasi={100} />

                <PendaftaranSection
                    image={Section3}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    title="Jalur Pendaftaran"
                    subtitle="Jalur Pendaftaran"
                    jalurPendaftaran={data.jalur}
                    buttonText="Selengkapnya"
                />

                <ReasonSection data={data.unggulan} />

                <MotionWrapper type="scaleUp" delay={0.2} className={'flex flex-col gap-4 md:gap-6 lg:gap-10 md:px-10 lg:px-12'}>
                    <div className="text-center p-4 md:px-10 lg:px-12">
                        <Text text={'Universitas Pasundan'} color="text-red-500" />
                        <Title title={'Fakultas dan Program Studi'} />
                    </div>

                    <FakultasSwiper faculties={faculties} />

                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 rounded-lg md:rounded-2xl lg:rounded-4xl">
                        {faculties.map((faculty, index) => (
                            <div key={index} className={`${faculty.color} p-6 rounded-xl shadow-md`}>
                                <h3 className="font-semibold text-lg mb-4">{faculty.name}</h3>
                                <div className="space-y-2 bg-white p-4 rounded-lg md:rounded-2xl lg:rounded-4xl">
                                    {faculty.programs.map((program, idx) => (
                                        <p key={idx} className="text-sm text-gray-700">{program}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionWrapper>

                <MotionWrapper type="scaleUp" delay={0.2} className={'p-4 md:px-10 lg:px-12'}>
                    <InfoBox />
                </MotionWrapper>

                <VideoSwiper />

                <PrestasiSection prestasi={data.prestasi} imageURL={imageURL} />

                <MotionWrapper type="scaleUp" delay={0.2} className={'flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
                    <div className="text-center">
                        <Text text={'Universitas Pasundan'} color="text-red-500" />
                        <Title title={'Informasi dan Pengumuman'} />
                    </div>
                    <ArticleCard data={data.artikel} />
                </MotionWrapper>

                <MotionWrapper type="scaleUp" delay={0.2} className={'flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:px-10 lg:px-12'}>
                    <div className="text-center">
                        <Text text={'Universitas Pasundan'} color="text-red-500" />
                        <Title title={'Mitra'} />
                    </div>
                    <MitraCarousel datas={data.partner} />
                </MotionWrapper>

                <MotionWrapper type="scaleUp" delay={0.2} className={'w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10'}>
                    <div className="w-full text-center space-y-2 md:text-left md:w-1/2 p-4 md:px-10 lg:px-12">
                        <div>
                            <Text text={'Universitas Pasundan'} color="text-red-500" />
                            <Title title={'Kata Mereka Soal Unpas'} />
                        </div>
                        <Text text={'Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet'} />
                    </div>
                    <TestimonialSlider data={data.testimonials} />
                </MotionWrapper>
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
                    title="Pendaftaran"
                    subtitle="Jalur Pendaftaran"
                    jalurPendaftaran={data.jalur}
                />


                <div className="w-full flex justify-center items-center">
                    <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%]">
                        <ReasonSection data={data.unggulan} />
                    </div>
                </div>

                <VideoSwiper data={data.dukungan} />

                <FakultasSection faculties={faculties} faculties1={faculties1} faculties2={faculties2} faculties3={faculties3} />

                <PrestasiSection prestasi={data.prestasi} imageURL={imageURL} />

                <ArtikelSection data={data} />

                <div className="p-4 md:px-10 lg:px-12">
                    <MitraSection data={data.partner} />
                </div>

                <TestimonialSection data={data} displayDekstop="md:flex-row-reverse" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Home;