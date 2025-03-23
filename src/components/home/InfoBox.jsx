import Text from "../Text"
<<<<<<< HEAD

const infoBoxData = [
    {
        icon: "🏫",
        text: "Fakultas & Program Studi",
        link: "/fakultas",
    },
    {
        icon: "🎓",
=======
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
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
        text: "Jadwal Periode & Jalur PMB",
        link: "/jalur",
    },
    {
<<<<<<< HEAD
        icon: "📅",
        text: "Informasi Biaya",
        link: "https://www.unpas.ac.id/jadwal-akademik",
    },
    {
        icon: "📢",
        text: "Informasi S2 dan S3",
        link: "https://www.unpas.ac.id/pengumuman",
=======
        icon: Fakultas,
        text: "Fakultas & Program Studi",
        link: "/fakultas",
    },
    {
        icon: Biaya,
        text: "Informasi Biaya",
        link: "/",
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
    },
];

const InfoBox = () => {
    return (
<<<<<<< HEAD
        <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 p-4 justify-center items-center rounded-lg text-center">
            {infoBoxData.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="text-3xl">{item.icon}</div>
                    <Text text={item.text}/>
                </a>
            ))}
=======
        <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] flex justify-center items-center mt-10 md:mt-14 lg:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 justify-items-center items-center rounded-lg text-center">
                {infoBoxData.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="bg-gray-100 w-[165px] h-30 md:h-40 lg:h-[162px] flex flex-col justify-around items-center p-4 bg-gray-[#F0F0F0] shadow-sm drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg md:rounded-2xl lg:rounded-4xl transition hover:shadow-lg hover:shadow-text/20 hover:shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="p-2 md:p-3 bg-gray-100 rounded-full">
                            <div className="text-sm md:text-base lg:text-lg text-text">
                                <img src={item.icon} alt={item.text} />
                            </div>
                        </div>
                        <div className="w-[100%] md:w-[70%] lg:w-full">
                            <Text sizeMobile="lg:text-sm" text={item.text} lineClamp={'w-full break-words whitespace-pre-line'} />
                        </div>
                    </a>
                ))}
            </div>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
        </div>
    );
};

export default InfoBox