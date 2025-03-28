import { useEffect, useState } from "react"
import Button from "../components/Button"
import Text from "../components/Text"
import Title from "../components/Title"
import UserLayout from "./layouts/UserLayout"
import FakultasService from "../fetching/fakultas"
import Loading from "../components/Loading"
import GedungCard from "../components/fasilitas/GedungCard"
import CTASection from "../components/CTASection"
import { Helmet } from "react-helmet-async"
import Mahasiswa from "../assets/mhsw2.webp"

const Contact = () => {
    // const [loading, setLoading] = useState(true)
    const [fakultas, setFakultas] = useState([])

    const fetchFakultas = async () => {
        try {
            const response = await FakultasService.getAllFakultas()
            setFakultas(response)
            // setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchFakultas()
    }, [])

    // if (loading) {
    //     return <Loading />
    // }

    return (
        <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}>
            <Helmet>
                <title>Kontak - Universitas Pasundan</title>
            </Helmet>
            <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
                <div className="relative w-full h-[70vh] p-4 md:px-10 lg:px-12 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${Mahasiswa})` }}>

                    <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>

                    <div className="relative space-y-3 md:space-y-4 z-10 text-center">
                        <Text text={'Kontak'} />
                        <Title title={'Hubungi Kami'} />
                        <Text text={'Hubungi kami untuk pertanyaan, dukungan, atau kolaborasi.'} />

                        <div className="flex justify-center items-center gap-4">
                            <Button text={'Hubungi Kami'} bgColor={'bg-primary'} hoverBgColor={'hover:border-3 hover:border-white/50'} textColor={'text-black'} />
                            <Button text={'Permintaan Konsultan'} bgColor={'bg-transparent border border-black'} hoverColor={'hover:bg-primary'} hoverBgColor={'hover:border-3 hover:border-white/50'} textColor={'text-black'} />
                        </div>
                    </div>
                </div>

                <div type="zoomIn" delay={0.2}>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
                        {fakultas.map((gedung, index) => (
                            <GedungCard
                                key={index}
                                title={gedung.name}
                                text={gedung.subtitle}
                                mapUrl={gedung.map}
                            />
                        ))}
                    </div>
                </div>

                <div className={"w-full text-xs md:text-sm lg:text-base flex flex-col md:flex-row gap-2 md:gap-0"}>
                    <div className="w-full flex flex-col justify-between items-start p-4 md:p-6 lg:p-10 rounded-lg bg-primary text-black">
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold">Informasi Kontak</h2>
                            <p className="text-xs md:text-sm lg:text-base text-black">Ada pertanyaan? Chat dengan kami!</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs md:text-sm lg:text-base font-medium">(+62) 812 2218 1823</p>
                            <p className="text-xs md:text-sm lg:text-base font-medium">contact@hexagon.co.id</p>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="w-full space-y-6 p-4 md:p-6 lg:p-10 bg-white rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block font-medium">Nama Depan</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border-b focus:outline-none focus:ring-b-2 focus:ring-primary"
                                    placeholder=" "
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-medium">Nama Belakang</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border-b focus:outline-none focus:ring-b-2 focus:ring-primary"
                                    placeholder=" "
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block font-medium">Nomor Handphone</label>
                            <input
                                type="tel"
                                className="w-full p-2 border-b focus:outline-none focus:ring-b-2 focus:ring-primary"
                                defaultValue="+62 012 3456 789"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block font-medium">Pesan</label>
                            <textarea
                                className="w-full p-2 border-b h-32 focus:outline-none focus:ring-b-2 focus:ring-primary"
                                placeholder="Tulis pesan anda disini..."
                            />
                        </div>
                        <div className="w-full flex justify-end md:justify-start">
                            <Button
                                text={'Kirim Pesan'}
                                bgColor={'bg-primary'}
                                hoverColor={'hover:bg-yellow-600'}
                                textColor={'text-black'}
                                className="w-full md:w-auto"
                            />
                        </div>
                    </div>
                </div>

                <CTASection />
            </div>
        </UserLayout>
    )
}

export default Contact