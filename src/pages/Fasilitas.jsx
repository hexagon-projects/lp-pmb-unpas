import { useEffect, useState } from "react";
import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/gedung.jpeg";
import Kampus1 from "../assets/lengkong.webp";
import Kampus2 from "../assets/tamsar.webp";
import Kampus3 from "../assets/setiabudi.webp";
import Kampus4 from "../assets/sumatra.webp";
import CTASection from "../components/CTASection";
import Title from "../components/Title";
import GedungCard from "../components/fasilitas/GedungCard";
import FasilitasCard from "../components/FasilitasCard";
import FasilitasService from "../fetching/fasilitas";
import { Helmet } from "react-helmet-async";
import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";
import MotionWrapper from "../components/MotionWrapper";

const gedungKampus = [
  {
    title: "Kampus I",
    text: "Jl. Lengkong Besar No. 68, Lengkong, Kota Bandung, Jawa Barat 40261",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.679754665035!2d107.61065321511158!3d-6.928828669747662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e882631fcd63%3A0x9ebc4814bed741a5!2sJl.%20Lengkong%20Besar%20No.%2068%2C%20Lengkong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040261%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1455945707154",
    image: Kampus1,
  },
  {
    title: "Kampus II",
    text: "Jl. Tamansari No. 6-8, Tamansari, Kota Bandung, Jawa Barat",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.881429342535!2d107.60619231511143!3d-6.904779869493546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e646497c416b%3A0xd00d7d33274e7e5!2sUniversitas%20Pasundan%20Kampus%20II!5e0!3m2!1sen!2sid!4v1455945783003",
    image: Kampus2,
  },
  {
    title: "Kampus IV",
    text: "Jl. Dr. Setiabudi No. 193, Sukasari, Kota Bandung, Jawa Barat 40154",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.201541136127!2d107.59163381511111!3d-6.866435869090333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6be24afd717%3A0x1df5f84ebfd966ab!2sJl.%20Dr.%20Setiabudi%20No.%20193%2C%20Sukasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040153%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1455945979207",
    image: Kampus3,
  },
  {
    title: "Kampus V",
    text: "Jl. Sumatera No. 41, Bandung",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8257921758927!2d107.59163381511111!3d-6.904779869493546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6be24afd717%3A0x1df5f84ebfd966ab!2sJl.%20Sumatera%20No.%2041%2C%20Bandung!5e0!3m2!1sen!2sid!4v1455945979207",
    image: Kampus4,
  },
];

const Fasilitas = () => {
  const [bento1, setBento1] = useState([]);
  const [bento2, setBento2] = useState([]);
  const [bento3, setBento3] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchFasilitas = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await FasilitasService.getAllFasilitas();
        if (isMounted) {
          const sliceBento1 = response?.slice(0, 2);
          const sliceBento2 = response?.slice(2, 3);
          const sliceBento3 = response?.slice(3, 5);
          setBento1(sliceBento1);
          setBento2(sliceBento2);
          setBento3(sliceBento3);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFasilitas();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <UserLayout bgLayoutColor="bg-[#F3F4F4]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'}>
      <Helmet>
        <title>Fasilitas Kampus - Universitas Pasundan</title>
        <meta name="description" content="Temukan fasilitas unggulan dan gedung kampus Universitas Pasundan yang mendukung proses belajar mengajar dengan teknologi modern dan nyaman." />
        <meta name="keywords" content="fasilitas unpas, kampus unpas, universitas pasundan, perpustakaan unpas, laboratorium unpas, gedung kuliah unpas" />
        <meta property="og:title" content="Fasilitas Kampus - Universitas Pasundan" />
        <meta property="og:description" content="Lihat fasilitas modern dan lengkap yang tersedia di berbagai kampus Universitas Pasundan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pmb.unpas.ac.id/fasilitas" />
        <meta property="og:image" content={Section1} />
        <meta property="og:site_name" content="Universitas Pasundan" />
        <link rel="canonical" href="https://pmb.unpas.ac.id/fasilitas" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Fasilitas Kampus - Universitas Pasundan",
            "description": "Informasi lengkap fasilitas kampus Universitas Pasundan",
            "url": "https://pmb.unpas.ac.id/fasilitas",
            "publisher": {
              "@type": "Organization",
              "name": "Universitas Pasundan",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pmb.unpas.ac.id/logo.webp"
              }
            },
            "hasPart": [
              {
                "@type": "CollegeOrUniversity",
                "name": "Universitas Pasundan",
                "image": gedungKampus.map(g => g.image),
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bandung",
                  "addressRegion": "Jawa Barat",
                  "addressCountry": "Indonesia"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="relative p-5 md:px-10 lg:px-15 space-y-8 md:space-y-10 lg:space-y-12">
        <MotionWrapper type={'fadeInUp'} duration={1} once className="space-y-8 md:space-y-10 lg:space-y-12">
          <div className="w-full h-42 md:h-60 lg:h-[65vh] relative">
            <img
              src={Section1}
              alt="Gedung Universitas"
              className="w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-4xl"
              onLoad={() => setIsImageLoaded(true)}
              loading="lazy"
            />
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gray-200 rounded-xl md:rounded-2xl lg:rounded-4xl" />
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-[50%]">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold whitespace-none break-words text-gray-500">
                Fasilitas
              </h2>
            </div>
            <div className="w-full md:w-[50%]">
              <p className="text-sm md:text-base lg:text-lg break-words">
                Fasilitas pendukung kami dirancang untuk memberikan
                kenyamanan, kemudahan, dan efisiensi dalam setiap aktivitas{" "}
                <b>Mahasiswa</b>
              </p>
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
        </MotionWrapper>

        <div className="w-full space-y-4 md:space-y-6 lg:space-y-10 lg:px-[50px]">
          <div className="flex items-start">
            <AnimatedTitle text={"Gedung Kampus"} />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {gedungKampus?.map((gedung, index) => (
              <GedungCard
                key={index}
                title={gedung.title}
                text={gedung.text}
                mapUrl={gedung.mapUrl}
                image={gedung.image}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-full space-y-4 md:space-y-6 lg:space-y-10 lg:pt-8">
          <div className="w-full flex flex-col items-start md:items-center">
            <AnimatedTitle alignText="text-left md:text-center" justify="justify-center" text={"Fasilitas Unggulan"} />
          </div>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[bento1, bento2, bento3].map((bento, bentoIndex) => (
              <div
                key={bentoIndex}
                className="w-full h-full grid grid-cols-1 gap-4 md:gap-6 lg:gap-8"
              >
                {bento?.map((item, index) => (
                  <FasilitasCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    height={bentoIndex === 1 ? "h-full" : "h-64"}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Fasilitas;