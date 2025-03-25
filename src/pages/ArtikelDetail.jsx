import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaWhatsapp, FaCopy } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

import UserLayout from "./layouts/UserLayout";
import Title from "../components/Title";
import Text from "../components/Text";
import ArticleCard from "../components/artikel/ArticleCard";
import RichText from "../components/RichText";
import Loading from "../components/Loading";

import BeritaService from "../fetching/berita";
import CTASection from "../components/CTASection";

const ArtikelDetail = () => {
    const { slug } = useParams();
    const [artikel, setArtikel] = useState(null);
    const [berita, setBerita] = useState([]);
    const [loading, setLoading] = useState(true);
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [artikelResponse, beritaResponse] = await Promise.all([
                    BeritaService.getBeritaBySlug(slug),
                    BeritaService.getAllBerita()
                ]);
                setArtikel(artikelResponse);
                setBerita(beritaResponse);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    const articleUrl = window.location.href;

    const shareOnTwitter = () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(artikel.title)}`;
        window.open(url, "_blank");
    };

    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
        window.open(url, "_blank");
    };

    const shareOnWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(artikel.title + " " + articleUrl)}`;
        window.open(url, "_blank");
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(articleUrl);
        alert("Link artikel telah disalin!");
    };

    if (loading) return <Loading />;
    if (!artikel) return <Text text="Artikel tidak ditemukan" className="text-center text-gray-500" />;

    return (
        <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} >
        {/* <UserLayout position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} > */}
            <Helmet>
                <title>{artikel.title} - Universitas Pasundan</title>
                <meta
                    name="description"
                    content={artikel.content.substring(0, 150) + "..."}
                />
                <meta
                    name="keywords"
                    content={`Universitas Pasundan, ${artikel.title}, Berita Unpas, Artikel Unpas`}
                />
                <meta property="og:title" content={artikel.title} />
                <meta
                    property="og:description"
                    content={artikel.content.substring(0, 150) + "..."}
                />
                <meta property="og:image" content={`${imageURL}/posts/${artikel.image}`} />
                <meta property="og:url" content={articleUrl} />
                <link rel="canonical" href={articleUrl} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full lg:w-[85%] space-y-8 md:space-y-12 lg:space-y-20">
                        <div className="w-full flex flex-col justify-between items-start gap-4 md:gap-6 lg:gap-10">
                            <Title sizeMobile="text-lg" title={artikel.title} />
                        </div>

                        {artikel.image && (
                            <div className="w-full h-full lg:h-[50vh]">
                                <img
                                    src={`${imageURL}/posts/${artikel.image}`}
                                    alt={artikel.title}
                                    loading="lazy"
                                    className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl object-cover"
                                />
                            </div>
                        )}

                        <div className="w-full">
                            <RichText content={artikel.content} />
                        </div>

                        <div className="w-fit flex flex-col justify-between items-start gap-6 md:gap-10 lg:gap-10">
                            <div className="space-y-2">
                                <Text text={artikel.pub_date} />
                                <Text text="Politik" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Text text="Bagikan" />
                                <button onClick={shareOnTwitter} aria-label="Bagikan ke Twitter">
                                    <BsTwitterX className="cursor-pointer hover:text-blue-500" />
                                </button>
                                <button onClick={shareOnFacebook} aria-label="Bagikan ke Facebook">
                                    <FaFacebook className="cursor-pointer hover:text-blue-600" />
                                </button>
                                <button onClick={shareOnWhatsApp} aria-label="Bagikan ke WhatsApp">
                                    <FaWhatsapp className="cursor-pointer hover:text-green-500" />
                                </button>
                                <button onClick={copyToClipboard} aria-label="Salin link artikel">
                                    <FaCopy className="cursor-pointer hover:text-gray-500" />
                                </button>
                            </div>
                        </div>
                        {berita.length > 0 && (
                            <div className="w-full space-y-3 md:space-y-4">
                                <div className="flex justify-between">
                                    <Title sizeMobile="text-base" title="Artikel Terkait" />
                                </div>
                                <ArticleCard data={berita.slice(0, 4)} />
                            </div>
                        )}
                    </div>
                </div>


                <CTASection />
            </div>
        </UserLayout>
    );
};

export default ArtikelDetail;
