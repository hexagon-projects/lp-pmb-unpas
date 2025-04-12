import { memo, useCallback } from 'react';
import Button from "./Button";
import RichText from "./RichText";
import LogoOutline from "../assets/logo-outline1.png";
import ButtonHover from './ButtonHover';

const JalurCard = memo(({ icon, title, text, link, startDate, endDate, onClick }) => {
    const formatDate = useCallback((dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }, []);

    const handleClick = useCallback(() => {
        window.open(link, "_blank");
    }, [link]);

    return (
        <div
            className="h-full md:h-fit bg-footer text-white shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col justify-between gap-4 cursor-pointer hover:scale-102 duration-500 relative"
            onClick={onClick}
            style={{ willChange: 'transform' }}
        >
            <div className="w-fit bg-transparent py-4 text-text rounded-xl md:rounded-2xl shadow-text/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
                {icon}
            </div>
            <div className="absolute -top-0 left-1/2 md:left-3/5 w-full h-full opacity-25 object-cover">
                <img src={LogoOutline} alt={"Logo Outline Unpas"} loading="lazy" className="h-full object-cover object-left" />
            </div>
            <div className='md:h-16 lg:h-14'>
                <h2 className="text-sm md:text-base lg:text-lg font-bold">{title}</h2>
            </div>
            <RichText content={text} lineclamp={'line-clamp-3 md:line-clamp-4'} textColor='text-white' weight='font-light' />
            <p className="text-xs md:text-sm lg:text-sm font-light">
                Periode {formatDate(startDate)} - {formatDate(endDate)}
            </p>
            <div className="flex gap-4">
                <Button
                    paddingMobile="py-2 px-4"
                    text={'Daftar'}
                    bgColor={'bg-primary'}
                    textColor={'text-black'}
                    onClick={handleClick}
                    border='border-2 border-text'
                    hoverBgColor='hover:border-2 hover:border-text'
                />
                <button
                    onClick={onClick}
                    className="relative overflow-hidden group py-2 px-4 md:px-8 md:py-4 text-white text-right whitespace-nowrap rounded-lg md:rounded-xl lg:rounded-2xl border-white border-2 transition-all duration-500 hover:text-black"
                >
                    <span className="relative z-10 cursor-pointer text-xs md:text-sm lg:text-sm font-bold">Selengkapnya</span>
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out bg-white z-0 "></span>
                </button>
            </div>
        </div>
    );
});

export default JalurCard;