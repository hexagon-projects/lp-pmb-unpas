
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import ButtonHoverBaru from "../../components/buttonHoverBaru";
import NilaiSection from "../../components/NilaiSection";

import { useEffect, useState } from "react";
import IdentityService from "../../fetching/identity";

import Icon1 from '../../assets/icon/kitab.png'
import Icon2 from '../../assets/icon/sertif2.png'
import Icon3 from '../../assets/icon/sertif-verif.png'
import Icon4 from '../../assets/icon/file-cklt.png'

import Bg1 from '../../assets/jalur/hafidz/1.png'
import Bg2 from '../../assets/jalur/hafidz/2.png'
import Bg3 from '../../assets/jalur/hafidz/3.png'
import Bg4 from '../../assets/jalur/hafidz/4.png'
import JalurHero2 from "../../components/JalurHero2";

const Hafidz = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Unggulans = [
        {
            title: 'Tanpa Tes Akademik – Kamu diprioritaskan langsung masuk tanpa tes akademik biasa.'
        },
        {
            title: 'Bisa Pilih Semua Jurusan – Berlaku untuk semua program studi di UNPAS*'
        },
        {
            title: 'Beasiswa Khusus Hafidz – Potongan biaya DPP hingga 100%!'
        }
    ]

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
            <JalurHero2 Title={'Kuliah Berkualitas untuk Para Hafidz — Gak Perlu Tes, Dapat Beasiswa!'} subtitle={'Hafalanmu Jadi Jalan Masuk ke UNPAS! Punya hafalan Al-Qur’an minimal 5 juz? Kini hafalanmu bukan cuma jadi amal, tapi juga jadi jalan menuju masa depan cerah lewat Jalur Hafidz Al-Qur’an UNPAS.'} Img={Bg1} nameJalur={'hafidz'} />

            {/* NilaiSection */}
            <div className="px-[0px] py-[40px] md:p-[40px] lg:px-[34px] lg:py-[60px] cta_container">
                <div className="px-[40px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[120px] bg-[#985534] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] flex flex-col-reverse md:flex-row-reverse justify-center md:justify-between items-center gap-6 lg:gap-28 nilai-box">
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-10 lg:space-y-12">
                        {/* <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold max-w-[80%] md:max-w-1/2 lg:max-w-[60%] text-white"></h2> */}
                        <div className="flex flex-col justify-between">
                            {Unggulans.map((item, index) => (
                                <div key={index} className="py-5 border-b border-black flex justify-between items-center gap-4">
                                    <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white">{item.title}</p>
                                    <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                        <p className="font-bold">-</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-full">
                            <img src={Bg4} alt="" className="w-[70%] md:w-[60%] mx-auto" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white italic">*Kecuali Fakultas Kedokteran</p>
                        <div className="w-full lg:w-5/6 grid grid-cols-2 gap-2 md:gap-4">
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                width={'full'}
                                text="Daftar"
                                onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=hafidz`)}
                                bgColor="#FEF251"
                                hoverColor="#D1C300"
                                borderColor="#C73929"
                                textColor="black"
                                textHoverColor="black"
                                fontLg="lg:text-xs"
                            />
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                text="Hubungi Admin"
                                onClick={handleWhatsApp}
                                hoverColor="#034833"
                                borderColor="#034833"
                                textColor="black"
                                textHoverColor="white"
                                fontLg="lg:text-xs"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-full">
                        <img src={Bg2} alt="" className="w-full h-full object-cover" />
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
            <div className="">
                <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:pt-[60px] lg:pb-[0px]">
                    <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Persyaratan Utama</h2>
                    <div className="w-full md:w-1/2 lg:w-[40%] xl:w-[30%] grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=hafidz`)}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                            fontLg="pulsating-button"
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

                {/* Tablet & Dekstop */}
                <div className="">
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 w-full p-10 ">
                        <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[40vh] xl:h-[30vh] flex flex-col justify-center items-center md:gap-8">
                            <div className="w-12 h-12">
                                <img src={Icon1} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Hafalan Minimal 5 Juz</p>
                        </div>

                        <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                            <div className="w-12 h-12">
                                <img src={Icon2} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Sertifikat resmi dari pesantren atau lembaga</p>
                        </div>

                        <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                            <div className="w-12 h-12">
                                <img src={Icon3} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Surat keterangan dari sekolah atau ustadz pembimbing</p>
                        </div>

                        <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[40vh] xl:h-[30vh] flex flex-col justify-center items-center md:gap-8">
                            <div className="w-12 h-12">
                                <img src={Icon4} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Tambahkan dokumen pendukung seperti ijazah atau skl</p>
                        </div>
                    </div>
                </div>

                {/* Mobile  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-6 w-full p-6 md:hidden">
                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-between items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon1} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Hafalan Minimal 5 Juz</p>
                    </div>

                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon2} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Sertifikat resmi dari pesantren atau lembaga</p>
                    </div>

                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon3} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Surat keterangan dari sekolah atau ustadz pembimbing</p>
                    </div>

                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-between items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon4} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Tambahkan dokumen pendukung seperti ijazah atau skl</p>
                    </div>
                </div>
            </div>

            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={Bg3} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <p className="text-[18px] md:text-[22px] lg:text-[26px]">Verifikasi dilakukan langsung oleh LPPSI UNPAS – lembaga kampus yang berfokus pada nilai-nilai keislaman dan pengembangan spiritual mahasiswa.
                        <br></br>
                        <br></br>
                        ⚠️ <b>Kuota terbatas!</b>
                        <br></br>Jadikan Hafalanmu Jalan Menuju Ilmu dan Perubahan. UNPAS mendukung para Hafidz untuk terus bersinar — di dunia dan akhirat.</p>
                    <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=hafidz`)}
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

            <Countdown title="Masih Bingung?" description="Tim PMB UNPAS siap bantu kamu! Klik tombol di bawah untuk daftar dan konsultasi gratis sekarang" nameJalur={'hafidz'} />
            <CTASection />
        </UserLayout>
    )
}

export default Hafidz