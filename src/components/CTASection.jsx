import CTABox from "./CTABox"
import MotionWrapper from "./MotionWrapper"

const CTASection = ({ onClick = 'https://registrasi.unpas.ac.id/register', color, border, subtitle = 'Penerimaan Mahasiswa Baru', title = 'Pilih Passionmu, Raih Pendidikan Kelas Dunia!' }) => {
    return (
        <MotionWrapper type="zoomOut" delay={0.2} className={'w-full h-fit flex justify-center items-center'}>
            <div className="w-[90%] md:w-[70%] lg:max-w-4xl">
                <CTABox
                    subtitle={subtitle}
                    title={title}
                    subtitle2={'Jangan Lewatkan Kesempatan, Daftar UNPAS Sekarang!'}
                    textButton={"Daftar Sekarang"}
                    onClick={onClick}
                    color={color}
                    border={border}
                />
            </div>
        </MotionWrapper>
    )
}

export default CTASection