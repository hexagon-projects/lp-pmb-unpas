import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import UserLayout from './layouts/UserLayout';
import Title from '../components/Title';
import Text from '../components/Text';
import Button from '../components/Button';
import SelengkapnyaButton from '../components/SelengkapnyaButton';
import RegistrasiService from '../fetching/registration';
import CTASection from '../components/CTASection';
import ButtonHoverBaru from '../components/buttonHoverBaru';
import IdentityService from '../fetching/identity';

const JalurDetail = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [jalur, setJalur] = useState([]);
    const [registrationData, setRegistrationData] = useState(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (url) => {
        window.location.href = url;
    };

    const handleSlideClick = useCallback((slug) => {
        navigate(`/jalur/${slug}`);
    }, [navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [jalurRes, registrationRes] = await Promise.all([
                    RegistrasiService.getAllRegistrasi(),
                    RegistrasiService.getRegistrasiBySlug(slug)
                ]);
                setJalur(jalurRes || []);
                setRegistrationData(registrationRes);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

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

    const parseHTMLContent = (htmlContent) => {
        if (!htmlContent) return [];

        const cleanedContent = htmlContent
            .replace(/&nbsp;/g, ' ')
            .trim();

        return cleanedContent
            .split(/<\/p>/gi)
            .filter(p => p.trim().length > 0)
            .map(p => p.trim() + "</p>");
    };

    const stripHTMLTags = (html) => {
        if (!html) return '';
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    const jalurItems = useMemo(() => {
        let itemsToRender = [];

        if (windowWidth < 1024) {
            itemsToRender = jalur.slice(6, 9);
        } else {
            itemsToRender = jalur.slice(6);
        }

        return itemsToRender.map((item, index) => (
            <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#F3F4F4] w-full p-4 sm:p-5 md:p-6 lg:p-8 border border-white shadow-primary/10 shadow-xl rounded-xl md:rounded-2xl lg:rounded-3xl cursor-pointer flex gap-3 sm:gap-4 items-center"
            >
                <div className="w-full flex flex-col justify-between items-start gap-3 sm:gap-4">
                    <div className="w-full flex flex-col gap-1 sm:gap-2">
                        <Title
                            sizeText="text-xs sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-6"
                            title={item.name}
                            fontWeight="font-bold"
                        />
                        <div className="space-y-1">
                            <Text
                                sizeMobile="text-xs sm:text-xs md:text-sm"
                                text={`Jadwal: ${item.start_date}`}
                            />
                            <Text
                                sizeMobile="text-xs sm:text-xs md:text-sm"
                                text={`Tutup: ${item.end_date}`}
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
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
                            text="Selengkapnya"
                            onClick={() => handleSlideClick(item.slug)}
                            hoverColor="#034833"
                            borderColor="#034833"
                            textColor="black"
                            textHoverColor="white"
                        />
                    </div>
                </div>
            </motion.div>
        ));
    }, [jalur, windowWidth]);

    const shareOnTwitter = () => console.log("Share on Twitter");
    const shareOnFacebook = () => console.log("Share on Facebook");
    const shareOnWhatsApp = () => console.log("Share on WhatsApp");

    const handleWhatsApp = () => {
        if (identity?.phone) {
            window.location.href = `https://wa.me/${identity.phone}`;
        } else {
            alert("Nomor WhatsApp admin tidak tersedia.");
        }
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

    if (!registrationData) {
        return (
            <UserLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Data tidak ditemukan</p>
                </div>
            </UserLayout>
        );
    }

    const paragraphs = parseHTMLContent(registrationData.content);

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
        >

            {/* Hero Section */}
            <div className='w-[90%] lg:w-[93%] xl:w-[94%] mx-auto h-full py-4 md:py-5 lg:py-6'>
                <div className="flex justify-center items-center w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[566px] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-[32px] bg-gray-300 mx-auto overflow-hidden">
                    <div
                        className="w-full h-full bg-gray-200 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('${imageURL}/registration/${registrationData.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }} />
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] w-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-[64px] my-6 sm:my-8 md:my-10 lg:my-12 xl:my-[64px] gap-5 sm:gap-6 md:gap-8 ">
                {/* Left Column */}
                <div className="mx-4 md:mx-5 lg:mx-1">
                    <h1 className="text-black font-['Inter'] text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[40px] font-medium leading-tight sm:leading-snug md:leading-normal lg:leading-[44px] xl:leading-[48px] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
                        {stripHTMLTags(registrationData.name)}
                    </h1>

                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                        <p
                            className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-[17px] text-gray-800 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: registrationData.description }}
                        />
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-[17px] text-gray-800 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                        ))}
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 w-full md:w-1/2 grid grid-cols-2 gap-2 md:gap-4">
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
                            text="Hubungi Admin"
                            onClick={handleWhatsApp}
                            hoverColor="#034833"
                            borderColor="#034833"
                            textColor="black"
                            textHoverColor="white"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="mt-4 sm:mt-5 md:mt-0 lg:-mt-6">
                    <Title
                        sizeText="text-base sm:text-lg md:text-xl lg:text-2xl my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8 text-center"
                        title="Jalur PMB Lainnya"
                    />
                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                        {jalurItems}
                    </div>
                    <div className="mt-4 sm:mt-5 md:mt-6 text-center">
                        <SelengkapnyaButton onClick={() => (window.location.href = "/jalur")} />
                    </div>
                </div>
            </div>
            <CTASection />
        </UserLayout>
    );
};

export default JalurDetail;
