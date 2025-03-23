import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import Title from "./Title";
import Text from "./Text";
import Logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import Loading from "./Loading";
import FakultasService from "../fetching/fakultas";

const Footer = () => {
    const [fakultas, setFakultas] = useState([])
    // const [loading, setLoading] = useState(true)

    const fetchFakultas = async () => {
        try {
            const response = await FakultasService.getAllFakultas()
            setFakultas(response)
            // setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchFakultas()
    }, [])

    // if (loading) {
    //     return <Loading />
    // }

    return (
        <footer className="bg-green-800 text-white p-4 md:p-6 lg:p-8 rounded-t-xl m-2 md:m-6 lg:m-6 rounded-xl md:rounded-2xl lg:rounded-4xl">
            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 lg:gap-8">
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
                        <div className="flex flex-col justify-center items-start gap-2">
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Kampus I</a>
                            <a href="" className="text-xs hover:font-bold cursor-pointer">Jl. Lengkong Besar No.68</a>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 w-full text-center py-4 bg-primary rounded-xl md:rounded-2xl lg:rounded-4xl">
                <Text
                    sizeMobile="text-xs md:text-xs lg:text-xs"
                    text={`© ${new Date().getFullYear()} Unpas Copyright and rights reserved`}
                />
            </div>
        </footer>
    );
};

export default Footer;
