import CTABox from "./CTABox"
import MotionWrapper from "./MotionWrapper"

const CTASection = () => {
    return (
        <MotionWrapper type="zoomOut" delay={0.2} className={'w-full flex justify-center items-center'}>
            <div className="w-[90%] md:w-[70%] lg:max-w-4xl">
                <CTABox
                    subtitle={"Penerimaan Mahasiswa Baru"}
<<<<<<< HEAD
                    title={"Pilihan Pasti Untuk Setiap Generasi!"}
=======
                    title={"Pilih Passionmu, Raih Pendidikan Kelas Dunia!"}
>>>>>>> origin/Radh
                    subtitle2={'Jangan Lewatkan Kesempatan, Daftar UNPAS Sekarang!'}
                    textButton={"Daftar Sekarang"}
                />
            </div>
        </MotionWrapper>
    )
}

export default CTASection