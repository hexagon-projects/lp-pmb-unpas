import AnimatedTitle from "../../components/AnimatedTitle"
import ArticleCard from "../../components/artikel/ArticleCard"
import SelengkapnyaButton from "../../components/SelengkapnyaButton"
import Title from "../../components/Title"

const ArtikelSection = ({ data }) => {
    return (
        <div className="w-full flex justify-center items-center px-0">
            <div className={'w-full flex flex-col gap-6 md:gap-6 lg:gap-8 px-5 md:px-10 lg:px-15'}>
                <div className="flex justify-between items-center">
                    <div className="text-left md:text-left">
                        <AnimatedTitle text={'Informasi dan Pengumuman'} />
                    </div>
                    <SelengkapnyaButton onClick={() => window.location.href = '/artikel'} />
                </div>
                <ArticleCard data={data.artikel} />
            </div>
        </div>
    )
}

export default ArtikelSection