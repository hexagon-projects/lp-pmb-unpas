<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Title from "./Title";
import Text from "./Text";
import bgFooter from "../assets/bg-footer.png"

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white p-3 rounded-t-xl md:m-6 lg:m-12 rounded-lg md:rounded-2xl lg:rounded-4xl">
            <div className="flex flex-col gap-4">
                <div className="space-y-4 lg:w-full p-4 md:px-10 md:py-18 lg:px-12 lg:py-20 rounded-lg md:rounded-2xl lg:rounded-4xl text-black bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgFooter})` }}>
                    <Title title={'Bergabung dengan Kami'} color="text-black" />
                    <Text color="text-black" text={'Dapatkan update terbaru dan tetap terhubung dengan kami! Masukkan email kamu di bawah ini untuk terhubung dengan kami.'} />
                    <div className="flex justify-between gap-4 w-full">
                        <input type="email" name="" id="" placeholder="Email" className="text-xs w-full px-4 py-4 border border-black rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        <button className="text-xs py-4 bg-white rounded-lg md:rounded-2xl lg:rounded-4xl px-4 font-bold">kirim</button>
                    </div>
                    <div className="flex justify-start gap-3">
                        <IoClose className="w-5 h-5" />
                        <FaInstagram className="w-5 h-5" />
                        <FaFacebookF className="w-5 h-5" />
                        <FaTiktok className="w-5 h-5" />
                        <FaYoutube className="w-5 h-5" />
                    </div>
                </div>

                <div className="w-full flex flex-col items-start gap-6">
                    <div className="w-full mt-8 flex justify-between lg:justify-between items-start gap-10">
                        <div className="space-y-4">
                            <Text sizeMobile="text-sm" text={'Navigasi'} weight={'font-semibold'} color="text-white" />
                            <div className="flex flex-col gap-4 items-start">
                                <a href="/" className="text-xs hover:font-bold cursor-pointer">Beranda</a>
                                <a href="/fakultas" className="text-xs hover:font-bold cursor-pointer">Fakultas & Prodi</a>
                                <a href="/jalur" className="text-xs hover:font-bold cursor-pointer">Jalur & Jadwal</a>
                                <a href="/fasilitas" className="text-xs hover:font-bold cursor-pointer">Fasilitas</a>
                                <a href="/artikel" className="text-xs hover:font-bold cursor-pointer">Artikel</a>
                                <a href="/mahasiswa-dan-alumni" className="text-xs hover:font-bold cursor-pointer">Mahasiswa & Alumni</a>
                                <a href="/faq" className="text-xs hover:font-bold cursor-pointer">FAQ & Bantuan</a>
                                <a href="/kontak" className="text-xs hover:font-bold cursor-pointer">Kontak</a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Text sizeMobile="text-sm" text={'Fakultas'} weight={'font-semibold'} color="text-white" />
                            <div className="flex flex-col gap-4 items-start">
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Pendidikan</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Keguruan dan Ilmu Pendidikan</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Ekonomi dan Bisnis</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Ekonomi dan Bisnis</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Hukum</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Ilmu Sosial dan Ilmu Politik</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Ilmu Seni dan Sastra</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Fakultas Kedokteran</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Program Pasca Sarjana</a>
                            </div>
                        </div>

                        <div className="md:my-12 justify-around md:flex-col gap-4 hidden md:flex">
                            <div className="flex flex-col justify-center items-start gap-2">
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-2">
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-2">
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-2">
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                                <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                            </div>
                        </div>
                    </div>

                    <div className="md:my-12 justify-around flex md:flex-col gap-4 md:hidden">
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import Title from "./Title";
import Text from "./Text";
import Logo from "../assets/logo.png"
<<<<<<< HEAD
=======
import LogoOutline from "../assets/logo-outline1.png";
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
import { useEffect, useState } from "react";
import Loading from "./Loading";
import FakultasService from "../fetching/fakultas";

