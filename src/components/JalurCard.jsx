import Button from "./Button";
import RichText from "./RichText";

<<<<<<< HEAD
<<<<<<< HEAD
const JalurCard = ({ icon, title, text, link, startDate, endDate }) => {
=======
const JalurCard = ({ icon, title, text, link, startDate, endDate, onClick }) => {
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
const JalurCard = ({ icon, title, text, link, startDate, endDate, onClick }) => {
>>>>>>> 8bbe4dc (First Commit)

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
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="bg-gray-100 shadow-md p-4 rounded-md space-y-3">
            <div className="w-fit p-4 bg-primary rounded-md">
=======
        <div className="bg-gray-200 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 rounded-lg md:rounded-2xl lg:rounded-4xl space-y-3 cursor-pointer hover:scale-102 duration-500" onClick={onClick}>
            <div className="w-fit p-4 bg-transparent text-text rounded-lg md:rounded-2xl lg:rounded-4xl">
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
                {icon}
            </div>
            <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
=======
        <div className="flex justify-center items-center flex-col bg-gray-200 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 rounded-lg md:rounded-2xl lg:rounded-4xl space-y-3 cursor-pointer hover:scale-102 duration-500" onClick={onClick}>
            <div className="w-fit p-4 bg-transparent text-text rounded-lg md:rounded-2xl lg:rounded-4xl">
                {icon}
            </div>
            <h2 className="text-[24px] font-semibold text-center">{title}</h2>
>>>>>>> 8bbe4dc (First Commit)
            <RichText content={text} />
            <p className="text-xs md:text-sm lg:text-base">
                Periode {formatDate(startDate)} - {formatDate(endDate)}
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button
                paddingMobile="py-2 px-4"
                text={'Daftar'}
                bgColor={'bg-primary'}
                hoverColor={'bg-primary'}
                textColor={'text-black'}
                onClick={handleClick}
            />
=======
=======
>>>>>>> 8bbe4dc (First Commit)
            <div className="flex gap-4">
                <Button
                    paddingMobile="py-2 px-4"
                    text={'Daftar'}
                    bgColor={'bg-primary'}
                    hoverColor={'hover:bg-primary'}
                    textColor={'text-black'}
                    onClick={handleClick}
                    hoverBgColor={'hover:border-3 hover:border-white/50'}
                />
                <Button
                    paddingMobile="py-2 px-4"
                    text={'Selengkapnya'}
                    bgColor={'bg-gray-500'}
                    hoverColor={'hover:bg-gray-700'}
                    textColor={'text-white'}
                    onClick={onClick}
                    hoverBgColor={'hover:border-3 hover:border-white/50'}
                />
            </div>
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
        </div>
    );
};

export default JalurCard;