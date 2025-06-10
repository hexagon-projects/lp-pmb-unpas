
import { useEffect, useState } from "react";
import ButtonHoverBaru from "../../components/buttonHoverBaru";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import IdentityService from "../../fetching/identity";

import Bg1 from '../../assets/jalur/pmdk/1.png'
import Bg2 from '../../assets/jalur/pmdk/2.png'
import Bg3 from '../../assets/jalur/pmdk/3.png'
import Bg4 from '../../assets/jalur/pmdk/4.png'

import Icon1 from '../../assets/icon/file.png'
import Icon2 from '../../assets/icon/file2.png'
import Icon3 from '../../assets/icon/sertif.png'
import Icon4 from '../../assets/icon/file3.png'
import NilaiSection from "../../components/NilaiSection";
import SiapaSection from "../../components/SiapaSection";
import JalurHero2 from "../../components/JalurHero2";

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
            <JalurHero2 Title={'Masuk UNPAS Cuma Modal Rapor, Emang Bisa? BISA BANGET!'} subtitle={'Tanpa Tes | Kesempatan Dapatkan Potongan DPP Sampai 30%!'} sizeFont={'text-[14px] md:text-[16px] lg:text-[22px] font-bold'} Img={Bg1} nameJalur={'pmdk'} />

            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={Bg2} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    {/* <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Apa Itu Jalur PMDK Akademik?</h2> */}
                    <p className="text-[18px] md:text-[22px] lg:text-[26px]">Ini jalur seleksi tanpa ujian masuk untuk kamu yang punya nilai rapor stabil & prestasi akademik keren.Cukup daftar pakai nilai rapor kelas X & XI (semester 1–4), dan kamu bisa langsung lolos seleksi kalau memenuhi kriteria.
                        <br />
                        <br />
                        <span className="text-[16px] md:text-[20px] lg:text-[24px] italic font-bold">*Berlaku untuk semua program studi di UNPAS
                            <br />
                            <i className="font-normal">(kecuali Fakultas Kedokteran)</i>
                        </span>
                    </p>
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
            <NilaiSection data={Unggulans} title={''} image={Bg3} nameJalur="pmdk" />

            {/* KenapaSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={Bg4} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <div className="space-y-4 md:space-y-5 lg:space-y-6">
                        <h2 className="text-[30px] md:text-[34px] lg:text-[38px] font-light text-center md:text-left">Keuntungan Daftar Jalur Ini</h2>
                        <ul className="list-disc px-[20px] text-[18px] md:text-[22px] lg:text-[26px]">
                            <li>Tanpa tes masuk</li>
                            <li>Beasiswa s.d. 30%</li>
                            <li>Cocok buat kamu yang gak mau ribet daftar kuliah</li>
                            <li>Seleksi cepat & simpel</li>
                        </ul>
                    </div>
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

            {/* DokumenSection */}
            {/* Tablet & Dekstop */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[80px] lg:py-[120px] hidden md:block spaec-y-8 md:space-y-12 lg:space-y-16">
                <h2 className="text-[30px] md:text-[34px] lg:text-[38px] text-center">Berkas Apa Yang Perlu Disiapkan</h2>
                <div className="md:grid-cols-4 md:grid">
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-l border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon1} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Surat Keterangan Siswa Kelas XII atau Surat Keterangan Lulus</p>
                    </div>
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon2} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Scan nilai rapor kelas X & XI (semester 1–4) — asli & lengkap, ada tanda tangan/stempel/barcode sekolah</p>
                    </div>
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon3} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Scan sertifikat prestasi akademik (contohnya Juara Olimpiade Sains, Juara Lomba Speech Contest Bahasa Inggris, atau lomba akademik lainnya)</p>
                    </div>
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 4 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon4} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Ijazah (untuk lulusan tahun sebelumnya)</p>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[120px] space-y-8 md:hidden">
                <h2 className="text-[30px] md:text-[34px] lg:text-[38px] text-center">Berkas Apa Yang Perlu Disiapkan</h2>
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon1} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Surat Keterangan Siswa Kelas XII atau Surat Keterangan Lulus</p>
                    </div>
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon2} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Scan nilai rapor kelas X & XI (semester 1–4) — asli & lengkap, ada tanda tangan/stempel/barcode sekolah</p>
                    </div>
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon3} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Scan sertifikat prestasi akademik (contohnya Juara Olimpiade Sains, Juara Lomba Speech Contest Bahasa Inggris, atau lomba akademik lainnya)</p>
                    </div>
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 4 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon4} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Ijazah (untuk lulusan tahun sebelumnya)</p>
                    </div>
                </div>
            </div>

            <Countdown title="Gak Mau Ribet Masuk Kuliah? Jalur Ini Jawabannya!" description="Sayang kalau beasiswanya sampai terlewat, yuk ambil kesempatan ini sekarang!" nameJalur={'pmdk'} />
            <CTASection />
        </UserLayout>
    )
}

export default Pmdk