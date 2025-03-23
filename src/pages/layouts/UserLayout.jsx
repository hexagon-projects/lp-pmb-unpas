<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 8bbe4dc (First Commit)
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { IoIosArrowUp } from "react-icons/io";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import MotionWrapper from "../../components/MotionWrapper";

const UserLayout = ({ bgLayoutColor = 'bg-white', children, position, titleColor, bgColor, margin, shadow, paddingDekstop, paddingTop, type, duration }) => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    return (
        <div className={`w-full ${bgLayoutColor} overflow-x-hidden`}>
            <Navbar position={position} titleColor={titleColor} bgColor={bgColor} shadow={shadow} paddingDekstop={paddingDekstop} />

            <MotionWrapper type={type} duration={duration} className={`w-full mb-10 relative ${paddingTop}`} once='true'>
                {children}
            </MotionWrapper>

            <Footer />

            <FloatingWhatsApp />

            {/* {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 lg:bottom-6 right-6 z-999999 bg-primary text-black p-3 rounded-full shadow-lg transition duration-300 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <IoIosArrowUp size={26} />
                </button>
            )} */}
        </div>
    );
};

<<<<<<< HEAD
export default UserLayout;
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
export default UserLayout;
>>>>>>> 8bbe4dc (First Commit)
