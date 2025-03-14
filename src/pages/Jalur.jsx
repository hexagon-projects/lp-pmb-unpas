import UserLayout from "./layouts/UserLayout";
import Section1 from "../assets/jalur/section1.png";
import JalurCard from "../components/JalurCard";
import { TfiAnnouncement } from "react-icons/tfi";
import MotionWrapper from "../components/MotionWrapper";
import CTASection from "../components/CTASection";
import { useEffect, useState } from "react";
import RegistrasiService from "../fetching/registration";
import Loading from "../components/Loading";

const Jalur = () => {
    const [jalur, setJalur] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchJalur = async () => {
        try {
            const response = await RegistrasiService.getAllRegistrasi()
            setLoading(false)
            setJalur(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchJalur()
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <UserLayout position={'block'} margin={'m-6'} shadow={'shadow-md'} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3'}>
            <div className="relative p-4 md:px-10 lg:px-12 space-y-12 md:space-y-16 lg:space-y-24">
                <MotionWrapper type="scaleUp" delay={0.2} className={'w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4 lg:gap-20'}>
                    <div className="w-full">
                        <img src={Section1} alt="" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="w-full lg:w-[70%] flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start gap-2 md:gap-4 lg:gap-6">
                        <h2 className="text-4xl md:text-6xl lg:text-9xl text-green-800 font-bold">{jalur.length}</h2>
                        <div className="space-y-1 md:space-y-2 lg:space-y-4">
                            <h3 className="text-xs md:text-base lg:text-3xl font-semibold text-gray-800">Jalur Masuk</h3>
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-red-500/60">
                                Universitas Pasundan.
                            </h2>
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper type="zoomOut" delay={0.2} className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'}>
                    {jalur.map((item, index) => (
                        <JalurCard
                            key={index}
                            icon={<TfiAnnouncement size={20} />}
                            title={item.name}
                            text={item.description}
                            link={item.link}
                            startDate={item.start_date}
                            endDate={item.end_date}
                        />
                    ))}
                </MotionWrapper>

                <MotionWrapper type="zoomOut" delay={0.2} className={'w-full h-[50vh] bg-gray-200  rounded-md'}>

                </MotionWrapper>

                <CTASection />
            </div>
        </UserLayout>
    );
};

export default Jalur;