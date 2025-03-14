import Button from "./Button";
import RichText from "./RichText";

const JalurCard = ({ icon, title, text, link, startDate, endDate }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const handleClick = () => {
        window.open(link, "_blank");
    };

    return (
        <div className="bg-gray-100 shadow-md p-4 rounded-md space-y-3">
            <div className="w-fit p-4 bg-primary rounded-md">
                {icon}
            </div>
            <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
            <RichText content={text} />
            <p className="text-xs md:text-sm lg:text-base">
                Periode {formatDate(startDate)} - {formatDate(endDate)}
            </p>
            <Button
                paddingMobile="py-2 px-4"
                text={'Daftar'}
                bgColor={'bg-primary'}
                hoverColor={'bg-primary'}
                textColor={'text-black'}
                onClick={handleClick}
            />
        </div>
    );
};

export default JalurCard;