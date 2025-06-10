import { useEffect, useState } from "react";
import ButtonHoverBaru from "./buttonHoverBaru"
import IdentityService from "../fetching/identity";

const JalurHero = ({ Title, Img, nameJalur }) => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

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
        
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
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

    return (
        <div className='px-[20px] py-[40px]  md:p-[40px] lg:px-[60px] lg:py-[10px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-6 lg:gap-8'>
            {/* Tablet & Dekstop  */}
            <div className={`w-full md:w-1/2 h-full cta_container hidden md:block transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
                <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left bg-white md:px-10 md:py-20 lg:px-16 lg:py-20 jalur-box shadow-black/20 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                    <h1 className={`text-[32px] md:text-[34px] lg:text-[38px] font-semibold transform transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}>{Title}</h1>
                    <div className={`grid grid-cols-2 gap-2 md:gap-4 w-4/5 md:w-[85%] transform transition-all duration-1000 ease-out delay-400 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}>
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=${nameJalur}`)}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                            fontLg="pulsating-button"
                        />
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            text="Hubungi CS"
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
            <div className={`w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left md:hidden transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
                <h1 className={`text-[30px] md:text-[38px] lg:text-[48px] font-bold transform transition-all duration-1000 ease-out delay-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}>{Title}</h1>
                <div className={`grid grid-cols-2 gap-2 md:gap-4 w-4/5 md:w-full lg:w-4/5 xl:w-1/2 transform transition-all duration-1000 ease-out delay-400 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}>
                    <ButtonHoverBaru
                        rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                        width={'full'}
                        text="Daftar"
                        onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=${nameJalur}`)}
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
            <div className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
                <img src={Img} alt="" className="w-full h-full object-cover " />
            </div>
        </div>
    )
}

export default JalurHero