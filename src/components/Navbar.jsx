import { FiHome, FiBook, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Button from './Button'
import { useEffect, useState } from 'react'
import Union from '../assets/navbar.png'

const Navbar = ({ 
  position = 'absolute top-0 left-0', 
  bgColor = 'bg-[#DCDCDC]', 
  titleColor = 'text-gray-700', 
  navbarColor = 'text-gray-700', 
  shadow, 
  paddingDekstop = 'md:px-5 md:py-5 lg:py-5' 
}) => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [color, setColor] = useState(titleColor)
  const [navbarColors, setNavbarColors] = useState(navbarColor)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuItems = [
    { name: 'Beranda', path: '/', icon: <FiHome size={24} aria-hidden="true" /> },
    { name: isMobile ? 'Fakultas' : 'Fakultas & Prodi', path: '/fakultas', icon: <FiBook size={24} aria-hidden="true" /> },
    { name: isMobile ? 'Jalur' : 'Jalur & Jadwal', path: '/jalur', icon: <FiCalendar size={24} aria-hidden="true" /> },
    { name: 'Fasilitas', path: '/fasilitas', icon: <FiMapPin size={24} aria-hidden="true" /> },
    { name: isMobile ? 'Mahasiswa' : 'Mahasiswa & Alumni', path: '/mahasiswa-dan-alumni', icon: <FiUsers size={24} aria-hidden="true" /> },
  ]

  const handleClick = () => {
    window.location.href = 'https://registrasi.unpas.ac.id/register'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
        setColor('text-gray-700')
        setNavbarColors('text-gray-700')
      } else {
        setIsScrolled(false)
        setColor(titleColor)
        setNavbarColors(navbarColor)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="w-full flex justify-center relative z-[999]">
      <nav
        className={`
          w-[90%] lg:w-[97%]
          mt-3 xl:mt-4
          ${position} 
          z-50 
          p-4
          justify-between 
          items-center 
          hidden lg:flex
          rounded-lg md:rounded-4xl
          transition-all duration-500 ease-in-out
          ${shadow}
          ${isScrolled ? 'bg-[#d5d5d5]/80 backdrop-blur-md border-2 border-[#FAFAFA]/50' : `${bgColor} border-2 border-[#DCDCDC]`}
        `}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3 md:gap-4 z-1">
          <img 
            src={Logo} 
            alt="Logo Universitas Pasundan" 
            className="w-10 h-10 md:w-12 md:h-12" 
            loading="lazy" 
            width="48"
            height="48"
          />
          <div className="w-[85%]">
            <p className={`text-xs ${color}`}>Penerimaan Mahasiswa Baru</p>
            <span className={`text-lg md:text-base lg:text-lg font-medium ${color}`}>Universitas Pasundan</span>
          </div>
        </div>

        <img 
          src={Union} 
          alt="" 
          className="absolute top-0 left-0 h-full w-[23%] object-fit" 
          loading="lazy" 
          aria-hidden="true"
        />

        <div className={`hidden xl:w-9/12 md:flex items-center xl:justify-between gap-4 xl:gap-8 font-medium ${navbarColors}`}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              aria-label={item.name}
              className={`
                relative 
                p-4 
                text-center 
                text-xs lg:text-lg
                rounded-lg md:rounded-xl lg:rounded-2xl
                transition-colors duration-500 ease-in-out
                hover:bg-[#c4c4c4] hover:text-[#444444]
                ${location.pathname === item.path ? 'bg-[#D0D0D0] text-[#444444] border-2 border-[#FAFAFA]/50' : ''}
              `}
            >
              {item.name}
            </Link>
          ))}
          <Button
            bgColor="bg-primary"
            textColor="text-gray-700"
            hoverBgColor="hover:border-3 hover:border-white/50"
            text="Daftar"
            aria-label="Daftar mahasiswa baru"
            onClick={handleClick}
            paddingMobile="p-4"
            paddingTablet="py-4 px-8"
            rounded="rounded-lg md:rounded-xl lg:rounded-2xl"
            css="pulsating-button"
          />
        </div>
      </nav>

      <nav 
        className="w-full fixed bottom-0 left-0 z-50 bg-white p-3 flex justify-between items-center lg:hidden"
        aria-label="Mobile navigation"
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            aria-label={item.name}
            className={`
              w-full 
              relative 
              flex 
              flex-col 
              items-center 
              p-2 
              justify-between 
              rounded-full
              transition-colors duration-500 ease-in-out
              ${location.pathname === item.path ? 'text-[#C73929]' : 'text-black'}
            `}
          >
            <div className="relative" aria-hidden="true">
              {item.icon}
            </div>
            <span
              className={`
                text-xs 
                mt-2
                ${location.pathname === item.path ? 'text-[#C73929] font-bold' : ''}
              `}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Navbar