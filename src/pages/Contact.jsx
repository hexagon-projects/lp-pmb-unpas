import { useEffect, useState } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Title from "../components/Title";
import UserLayout from "./layouts/UserLayout";
import FakultasService from "../fetching/fakultas";
import { MdOutlineEmail } from "react-icons/md";
import GedungCard from "../components/fasilitas/GedungCard";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";
import Mahasiswa from "../assets/mhsw2.webp";

const Contact = () => {
  const [fakultas, setFakultas] = useState([]);

  const fetchFakultas = async () => {
    try {
      const response = await FakultasService.getAllFakultas();
      setFakultas(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFakultas();
  }, []);

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
      <Helmet>
        <title>Kontak - Universitas Pasundan</title>
      </Helmet>
      <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-16">
        <div
          className="relative w-full h-[50vh] lg:h-[70vh] p-5 md:px-10 lg:px-15 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${Mahasiswa})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
          <div className="relative space-y-3 md:space-y-4 z-10 text-center">
            <Text text={"Kontak"} sizeText="text-sm md:text-base lg:text-[24px]" color="text-black" />
            <Title
              title={"Hubungi Kami!"}
              sizeText="text-[34px]"
              color="text-primary"
            />
            <Text
              text={"Silahkan hubungi kami untuk pertanyaan, dukungan, atau kolaborasi"}
              sizeText="text-sm md:text-base lg:text-[24px]"
              color="text-white"
            />

            <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
              <Button
                text={"Hubungi Kami"}
                paddingMobile="px-4 py-4"
                bgColor={"bg-primary"}
                hoverBgColor={"hover:bg-primary/70"}
                textColor={"text-black"}
                border="border-2 border-text"
              />
              <Button
                text={"Permintaan Konsultan"}
                paddingMobile="px-4 py-4"
                bgColor={"bg-white/30"}
                hoverBgColor={"hover:bg-black/70"}
                textColor={"text-white"}
                border="border-2 border-footer"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-col-reverse gap-8 md:gap-12 lg:gap-16">
          <div className="w-full flex justify-center items-center">
            <div className="w-full md:max-w-4xl lg:max-w-6xl flex flex-col md:flex-row gap-6 md:gap-8 bg-gradient-to-r from-primary to-[#BCAF3F] rounded-xl md:rounded-2xl lg:rounded-4xl p-4 md:p-8">
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-black p-0 lg:p-6">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl lg:text-[40px] font-bold">Informasi Kontak</h2>
                  <p className="text-sm opacity-90">
                    Silahkan kontak pada email dan no telp dibawah ini jika kamu punya pertanyaan.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-sm md:text-base flex items-center gap-2">
                    <span><MdOutlineEmail /></span>
                    <p>@unpas.ac.id</p>
                  </div>
                  <div className="text-sm md:text-base flex items-center gap-2">
                    <span>📞</span>
                    <p>+62811960193</p>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan - Formulir */}
              <div className="w-full md:w-1/2 bg-white/70 rounded-xl md:rounded-2xl lg:rounded-4xl p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl lg:text-[40px] font-bold text-gray-800">
                    Jadilah Bagian Dari Unpas
                  </h3>
                </div>

                <form className="space-y-2">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Nama*
                    </label>
                    <input
                      type="text"
                      className="w-full p-1 md:p-2 border-b-2 border-black focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Nomor telepon*
                    </label>
                    <input
                      type="tel"
                      className="w-full p-1 md:p-2 border-b-2 border-black focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-1 md:p-2 border-b-2 border-black focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Deskripsi minat
                    </label>
                    <textarea className="w-full p-1 md:p-2 border-b-2 border-black focus:outline-none focus:border-primary  " />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-black/80 text-white font-medium py-3 px-6 rounded-lg md:rounded-xl lg:rounded-2xl transition-colors"
                  >
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div type="zoomIn" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {fakultas?.map((gedung, index) => (
                <GedungCard
                  key={index}
                  title={gedung.name}
                  text={gedung.subtitle}
                  mapUrl={gedung.map}
                  imagedb={gedung.image1}
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

export default Contact;
