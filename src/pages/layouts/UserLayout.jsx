import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const UserLayout = ({ bgLayoutColor = 'bg-white',children, position, titleColor, bgColor, margin, shadow, paddingDekstop }) => {
    return (
        <div className={`${bgLayoutColor} overflow-x-hidden`}>
            <div className="relative z-[999]">
                <div className={`${margin}`}>
                    <Navbar position={position} titleColor={titleColor} bgColor={bgColor} shadow={shadow} paddingDekstop={paddingDekstop}/>
                </div>
            </div>

            <div className="w-full mb-10 relative">
                {children}
            </div>
            
            <Footer />
        </div>
    )
}

export default UserLayout