const Footer = () => {
    const [fakultas, setFakultas] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchFakultas = async () => {
        try {
            const response = await FakultasService.getAllFakultas()
            setFakultas(response)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchFakultas()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
<<<<<<< HEAD
        <footer className="bg-green-800 text-white p-4 md:p-6 lg:p-8 rounded-t-xl m-2 md:m-6 lg:m-6 rounded-lg md:rounded-2xl lg:rounded-4xl">
            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 lg:gap-8">
=======
        <footer className="bg-[#034833] text-white p-4 md:p-6 lg:p-8 rounded-t-xl m-2 md:m-6 lg:m-6 rounded-lg md:rounded-2xl lg:rounded-4xl relative overflow-hidden">
            <div className="absolute -top-0 left-3/5 w-full h-full opacity-50">
                <img src={LogoOutline} alt={"Logo Outline Unpas"} loading="lazy" className="h-[70vh]" />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 lg:gap-8 bg-cover bg-no-repeat overflow-hidden">
<<<<<<< HEAD
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Radh
>>>>>>> origin/Budi
                <div className="w-full md:w-fit space-y-4 text-white mb-4 md:mb-0">
                    <img src={Logo} alt="Logo Universitas Pasundan" className="w-14 h-14 md:w-16 md:h-16" loading="lazy" />
                    <Title title={'Terhubung Dengan Kami'} color="text-white" />
                    <div className="flex justify-start gap-3">
                        <FaSquareXTwitter className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                        <RiInstagramFill className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                        <FaFacebookSquare className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                        <AiFillTikTok className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                        <FaYoutube className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </div>
                </div>

                <div className="w-full flex justify-around items-start gap-10">
                    <div className="space-y-4">
                        <Text sizeMobile="text-sm" text={'Navigasi'} weight={'font-semibold'} color="text-white" />
                        <div className="flex flex-col gap-4 items-start">
                            <a href="/" className="text-xs hover:font-bold cursor-pointer">Beranda</a>
                            <a href="/fakultas" className="text-xs hover:font-bold cursor-pointer">Fakultas & Prodi</a>
                            <a href="/jalur" className="text-xs hover:font-bold cursor-pointer">Jalur & Jadwal</a>
                            <a href="/fasilitas" className="text-xs hover:font-bold cursor-pointer">Fasilitas</a>
                            <a href="/mahasiswa-dan-alumni" className="text-xs hover:font-bold cursor-pointer">Mahasiswa & Alumni</a>
                            <a href="/prestasi" className="text-xs hover:font-bold cursor-pointer">Prestasi</a>
                            <a href="/artikel" className="text-xs hover:font-bold cursor-pointer">Artikel</a>
                            <a href="/mitra" className="text-xs hover:font-bold cursor-pointer">Mitra</a>
                            <a href="/testimoni" className="text-xs hover:font-bold cursor-pointer">Testimoni</a>
                            <a href="/faq" className="text-xs hover:font-bold cursor-pointer">FAQ & Bantuan</a>
                            <a href="/kontak" className="text-xs hover:font-bold cursor-pointer">Kontak</a>
                        </div>
                    </div>

                    <div className="space-y-4 hidden lg:block">
                        <Text sizeMobile="text-sm" text={'Fakultas'} weight={'font-semibold'} color="text-white" />
                        <div className="flex flex-col gap-4 items-start">
                            {fakultas.map((item) => (
                                <a key={item.id} href={`/fakultas/${item.slug}`} className="text-xs hover:font-bold cursor-pointer">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="justify-around md:flex-col gap-4 flex flex-col">
                        <Text sizeMobile="text-sm" text={'Lokasi'} weight={'font-semibold'} color="text-white" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus II</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Tamansari No.6-8</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus III</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Wartawan IV No.22</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus IV</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Dr. Setiabudhi No.193</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus V</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Sumatera No.41</a>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 w-full text-center py-4 bg-primary rounded-lg md:rounded-2xl lg:rounded-4xl">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <Text sizeMobile="text-xs md:text-xs lg:text-xs" text={'© 2045 Hexagon Copyright and rights reserved'} />
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
                <Text
                    sizeMobile="text-xs md:text-xs lg:text-xs"
                    text={`© ${new Date().getFullYear()} Unpas Copyright and rights reserved`}
                />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
            </div>
        </footer>
    );
};

export default Footer;
