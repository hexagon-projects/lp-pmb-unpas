import UserLayout from "./layouts/UserLayout";
import Section3 from "../assets/home/section2.png";
import React, { useEffect, useState } from "react";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import VideoSwiper from "../components/home/VideoSwiper";
import { Helmet } from "react-helmet-async";
// import Loading from "../components/Loading";
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
import Title from "../components/Title";
import Button from "../components/Button";
import Path from "../assets/path.png"
import CtaPath from "../assets/cta_path.png"
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import InteractiveGrid from "@/components/InteractiveCard";

const faculties = [
    {
        name: 'Fakultas Keguruan dan Ilmu Pendidikan',
        slug: 'fakultas-keguruan-dan-ilmu-pendidikan',
        programs: [
            { name: 'S1 - Pendidikan Pancasila & Kewarganegaraan', slug: 'pendidikan-pancasila-kewarganegaraan' },
            { name: 'S1 - Pendidikan Ekonomi Akuntansi', slug: 'pendidikan-ekonomi-akuntansi' },
            { name: 'S1 - Pendidikan Bahasa', slug: 'pendidikan-bahasa' },
            { name: 'S1 - Sastra Indonesia dan Daerah', slug: 'sastra-indonesia-daerah' },
            { name: 'S1 - Pendidikan Matematika', slug: 'pendidikan-matematika' },
            { name: 'S1 - Pendidikan Biologi', slug: 'pendidikan-biologi' },
            { name: 'S1 - Pendidikan Guru Sekolah Dasar', slug: 'pendidikan-guru-sekolah-dasar' }
        ]
    },
    {
        name: 'Fakultas Teknik',
        slug: 'fakultas-teknik',
        programs: [
            { name: 'S1 - Teknik Informatika', slug: 'teknik-informatika' },
            { name: 'S1 - Teknik Mesin', slug: 'teknik-mesin' },
            { name: 'S1 - Teknik Industri', slug: 'teknik-industri' },
            { name: 'S1 - Teknik Lingkungan', slug: 'teknik-lingkungan' },
            { name: 'S1 - Teknologi Pangan', slug: 'teknologi-pangan' }
        ]
    },
    {
        name: 'Fakultas Ekonomi dan Bisnis',
        slug: 'fakultas-ekonomi-dan-bisnis',
        programs: [
            { name: 'S1 - Akuntansi', slug: 'akuntansi' },
            { name: 'S1 - Manajemen', slug: 'manajemen' },
            { name: 'S1 - Ekonomi Pembangunan', slug: 'ekonomi-pembangunan' }
        ]
    },
    {
        name: 'Fakultas Hukum',
        slug: 'fakultas-hukum',
        programs: [
            { name: 'S1 - Ilmu Hukum', slug: 'ilmu-hukum' }
        ]
    },
    {
        name: 'Program Pasca Sarjana',
        slug: 'program-pasca-sarjana',
        programs: [
            { name: 'S2 - Magister Ilmu Administrasi & Kebijakan Publik', slug: 'magister-ilmu-administrasi-kebijakan-publik' },
            { name: 'S2 - Magister Manajemen', slug: 'magister-manajemen' },
            { name: 'S2 - Magister Teknik Industri', slug: 'magister-teknik-industri' },
            { name: 'S2 - Magister Ilmu Hukum', slug: 'magister-ilmu-hukum' },
            { name: 'S2 - Magister Teknologi Pangan', slug: 'magister-teknologi-pangan' },
            { name: 'S2 - Magister Pendidikan Matematika', slug: 'magister-pendidikan-matematika' },
            { name: 'S2 - Magister Teknik Mesin', slug: 'magister-teknik-mesin' },
            { name: 'S2 - Magister Ilmu Komunikasi', slug: 'magister-ilmu-komunikasi' },
            { name: 'S2 - Magister Pendidikan Bahasa Indonesia', slug: 'magister-pendidikan-bahasa-indonesia' },
            { name: 'S3 - Doktor Ilmu Manajemen', slug: 'doktor-ilmu-manajemen' },
            { name: 'S3 - Doktor Ilmu Sosial', slug: 'doktor-ilmu-sosial' },
            { name: 'S3 - Doktor Ilmu Hukum', slug: 'doktor-ilmu-hukum' }
        ]
    },
    {
        name: 'Fakultas Kedokteran',
        slug: 'fakultas-kedokteran',
        programs: [
            { name: 'S1 - Pendidikan Dokter', slug: 'pendidikan-dokter' },
            { name: 'Profesi - Profesi Dokter', slug: 'profesi-dokter' }
        ]
    },
    {
        name: 'Fakultas Pendidikan',
        slug: 'fakultas-pendidikan',
        programs: [
            { name: 'S1 - Pendidikan Matematika', slug: 'pendidikan-matematika' },
            { name: 'S1 - Pendidikan Biologi', slug: 'pendidikan-biologi' },
            { name: 'S1 - Pendidikan Pancasila dan Kewarganegaraan', slug: 'pendidikan-pancasila-kewarganegaraan' },
            { name: 'S1 - Pendidikan Guru Sekolah Dasar', slug: 'pendidikan-guru-sekolah-dasar' },
            { name: 'S1 - Pendidikan Bahasa dan Sastra Indonesia', slug: 'pendidikan-bahasa-sastra-indonesia' },
            { name: 'S1 - Pendidikan Ekonomi', slug: 'pendidikan-ekonomi' }
        ]
    },
    {
        name: 'Fakultas Ilmu Sosial Dan Ilmu Politik',
        slug: 'fakultas-ilmu-sosial-dan-ilmu-politik',
        programs: [
            { name: 'S1 - Administrasi Publik', slug: 'administrasi-publik' },
            { name: 'S1 - Kesejahteraan Sosial', slug: 'kesejahteraan-sosial' },
            { name: 'S1 - Hubungan Internasional', slug: 'hubungan-internasional' },
            { name: 'S1 - Ilmu Administrasi Bisnis', slug: 'ilmu-administrasi-bisnis' },
            { name: 'S1 - Ilmu Komunikasi', slug: 'ilmu-komunikasi' }
        ]
    },
    {
        name: 'Fakultas Ilmu Seni dan Sastra',
        slug: 'fakultas-ilmu-seni-dan-sastra',
        programs: [
            { name: 'S1 - Sastra Inggris', slug: 'sastra-inggris' },
            { name: 'S1 - Desain Komunikasi Visual', slug: 'desain-komunikasi-visual' },
            { name: 'S1 - Fotografi dan Film', slug: 'fotografi-dan-film' },
            { name: 'S1 - Seni Musik', slug: 'seni-musik' }
        ]
    }
];

