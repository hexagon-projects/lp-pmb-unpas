import Text from "../Text"

const infoBoxData = [
    {
        icon: "🏫",
        text: "Fakultas & Program Studi",
        link: "/fakultas",
    },
    {
        icon: "🎓",
        text: "Jadwal Periode & Jalur PMB",
        link: "/jalur",
    },
    {
        icon: "📅",
        text: "Informasi Biaya",
        link: "https://www.unpas.ac.id/jadwal-akademik",
    },
    {
        icon: "📢",
        text: "Informasi S2 dan S3",
        link: "https://www.unpas.ac.id/pengumuman",
    },
];

const InfoBox = () => {
    return (
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
        </div>
    );
};

export default InfoBox