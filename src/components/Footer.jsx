import { useState, useEffect, lazy, Suspense } from "react";
import Title from "./Title";
import Text from "./Text";
import Logo from "../assets/logo.webp";
import LogoOutline from "../assets/logo-outline1.png";
import Loading from "./Loading";
import FakultasService from "../fetching/fakultas";

const FaYoutube = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaYoutube })));
const FaFacebookSquare = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaFacebookSquare })));
const FaSquareXTwitter = lazy(() => import("react-icons/fa6").then(module => ({ default: module.FaSquareXTwitter })));
const RiInstagramFill = lazy(() => import("react-icons/ri").then(module => ({ default: module.RiInstagramFill })));
const AiFillTikTok = lazy(() => import("react-icons/ai").then(module => ({ default: module.AiFillTikTok })));

const Footer = () => {
    const [fakultas, setFakultas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFakultas = async () => {
        try {
            const response = await FakultasService.getAllFakultas();
            setFakultas(response);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFakultas();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <footer className="bg-[#034833] text-white p-4 md:p-6 lg:p-8 m-2 mb-22 md:m-6 md:mb-22 lg:m-6 rounded-xl md:rounded-2xl lg:rounded-4xl relative overflow-hidden">
            <div className="absolute -top-0 left-25 md:left-[70%] w-full h-full opacity-50 object-cover">
                <img src={LogoOutline} alt={"Logo Outline Unpas"} loading="lazy" className="h-[60vh] lg:h-[65vh] object-cover object-left" />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 lg:gap-8 bg-cover bg-no-repeat overflow-hidden">
                <div className="w-full md:w-fit space-y-4 mb-4 md:mb-0">
                    <img src={Logo} alt="Logo Universitas Pasundan" className="w-14 h-14 md:w-16 md:h-16" loading="lazy" />
                    <Title title={'Terhubung Dengan Kami'} color="text-white" sizeText="text-lg md:text-2xl" />
                    <div className="flex justify-start gap-3">
                        <div onClick={() => window.location.href = 'https://x.com/univ_pasundan'}>
                            <FaSquareXTwitter className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-white hover:text-primary transition-colors duration-300" />
                        </div>
                        <div onClick={() => window.location.href = 'https://www.instagram.com/pmbunpas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}>
                            <RiInstagramFill className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-white hover:text-primary transition-colors duration-300" />
                        </div>
                        <div onClick={() => window.location.href = 'https://www.facebook.com/universitaspasundan'}>
                            <FaFacebookSquare className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-white hover:text-primary transition-colors duration-300" />
                        </div>
                        <div onClick={() => window.location.href = 'https://www.tiktok.com/@univ_pasundan'}>
                            <AiFillTikTok className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-white hover:text-primary transition-colors duration-300" />
                        </div>
                        <div onClick={() => window.location.href = 'https://www.youtube.com/@UniversitasPasundanOfficial'}>
                            <FaYoutube className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-white hover:text-primary transition-colors duration-300" />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-between md:justify-around items-start gap-10">
                    <div className="flex flex-col gap-4">
                        <Text sizeMobile="text-sm" text={'Navigasi'} weight={'font-semibold'} color="text-white" />
                        <div className="flex flex-col gap-4 items-start">
                            <a href="/" className="text-xs hover:font-medium cursor-pointer">Beranda</a>
                            <a href="/fakultas" className="text-xs hover:font-medium cursor-pointer">Fakultas & Prodi</a>
                            <a href="/jalur" className="text-xs hover:font-medium cursor-pointer">Jalur & Jadwal</a>
                            <a href="/fasilitas" className="text-xs hover:font-medium cursor-pointer">Fasilitas</a>
                            <a href="/mahasiswa-dan-alumni" className="text-xs  min-w-[150px]    hover:font-medium cursor-pointer">Mahasiswa & Alumni</a>
                            <a href="/prestasi" className="text-xs hover:font-medium cursor-pointer">Prestasi</a>
                            <a href="/dukungan" className="text-xs hover:font-medium cursor-pointer">Dukungan</a>
                            <a href="/artikel" className="text-xs hover:font-medium cursor-pointer">Artikel</a>
                            <a href="/mitra" className="text-xs hover:font-medium cursor-pointer">Mitra</a>
                            <a href="/testimoni" className="text-xs hover:font-medium cursor-pointer">Testimoni</a>
                            <a href="/faq" className="text-xs hover:font-medium cursor-pointer">FAQ & Bantuan</a>
                            <a href="/kontak" className="text-xs hover:font-medium cursor-pointer">Kontak</a>
                        </div>
                    </div>

                    <div className="space-y-4 hidden lg:block">
                        <Text sizeMobile="text-sm" text={'Fakultas'} weight={'font-semibold'} color="text-white" />
                        <div className="flex flex-col gap-4 items-start  ">
                            {fakultas.map((item) => (
                                <a key={item.id} href={`/fakultas/${item.slug}`} className="text-xs hover:font-medium max-w-[200px] cursor-pointer">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="justify-around md:flex-col gap-4 flex flex-col">
                        <Text sizeMobile="text-sm" text={'Lokasi'} weight={'font-semibold'} color="text-white" />
                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus II</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Tamansari No.6-8</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus IV</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Dr. Setiabudhi No.193</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus V</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Sumatera No.41</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 w-full text-center py-4 bg-primary rounded-lg md:rounded-2xl lg:rounded-4xl">
                <Text
                    sizeMobile="text-xs md:text-xs lg:text-xs"
                    text={`© ${new Date().getFullYear()} Unpas Copyright and rights reserved`}
                />
            </div>
        </footer >
    );
};

export default Footer;