const faculties1 = faculties.slice(0, 3);
const faculties2 = faculties.slice(3, 6);
const faculties3 = faculties.slice(6, 9);

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
        dukungan: []
    });
    // const [loading, setLoading] = useState(true);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        const loadData = async () => {
            // setLoading(true);
            try {
                const fetchedData = await fetchAllData();
                setData(fetchedData);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        loadData();
    }, []);

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <UserLayout position={'fixed'} bgLayoutColor="bg-[#F3f4f4]" paddingDekstop={'md:p-6 lg:p-6'} paddingTop={'lg:pt-[100px]'} bgColor={'bg-[#F3F3F3]'}>
            <Helmet>
                <title>Beranda - Universitas Pasundan</title>
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
                <meta property="og:image" content="https://pmb.unpas.ac.id/logo-unpas.png" />
                <meta property="og:url" content="https://pmb.unpas.ac.id" />
                <link rel="canonical" href="https://pmb.unpas.ac.id" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "Universitas Pasundan",
                        "url": "https://pmb.unpas.ac.id",
                        "logo": "https://pmb.unpas.ac.id/logo-unpas.png",
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

            <div className="relative space-y-8 md:space-y-14 lg:space-y-20">

                <HeroSection data={data?.slider} />
                {/* <div className="bg-white">
                </div> */}

                <div className={'flex md:hidden w-full justify-center items-center p-4 md:px-10 lg:px-12'}>
                    <InfoBox />
                </div>

                <AboutSection data={data} />

                <StatsSection prodi={20} mahasiswa={5148} lulusan={3130} prestasi={100} />

                <div className="space-y-8 md:space-y-14 lg:space-y-20">
                    <div className=" bg-[#717171]/5 border-2 border-[#ebebeb]">
                        <PendaftaranSection
                            image={Section3}
                            title="Pendaftaran"
                            subtitle="Jalur Pendaftaran"
                            jalurPendaftaran={data?.jalur}
                        />
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%]">
                            <ReasonSection data={data?.unggulan} />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center p-4 md:px-6 md:py-9 lg:px-8 lg:py-11">
                    <div className={'w-full md:w-[90%] lg:w-[90%] xl:w-[80%] px-4 py-4 rainbow-border rounded-xl md:rounded-2xl lg:rounded-4xl lg:p-6 relative z-2'}>
                        <div className="flex justify-between md:justify-between items-center text-center relative z-2">
                            <div className="flex items-center gap-4 text-left">
                                <div className="w-[60%] md:w-fit">
                                    <Title sizeText="text-sm md:text-2xl lg:text-[32px]" fontWeight="font-semibold" title={'Yuk Daftar Di Unpas Sekarang!'} />
                                </div>
                                <FaArrowRightLong className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 animated-arrow" />
                            </div>
                            <div className="">
                                <Button css={'pulsating-button'} text={'Daftar Sekarang'} bgColor="bg-primary" padding="p-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <VideoSwiper data={data?.dukungan} />

                <FakultasSection faculties={faculties} faculties1={faculties1} faculties2={faculties2} faculties3={faculties3} />

                <PrestasiSection prestasi={data?.prestasi} imageURL={imageURL} />

                <div className="relative space-y-8 md:space-y-14 lg:space-y-20">
                    <div className="relative z-2">
                        <ArtikelSection data={data} />
                    </div>

                    <div className="relative z-2 p-4 md:px-10 lg:px-12">
                        <MitraSection data={data?.partner} />
                    </div>

                    <div className="relative z-2 p-4 md:px-10 lg:px-12">
                        <TestimonialSection data={data?.testimonials} displayDekstop="md:flex-col" />
                    </div>

                    <div className="relative z-2 p-4 md:px-10 lg:px-12">
                        <CTASection />
                    </div>

                    <div className="absolute top-0 h-full w-full">
                        <InteractiveGrid />
                    </div>
                </div>

            </div>
        </UserLayout>
    );
};

export default Home;