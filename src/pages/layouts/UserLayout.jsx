import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import MotionWrapper from "../../components/MotionWrapper";
import FloatingBiaya from "../../components/FloatingBiaya";

const UserLayout = ({ bgLayoutColor = 'bg-white', children, position, titleColor, bgColor, shadow, paddingDekstop, paddingTop, type, duration, display, marginMobile, bottomMobile }) => {

    return (
        <div className={`w-full ${bgLayoutColor} overflow-hidden`}>
            <Navbar position={position} titleColor={titleColor} bgColor={bgColor} shadow={shadow} paddingDekstop={paddingDekstop} display={display}/>

            <MotionWrapper type={type} duration={duration} className={`w-full mb-10 relative ${paddingTop}`} once={true}>
                {children}
            </MotionWrapper>

            <Footer marginMobile={marginMobile}/>

            <FloatingWhatsApp bottomMobile={bottomMobile}/>
            {/* <FloatingBiaya /> */}
        </div>
    );
};

export default UserLayout;