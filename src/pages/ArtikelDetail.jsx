// ======== IMPORT DEPENDENCIES & COMPONENTS ===========
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaWhatsapp, FaCopy } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';


import UserLayout from './layouts/UserLayout';
import Title from '../components/Title';
import Text from '../components/Text';
import ArticleCard from '../components/artikel/ArticleCard';
import Loading from '../components/Loading';
import CTASection from '../components/CTASection';
import Button from '../components/Button';

// ======== SERVICES ============
import BeritaService from '../fetching/berita';
import AgendaService from '../fetching/agenda';
import SideBannerService from '../fetching/sidebanner';
import RegistrasiService from '../fetching/registration';
import SelengkapnyaButton from '../components/SelengkapnyaButton';
import ArticleSidebar from '../components/artikel/ArticleSidebar';

// ======== COMPONENT START ============
const ArtikelDetail = () => {
  const { slug } = useParams();
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const onClick = (slug) => {
    window.location.href = `/artikel/${slug}`;
  };
  // ======== STATE ============
  const [artikel, setArtikel] = useState(null);
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [agenda, setAgenda] = useState(null);
  const [jalur, setJalur] = useState([]);
  const [sideBanner, setSideBanner] = useState([]);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  // ======== USE EFFECT - FETCH DATA ============
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artikelRes, beritaRes, agendaRes, bannerRes, jalurRes] = await Promise.all([
          BeritaService.getBeritaBySlug(slug),
          BeritaService.getAllBerita(),
          AgendaService.getAllAgenda(),
          SideBannerService.getAllSideBanner(),
          RegistrasiService.getAllRegistrasi()
        ]);

        setArtikel(artikelRes);
        setBerita(beritaRes);
        setAgenda(agendaRes);
        setSideBanner(bannerRes);
        setJalur(jalurRes || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const articleUrl = window.location.href;

  // ======== BAGIKAN ARTIKEL ============
  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(artikel.title)}`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(artikel.title + ' ' + articleUrl)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl);
    alert('Link artikel telah disalin!');
  };

  const handleClick = (link) => {
    if (link) window.open(link, '_blank');
  };

  // ======== MEMOIZED JALUR COMPONENT ============
  const jalurItems = useMemo(() => (
    jalur.map((item, index) => (
      <motion.div
        key={item.id || index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-[#F3F4F4] w-full p-4 md:p-6 lg:p-8 border border-white shadow-primary/10 shadow-xl rounded-xl md:rounded-2xl lg:rounded-4xl cursor-pointer flex gap-4 items-center"
      >
        <div className="w-full flex flex-col justify-between items-start gap-4">
          <div className="w-full flex flex-col gap-2">
            <Title sizeText="text-sm md:text-base lg:text-lg" title={item.name} fontWeight="font-semibold" />
            <div className="space-y-1">
              <Text sizeMobile="text-xs md:text-xs" text={`Jadwal Pendaftaran: ${item.start_date}`} />
              <Text sizeMobile="text-xs md:text-xs" text={`Pendaftaran ditutup: ${item.end_date}`} />
            </div>
          </div>
          <div className="w-full">
            <Button
              rounded="rounded-xl md:rounded-2xl"
              text="Daftar"
              bgColor="bg-primary"
              onClick={() => handleClick(item.link)}
              css={'w-full'}
              flex=''
            />
          </div>
        </div>
      </motion.div>
    ))
  ), [jalur]);

  // ======== LOADING & ERROR STATE ============
  if (loading) return <Loading />;
  if (!artikel) return <Text text="Artikel tidak ditemukan" className="text-center text-gray-500" />;

  return (
    <UserLayout
      bgLayoutColor="bg-[#F3F4F4]"
      bgColor="bg-[#F3F3F3]"
      position="fixed"
      titleColor="text-black"
      paddingDekstop="md:py-3 md:px-3 lg:py-6 lg:px-6"
      paddingTop="lg:pt-30"
    >
      <Helmet>
        <title>{artikel.title} - Universitas Pasundan</title>
        <meta name="description" content={artikel.content.substring(0, 150) + '...'} />
        <meta name="keywords" content={`Universitas Pasundan, ${artikel.title}, Berita Unpas, Artikel Unpas`} />
        <meta property="og:title" content={artikel.title} />
        <meta property="og:description" content={artikel.content.substring(0, 150) + '...'} />
        <meta property="og:image" content={`${imageURL}/posts/${artikel.image}`} />
        <meta property="og:url" content={articleUrl} />
        <link rel="canonical" href={articleUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-10">
          {/* ==== KONTEN UTAMA ARTIKEL ==== */}
          <div className="w-full lg:w-[70%] space-y-6">
            <Title sizeMobile="text-lg" title={artikel.title} />

            {artikel.image && (
              <div className="w-full h-full lg:h-[70vh]">
                <img
                  src={`${imageURL}/posts/${artikel.image}`}
                  alt={artikel.title}
                  loading="lazy"
                  className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl object-cover"
                />
              </div>
            )}

            <div
              className="w-full prose-sm max-w-none text-justify 
                [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a:hover]:text-blue-800
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2     
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2  
                [&_li]:my-1                                 
              "
              style={{ fontSize: '14px', lineHeight: '1.6' }}
            >
              <div dangerouslySetInnerHTML={{ __html: artikel.content }} />
            </div>

            {/* ==== BAGIKAN & INFO TAMBAHAN ==== */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <div className="space-y-2">
                <Text text={artikel.pub_date} />
                <Text text="Politik" />
              </div>
              <div className="flex items-center gap-2">
                <Text text="Bagikan" />
                <button onClick={shareOnTwitter}><BsTwitterX className="hover:text-blue-500" /></button>
                <button onClick={shareOnFacebook}><FaFacebook className="hover:text-blue-600" /></button>
                <button onClick={shareOnWhatsApp}><FaWhatsapp className="hover:text-green-500" /></button>
                <button onClick={copyToClipboard}><FaCopy className="hover:text-gray-500" /></button>
              </div>
            </div>
          </div>

          {/* ==== SIDEBAR ==== */}
          <div className="w-full lg:w-[25%] space-y-4">
            {/* Side Banner */}
            <div className="py-4 md:py-6 lg:py-0 space-y-4">
              {sideBanner.map((banner) => (
                <a
                  key={banner.id}
                  href={banner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  {banner.image ? (
                    <img
                      src={`${imageURL}/identities/${banner.image}`}
                      alt="Side Banner"
                      className="w-full h-auto rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full rounded-2xl text-center py-12 text-base sm:text-lg text-gray-600">
                      Gambar tidak tersedia
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Artikel Sidebar */}
            {berita.length > 0 && (
              <>
                <Title sizeText="text-base md:text-xl lg:text-2xl" title="Artikel Terkini" />
                <ArticleSidebar data={berita} excludeId={artikel.id} />
              </>
            )}

            {/* Jalur PMB */}
            <Title sizeText="text-base md:text-xl lg:text-2xl" title="Jalur PMB" />
            <div className="space-y-6">{jalurItems.slice(0, 3)}</div>
            <SelengkapnyaButton onClick={() => (window.location.href = "/jalur")} />
          </div>
        </div>

        {/* ==== ARTIKEL TERKAIT ==== */}
        {berita.length > 0 && (
          <div className="space-y-3 md:space-y-6 lg:space-y-8">
            <Title sizeText="text-base md:text-xl lg:text-2xl" title="Artikel Terkait" />

            <ArticleCard
              data={berita
                .filter((item) => item.slug !== artikel.slug)
                .slice(0, 5)}
            />
          </div>
        )}

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default ArtikelDetail;