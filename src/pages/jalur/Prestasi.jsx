import { useEffect, useRef, useState } from "react";
import UserLayout from "../layouts/UserLayout"
import IdentityService from "../../fetching/identity";
import JalurHero2 from "../../components/JalurHero2";

import ButtonHoverBaru from "../../components/buttonHoverBaru";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";

import Bg1 from '../../assets/jalur/prestasi/1.png'
import Bg2 from '../../assets/jalur/prestasi/2.png'
import Icon5 from '../../assets/icon/grup.png'
import Icon6 from '../../assets/icon/hand.png'
import Icon7 from '../../assets/icon/medal.png'
import Menu from '../../assets/icon/menu.png'
import Up from '../../assets/icon/up.png'
import Check from "../../assets/icon/check.png"

const PrestasiSeni = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);
    const [isVisible, setIsVisible] = useState(false)
    const [visibleItems, setVisibleItems] = useState([])
    const sectionRef = useRef(null)

    const Syarats = [
        {
            title: 'Upload sertifikat lomba, surat keterangan dari sekolah/komunitas, atau bukti prestasi lainnya',
            img: 'https://img.freepik.com/premium-photo/pretty-asian-schoolgirl-sitting-smiling-lesson-classroom_603656-5705.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Siap ikut tes keterampilan dari Lembaga Budaya Sunda UNPAS (jadwal akan ditentukan)',
            img: 'https://img.freepik.com/premium-photo/woman-sitting-holding-blue-pencil-doing-exam_43284-78.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
    ]

    const Unggulans = [
        {
            title: 'Langsung Masuk UNPAS Tanpa Tes Akademik!'
        },
        {
            title: 'Dibuka sampai Gelombang III – Masih ada waktu!'
        },
        {
            title: 'Beasiswa 20%-30% DPP buat kamu yang: Punya sertifikat/surat keterangan prestasi Lolos uji kemampuan seni/budaya dari Tim Lembaga Budaya Sunda UNPAS'
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    Syarats.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => [...prev, index])
                        }, index * 200)
                    })
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [Syarats])

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
            <JalurHero2 Title={'Punya Bakat Seni atau Budaya Sunda? UNPAS Punya Jalur Khusus Buat Kamu!'} subtitle={'Masuk Kuliah Nggak Harus Lewat Tes Akademik—Tunjukin Aja Bakatmu di Seni & Budaya Sunda!'} Img={Bg1} />

            <div className="px-[0px] py-[40px] md:p-[40px] lg:px-[34px] lg:py-[60px] cta_container">
                <div className={`px-[40px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[120px] bg-[#985534] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] flex flex-col-reverse md:flex-row-reverse justify-center md:justify-between items-center gap-6 lg:gap-28 nilai-box`}>
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-10 lg:space-y-12">
                        <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-light text-white">Kenapa Harus Pilih Jalur Prestasi Seni & Budaya Sunda?</h2>
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
                        <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2 md:gap-4">
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                width={'full'}
                                text="Daftar"
                                onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=prestasi-seni`)}
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

            {/* DokumenSection */}
            {/* Tablet & Dekstop */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[60px] lg:py-[120px] hidden md:grid-cols-4 md:grid w-full">
                <div className="px-5 md:px-10 h-full flex flex-col justify-end items-start gap-4 md:gap-6 lg:gap-8">
                    <h3 className="text-[12px] md:text-[14px] lg:text-[22px] font-semibold">Gak harus juara nasional kok—asal punya kemampuan nyata dan semangat ngembangin budaya Sunda, kamu bisa daftar!</h3>
                    <div className="w-full grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=prestasi-seni`)}
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
                <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-l border-r">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                        <img src={Icon5} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Aktif di ekskul atau komunitas seni/budaya</p>
                </div>
                <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                        <img src={Icon6} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Punya skill di bidang Seni Tari, Dalang, Sinden, Musik Tradisional, Sastra Sunda, Budaya, atau Sejarah Sunda</p>
                </div>
                <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                        <img src={Icon7} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Punya prestasi atau pengalaman di bidang tersebut</p>
                </div>
            </div>

            {/* Mobile */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[120px] grid lg:grid-cols-4 gap-8 md:hidden">
                <div className="px-5 md:px-10 h-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
                    <h3 className="text-[16px] md:text-[14px] lg:text-[22px] font-bold text-center">Gak harus juara nasional kok—asal punya kemampuan nyata dan semangat ngembangin budaya Sunda, kamu bisa daftar!</h3>
                    <div className="w-full grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=prestasi-seni`)}
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
                <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                        <img src={Icon5} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Aktif di ekskul atau komunitas seni/budaya</p>
                </div>
                <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                        <img src={Icon6} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Punya skill di bidang Seni Tari, Dalang, Sinden, Musik Tradisional, Sastra Sunda, Budaya, atau Sejarah Sunda</p>
                </div>
                <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                    <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                    <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                        <img src={Icon7} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sor">Punya prestasi atau pengalaman di bidang tersebut</p>
                </div>
            </div>

            {/* SiapaSection */}
            <div ref={sectionRef} className="px-[20px] py-[40px] md:p-[40px] lg:px-[120px] lg:py-[60px] space-y-6 md:space-y-8 lg:space-y-20">
                <div className='space-y-2 md:space-y-4'>
                    <h2 className={`text-[30px] md:text-[38px] lg:text-[48px] font-semibold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>Syarat yang Harus Disiapkan</h2>
                    <p className='text-[14px] md:text-[16px] lg:text-[22px] text-center'>Pilih salah satu dari 2 kategori ini:</p>
                </div>
                <div className="md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 cta_container hidden md:max-w-3/4 mx-auto">
                    {Syarats.map((item, index) => (
                        <div key={index} className={`h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-gradient-to-b from-[#985534] via-[#985534] to-[#341D12] group text-white rounded-[8px] md:rounded-[8px] lg:rounded-[16px] siapa-box relative bg-cover bg-center bg-no-repeat transition-all duration-700 ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ backgroundImage: `url(${item.img})` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent rounded-[8px] md:rounded-[8px] lg:rounded-[16px]"></div>
                            <div className="relative z-2 w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/20 transition duration-500">
                                <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                            </div>
                            <p className="relative z-2 text-[16px] md:text-[20px] lg:text-[24px] font-bold">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 md:hidden">
                    {Syarats.map((item, index) => (
                        <div key={index} className={`relative h-[24vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-gradient-to-b from-[#985534] via-[#985534] to-[#341D12] group text-white rounded-[8px] md:rounded-[8px] lg:rounded-[16px] bg-cover bg-center bg-no-repeat transition-all duration-700 ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ backgroundImage: `url(${item.img})` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent rounded-[16px] md:rounded-[8px] lg:rounded-[16px]"></div>
                            <div className="relative z-2 w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/20 transition duration-500">
                                <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                            </div>
                            <p className="relative z-2 text-[16px] md:text-[20px] lg:text-[24px] font-bold">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* InfoSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[100px] lg:py-[60px] space-y-10 md:space-y-14 lg:space-y-16">
                <div className="p-[1.5px] space-y-4 md:space-y-5 lg:space-y-6 rounded-[4px] md:rounded-[12px] lg:rounded-[20px] bg-gradient-to-l from-primary to-[#985534]">
                    <div className="bg-gradient-to-r from-[#F3F4F4] via-[#F3F4F4] to-[#F4F4EC] rounded-[4px] md:rounded-[12px] lg:rounded-[20px] p-4 md:p-8 lg:p-12 space-y-4 md:space-y-6 lg:space-y-8">
                        <div className="flex gap-2 md:gap-4">
                            <img src={Menu} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
                            <img src={Up} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-[16px] md:text-[24px] lg:text-[32px] font-bold">Kuliah + Lestarikan Budaya = Kombinasi Juara</h2>
                            <p className="text-sm md:text-base lg:text-[24px]">Jalur ini bukan cuma soal masuk kuliah, tapi juga tentang jadi bagian dari generasi muda yang ngangkat budaya sendiri lewat pendidikan. Kamu bakal kuliah di kampus yang punya Pola Ilmiah Pokok (PIP) & semangat Tri Jatidiri: Nyantri – Nyunda – Nyakola</p>
                        </div>
                    </div>
                </div>
            </div>

            <Countdown title="Siap Jadi Mahasiswa Berprestasi Sekaligus Pelestari Budaya?" description="Yuk ambil kesempatan ini sekarang, jangan tunggu gelombang terakhir!" nameJalur={'prestasi-seni'} />
            <CTASection />
        </UserLayout>
    )
}

export default PrestasiSeni