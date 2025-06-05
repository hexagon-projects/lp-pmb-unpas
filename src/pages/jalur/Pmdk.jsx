
import { useEffect, useState } from "react";
import ButtonHoverBaru from "../../components/buttonHoverBaru";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import IdentityService from "../../fetching/identity";
import Check from "../../assets/icon/check.png"

import Bg1 from '../../assets/jalur/pmdk/1.png'
import Bg2 from '../../assets/jalur/pmdk/2.png'
import Bg3 from '../../assets/jalur/pmdk/3.png'
import Bg4 from '../../assets/jalur/utbk/4.png'
import Bg42 from '../../assets/jalur/pmdk/4.png'
import Bg5 from '../../assets/jalur/utbk/5.png'

import Nilai1 from '../../assets/jalur/nilai/1.jpg'

import Icon1 from '../../assets/icon/1.png'
import Icon2 from '../../assets/icon/2.png'
import Icon3 from '../../assets/icon/3.png'
import Icon4 from '../../assets/icon/4.png'

import Icon5 from '../../assets/icon/file.png'
import Icon6 from '../../assets/icon/file2.png'
import Icon7 from '../../assets/icon/upload.png'
import JalurHero from "../../components/JalurHero";
import NilaiSection from "../../components/NilaiSection";
import SiapaSection from "../../components/SiapaSection";

