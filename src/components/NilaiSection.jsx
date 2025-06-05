import { useEffect, useState } from "react";
import IdentityService from "../fetching/identity";
import ButtonHoverBaru from "./buttonHoverBaru";

const NilaiSection = ({ data, title, image }) => {
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

    return (
        <div className="px-[0px] py-[40px] md:p-[40px] lg:px-[34px] lg:py-[60px] cta_container">
            <div className="px-[40px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[120px] bg-[#985534] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-6 lg:gap-28 nilai-box">
                <div className="w-full md:w-1/2 space-y-6 md:space-y-10 lg:space-y-12">
                    <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold max-w-[80%] md:max-w-1/2 lg:max-w-[60%] text-white">{title}</h2>
                    <div className="flex flex-col justify-between">
                        {data.map((item, index) => (
                            <div key={index} className="py-5 border-b border-black flex justify-between items-center gap-4">
                                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white">{item.title}</p>
                                <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                    <p className="font-bold">-</p>
                                </div>
                            </div>
                        ))}
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
                    <img src={image} alt="" className="w-full h-full object-cover" />
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
    )
}

export default NilaiSection