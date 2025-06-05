
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import ButtonHoverBaru from "../../components/buttonHoverBaru";

import { useEffect, useState } from "react";
import IdentityService from "../../fetching/identity";

import Bg1 from '../../assets/jalur/usm/1.png'
import Bg2 from '../../assets/jalur/usm/2.png'
import Bg3 from '../../assets/jalur/utbk/4.png'
import Bg4 from '../../assets/jalur/usm/3.png'

import Icon1 from '../../assets/icon/file.png'
import Icon2 from '../../assets/icon/file2.png'
import SiapaSection from "../../components/SiapaSection";
import NilaiSection from "../../components/NilaiSection";

const Usm = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Syarats = [
        {
            title: 'Siswa kelas XII tahun ajaran 2024/2025 (yang lulus tahun 2025)',
            img: 'https://img.freepik.com/premium-photo/pretty-asian-schoolgirl-sitting-smiling-lesson-classroom_603656-5705.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Punya semangat buat lanjut kuliah di kampus swasta unggulan',
            img: 'https://img.freepik.com/premium-photo/high-school-students-doing-school-work-together-study-room_368093-16177.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Siap daftar online dan ikut ujian sesuai jadwal',
            img: 'https://img.freepik.com/premium-photo/young-multiethnic-asian-female-students-uniform-write-up-information-from-smartphone-paper_603656-5933.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
    ]

    const Unggulans = [
        {
            title: 'Tes Potensi Akademik (TPA)'
        },
        {
            title: 'Matematika Dasar'
        },
        {
            title: 'Bahasa Indonesia'
        },
        {
            title: 'Bahasa Inggris'
        },
        {
            title: 'Tes Minat, Bakat & Kepribadian (Khusus Program Studi Tertentu)'
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
            <div className='px-[20px] py-[40px] md:p-[40px] lg:px-[60px] lg:py-[30px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-6 lg:gap-8'>
                {/* Tablet & Dekstop  */}
                <div className="w-full md:w-1/2 h-full cta_container hidden md:block">
                    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left bg-white md:px-10 md:py-20 lg:px-16 lg:py-32 jalur-box">
                        <h1 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Uji Kemampuanmu, Raih Bangku Kuliah Impian di UNPAS!</h1>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">Daftar Jadi Mahasiswa UNPAS Lewat Jalur USM (Ujian Saringan Masuk) TERBUKA UNTUK SEMUA PROGRAM STUDI, SELEKSI MURNI DARI HASIL UJIAN.
                        </p>
                        <div className="grid grid-cols-2 gap-4 md:gap-4 w-4/5 md:w-full lg:w-4/5 xl:w-1/2">
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                width={'full'}
                                text="Daftar"
                                onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=usm`)}
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
                {/* Mobile */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left md:hidden">
                    <h1 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Uji Kemampuanmu, Raih Bangku Kuliah Impian di UNPAS!</h1>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px]">Daftar Jadi Mahasiswa UNPAS Lewat Jalur USM (Ujian Saringan Masuk) TERBUKA UNTUK SEMUA PROGRAM STUDI, SELEKSI MURNI DARI HASIL UJIAN.
                    </p>
                    <div className="grid grid-cols-2 gap-4 md:gap-4 w-4/5 md:w-full lg:w-4/5 xl:w-1/2">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=usm`)}
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
                <div className="w-full md:w-1/2">
                    <img src={Bg1} alt="" className="w-full h-full object-cover " />
                </div>
            </div>

            {/* SiapaSection */}
            <SiapaSection data={Syarats} />

            {/* NilaiSection */}
            <NilaiSection data={Unggulans} image={Bg2} title={''} />

            {/* DokumenSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-12 lg:space-y-16">
                <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-3/5 xl:max-w-1/3 mx-auto">Ini Persyaratan Yang
                    Harus Kamu Lengkapi</h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    <div className="px-6 md:px-8 lg:px-12 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-14 border-l md:border-l-0 border-r border-[#985534]">
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit">
                            <img src={Icon1} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        </div>

                        <div>
                            <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora text-center">Surat Keterangan Siswa Kelas XII atau Surat Keterangan Lulus</p>
                        </div>
                    </div>

                    <div className="px-6 md:px-8 lg:px-12 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-14 border-l md:border-r-0 border-r border-[#985534]">
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit">
                            <img src={Icon2} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        </div>

                        <div>
                            <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora text-center">Ijazah & Nilai
Asli</p>
                        </div>
                    </div>
                </div>
            </div>

            <Countdown title="Siap Jadi Mahasiswa Unpas?" description="Yuk Daftar Sekarang Juga!" nameJalur={'usm'} />
            <CTASection />
        </UserLayout>
    )
}

export default Usm