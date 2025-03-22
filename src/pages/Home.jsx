import UserLayout from "./layouts/UserLayout";
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

const faculties = [
    {
        name: 'Fakultas Keguruan dan Ilmu Pendidikan',
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
        programs: [
            'S1 - Akuntansi',
            'S1 - Manajemen',
            'S1 - Ekonomi Pembangunan'
        ]
    },
    {
        name: 'Fakultas Hukum',
        programs: ['S1 - Ilmu Hukum']
    },
    {
        name: 'Program Pasca Sarjana',
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
        programs: [
            'S1 - Administrasi Publik',
            'S1 - Kesejahteraan Sosial',
            'S1 - Hubungan Internasional',
            'S1 - Ilmu Administrasi Bisnis',
            'S1 - Ilmu Komunikasi'
        ]
    },
    {
        name: 'Fakultas Ilmu Seni dan Sastra',
        programs: [
            'S1 - Sastra Inggris',
            'S1 - Desain Komunikasi Visual',
            'S1 - Fotografi dan Film',
            'S1 - Seni Musik'
        ]
    },
];

const faculties1 = faculties.slice(0, 3)
const faculties2 = faculties.slice(3, 6)
const faculties3 = faculties.slice(6, 9)

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
    const [loading, setLoading] = useState(true);
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
        <UserLayout position={'fixed'} bgLayoutColor="bg-[#F3F3F3]" paddingDekstop={'md:p-6 lg:p-6'} paddingTop={'lg:pt-30'} bgColor={'bg-[#F3F3F3]'}>
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

                <HeroSection data={data.slider} />

                <div className={'flex md:hidden w-full justify-center items-center p-4 md:px-10 lg:px-12'}>
                    <InfoBox />
                </div>

                <AboutSection data={data} />

                <StatsSection prodi={20} mahasiswa={5148} lulusan={3130} prestasi={100} />

                <PendaftaranSection
                    image={Section3}
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

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Home;