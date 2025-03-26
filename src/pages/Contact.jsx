import { useEffect, useState } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
import FakultasService from "../fetching/fakultas";
import Loading from "../components/Loading";
import GedungCard from "../components/fasilitas/GedungCard";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";
import Mahasiswa from "../assets/mhsw2.webp";

const Contact = () => {
  // const [loading, setLoading] = useState(true)
  const [fakultas, setFakultas] = useState([]);

  const fetchFakultas = async () => {
    try {
      const response = await FakultasService.getAllFakultas();
      setFakultas(response);
      // setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFakultas();
  }, []);

  // if (loading) {
  //     return <Loading />
  // }

  return (
    <UserLayout
      bgLayoutColor="bg-[#F3F3F3]"
      bgColor={"bg-[#F3F3F3]"}
      position={"fixed"}
      margin={""}
      titleColor={"text-black"}
      paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
      paddingTop={"lg:pt-20"}
      type={"fadeInUp"}
      duration={0.5}
    >
      {/* <UserLayout bgLayoutColor="bg-gray-100" position={"fixed"} margin={""} titleColor={"text-black"} paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}> */}
      <Helmet>
        <title>Kontak - Universitas Pasundan</title>
      </Helmet>
      <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
        <div
          className="relative w-full h-[70vh] p-4 md:px-10 lg:px-12 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${Mahasiswa})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
          {/* <div className="relative w-full h-[70vh] p-4 md:px-10 lg:px-12 rounded-lg md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${Mahasiswa})` }}>

                    <div className="absolute inset-0 bg-black/30 rounded-lg md:rounded-2xl lg:rounded-4xl"></div> */}

          <div className="relative space-y-3 md:space-y-4 z-10 text-center">
            <Text text={"Contact"} sizeText="text-[24px]" color="text-black" />
            <Title
              title={"Get in touch with us!"}
              sizeText="text-[34px]"
              color="text-primary"
            />
            <Text
              text={"Reach out for inquiries, support, or collaborations."}
              sizeText="text-[24px]"
              color="text-white"
            />

            <div className="flex justify-center items-center gap-4">
              <Button
                text={"Hubungi Kami"}
                bgColor={"bg-primary"}
                hoverBgColor={"hover:bg-primary/70"}
                textColor={"text-black"}
              />
              <Button
                text={"Permintaan Konsultan"}
                bgColor={"bg-black"}
                hoverBgColor={"hover:bg-black/70"}
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 bg-primary rounded-4xl p-6 md:p-8">
          {/* Kolom Kiri - Informasi Kontak */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-black p-6">
            <div className="space-y-4">
              <h2 className="text-[40px] font-bold">Informasi Kontak</h2>
              <p className="text-base opacity-90">
                Let’s make your vision a reality. Contact us today and let’s
                discuss how we can help you innovate and grow.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-[20px]">Contact Info</p>
              </div>
              <div className="flex items-center gap-2">
                <span>☒</span>
                <p>@unpas.ac.id</p>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <p>+20106182399</p>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <p>Location</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Formulir */}
          <div className="w-full md:w-1/2 bg-white/70 rounded-4xl p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Jadilah Bagian Dari Unpas
              </h3>
              <p className="text-gray-600 text-sm">
                Break the ice! Let us help you out
              </p>
            </div>

            <form className="space-y-2">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Nama*
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-b-2 border-black focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Nomor telepon*
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border-b-2 border-black focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border-b-2 border-black focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Deskripsi minat
                </label>
                <textarea className="w-full p-3 border-b-2 border-black focus:outline-none focus:border-primary h-16" />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-black/80 text-white font-medium py-3 px-6 rounded-4xl transition-colors"
              >
                Submit
              </button>
            </form>
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
        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Contact;
