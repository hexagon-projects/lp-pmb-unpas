
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import UserLayout from "../layouts/UserLayout";

const Usm = () => {

    return (
        <UserLayout
            bgLayoutColor="bg-[#F3F4F4]"
            bgColor={"bg-[#F3F3F3]"}
            position={"fixed"}
            margin={""}
            titleColor={"text-black"}
            paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
            paddingTop={"lg:pt-30"}
            type={"fadeInUp"}
            duration={0.5}
            display={'hidden'}
            bottomMobile={'bottom-6'}
            marginMobile={'m-0'}
        >
            {/* HeroSection */}
            <div className='p-[20px] md:p-[40px] lg:px-[20px] lg:py-[60px]'>
            </div>

            {/* AboutSection */}
            <div className="p-[20px] md:p-[40px] lg:px-[160px] lg:py-[60px]">

            </div>

            {/* SiapaSection */}
            <div className="p-[20px] md:p-[40px] lg:px-[160px] lg:py-[60px]">

            </div>

            {/* NilaiSection */}
            <div className="p-[0px] md:p-[40px] lg:px-[34px] lg:py-[60px]">

            </div>

            {/* KeuntunganSection */}
            <div className="p-[20px] md:p-[40px] lg:px-[160px] lg:py-[60px]">

            </div>

            {/* DokumenSection */}
            <div className="p-[20px] md:p-[40px] lg:px-[160px] lg:py-[60px]">

            </div>
            <Countdown />
            <CTASection />
        </UserLayout>
    )
}

export default Usm