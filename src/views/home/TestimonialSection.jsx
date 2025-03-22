import SelengkapnyaButton from "../../components/SelengkapnyaButton"
import TestimonialSlider from "../../components/TestimonialSlider"
import Text from "../../components/Text"
import Title from "../../components/Title"

const TestimonialSection = ({ data, displayDekstop = 'md:flex-row' }) => {
    return (
        <div className={`w-full flex flex-col ${displayDekstop} gap-4 md:gap-6 lg:gap-10`}>
            <div className="w-full text-left space-y-2 md:space-y-3 md:text-left md:w-1/2 p-4 md:px-10 lg:px-12">
                <div>
                    <Text text={'Universitas Pasundan'} color="text-text" weight={'font-bold'} />
                    <Title title={'Tentang Unpas'} />
                </div>
                <Text text={'Dengar langsung pengalaman mahasiswa dan alumni Universitas Pasundan tentang bagaimana kampus ini membantu mereka berkembang dan mencapai impian.'} />
                <SelengkapnyaButton onClick={() => window.location.href = '/mitra'}/>
            </div>
            <TestimonialSlider data={data.testimonials} arrowColor={'text-text'} />
        </div>
    )
}

export default TestimonialSection