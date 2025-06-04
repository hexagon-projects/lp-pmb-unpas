
import { useEffect, useState } from "react";
import ButtonHoverBaru from "../../components/buttonHoverBaru";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import IdentityService from "../../fetching/identity";
import Check from "../../assets/icon/check.png"

const Pmdk = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    useEffect(() => {
        const fetchIdentity = async () => {
            try {
                const response = await IdentityService.getAllIdentities();
                if (response.length > 0) {
                    setIdentity(response[0]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching identity:", error);
                setLoading(false);
            }
        };

        fetchIdentity();
    }, []);

    const handleWhatsApp = () => {
        if (identity?.phone) {
            window.location.href = `https://wa.me/${identity.phone}`;
        } else {
            alert("Nomor WhatsApp admin tidak tersedia.");
        }
    };

    const handleClick = (url) => {
        window.location.href = url;
    };

    if (loading) {
        return (
            <UserLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Memuat data...</p>
                </div>
            </UserLayout>
        );
    }

    return (
        <UserLayout
            bgLayoutColor="bg-[#F3F4F4]"
            bgColor={"bg-[#F3F3F3]"}
            position={"fixed"}
            margin={""}
            titleColor={"text-black"}
            paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
            paddingTop={"lg:pt-30"}
            type={"fadeInUp"}
            duration={0.5}
            display={'hidden'}
            bottomMobile={'bottom-6'}
            marginMobile={'m-0'}
        >
            {/* HeroSection */}
            <div className='px-[20px] py-[40px] md:p-[40px] lg:px-[60px] lg:py-[60px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-6 lg:gap-8'>
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left">
                    <h1 className="text-[34px] md:text-[54px] lg:text-[60px] font-bold">Masuk UNPAS Cuma Modal Rapor, Emang Bisa? BISA BANGET!</h1>
                    <div className="w-1/2 xl:w-1/3">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick('https://registrasi.unpas.ac.id/')}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 border border-red-500">
                    <img src="" alt="" className="w-full h-full object-cover " />
                </div>
            </div>

            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center lg:gap-32">
                <div className="w-full md:w-1/2">

                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Apa Itu Jalur PMDK Akademik?</h2>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px]">Ini jalur seleksi masuk tanpa ujian. Kamu cukup daftar pakai nilai rapor kelas X dan XI, dan kalau memenuhi kriteria, langsung lolos! Cocok banget buat kamu yang nilainya stabil dan mau lanjut kuliah tanpa ribet.</p>
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick('https://registrasi.unpas.ac.id/')}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                        />
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            text="Hubungi Admin"
                            onClick={handleWhatsApp}
                            hoverColor="#034833"
                            borderColor="#034833"
                            textColor="black"
                            textHoverColor="white"
                        />
                    </div>
                </div>
            </div>

            {/* SiapaSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-20">
                <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Siapa Yang Bisa Daftar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    <div className="h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-[#F7F6FF] text-black hover:bg-gradient-to-b from-[#985534] via-[#985534] to-black group hover:-translate-y-2 hover:text-white transition-all duration-500 rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full bg-black/20 backdrop-blur-sm group-hover:bg-white/20 transition duration-500">
                            <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                        </div>
                        <p className="text-[20px] md:text-[24px] lg:text-[28px]">Siswa kelas XII tahun ajaran 2024/2025 (yang lulus tahun 2025)</p>
                    </div>
                    <div className="h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-[#F7F6FF] text-black hover:bg-gradient-to-b from-[#985534] via-[#985534] to-black group hover:-translate-y-2 hover:text-white transition-all duration-500 rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full bg-black/20 backdrop-blur-sm group-hover:bg-white/20 transition duration-500">
                            <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                        </div>
                        <p className="text-[20px] md:text-[24px] lg:text-[28px]">Lulusan tahun sebelumnya juga boleh</p>
                    </div>
                    <div className="h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-[#F7F6FF] text-black hover:bg-gradient-to-b from-[#985534] via-[#985534] to-black group hover:-translate-y-2 hover:text-white transition-all duration-500 rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full bg-black/20 backdrop-blur-sm group-hover:bg-white/20 transition duration-500">
                            <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                        </div>
                        <p className="text-[20px] md:text-[24px] lg:text-[28px]">Nilai rapor oke & siap upload dokumen resmi dari sekolah</p>
                    </div>
                </div>
            </div>

            {/* NilaiSection */}
            <div className="p-[0px] md:p-[40px] lg:px-[34px] lg:py-[60px] cta_container">
                <div className="px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[120px] bg-[#985534] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 nilai-box">
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-10 lg:space-y-12">
                        <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold max-w-[80%] md:max-w-1/2 lg:max-w-[60%] text-white">GIMANA CARA PENILAIANNYA</h2>
                        <div className="flex flex-col justify-between">
                            <div className="py-5 border-t border-b border-black flex justify-between items-center">
                                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white">Nilai yang dilihat: nilai pengetahuan semester 1–4</p>
                                <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                    <p className="font-bold">-</p>
                                </div>
                            </div>

                            <div className="py-5 border-b border-black flex justify-between items-center">
                                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white">Rata-rata nilai sesuai standar masing-masing jurusan</p>
                                <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                    <p className="font-bold">-</p>
                                </div>
                            </div>

                            <div className="py-5 border-b border-black flex justify-between items-center">
                                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white">Scan nilai harus asli, ada tanda tangan, stempel, atau barcode sekolah</p>
                                <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                    <p className="font-bold">-</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                text="Hubungi Admin"
                                onClick={handleWhatsApp}
                                bgColor={'none'}
                                hoverColor="#ffffff"
                                borderColor="#ffffff"
                                textColor="white"
                                textHoverColor="black"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-full">
                        <img src="" alt="" className="w-full h-full object-cover border border-red-500" />
                    </div>
                </div>
                <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* KeuntunganSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px]">
                <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center">
                    <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Keuntungan Daftar Jalur Ini</h2>
                    <div className="w-full md:w-1/2 lg:w-[40%] xl:w-[30%] grid grid-cols-2 gap-2">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick('https://registrasi.unpas.ac.id/')}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                        />
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            text="Hubungi Admin"
                            onClick={handleWhatsApp}
                            hoverColor="#034833"
                            borderColor="#034833"
                            textColor="black"
                            textHoverColor="white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">

                </div>
            </div>

            {/* DokumenSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-12 lg:space-y-16">
                <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Dokumen yang Perlu Disiapkan</h2>
                <div className="w-full flex flex-col justify-center items-center border border-red-500">

                </div>
            </div>
            <Countdown />
            <CTASection />
        </UserLayout>
    )
}

export default Pmdk