import { FiHome, FiBook, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "./Button";
import { useEffect, useState } from "react";
import Substract from '../assets/navbar.png'

const Navbar = ({ position = "absolute top-0 left-0", bgColor = 'bg-transparent', titleColor = 'text-gray-700', navbarColor = 'text-gray-700', shadow, paddingDekstop = '' }) => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [color, setColor] = useState(titleColor)
    const [navbarColors, setNavbarColors] = useState(navbarColor)
    const menuItems = [
        { name: "Beranda", path: "/", icon: <FiHome size={24} /> },
        { name: "Fakultas", path: "/fakultas", icon: <FiBook size={24} /> },
        { name: "Jalur", path: "/jalur", icon: <FiCalendar size={24} /> },
        { name: "Fasilitas", path: "/fasilitas", icon: <FiMapPin size={24} /> },
        { name: "Mahasiswa", path: "/mahasiswa-dan-alumni", icon: <FiUsers size={24} /> },
    ];

    const handleClick = () => {
        window.location.href = "https://situ2.unpas.ac.id/spmbfront/";
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
                setColor('text-gray-700')
                setNavbarColors('text-gray-700')
            } else {
                setIsScrolled(false);
                setColor(titleColor);
                setNavbarColors(navbarColor);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full flex justify-center relative z-[999]">
            <nav className={`w-[95%] xl:w-[95%] mt-3 xl:mt-4 ${isScrolled ? 'border-2 border-white bg-gray-200' : 'bg-gray-200 border-2 border-transparent'} ${position} z-50 ${bgColor} items-center hidden lg:flex ${shadow} rounded-xl md:rounded-2xl lg:rounded-4xl transition-all duration-500 ease-in-out`}>
                <div className="w-[28%] xl:w-[20%]">
                    <div className="flex items-center gap-3 md:gap-4 bg-contain bg-no-repeat p-5 rounded-xl md:rounded-2xl lg:rounded-4xl" style={{ backgroundImage: `url(${Substract})` }}>
                        <img src={Logo} alt="Logo Universitas Pasundan" className="w-10 h-10 md:w-12 md:h-12" loading="lazy" />
                        <div>
                            <p className={`text-xs lg:text-xs ${color}`}>Penerimaan Mahasiswa Baru</p>
                            <span className={`text-lg lg:text-lg ${color} md:text-base font-medium`}>Universitas Pasundan</span>
                        </div>
                    </div>
                    <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="w-[80%] flex justify-between gap-4 items-center p-2 pr-5">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`relative font-medium text-center text-black/80 p-4 text-xs md:text-sm lg:text-base transition duration-500 ease-in-out hover:bg-navbar-active hover:text-black/80 rounded-lg md:rounded-xl lg:rounded-2xl ${location.pathname === item.path ? " bg-navbar-active text-black/80 border border-white" : "text-gray-700/50 border-2 border-transparent"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button css={'pulsating-button'} bgColor={'bg-primary'} textColor={'text-gray-700'} hoverBgColor={'hover:border-3 hover:border-white/50'} text={'Daftar'} onClick={() => handleClick()} rounded="rounded-lg md:rounded-xl lg:rounded-2xl" padding="p-4" />
                </div>
            </nav>

            <nav className="w-full fixed bottom-0 left-0 z-50 bg-white p-3 flex justify-between items-center lg:hidden">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.path}
                        aria-label={item.name}
                        className={`w-full relative flex flex-col items-center p-2 justify-between rounded-full transition-colors duration-500 ease-in-out ${location.pathname === item.path ? "text-text" : "text-black"
                            }`}
                    >
                        <div className={`relative`}>
                            {item.icon}
                        </div>
                        <span className={`text-xs mt-2 ${location.pathname === item.path ? "text-text font-bold" : ""}`}>
                            {item.name}
                        </span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
