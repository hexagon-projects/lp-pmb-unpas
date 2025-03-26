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

const gedungKampus = [
    {
        title: "Kampus I",
        text: "Jl. Lengkong Besar No. 68, Lengkong, Kota Bandung, Jawa Barat 40261",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.679754665035!2d107.61065321511158!3d-6.928828669747662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e882631fcd63%3A0x9ebc4814bed741a5!2sJl.%20Lengkong%20Besar%20No.%2068%2C%20Lengkong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040261%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1455945707154",
        image:Kampus1
    },
    {
        title: "Kampus II",
        text: "Jl. Tamansari No. 6-8, Tamansari, Kota Bandung, Jawa Barat",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.881429342535!2d107.60619231511143!3d-6.904779869493546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e646497c416b%3A0xd00d7d33274e7e5!2sUniversitas%20Pasundan%20Kampus%20II!5e0!3m2!1sen!2sid!4v1455945783003",
        image:Kampus2
    },
    // {
    //     title: "Kampus III",
    //     text: "Jl. Wartawan IV No. 22, Lengkong, Kota Bandung, Jawa Barat 40264",
    //     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5736518442513!2d107.62911671511185!3d-6.941447669881396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e865b768caed%3A0x6c6c86a095731e4f!2sJl.%20Wartawan%20IV%20No.%2022%2C%20Lengkong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040264%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1455945911421",
    //  image:Kampus
    // },
    {
        title: "Kampus IV",
        text: "Jl. Dr. Setiabudi No. 193, Sukasari, Kota Bandung, Jawa Barat 40154",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.201541136127!2d107.59163381511111!3d-6.866435869090333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6be24afd717%3A0x1df5f84ebfd966ab!2sJl.%20Dr.%20Setiabudi%20No.%20193%2C%20Sukasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040153%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1455945979207",
        image:Kampus3
    },
    {
        title: "Kampus V",
        text: "Jl. Sumatera No. 41, Bandung",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8257921758927!2d107.59163381511111!3d-6.904779869493546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6be24afd717%3A0x1df5f84ebfd966ab!2sJl.%20Sumatera%20No.%2041%2C%20Bandung!5e0!3m2!1sen!2sid!4v1455945979207",
        image:Kampus4
    },
];

const Fasilitas = () => {
  const [fasilitas, setFasilitas] = useState([]);
  const [bento1, setBento1] = useState([]);
  const [bento2, setBento2] = useState([]);
  const [bento3, setBento3] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const fetchFasilitas = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await FasilitasService.getAllFasilitas(`?timestamp=${timestamp}`);
        if (isMounted) {
          const slice = response?.slice(0, 5);
          const sliceBento1 = response?.slice(0, 2);
          const sliceBento2 = response?.slice(2, 3);
          const sliceBento3 = response?.slice(3, 5);
          setFasilitas(slice);
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

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <UserLayout
      position={"fixed"}
      margin={""}
      titleColor={"text-black"}
      paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
      paddingTop={"lg:pt-30"}
      type={'fadeInUp'}
      duration={0.5}
      bgLayoutColor="bg-[#F3F3F3]"
      bgColor={'bg-[#F3F3F3]'}
    >
      <Helmet>
        <title>Fasilitas - Universitas Pasundan</title>
      </Helmet>
      <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
        <div className={"space-y-4 md:space-y-6 lg:space-y-10"}>
          {/* Bagian Gambar dengan Fade In */}
          <div className="w-full h-42 md:h-60 lg:h-[65vh] relative">
            <img
              src={Section1}
              alt="Gedung Universitas Pasundan"
              className={`w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-4xl transition-opacity duration-500 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              loading="lazy"
            />
            {/* Skeleton Loading */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl md:rounded-2xl lg:rounded-4xl" />
            )}
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="w-[50%]">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold whitespace-none break-words text-gray-500">
                Fasilitas
              </h2>
            </div>
            <div className="w-[50%]">
              <p className="text-sm md:text-base lg:text-lg break-words">
                Fasilitas pendukung kami dirancang untuk memberikan kenyamanan, kemudahan, dan efisiensi dalam setiap aktivitas{' '}
                <b>Mahasiswa</b>
              </p>
            </div>
          </div>
          <div className="w-full flex md:hidden">
            <Button text={'Daftar Sekarang'} bgColor={'bg-primary'} border={'w-full justify-center'} />
          </div>
        </div>

        {/* Bagian Gedung Kampus */}
        <div className={"space-y-4 md:space-y-6 lg:space-y-10 p-[50px]"}>
          <Title sizeMobile="text-xl" title={"Gedung Kampus"} />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
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

        {/* Bagian Fasilitas Unggulan */}
        <div className={"w-full h-full space-y-4 md:space-y-6 lg:space-y-10"}>
          <Title sizeMobile="text-xl" title={"Fasilitas Unggulan"} />
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="w-full h-full grid grid-cols-1 lg:grid-lols-2 gap-4 ">
              {bento1?.map((item, index) => (
                <FasilitasCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  height="h-52 md:h-64 lg:h-80"
                />
              ))}
            </div>
            <div className="w-full h-full">
              {bento2?.map((item, index) => (
                <FasilitasCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  height="h-52 md:h-64 lg:h-full"
                />
              ))}
            </div>
            <div className="w-full h-full grid grid-cols-1 lg:grid-lols-2 gap-4">
              {bento3?.map((item, index) => (
                <FasilitasCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  height="h-52 md:h-64 lg:h-80"
                />
              ))}
            </div>
          </div>
        </div>

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Fasilitas;