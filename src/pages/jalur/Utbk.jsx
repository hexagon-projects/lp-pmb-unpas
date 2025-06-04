import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import UserLayout from '../layouts/UserLayout';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../../components/Button';
import RegistrasiService from '../../fetching/registration';

import Card from '../../assets/card.png'
import Cta from '../../assets/cta.png'
import Pattern from '../../assets/Pattern.png'
import Jalur from '../../assets/jalur.png'
import Fh from '../../assets/brosur/fh.jpg'
import Feb from '../../assets/brosur/feb.jpg'
import Fiss from '../../assets/brosur/fiss.jpg'
import Fisip from '../../assets/brosur/fisip.jpg'
import Ft from '../../assets/brosur/ft.jpg'
import Fkip from '../../assets/brosur/fkip.jpg'
import Pasca from '../../assets/brosur/pasca.jpg'
import Fk from '../../assets/brosur/fk.jpg'
import RPL from '../../assets/brosur/rpl.jpg'
import CustomPaginationProdi from '../../components/prodi/CustomPaginationProdi';
import IdentityService from '../../fetching/identity';
import CTASection from '../../components/CTASection';
import ButtonHoverBaru from '../../components/buttonHoverBaru';

const Utbk = () => {
    const { slug } = useParams();
    const [jalur, setJalur] = useState([]);
    const swiperRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [identity, setIdentity] = useState(null);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const handlePaginationClick = useCallback((index) => {
        swiperRef.current?.slideToLoop(index);
    }, []);

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

    const Brosurs = [
        {
            title: 'Fakultas Hukum',
            image: Fh,
            link: 'https://drive.google.com/uc?export=download&id=1LRCFECRxDCVAIj_Pzgdth3RzqPfBh7s8',
        },
        {
            title: 'Fakultas Ekonomi dan Bisnis',
            image: Feb,
            link: 'https://drive.google.com/uc?export=download&id=1vE15hSQhtJO0CPByuwoQ8wicgRF1ff5F',
        },
        {
            title: 'Fakultas Ilmu Seni dan Sastra',
            image: Fiss,
            link: 'https://drive.google.com/uc?export=download&id=1eiKLmMVQUNvtSKPoA6MhKbjVHJwodnfw',
        },
        {
            title: 'Fakultas Ilmu Sosial & Ilmu Politik',
            image: Fisip,
            link: 'https://drive.google.com/uc?export=download&id=1aguh7OpvRaD7saeTRecK6Xs4xVgEwUdo',
        },
        {
            title: 'Fakultas Teknik',
            image: Ft,
            link: 'https://drive.google.com/uc?export=download&id=1oCoRe_C2PU4ACZG30LH6Jmkqz6mHhF6C',
        },
        {
            title: 'Fakultas Ilmu Keguruan & Pendidikan',
            image: Fkip,
            link: 'https://drive.google.com/uc?export=download&id=1CY8T1CIr_f0kYBMV72tAHk8EnbfkTfba',
        },
        {
            title: 'Pasca Sarjana',
            image: Pasca,
            link: 'https://drive.google.com/uc?export=download&id=1v_tbADeg8TNnW0rWS5BIJ3Oxi80Bo2UJ',
        },
        {
            title: 'Fakultas Kedokteran',
            image: Fk,
            link: 'https://drive.google.com/uc?export=download&id=1rsQjjVIv_sG9Piytsnd8FcLvfxawYyiQ',
        },
        {
            title: 'RPL',
            image: RPL,
            link: 'https://drive.google.com/uc?export=download&id=1cVSilfz2eql_577qZUBFGzDxPsFKypDT',
        },
    ];

    const handleClick = (url) => {
        window.location.href = url;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [jalurRes] = await Promise.all([
                    RegistrasiService.getAllRegistrasi(),
                ]);
                setJalur(jalurRes || []);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    useEffect(() => {
        const targetDate = new Date('June 26, 2025 00:00:00');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown({
                days,
                hours,
                minutes,
                seconds
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
            <div className='w-full h-full flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-10 p-[20px] md:p-[40px] lg:px-[100px] lg:py-[60px] border-primary relative'>
                <div className='absolute right-0 w-[60%] h-full bg-radial from-primary/80 via-primary/10 to-transparent hidden md:block'></div>

                {/* Tablet & Dekstop */}
                <div className='w-full md:w-[40%] md:p-[10px] lg:p-[10px] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] bg-[#c0c0c0]/20 relative border-[2px] border-primary'>
                    <div className='absolute bottom-0 w-full'>
                        <img src={`${Pattern}`} alt={``} className='w-full h-full object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px]' />
                    </div>

                    <div className='px-6 md:px-8 lg:px-12 py-[40px] relative z-2 space-y-4 md:space-y-6 lg:space-y-10'>
                        <div className='space-y-4 md:space-y-5 lg:space-y-6'>
                            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Jalur Nilai UTBK</h1>
                            <div className='text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-[17px] text-gray-800 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2 [&_li]:my-1'>
                                <h2>Jalur Seleksi Berdasarkan Nilai UTBK dari SNBT Tahun 2025 atau sebelumnya.</h2>

                                <h2>Ketentuan: <b>Umum, Tersedia Untuk Semua Program Studi</b></h2>

                                <h2>Persyaratan Lainnya:</h2>
                                <ol>
                                    <li>Memiliki Nilai UTBK 2025/Sebelumnya</li>
                                    <li>Minimal Nilai ≥ 450</li>
                                    <li>Scan Hasil Nilai UTBK</li>
                                    <li>Scan Ijazah (jika ada)</li>
                                    <li>Scan Ket Lulus/Masih Sekolah</li>
                                </ol>

                                <h2>Fasilitas:</h2>
                                <ol>
                                    <li>Diterima Tanpa Tes</li>
                                    <li>Peluang Mendapatkan Beasiswa</li>
                                </ol>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-2">
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                width={'full'}
                                text="Daftar"
                                onClick={() => handleClick('https://registrasi.unpas.ac.id/')}
                                bgColor="#FEF251"
                                hoverColor="#D1C300"
                                borderColor="#C73929"
                                textColor="black"
                                textHoverColor="black"
                            />
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                text="Konsultasi CS"
                                onClick={handleWhatsApp}
                                hoverColor="#034833"
                                borderColor="#034833"
                                textColor="black"
                                textHoverColor="white"
                            />
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[60%] relative z-2'>
                    <img src={Jalur} alt="" className='w-full h-full object-cover' />
                </div>
            </div>

            {/* BrosurSection Tablet & Dekstop */}
            <div className='hidden md:grid grid-cols-2 md:grid-cols-3 p-[20px] md:p-[40px] lg:px-[100px] lg:py-[60px] gap-4 md:gap-6 lg:gap-8'>
                {Brosurs.map((item, index) => (
                    <div key={index} className='w-full hover:scale-100 scale-100 transition-all duration-500 h-[20vh] md:h-[40vh] lg:h-[60vh] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] border-[4px] border-white'>
                        <div className='absolute inset-0'>
                            <img src={`${item.image}`} alt={`${item.title}`} className='w-full h-full object-cover object-[30%_30%] rounded-[16px] md:rounded-[24px] lg:rounded-[32px]' />
                        </div>
                        <div className='absolute bottom-0 w-full h-[40%] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden'>
                            <div className='absolute inset-0 backdrop-blur-sm bg-black/60'
                                style={{
                                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
                                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
                                }}>
                            </div>
                        </div>
                        <div className='absolute bottom-2 md:bottom-6 lg:bottom-12 p-2 w-full left-1/2 -translate-x-1/2 flex justify-center items-center'>
                            <button className='w-fit py-2 px-4 md:py-4 md:px-8 bg-primary border-2 border-[#c93829] cursor-pointer rounded-[10px] md:rounded-[14px] lg:rounded-[16px] text-[10px] md:text-[12px] lg:text-[14px] flex items-center gap-2 hover:font-semibold hover:bg-yellow-300 transition-all duration-500'
                                onClick={() => handleClick(item.link)}>
                                Download Brosur
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* BrosurSection Mobile */}
            <div className='md:hidden p-[20px]'>
                <Swiper
                    spaceBetween={16}
                    centeredSlides={true}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    slidesPerView={1.2}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    modules={[Autoplay]}
                >
                    {Brosurs.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`w-full hover:scale-100 scale-100 transition-all duration-500 h-[50vh] rounded-[16px] border-[4px] border-white relative' ${activeIndex === index ? 'scale-100' : 'scale-[0.92]'}`}>
                                <div className='absolute inset-0'>
                                    <img src={`${item.image}`} alt={`${item.title}`} className='w-full h-full object-cover object-[50%_50%] rounded-[16px]' />
                                </div>
                                <div className='absolute bottom-0 w-full h-[20%] rounded-[16px] overflow-hidden'>
                                    <div className='absolute inset-0 backdrop-blur-sm bg-black/30'
                                        style={{
                                            maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
                                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
                                        }}>
                                    </div>
                                </div>
                                <div className='absolute bottom-2 p-2 w-full left-1/2 -translate-x-1/2 flex justify-center items-center'>
                                    <button className='w-fit py-2 px-4 bg-primary border-2 border-[#c93829] rounded-[10px] text-[10px] flex items-center gap-2 hover:font-semibold hover:bg-yellow-300 transition-all duration-500'
                                        onClick={() => handleClick(item.link)}>
                                        Download Brosur
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='pt-4'>
                    <CustomPaginationProdi
                        activeIndex={activeIndex}
                        totalSlides={Brosurs.length}
                        onPaginationClick={handlePaginationClick}
                        width="w-2 h-2"
                        scale="w-7 h-2"
                        borderColor={'#C73929'}
                        bgColor={'#C73929'}
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className='p-[20px] md:p-[40px] lg:px-[100px] lg:py-[60px] w-full h-full bg-cover bg-no-repeat'>
                <div className='w-full h-full bg-cover bg-no-repeat p-6 md:p-14 lg:p-16 space-y-2 text-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px]' style={{ backgroundImage: `url('${Cta}')` }}>
                    <h6 className='text-[12px] md:text-[24px] lg:text-[40px]'>Yuk! Pastiin kamu daftar sekarang juga, karena</h6>
                    <h5 className='text-[14px] md:text-[32px] lg:text-[56px] font-bold'>Jalur ini terbatas banget</h5>

                    {/* Countdown */}
                    <div className='bg-white/50 backdrop-blur-sm border-2 border-white/80 py-4 lg:py-5 lg:px-16 flex justify-center items-center gap-2 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] mt-4 md:mt-5 lg:mt-6 relative overflow-hidden'>
                        {/* Tambahkan div untuk efek gradien transparan */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/50 to-transparent"></div>
                        </div>

                        <div className='w-full flex flex-col justify-center items-center relative'>
                            <h2 className='text-[32px] md:text-[80px] lg:text-[120px] leading-10 md:leading-24 lg:leading-32'>{countdown.days}</h2>
                            <p className='text-[16px] md:text-[24px] lg:text-[28px]'>HARI</p>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[40%] w-px bg-black"></div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center relative'>
                            <h2 className='text-[32px] md:text-[80px] lg:text-[120px] leading-10 md:leading-24 lg:leading-32'>{countdown.hours}</h2>
                            <p className='text-[16px] md:text-[24px] lg:text-[28px]'>JAM</p>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[40%] w-px bg-black"></div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center relative'>
                            <h2 className='text-[32px] md:text-[80px] lg:text-[120px] leading-10 md:leading-24 lg:leading-32'>{countdown.minutes}</h2>
                            <p className='text-[16px] md:text-[24px] lg:text-[28px]'>MENIT</p>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[40%] w-px bg-black"></div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <h2 className='text-[32px] md:text-[80px] lg:text-[120px] leading-10 md:leading-24 lg:leading-32'>{countdown.seconds}</h2>
                            <p className='text-[16px] md:text-[24px] lg:text-[28px]'>DETIK</p>
                        </div>
                    </div>

                    <div className="w-[70%] md:w-[50%] lg:w-[30%] grid grid-cols-1 gap-2 mt-4 md:mt-6 lg:mt-8 mx-auto">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            text="Daftar Sekarang"
                            onClick={() => handleClick('https://registrasi.unpas.ac.id/')}
                            hoverColor="#034833"
                            borderColor="#034833"
                            textColor="black"
                            textHoverColor="white"
                        />
                        {/* <div className="flex justify-center font-medium text-xs sm:text-sm items-center rounded-lg sm:rounded-xl py-2 bg-white border-2 border-[#034833] cursor-pointer" onClick={handleWhatsApp}>
                                Konsultasi CS
                            </div> */}
                    </div>
                </div>
            </div>

            <CTASection />
        </UserLayout>
    );
};

export default Utbk;