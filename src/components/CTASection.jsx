import CTABox from "./CTABox"
import MotionWrapper from "./MotionWrapper"

const CTASection = () => {
    return (
<<<<<<< HEAD
        <MotionWrapper type="zoomOut" delay={0.2} className={' flex justify-center items-center p-4 md:px-10 lg:px-12'}>
            <CTABox
                subtitle={"Penerimaan Mahasiswa Baru"}
                title={"Pilih Passionmu, Raih Pendidikan Kelas Dunia! Jangan Lewatkan Kesempatan, Daftar di UNPAS Sekarang!"}
                textButton={"Daftar Sekarang"}
            />
=======
        <MotionWrapper type="zoomOut" delay={0.2} className={'w-full flex justify-center items-center'}>
            <div className="w-[90%] md:w-[70%] lg:max-w-4xl">
                <CTABox
                    subtitle={"Penerimaan Mahasiswa Baru"}
                    title={"Pilihan Pasti Untuk Setiap Generasi!"}
                    subtitle2={'Jangan Lewatkan Kesempatan, Daftar UNPAS Sekarang!'}
                    textButton={"Daftar Sekarang"}
                />
            </div>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
        </MotionWrapper>
    )
}

export default CTASection