import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Title from "./Title";
import IdentityService from "../fetching/identity";
import Loading from "./Loading";

const CTABox = ({ subtitle, title, textButton, subtitle2, onClick = 'https://registrasi.unpas.ac.id/register', color = 'bg-primary' }) => {
    const [identity, setIdentity] = useState(null);
    const [loading, setLoading] = useState(true);
    
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
    
    const handleClick = () => {
        window.location.href = onClick;
    };

    const handleWhatsApp = () => {
        if (identity?.phone) {
            window.location.href = `https://wa.me/${identity.phone}`;
        } else {
            alert("Nomor WhatsApp admin tidak tersedia.");
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <motion.div
            className="cta_container relative w-full"
            whileTap={{ scale: 0.98 }}
        >
            <div className="w-full flex justify-center items-center shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] duration-500">
                <div className={`w-full px-4 py-10 rounded-2xl cta_box ${color}`}>
                    <div className="w-full text-center mt-10 md:mt-8 space-y-2">
                        <h3 className="text-gray-800 text-[26px] font-medium">{subtitle}</h3>
                        <Title sizeMobile="text[32px]" title={title} />
                        <Title sizeMobile="text-[32px]" title={subtitle2} />
                        <div className="w-full flex justify-center items-center gap-4">
                            <motion.button
                                onClick={handleClick}
                                className="rounded-lg md:rounded-xl lg:rouned-2xl border-3 border-transparent hover:border-3 hover:border-primary/40 cursor-pointer text-xs md:text-base mt-6 px-6 py-4 bg-gray-100 text-black shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] hover:bg-white transition"
                                whileTap={{ scale: 0.95 }}
                            >
                                {textButton}
                            </motion.button>
                            <motion.button
                                onClick={handleWhatsApp}
                                className="rounded-lg md:rounded-xl lg:rouned-2xl border-1 border-text hover:border-2 hover:border-red-500 cursor-pointer text-xs md:text-base mt-6 px-6 py-4 text-black shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] transition"
                                whileTap={{ scale: 0.95 }}
                            >
                                Hubungi Admin
                            </motion.button>
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
                <motion.div
                    className={`w-fit flex justify-center items-center absolute top-0 left-0 ${color} p-3 md:p-4 rounded-md`}
                >
                    <ArrowDownRight size={32} className="text-black" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CTABox;
