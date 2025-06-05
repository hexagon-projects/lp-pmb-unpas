import { useEffect, useState } from "react";
import ButtonHoverBaru from "./buttonHoverBaru"
import IdentityService from "../fetching/identity";

const JalurHero = ({ Title, Img, nameJalur }) => {
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

    return (
        <div className='px-[20px] py-[40px]  md:p-[40px] lg:px-[60px] lg:py-[30px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-6 lg:gap-8'>
            {/* Tablet & Dekstop  */}
            <div className="w-full md:w-1/2 h-full cta_container hidden md:block">
                <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left bg-white md:px-10 md:py-20 lg:px-16 lg:py-32 jalur-box">
                    <h1 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">{Title}</h1>
                    <div className="grid grid-cols-2 gap-2 md:gap-4 w-4/5 md:w-full lg:w-4/5 xl:w-1/2">
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
            </div>
            {/* Mobile */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left md:hidden">
                <h1 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">{Title}</h1>
                <div className="grid grid-cols-2 gap-2 md:gap-4 w-4/5 md:w-full lg:w-4/5 xl:w-1/2">
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
            <div className="w-full md:w-1/2">
                <img src={Img} alt="" className="w-full h-full object-cover " />
            </div>
        </div>
    )
}

export default JalurHero