import { useEffect, useState } from "react";
import Cta from '../assets/cta.png'
import ButtonHoverBaru from "./buttonHoverBaru";
import IdentityService from "../fetching/identity";

const Countdown = ({ title = 'Yuk! Pastiin kamu daftar sekarang juga, karena', description = 'Jalur ini terbatas banget', nameJalur }) => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

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

    return (
        <div className='p-[20px] md:p-[40px] lg:px-[100px] lg:py-[60px] w-full h-full bg-cover bg-no-repeat'>
            <div className='w-full h-full bg-cover bg-no-repeat p-6 md:p-14 lg:p-16 space-y-2 text-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px]' style={{ backgroundImage: `url('${Cta}')` }}>
                <h6 className='text-[18px] md:text-[26px] lg:text-[40px] font-bold'>{title}</h6>
                <h5 className='text-[16px] md:text-[24px] lg:text-[32px]'>{description}</h5>

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

                <div className="w-full md:w-[70%] lg:w-[50%] grid grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-8 mx-auto">
                    <ButtonHoverBaru
                        rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                        width={'full'}
                        text="Daftar"
                        onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=${nameJalur}`)}
                        bgColor="#034833"
                        hoverColor="#FFFFFF"
                        borderColor="#FFFFFF"
                        textColor="white"
                        textHoverColor="black"
                        fontLg="lg:text-lg"
                    />
                    <ButtonHoverBaru
                        rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                        text="Hubungi Kami"
                        onClick={handleWhatsApp}
                        hoverColor="#034833"
                        borderColor="#034833"
                        textColor="black"
                        textHoverColor="white"
                        fontLg="lg:text-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Countdown