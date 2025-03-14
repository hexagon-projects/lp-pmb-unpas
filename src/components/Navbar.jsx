import { FiHome, FiBook, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = ({ position = "absolute top-0 left-0", bgColor = 'bg-transparent', titleColor = 'text-white', shadow, paddingDekstop = 'md:px-10 md:py-10 lg:py-5' }) => {
    const location = useLocation();
    const menuItems = [
        { name: "Beranda", path: "/", icon: <FiHome size={24} /> },
        { name: "Fakultas & Prodi", path: "/fakultas", icon: <FiBook size={24} /> },
        { name: "Jalur & Jadwal", path: "/jalur", icon: <FiCalendar size={24} /> },
        { name: "Fasilitas", path: "/fasilitas", icon: <FiMapPin size={24} /> },
        { name: "Mahasiswa & Alumni", path: "/mahasiswa-dan-alumni", icon: <FiUsers size={24} /> },
    ];

    return (
        <>
            <nav className={`${position} z-50 w-full ${bgColor} py-8 px-5 ${paddingDekstop} justify-between items-center hidden lg:flex ${shadow} rounded-xl overflow-hidden`}>
                <div className="flex items-center gap-3 md:gap-5">
                    <img src={Logo} alt="Logo Universitas Pasundan" className="w-10 h-10 md:w-12 md:h-12" loading="lazy" />
                    <div>
                        <p className={`text-xs lg:text-sm ${titleColor}`}>Penerimaan Mahasiswa Baru</p>
                        <span className={`text-lg lg:text-xl ${titleColor} md:text-base font-medium`}>Universitas Pasundan</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-700 font-medium">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.path} className="text-xs lg:text-sm hover:text-blue-600 transition-colors">{item.name}</a>
                    ))}
                    <Button bgColor={'bg-secondary'} hoverColor={'hover:bg-secondary-hover'} text={'Daftar'} />
                </div>
            </nav>

            <nav className="fixed bottom-0 left-0 z-50 w-full bg-white/90 p-3 flex justify-between items-center rounded-t-2xl shadow-lg lg:hidden">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.path}
                        aria-label={item.name}
                        className={`flex flex-col items-center px-4 py-2 rounded-full transition-colors ${location.pathname === item.path ? "bg-primary px-3 py-2" : "text-black"
                            }`}
                    >
                        {item.icon}
                        {location.pathname === item.path && <span className="text-xs mt-1">{item.name}</span>}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default Navbar;
