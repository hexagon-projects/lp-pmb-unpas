
import { useEffect, useState } from "react";
import ButtonHoverBaru from "../../components/buttonHoverBaru";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import IdentityService from "../../fetching/identity";
import Bg1 from '../../assets/jalur/utbk/1.png'
import Bg2 from '../../assets/jalur/utbk/2.png'
import Bg3 from '../../assets/jalur/utbk/3.png'
import Bg4 from '../../assets/jalur/utbk/4.png'
import Bg5 from '../../assets/jalur/utbk/5.png'

import Icon1 from '../../assets/icon/file.png'
import Icon2 from '../../assets/icon/sertif.png'

import JalurHero from "../../components/JalurHero";
import NilaiSection from "../../components/NilaiSection";
import SiapaSection from "../../components/SiapaSection";
import Gedung from '../../assets/gedung2.jpg'

const Utbk2 = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Syarats = [
        {
            title: 'Punya nilai UTBK SNBT tahun 2025 atau tahun sebelumnya',
            img: 'https://img.freepik.com/premium-photo/three-teenagers-junior-high-school-uniforms-stand-smiling-with-crossed-hands_8595-23474.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Nilai UTBK minimal 450',
            img: 'https://img.freepik.com/premium-photo/woman-sitting-holding-blue-pencil-doing-exam_43284-78.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Ingin kuliah di kampus swasta berkualitas tanpa ribet!',
            img: Gedung
        },
    ]

    const Unggulans = [
        {
            title: 'Tanpa Tes Tambahan'
        },
        {
            title: 'Berlaku untuk semua prodi (selama kuota tersedia)'
        },
        {
            title: 'Terbuka hingga Gelombang III & Gelombang Khusus'
        },
        {
            title: 'Peluang Beasiswa DPP 20% untuk nilai UTBK ≥600'
        },
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
            <JalurHero Title={'Punya Nilai UTBK Di Atas 600? Gak Perlu Tes Ulang, Langsung Daftar Kuliah di UNPAS!'} Img={Bg1} nameJalur={'utbk'} />

            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={Bg2} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    {/* <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Apa Itu Jalur Nilai UTBK?</h2> */}
                    <p className="text-[14px] md:text-[16px] lg:text-[18px]">Jalur masuk tanpa tes tambahan, khusus buat kamu yang udah punya nilai UTBK dari SNBT tahun 2025 atau tahun sebelumnya.
                        <br></br>
                        <br></br>
                        <b>Cukup unggah sertifikat UTBK, pilih jurusan, dan tunggu hasil seleksi. Mudah, cepat, dan fleksibel!</b>
                        <br></br>
                        <br></br>
                        <i>*Tidak Berlaku Untuk Fakultas Kedokteran</i></p>
                    <div className="w-full md:w-full lg:w-full xl:w-4/5 grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=utbk`)}
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

            {/* NilaiSection */}
            <NilaiSection data={Unggulans} title={'APA KEUNGGULANNYA:'} image={Bg3} nameJalur="utbk"/>

            {/* SiapaSection */}
            <SiapaSection data={Syarats} />

            {/* DokumenSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-12 lg:space-y-16">
                <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-3/5 xl:max-w-1/3 mx-auto">Ini Persyaratan Yang
                    Harus Kamu Lengkapi</h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    <div className="px-6 md:px-8 lg:px-12 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-14 border-l md:border-l-0 border-r border-[#985534]">
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon1} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>

                        <div>
                            <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora text-center">Surat Keterangan Siswa Kelas XII atau Surat Keterangan Lulus</p>
                        </div>
                    </div>

                    <div className="px-6 md:px-8 lg:px-12 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-14 border-l md:border-r-0 border-r border-[#985534]">
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon2} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>

                        <div>
                            <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora text-center">Sertifikat atau hasil
                                nilai UTBK resmi</p>
                        </div>
                    </div>
                </div>
            </div>

            <Countdown title="Buruan Daftar Sekarang" description="Jangan lewatkan kesempatan kuliah tanpa tes dan dapatkan potongannya!" nameJalur={'utbk'} />
            <CTASection />
        </UserLayout>
    )
}

export default Utbk2