<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import UserLayout from "./layouts/UserLayout"
import Section1 from "../assets/home/section2.png"
=======
import UserLayout from "./layouts/UserLayout"
import Section1 from "../assets/gedung.jpeg"
import Section2 from "../assets/mhsw.webp"
>>>>>>> 8bbe4dc (First Commit)
import Title from "../components/Title"
import UKMCard from "../components/UkmCard"
import Text from "../components/Text"
import PrestasiCard from "../components/PrestasiCard"
<<<<<<< HEAD
import MotionWrapper from "../components/MotionWrapper"
=======
>>>>>>> 8bbe4dc (First Commit)
import CTASection from "../components/CTASection"
import { useCallback, useEffect, useState } from "react"
import Loading from "../components/Loading"
import OrganisasiService from "../fetching/organisasi"
import PrestasiService from "../fetching/prestasi"
import { X } from "lucide-react"
<<<<<<< HEAD

const Mahasiswa = () => {
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
=======
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"
import SelengkapnyaButton from "../components/SelengkapnyaButton"

const Mahasiswa = () => {
    const [isOpen, setIsOpen] = useState(false);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
>>>>>>> 8bbe4dc (First Commit)
    const [data, setData] = useState({
        ukm: [],
        prestasi: [],
    });

    const fetchData = useCallback(async () => {
        try {
            const [ukm, prestasi] = await Promise.all([
                OrganisasiService.getAllOrganisasi(),
                PrestasiService.getAllPrestasi(),
            ]);

<<<<<<< HEAD
            setData({ ukm, prestasi});
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
=======
            setData({ ukm, prestasi });
        } catch (error) {
            console.error("Error fetching data:", error);
>>>>>>> 8bbe4dc (First Commit)
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

<<<<<<< HEAD
    const {ukm, prestasi} = data;
    const latestPrestasi = prestasi?.slice(0, 6);

    if (loading) {
        return <Loading />
    }

    return (
        <UserLayout position={'block'} margin={'m-6'} shadow={'shadow-md'} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3'}>
            <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
                <MotionWrapper type="zoomIn" delay={0.2} className={'space-y-4 md:space-y-6 lg:space-y-10'}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-left text-gray-500">Mahasiswa <br /> & Alumni</h1>
                    <div className="flex justify-between items-center gap-4">
                        <div className="w-[30%] h-40 md:h-60 lg:h-80">
                            <img src={Section1} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                        <div className="w-[70%] h-40 md:h-60 lg:h-80">
                            <img src={Section1} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper type="fadeInRight" delay={0.2} className={'space-y-4 md:space-y-6 lg:space-y-10'}>
                    <Title title={'Aktivitas Mahasiswa'} />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
=======
    const { ukm, prestasi } = data;
    const HeroPrestasi = prestasi?.slice(0, 1);
    const latestPrestasi = prestasi?.slice(1, 5);

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={0.5}>
            <Helmet>
                <title>Mahasiswa & Alumni - Universitas Pasundan</title>
            </Helmet>
            <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
                <div className={'space-y-4 md:space-y-6 lg:space-y-10'}>
                    <div className="flex h-50 md:h-60 lg:h-[60vh] justify-between items-center gap-4">
                        <div className="w-[30%] h-full">
                            <img src={Section1} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                        <div className="w-[70%] h-full">
                            <img src={Section2} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                    </div>
                    <h1 className="text-[66px] font-bold text-left text-gray-500 font-sora">Mahasiswa & Alumni</h1>
                </div>

                <div className={'space-y-4 md:space-y-6 lg:space-y-10 px-[50px]'}>
                    <Title title={'Aktivitas Mahasiswa'} />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
>>>>>>> 8bbe4dc (First Commit)
                        {ukm.map((ukm) => (
                            <UKMCard key={ukm.id} image={ukm.image} title={ukm.title} text={ukm.description} />
                        ))}
                    </div>
<<<<<<< HEAD
                </MotionWrapper>

                <MotionWrapper type="fadeInLeft" delay={0.2} className={'flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-6 lg:space-y-10'}>
                    <div className="space-y-4 text-center md:text-left">
                        <Title title={'Kisah Alumni'} />
                        <Text text={'Temukan perjalanan inspiratif para alumni yang telah menapaki jalur sukses di dunia Profesional'} />
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="relative w-full aspect-video rrounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer"
=======
                </div>

                <div className={'flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10 px-[50px]'}>
                    <div className="space-y-4 text-center lg:text-left">
                        <Title title={'Kisah Alumni'} />
                        <Text text={'Temukan perjalanan inspiratif para alumni yang telah menapaki jalur sukses di dunia Profesional'} />
                    </div>
                    <div className="w-full h-96 md:h-[20vh] lg:h-[40vh] flex justify-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer"
>>>>>>> 8bbe4dc (First Commit)
                        >
                            <img
                                src="https://img.youtube.com/vi/OYDn-UHfNBM/maxresdefault.jpg"
                                alt="Thumbnail Video"
                                className="w-full h-full object-cover"
                            />
<<<<<<< HEAD
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
=======
                            <div className="absolute inset-0 flex justify-center items-center ">
>>>>>>> 8bbe4dc (First Commit)
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 22v-20l18 10-18 10z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
<<<<<<< HEAD
                </MotionWrapper>

                <MotionWrapper type="zoomIn" delay={0.2} className={'w-full flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-10'}>
=======
                </div>

                <div className={'w-full flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-10 px-[77px]'}>
>>>>>>> 8bbe4dc (First Commit)
                    <div className="space-y-4 text-center">
                        <Title title={'Prestasi'} />
                        <Text text={'Simak kisah inspiratif mereka dan jadilah bagian dari generasi berprestasi berikutnya!'} />
                    </div>
<<<<<<< HEAD
                    <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-20 lg:gap-20">
                        {latestPrestasi.map((prestasi) => (
                            <PrestasiCard key={prestasi.id} image={prestasi.image} title={prestasi.title} text={prestasi.title} />
                        ))}
                    </div>
                </MotionWrapper>
=======
                    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        {/* <div className="w-full">
                            {HeroPrestasi.map((prestasi) => (
                                <motion.div
                                    key={prestasi.id}
                                    className="relative overflow-hidden rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] shadow-black/5 group cursor-pointer h-96 md:h-[50vh] lg:h-[60vh]"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img src={`${imageURL}/prestasis/${prestasi.image}`} alt={prestasi.title} className="w-full h-full object-cover" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 space-y-3">
                                        <Text text={'20 Januari 2025'} weight="font-medium" color="text-white" />
                                        <Text lineClamp="line-clamp-3 md:line-clamp-none" text={prestasi.title} weight="font-bold" color="text-white" />
                                        <div className="px-4 py-2 bg-footer/80 w-fit rounded-lg">
                                            <Text text={'Internasional'} weight="font-bold" color="text-white" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div> */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
                            {latestPrestasi.map((prestasi) => (
                                <PrestasiCard key={prestasi.id} image={prestasi.image} title={prestasi.title} />
                            ))}
                        </div>
                        {/* <div className="w-full flex justify-end">
                            <div className="hover:font-bold cursor-pointer">
                                <SelengkapnyaButton onClick={() => window.location.href = '/prestasi'} color="text-gray-500"/>
                            </div>
                        </div> */}
                    </div>
                </div>
>>>>>>> 8bbe4dc (First Commit)

                <CTASection />

                {isOpen && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50" onClick={() => setIsOpen(false)}>
                        <div className="relative p-4 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
                            >
                                <X size={20} />
                            </button>
<<<<<<< HEAD
                            
=======

>>>>>>> 8bbe4dc (First Commit)
                            <iframe
                                className="w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl"
                                src="https://www.youtube.com/embed/OYDn-UHfNBM"
                                title="Kisah Alumni"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </UserLayout>
    )
}

<<<<<<< HEAD
export default Mahasiswa 
=======
=======
>>>>>>> origin/Budi
import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/gedung.jpeg";
import Section2 from "../assets/mhsw.webp";
import Title from "../components/Title";
import UKMCard from "../components/UkmCard";
import Text from "../components/Text";
import PrestasiCard from "../components/PrestasiCard";
import CTASection from "../components/CTASection";
import { useCallback, useEffect, useState } from "react";
import Loading from "../components/Loading";
import OrganisasiService from "../fetching/organisasi";
import PrestasiService from "../fetching/prestasi";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SelengkapnyaButton from "../components/SelengkapnyaButton";

const Mahasiswa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const imageURL = import.meta.env.VITE_IMAGE_URL;
  const [data, setData] = useState({
    ukm: [],
    prestasi: [],
  });

  const fetchData = useCallback(async () => {
    try {
      const [ukm, prestasi] = await Promise.all([OrganisasiService.getAllOrganisasi(), PrestasiService.getAllPrestasi()]);

      setData({ ukm, prestasi });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { ukm, prestasi } = data;
  const HeroPrestasi = prestasi?.slice(0, 1);
  const latestPrestasi = prestasi?.slice(1, 5);

  return (
    <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={"lg:pt-30"} type={"fadeInUp"} duration={1}>
      <Helmet>
        <title>Mahasiswa & Alumni - Universitas Pasundan</title>
      </Helmet>
      <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
        <div className={"space-y-4 md:space-y-6 lg:space-y-10"}>
          <div className="flex h-50 md:h-60 lg:h-[60vh] justify-between items-center gap-4">
            <div className="w-[30%] h-full">
              <img src={Section1} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
            </div>
            <div className="w-[70%] h-full">
              <img src={Section2} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-left text-gray-500">Mahasiswa & Alumni</h1>
        </div>

        <div className={"space-y-4 md:space-y-6 lg:space-y-10"}>
          <Title title={"Aktivitas Mahasiswa"} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {ukm.map((ukm) => (
              <UKMCard key={ukm.id} image={ukm.image} title={ukm.title} text={ukm.description} />
            ))}
          </div>
        </div>

        <div className={"flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10"}>
          <div className="space-y-4 text-center lg:text-left">
            <Title title={"Kisah Alumni"} />
            <Text text={"Temukan perjalanan inspiratif para alumni yang telah menapaki jalur sukses di dunia Profesional"} />
          </div>
          <div className="w-full h-96 md:h-[50vh] lg:h-[60vh] flex justify-center">
            <button onClick={() => setIsOpen(true)} className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer">
              <img src="https://img.youtube.com/vi/OYDn-UHfNBM/maxresdefault.jpg" alt="Thumbnail Video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex justify-center items-center ">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 22v-20l18 10-18 10z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className={"w-full flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-10"}>
          <div className="space-y-4 text-center">
            <Title title={"Prestasi"} />
            <Text text={"Simak kisah inspiratif mereka dan jadilah bagian dari generasi berprestasi berikutnya!"} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <div className="w-full">
              {HeroPrestasi.map((prestasi) => (
                <motion.div
                  key={prestasi.id}
                  className="relative overflow-hidden rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] shadow-black/5 group cursor-pointer h-96 md:h-[50vh] lg:h-[60vh]"
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={`${imageURL}/prestasis/${prestasi.image}`} alt={prestasi.title} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 space-y-3">
                    <Text text={"20 Januari 2025"} weight="font-medium" color="text-white" />
                    <Text lineClamp="line-clamp-3 md:line-clamp-none" text={prestasi.title} weight="font-bold" color="text-white" />
                    <div className="px-4 py-2 bg-footer/80 w-fit rounded-lg">
                      <Text text={"Internasional"} weight="font-bold" color="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              {latestPrestasi.map((prestasi) => (
                <PrestasiCard key={prestasi.id} image={prestasi.image} title={prestasi.title} />
              ))}
            </div>
            <div className="w-full flex justify-end">
              <div className="hover:font-bold cursor-pointer">
                <SelengkapnyaButton onClick={() => (window.location.href = "/prestasi")} color="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <CTASection />

        <AnimatePresence>
          {isOpen && (
            <motion.div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.3 } }} onClick={() => setIsOpen(false)}>
              <motion.div className="relative p-4 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Mencegah modal tertutup saat tombol diklik
                    setIsOpen(false);
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
                >
                  <X size={20} />
                </button>

                <iframe
                  className="w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl  border-2 border-white"
                  src="https://www.youtube.com/embed/OYDn-UHfNBM"
                  title="Kisah Alumni"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </UserLayout>
  );
};

export default Mahasiswa;
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
export default Mahasiswa 
>>>>>>> 8bbe4dc (First Commit)
=======
=======
import UserLayout from "./layouts/UserLayout"
import Section1 from "../assets/gedung.jpeg"
import Section2 from "../assets/mhsw.webp"
import Title from "../components/Title"
import UKMCard from "../components/UkmCard"
import Text from "../components/Text"
import PrestasiCard from "../components/PrestasiCard"
import CTASection from "../components/CTASection"
import { useCallback, useEffect, useState } from "react"
import Loading from "../components/Loading"
import OrganisasiService from "../fetching/organisasi"
import PrestasiService from "../fetching/prestasi"
import { X } from "lucide-react"
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"
import SelengkapnyaButton from "../components/SelengkapnyaButton"

const Mahasiswa = () => {
    const [isOpen, setIsOpen] = useState(false);
    const imageURL = import.meta.env.VITE_IMAGE_URL;
    const [data, setData] = useState({
        ukm: [],
        prestasi: [],
    });

    const fetchData = useCallback(async () => {
        try {
            const [ukm, prestasi] = await Promise.all([
                OrganisasiService.getAllOrganisasi(),
                PrestasiService.getAllPrestasi(),
            ]);

            setData({ ukm, prestasi });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const { ukm, prestasi } = data;
    const HeroPrestasi = prestasi?.slice(0, 1);
    const latestPrestasi = prestasi?.slice(1, 5);

    return (
        <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-30'} type={'fadeInUp'} duration={0.5}>
            <Helmet>
                <title>Mahasiswa & Alumni - Universitas Pasundan</title>
            </Helmet>
            <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
                <div className={'space-y-4 md:space-y-6 lg:space-y-10'}>
                    <div className="flex h-50 md:h-60 lg:h-[60vh] justify-between items-center gap-4">
                        <div className="w-[30%] h-full">
                            <img src={Section1} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                        <div className="w-[70%] h-full">
                            <img src={Section2} alt="" className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        </div>
                    </div>
                    <h1 className="text-[66px] font-bold text-left text-gray-500 font-sora">Mahasiswa & Alumni</h1>
                </div>

                <div className={'space-y-4 md:space-y-6 lg:space-y-10 px-[50px]'}>
                    <Title title={'Aktivitas Mahasiswa'} />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {ukm.map((ukm) => (
                            <UKMCard key={ukm.id} image={ukm.image} title={ukm.title} text={ukm.description} />
                        ))}
                    </div>
                </div>

                <div className={'flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10 px-[50px]'}>
                    <div className="space-y-4 text-center lg:text-left">
                        <Title title={'Kisah Alumni'} />
                        <Text text={'Temukan perjalanan inspiratif para alumni yang telah menapaki jalur sukses di dunia Profesional'} />
                    </div>
                    <div className="w-full h-96 md:h-[20vh] lg:h-[40vh] flex justify-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="relative w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img
                                src="https://img.youtube.com/vi/OYDn-UHfNBM/maxresdefault.jpg"
                                alt="Thumbnail Video"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center ">
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 22v-20l18 10-18 10z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={'w-full flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-10 px-[77px]'}>
                    <div className="space-y-4 text-center">
                        <Title title={'Prestasi'} />
                        <Text text={'Simak kisah inspiratif mereka dan jadilah bagian dari generasi berprestasi berikutnya!'} />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
                        {/* <div className="w-full">
                            {HeroPrestasi.map((prestasi) => (
                                <motion.div
                                    key={prestasi.id}
                                    className="relative overflow-hidden rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] shadow-black/5 group cursor-pointer h-96 md:h-[50vh] lg:h-[60vh]"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img src={`${imageURL}/prestasis/${prestasi.image}`} alt={prestasi.title} className="w-full h-full object-cover" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 space-y-3">
                                        <Text text={'20 Januari 2025'} weight="font-medium" color="text-white" />
                                        <Text lineClamp="line-clamp-3 md:line-clamp-none" text={prestasi.title} weight="font-bold" color="text-white" />
                                        <div className="px-4 py-2 bg-footer/80 w-fit rounded-lg">
                                            <Text text={'Internasional'} weight="font-bold" color="text-white" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div> */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
                            {latestPrestasi.map((prestasi) => (
                                <PrestasiCard key={prestasi.id} image={prestasi.image} title={prestasi.title} />
                            ))}
                        </div>
                        {/* <div className="w-full flex justify-end">
                            <div className="hover:font-bold cursor-pointer">
                                <SelengkapnyaButton onClick={() => window.location.href = '/prestasi'} color="text-gray-500"/>
                            </div>
                        </div> */}
                    </div>
                </div>

                <CTASection />

                {isOpen && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50" onClick={() => setIsOpen(false)}>
                        <div className="relative p-4 rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg w-[90%] md:w-[70%] lg:w-[50%]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
                            >
                                <X size={20} />
                            </button>

                            <iframe
                                className="w-full aspect-video rounded-lg md:rounded-2xl lg:rounded-4xl"
                                src="https://www.youtube.com/embed/OYDn-UHfNBM"
                                title="Kisah Alumni"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </UserLayout>
    )
}

export default Mahasiswa 
>>>>>>> origin/Radh
>>>>>>> origin/Budi
