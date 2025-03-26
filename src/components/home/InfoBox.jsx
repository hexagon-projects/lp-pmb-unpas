import Text from "../Text"
import Fakultas from '../../assets/icon/fakultas.svg'
import Jalur from '../../assets/icon/jadwal.svg'
import Guru from '../../assets/icon/informasi.svg'
import Biaya from '../../assets/icon/biaya.svg'

const infoBoxData = [
    {
        icon: Guru,
        text: "Informasi S2 dan S3",
        link: "/",
    },
    {
        icon: Jalur,
        text: "Jadwal Periode & Jalur PMB",
        link: "/jalur",
    },
    {
        icon: Fakultas,
        text: "Fakultas & Program Studi",
        link: "/fakultas",
    },
    {
        icon: Biaya,
        text: "Informasi Biaya",
        link: "/",
    },
];

const InfoBox = () => {
    return (
        <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex justify-center items-center mt-10 md:mt-14 lg:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 justify-items-center items-center rounded-lg text-center">
                {infoBoxData.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="bg-gray-100 w-full h-30 md:h-40 lg:h-[162px] flex flex-col justify-around items-center p-4 bg-gray-[#F0F0F0] shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-xl md:rounded-2xl lg:rounded-4xl transition hover:shadow-lg hover:shadow-text/20 hover:shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)]"
                        // className="bg-gray-100 w-[165px] h-30 md:h-40 lg:h-[162px] flex flex-col justify-around items-center p-4 bg-gray-[#F0F0F0] shadow-sm drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl transition hover:shadow-lg hover:shadow-text/20 hover:shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="p-2 md:p-3 bg-gray-100 rounded-full">
                            <div className="text-sm md:text-base lg:text-lg text-text">
                                <img src={item.icon} alt={item.text} />
                            </div>
                        </div>
                        <div className="w-[100%] md:w-[70%] lg:w-full">
                            <Text sizeMobile="text-xs md:text-sm" text={item.text} lineClamp={'w-full break-words whitespace-pre-line'} />
                            {/* <Text sizeMobile="lg:text-sm" text={item.text} lineClamp={'w-full break-words whitespace-pre-line'} /> */}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default InfoBox