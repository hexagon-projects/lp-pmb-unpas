import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import MotionWrapper from "../../components/MotionWrapper";

const UserLayout = ({ bgLayoutColor = 'bg-white', children, position, titleColor, bgColor, shadow, paddingDekstop, paddingTop, type, duration }) => {
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

    return (
        <div className={`w-full ${bgLayoutColor} overflow-hidden`}>
            <Navbar position={position} titleColor={titleColor} bgColor={bgColor} shadow={shadow} paddingDekstop={paddingDekstop} />

            <MotionWrapper type={type} duration={duration} className={`w-full mb-10 relative ${paddingTop}`} once='true'>
                {children}
            </MotionWrapper>

            <Footer />

            <FloatingWhatsApp />
        </div>
    );
};

export default UserLayout;