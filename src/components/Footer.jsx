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
            </div>

            <div className="mt-8 w-full text-center py-4 bg-primary rounded-lg md:rounded-2xl lg:rounded-4xl">
                <Text sizeMobile="text-xs md:text-xs lg:text-xs" text={'© 2045 Hexagon Copyright and rights reserved'} />
            </div>
        </footer>
    );
};

export default Footer;
