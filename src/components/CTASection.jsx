import CTABox from "./CTABox"
import MotionWrapper from "./MotionWrapper"

const CTASection = () => {
    return (
        <MotionWrapper type="zoomOut" delay={0.2} className={' flex justify-center items-center p-4 md:px-10 lg:px-12'}>
            <CTABox
                subtitle={"Penerimaan Mahasiswa Baru"}
                title={"Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!"}
                textButton={"Daftar Sekarang"}
            />
        </MotionWrapper>
    )
}

export default CTASection