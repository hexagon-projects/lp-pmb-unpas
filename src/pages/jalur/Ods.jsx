import { useEffect, useState } from "react";
import ButtonHoverBaru from "../../components/buttonHoverBaru";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import SiapaSection from "../../components/SiapaSection";
import UserLayout from "../layouts/UserLayout";
import IdentityService from "../../fetching/identity";

import icon1 from '../../assets/icon/fast.png'
import icon2 from '../../assets/icon/laptop.png'
import icon3 from '../../assets/icon/book.png'
import icon4 from '../../assets/icon/money.png'
import ods1 from '../../assets/jalur/ods/ods1.png'
import ods2 from '../../assets/jalur/ods/ods2.png'
import ODS3 from '../../assets/jalur/ods/3.png'
import JalurHero from "../../components/JalurHero";
import NilaiSection from "../../components/NilaiSection";

const Ods = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Syarats = [
        {
            title: 'Daftar online lewat website resmi UNPAS atau langsung datang ke Kampus Tamansari',
            img: 'https://img.freepik.com/premium-photo/happy-young-asian-woman-is-smiling-while-holding-laptop-typing-report_216263-16485.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Upload dokumen yang dibutuhkan (rapor, ijazah, dll.)',
            img: 'https://img.freepik.com/premium-photo/hand-press-upload-button-keyboard_8595-351.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Tunggu pengumuman yang akan keluar dalam waktu maksimal 1×24 jam',
            img: 'https://img.freepik.com/premium-photo/man-smiling-excited-while-holding-megaphone_524151-4477.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
    ]


    const Unggulans = [
        {
            title: 'Lulusan SMA/MA/SMK/Sederajat'
        },
        {
            title: 'Punya dokumen lengkap & siap daftar'
        },
        {
            title: 'Mau langsung kuliah tanpa drama nunggu pengumuman lama'
        },
    ]

    const cards = [
        {
            icon: icon1,
            title: "Super Cepat",
            desc: "Gak perlu nunggu lama, hasil keluar dalam 1 hari"
        },
        {
            icon: icon2,
            title: "100% Online",
            desc: "Bisa Daftar darimana aja dan kapan saja"
        },
        {
            icon: icon3,
            title: "Tanpa Test",
            desc: "Seleksi cukup dari kelengkapan dokumen aja"
        },
        {
            icon: icon4,
            title: "Potongan DPP",
            desc: "Buat kamu yang registrasi ulang sesuai jadwal gelombang aktif"
        }
    ];
    const CardSection = () => (
        <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-12 lg:space-y-16">
            <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/4 mx-auto">
                Keuntungan Jalur ODS
            </h2>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 justify-items-center">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="card-gradient-border group relative w-full max-w-[400px] h-[303px] py-6 px-6 md:px-10 lg:py-12 lg:px-20 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl rounded-[16px] md:rounded-[24px] lg:rounded-[32px] flex justify-center items-center flex-col shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]"
                    >
                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col gap-8 items-center text-center justify-center ">
                            <div><img src={card.icon} alt="" /></div>
                            <div>
                                <h2 className="font-semibold text-xl mb-2">{card.title}</h2>
                                <h2 className="text-base">{card.desc}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

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
            <JalurHero Title={'Masuk UNPAS Gak Pake Lama, Butuh 1 Hari Aja Resmi Jadi Mahasiswa!'} Img={ods2} nameJalur={'ods'} />

            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={ods1} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <p className="text-[18px] md:text-[22px] lg:text-[26px]">
                        Jalur <b>One Day Service (ODS)</b> adalah pilihan masuk UNPAS yang super cepat dan praktis! <br /> Kamu bisa <b>daftar dan dapat hasil kelulusan dalam waktu 1×24 jam</b>, cukup lewat website resmi UNPAS atau datang langsung ke Kampus Tamansari.
                    </p>
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
            <NilaiSection title={'Cocok Buat Siapa?'} data={Unggulans} image={ODS3} nameJalur="ods"/>

            <SiapaSection data={Syarats} title="Gimana Prosesnya" />

            <CardSection />
            <Countdown title="Yuk, Daftar Sekarang Sebelum Kuotanya Penuh!" description="Kalau kamu pengen langsung tahu hasil tanpa ribet, Jalur ODS UNPAS adalah jalur yang pas buat kamu." />
            <CTASection />
        </UserLayout>
    )
}

export default Ods; 