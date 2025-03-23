import Logo from "../assets/logo.png";

const LogoText = ({ titleColor }) => {
    return (
        <div className="flex lg:hidden items-center gap-3 md:gap-5">
            <img src={Logo} alt="Logo Universitas Pasundan" className="w-10 h-10 md:w-12 md:h-12" loading="lazy" />
            <div>
                <p className={`text-xs lg:text-sm ${titleColor}`}>Penerimaan Mahasiswa Baru</p>
                <span className={`text-lg lg:text-xl ${titleColor} md:text-base font-medium`}>Universitas Pasundan</span>
            </div>
        </div>
    )
}

export default LogoText