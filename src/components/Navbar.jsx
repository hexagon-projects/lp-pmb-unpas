import { FiHome, FiBook, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "./Button";
import { useEffect, useState } from "react";
import Union from "../../public/Union.svg";

const Navbar = ({ position = "absolute top-0 left-0", bgColor = "bg-[#DCDCDC]", titleColor = "text-gray-700", navbarColor = "text-gray-700", shadow, paddingDekstop = "md:px-5 md:py-5 lg:py-5" }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [color, setColor] = useState(titleColor);
  const [navbarColors, setNavbarColors] = useState(navbarColor);
  const menuItems = [
    { name: "Beranda", path: "/", icon: <FiHome size={24} /> },
    { name: "Fakultas & Prodi", path: "/fakultas", icon: <FiBook size={24} /> },
    { name: "Jalur & Jadwal", path: "/jalur", icon: <FiCalendar size={24} /> },
    { name: "Fasilitas", path: "/fasilitas", icon: <FiMapPin size={24} /> },
    { name: "Mahasiswa & Alumni", path: "/mahasiswa-dan-alumni", icon: <FiUsers size={24} /> },
  ];

  const handleClick = () => {
    window.location.href = "https://situ2.unpas.ac.id/spmbfront/";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setColor("text-gray-700");
        setNavbarColors("text-gray-700");
      } else {
        setIsScrolled(false);
        setColor(titleColor);
        setNavbarColors(navbarColor);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex justify-center relative z-[999]">
      <nav
        className={`w-[90%] xl:w-[93.5%] mt-3 xl:mt-4 ${
            isScrolled
            ? "bg-[#d5d5d5]/80 backdrop-blur-md border-2 border-[#FAFAFA]/50"
            : "bg-[#DCDCDC] border-2 border-[#DCDCDC]"
        } ${position} z-50 ${bgColor} py-3 px-5 justify-between items-center hidden lg:flex ${shadow} rounded-lg md:rounded-4xl transition-all duration-500 ease-in-out`}
        >

        <div className="flex items-center gap-3 md:gap-5 z-1">
          <img src={Logo} alt="Logo Universitas Pasundan" className="w-10 h-10 md:w-12 md:h-12" loading="lazy" />
          <div>
            <p className={`text-xs lg:text-xs ${color}`}>Penerimaan Mahasiswa Baru</p>
            <span className={`text-lg lg:text-lg ${color} md:text-base font-medium`}>Universitas Pasundan</span>
          </div>
        </div>
        <img src={Union} alt="Union" className="absolute top-0 -left-1 h-full object-cover" loading="lazy" />

        <div className={`hidden md:flex items-center gap-4 lg:gap-8 ${navbarColors} font-medium`}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`relative p-4 text-xs lg:text-lg transition-colors duration-500 ease-in-out hover:bg-[#c4c4c4] hover:text-[#444444] rounded-lg md:rounded-xl lg:rounded-2xl ${
                location.pathname === item.path ? "bg-[#D0D0D0] text-[#444444] border-2 border-[#FAFAFA]/50" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            bgColor={"bg-primary"}
            textColor={"text-gray-700"}
            hoverBgColor={"hover:border-3 hover:border-white/50"}
            text={"Daftar"}
            onClick={() => handleClick()}
            paddingMobile="p-4"
            paddingTablet="py-4 px-8"
            rounded="rounded-lg md:rounded-xl lg:rounded-2xl"
          />
        </div>
      </nav>

      <nav className="w-full fixed bottom-0 left-0 z-50 bg-white p-3 flex justify-between items-center lg:hidden">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            aria-label={item.name}
            className={`w-full relative flex flex-col items-center p-2 justify-between rounded-full transition-colors duration-500 ease-in-out ${location.pathname === item.path ? "bg-footer text-white" : "text-black"}`}
          >
            <div className={`relative`}>{item.icon}</div>
            <span className={`text-xs mt-2 ${location.pathname === item.path ? "text-white font-bold" : ""}`}>{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
