import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout"
import IdentityService from "../../fetching/identity";
import JalurHero2 from "../../components/JalurHero2";
import NilaiSection from "../../components/NilaiSection";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";

import Bg1 from '../../assets/jalur/sma/1.png'
import Bg2 from '../../assets/jalur/sma/2.png'
import Bg3 from '../../assets/jalur/sma/3.png'

import Menu from '../../assets/icon/menu.png'
import Up from '../../assets/icon/up.png'
import Icon1 from '../../assets/icon/toga.png'
import Icon2 from '../../assets/icon/kitab2.png'
import Icon3 from '../../assets/icon/brain.png'
import Icon4 from '../../assets/icon/medal.png'
import ButtonHoverBaru from "../../components/buttonHoverBaru";

const Sma = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Unggulans = [
        {
            title: 'Beasiswa DPP hingga 30% untuk program studi tertentu (termasuk yang relevan dengan pendidikan Islam!)'
        },
        {
            title: 'Prioritas seleksi untuk kamu yang punya hafalan Al-Qur’an'
        },
        {
            title: 'Belajar di kampus yang mengedepankan nilai Pola Ilmiah Pokok (PIP) dan Tri Jatidiri Civitas UNPAS: Nyantri – Nyunda – Nyakola, Pengkuh Agama – Jembar Budaya – Luhung Ilmu, dengan semangat Silih Asih, Silih Asah, Silih Asuh'
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
            <JalurHero2 Title={'Tanpa Ribet, Tanpa Bingung: Jalur Khusus Buat Kamu yang Lulusan Sekolah Islam Terpadu'} subtitle={'Pernah mikir, “Bisa nggak sih lanjut kuliah sambil tetap jaga nilai-nilai Islam yang aku pelajari di sekolah?”BISA BANGET! UNPAS kasih kamu jalur khusus buat lulusan SMA/SMK Islam Terpadu, yang nggak cuma memudahkan proses daftar, tapi juga kasih banyak keuntungan!'} Img={Bg1} nameJalur={'sma'} />

            <NilaiSection data={Unggulans} image={Bg2} alignTablet="md:flex-row-reverse" />

            {/* DokumenSection */}
            {/* Tablet & Dekstop */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[80px] lg:py-[120px] hidden md:block spaec-y-8 md:space-y-12 lg:space-y-16">
                <h2 className="text-[30px] md:text-[34px] lg:text-[38px] text-center">Siapa Yang Bisa Daftar?</h2>
                <div className="md:grid-cols-4 md:grid">
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-l border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon1} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Lulusan SMA/SMK Islam Terpadu atau sekolah Islam sejenis</p>
                    </div>
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon2} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Punya hafalan Al-Qur’an minimal Juz 30</p>
                    </div>
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon3} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Siap ikut tes akademik UNPAS</p>
                    </div>
                    <div className="px-5 md:px-10 md:space-y-[40px] lg:space-y-[88px] border-r">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 4 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon4} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Punya prestasi akademik/non-akademik? Nilai plus buat kamu!</p>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[120px] space-y-8 md:hidden">
                <h2 className="text-[30px] md:text-[34px] lg:text-[38px] text-center">Siapa Yang Bisa Daftar?</h2>
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 1 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon1} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Lulusan SMA/SMK Islam Terpadu atau sekolah Islam sejenis</p>
                    </div>
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 2 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon2} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Punya hafalan Al-Qur’an minimal Juz 30</p>
                    </div>
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 3 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon3} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Siap ikut tes akademik UNPAS</p>
                    </div>
                    <div className="px-5 md:px-10 space-y-4 lg:space-y-[88px] text-center">
                        <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#FF611D]">[ 4 ]</p>
                        <div className="p-4 md:p-5 lg:p-6 bg-[#985534] rounded-md md:rounded-xl w-fit mx-auto shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                            <img src={Icon4} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
                        </div>
                        <p className="text-[12px] md:text-[14px] lg:text-[22px] font-sora">Punya prestasi akademik/non-akademik? Nilai plus buat kamu!</p>
                    </div>
                </div>
            </div>

            {/* KenapaSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={Bg3} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <div className="space-y-4 md:space-y-5 lg:space-y-6">
                        <h2 className="text-[16px] md:text-[24px] lg:text-[32px] font-bold">Apa Saja Syarat yang Perlu Disiapkan?</h2>
                        <ul className="list-disc px-[20px] text-[18px] md:text-[22px] lg:text-[26px]">
                            <li>Scan hafalan Juz 30 (sertifikat atau surat keterangan dari ustadz/ustadzah/pengasuh)</li>
                            <li>Scan ijazah & transkrip nilai (kalau belum ada, bisa pakai Surat Keterangan Lulus atau Surat Masih Sekolah)</li>
                            <li>Lolos tes akademik UNPAS</li>
                            <li>Siap ikut tes hafalan Al-Qur’an yang dijadwalkan UNPAS</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=sma`)}
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
                            <img src={Up} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-[16px] md:text-[24px] lg:text-[32px] font-bold">“Aku Masih Bingung, Tapi Tertarik Banget…”</h2>
                            <p className="text-sm md:text-base lg:text-[24px]">Tenang! Tim admin PMB UNPAS siap bantu kamu dari awal sampai akhir proses. Yang penting kamu yakin, siap daftar, dan gak nunda lagi. Kesempatan ini nggak datang dua kali!</p>
                        </div>
                    </div>
                </div>
            </div>

            <Countdown title="Ayo Daftar Sekarang & Wujudkan Kuliah Yang Bermanfaat Dunia-Akhirat!" description="" nameJalur={'sma'} />
            <CTASection />
        </UserLayout>
    )
}

export default Sma