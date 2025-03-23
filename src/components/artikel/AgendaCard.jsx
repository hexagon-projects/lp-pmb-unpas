import Button from "../Button";
import RichText from "../RichText";

const AgendaCard = ({ data }) => {
    const imageURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
                <div key={item.id} className="cursor-pointer flex flex-col justify-between p-4 bg-white rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] space-y-3">
                    <div className="space-y-3">
                        <img src={`${imageURL}/agendas/${item.image}`} alt={item.title} className="w-full h-48 object-cover rounded-lg md:rounded-2xl lg:rounded-4xl" />
                        <div className="bg-white p-4 rounded-b-md space-y-3">
                            <h3 className="font-semibold text-sm md:text-base lg:text-lg">{item.title}</h3>
                            <RichText lineclamp={'line-clamp-3'} sizeText="text-xs md:text-sm" content={item.content} />
                            <div className="text-gray-700 text-xs md:text-sm">
                                <p><strong>Tanggal:</strong> {item.start_date} - {item.end_date}</p>
                                <p><strong>Waktu:</strong> {item.start_time} - {item.end_time}</p>
                                <p><strong>Lokasi:</strong> {item.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit">
                        <Button
                            text={'Daftar'}
                            bgColor={'bg-primary'}
                            onClick={() => item.register_link && window.open(item.register_link, "_blank")}
                            hoverBgColor={'hover:border-3 hover:border-white/50'}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AgendaCard;