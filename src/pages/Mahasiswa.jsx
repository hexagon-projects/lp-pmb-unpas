import UserLayout from "./layouts/UserLayout"
import Section1 from "../assets/home/section2.png"
import Title from "../components/Title"
import UKMCard from "../components/UkmCard"
import Text from "../components/Text"
import PrestasiCard from "../components/PrestasiCard"
import MotionWrapper from "../components/MotionWrapper"
import CTASection from "../components/CTASection"
import { useCallback, useEffect, useState } from "react"
import Loading from "../components/Loading"
import OrganisasiService from "../fetching/organisasi"
import PrestasiService from "../fetching/prestasi"
import { X } from "lucide-react"

const Mahasiswa = () => {
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
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

            setData({ ukm, prestasi});
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
                        {ukm.map((ukm) => (
                            <UKMCard key={ukm.id} image={ukm.image} title={ukm.title} text={ukm.description} />
                        ))}
                    </div>
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
                        >
                            <img
                                src="https://img.youtube.com/vi/OYDn-UHfNBM/maxresdefault.jpg"
                                alt="Thumbnail Video"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 22v-20l18 10-18 10z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </MotionWrapper>

                <MotionWrapper type="zoomIn" delay={0.2} className={'w-full flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-10'}>
                    <div className="space-y-4 text-center">
                        <Title title={'Prestasi'} />
                        <Text text={'Simak kisah inspiratif mereka dan jadilah bagian dari generasi berprestasi berikutnya!'} />
                    </div>
                    <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-20 lg:gap-20">
                        {latestPrestasi.map((prestasi) => (
                            <PrestasiCard key={prestasi.id} image={prestasi.image} title={prestasi.title} text={prestasi.title} />
                        ))}
                    </div>
                </MotionWrapper>

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