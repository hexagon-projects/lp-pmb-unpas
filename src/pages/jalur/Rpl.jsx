
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import ButtonHoverBaru from "../../components/buttonHoverBaru";

import { useEffect, useState } from "react";
import IdentityService from "../../fetching/identity";

import Bg1 from '../../assets/jalur/rpl/1.png'
import Bg2 from '../../assets/jalur/usm/2.png'
import Bg3 from '../../assets/jalur/utbk/4.png'
import Bg4 from '../../assets/jalur/usm/3.png'
import rpl1 from '../../assets/jalur/rpl/rpl1.png'
import rpl2 from '../../assets/jalur/rpl/rpl2.png'

import Icon1 from '../../assets/icon/rpl1.png'
import Icon2 from '../../assets/icon/rpl2.png'
import Icon3 from '../../assets/icon/rpl3.png'
import Icon4 from '../../assets/icon/rpl4.png'

import SiapaSection from "../../components/SiapaSection";
import NilaiSection from "../../components/NilaiSection";
import JalurHero2 from "../../components/JalurHero2";

const Rpl = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Syarats = [
        {
            title: ' Lulusan SMA/SMK/MA dan udah kerja minimal 2 tahun',
            img: ' https://img.freepik.com/premium-photo/two-high-school-girls-smiling-with-finger-pointing-camera_8595-30216.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: ' Pernah kuliah (D3/S1) tapi nggak selesai',
            img: 'https://img.freepik.com/premium-photo/female-college-student-smiling-pointing-camera_524151-3988.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Punya pengalaman kerja relevan dan pengen naik level',
            img: 'https://img.freepik.com/premium-photo/young-asian-businessman-thinking-while-reading-sticky-notes-office-business-brainstroming-creative-planing-ideas-success-business_7190-3057.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
    ]

    const Unggulans = [
        {
            title: 'Pengalaman = SKS Konversi pengalaman kerja jadi mata kuliah'
        },
        {
            title: 'Waktu Kuliah Lebih Singkat Hanya lanjutkan materi yang belum dikuasai'
        },
        {
            title: 'Belajar Online & Hybrid Hingga 75% kuliah bisa dilakukan dari rumah'
        },
        {
            title: 'Untuk Profesional & Lulusan Non-Tuntas Terbuka untuk SMA/SMK/MA sederajat dengan pengalaman kerja min. 2 tahun'
        },
        {
            title: 'Fast Track ke Magister Bisa lanjut S2 lebih cepat!'
        }
    ];

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
        <JalurHero2 Title={'Kuliah Lebih Cepat, Tanpa Ulang Materi yang Sudah Kamu Kuasai.'} subtitle={'Belajar Fleksibel hingga 75% Online | Cocok untuk Profesional Aktif'} sizeFont="text-[14px] md:text-[16px] lg:text-[22px] font-bold" Img={Bg1} nameJalur={'rpl'}/>

        {/* AboutSection */}
        <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-center items-center gap-6 md:gap-8 lg:gap-32">
            <div className="w-full md:w-1/2">
                <img src={rpl1} alt="" className="w-full h-full object-cover " />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                {/* <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Apa Itu Jalur PMDK Akademik?</h2> */}
                <p className="text-[18px] md:text-[22px] lg:text-[26px]">RPL adalah jalur kuliah yang nggak bikin ulang dari nol. Pengalaman kerja kamu dihargai. Kuliah jadi lebih cepat, lebih hemat!</p>
                <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2 md:gap-4">
                    <ButtonHoverBaru
                        rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                        width={'full'}
                        text="Daftar"
                        onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=rpl`)}
                        bgColor="#FEF251"
                        hoverColor="#D1C300"
                        borderColor="#C73929"
                        textColor="black"
                        textHoverColor="black"
                    />
                    <ButtonHoverBaru
                        rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                        width={'full'}
                        text="Hubungi Admin"
                        onClick={handleWhatsApp}
                        bgColor="#fff"
                        hoverColor="#034833"
                        borderColor="#034833"
                        textColor="black"
                        textHoverColor="white"
                    />
                </div>
            </div>
        </div>

        {/* SiapaSection */}
        <div className="flex flex-col gap-4">
            <SiapaSection data={Syarats} title="Program Ini Cocok Banget Buat Kamu" />
            <div className="w-full md:w-1/2 lg:w-1/2 md:grid grid-cols-2 gap-2 md:gap-4 px-[20px] md:px-[40px] lg:px-[120px] hidden md:-mt-14 lg:-mt-28">
                <ButtonHoverBaru
                    rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                    width={'full'}
                    text="Daftar"
                    onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=rpl`)}
                    bgColor="#034833"
                        hoverColor="#FFFFFF"
                        borderColor="#FFFFFF"
                        textColor="white"
                        textHoverColor="black"
                />
                <ButtonHoverBaru
                    rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                    width={'full'}
                    text="Hubungi Admin"
                    onClick={handleWhatsApp}
                    hoverColor="#034833"
                        borderColor="#034833"
                        textColor="black"
                        textHoverColor="white"
                />
            </div>
        </div>

        {/* KeuntunganSection */}
        <div>
            <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:pt-[60px] lg:pb-[0px]">
                <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Persyaratan Utama</h2>
                <div className="w-full md:w-1/2 lg:w-[40%] xl:w-[30%] grid grid-cols-2 gap-2 md:gap-4">
                    <ButtonHoverBaru
                        rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                        width={'full'}
                        text="Daftar"
                        onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=rpl`)}
                        bgColor="#FEF251"
                        hoverColor="#D1C300"
                        borderColor="#C73929"
                        textColor="black"
                        textHoverColor="black"
                    />
                    <ButtonHoverBaru
                        rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                        width={'full'}
                        text="Hubungi Admin"
                        onClick={handleWhatsApp}
                        bgColor="#fff"
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
                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[34vh] flex flex-col justify-center items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon1} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Transkrip nilai dan ijazah terakhir pendikan</p>
                    </div>
                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon2} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Scan Surat Keterangan Lulus (buat yang belum dapat ijazah SMA/SMK/MA)</p>
                    </div>
                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon3} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Surat pengalaman kerja dari tempat kamu bekerja sebelumnya (lama & bidang kerja)</p>
                    </div>
                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[34vh] flex flex-col justify-center items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon4} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Portfolio pengalaman kerjamu sesuai panduan</p>
                    </div>
                </div>
            </div>
            {/* Mobile  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-6 w-full p-6 md:hidden">
                <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6">
                    <div className="w-12 h-12">
                        <img src={Icon1} alt="" className="w-12 h-12 object-contain" />
                    </div>
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Gak perlu ikut ujian lagi</p>
                </div>
                <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                    <div className="w-12 h-12">
                        <img src={Icon2} alt="" className="w-12 h-12 object-contain" />
                    </div>
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Berlaku untuk semua jurusan kecuali Fakultas Kedokteran</p>
                </div>
                <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                    <div className="w-12 h-12">
                        <img src={Icon3} alt="" className="w-12 h-12 object-contain" />
                    </div>
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Ada beasiswa DPP sampai 30% buat yang nilai rapornya mantap</p>
                </div>
                <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6">
                    <div className="w-12 h-12">
                        <img src={Icon4} alt="" className="w-12 h-12 object-contain" />
                    </div>
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Proses seleksi cepat & gak ribet</p>
                </div>
            </div>
        </div>

        {/* NilaiSection */}
        <NilaiSection data={Unggulans} image={rpl2} title={''} nameJalur="rpl"/>

        <Countdown title="Daftar Sekarang & Bangun Karier Lebih Tinggi!" description="Yuk Daftar Sekarang Juga!" nameJalur={'rpl'} />
        <CTASection />
    </UserLayout>
);
};

export default Rpl; 