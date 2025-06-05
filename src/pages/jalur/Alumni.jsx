
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";
import ButtonHoverBaru from "../../components/buttonHoverBaru";

import { useEffect, useState } from "react";
import IdentityService from "../../fetching/identity";

import Bg1 from '../../assets/jalur/alumni/1.png'
import Bg2 from '../../assets/jalur/alumni/2.png'
import Bg3 from '../../assets/jalur/utbk/3.png'
import Bg4 from '../../assets/jalur/alumni/3.png'

import Menu from '../../assets/icon/menu.png'
import Up from '../../assets/icon/up.png'

import NilaiSection from "../../components/NilaiSection";
import JalurHero from "../../components/JalurHero";

const Alumni = () => {
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
            title: 'Lulusan SMA/SMK/MA Pasundan'
        },
        {
            title: 'Anak kandung alumni UNPAS'
        },
        {
            title: 'Anak kandung dosen/guru/karyawan tetap di lingkungan YPT & YPDM Pasundan'
        },
        {
            title: 'Anak kandung pengurus Paguyuban Pasundan (tingkat pusat hingga cabang)'
        },
        {
            title: 'Lulusan Perguruan Tinggi Pasundan yang lanjut ke S2/S3 UNPAS'
        },
        {
            title: 'Dosen, guru, dan tenaga kependidikan Pasundan yang lanjut studi di UNPAS'
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
            <JalurHero Title={'Kuliah Lebih Terjangkau untuk Keluarga Besar Paguyuban Pasundan'} Img={Bg1} nameJalur={'alumni'}/>

            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2 ">
                    <img src={Bg2} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <p className="text-[18px] md:text-[22px] lg:text-[26px]">UNPAS membuka jalur khusus penerimaan mahasiswa baru untuk kamu yang terhubung dengan lembaga pendidikan atau keluarga besar Paguyuban Pasundan.Lewat jalur ini, kamu bisa kuliah di UNPAS dengan bantuan biaya pendidikan hingga 30% potongan DPP — dari jenjang Sarjana (S1) sampai Pascasarjana (S2/S3).</p>
                    <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=alumni`)}
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
            <div className="px-[0px] py-[40px] md:p-[40px] lg:px-[34px] lg:py-[60px] cta_container">
                <div className="px-[40px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[120px] bg-[#985534] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-6 lg:gap-28 nilai-box">
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-10 lg:space-y-12">
                        <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold max-w-[80%] md:max-w-1/2 lg:max-w-[60%] text-white">Siapa Saja Yang Bisa Daftar</h2>
                        <div className="flex flex-col justify-between">
                            {Unggulans.map((item, index) => (
                                <div key={index} className="py-5 border-b border-black flex justify-between items-center gap-4">
                                    <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white">{item.title}</p>
                                    <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                        <p className="font-bold">-</p>
                                    </div>
                                </div>
                            ))}
                            <div className="py-5 border-t border-black flex justify-between items-center gap-4">
                                <p className="text-[10px] md:text-[12px] lg:text-[16px] text-white italic">*Jalur ini tidak berlaku untuk Fakultas Kedokteran</p>
                                <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                    <p className="font-bold">-</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-2 md:gap-4">
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
                        <img src={Bg3} alt="" className="w-full h-full object-cover" />
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

            {/* DokumenSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[100px] lg:py-[60px] space-y-10 md:space-y-14 lg:space-y-16">
                <div className="p-[1.5px] space-y-4 md:space-y-5 lg:space-y-6 rounded-[4px] md:rounded-[12px] lg:rounded-[20px] bg-gradient-to-l from-primary to-[#985534]">
                    <div className="bg-gradient-to-r from-[#F3F4F4] via-[#F3F4F4] to-[#F4F4EC] rounded-[4px] md:rounded-[12px] lg:rounded-[20px] p-4 md:p-8 lg:p-12 space-y-2">
                        <div>
                            <img src={Menu} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div>
                            <h2 className="text-[30px] md:text-[38px] lg:text-[48px]">Dokumen yang Harus
                                <br></br>Disiapkan</h2>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16">
                    <div className="w-full space-y-3 lg:space-y-5">
                        <h6 className="text-[12px] md:text-[14px] lg:text-[20px] font-bold">Untuk Pendaftar S1</h6>
                        <div className="w-full space-y-3 lg:space-y-5 text-[12px] md:text-[14px] lg:text-[20px]">
                            <div className="flex gap-6">
                                <p className="text-[#985534]">01</p>
                                <div className="text-[#985534]">|</div>
                                <p>Ijazah SMA/SMK/MA Pasundan</p>
                            </div>
                            <div className="flex gap-6">
                                <p className="text-[#985534]">02</p>
                                <div className="text-[#985534]">|</div>
                                <p>KTP & Kartu Keluarga</p>
                            </div>
                            <div className="flex gap-6">
                                <p className="text-[#985534]">03</p>
                                <div className="text-[#985534]">|</div>
                                <p>Rekomendasi dari Pengurus Cabang Paguyuban Pasundan</p>
                            </div>
                            <div className="flex gap-6">
                                <p className="text-[#985534]">04</p>
                                <div className="text-[#985534]">|</div>
                                <p>Kartu Anggota Paguyuban Pasundan (jika ada)</p>
                            </div>
                            <div className="flex gap-6">
                                <p className="text-[#985534]">05</p>
                                <div className="text-[#985534]">|</div>
                                <p>Ijazah orang tua (khusus anak kandung alumni)</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full space-y-3 lg:space-y-5">
                        <h6 className="text-[12px] md:text-[14px] lg:text-[20px] font-bold">Untuk Pendaftar S2</h6>
                        <div className="w-full space-y-3 lg:space-y-5 text-[12px] md:text-[14px] lg:text-[20px]">
                            <div className="flex gap-6">
                                <p className="text-[#985534]">01</p>
                                <div className="text-[#985534]">|</div>
                                <p>Ijazah S1/S2 dari Perguruan Tinggi Pasundan</p>
                            </div>
                            <div className="flex gap-6">
                                <p className="text-[#985534]">02</p>
                                <div className="text-[#985534]">|</div>
                                <p>KTP & Kartu Keluarga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* KenapaSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={Bg4} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <ul className="list-disc px-[20px] text-[18px] md:text-[22px] lg:text-[26px]">
                        <li>Lebih Hemat Biaya Kuliah, Potongan langsung hingga 30%</li>
                        <li>Khusus untuk Keluarga Besar Pasundan , Bentuk nyata kepedulian dan keberlanjutan pendidikan</li>
                        <li>Tersedia untuk Semua Jenjang Pendidikan S1, S2, hingga S3</li>
                        <li>Kampus Swasta Terkemuka di Jawa Barat, Reputasi akademik dan jaringan alumni yang kuat</li>
                    </ul>
                    <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=alumni`)}
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

            {/* InfoSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[100px] lg:py-[60px] space-y-10 md:space-y-14 lg:space-y-16">
                <div className="p-[1.5px] space-y-4 md:space-y-5 lg:space-y-6 rounded-[4px] md:rounded-[12px] lg:rounded-[20px] bg-gradient-to-l from-primary to-[#985534]">
                    <div className="bg-gradient-to-r from-[#F3F4F4] via-[#F3F4F4] to-[#F4F4EC] rounded-[4px] md:rounded-[12px] lg:rounded-[20px] p-4 md:p-8 lg:p-12 space-y-4 md:space-y-6 lg:space-y-8">
                        <div className="flex gap-2 md:gap-4">
                            <img src={Menu} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
                            <img src={Up} alt="" className="w-8 h-8 lg:w-10 lg:h-10"/>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-[16px] md:text-[24px] lg:text-[32px] font-bold">Khusus untuk Anak Alumni UNPAS & Keluarga Besar Paguyuban Pasundan</h2>
                            <p className="text-sm md:text-base lg:text-[24px]">Nikmati jalur pendaftaran khusus sebagai bentuk apresiasi atas kontribusi dan loyalitas keluarga Pasundan.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Countdown title="Siap Daftar?" description="Jangan Sampai Ketinggalan!" nameJalur={'alumni'} />
            <CTASection />
        </UserLayout>
    )
}

export default Alumni