const Pmdk = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Syarats = [
        {
            title: 'Siswa kelas XII tahun ajaran 2024/2025 (yang lulus tahun 2025)',
            img: 'https://img.freepik.com/premium-photo/portrait-smiling-asian-male-student-wearing-school-uniform-standing-confidently-classroom-agai_603656-5775.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Lulusan tahun sebelumnya juga boleh',
            img: 'https://img.freepik.com/premium-photo/graduation-diploma-back-students-with-degree-university-education-opportunity-success-sky-scholarship-group-proud-people-with-college-certificate-hands-up-achievement_590464-464525.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Nilai rapor oke & siap upload dokumen resmi dari sekolah',
            img: 'https://img.freepik.com/premium-photo/close-up-businesswoman-analyzing-graph-office-image_41762-603.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
    ]

    const Unggulans = [
        {
            title: 'Nilai yang dilihat: nilai pengetahuan semester 1–4'
        },
        {
            title: 'Rata-rata nilai sesuai standar masing-masing jurusan'
        },
        {
            title: 'Scan nilai harus asli, ada tanda tangan, stempel, atau barcode sekolah'
        },
    ]

    const Keuntungans = [
        {
            title: 'Gak perlu ikut ujian lagi'
        },
        {
            title: 'Berlaku untuk semua jurusan kecuali Fakultas Kedokteran'
        },
        {
            title: 'Ada beasiswa DPP sampai 30% buat yang nilai rapornya mantap'
        },
        {
            title: 'Proses seleksi cepat & gak ribet'
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
            <JalurHero Title={'Masuk UNPAS Cuma Modal Rapor, Emang Bisa? BISA BANGET!'} Img={Bg1} nameJalur={'pmdk'} />

            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={Bg2} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    {/* <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Apa Itu Jalur PMDK Akademik?</h2> */}
                    <p className="text-[18px] md:text-[22px] lg:text-[26px]">Ini jalur seleksi masuk tanpa ujian. Kamu cukup daftar pakai nilai rapor kelas X dan XI, dan kalau memenuhi kriteria, langsung lolos! Cocok banget buat kamu yang nilainya stabil dan mau lanjut kuliah tanpa ribet.</p>
                    <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=pmdk`)}
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
            <SiapaSection data={Syarats} />

            {/* NilaiSection */}
            <NilaiSection data={Unggulans} title={''} image={Bg3} />


            {/* KeuntunganSection */}
            <div className="">
                <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:pt-[60px] lg:pb-[0px]">
                    <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Keuntungan Daftar Jalur Ini</h2>
                    <div className="w-full md:w-1/2 lg:w-[40%] xl:w-[30%] grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=pmdk`)}
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

                {/* Tablet & Dekstop */}
                <div className="cta_container">
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 w-full p-10 ">
                        <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] p-6 md:p-10 lg:p-12 h-[30vh] flex flex-col justify-between items-center gap-6">
                            <div className="w-12 h-12">
                                <img src={Icon1} alt="" className="w-12 h-12 " />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Gak perlu ikut ujian lagi</p>
                        </div>

                        <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                            <div className="w-12 h-12">
                                <img src={Icon2} alt="" className="w-12 h-12 " />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Berlaku untuk semua jurusan kecuali Fakultas Kedokteran</p>
                        </div>

                        <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                            <div className="w-12 h-12">
                                <img src={Icon3} alt="" className="w-12 h-12 " />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Ada beasiswa DPP sampai 30% buat yang nilai rapornya mantap</p>
                        </div>

                        <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] p-6 md:p-10 lg:p-12 h-[30vh] flex flex-col justify-between items-center gap-6">
                            <div className="w-12 h-12">
                                <img src={Icon4} alt="" className="w-12 h-12 " />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Proses seleksi cepat & gak ribet</p>
                        </div>
                    </div>
                </div>

                {/* Mobile  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-6 w-full p-6 md:hidden">
                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-between items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon1} alt="" className="w-12 h-12 " />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Gak perlu ikut ujian lagi</p>
                    </div>

                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon2} alt="" className="w-12 h-12 " />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Berlaku untuk semua jurusan kecuali Fakultas Kedokteran</p>
                    </div>

                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon3} alt="" className="w-12 h-12 " />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Ada beasiswa DPP sampai 30% buat yang nilai rapornya mantap</p>
                    </div>

                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-between items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon4} alt="" className="w-12 h-12 " />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Proses seleksi cepat & gak ribet</p>
                    </div>
                </div>
            </div>

            {/* DokumenSection */}
            {/* Tablet & Dekstop */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[120px] hidden md:grid-cols-4 md:grid">
                <div className="px-5 md:px-10 h-full flex flex-col justify-end items-start gap-4 md:gap-6 lg:gap-8">
                    <h3 className="text-[12px] md:text-[20px] lg:text-[38px]">Berkas Yang Perlu Disiapkan</h3>
                    <div className="w-[80%]">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar Sekarang"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=pmdk`)}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                            css={'pulsating-button'}
                        />
                    </div>
                </div>
                <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-l border-r">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto">
                        <img src={Icon5} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Surat Keterangan Siswa Kelas XII atau Surat Keterangan Lulus</p>
                </div>
                <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto">
                        <img src={Icon6} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Scan nilai rapor kelas X & XI (asli & resmi)</p>
                </div>
                <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto">
                        <img src={Icon7} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Kalau kamu udah lulus, tinggal upload rapor & ijazah aja</p>
                </div>
            </div>

            {/* Mobile */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[120px] grid lg:grid-cols-4 gap-8 md:hidden">
                <div className="px-5 md:px-10 h-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
                    <h3 className="text-[16px] md:text-[20px] lg:text-[38px] font-bold">Berkas Yang Perlu Disiapkan</h3>
                    <div className="w-[80%]">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar Sekarang"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=pmdk`)}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                            css={'pulsating-button'}
                        />
                    </div>
                </div>
                <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto">
                        <img src={Icon5} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Surat Keterangan Siswa Kelas XII atau Surat Keterangan Lulus</p>
                </div>
                <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto">
                        <img src={Icon6} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Scan nilai rapor kelas X & XI (asli & resmi)</p>
                </div>
                <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto">
                        <img src={Icon7} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Kalau kamu udah lulus, tinggal upload rapor & ijazah aja</p>
                </div>
            </div>

            <Countdown title="Gak Mau Ribet Masuk Kuliah? Jalur Ini Jawabannya!" description="Langsung daftar, unggah nilai rapor terbaikmu, dan tunggu hasilnya." nameJalur={'pmdk'} />
            <CTASection />
        </UserLayout>
    )
}

export default Pmdk