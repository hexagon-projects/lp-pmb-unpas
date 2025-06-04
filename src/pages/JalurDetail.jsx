import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
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

const JalurDetail = () => {
    const { slug } = useParams();
    const [jalur, setJalur] = useState([]);
    const [registrationData, setRegistrationData] = useState(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [loading, setLoading] = useState(true);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (url) => {
        window.location.href = url;
    };

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
                    <div className="w-full grid grid-cols-2 gap-2">
                        <Button
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            text="Daftar"
                            bgColor="bg-primary"
                            onClick={() => handleClick(item.link)}
                            css={'w-full text-xs sm:text-sm'}
                        />
                        <div className="flex justify-center font-medium text-xs sm:text-sm items-center rounded-lg sm:rounded-xl py-2 border-2 border-[#c93829]">
                            Selengkapnya
                        </div>
                    </div>
                </div>
            </motion.div>
        ));
    }, [jalur, windowWidth]);

    const shareOnTwitter = () => console.log("Share on Twitter");
    const shareOnFacebook = () => console.log("Share on Facebook");
    const shareOnWhatsApp = () => console.log("Share on WhatsApp");

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
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md bg-gray-100">
                    <img
                        src={`${imageURL}/registration/${registrationData.image}`}
                        alt={registrationData.name}
                        className="w-full h-full max-h-[400px] object-contain object-center"
                        loading="lazy"
                    />
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
                    <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="text-black font-['Inter'] text-xs sm:text-sm font-light leading-[121.38%]">Bagikan:</div>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button onClick={shareOnTwitter} className="p-0 hover:opacity-80 transition-opacity" aria-label="Share on Twitter">
                                <BsTwitterX className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[21px]" />
                            </button>
                            <button onClick={shareOnFacebook} className="p-0 hover:opacity-80 transition-opacity" aria-label="Share on Facebook">
                                <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[19px]" />
                            </button>
                            <button onClick={shareOnWhatsApp} className="p-0 hover:opacity-80 transition-opacity" aria-label="Share on WhatsApp">
                                <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[19px]" />
                            </button>
                        </div>
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
