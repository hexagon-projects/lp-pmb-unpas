import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/gedung.jpeg"
import JalurCard from "../components/JalurCard";
import { TfiAnnouncement } from "react-icons/tfi";
import CTASection from "../components/CTASection";
import { useEffect, useState } from "react";
import RegistrasiService from "../fetching/registration";
import { motion, useMotionValue, useTransform, animate, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../components/Button";
import LogoText from "../components/LogoText";
import RichText from "../components/RichText";
import Text from "../components/Text";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import JalurItem from "../components/JalurItem";
import { useNavigate } from "react-router-dom";

const Jalur = () => {
    const [jalur, setJalur] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedJalur, setSelectedJalur] = useState(null);
    const navigate = useNavigate()

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
            }
        }
    };

    const handleJalurClick = (jalur) => {
        let slug;

        if (jalur.name.toLowerCase().includes('utbk')) {
            slug = 'utbk';
        } else if (jalur.name.toLowerCase().includes('pmdk')) {
            slug = 'pmdk';
        } else if (jalur.name.toLowerCase().includes('usm')) {
            slug = 'usm';
        } else if (jalur.name.toLowerCase().includes('hafidz')) {
            slug = 'hafidz';
        } else if (jalur.name.toLowerCase().includes('alumni')) {
            slug = 'alumni';
        } else {
            slug = jalur.slug.toLowerCase().replace(/\s+/g, '-');
        }

        navigate(`/jalur/${slug}`, { state: { jalur } });
    };

    const handleOpenModal = (event, jalur) => {
        event.preventDefault();
        setSelectedJalur(jalur);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedJalur(null);
    };

    useEffect(() => {
        let isMounted = true;

        const fetchJalur = async () => {
            try {
                const timestamp = new Date().getTime();
                const response = await RegistrasiService.getAllRegistrasi(`?timestamp=${timestamp}`);
                if (isMounted) {
                    setJalur(response);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchJalur();

        return () => {
            isMounted = false;
        };
    }, []);

    const AnimatedCounter = ({ value }) => {
        const count = useMotionValue(0);
        const rounded = useTransform(count, latest => Math.floor(latest));

        useEffect(() => {
            const controls = animate(count, value, {
                duration: 1.5,
                ease: [0.16, 0.77, 0.47, 0.97],
            });
            return controls.stop;
        }, [value]);

        return (
            <motion.h2 className="text-4xl md:text-6xl lg:text-9xl font-bold">
                {rounded}
            </motion.h2>
        );
    };


    return (
        <UserLayout bgLayoutColor="bg-[#F3F4F4]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={1}>
            <Helmet>
                <title>Jalur Pendaftaran - Universitas Pasundan</title>
                <meta name="description" content="Informasi lengkap semua jalur pendaftaran mahasiswa baru Universitas Pasundan. Temukan jalur yang sesuai dengan kemampuan Anda dan daftar sekarang!" />
                <meta name="keywords" content="pendaftaran unpas, jalur masuk unpas, universitas pasundan, SNBP unpas, SNBT unpas, mandiri unpas, PMDK unpas" />
                <meta property="og:title" content="Jalur Pendaftaran - Universitas Pasundan" />
                <meta property="og:description" content="Temukan semua jalur pendaftaran mahasiswa baru Universitas Pasundan dan daftar sekarang!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pmb.unpas.ac.id/jalur" />
                <meta property="og:image" content={Section1} />
                <meta property="og:site_name" content="Universitas Pasundan" />
                <link rel="canonical" href="https://pmb.unpas.ac.id/jalur" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Jalur Pendaftaran - Universitas Pasundan",
                        "description": "Informasi lengkap semua jalur pendaftaran mahasiswa baru Universitas Pasundan",
                        "url": "https://pmb.unpas.ac.id/jalur",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Universitas Pasundan",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://pmb.unpas.ac.id/logo.webp"
                            }
                        }
                    })}
                </script>
            </Helmet>
            <div className="relative p-5 md:px-10 lg:px-15 space-y-8 md:space-y-14 lg:space-y-16">
                <div className={'w-full lg:h-[75vh] flex flex-col md:flex-row-reverse justify-between md:justify-center items-center gap-4 md:gap-4 lg:gap-20'}>
                    <div className="relative w-full jalur_container">
                        <div className="w-full h-52 md:h-64 lg:h-[75vh] jalur_box">
                            <img
                                src={Section1}
                                alt="Gedung Unpas"
                                className="w-full h-full object-cover rounded-xl"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent rounded-xl md:hidden"></div>
                        </div>
                        <div className="absolute top-4 left-4">
                            <LogoText titleColor="text-white" />
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
                    <div className="w-fit flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start gap-2 md:gap-4 lg:gap-6">
                        <AnimatedCounter value={jalur.length} />
                        <div className="space-y-1 md:space-y-2 lg:space-y-4">
                            <motion.h3
                                className="text-xs md:text-base lg:text-3xl font-semibold text-gray-800"
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.3 }}
                            >
                                Jalur Masuk
                            </motion.h3>
                            <motion.h2
                                className="text-2xl md:text-4xl lg:text-6xl font-bold text-text"
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                            >
                                Universitas Pasundan.
                            </motion.h2>
                            <div className="w-full hidden md:flex">
                                <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} onClick={() => window.location.href = `https://registrasi.unpas.ac.id/register`} border="border-2 border-text" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex md:hidden">
                        <Button
                            text={"Daftar Sekarang"}
                            bgColor={"bg-primary"}
                            border={"w-full justify-center border-2 border-text"}
                            onClick={() => window.location.href = `https://registrasi.unpas.ac.id/register`}
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <div className={'w-full lg:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'}>
                        {jalur.map((item, index) => (
                            <JalurItem
                                key={index}
                                item={item}
                                index={index}
                                onClick={() => handleJalurClick(item)}
                            />
                        ))}

                        <AnimatePresence>
                            {isOpen && selectedJalur && (
                                <motion.div
                                    className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                                    onClick={handleCloseModal}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div
                                        className="bg-[#f0f0f0] p-6 rounded-xl md:rounded-2xl lg:rounded-4xl shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] w-11/12 max-w-lg space-y-3"
                                        onClick={e => e.stopPropagation()}
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.5, opacity: 0 }}
                                        transition={{ type: "spring", duration: 0.5 }}
                                    >
                                        <div className="flex justify-between items-start gap-4 relative">
                                            <h2 className="text-xl font-bold">{selectedJalur.name}</h2>
                                            <div className="w-fit absolute -top-8 -right-8 ">
                                                <button className="p-2 rounded-full text-white bg-red-500 cursor-pointer" onClick={handleCloseModal}><X size={24} /></button>
                                            </div>
                                        </div>
                                        <div className="overflow-auto max-h-50 lg:max-h-60">
                                            <RichText content={selectedJalur.content} />
                                        </div>
                                        <Text text={`Periode: ${selectedJalur.start_date} - ${selectedJalur.end_date}`} />
                                        <div className="flex justify-start mt-4 gap-4">
                                            <Button text="Daftar Sekarang" bgColor="bg-primary" border="border-2 border-text" hoverBgColor="hover:border-2 hover:border-text" textColor="text-black" onClick={() => window.open(selectedJalur.link, "_blank")} />
                                            {/* <Button text="Buku Panduan" border="border-2 border-footer" hoverBgColor='hover:border-2 hover:border-footer hover:bg-white' textColor="text-black" onClick={() => window.open(selectedJalur.link, "_blank")} /> */}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Jalur;