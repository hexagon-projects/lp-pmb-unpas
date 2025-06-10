
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
import hybrid1 from '../../assets/jalur/hybrid/hybrid1.png';
import hybrid2 from '../../assets/jalur/hybrid/hybrid2.png';
import hybrid3 from '../../assets/jalur/hybrid/hybrid3.png';
import JalurHero2 from "../../components/JalurHero2";





const Hafidz = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    // Data untuk komponen
    const hybridStepsData = [
        {
            number: "{ 1 }",
            icon: (
                <svg
                    viewBox="0 0 44 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M36.9815 25.072V10C36.9815 6.228 36.9815 4.344 35.8095 3.172C34.6395 2 32.7535 2 28.9815 2H21.6875M36.9815 25.072L40.4695 28.672L40.6455 28.856C41.287 29.5608 41.6558 30.4714 41.6855 31.424L41.6875 31.678C41.6875 31.978 41.6875 32.126 41.6795 32.252C41.6181 33.2238 41.2044 34.1398 40.5159 34.8284C39.8273 35.5169 38.9113 35.9306 37.9395 35.992C37.7483 36.0002 37.5569 36.0028 37.3655 36H6.0095C5.7095 36 5.5615 36 5.4355 35.992C4.4637 35.9306 3.54766 35.5169 2.85912 34.8284C2.17059 34.1398 1.75686 33.2238 1.6955 32.252C1.6875 32.126 1.6875 31.976 1.6875 31.68L1.6895 31.426C1.71918 30.4734 2.08798 29.5628 2.7295 28.858L2.9055 28.674L6.3935 25.074M36.9815 25.072L31.7595 25.074M6.3935 25.074V10C6.3935 6.228 6.3935 4.344 7.5655 3.172C8.7375 2 10.6215 2 14.3935 2M6.3935 25.074L23.6875 25.072M16.6875 31H26.6875"
                        stroke="#985534"
                        strokeWidth="3"
                        strokeLinecap="round"
                    ></path>
                </svg>
            ),
            title: "Daftar Online Lewat Sistem PMB Unpas",
            description: "Isi formulir pendaftaran secara online pada website PMB Unpas.",
        },
        {
            number: "{ 2 }",
            icon: (
                <svg
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        <path
                            d="M40.4835 32H16.4835C14.6235 32 13.6935 32 12.9295 32.204C11.9121 32.4768 10.9845 33.0126 10.2399 33.7576C9.49522 34.5026 8.95983 35.4305 8.6875 36.448"
                            stroke="#985534"
                            strokeWidth="3"
                        ></path>
                        <path
                            d="M16.6875 14H32.6875M16.6875 21H26.6875M20.6875 44C15.0315 44 12.2015 44 10.4455 42.242C8.6875 40.486 8.6875 37.656 8.6875 32V16C8.6875 10.344 8.6875 7.514 10.4455 5.758C12.2015 4 15.0315 4 20.6875 4H28.6875C34.3435 4 37.1735 4 38.9295 5.758C40.6875 7.514 40.6875 10.344 40.6875 16M28.6875 44C34.3435 44 37.1735 44 38.9295 42.242C40.6875 40.486 40.6875 37.656 40.6875 32V24"
                            stroke="#985534"
                            strokeWidth="3"
                            strokeLinecap="round"
                        ></path>
                    </g>
                </svg>
            ),
            title: "Ikut Ujian Online CBT, terdiri dari:",
            description: `
                <ul class="list-disc pl-6">
                    <li>Tes Kemampuan Dasar (TKD)</li>
                    <li>Tes Kemampuan Akademik (TKA)</li>
                    <li>Tes Kemampuan Hafidz Al-Qur'an</li>
                </ul>
            `,
        },
        {
            number: "{ 3 }",
            icon: (
                <svg
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        <path
                            d="M24.6875 30V4M24.6875 4L30.6875 11M24.6875 4L18.6875 11"
                            stroke="#985534"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M16.6875 43.9999H32.6875C38.3435 43.9999 41.1735 43.9999 42.9295 42.2439C44.6875 40.4839 44.6875 37.6579 44.6875 31.9999V29.9999C44.6875 24.3439 44.6875 21.5159 42.9295 19.7579C41.3935 18.2219 39.0375 18.0279 34.6875 18.0039M14.6875 18.0039C10.3375 18.0279 7.9815 18.2219 6.4455 19.7579C4.6875 21.5159 4.6875 24.3439 4.6875 29.9999V31.9999C4.6875 37.6579 4.6875 40.4859 6.4455 42.2439C7.0455 42.8439 7.7695 43.2379 8.6875 43.4979"
                            stroke="#985534"
                            strokeWidth="3"
                            strokeLinecap="round"
                        ></path>
                    </g>
                </svg>
            ),
            title: "Upload Dokumen Pendukung:",
            description: `
                <ul class="list-disc pl-6">
                    <li>Ijazah dan Nilai Atau,</li>
                    <li>Surat keterangan kelas XII/lulus (jika ijazah belum keluar)</li>
                </ul>
            `,
        },
    ];


    const Unggulans = [
        {
            title: '75% Belajar Online Belajar lewat LMS (Learning Management System) resmi UNPAS. Kamu bisa akses materi kuliah kapan aja, di mana aja. Cocok buat kamu yang kerja, bantu orang tua, atau tinggal di luar kota.'
        },
        {
            title: '25% Tatap Muka Cuma datang ke Bandung saat momen penting: awal kuliah, ujian praktik (kalau ada), dan wisuda. Selebihnya? Bisa kuliah dari rumah kamu sendiri!'
        },
        {
            title: 'Berlaku untuk Program Studi Yang Membuka Kelas Hybrid'
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
            <JalurHero2
                Title={'Kuliah Bisa dari Mana Aja? BISA BANGET di UNPAS HYBRID CLASS!'}
                subtitle={<> <span className="font-bold">Gak Harus Pindah Kota, Gak Harus Pindah Mimpi.</span> <br></br> Kamu pengen kuliah di Universitas Pasundan Bandung, tapi terkendala jarak atau biaya hidup di kota besar?
                    Tenang! Sekarang kamu bisa kuliah di UNPAS tanpa harus tinggal di Bandung lewat Jalur Pembelajaran Hybrid!</>}
                Img={Bg1}
                nameJalur={'hafidz'}
            />

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
                        <img src={hybrid1} alt="" className="w-full h-full object-cover" />
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
                    <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/2 mx-auto">Siapa Yang Cocok Daftar?</h2>
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
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium"> Siswa kelas XII atau lulusan SMA/SMK/MA/sederajat</p>
                        </div>

                        <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                            <div className="w-12 h-12">
                                <img src={Icon2} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Pengen kuliah di UNPAS tapi gak bisa tinggal full-time di Bandung</p>
                        </div>

                        <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[45vh] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                            <div className="w-12 h-12">
                                <img src={Icon3} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Mau kuliah sambil kerja atau punya tanggung jawab lain</p>
                        </div>

                        <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-6 md:p-10 lg:p-12 h-[40vh] xl:h-[30vh] flex flex-col justify-center items-center md:gap-8">
                            <div className="w-12 h-12">
                                <img src={Icon4} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Siap ikut ujian seleksi online (CBT) dari rumah</p>
                        </div>
                    </div>
                </div>

                {/* Mobile  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-6 w-full p-6 md:hidden">
                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-between items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon1} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium"> Siswa kelas XII atau lulusan SMA/SMK/MA/sederajat</p>
                    </div>

                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon2} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Pengen kuliah di UNPAS tapi gak bisa tinggal full-time di Bandung</p>
                    </div>

                    <div className="md:mt-10 w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        <div className="w-12 h-12">
                            <img src={Icon3} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Mau kuliah sambil kerja atau punya tanggung jawab lain</p>
                    </div>

                    <div className="w-full bg-[#FEF8A8] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] shadow-primary/30 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] px-6 py-10 md:p-10 lg:p-12 flex flex-col justify-between items-center gap-6">
                        <div className="w-12 h-12">
                            <img src={Icon4} alt="" className="w-12 h-12 object-contain" />
                        </div>
                        <p className="text-[14px] md:text-[16px] lg:text-[20px] max-w-[80%] text-center font-medium">Siap ikut ujian seleksi online (CBT) dari rumah</p>
                    </div>
                </div>
            </div>

            {/* Hybrid Steps Section */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={hybrid2} alt="Hybrid Class" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start ">
                    {hybridStepsData.map((step, index) => (
                        <div
                            key={index}
                            className={`w-full relative ${index === 0 || index < hybridStepsData.length - 1 ? 'border-t' : ''} ${index === hybridStepsData.length - 1 ? 'border-y' : ''}`}
                        >
                            <div className="top-0 left-0 absolute py-3 font-bold text-lg text-[#985534]">{step.number}</div>
                            <div className="flex flex-row py-12 px-10">
                                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center px-3 md:px-6 lg:px-8 gap-4 md:gap-6 lg:gap-8">
                                    <div className="min-h-12 min-w-12 max-h-12 max-w-12 flex items-center justify-center ">{step.icon}</div>
                                    <div className="translate-y-3 mx-8 text-center md:text-left lg:text-left">
                                        <h2 className="font-semibold text-lg mb-2">{step.title}</h2>
                                        {/* Render bullet jika ada <ul>, jika tidak tampilkan biasa */}
                                        {step.description.includes("<ul") ? (
                                            <div dangerouslySetInnerHTML={{ __html: step.description }} />
                                        ) : (
                                            <p>{step.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            {/* KenapaSection */}
            <div div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32" >
                <div className="w-full md:w-1/2">
                    <img src={hybrid3} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    <div className="space-y-4 md:space-y-5 lg:space-y-6">

                        <ul className="list-disc px-[20px] text-[18px] md:text-[22px] lg:text-[26px]">
                            <li>Belajar lebih fleksibel</li>
                            <li>Hemat biaya kos dan hidup di kota</li>
                            <li>Tetap dapet fasilitas akademik UNPAS</li>
                            <li>Lulus dengan ijazah resmi dan gelar yang sama seperti mahasiswa reguler</li>
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
            </div >


            <Countdown title="Yuk, Wujudkan Mimpi Kuliah Tanpa Harus Ngekos!" description="Kuota Terbatas, jangan sampai kamu ketinggalan! Klik tombol di bawah ini untuk daftar sekarang dan ikuti CBT-nya dari rumah " nameJalur={'hafidz'} />
            <CTASection />
        </UserLayout >
    )
}

export default Hafidz